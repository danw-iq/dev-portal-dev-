//To run this file:
// open a ruby/git/node command prompt
// cd to the folder containing this file
// npm install 
// node generate.js 

var fs = require('fs'); //For reading files
var nunjucks = require('nunjucks'); //For using nunjucks files
var walk = require('walk'); // For reading all files in a folder
var raml2obj = require('raml2obj'); //For reading in RAML
var raml2swagger = require('./source/javascripts/lib/raml2swagger.js'); //Unused, for raml->Swagger
var raml2md = require('./source/javascripts/lib/generator.js'); //Custom class used to inject helpers (functions) into the nunjucks files
var async = require('async'); //Used to force sync methods to be async
var path = require('path'); //Used to read files
var _ = require('lodash'); 
var jade = require('jade'); //Used by tutorial generator
var marked = require('supermarked'); //Used by tutorial generator
var cheerio = require('cheerio');  //Used by tutorial generator
var qPromise = require('q'); //Used by tutorial generator
var pluralize = require('pluralize'); //Used to pluralize resource names in generated links file
var restRequest = require('request');               //Used for making HTTP API calls

var TESTING_SCRIPTS = {};
var config = require('./config.json');          //Load config
var packageFile = require('./package.json');    //Package file that scripts will be inserted into
var TIMEOUT = 15000;                            //Amount of time to wait for any API call before timing out
var HOOK_FILE = "hook.js";                      //Hook file to use for excluding values, calls, tests, etc
var POSTMAN_FOLDER = "postman//";               //Used to set the folder RAML will be read from
var PACKAGE_FILE = "package.json";              //Location of package file

var FOLDER_DIR = "raml/"; //Location of the RAML files, should always be raml/
var SAVE_LOCATION = "source/api/"; //Location of where the MD files will be generated **THIS FOLDER MUST EXIST OR THE SCRIPT WILL FAIL SILENTLY***
var TEMPLATES_LOCATION = "templates/"; //Location of nunjucks templates
var GENERATED_RAML_LOCATION = "postman/"; //Location of POSTMAN RAML files
var GENERATED_SWAGGER_LOCATION = "swagger/"; //Location of where the swagger files will be generated **THIS FOLDER MUST EXIST OR THE SCRIPT WILL FAIL SILENTLY***
var WRITE_TESTS = false; //Global config to write tests after generation

//Tutorial Files
var TUTORIAL_DIR = "viewsaurus/"; //Location of Viewsaurus tutorials
var VIEWSAURUS_TEMPLATE_LOCATION = "templates/viewsaurus/"; //Location of Viewsaurus templates
var MAIN_JADE_TEMPLATE = "viewsaurus.jade"; //Main template for Viewsaurus
var INCLUDES_LOCATION = "_includes/tutorials"; //Location of generated Viewsaurus tutorials
var GENERATED_LINKS_LOCATION = "_includes/generated_linkrefs.html"; //Location of where the resource links will be generated

//Sidebar generation stuff
//var SIDEBAR_LOCATION = "_data/generated_sidebar.yml"; //Location of generated sidebar
var SIDEBAR_ENTRIES = []; //Collection of request names
//var SIDEBAR_TEMPLATE = "templates/sidebar.nunjucks"; //Location of template used to generate sidebar

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
    "rdc-inventory": { "template": "rq-data-connect" },
    "rdc-performance-metrix": { "template": "rq-data-connect" },
    "rdc-sales": { "template": "rq-data-connect" },
    "rdc-utilities": { "template": "rq-data-connect" }
};

var DEFAULT_TEMPLATE = "test.nunjucks";  //"default.nunjucks"; 
var RAML_TEMPLATE = "templates/raml.nunjucks"; //Used for generating postman-importable RAML in postman folder

var filePaths = [];             //Holds list of RAML files to be generated
var RESOURCES = [];             //Holds list of ALL resources across ALL RAML (excluding hidden resources) for cross-referencing
var LINK_RESOURCES = [];        //holds resource names for link generator
var LINK_RESOURCE_NAMES = [];   //Used for collision detection
var GENERATED_LINK_RESOURCES = []; //used for replacing {{}} values in generated postman

//Walk through the FOLDER_DIR to find files
var walker  = walk.walk(FOLDER_DIR, { followLinks: false });

