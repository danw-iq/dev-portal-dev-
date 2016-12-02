---
title:  Pricing
permalink: /api/pricing/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

Pricing information for products can be retrieved and managed using the Pricing API.

### Notes

1. Two types of prices are supported: regular price and sale price
2. Multiple currencies are not supported, default retailer currency is implied
3. Pricing information for products can be set up at any level in the Company Tree
4. Term-based pricing is available to accommodate for scenarios where price varies based on contractual commitment

### Pricing Resolution

When getting pricing for a product the result will be an array with an entry for each combination of Pricing Term and and Default Pricing.

Each entry will contain the following attributes used to dictate the price, in the following order:

* OverridePrice - The `SalePrice` attribute from the current or default <a href='http://developers.iqmetrix.com/api/pricing/#saleoverrideprice'>SaleOverridePrice</a>
* RegularPrice - Regular price set on the <a href='http://developers.iqmetrix.com/api/pricing/#pricing'>Pricing</a>, must be greater than or equal to 0

Each <a href='http://developers.iqmetrix.com/api/pricing/#pricing'>Pricing</a> also contains a set of values used to store information. These values do not dictate pricing.

* FloorPrice - Minimum amount the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a> should be sold for. The user should not be able to discount past this price without permission (Manager Override)
* OriginalPrice - This value is used to show the original price of an item, should it need to be displayed with the Regular and Sale prices



# Endpoints


* Sandbox: <a href="https://pricingdemo.iqmetrix.net/v1">https://pricingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://pricing.iqmetrix.net/v1">https://pricing.iqmetrix.net/v1</a>



# Resources


## Pricing

{{callout_info}}<b>RQ Connection</b> The following fields are not currently synced to RQ: IsDiscountable and FloorPrice{{end}}

