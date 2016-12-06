//To run this file:
// open a ruby/git/node command prompt
// cd to the folder containing this file
// npm install 
// node generate.js 

var FORCE_GENERATE_ALL = true;                                     //Master switch to generate all RAML

var fs = require('fs');                                             //For reading files
var walk = require('walk');                                         // For reading all files in a folder
var raml2obj = require('raml2obj');                                 //For reading in RAML
var raml2md = require('./js/generator.js');                         //Custom class used to inject helpers (functions) into the nunjucks files
var pluralize = require('pluralize');                               //Used to pluralize resource names in generated links file
var qPromise = require('q');                                        //Promise management

var POSTMAN_FOLDER = "postman//";                                   //Used to set the folder RAML will be read from
var PACKAGE_FILE = "package.json";                                  //Location of package file
var FOLDER_DIR = "raml/";                                           //Location of the RAML files, should always be raml/
var SAVE_LOCATION = "source/api/"; /*"pages/api/";*/                //Location of where the MD files will be generated **THIS FOLDER MUST EXIST OR THE SCRIPT WILL FAIL SILENTLY***
var TEMPLATES_LOCATION = "templates/";                              //Location of nunjucks templates
var GENERATED_RAML_LOCATION = "postman/";                           //Location of generated RAML files
var GENERATED_LINKS_LOCATION = "source/_includes/generated_linkrefs.html"; //Location of where the resource links will be generated
/*var DEFAULT_TEMPLATE = "default.nunjucks";*/                          //Default nunjucks template
var DEFAULT_TEMPLATE = "test.nunjucks";                          //Default nunjucks template
var RAML_TEMPLATE = "templates/raml.nunjucks";                      //Used for generating postman-importable RAML in postman folder

var filePaths = [];                                                 //Holds list of RAML files to be generated
var RESOURCES = [];                                                 //Holds list of ALL resources across ALL RAML (excluding hidden resources) for cross-referencing
var LINK_RESOURCES = [];                                            //Holds resource names for link generator
var LINK_RESOURCE_NAMES = [];                                       //Used for collision detection
var GENERATED_LINK_RESOURCES = [];                                  //Used for replacing {{}} values in generated postman

//This contains a list of templates, every API that uses a custom template must have an entry here in the format: "FILENAME": { "template": "template/FILENAME.nunjucks"}
var CUSTOM_TEMPLATES = {
    "shipping-options": { "template": "shipping-options" }, 
    "cmi": { "template": "soap" }, 
    "vmi": { "template": "soap" }, 
    "assets": { "template": "default-no-samples" },
    "rq-data-connect": { "template": "rq-data-connect" }, 
    "rq-data-connect-bridge": { "template": "rq-data-connect" },
    "assets": { "template": "default-no-samples" },
    "envysion-reports": { "template": "rq-data-connect" },
    "chatterspot-reports": { "template": "rq-data-connect" },
    "customized-reports": { "template": "rq-data-connect" },
    "statflo-reports": { "template": "rq-data-connect" },
    "sellpro-reports": { "template": "rq-data-connect" },
    "billing":  { "template": "rq-data-connect" },
    "commerce": { "template": "rq-data-connect" },
    "facebook-offline-conversions-reports": { "template": "rq-data-connect" },   
    "rdc-customers": { "template": "rq-data-connect" },
    "rdc-commission": { "template": "rq-data-connect" },
    "rdc-employees": { "template": "rq-data-connect" },
    "rdc-finance": { "template": "rq-data-connect" },
    "rdc-import": { "template": "rq-data-connect" },    
    "rdc-inventory": { "template": "rdc-test" },
    "rdc-performance-metrix": { "template": "rdc-test" },
    "rdc-sales": { "template": "rq-data-connect" },
    "rdc-utilities": { "template": "rq-data-connect" }
};

//Walk through the FOLDER_DIR to find files
var walker  = walk.walk(FOLDER_DIR, { followLinks: false });