walker.on('file', function(root, stat, next) {

    // Add this file to the list of files
    var fileName = root + '/' + stat.name

    //Get current date and last modified date of file, set both to same time
    //This is used to ensure only newly-edited RAML are generated
    var modifiedTime = convertDateToUTC(stat.mtime); 
    var currentTime = convertDateToUTC(new Date()); 
    var generateFile = true; //modifiedTime >= currentTime;

    //We can technically support versioned files using name-vx.raml, but this is old, untested code
    if(stat.name.indexOf("-v") > -1) {

        var rootName = stat.name.substring(0, stat.name.lastIndexOf('-')); //assets
        var version = stat.name.substring(stat.name.indexOf('-') + 1); //vX

        var insertObj = filePaths.filter(function (x) { return x.name === rootName; })[0];

        if(!insertObj) {
            //Push versioned RAML together, we want to make sure we dont use "old" versioned data when cross referencing resources/data
            filePaths.push({ "name": rootName, "paths" : [ fileName ], "generate": generateFile });
        } 
        else {
            insertObj.paths.push(fileName);
        }
    } else {
        filePaths.push({ "name": fileName, "generate": generateFile });
    }  

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

        var path = filePaths[i];

        //Deal with versioned RAML
        if(path.paths) {

            for(var j = 0; j < path.paths.length; j++) {
                var subPath = path.paths[j];

                readFileList.push(subPath);
            }
            
        } else {
            readFileList.push(path.name);
        }
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

                //Create an object to represent the RAML
                var API = { };
                API.name = apiName;

                API.resources = [];
                var requests = [];
                var resourceList = [];
                var documentation = [];
                var enumerations = [];
                var author = [];

                if(ramlObj.documentation) {

                    //Loop through the documentation in the RAML
                    for(var j = 0; j < ramlObj.documentation.length; j++) {

                        var title = ramlObj.documentation[j].title;
                        var content = ramlObj.documentation[j].content;

                        //Crappy code that extracts "enumeration" titles to be used in the generated sidebar
                        if(title == "enumerations") {

                            var re = /### *.*/g; 

                            var matches = content.match(re);

                            //Create a list of enumerations in the RAML
                            for(var x = 0; x < matches.length; x++) {
                                enumerations.push(matches[x].replace(/#/g, "").replace(/ /g, ""));
                            }

                        }

                        //crappy code that extracts the author from the RAML
                        if(title == "author") {
                           author = content.trim();
                        } else {
                            documentation.push(title);
                        }

                    }
                }

                //Loop through every Schema in the RAML ("resource" in API docs)
                //This section creates generated_linkrefs file which allows us to do {{Customer}} in RAML instead of <a href="/api/customers#customer">Customer</a>
                for(var j = 0; j < schemas.length; j++) {
                    var schema = schemas[j];
                    var schemaString = JSON.stringify(schema);  //Get the schema Obj into memory

                    //Extract resource name
                    var resourceName = schemaString.substring(schemaString.indexOf("{") + 2, schemaString.indexOf(":") - 1).trim();
                    var schemaObj = JSON.parse(schema[resourceName]);

                    //Start building up a list of resources
                    API.resources.push( { "name" : resourceName, "schema": schemaObj});

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

                        resourceList.push(resourceName);
                    }
                }

                //Loop through requests (/api/customers, etc)
                for(var j = 0; j < ramlObj.resources.length; j++) {
                    var request = ramlObj.resources[j];

                    //ignore this, we are no longer using this description thing
                    if(request.description) {
                        requests.push({ "name": request.description.trim(), "url": request.description.replace(/ /g, "-").toLowerCase() });
                    }
                    else {
                        //Loop through each verb (GET, POST, etc) on the request
                        for(var x = 0; x < request.methods.length; x ++) {

                             //Make sure there is a display name for the request
                             if(request.methods[x].displayName) {
                                //Remove extra space
                                var requestName = request.methods[x].displayName.trim();
                                requests.push({ "name": requestName, "url": requestName.replace(/ /g, "-").toLowerCase() });
                            } else {
                                console.log("Error! Unable to find a display name or description for API " + apiName);
                            }
                        }
                    }

                }

                if(SIDEBAR_ENTRIES[author] == null) {
                    SIDEBAR_ENTRIES[author] = [];
                }

                SIDEBAR_ENTRIES[author].push({ "API": apiName, "author": author, "url": "/api/"+ apiName.trim().replace(/ /g, "-"), "requests": requests, "resources": resourceList, "documentation": documentation, "enumerations": enumerations});  
                
                RESOURCES.push(API);
            }
            else if(results[i].state == "rejected") {
                console.log("RAML file " + results[i].reason.problem_mark.name +  " failed validation");
            }
        }

        writeResourceLinks();   //Write generated_linkrefs
        processFiles();         //Write RAML to markdown
        writeSidebar();         //Write generated sidebar


    });
}