```json
{
	"Id": "16446",
	"CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
	"CompanyId": "14146",
	"EntityId": "14202",
	"FloorPrice": "3.99",
	"IsDiscountable": "false",
	"OriginalPrice": "4.99",
	"OverridePrice": "3.99",
	"OverridePriceId": "1177",
	"PricingTermId": "78",
	"RegularPrice": "10.0"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| CatalogItemId (`GUID`) | [CatalogItem](/api/catalog/#catalogitem) identifier | 
| CompanyId (`Integer`) | Identifier for the Company associated with this Pricing | 
| EntityId (`Integer`) | [CompanyTreeNode](/api/company-tree/#companytreenode) identifier at which the price is set | 
| FloorPrice (`Decimal`) | The minimum amount the CatalogItem should be sold for | 
| IsDiscountable (`Boolean`) | A flag to indicate if this Pricing allows discounting. This is not enforced by the API | 
| OriginalPrice (`Decimal`) | Value used to explicitly show the original price of an item, should it need to be displayed with the regular and sale/override prices | 
| OverridePrice (`Decimal`) | This value is retrieved from the `SalePrice` of the current or default [SaleOverridePrice](#SaleOverridePrice) | 
| OverridePriceId (`Integer`) | Identifier for a <a href='http://developers.iqmetrix.com/api/pricing/#saleoverrideprice'>SaleOverridePrice</a> | 
| PricingTermId (`Integer`) | [PricingTerm](#pricingterm) identifier | 
| RegularPrice (`Decimal`) | The regular price, must be greater than or equal to 0 | 
| *PricingTierId (`String`)* | *Reserved for internal use* | |

## SaleOverridePrice

<p>SaleOverridePrice is used to set a sale pricing for a specific date. OverridePrice is set using the <strong>active</strong> SaleOverridePrice SalePrice property, determined using the following rules:</p><ul><li>If there is a SaleOverridePrice defined for the current date, it is used</li><li>Otherwise, if there is a Default (IsDefault set to true) SaleOverridePrice, it is used </li><li>Otherwise, null is returned</li></ul>{{callout_info}}<b>RQ Connection</b> Future SaveOverridePrice values are not currently synced to RQ, this feature is coming soon.{{end}}

```json
{
	"Id": "1177",
	"CompanyId": "14146",
	"IsDefault": "true",
	"PricingInformationId": "16446",
	"SalePrice": "3.99",
	"StartDateUTC": "2015-12-02T00:00:00",
	"StopDateUTC": "2015-12-31T00:00:00"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| CompanyId (`Integer`) | Identifier for the Company associated with this Pricing | 
| IsDefault (`Boolean`) | A flag to indicate that this is the default SaleOverridePrice | 
| PricingInformationId (`Integer`) | Identifier for a [Pricing](#pricing) | 
| SalePrice (`Decimal`) | Sale price | 
| StartDateUTC (`DateTime`) | Date and time the sale pricing begins, in UTC | 
| StopDateUTC (`DateTime`) | Date and time the sale pricing ends, in UTC | 

## PricingTerm

```json
{
	"Id": "78",
	"Active": "true",
	"CanFinance": "true",
	"CarrierEntityId": "9",
	"DisplayName": "2 Year Plan",
	"EntityId": "14146",
	"Name": "2 Year Plan",
	"NumberOfPayments": "1",
	"TermLengthInYears": "3"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Active (`Boolean`) | A flag to indicate of this PricingTerm is active. When set to false, this PricingTerm can still be used, but does not appear in the responses to the Getting All Active Pricing Terms request | 
| CanFinance (`Boolean`) | A flag to indicate if this PricingTerm can be financed | 
| CarrierEntityId (`Integer`) | Identifier of a [Carrier](/api/entities/#Carrier) | 
| DisplayName (`String`) | Localized string | 
| EntityId (`Integer`) | Identifier for the [Company](/api/company-tree/#company) | 
| Name (`String(255)`) | Name | 
| NumberOfPayments (`Integer`) | If `CanFinance` is true, the number of payments for financing, otherwise this value is `null` | 
| TermLengthInYears (`Integer`) | Length of the PricingTerm in years | 





# Requests



## <span class='post'>POST</span> or <span class='put'>PUT</span> Product Pricing at Company Level

{{note}}
  When Product Pricing is set at the Company level, all Locations within the Company will use this Product Pricing by default unless <b>overridden</b> by a Location level Pricing.
  For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.
{{end}}


> Definition

```
POST /Companies({CompanyId})/Pricing
```

> Example Request

```javascript
POST /Companies(14146)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OriginalPrice": 4.99,
    "PricingTermId": 78,
    "RegularPrice": 10
}'
```

```csharp
static IRestResponse CreatingOrUpdatingProductPricingAtCompanyLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"OriginalPrice\":4.99,\"PricingTermId\":78,\"RegularPrice\":10}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingOrUpdatingProductPricingAtCompanyLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"OriginalPrice\":4.99,\"PricingTermId\":78,\"RegularPrice\":10}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"OriginalPrice\":4.99,\"PricingTermId\":78,\"RegularPrice\":10}";

response = RestClient.post 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



#### Request Parameters

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>OriginalPrice</code> (Optional) </li><li><code>PricingTermId</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```json
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OriginalPrice": 4.99,
    "OverridePrice": 3.99,
    "OverridePriceId": 1177,
    "PricingTermId": 78,
    "RegularPrice": 10
}
```



 [pricing](#Pricing)



## <span class='post'>POST</span> or <span class='put'>PUT</span> Product Pricing at Location Level

{{note}}This request can be used to set Product Pricing for a specific Location. Location level Pricing <b>overrides</b> any Product Pricing set at the Company level. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


> Definition

```
POST /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
```

> Example Request

```javascript
POST /Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OriginalPrice": 4.99,
    "PricingTermId": 78,
    "RegularPrice": 10
}'
```

```csharp
static IRestResponse CreatingOrUpdatingProductPricingAtLocationLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"OriginalPrice\":4.99,\"PricingTermId\":78,\"RegularPrice\":10}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingOrUpdatingProductPricingAtLocationLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"OriginalPrice\":4.99,\"PricingTermId\":78,\"RegularPrice\":10}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"OriginalPrice\":4.99,\"PricingTermId\":78,\"RegularPrice\":10}";

response = RestClient.post 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



#### Request Parameters

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>OriginalPrice</code> (Optional) </li><li><code>PricingTermId</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```json
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OriginalPrice": 4.99,
    "OverridePrice": 3.99,
    "OverridePriceId": 1177,
    "PricingTermId": 78,
    "RegularPrice": 10
}
```



 [pricing](#Pricing)



## <span class='get'>GET</span> Product Pricing for a Retail Location



> Definition

```
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
```

> Example Request

```javascript
GET /Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductPricingForARetailLocation()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
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

public static CloseableHttpResponse GettingProductPricingForARetailLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 16446,
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CompanyId": 14146,
        "EntityId": 14202,
        "FloorPrice": 3.99,
        "IsDiscountable": false,
        "OriginalPrice": 4.99,
        "OverridePrice": 3.99,
        "OverridePriceId": 1177,
        "PricingTermId": 78,
        "RegularPrice": 10
    }
]
```



 Array[[pricing](#Pricing)]



## <span class='get'>GET</span> Product Pricing at Company Level



> Definition

```
GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing
```

> Example Request

```javascript
GET /Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductPricingAtCompanyLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
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

