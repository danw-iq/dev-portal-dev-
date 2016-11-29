#!/usr/bin/env node

'use strict';

var path = require('path'); 
var raml2obj = require('raml2obj');
var nunjucks = require('nunjucks');
var Q = require('q');
var fs = require('fs');
var util = require('util');
var prettyData = require('pretty-data').pd;

var RESOURCE_FILE = "generated/resources.json";
var RESOURCES;

exports = module.exports = {
  getDefaultConfig: getDefaultConfig,
  render: render,
  renderSimple: renderSimple
};

/*
 The config object can contain the following keys and values:
 template: url to the main template (required)
 templatesPath: a folder containing the templates (optional, by default it's relative to your working directory)
 processOutput: function that takes data, return a promise (optional)
 */
function render(source, config, resources) {
  config = config || {};

  var env = nunjucks.configure(config.templatesPath, {watch: false});

  RESOURCES = resources;

  addFilters(env);

  return raml2obj.parse(source).then(function(ramlObj) {
    ramlObj.config = config;

    return Q.fcall(function() {
      var result = env.render(config.template, ramlObj);
      if (config.processOutput) {
        return config.processOutput(result);
      }

      return result;
    });
  });
}

function renderSimple(config, entries) {

  var env = nunjucks.configure(config.templatesPath, {watch: false});

    env.addFilter('fixTitle', function(title) {
      var fixedTitle = "";

      if(!title) {
        console.log("ERROR: fixTitle missing title");
      }

      switch(title.toLowerCase()) {
        case "cmi":
          fixedTitle = "Customer Managed Inventory";
          break;
        case "crm":
          fixedTitle = "Customers";
          break;
        case "availability":
          fixedTitle = "Inventory Availability";
          break;
        case "entity-store":
          fixedTitle = "Entities";
          break;
        case "epc":
          fixedTitle = "Electronic Product Catalog";
          break;
        case "product-library":
          fixedTitle = "Products";
          break;
        case "vmi":
          fixedTitle = "Vendor Managed Inventory";
          break;
        case "saccs":
          fixedTitle = "Shipping Aggregator";
          break;
        case "rq data connect bridge":
          fixedTitle = "RQ Data Connect Bridge";
          break;
        case "rq data connect":
          fixedTitle = "RQ Data Connect";
          break;
        case "att-auth-proxy":
          fixedTitle = "AT&T Auth Proxy";
          break;                               
        default:
          fixedTitle = title.replace(/-/g, ' ');
          fixedTitle = toTitleCase(fixedTitle);
          break;
      }

      if(fixedTitle.indexOf("Rq Data Connect") > -1) {
        fixedTitle = fixedTitle.replace("Rq Data Connect", "RQ Data Connect");
      }

      return fixedTitle;
    });

  return env.render(config.template, { "entries": entries });
}

function getDefaultConfig(mainTemplate, templatesPath) {
  if (!mainTemplate) {
    mainTemplate = './lib/template.nunjucks';

    // When using the default template, make sure that Nunjucks isn't
    // using the working directory since that might be anything
    templatesPath = __dirname;
  }

  return {
    template: mainTemplate,
    templatesPath: templatesPath,
    processOutput: function(data) {
      return data.replace(/\n{3,}/g, '\n\n');
    }
  };
}