walker.on('file', function(root, stat, next) {    

    //Only generate files that have been changed 
    var modifiedTime = convertDateToUTC(stat.mtime); 
    var currentTime = convertDateToUTC(new Date()); 
    var generateFile = modifiedTime >= currentTime;

    //Force generate every file
    if(FORCE_GENERATE_ALL) {
        generateFile = true;
    } 

    filePaths.push({ "name": root + '/' + stat.name, "generate": generateFile });

    next();
});

//Now that we are done reading files, process them
walker.on('end', function() {
    readFiles();
});

function readFiles() {

    //Get a list of files to read
    var readFileList = [];

    //Create the list of files, including sub paths for edge cases
    for(var i = 0; i < filePaths.length; i++) {
        readFileList.push(filePaths[i].name);
    }

    var promises = [];

    //Iterate through list of files, process each one and create a list of promises
    //This is required because raml2obj is async
    for(var i = 0; i < readFileList.length; i++) {    
        promises.push(raml2obj.parse(readFileList[i]));
    }

    //Once all RAML have been read into memory as objects
    qPromise.allSettled(promises).then(function(results) {

        //Process file
        for(var i = 0; i < results.length; i++) {

            //Only continue if the RAML was sucessfully processed
            if(results[i].state == "fulfilled")
            {
                //Get the actual RAML
                var ramlObj = results[i].value;

                //List of schemas (resources) and name
                var schemas = ramlObj.schemas;
                var apiName = ramlObj.title;

                //Build up API Object, used for cross referencing in RAML
                var crossRefObj = {};
                crossRefObj.name = apiName;
                crossRefObj.resources = [];

                //Loop through every Schema in the RAML ("resource" in API docs)
                //This section creates generated_linkrefs file which allows us to do {{Customer}} in RAML instead of <a href="/api/customers#customer">Customer</a>
                for(var j = 0; j < schemas.length; j++) {
                    var schema = schemas[j];
                    var schemaString = JSON.stringify(schema);  //Get the schema Obj into memory

                    //Extract resource name
                    var resourceName = schemaString.substring(schemaString.indexOf("{") + 2, schemaString.indexOf(":") - 1).trim();
                    var schemaObj = JSON.parse(schema[resourceName]);

                    crossRefObj.resources.push( { "name" : resourceName, "schema": schemaObj});

                    //List of resources needed for later generation
                    if(schemaObj.exclude != 'true') {

                        //Is this a collision? DENOTE THAT (used for situations where Resources have the same name)
                        //Example: Address and user-manager_Address
                        if(LINK_RESOURCE_NAMES.indexOf(resourceName) > -1) {
                            LINK_RESOURCES.push(resourceName + "!%" + apiName);     
                        } else {
                            LINK_RESOURCES.push(resourceName + "%" + apiName);
                        }

                        LINK_RESOURCE_NAMES.push(resourceName);
                    }
                }

                RESOURCES.push(crossRefObj);                
            }
            else 
            {
                console.log("RAML file " + results[i].reason.problem_mark.name +  " failed validation");
            }
        }

        writeResourceLinks();   //Write generated_linkrefs
        processFiles();         //Write RAML to markdown
    });
}

//This function will create the generated_linkrefs file, a series of generated entries for each NON HIDDEN resource, including a plural copy.
function writeResourceLinks() {
    
    var fileContents = "";

    LINK_RESOURCES.sort();

    for(var index = 0; index < LINK_RESOURCES.length; index++) {

        var apiName = LINK_RESOURCES[index].split("%")[1].replace(/ /g, "-");
        var resourceName = LINK_RESOURCES[index].split("%")[0];
        var collided =  resourceName.indexOf("!") > -1;
        var captureName, captureNamePlural, captureUrl, captureUrlPlural;

        resourceName = resourceName.replace("!", "");

        //Get the resource name and plural of it
        var resourceNameLowerCase = resourceName.toLowerCase();
        var resourceNamePlural = pluralize(resourceName);
            
        //Deal with namespace collissions
        if(collided) {
            captureName = apiName + "_" + resourceName;
            captureNamePlural = apiName + "_" + resourceNamePlural;
        } else {
            captureName = resourceName;
            captureNamePlural = resourceNamePlural;
        }

        //Format actual HTML to be used
        captureUrl = "<a href='http://developers.iqmetrix.com/api/" + apiName + "/#" + resourceNameLowerCase + "'>" + resourceName + "</a>";
        fileContents += "{% capture " + captureName + " %}" + captureUrl + "{% endcapture %}\n";
        GENERATED_LINK_RESOURCES.push({ "name": captureName, "url": captureUrl });

        //Dont add plural if they're identical
        if(captureName != captureNamePlural) {
            captureUrlPlural = "<a href='http://developers.iqmetrix.com/api/" + apiName + "/#" + resourceNameLowerCase + "'>" + resourceNamePlural + "</a>";            
            fileContents += "{% capture " + captureNamePlural + " %}" + captureUrlPlural + "{% endcapture %}\n";
            GENERATED_LINK_RESOURCES.push({ "name": captureNamePlural,  "url": captureUrlPlural });
        }
    }

    fs.writeFileSync(GENERATED_LINKS_LOCATION, fileContents);
}