public static CloseableHttpResponse GettingProductPricingAtCompanyLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 16446,
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CompanyId": 14146,
        "EntityId": 14202,
        "FloorPrice": 3.99,
        "IsDiscountable": false,
        "OriginalPrice": 4.99,
        "OverridePrice": 3.99,
        "OverridePriceId": 1177,
        "PricingTermId": 78,
        "RegularPrice": 10
    }
]
```



 Array[[pricing](#Pricing)]



## <span class='get'>GET</span> all Active Pricing Terms



> Definition

```
GET /Companies({CompanyId})/PricingTerms
```

> Example Request

```javascript
GET /Companies(14146)/PricingTerms
Authorization: Bearer (Access Token)
Accept: application/json
Accept-Language: en-US
```


```shell
curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Accept-Language: en-US"
```

```csharp
static IRestResponse GettingAllActivePricingTerms()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Accept-Language", "en-US"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllActivePricingTerms() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Accept-Language", "en-US"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Accept-Language' => 'en-US',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 78,
        "Active": true,
        "CanFinance": true,
        "CarrierEntityId": 9,
        "DisplayName": "2 Year Plan",
        "EntityId": 14146,
        "Name": "2 Year Plan",
        "NumberOfPayments": 1,
        "TermLengthInYears": 3
    }
]
```



 Array[[pricingterm](#PricingTerm)]



## <span class='get'>GET</span> a Pricing Term



> Definition

```
GET /Companies({CompanyId})/PricingTerms({PricingTermId})
```

> Example Request

```javascript
GET /Companies(14146)/PricingTerms(78)
Authorization: Bearer (Access Token)
Accept: application/json
Accept-Language: en-US
```


```shell
curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Accept-Language: en-US"
```

```csharp
static IRestResponse GettingAPricingTerm()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Accept-Language", "en-US"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAPricingTerm() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Accept-Language", "en-US"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Accept-Language' => 'en-US',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>PricingTermId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/pricing/#pricingterm'>PricingTerm</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 78,
    "Active": true,
    "CanFinance": true,
    "CarrierEntityId": 9,
    "DisplayName": "2 Year Plan",
    "EntityId": 14146,
    "Name": "2 Year Plan",
    "NumberOfPayments": 1,
    "TermLengthInYears": 3
}
```



 [pricingterm](#PricingTerm)



## <span class='post'>POST</span> a Sale Price

When creating a SaleOverridePrice, the following rules are enforced:
<ul>
  <li>If StartDate or StopDate are supplied, they must both be provided, StartDate must be before StopDate and IsDefault must be false</li>
  <li>If StartDate and StopDate are null, IsDefault must be true</li>
  <li>For each Pricing resource, there can only be one SaleOverridePrice where IsDefault is true (this is the "Default" Sale price)</li>
  <li>SalePrice must be greater than or equal to 0</li>
  <li>Multiple date ranges can be defined (multiple sales), but date ranges cannot overlap</li>
</ul>


> Definition

```
POST /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices
```

> Example Request

```javascript
POST /Companies(14146)/Pricing(16446)/SaleOverridePrices
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "IsDefault": true,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}'
```

```csharp
static IRestResponse CreatingASalePrice()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"IsDefault\":true,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingASalePrice() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"IsDefault\":true,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"IsDefault\":true,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}";

response = RestClient.post 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>PricingId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/pricing/#pricing'>Pricing</a></li>
</ul>



#### Request Parameters

<ul><li><code>IsDefault</code> (<strong>Required</strong>) - There can only be one default SaleOverridePrice for a Pricing. If StartDate and StopDate are provided, this must be false</li><li><code>SalePrice</code> (Optional) - Must be greater than or equal to 0, defaults to 0</li><li><code>StartDateUTC</code> (Optional) - If provided, StopDate must be provided, StartDate must be before StopDate and IsDefault must be false</li><li><code>StopDateUTC</code> (Optional) - If provided, StartDate must be provided, StartDate must be before StopDate and IsDefault must be false</li></ul>

### Response Parameters



> Example Response

