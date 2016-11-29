---
title:  Classification Tree
permalink: /api/classification-tree/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---






# Overview

A **Classification Tree** is a hierarchical structure describing a taxonomy of {{Products}}. 

To learn more about Classification Trees, see {{ClassificationTree_Concept}}.



# Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>



# Resources


## Classification

Classifications are used to group Products together by similar features.
A Product can only have a single Classification.
For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of Smartphones.

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Name | 
| Order (`Integer`) | Sorting order | 
| ProductTemplate (`<a href='/api/classification-tree/#producttemplate'>ProductTemplate</a>`) |  | 

## ProductTemplate

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Name | 

## Category

A Category is a node in a Classification Tree that represents a logical grouping of related Classifications.
For example, 'iPhone' and 'Tablet' Classifications might both be children of a 'Device' Category.
There is a limit to 20 levels of depth for Categories.

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Name | 
| Categories (`Array[object]`) | Child Categories | 
| Classifications (`Array[object]`) | Child Classifications | 
| Order (`Integer`) | Sorting order | 

## ClassificationTree

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Name | 
| Description (`String`) | Description | 
| Categories (`Array[<a href='/api/classification-tree/#category'>Category</a>]`) | Categories in the Tree | 
| Classifications (`Array[<a href='/api/classification-tree/#classification'>Classification</a>]`) | Classifications for the Tree | 
| Owner (`<a href='/api/classification-tree/#owner'>Owner</a>`) | Information about the [Company](/api/company-tree/#company) that owns this Tree | 
| Version (`Integer`) | Latest revision number | 
| *IsCanonical (`Boolean`)* | *Reserved for internal use* | |

## Owner

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | [Company](/api/company-tree/#company) Identifier | 
| Name (`String`) | [Company](/api/company-tree/#company) Name | 





# Requests



## <span class='get'>GET</span> a Classification Tree



> Definition

```
GET /ClassificationTrees({ClassificationTreeId})
```

> Example Request

```javascript
GET /ClassificationTrees(1)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAClassificationTree()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)");
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

public static CloseableHttpResponse GettingAClassificationTree() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>ClassificationTreeId</code> (<strong>Required</strong>)  - Identifier for the {{ClassificationTree}}
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
    "Name": "Cellular & Accessories",
    "Description": "Classification of products for wireless retail",
    "Categories": [
        {
            "Id": 2,
            "Name": "Devices",
            "Categories": [],
            "Classifications": [],
            "Order": 1
        }
    ],
    "Classifications": [
        {
            "Id": 4,
            "Name": "Smartphones",
            "Order": 1,
            "ProductTemplate": {
                "Id": 16,
                "Name": "Wireless Device"
            }
        }
    ],
    "Owner": {
        "Id": 1,
        "Name": "iQmetrix"
    },
    "Version": 41
}
```



 <a href='#classificationtree'>ClassificationTree</a>



# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Unable to find document id {x}` | Ensure ClassificationTreeId is correct |
| `HTTP 406` | `Locale not available` | This error occurs with some browser extensions such as Postman. To resolve, add the header `Accept-Language: en-US` |