/*
function writeSidebar() {

    var config = raml2md.getDefaultConfig(SIDEBAR_TEMPLATE);
    var result = raml2md.renderSimple(config, SIDEBAR_ENTRIES);

    try {
        fs.writeFileSync(SIDEBAR_LOCATION, result);
    } catch(e) {
        console.log("Error writing sidebar!" + e);
    }
}
*/

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

        var resourceNameLowerCase = resourceName.toLowerCase();
        var resourceNamePlural = pluralize(resourceName);
        
        if(collided) {
            captureName = apiName + "_" + resourceName;
            captureNamePlural = apiName + "_" + resourceNamePlural;
        } else {
            captureName = resourceName;
            captureNamePlural = resourceNamePlural;
        }



        captureUrl = "<a href='http://developers.iqmetrix.com/api/" + apiName + "/#" + resourceNameLowerCase + "'>" + resourceName + "</a>";
        captureUrlPlural = "<a href='http://developers.iqmetrix.com/api/" + apiName + "/#" + resourceNameLowerCase + "'>" + resourceNamePlural + "</a>";

        fileContents += "{% capture " + captureName + " %}" + captureUrl + "{% endcapture %}\n";
        fileContents += "{% capture " + captureNamePlural + " %}" + captureUrlPlural + "{% endcapture %}\n";

        GENERATED_LINK_RESOURCES.push({ "name": captureName, "url": captureUrl });
        GENERATED_LINK_RESOURCES.push({ "name": captureNamePlural,  "url": captureUrlPlural });
    }

    fs.writeFileSync(GENERATED_LINKS_LOCATION, fileContents);
}

//Read each RAML file to be generated
function processFiles() {

    for (var i = 0; i < filePaths.length; i++) {

        //Generate it?
        if(filePaths[i].generate) {

            //Deal with versioned RAML
            if(filePaths[i].paths) {
                var versions = [];

                for (var j = 0; j < filePaths[i].paths.length; j++) {
                    var path = filePaths[i].paths[j];
                    versions.push(path.substring(path.lastIndexOf('-') + 1, path.indexOf(".")));
                    
                    processFile(path, versions);                
                }
            } else if (filePaths[i].name) {
                processFile(filePaths[i].name, null);  
            }
        }
    }
}