```json
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}
```



 [saleoverrideprice](#SaleOverridePrice)



## <span class='get'>GET</span> All Sale Pricing



> Definition

```
GET /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices
```

> Example Request

```javascript
GET /Companies(14146)/Pricing(16446)/SaleOverridePrices
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllSalePricing()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
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

public static CloseableHttpResponse GettingAllSalePricing() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>PricingId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/pricing/#pricing'>Pricing</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 1177,
        "CompanyId": 14146,
        "IsDefault": true,
        "PricingInformationId": 16446,
        "SalePrice": 3.99,
        "StartDateUTC": "2015-12-02T00:00:00",
        "StopDateUTC": "2015-12-31T00:00:00"
    }
]
```



 Array[[saleoverrideprice](#SaleOverridePrice)]



## <span class='put'>PUT</span> a Sale Pricing



> Definition

```
PUT /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices({SaleOverridePriceId})
```

> Example Request

```javascript
PUT /Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}'
```

```csharp
static IRestResponse UpdatingASalePricing()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":1177,\"CompanyId\":14146,\"IsDefault\":true,\"PricingInformationId\":16446,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingASalePricing() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":1177,\"CompanyId\":14146,\"IsDefault\":true,\"PricingInformationId\":16446,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":1177,\"CompanyId\":14146,\"IsDefault\":true,\"PricingInformationId\":16446,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}";

response = RestClient.put 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>PricingId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/pricing/#pricing'>Pricing</a></li>
    <li><code>SaleOverridePriceId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/pricing/#saleoverrideprice'>SaleOverridePrice</a></li>
</ul>



#### Request Parameters

<ul><li><code>IsDefault</code> (<strong>Required</strong>) - There can only be one default SaleOverridePrice for a Pricing. If StartDate and StopDate are provided, this must be false</li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>SalePrice</code> (Optional) - Must be greater than or equal to 0, defaults to 0</li><li><code>StartDateUTC</code> (Optional) - If provided, StopDate must be provided, StartDate must be before StopDate and IsDefault must be false</li><li><code>StopDateUTC</code> (Optional) - If provided, StartDate must be provided, StartDate must be before StopDate and IsDefault must be false</li></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}
```



 [saleoverrideprice](#SaleOverridePrice)



## <span class='delete'>DELETE</span> a Sale Pricing



> Definition

```
DELETE /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices({SaleOverridePriceId})
```

> Example Request

```javascript
DELETE /Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DeletingASalePricing()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
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

public static CloseableHttpResponse DeletingASalePricing() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>PricingId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/pricing/#pricing'>Pricing</a></li>
    <li><code>SaleOverridePriceId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/pricing/#saleoverrideprice'>SaleOverridePrice</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```






## <span class='get'>GET</span> Product Pricing by Pricing Term



> Definition

```
GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing?$filter={PricingTermId}
```

> Example Request

```javascript
GET /Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductPricingByPricingTerm()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78");
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

public static CloseableHttpResponse GettingProductPricingByPricingTerm() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
    <li><code>PricingTermId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/pricing/#pricingterm'>PricingTerm</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 16446,
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CompanyId": 14146,
        "EntityId": 14202,
        "FloorPrice": 3.99,
        "IsDiscountable": false,
        "OriginalPrice": 4.99,
        "OverridePrice": 3.99,
        "OverridePriceId": 1177,
        "PricingTermId": 78,
        "RegularPrice": 10
    }
]
```



 Array[[pricing](#Pricing)]



# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `A non-default sale override price must have`<br/>`start and stop dates associated with it.` | StartDate and StopDate must either both be set or both be null |
| `HTTP 400` | `The start date is after, or equal to the end date.`<br/>` The start date must come before the end date.` | StartDate must be before StopDate |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br/>` id found in the request content don't match.` | When performing a PUT, ensure any URI parameters also in the request body match |
| `HTTP 400` | `The date range overlaps with another sale period for`<br/>` this pricing record.` | Update or delelete the existing SaleOverridePrice that overlaps with the date range |
| `HTTP 400` | `A default sale override price cannot have start `<br/>`or stop dates associated with it.` | Ensure StartDate and StopDate are not set if IsDefault is true |
| `HTTP 400` | `The sale price must be greater or equal to zero.` | Ensure SalePrice is non-negative |
| `HTTP 400` | `There is already a default sales overide for this pricing record.`<br/>` Either delete it first, or modify that record.` | Delete or modify the existing default SaleOverridePrice |
| `HTTP 400` | `Entity is not related to company` | Ensure the [Location](/api/company-tree/#location) belongs to the [Company](/api/company-tree/#company) specified in the URI |
| `HTTP 400` | `Error while extracting the request query...` | Ensure $filter query parameter is formatted correctly |
| `HTTP 404` | `Cannot find matching records` | Ensure [CatalogItem](/api/catalog/#catalogitem) ID is valid, CatalogItem exists and belongs to the Company specified in the URI |
| `HTTP 404` | `That term does not exist` | Ensure [PricingTerm](#pricingterm) ID is valid |
| `HTTP 500` | `An error occurred while updating the entries` | Ensure request body is correct, ensure Name property does not contain more then 255 characters |

