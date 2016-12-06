---
title:  Product Subscription
permalink: /api/product-subscription/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

Suppliers have the ability to add products to their subscribable lists and retrieve a list of companies from a subscription.

Suppliers can also create their own subscribable lists and add/remove companies from their lists, or have iQmetrix handle these scenarios. When creating a subscribable list, you must specify the GUID (e.g. <a href="http://www.guidgenerator.com/online-guid-generator.aspx" target="_blank">Online GUID Generator</a>).



# Endpoints


* Sandbox: <a href="https://productsubscriptionsdemo.iqmetrix.net/v1">https://productsubscriptionsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://productsubscriptions.iqmetrix.net/v1">https://productsubscriptions.iqmetrix.net/v1</a>



# Resources


## Subscription

```json
{
	"Companies": "undefined",
	"ListId": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4"
}
```

| Name | Description |
|:-----|:------------|
| Companies (`Array[[product-subscription](/api/company/#Company)]`) | Companies for the subscription | 
| ListId (`GUID`) | Subscription identifier | 

## Company

```json
{
	"DateSubscribedUtc": "2015-09-23T23:48:37.744Z",
	"Id": "146454",
	"Name": "Kentel Corp"
}
```

| Name | Description |
|:-----|:------------|
| DateSubscribedUtc (`DateTime`) | Date company subscribed to product subscription, in UTC | 
| Id (`Integer`) | Company identifier | 
| Name (`String`) | Company Name | 

## SubscribableList

```json
{
	"EntityId": "14107",
	"Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
	"Name": "Nozama's Product List",
	"Dropshippable": "true",
	"Products": "undefined",
	"Version": "2",
	"CountOfProducts": "1"
}
```

