---
title:  Supplier Availability
permalink: /api/supplier-availability/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

Suppliers have the ability to configure availability of products.



# Endpoints


* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>



# Resources


## Availability

```json
{
	"Id": "c2a97823-196b-4b3e-891a-ba01665797e4",
	"Products": [
		{
		"IsAvailable": "true",
	"Sku": "9101AGAP6",
	"Quantity": "10"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| Products (`Array[object]`) | Products for the Availability Feed | 
| Products.IsAvailable (`Boolean`) | A flag to indicate if the Product is Available | 
| Products.Sku (`String`) | Vendor SKU | 
| Products.Quantity (`Integer`) | Product quantity | 





# Requests



## Configuring Product Availability



> Definition

```
POST /Suppliers({SupplierId})/Availability
```

> Example Request

```javascript
POST /Suppliers(14107)/Availability
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}'
```

```csharp
static IRestResponse ConfiguringProductAvailability()
{
    var client = new RestClient("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse ConfiguringProductAvailability() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}";

response = RestClient.post 'https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>SupplierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#supplier'>Supplier</a></li>
</ul>



#### Request Parameters

<ul><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>Sku</code> (<strong>Required</strong>) </li><li><code>IsAvailable</code> (Optional) </li><li><code>Quantity</code> (Optional) </li></ul></ul>

### Response Parameters



> Example Response

```
HTTP 202 Content-Type: application/json
```

```json
{
    "Id": "c2a97823-196b-4b3e-891a-ba01665797e4",
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}
```



 [availability](#Availability)



# Errors


| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect SupplierId in the uri |

