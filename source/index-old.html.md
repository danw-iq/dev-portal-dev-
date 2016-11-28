---
title: API Reference

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>


search: true
---

# Introduction

Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.

We have language bindings in Shell, Ruby, and Python! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

This example API documentation page was created with [Slate](https://github.com/tripit/slate). Feel free to edit it and use it as a base for your own API's documentation.

# Authentication

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`
-->

### Query Parameters

Parameter | Default | Description

--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

-->

# Cost Feed API

## Overview

The cost feed provides iQmetrix with the wholesale cost (inclusive cost for the company) for each product.  
The cost feed allows suppliers to input a list of products, where each product includes one cost and list of associated companies.

These costs will be provided for retailers (companies) to use for future transactions and will be reflected in RQ and BI reporting. 

Products can be repeated in this feed with different costs. For example, the iPhone 6 could be priced differently depending on where it is sold. 

{{note}} 
Ensure each company ID has only *one* cost per product.
{{end}}


## Endpoints


* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>


## Resources

### Cost

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifer | `2e18496c-8f73-4298-8c96-a07816926734` |
| Products | Array[object] | List of products for which the cost is being updated |  |
| Products.Sku | String | Vendor product SKU | `1115884` |
| Products.Cost | Decimal | Vendor product cost applied to the associated companies | `12.99` |
| Products.CompanyIds | Array[integer] | List of [Company](/api/company-tree#company) identifiers to receive Vendor product cost | `14146` |


## Requests

### Adding a Product to Cost Feed


> POST /Suppliers({SupplierId})/Cost


#### Headers

* Authorization: Bearer (Access Token) - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a>
* Accept: application/json
* Content-Type: application/json


#### URI Parameters

* SupplierId (**Required**) - Identifier of the Supplier
   

#### Request Parameters

* Products (**Required**) 
 * Sku (**Required**) 
 * Cost (**Required**) 
 * CompanyIds (**Required**)


```javascript
POST /Suppliers(14107)/Cost
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}
```

```shell
curl -X POST "https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}
```

```csharp
static IRestResponse AddingAProductToCostFeed()
{
    var client = new RestClient("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse AddingAProductToCostFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
# This code sample uses [rest-client](https://github.com/rest-client/rest-client), ensure you `gem install rest-client`.

body = "{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}";

response = RestClient.post 'https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```

#### Response

[Cost](#cost)


```javascript
HTTP 202 Content-Type: application/json
{
    "Id": "2e18496c-8f73-4298-8c96-a07816926734",
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}
```

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |
