---
title:  Field Definitions
permalink: /api/field-definitions/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---

{% include linkrefs.html %}




# Overview

A **Field Definition** defines both how {{Product}} specification details are displayed on a screen, such as a website, and how it is stored in the Product Library.

As an example, the following Field Definition describes how battery capacity for a product might be displayed.

```csharp
{
    "Id": 58,
    "StringId": "BatteryCapacity",
    "InputType": "Float",
    "IsRequired": false,
    "LanguageInvariantUnit": "mAh",
    "DisplayName": "Battery Capacity",
    "Unit": "mAh",
    "Options": []
}
```

Using this Field Definition, below is one possible way to display this information on a screen, such as on a "Product Detail" page for a product in an e-commerce site.

In this example, we are using an example value of 1800. 

```html
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="panel-title">Battery</div>
    </div>
    <table class="table">
        <tbody>
            <tr>
                <td class="name">Battery Capacity</td>
                <td class="value">1800 mAh</td>
            </tr>             
        </tbody>
    </table>
</div>
```

The result displayed on the page, with some styling, is shown below

<img src="{{ "/images/fielddefinition.png" | prepend: site.url }}" />



# Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>



# Resources


## FieldDefinition

{{note}} Use the <strong>StringId</strong> identifier instead of <strong>Id</strong>, as Id may change across Environments {{end}}

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| StringId (`String`) | Consistent identifier across all [Environments](/#environments) | 
| InputType (`String`) | Type of UI element this FieldDefinition uses, see [InputTypes](#inputypes) for a list of acceptable values | 
| IsRequired (`Boolean`) | A flag to indicate if the input represented by this FieldDefinition can be empty (false) or not (true) | 
| LanguageInvariantUnit (`String`) | Unit | 
| DisplayName (`String`) | Value to be displayed in the UI | 
| Options (`Array[object]`) | List of Options, only used when InputType is SingleSelect or MultiSelect | 
| Options.Id (`Integer`) | Identifier | 
| Options.Value (`String`) | Value | 
| *LanguageInvariantName (`String`)* | *This is a legacy property that should not be used* | |





## Enumerations

### InputTypes

| Name |
|:-------|
| Currency | 
| Date | 
| Float | 
| Integer | 
| MultiSelect | 
| SingleSelect | 
| TextSingleLine | 
| TextMultipleLine | 
| YesNo | 


# Requests



## Getting All Field Definitions



> Definition

```
GET /FieldDefinitions
```

> Example Request

```javascript
GET /FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllFieldDefinitions()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllFieldDefinitions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```







### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
[
    {
        "Id": 1,
        "StringId": "Product Name",
        "InputType": "TestSingleLine",
        "IsRequired": true,
        "DisplayName": "Product Name",
        "Options": [
            {}
        ]
    }
]
```



 Array[<a href='#fielddefinition'>FieldDefinition</a>]



## Getting a Field Definition



> Definition

```
GET /FieldDefinitions({FieldDefinitionId})
```

> Example Request

```javascript
GET /FieldDefinitions(1)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAFieldDefinition()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAFieldDefinition() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>FieldDefinitionId</code> (<strong>Required</strong>)  - Identifier for the {{FieldDefinition}}
    </li>
    </ul>





### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
{
    "Id": 1,
    "StringId": "Product Name",
    "InputType": "TestSingleLine",
    "IsRequired": true,
    "DisplayName": "Product Name",
    "Options": [
        {}
    ]
}
```



 <a href='#fielddefinition'>FieldDefinition</a>



# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Document not found` | Ensure FieldDefinitionId is correct |

