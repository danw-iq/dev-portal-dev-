---
title:  Product Feed
permalink: /api/product-feed/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

{{warning}}The Product Feed endpoint will be changing to <a href="https://curation.iqmetrix.net/v1">https://curation.iqmetrix.net/v1</a>. An <code>HTTP 301 Moved Permanently</code> is currently in place for the RC and Demo environments. Please ensure that your web client is able to handle this redirect. Otherwise, you must update your system to use the new Product Feed API endpoint. Contact <a href="mailto:{{site.support_email}}?subject=Product Feed Endpoint Change">API Support Team</a> for the date and time of this change to the Production environment.{{end}}
A **Product Feed** contains the Products information for a specific vendor. Each feed will have its own unique **Feed ID**.
{{important}} A Product must contain, at minimum, the following fields: <strong>Product Name</strong>, <strong>Long Description</strong>, <strong>MSRP</strong>. {{end}}



# Endpoints


* Sandbox: <a href="https://curationdemo.iqmetrix.net/v1">https://curationdemo.iqmetrix.net/v1</a>
* Production: <a href="https://curation.iqmetrix.net/v1">https://curation.iqmetrix.net/v1</a>



# Resources


## Product

Product information for the feed. It is **highly recommended** to include `ModelName` for every product created. See {{ProductStructure_Concept}} for more information.