//Generate markdown from RAML
function processFile(filePath, versions) {

    var fileName = extractFileNameFromPath(filePath);
    var template = getTemplateForFile(fileName);
    
    writeFile(fileName, template, versions);
    writeGeneratedRaml(fileName, RAML_TEMPLATE);  
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

//This USED to replace the characters Jekyll has a problem with {}%, but now it actually replaces generated links {{test}} with <a></a>
//Example: {{customers}} to <a href="/api/customers#customer">Customers</a> 
function replaceBadCharacters(result) {

    result = result.toString();

    //Nunjucks/liquid does NOT like the characters {}%, so we replace them here before the file write happens
    result = result.replace("%7B","{");
    result = result.replace("%7D","}");
    result = result.replace("(%7B%7BAccessToken_Glossary%7D%7D)", "({{AccessToken_Glossary}})");
    result = result.replace(/&lt;/g, "<");
    result = result.replace(/&gt;/g, ">");
    result = result.replace(/&#39;/g, "'");
    result = result.replace(/&quot;/g, "\"");
    result = result.replace(/&amp;/g, "&");

    for(var i = 0; i < GENERATED_LINK_RESOURCES.length; i++) {
        var link = "{{" + GENERATED_LINK_RESOURCES[i].name + "}}";
        var content = GENERATED_LINK_RESOURCES[i].url;

        var regex = new RegExp(link, "g");

        result = result.replace(regex, content);
    }

    return result;
}

function writeFile(fileName, template, versions) {
    //Determine file to read, write and template to use
    var readFile = FOLDER_DIR + fileName + ".raml";
    //var writeFile = SAVE_LOCATION + fileName + ".md";

    var writeFile = SAVE_LOCATION + fileName + ".html.md";
    //console.log(writeFile);

    var config = raml2md.getDefaultConfig(template);
    
    raml2md.render(readFile, config, versions, RESOURCES).then(function(result) {



        //Nunjucks/liquid does NOT like the characters {}%, so we replace them here before the file write happens
        result = result.replace("%7B","{");
        result = result.replace("%7D","}");
        result = result.replace("(%7B%7BAccessToken_Glossary%7D%7D)", "({{AccessToken_Glossary}})");
        result = result.replace(/&lt;/g, "<");
        result = result.replace(/&gt;/g, ">");
        result = result.replace(/&#39;/g, "'");
        result = result.replace(/&quot;/g, "\"");
        result = result.replace(/&amp;/g, "&");
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
     
    raml2md.render(readFile, config, null, RESOURCES).then(function(result) {

        result = replaceBadCharacters(result);        
        fs.writeFileSync(writeFile, result); 

        if(WRITE_TESTS) {
            writeTestScript(readFile, fileName).then(function() {
                //Write the package file (terrible but works for now)
                packageFile.scripts = TESTING_SCRIPTS;
                fs.writeFileSync(PACKAGE_FILE, JSON.stringify(packageFile, null, 2));
            });
        }
    }, 
    function(error) {
        console.log(error);
    });
}

function writeTestScript(filePath, fileName) {

    return new Promise(resolve => {

        var authConfig = config.default; //Get the default config
        var testUrl = authConfig.test_url;

        //Read RAML into memory. Annoying that we need this just for the baseURI
        raml2obj.parse(filePath).then(function(ramlObj) {

            //Get the correct config setting
            if(config[fileName]) {
                authConfig = config[fileName];
            }

            //If there is no test URL defined in config, use baseUri from RAML
            if(!authConfig.test_url) {
                testUrl = ramlObj.baseUri.replace("{UrlSuffix}", "demo");
            } else {
                testUrl = authConfig.test_url;
            }

            if(authConfig.noauth) {
                TESTING_SCRIPTS[fileName] = formatTest(fileName, authConfig.test_url, null);
                resolve();        
            }
            else if(authConfig.accessToken) {     
                TESTING_SCRIPTS[fileName] = formatTest(fileName, authConfig.test_url, authConfig.accessToken);
                resolve();        
            } 
            else {        
                getToken(authConfig).then(function(accessToken) {

                    TESTING_SCRIPTS[fileName] = formatTest(fileName, testUrl, accessToken);
                    resolve();            
                });
            }

        });

    });
}

/**
 * Gets an auth token
 *  
 * @param   authConfig   Object containing auth information
 *
 * @return  string       Token
 */
function getToken(authConfig) {

    return new Promise(resolve => {
        var options = { 
            method: authConfig.method,
            url: authConfig.url,           
            headers: authConfig.headers   
        };

        if(authConfig.form) {
            options.form = authConfig.form;
        }

        restRequest(options, function (error, response, body) {
            body = JSON.parse(body);

            if (error || response.statusCode != 200)
                throw new Error(error);

            authConfig.accessToken = body['access_token'];  //Cache
            resolve(body['access_token']);
        });
    })
}

/**
 * Creates a string used for running abao tests in the console
 *
 * @param  fileName Name of RAML to test
 * @param  testUrl  URL to use for tsting RAML
 * @param  token    Authentication token
 * 
 * @return string   Abao test string 
 */
function formatTest(fileName, testUrl, token) {

    var testString = "abao postman/"+fileName+".raml --server "+testUrl+" --f="+HOOK_FILE+" -t "+TIMEOUT;

    if(token) {
        testString += " -h \"Authorization: Bearer "+token+"\"";
    }

    return testString;
}

//Nunjucks and jekyll sometimes go bonkers on dates and convert them to a different format without you asking it to
//This is problematic esp. for the Partner Relationships page
function convertDateToUTC(date) { 
  var date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
  date.setHours(0,0,0,0);
  return date;
}