| Name | Description |
|:-----|:------------|
| EntityId (`Integer`) | [Supplier](/api/entity-store/#supplier) identifier | 
| Id (`GUID`) | Subscribable List identifer | 
| Name (`String`) | Title of product subscription | 
| Dropshippable (`Boolean`) | Indicates if products in list are dropshippable. Defaults to false | 
| Products (`Array[[product-subscription](/api/product/#Product)]`) | Products for the subscribable list | 
| Version (`Integer`) | Subscription revision | 
| CountOfProducts (`Integer`) | Number of Products in the List | 
| *MasterEntityId (`Integer`)* | *Reserved for internal use* | |

## Product

```json
{
	"Dropshippable": "true",
	"Price": "24.99",
	"ProductName": "Samsung Galaxy S4 Standard Battery",
	"ProductSlugs": "M5218",
	"VendorSku": "B00LAOKN4S",
	"Version": "2"
}
```

| Name | Description |
|:-----|:------------|
| Dropshippable (`Boolean`) | Indicates if the product is dropshippable | 
| Price (`Decimal`) | Product MSRP. Currency code defaults internally to retailer location.  | 
| ProductName (`String`) | Name of product | 
| ProductSlugs (`Array[string]`) | List of slugs that match the vendor sku | 
| VendorSku (`String`) | Vendor product SKU | 
| Version (`Integer`) | Product revision | 





# Requests



## <span class='get'>GET</span> All Companies in a Product Subscription



> Definition

```
GET /subscription({ListId})
```

> Example Request

```javascript
GET /subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllCompaniesInAProductSubscription()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
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

public static CloseableHttpResponse GettingAllCompaniesInAProductSubscription() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ListId</code> (<strong>Required</strong>) </li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
  "ListId": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
  "Companies": [
      {
        "Id": 14146,
        "Name": "KENTEL Corp",
        "DateSubscribedUtc": "2015-11-23T19:12:09.92Z"
      },
    ...  
  ]
}

```



 Array[[subscription](#Subscription)]



## <span class='post'>POST</span> a Subscribable List

Allows you to create your own subscribable list. You must provide a GUID for the  `SubscribableListId`.{{note}}The naming convention for subscribable lists is in the format "Vendor Name - Product List Name". For example, Supplier123 - Otterbox Products.{{end}}


> Definition

```
PUT /subscribablelists({ListId})
```

> Example Request

```javascript
PUT /subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "EntityId": 14107,
    "Name": "Test List Name",
    "Dropshippable": true
}
'
```

```csharp
static IRestResponse CreatingASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"EntityId\":14107,\"Name\":\"Test List Name\",\"Dropshippable\":true}", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14107,\"Name\":\"Test List Name\",\"Dropshippable\":true}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"EntityId\":14107,\"Name\":\"Test List Name\",\"Dropshippable\":true}

response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ListId</code> (<strong>Required</strong>)  - GUID you have added for <a href='http://developers.iqmetrix.com/api/product-subscription/#subscribablelist'>SubscribableList</a></li>
</ul>



#### Request Parameters

<ul><li><code>EntityId</code> (<strong>Required</strong>) - <a href='http://developers.iqmetrix.com/api/entity-store/#supplier'>Supplier</a> identifier</li><li><code>Name</code> (<strong>Required</strong>) - Title of product subscription</li><li><code>Dropshippable</code> (Optional) - Defaults to false</li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "EntityId": 14107,
    "Name": "Nozama - Samsung Products",
    "Dropshippable": true,
    "Products": [],
    "Version": 2
}

```



 [subscribablelist](#SubscribableList)



## <span class='get'>GET</span> a Subscribable List



> Definition

```
GET /subscribablelists({SubscribableListId})
```

> Example Request

```javascript
GET /subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
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

public static CloseableHttpResponse GettingASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>SubscribableListId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-subscription/#subscribablelist'>SubscribableList</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "EntityId": 14107,
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "Name": "Nozama's Product List",
    "Dropshippable": true,
    "Products": [
        {
            "Dropshippable": true,
            "Price": 24.99,
            "ProductName": "Samsung Galaxy S4 Standard Battery",
            "ProductSlugs": [
                "M5218"
            ],
            "VendorSku": "B00LAOKN4S",
            "Version": 2
        }
    ],
    "Version": 2,
    "CountOfProducts": 1
}
```



 [subscribablelist](#SubscribableList)



## <span class='put'>PUT</span> Products in a Subscribable List

{{note}}The new product list in the payload replaces the old product list. Any matching old products (determined by vendor sku) will have their slug and version data copied over into the new products.{{end}}


> Definition

```
PUT /subscribablelists({SubscribableListId})
```

> Example Request

```javascript
PUT /subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
   "EntityId": 14107,
   "Name": "Nozama's Product List",
   "Products": [
       {
           "ProductName": "Samsung Galaxy S4 Standard Battery",
           "VendorSku": "B00LAOKN4S",
           "Price": 24.99,
           "Dropshippable": true
       }
   ]          
}
'
```

```csharp
static IRestResponse UpdatingProductsInASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingProductsInASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}

response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>SubscribableListId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-subscription/#subscribablelist'>SubscribableList</a></li>
</ul>



#### Request Parameters

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) </li><li><code>Dropshippable</code> (Optional) </li><li><code>Price</code> (Optional) </li><li><code>ProductSlugs</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul><li><code>Id</code> (Optional) </li><li><code>Dropshippable</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "EntityId": 41407,
    "Name": "Nozama's Product List",
    "Products": [
        {
            "ProductName": "Samsung Galaxy S4 Standard Battery",
            "VendorSku": "B00LAOKN4S",
            "Price": 24.99,
            "Dropshippable": true
            "ProductSlugs": [],
            "Version": 1
        }
    ],
    "Version": 2
}

```



 [subscribablelist](#SubscribableList)



## <span class='post'>POST</span> a Company to a Subscribable List



> Definition

```
PUT /subscription({ListId})/company({CompanyId})
```

> Example Request

```javascript
PUT /subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

```csharp
static IRestResponse AddingACompanyToASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingACompanyToASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ListId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-subscription/#subscribablelist'>SubscribableList</a></li>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 204 Content-Type: application/json
```






## <span class='delete'>DELETE</span> a Company from a Subscribable List



> Definition

```
DELETE /subscription({ListId})/company({CompanyId})
```

> Example Request

```javascript
DELETE /subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DeletingACompanyFromASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
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

public static CloseableHttpResponse DeletingACompanyFromASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ListId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-subscription/#subscribablelist'>SubscribableList</a></li>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 204 Content-Type: application/json
```






# Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Validation failed. EntityId does not belong to vendor` | Occurs when entering an incorrect EntityId |
| `HTTP 400` | `<Field> should not be empty` | Occurs if Required Parameter is missing |
| `HTTP 404` | `Document not found` | Occurs when entering an incorrect ID in the uri | 