function addFilters(env) {

    //CMI Connect specific
    env.addFilter('printExampleSoap', function(obj, title, hideGenerated, reqSchema) {

      var schema = safeJsonParse(obj, "printExampleSoap");
      var exampleString = "";
      var extraSchema = "";

      if(reqSchema) {
        var reqSchemaName = safeJsonParse(reqSchema, "printExampleSoap req").name;        
      }

      if(schema.name) {

        exampleString = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><soap:Body>";

        if(reqSchema) {
          exampleString += "<"+reqSchemaName+"Response xmlns=\"http://www.iqmetrix.com\"><"+reqSchemaName+"Result>";
        }

        exampleString += createExampleForResourceSoap(obj, schema.name, title, hideGenerated);

        if(reqSchema) {
          exampleString += "</"+reqSchemaName+"Result></"+reqSchemaName+"Response>";
        }

        exampleString += "</soap:Body></soap:Envelope>";

      } else {
        console.log("ERROR: printExampleSoap parsing JSON, API " + schema);
      }

      return prettyData.xml(exampleString);
    });


    //RQ Data Connect specific
    env.addFilter('printExampleCsv', function(obj, apiName, hideGenerated, isRAMLGenerated) {

      var schema = safeJsonParse(obj, "printExampleCsv");
      var exampleString = "";

      if(schema.name) {

        var resourceProperties = getPropertyNames(schema, "printExampleCsv");

        //Add first column of headers
        for(var i = 0; i < resourceProperties.length; i++) {
            exampleString += resourceProperties[i];

            if(i != resourceProperties.length - 1) {
              exampleString += ",";
            }
        }        

        exampleString = exampleString +"\n";

        //Add data, only one row
        for(var i = 0; i < resourceProperties.length; i++) {
          
          var property = schema.properties[resourceProperties[i]];

          if(property.example != null) {
            exampleString += property.example;
          } else {
            console.log("Property " + resourceProperties[i] + " without example in Resource " + schema.name);
          }

          if(i != resourceProperties.length - 1) {
            exampleString += ",";
          }          
        }

      } else {
        console.log("ERROR: printExampleCsv parsing JSON, API " + schema);
      }

      return exampleString;
    });

    //RQ Data Connect specific
    env.addFilter('printExampleXml', function(obj, addExtraSchema) {

      var schema = safeJsonParse(obj, "printExampleXml");
      var exampleString = "";
      var extraSchema = "";

      if(schema.name) {

        var resourceProperties = getPropertyNames(schema, "printExampleXml");

        for(var i = 0; i < resourceProperties.length; i++) {
          
          var property = schema.properties[resourceProperties[i]];

          if(property.example != null) {
            exampleString += "<"+resourceProperties[i]+">" + property.example + "</"+resourceProperties[i]+">"
          } else {
            console.log("Property " + resourceProperties[i] + " without example in Resource " + schema.name);
          }
        }

        if(addExtraSchema) {
          extraSchema = "<Schema><Column_Name>ColumnName</Column_Name><Type>datatybe</Type><SafeType>safetype</SafeType><Length>100</Length></Schema>";
        }

        exampleString = "<Table><Record>" + exampleString + "</Record>" + extraSchema + "</Table>"

      } else {
        console.log("ERROR: printExampleXml parsing JSON, API " + schema);
      }

      return prettyData.xml(exampleString);
    });

    //RQ Data Connect specific
    env.addFilter('printExampleJsonTable', function(obj, apiName) {

      var jsonObj = safeJsonParse(obj, "printExampleJsonTable");
      var exampleString = "";
      var prefixTabs = 4;

      if(jsonObj.name) {

        exampleString = createExampleForResource(obj, jsonObj.name, apiName, false);

        //If we are returning an array, surround with []
        if(jsonObj.type === "array") {
          exampleString = "{ \"Records\": [" + exampleString + "], \"Schema\": [ { \"Column_Name\": \"ColumnName\", \"Type\": \"datatype\", \"SafeType\": \"safetype\", \"Length\": 100 } ] } ";
        }
      } else {
        console.log("ERROR: printExampleJsonTable " + apiName);
        console.log(jsonObj);
      }

      var test = safeJsonParse(exampleString, "printExampleJsonTable");

      return JSON.stringify(test, undefined, prefixTabs);
    });

    //Pretty print an example
    env.addFilter('serialize', function(example) {

      var test = safeJsonParse(example, "serialize");

      return JSON.stringify(test).replace(/"/g, '\\"')
    });

    //Print a request
    env.addFilter('printSerialized', function(obj, apiName, hideGenerated) {

      var jsonObj = safeJsonParse(obj, "printSerialized");
      var exampleString = "";

      if(jsonObj.name) {

        exampleString = createExampleForResource(obj, jsonObj.name, apiName, hideGenerated);

        //If we are returning an array, surround with []
        if(jsonObj.type === "array") {
          exampleString = "[" + exampleString + "]";
        }
      } else {
        console.log("ERROR: PrintExample parsing JSON");
      }

      var test = safeJsonParse(exampleString, "printExample");

      return JSON.stringify(test).replace(/"/g, '\\"');
    });

    //Convert to title case and replace values
    env.addFilter('printMethodName', function(name) {
      return toTitleCase(name).replace(/ /g, "");
    });

    //Used for printing code samples in CMI and VMI pages, in documentation section
    env.addFilter('printCode', function(codeSamples, requestName) {

      var request = requestName.substring(requestName.indexOf("=") + 1).trim();

      for(var i = 0; i < codeSamples.length; i++) {
        if(codeSamples[i].uniqueId == request) {
          return codeSamples[i].content
        }
      }
    });

    //obj = schema
    //apiName = api name
    //hideGenerated = if this is a PUT request
    //isRAMLGenerated = if this is a Postman we are generated, to prefix tabs
    env.addFilter('printExample', function(obj, apiName, hideGenerated, isRAMLGenerated) {

      var jsonObj = safeJsonParse(obj, "printExample");
      var exampleString = "";
      var prefixTabs = 4;

      if(jsonObj.name) {

        exampleString = createExampleForResource(obj, jsonObj.name, apiName, hideGenerated);

        //If we are returning an array, surround with []
        if(jsonObj.type === "array") {
          exampleString = "[" + exampleString + "]";
        }
      } else {
        console.log("ERROR: PrintExample parsing JSON, API " + jsonObj);
        console.log(jsonObj);
      }

      if(isRAMLGenerated) {
        prefixTabs = 0;
      }

      var test = safeJsonParse(exampleString, "printExample");

      return JSON.stringify(test, undefined, prefixTabs);
    });

    //schema = schema
    //title = schema name

    env.addFilter('printResponseSchema', function (schema, title, method) {   

      var responseParameters = "";
      var requiredList = getRequiredList(schema);
      var outerSchema = safeJsonParse(schema, "printResponseSchema");

      var printBullets = false;

      //If the outer schema is not a custom resource
      if(outerSchema.exclude) {

        //Get the inner schema (array of object, object of object, etc)
        var innerSchema = extractResource(title, outerSchema.name);

        //Print if this is an array of non-custom objects
        if(!innerSchema.exclude && outerSchema.type == "array") {
          printBullets = false;
        } else {
          printBullets = true;
        }
      }

      if(outerSchema.example){
        //Print nothing for "example" schemas
        responseParameters = "";
      }
      else if(printBullets) 
      {
        responseParameters += printResponseBullets(schema, title);        
      } 
      else
      {
        //Skip everything and just print a link to the resource
        var schemaObj = safeJsonParse(schema, "printResponseSchema");

        responseParameters += printResourceLink(schemaObj.type, schemaObj.name, null);
      }

      return responseParameters;
    });


    //schema = schema
    //method = GET/POST/DELETE/etc
    env.addFilter('printResponseSchemaSpecification', function(schema, method) {

      var schema = safeJsonParse(schema, "printResponseSchemaSpecification");

      var responseParameters = "";

      var properties = getPropertyNames(schema, "printResponseSchemaSpecification"); //list of properties, [ "Id", "CustomerTypeId" ... ]
      var requiredList = getRequiredList(schema); //Get required properties for this schema

      //Sort properties alphabetically
      properties = sortProperties(properties, requiredList);

      for(var i = 0; i < properties.length; i++)
      {
        var name = properties[i];
        var property = schema.properties[name];
        var type = property.type;
        var responseString = "";

        if(requiredList && requiredList.indexOf(name) > -1 || property.generated)
        {
          responseString += printBullet(name, property.putDescription, "<strong>Required</strong>");
        }
        else {
          responseString += printBullet(name, property.putDescription, "Optional");          
        }

        responseString = prefixTabs(properties[i], responseString);
        responseParameters += responseString + '\n';
      }
      

      return responseParameters;
    });

    //Used for requests with application/form
    env.addFilter('printFormParameters', function (obj) {

      var parameters = Object.keys(obj);
      var formParams = "";

      for(var i = 0; i < parameters.length; i++) {

        var name = parameters[i];
        var property = obj[name];
        var requestString = "";

        if(property.required) {
          requestString = printBullet(name, property.description, "<strong>Required</strong>");
        }
        else {
          requestString = printBullet(name, property.description, "Optional");
        }

        formParams += requestString + '\n';
      }

      return formParams;
    });

    //Print bullets
    env.addFilter('printRequestParameters', function(schema, title, method) {

      var response = printRequestBullets(schema, title, method);

      var schemaObj = safeJsonParse(schema, "printRequestParameters");

      //Only used for SOAP support
      if(schemaObj.soapRequest) {
        response = "<ul><li><code>"+schemaObj.name+"</code> (<strong>Required</strong>) </li>" + response + "</ul>";
      }

      return response;
    });

    //obj = schema
    //name = API name
    //title = schema name
    env.addFilter('printResourceTable', function(obj, name, title) {

      var jsonObj = safeJsonParse(obj, "printResourceTable");
      var isExcluded = jsonObj.exclude;
      var schema = extractResource(title, name);
      var table = "";

      if(!isExcluded) {

        //Print name of table
        table += "### " + name + "\n\n";

        if(schema.description)
        {
          table += schema.description + "\n\n";
        }

        table += "| Name | Data Type | Description | Example |\n|:-----|:----------|:------------|:--------|\n";

        var properties = getPropertyNames(schema, "printResourceTableProperties"); //[ "Id", "CustomerTypeId" ... ]

        if(properties) {
          table += printResourceTableProperties(schema, properties, "");
        }
        else {
          console.log("ERROR printResourceTable no properties to print!");
        }

      }

      return table;
    });

    //Replace some text, this is used for RAML that have a name != the documentation title
    env.addFilter('fixTitle', function(title) {
      var fixedTitle = "";

      if(!title) {
        console.log("ERROR: fixTitle missing title");
      }

      switch(title.toLowerCase()) {
        case "cmi":
          fixedTitle = "Customer Managed Inventory";
          break;
        case "crm":
          fixedTitle = "Customers";
          break;
        case "availability":
          fixedTitle = "Inventory Availability";
          break;
        case "entity-store":
          fixedTitle = "Entities";
          break;
        case "epc":
          fixedTitle = "Electronic Product Catalog";
          break;
        case "product-library":
          fixedTitle = "Products";
          break;
        case "vmi":
          fixedTitle = "Vendor Managed Inventory";
          break;
        case "saccs":
          fixedTitle = "Shipping Aggregator";
          break;
        case "rq data connect bridge":
          fixedTitle = "RQ Data Connect Bridge";
          break;
        case "rq data connect":
          fixedTitle = "RQ Data Connect";
          break;
        case "att-auth-proxy":
          fixedTitle = "AT&T Auth Proxy";
          break;                                                           
        default:
          fixedTitle = title.replace(/-/g, ' ');
          fixedTitle = toTitleCase(fixedTitle);
          break;
      }

      return fixedTitle;
    });

    //Insert date
    env.addFilter('insertDate', function() {
      // Date format: dd-mm-yyyy
      var date = convertDateToUTC(new Date());
      var dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

      return dateString;
    });

    //URI = request URI, ie: /Companies({CompanyId})/Locations
    //Replaces {Values} in a request URL with examples
    env.addFilter('replaceWithExamples', function(uri, obj) {
      
      //RQ Data Connect HAX
      uri = uri.replace("?Auth={Auth}&Response={Response}", "");  
      uri = uri.replace("&Auth={Auth}&Response={Response}", "");    

      var sections = uri.split('{');
      var uriWithExamples = uri;

      if(sections.length > 1)
      {
        for (var i = 1; i < sections.length; i++) {
          var section = sections[i].substr(0,sections[i].indexOf('}'));
          var sectionText = "{" + section + "}";
          var exampleVal = obj[section].example;

          //Nunjucks messes up the date, put it back to normal format. Notably, NOT the best way of determining that this is a date string
          if(obj[section].type === "string" && obj[section].displayName.indexOf("Date") > -1) {
            exampleVal = convertDateToUTC(new Date(exampleVal)).toISOString();    
          }
          
          uriWithExamples = uriWithExamples.replace(sectionText, exampleVal);
        }
      }

      return uriWithExamples;
    });

    //Prefix everything with a number of spaces, used in XML generating
    env.addFilter('prefixAll', function(xml, numSpaces) {

      var lines = xml.split(/\n/);
      var newExample = "";
      var prefix = "";

      for(var x = 0; x < numSpaces; x++) {
        prefix += " ";
      }

      for(var i = 0; i < lines.length; i++ ) {
        if(i == 0) {
          newExample = lines[i] + '\n';
        } else {
          newExample += prefix + lines[i] + '\n';
        }
       }

      return newExample;
    });    

    //Used when printing postman RAML, this is required for the API console tool
    env.addFilter('fixSchema', function(schema) {
      schema = safeJsonParse(schema, "fixSchema");
      schema.properties = fixSchemaProperties(schema.properties);

      return JSON.stringify(schema);
    });     

    env.addFilter('printIfDate', function(possiblyDate) {

      if(typeof possiblyDate == "object"){
        return possiblyDate.getFullYear() + "-" + (possiblyDate.getMonth() + 1) + "-" + possiblyDate.getDate();
      }

      return possiblyDate;
    });     
}

function fixSchemaProperties(properties) {

    if(properties) {

      var propertyList = Object.keys(properties);

      for(var i = 0; i < propertyList.length; i++) {

        var name = propertyList[i];
        var property = properties[name];

        if(property.ref) {

          var tokens = property.ref.split(".");

          //Just an example replace
          if(tokens.length == 3) {

            var apiName = tokens[0];
            var resourceName = tokens[1];
            var resource = extractResource(apiName, resourceName);

            //Set new example
            properties[name].example = resource.properties[tokens[2]].example;
          } 
          else if(tokens.length == 2) {
            //Object replacement
            var apiName = tokens[0];
            var resourceName = tokens[1];
            var resource = extractResource(apiName, resourceName);

            properties[name].properties = fixSchemaProperties(resource.properties);
            properties[name].required = resource.required;
          }
        }
      }
    }

    return properties;
}

//Given a string, create a "title" version of the string
//Example: getting all Companies -> Getting All Companies
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//Extract resource name from a string that looks like "apiname.resourcename"
function processName(name) {

  if(name && name.indexOf(".") > -1) {
    var tokens = name.split(".");
    name = tokens[tokens.length - 1]; //Actual name
  }

  return name;
}

//Prefix a string with the number of tabs equal to the .
function prefixTabs(name, str) {

  var tokens = name.split(".");

  //Prefix padding for each .
  for(var i = 0; i < tokens.length; i++) {
    str = "  " + str;
  }

  return str;
}

//Inefficient sort is inefficient
function sortProperties(names, requiredList) {
  var sortedNames = [];

  for(var i = 0; i < names.length; i++) {

    var name = names[i];

    //If this is an object, do not attempt to sort
    if(name.indexOf('.') > -1) {
      return names;
    }

    if(requiredList.indexOf(name) > -1) {
      sortedNames.push(name);
    }
  }

  //Add all remaining "non-required" values to the end
  for(var i = 0; i < names.length; i++) {
    var name = names[i];

    if(sortedNames.indexOf(name) == -1) {
      sortedNames.push(names[i]);
    }
  }

  return sortedNames;
}

//obj = schema
//schemaName = schemaName
//apiName = name of the API
//hideGenerated = used for PUT requests
// Create a generated "example" for a request/response given a schema
function createExampleForResource(obj, schemaName, apiName, hideGenerated) {

  var exampleString = "{";
  var resource;
  var resourceProperties;

  //Get the resource
  if(schemaName) {
    resource = extractResource(apiName, schemaName);
  }
  else {
    resource = safeJsonParse(obj, "createExampleForResource");

    if(!resource || !resource.properties) {
      console.log("ERROR: createExampleForResource Resource failed to parse");
    }
  }

  resourceProperties = getPropertyNames(resource, "createExampleForResource");

  //Loop through properties
  for(var i = 0; i < resourceProperties.length; i++) {

    var name;
    var property;
    var example;
    var hideProperty = false;
    var isLegacy = false;

    if(schemaName) {
      name = resourceProperties[i];
      property = resource.properties[name];
    } else {
      name = resourceProperties[i];
      property = resource.properties[name];
    }

    if(property.description) 
    {
        isLegacy = doNotPrint(property.description);
    }

    if(isLegacy || property.hideFromExample) {
      //case 1 - hide this property if it is legacy or forced to "off" with hideFromExample enabled
      hideProperty = true;
    } else if(hideGenerated && property.generated) {
      //case 2 - hide this property if "hide generated" is enabled and this is a generated property
      hideProperty = true;
    } else if (name.indexOf(".") > -1) {
      //case 3 - none of the above, hide property
      hideProperty = true;
    }

    if(!hideProperty) {
      property.name = name;

      exampleString += createExampleForProperty(property, apiName, hideGenerated);

       //Add comma if this is NOT the last resource
       if(i != (resourceProperties.length - 1)) {
           exampleString += ",";
       }

    } else {
      //Remove trailing comma if the last parameter was not printed (hidden)
      if(i == (resourceProperties.length - 1)) {
        var pos = exampleString.lastIndexOf(",")
        exampleString = exampleString.substring(0, pos) + exampleString.substring(pos + 1);
      }
    }
  }

  exampleString += "}";

  return exampleString;
}

//Used only for CMI
//obj = schema
//schemaName = schemaName
//apiName = name of the API
//hideGenerated = used for PUT requests
// Create a generated "example" for a request/response given a schema
function createExampleForResourceSoap(obj, schemaName, apiName, hideGenerated) {

  var exampleString = "";
  var resource;
  var resourceProperties;

  //Get the resource
  if(schemaName) {
    resource = extractResource(apiName, schemaName);
  }
  else {
    resource = safeJsonParse(obj, "createExampleForResource");

    if(!resource || !resource.properties) {
      console.log("ERROR: createExampleForResource Resource failed to parse");
    }
  }

  resourceProperties = getPropertyNames(resource, "createExampleForResourceSoap");

  //Loop through properties
  for(var i = 0; i < resourceProperties.length; i++) {

    var name;
    var property;
    var example;
    var hideProperty = false;
    var isLegacy = false;

    if(schemaName) {
      name = resourceProperties[i];
      property = resource.properties[name];
    } else {
      name = resourceProperties[i];
      property = resource.properties[name];
    }

    if(property.description) 
    {
        isLegacy = doNotPrint(property.description);
    }

    if(isLegacy || property.hideFromExample) {
      //case 1 - hide this property if it is legacy or forced to "off" with hideFromExample enabled
      hideProperty = true;
    } else if(hideGenerated && property.generated) {
      //case 2 - hide this property if "hide generated" is enabled and this is a generated property
      hideProperty = true;
    } else if (name.indexOf(".") > -1) {
      //case 3 - none of the above, hide property
      hideProperty = true;
    }

    if(!hideProperty) {
      property.name = name;

      exampleString += createExampleForPropertySoap(property, apiName, hideGenerated);
    }
  }

  //Handle soap request
  if(resource.soapRequest) {
    exampleString = "<"+schemaName+" xmlns=\"http://www.iqmetrix.com\">"+exampleString+"</"+schemaName+">";
  }

  if(resource.wrap) {
    exampleString = "<"+schemaName+">" + exampleString + "</"+schemaName+">";
  }

  return exampleString;
}

//Only used for CMI
//Create an example for a property
//property = property name
//apiName = api name
//hideGenerated = used for PUT requests
function createExampleForPropertySoap(property, apiName, hideGenerated) {

  var exampleString = "";
  var name = property.name;
  var example = "";
  var resourceName = "";

  if(!property.type) {
    console.log("ERROR: createExampleForPropertySoap %s in %s has no type", name, apiName);
  }

  var type = property.type.toLowerCase();

  var referenceValue = property.ref;

  //If this is a simple value replace, do so
  if(referenceValue && type != "object" && type != "array") {
    property.example = getValueFromAPI(referenceValue);
  }

  //Put the values back, as we are passing the property as an object b/w calls
  example = property.example;
  property.type = type;

  //Treat object and array of object the same for XML
  if (type === "object" || property.arrayType == "object" ) {

    if(example) {
      exampleString += util.format("<%s>%s</%s>", name, example, name);
    }
    else {

      if(property.extra != null) {
         exampleString += util.format("<%s %s>", name.trim(), property.extra);
      } else {
         exampleString += util.format("<%s>", name.trim());
      }

      apiName = referenceValue.split(".")[0];
      resourceName = referenceValue.split(".")[1];

      exampleString += createExampleForResourceSoap(null, resourceName, apiName, hideGenerated);    
    
      exampleString += util.format("</%s>", name.trim());

    }
  }
  else if (type === "array")
  {
    exampleString += util.format("<%s><string>%s</string></%s>", name.trim(), example, name);
  }
  else {
    exampleString += util.format("<%s>%s</%s>", name.trim(), example, name);
  }

  return exampleString;  
}

//Create an example for a property
//property = property name
//apiName = api name
//hideGenerated = used for PUT requests
function createExampleForProperty(property, apiName, hideGenerated) {

  var exampleString = "";
  var name = property.name;
  var example = "";
  var resourceName = "";

  if(!property.type) {
    console.log("ERROR: createExampleForProperty %s in %s has no type", name, apiName);
  }

  var type = property.type.toLowerCase();

  var referenceValue = property.ref;

  //If this is a simple value replace, do so
  if(referenceValue && type != "object" && type != "array") {
    property.example = getValueFromAPI(referenceValue);
  }

  //Put the values back, as we are passing the property as an object b/w calls
  example = property.example;
  property.type = type;

  if (type === "array")
  {
      exampleString += printArrayExample(property, apiName, hideGenerated);
  }
  else if (type === "object") {

    if(example) {
      exampleString += printExample(name, type, example, hideGenerated);
    } 
    else if (!referenceValue) {
      exampleString += printExample(name, type, "{}", hideGenerated);
    }
    else {
      //Extract the reference name and print next level
      exampleString += util.format("\"%s\": ", name);

      apiName = referenceValue.split(".")[0];
      resourceName = referenceValue.split(".")[1];

      exampleString += createExampleForResource(null, resourceName, apiName, hideGenerated);    
    }
  }
  else {
    exampleString += printExample(name, type, example, hideGenerated);
  }

  return exampleString;  
}

//Print an example array
//property = property name
//apiName = api name
//hideGenerated = used for PUT requests
function printArrayExample(property, apiName, hideGenerated) {
  var exampleString = "";
  var referenceValue = "";

  if(property.example || !property.ref) {
    //Array has an override example, so use it
    if(property.arrayType == "string") {
      exampleString += printExample(property.name, property.type, "[\"" + property.example + "\"]");
    } else {
      exampleString += printExample(property.name, property.type, "[" + property.example + "]");
    }
  } 
  else if (property.ref) {

    var resourceName = property.ref;
    var tokens = property.ref.split(".");

    exampleString += util.format("\"%s\": [", property.name);

    if(tokens.length > 1) {
      apiName = property.ref.split(".")[0];
      referenceValue = property.ref.split(".")[1];
    } 

    exampleString += createExampleForResource(null, referenceValue, apiName, hideGenerated);    
    exampleString += "]";      

  } else {
    console.log("ERROR: printArrayExample Unable to parse array");
  }

  return exampleString;
}

//Print example
// name = property name
// type = property type
// example = example value
function printExample(name, type, example) {

  var exampleString = "";
  var quoteless = [ "boolean", "byte", "decimal", "integer", "object", "array" ];
  var quoted = [ "string", "datetime", "guid" ];

  if(quoted.indexOf(type.toLowerCase()) > -1) {
    exampleString += util.format('"%s": "%s"', name, example);
  } 
  else if(quoteless.indexOf(type.toLowerCase()) > -1) {
    exampleString += util.format('"%s": %s', name, example);
  } else {
    console.log("ERROR: Unsupported type in printExample %s", type);
  }

  return exampleString;
}

function getValueFromAPI(propertyName) {

  var tokens = propertyName.split(".");
  var value;

  if (tokens.length === 3) {

    var resource = extractResource(tokens[0], tokens[1]);
    var property = resource.properties[tokens[2]];

    if(resource && property) {
      value = property.example;
    }
    else {
      console.log("ERROR: getValueFromAPI Resource or property %s could not be found", propertyName);
    }
  }
  else {
      console.log("ERROR: getValueFromAPI Reference value cannot be parsed: %s", propertyName);
  }

  return value;
}

//print a bullet
function printBullet(name, description, paramString) {

  var bulletString = "";

  if(description) {
    description = "- " + description;
  } else {
    description = "";
  }

  bulletString += "<li><code>" + name + "</code> ("+ paramString +") " + description + "</li>";

  return bulletString;
}

function doNotPrint(description) {
  return description && (description.indexOf("legacy") > -1 || description.indexOf("reserved") > -1 || description.indexOf("internal use") > -1 || description.indexOf("future use") > -1);
}

//handle cross referencing (ref)
function extractResource(apiName, resourceName) {

  var found = false;

  for (var i = 0; i < RESOURCES.length; i++) {
    var API = RESOURCES[i];
    if(apiName === API.name) {
      //Found the correct API
      for(var j = 0; j < API.resources.length; j++) {
        var resource = API.resources[j];
        if(resource.name === resourceName) {
          //Found the correct resource
          found = true;
          return resource.schema;
        }
      }
    }
  }

  if(!found) {
    console.log("ERROR: extractResource SCHEMA NOT FOUND for API: %s SCHEMA: %s", apiName, resourceName);
  }
}

//Extract names of properties
function getPropertyNames(obj, source) {

  if(!obj || !obj.properties) {
    console.log("ERROR: getPropertyNames originating from %s", obj.name);
  }
  else
  {
    return Object.keys(obj.properties);
  }
}

//Print a link to a resource
function printResourceLink(schemaType, schemaName, externalSource) {

  var resourceLink = "";

  if(schemaType === "object") {
    resourceLink = linkWrap(schemaName, externalSource);
  } 
  else if(schemaType === "array") {
    resourceLink += "Array[" + linkWrap(schemaName, externalSource) + "]";
  } else {
    console.log("ERROR: Unsupported type in schema %s, must be array or object", schemaName);
  }  

  return resourceLink;
}

//Wrap something in a link
function linkWrap(value, externalSource) {
  
  if(externalSource != null && externalSource.indexOf(".") > -1) {

    externalSource = externalSource.substring(0, externalSource.indexOf("."));

    return util.format("<a href='/api/%s/#%s'>%s</a>", externalSource.replace(/ /g, "-"), value.toLowerCase(), value);
  }
  else {
    return util.format("<a href='#%s'>%s</a>", value.toLowerCase(), value);
  }
}

//Print response bullets after example
function printResponseBullets(schema, title, method) {

  //Get the schema if we do not have it
  if(!schema.name) {
    var schemaObj = safeJsonParse(schema, "printRequestBullets");
    schema = extractResource(title, schemaObj.name);
  }

  var properties = getPropertyNames(schema, "printResponseSchema");
  var responseParameters = "<ul>";

  if(properties.length == 0) {
    return "";
  }

  //Loop thru properties
  for(var i = 0; i < properties.length; i++)
  {
      var name = properties[i];
      var responseString = "";

      //Ignore resources that are included in the table only for response bullets
      if(name.indexOf(".") == -1) {

        var property = schema.properties[name];

        //Not a simple replacement
        if(property.ref && (property.type === "array" || property.type === "object")) {

          var tokens = property.ref.split(".");

          if(tokens.length > 1) {

            var apiName = tokens[0];
            var resourceName = tokens[1];
            var resource = extractResource(apiName, resourceName);

            //Do not print links to custom resources
            if(resource.exclude) {
              responseString += printBullet(name, property.putDescription, toTitleCase(property.type));
            } 
            else {
              responseString += printBullet(name, property.putDescription, printResourceLink(property.type, resourceName, property.ref));
            }

            //Should we print the rest of the nested object?
            if(!property.stopPrint) {
              responseString += printResponseBullets(resource, apiName);
            }
          }
        } 
        else {

          if(property.database) {
            responseString += printBullet(name, property.putDescription, property.database.trim());
          }
          else {
            responseString += printBullet(name, property.putDescription, toTitleCase(property.type));
          }
        }
    }

    responseParameters += responseString;
  }

  responseParameters += "</ul>";

  return responseParameters;
}

//Print resource table properties
function printResourceTableProperties(schema, properties, prefix) {

  var table = "";

  for(var i = 0; i < properties.length; i++) {
    var name = properties[i];
    var dataType = "";
    var description = "";
    var example = "";
    var property = schema.properties[name];
    var alreadyPrinted = false;

    if(prefix != "" && !schema.exclude) {
      prefix = "";
    }

    if(!property) {
      console.log("Error in printResourceTableProperties " + properties)
    }

    //Override case, do not show if set or if the name has a "." (legacy case)
    var hideFromTable = property.hideFromTable || name.indexOf(".") > -1;

    if(!hideFromTable) {

      //Database type overrides data type
      if(property.database) {
        dataType = property.database;
      }
      else if (property.type) {
        dataType = property.type;
      }

      if(property.description)
      {
        description = property.description;
      }

      if(property.ref) {
        
        //If this is a simple replace (apiname.resourcename.propertyname) + not Obj/Array, just replace the example
        if(property.ref && dataType != "object" && dataType != "array") {
            property.example = getValueFromAPI(property.ref);
        } 
        else {

          var tokens = property.ref.split(".");
          var value = tokens[tokens.length - 1];

          //Special case - Nesting allows us to nest the table.
          //STOP NEST is used if we want to have a semi-nested object - one level of nesting, one level of split-resource, to designate where to stop
          if(property.isNested && !property.stopNest) {

            //First print the header
            if(property.arrayType) {
              //case 1: Nested array, print array of object/string/etc
              dataType = util.format("Array[%s]", property.arrayType);
            } 
            else {
              //case 2: Nested object, print object
              dataType = property.type;
            }

            table += "| " + prefix + name + " | " + dataType +" | " + description +" | " + example + " |\n";

            alreadyPrinted = true;

            var apiName = tokens[0];
            var schemaName = tokens[1];
            var innerSchema = extractResource(apiName, schemaName);

            //Recurse!
            var innerProperties = getPropertyNames(innerSchema, "printResourceTableProperties"); //[ "Id", "CustomerTypeId" ... ]

            //Store old prefix for when recursion is complete
            var oldPrefix = prefix;
            prefix = prefix + name + ".";

            //Recurse!
            table += printResourceTableProperties(innerSchema, innerProperties, prefix);

            //Restore old prefix
            prefix = oldPrefix;
          }
          else {

            var linkValue = value;

            //Manually override the link - used only for SOAP APIs
            if(property.fixlink) {
              linkValue = property.fixlink;
            } 

            if(property.arrayType) {
              //case 3: Regular table, print array of link to object
              dataType = util.format("Array[%s]", linkWrap(linkValue, property.ref));
            }
            else {
              dataType = linkWrap(linkValue, property.ref);
            }
          }
        }
      } //Print an array
      else if (property.type == "array" && property.arrayType) {
        dataType = "Array[" + property.arrayType + "]";
      }

      //Include size in data type if provided
      if(property.size) {
        dataType += "("+ property.size +")";
      }

      //Place example in back ticks if provided
      if(property.example) {
        example = "`" + property.example + "`";
      }

      //Replace guid with GUID
      if(dataType.match(/guid/i) && dataType.match(/guid/i).length > 0) {
        dataType = "GUID";
      } //Fix DateTime type
      else if (dataType.match(/datetime/i) && dataType.match(/datetime/i).length > 0) {
        dataType = "DateTime";
      }
      else if (dataType.indexOf("#") == -1 && !property.database) {
        dataType = toTitleCase(dataType);
      }

      var isLegacy = doNotPrint(property.description);

      //Make sure we don't double-print
      if(!alreadyPrinted) {
        if(isLegacy) {
          table += "| *" + prefix + name + "* | *" + dataType +"* | *" + description +"* | |\n";
        }
        else {
          table += "| " + prefix + name + " | " + dataType +" | " + description +" | " + example + " |\n";
        }    
      }      
    }
  }  
  

  return table;
}

//Print a list of request bullets, where a link to a table is insufficient
function printRequestBullets(schema, title, method) {

  //Get the schema if we do not have it
  if(!schema.name) {

    var schemaObj = safeJsonParse(schema, "printRequestBullets");
    schema = extractResource(title, schemaObj.name);
  }

  var table = "";
  var requestParameters = "";
  var requiredList = getRequiredList(schema);
  var properties = getPropertyNames(schema, "printRequestBullets"); //[ "Id", "CustomerTypeId" ... ]

  if(requiredList) {
    properties = sortProperties(properties, requiredList);
  }

  if(schema.wrap) {
    requestParameters = "<ul><li><code>"+schema.name+"</code> (<strong>Required</strong>) </li><ul>";
  } else {
    requestParameters = "<ul>";
  }

  for(var i = 0; i < properties.length; i++)
  {
    var name = properties[i];
    var property = schema.properties[name];

    var requestString = "";
    var isGenerated = property.generated;
    var legacy = doNotPrint(property.description);

    if(!legacy)
    {
      if(!isGenerated || ( method == "put" && property.putGenerate)) {

        //Ignore anything in the schema with a "." in the name, those are only for table display
        if(name.indexOf(".") == -1) {

          var description = property.putDescription;
          var required = "Optional";

          if(requiredList && requiredList.indexOf(properties[i]) > -1 || property.generated) {
            required = "<strong>Required</strong>";
          }

          requestString += printBullet(name, description, required);

          if(property.ref && (property.type === "array" || property.type === "object")) {
            var tokens = property.ref.split(".");

            var apiName = tokens[0];
            var schemaName = tokens[1];
            var innerSchema = extractResource(apiName, schemaName);

            requestString += printRequestBullets(innerSchema, apiName, method);

          }
        }
      }
    }

    requestParameters += requestString;
  }

  if(schema.wrap) {
    requestParameters += "</ul>"
  }

  requestParameters += "</ul>";

  return requestParameters;
}

function fixSpacing(subStrings) {

  var tokens = subStrings.split("\n");
  var tabbedString = "";

  for (var i = 0; i < tokens.length; i++) {
    tokens[i] = "  " + tokens[i];
  }

  tabbedString += tokens.join("\n");

  return tabbedString;
}

//Convert a JSON object to JSON in memory
function safeJsonParse(obj, functionName) {
  var jsonObj;

  try {
    jsonObj = JSON.parse(obj);
  } 
  catch(e) {
    console.log(obj);
    console.log("JSON error parse at %s", functionName);
  }

  return jsonObj;
}

//Extracted "required" list from schema
function getRequiredList(schema) {

  var requiredList = null;

  if(schema.required) {
    requiredList = schema.required;
  }

  return requiredList;
}

function convertDateToUTC(date) { 
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}