```json
{
	"Id": "34",
	"Assets": "undefined",
	"Classification": "undefined",
	"ClassificationTreeName": "Cellular & Accessories",
	"Fields": "undefined",
	"LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
	"Manufacturer": "Motorola",
	"ManufacturerSku": "1234",
	"ModelName": "Agent18 SlimShield Case for iPhone 6",
	"UPC": "723755004337",
	"VendorSkus": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Assets (`Array[[product-feed](/api/asset/#Asset)]`) | Assets | 
| Classification (`[product-feed](/api/classification/#Classification)`) | Refer to [Classification](/concepts/classification-tree) for more information | 
| ClassificationTreeName (`String`) | Name of the classification tree | 
| Fields (`Array[[product-feed](/api/field/#Field)]`) | A list of fields for the product. For the product being added, only include the definitions that apply | 
| LastModifiedByVendorUtc (`DateTime`) | Provides the last date that the product feed was modified by the vendor, in UTC | 
| Manufacturer (`String`) | The company that produces the product | 
| ManufacturerSku (`String`) | The Product SKU from the manufacturer | 
| ModelName (`String`) | [Master Product](/concepts/product-structure/#Master-Products) name | 
| UPC (`String`) | Universal Product Code | 
| VendorSkus (`Array[[product-feed](/api/vendorsku/#VendorSku)]`) | Vendor SKU information for the product | 
| *ProviderClassification (`String`)* | *Reserved for internal use* | |
| *UnsupportedAssets (`Array[object]`)* | *This is a legacy property that should not be used* | |

## VendorSku

Vendor information for the feed. It is **highly recommended** to include `Sku` for every product created.

```json
{
	"Description": "Phone case",
	"Sku": "1115884",
	"VendorName": "Amazon"
}
```

| Name | Description |
|:-----|:------------|
| Description (`String`) | SKU description | 
| Sku (`String`) | Vendor product SKU | 
| VendorName (`String`) | Name of the Vendor | 

## Classification

Classification information for the feed. The `TreeId` is the identifer for the Industry (e.g. Cellular and Accessories), while the `Id` is the identifier (template) for the Product (e.g. Battery Pack). See {{ClassificationTree_Concept}} for more information.

```json
{
	"Id": "4",
	"Name": "Smartphones",
	"TreeId": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Product classification identifier | 
| Name (`String`) | The name of the Classification your product falls under | 
| TreeId (`Integer`) | Classification Tree identifier | 

## Field

At minimum, the Product Name field is required along with a corresponding value.

To get a list of all field definitions, use the {{Getting_Field_Definitions}} method. 

```json
{
	"Definition": [
		{
		"Id": "1",
	"Value": "Android"
}
```

| Name | Description |
|:-----|:------------|
| Definition (`object`) | The field definition | 
| Definition.Id (`Integer`) | The field definition identifier. The definition for this parameter varies based on the [Environments](/#environments) | 
| Value (`String`) | The value for the field | 

## Asset

During the request, only the asset URLs are required. The response will contain additional information provided by the server.

Refer to {{Asset_Glossary}} for more information.

```json
{
	"Id": "31294366-948a-420c-972f-ed1450e3cdd8",
	"AssetUrl": "http://image.sample.com/b.png",
	"FileName": "Note4-white.png",
	"IsConverted": "false",
	"MimeType": "image/jpg",
	"OriginalUrl": "http://image.sample.com/b.png"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| AssetUrl (`String`) | Original URL of asset provided in request | 
| FileName (`String`) | Filename of the asset | 
| IsConverted (`Boolean`) | Indicates if the asset have been converted | 
| MimeType (`String`) | Type of Mime | 
| OriginalUrl (`String`) | Original URL of asset | 

## ProductFeed

**Product Feeds** are used to group all Products together for a particular vendor.

```json
{
	"Id": "34",
	"LastReceivedUpdatesFromProviderUtc": "2014-11-13T19:40:57.102Z",
	"Products": "undefined",
	"ProviderName": "Joe's Product Feed",
	"Version": "8"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| LastReceivedUpdatesFromProviderUtc (`DateTime`) | Date and time of last received update, in UTC | 
| Products (`Array[[product-feed](/api/product/#Product)]`) | List of [Products](#product) | 
| ProviderName (`String`) | Name of the Product Feed | 
| Version (`Integer`) | Latest revision number | 





# Requests



## <span class='post'>POST</span> a Product to a Feed



> Definition

```
POST /ProductFeeds({FeedId})/Products
```

> Example Request

```javascript
POST /ProductFeeds(34)/Products
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "Classification": {
    "TreeId": 1,
    "Id": 4
  },
  "Fields": [
    {
      "Definition": {
        "Id": 1,
        "StringId": "Product Name"
      },
      "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
    },
    {
      "Definition": {
        "Id": 129,
        "StringId": "Color Tags"
      },
      "Value": "Black, Red"
    },
    {
      "Definition": {
        "Id": 76,
        "StringId": "MSRP",
        "InputType": "Currency"
      },
      "Value": "24.99 CAD"
    }                          
  ],
  "Assets": [
    {
      "AssetUrl": "http://image.sample.com/a.jpg"
    },
    {
      "AssetUrl": "http://image.sample.com/b.png"
    },
    {
      "AssetUrl": "http://image.sample.com/c.mov"
    }
  ],
  "ModelName": "Agent18 SlimShield Case for iPhone 6",
  "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
  "Manufacturer": "Agent18",
  "ManufacturerSku": "980113579",
  "UPC": "723755004337",
  "VendorSkus": [
    {
      "Description": "Online retailer",
      "Sku": "1115884",
      "VendorName": "Amazon"
    }
  ]
}
'
```

```csharp
static IRestResponse AddingAProductToAFeed()
{
    var client = new RestClient("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"Fields\":[{\"Definition\":{\"Id\":1,\"StringId\":\"Product Name\"},\"Value\":\"Agent18 SlimShield Case for iPhone 6 - Black\"},{\"Definition\":{\"Id\":129,\"StringId\":\"Color Tags\"},\"Value\":\"Black, Red\"},{\"Definition\":{\"Id\":76,\"StringId\":\"MSRP\",\"InputType\":\"Currency\"},\"Value\":\"24.99 CAD\"}],\"Assets\":[{\"AssetUrl\":\"http://image.sample.com/a.jpg\"},{\"AssetUrl\":\"http://image.sample.com/b.png\"},{\"AssetUrl\":\"http://image.sample.com/c.mov\"}],\"ModelName\":\"Agent18 SlimShield Case for iPhone 6\",\"LastModifiedByVendorUtc\":\"2015-09-16T10:40:31.101Z\",\"Manufacturer\":\"Agent18\",\"ManufacturerSku\":\"980113579\",\"UPC\":\"723755004337\",\"VendorSkus\":[{\"Description\":\"Online retailer\",\"Sku\":\"1115884\",\"VendorName\":\"Amazon\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingAProductToAFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Classification\":{\"TreeId\":1,\"Id\":4},\"Fields\":[{\"Definition\":{\"Id\":1,\"StringId\":\"Product Name\"},\"Value\":\"Agent18 SlimShield Case for iPhone 6 - Black\"},{\"Definition\":{\"Id\":129,\"StringId\":\"Color Tags\"},\"Value\":\"Black, Red\"},{\"Definition\":{\"Id\":76,\"StringId\":\"MSRP\",\"InputType\":\"Currency\"},\"Value\":\"24.99 CAD\"}],\"Assets\":[{\"AssetUrl\":\"http://image.sample.com/a.jpg\"},{\"AssetUrl\":\"http://image.sample.com/b.png\"},{\"AssetUrl\":\"http://image.sample.com/c.mov\"}],\"ModelName\":\"Agent18 SlimShield Case for iPhone 6\",\"LastModifiedByVendorUtc\":\"2015-09-16T10:40:31.101Z\",\"Manufacturer\":\"Agent18\",\"ManufacturerSku\":\"980113579\",\"UPC\":\"723755004337\",\"VendorSkus\":[{\"Description\":\"Online retailer\",\"Sku\":\"1115884\",\"VendorName\":\"Amazon\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"Fields\":[{\"Definition\":{\"Id\":1,\"StringId\":\"Product Name\"},\"Value\":\"Agent18 SlimShield Case for iPhone 6 - Black\"},{\"Definition\":{\"Id\":129,\"StringId\":\"Color Tags\"},\"Value\":\"Black, Red\"},{\"Definition\":{\"Id\":76,\"StringId\":\"MSRP\",\"InputType\":\"Currency\"},\"Value\":\"24.99 CAD\"}],\"Assets\":[{\"AssetUrl\":\"http://image.sample.com/a.jpg\"},{\"AssetUrl\":\"http://image.sample.com/b.png\"},{\"AssetUrl\":\"http://image.sample.com/c.mov\"}],\"ModelName\":\"Agent18 SlimShield Case for iPhone 6\",\"LastModifiedByVendorUtc\":\"2015-09-16T10:40:31.101Z\",\"Manufacturer\":\"Agent18\",\"ManufacturerSku\":\"980113579\",\"UPC\":\"723755004337\",\"VendorSkus\":[{\"Description\":\"Online retailer\",\"Sku\":\"1115884\",\"VendorName\":\"Amazon\"}]}

response = RestClient.post 'https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>FeedId</code> (<strong>Required</strong>)  - Product Feed identifier</li>
</ul>



#### Request Parameters

<ul><li><code>Fields</code> (<strong>Required</strong>) </li><ul><li><code>Definition</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (Optional) </li></ul><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) </li><ul><li><code>AssetUrl</code> (<strong>Required</strong>) </li></ul><li><code>Classification</code> (Optional) </li><ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>TreeId</code> (<strong>Required</strong>) </li></ul><li><code>ClassificationTreeName</code> (Optional) </li><li><code>LastModifiedByVendorUtc</code> (Optional) </li><li><code>Manufacturer</code> (Optional) </li><li><code>ManufacturerSku</code> (Optional) </li><li><code>ModelName</code> (Optional) </li><li><code>UPC</code> (Optional) </li><li><code>VendorSkus</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Sku</code> (Optional) </li><li><code>VendorName</code> (Optional) </li></ul></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
  "Id": 17,
    "Assets": [
        {
            "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
            "FileName": "a.jpg",
            "MimeType": "image/jpg",
            "OriginalUrl": "http://image.sample.com/a.jpg",
            "IsConverted": false
        },
        {
            "Id": "e43aa38e-cdc5-4492-bf1f-6552a1805464",
            "FileName": "b.png",
            "MimeType": "image/png",
            "OriginalUrl": "http://image.sample.com/b.png",
            "IsConverted": false
        },
        {
            "Id": "49b12198-a22b-4f42-a4ab-9e78de776754",
            "FileName": "c.mov",
            "MimeType": "video/mov",
            "OriginalUrl": "http://image.sample.com/c.mov",
            "IsConverted": false
        }
    ],        
    "Classification": {
        "TreeId": 1,
        "Id": 5,
        "Name": "Cases"
    },
    "ClassificationTreeName": "Cellular & Accessories",
    "Fields": [
        {
            "Definition": {
                "Id": 1,
                "LanguageInvariantName": "Product Name",
                "StringId": "Product Name",
                "InputType": "TextSingleLine",
                "IsRequired": true,
                "LanguageInvariantUnit": "",
                "DisplayName": "Product Name",
                "Unit": "",
                "Options": []
            },
            "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
        },
        {
            "Definition": {
                "Id": 129,
                "LanguageInvariantName": "Color Tags",
                "StringId": "Color Tags",
                "InputType": "MultiSelect",
                "IsRequired": false,
                "LanguageInvariantUnit": "",
                "DisplayName": "Color Tags",
                "Unit": "",
                "Options": [
                    {
                        "Id": 1,
                        "Value": "Black"
                    },
                    {
                        "Id": 2,
                        "Value": "Blue"
                    },
                    {
                        "Id": 3,
                        "Value": "Brown"
                    },
                    {
                        "Id": 4,
                        "Value": "Gray"
                    },
                    {
                        "Id": 5,
                        "Value": "Green"
                    }
                ]
            },
            "Value": "Black, Red"
        }
    ], 
    "LastModifiedByVendorUtc": "2015-09-18T10:40:31Z",
    "Manufacturer": "Agent18",
    "ManufacturerSku": "980113579",
    "ModelName": "Agent18 SlimShield Case for iPhone 6",
    "UPC": "723755004337",
    "VendorSkus": [
        {
            "Sku": "1115884",
            "VendorName": "Amazon",
            "Description": "Online retailer"
        }
    ]
}

```



 Array[[product](#Product)]



## <span class='get'>GET</span> All Products in a Feed

Returns all the <strong>Products</strong> in a particular <strong>Product Feed</strong> indicated by the feed's <strong>Feed ID</strong> parameter. 

Useful when testing to ensure that products have been successfully added or removed.


> Definition

```
GET /ProductFeeds({FeedId})/Products
```

> Example Request

```javascript
GET /ProductFeeds(34)/Products
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllProductsInAFeed()
{
    var client = new RestClient("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
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

public static CloseableHttpResponse GettingAllProductsInAFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>FeedId</code> (<strong>Required</strong>)  - Product Feed identifier</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 34,
        "Assets": [
            {
                "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                "AssetUrl": "http://image.sample.com/b.png",
                "FileName": "Note4-white.png",
                "IsConverted": false,
                "MimeType": "image/jpg",
                "OriginalUrl": "http://image.sample.com/b.png"
            }
        ],
        "Classification": {
            "Id": 4,
            "Name": "Smartphones",
            "TreeId": 1
        },
        "ClassificationTreeName": "Cellular & Accessories",
        "Fields": [
            {
                "Definition": {
                    "Id": 1
                },
                "Value": "Android"
            }
        ],
        "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
        "Manufacturer": "Motorola",
        "ManufacturerSku": "1234",
        "ModelName": "Agent18 SlimShield Case for iPhone 6",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Description": "Phone case",
                "Sku": "1115884",
                "VendorName": "Amazon"
            }
        ]
    }
]
```



 Array[[product](#Product)]



## <span class='get'>GET</span> a Product Feed

Returns an array of <a href="#product">Products</a>, as well as additional parameters.


> Definition

```
GET /ProductFeeds({FeedId})
```

> Example Request

```javascript
GET /ProductFeeds(34)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAProductFeed()
{
    var client = new RestClient("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)");
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

public static CloseableHttpResponse GettingAProductFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>FeedId</code> (<strong>Required</strong>) </li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 34,
    "LastReceivedUpdatesFromProviderUtc": "2014-11-13T19:40:57.102Z",
    "Products": [
        {
            "Id": 34,
            "Assets": [
                {
                    "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                    "AssetUrl": "http://image.sample.com/b.png",
                    "FileName": "Note4-white.png",
                    "IsConverted": false,
                    "MimeType": "image/jpg",
                    "OriginalUrl": "http://image.sample.com/b.png"
                }
            ],
            "Classification": {
                "Id": 4,
                "Name": "Smartphones",
                "TreeId": 1
            },
            "ClassificationTreeName": "Cellular & Accessories",
            "Fields": [
                {
                    "Definition": {
                        "Id": 1
                    },
                    "Value": "Android"
                }
            ],
            "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
            "Manufacturer": "Motorola",
            "ManufacturerSku": "1234",
            "ModelName": "Agent18 SlimShield Case for iPhone 6",
            "UPC": "723755004337",
            "VendorSkus": [
                {
                    "Description": "Phone case",
                    "Sku": "1115884",
                    "VendorName": "Amazon"
                }
            ]
        }
    ],
    "ProviderName": "Joe's Product Feed",
    "Version": 8
}
```



 [productfeed](#ProductFeed)



## <span class='delete'>DELETE</span> a Product from a Feed

Updates a Product Feed (FeedId) by removing a Product (ProductId). 

> Definition

```
DELETE /ProductFeeds({FeedId})/Products({ProductId})
```

> Example Request

```javascript
DELETE /ProductFeeds(34)/Products(2)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse RemovingAProductFromAFeed()
{
    var client = new RestClient("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RemovingAProductFromAFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://curationdemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>FeedId</code> (<strong>Required</strong>) </li>
    <li><code>ProductId</code> (<strong>Required</strong>) </li>
</ul>



### Response Parameters



> Example Response

```
HTTP 204 Content-Type: application/json
```






# Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `NotFound` | Ensure URI parameters are correct |