//Read each RAML file to be generated
function processFiles() {


    for (var i = 0; i < filePaths.length; i++) {

        //Generate it?
        if(filePaths[i].generate) {

            //Pull out real file name and get template
            var fileName = extractFileNameFromPath( filePaths[i].name);
            var template = getTemplateForFile(fileName);
            
            //Write markdown and postman
            writeFile(fileName, template);
            writeGeneratedRaml(fileName, RAML_TEMPLATE);  
        }
    }
}

function getTemplateForFile(fileName) {
    var template = TEMPLATES_LOCATION + DEFAULT_TEMPLATE;
    var customTemplatePos = CUSTOM_TEMPLATES[fileName];

    if(customTemplatePos) {
        template = TEMPLATES_LOCATION + customTemplatePos.template + ".nunjucks";
   }

    return template;
}

function extractFileNameFromPath(filePath) {
    return filePath.substring(filePath.indexOf("//") + 2, filePath.indexOf("."));
}

//Replaces values in {{}} notation RAML with HTML as defined in constant linkrefs files
function replaceConstants(result) {

    result = result.toString()

    for(var i = 0; i < GENERATED_LINK_RESOURCES.length; i++) {
        var link = "{{" + GENERATED_LINK_RESOURCES[i].name + "}}";
        var content = GENERATED_LINK_RESOURCES[i].url;

        var regex = new RegExp(link, "g");

        result = result.replace(regex, content);
    }

    //Because nunjucks is stupid
    result = result.replace("%7B","{");
    result = result.replace("%7D","}");
    result = result.replace("(%7B%7BAccessToken_Glossary%7D%7D)", "({{AccessToken_Glossary}})");
    result = result.replace(/&lt;/g, "<");
    result = result.replace(/&gt;/g, ">");
    result = result.replace(/&#39;/g, "'");
    result = result.replace(/&quot;/g, "\"");
    result = result.replace(/&amp;/g, "&");
    
    return result;
}

function writeFile(fileName, template) {

    //Determine file to read, write and template to use
    var readFile = FOLDER_DIR + fileName + ".raml";
    //var writeFile = SAVE_LOCATION + fileName + ".md";
    var writeFile = SAVE_LOCATION + fileName + ".html.md";
    var config = raml2md.getDefaultConfig(template);
    
    raml2md.render(readFile, config, RESOURCES).then(function(result) {

        result = replaceConstants(result);        
        fs.writeFileSync(writeFile, unescape(result));

    }, function(error) {
        console.log(error);
    });
} 

function writeGeneratedRaml(fileName, template) {
    //Determine file to read, write and template to use
    var readFile = FOLDER_DIR + fileName + ".raml";
    var writeFile = GENERATED_RAML_LOCATION + fileName + ".raml";
    var config = raml2md.getDefaultConfig(template);
     
    raml2md.render(readFile, config, RESOURCES).then(function(result) {

        result = replaceConstants(result);        
        fs.writeFileSync(writeFile, result); 
    }, 
    function(error) {
        console.log(error);
    });
}

function convertDateToUTC(date) { 
  var date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
  date.setHours(0,0,0,0);
  return date;
}
