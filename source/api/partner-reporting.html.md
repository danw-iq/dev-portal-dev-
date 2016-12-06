---
title:  Partner Reporting
permalink: /api/partner-reporting/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The Partner Reporting API allows a Partner to retrieve sales transactions for dealers they have a relationship with.



# Endpoints


* Sandbox: <a href="https://reportingdemo.iqmetrix.net/v1">https://reportingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://reporting.iqmetrix.net/v1">https://reporting.iqmetrix.net/v1</a>



# Resources


## Transaction

```json
{
	"CompanyId": "1548",
	"CompanyName": "CompanyA",
	"StoreId": "548",
	"StoreName": "Vancouver City Centre Mall",
	"RQEmployeeId": "897",
	"SalesPersonName": "Mike Johnson",
	"InvoiceId": "36977459",
	"OriginalInvoiceId": "36977400",
	"SalesTransactionDateTime": "2015-12-03 17:35:00.000",
	"SalesTransactionType": "Sales",
	"ProductName": "Samsung Galaxy S4 16GB - Black Mist",
	"ProductSku": "WDDDSM000146",
	"ProductLibrarySlug": "M3310-V1-E13076",
	"Quantity": "1",
	"UnitCost": "5.99",
	"GrossProfit": "4.99",
	"TotalSales": "19.99",
	"SerialNumber": "359367059548016",
	"ManufacturerName": "Samsung",
	"ActivationType": "New Activation",
	"CarrierName": "Sasktel Mobility"
}
```

| Name | Description |
|:-----|:------------|
| CompanyId (`Integer`) | Identifier for the Dealer | 
| CompanyName (`String`) | Dealer name | 
| StoreId (`Integer`) | Identifier for a [Location](/api/company-tree/#location) where the Transaction took place | 
| StoreName (`String`) | Name of the [Location](/api/company-tree/#location) where the Transaction took place | 
| RQEmployeeId (`Integer`) | Identifier of the sales person who tendered the Transaction. EmployeeId in RQ. Only unique in the context of a dealer | 
| SalesPersonName (`String`) | Name of the sales person who tendered the Transaction | 
| InvoiceId (`String`) | Identifier of the Invoice. Only unique in the context of a dealer | 
| OriginalInvoiceId (`String`) | When SalesTransactionType is Refund, this property is the InvoiceId of the original invoice. Only unique in the context of a dealer | 
| SalesTransactionDateTime (`DateTime`) | Date when the Transaction occured (store local time) | 
| SalesTransactionType (`String`) | Type of Transaction (i.e. Sales, Refund) | 
| ProductName (`String`) | Name of the Product on the Transaction | 
| ProductSku (`String`) | Product SKU saved in RQ dealer database | 
| ProductLibrarySlug (`String`) | iQmetrix internal product unique identifier. | 
| Quantity (`Integer`) | Number of items sold on the Transaction | 
| UnitCost (`Decimal`) | The unit cost of the Product | 
| GrossProfit (`Decimal`) | Gross profit from the Transaction | 
| TotalSales (`Decimal`) | Total sales from the Transaction | 
| SerialNumber (`String`) | Serial Number of the Product on the Transaction | 
| ManufacturerName (`String`) | Name of the [Manufacturer](/api/entity-store/#manufacturer) of the Product on the Transaction | 
| ActivationType (`String`) | Activation type of the Transaction. See [ActivationTypes](/api/carrier-integration/#activationtype) for a list of acceptable values | 
| CarrierName (`String`) | Name of the Carrier | 





# Requests



## <span class='get'>GET</span> Sales Transactions

This report will return sales data for both **physical** products and **non-physical** products, such as activations, upgrades and refunds.


> Definition

```
GET /partners({PartnerId})/salesTransactions?startDate={StartDate}&endDate={EndDate}&$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /partners(36)/salesTransactions?startDate=2015-12-03T08:00:00.000Z&endDate=2015-12-30T08:00:00.000Z&$skip=0&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03T08:00:00.000Z&endDate=2015-12-30T08:00:00.000Z&$skip=0&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingSalesTransactions()
{
    var client = new RestClient("https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03T08:00:00.000Z&endDate=2015-12-30T08:00:00.000Z&$skip=0&$top=10");
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

public static CloseableHttpResponse GettingSalesTransactions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03T08:00:00.000Z&endDate=2015-12-30T08:00:00.000Z&$skip=0&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03T08:00:00.000Z&endDate=2015-12-30T08:00:00.000Z&$skip=0&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>PartnerId</code> (<strong>Required</strong>)  - Identifier for the Partner</li>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which to begin search request</li>
    <li><code>EndDate</code> (<strong>Required</strong>)  - Date at which to end search request</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take. Must be in the range [1-100]. Defaults to 20.</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
  "_links": {
    "prev": null,
    "self": "/v1/partners(36)/salesTransactions?$skip=0&$top=10&StartDate=2015-10-03T17:35:00.000Z&EndDate=2016-12-30T12:00:00.000Z",
    "next": "/v1/partners(36)/salesTransactions?$skip=10&$top=10&StartDate=2015-10-03T17:35:00.000Z&EndDate=2016-12-30T12:00:00.000Z"
  },
  "_metadata": {
    "count": 100,
    "skip": 0,
    "top": 10
  },
  "items": [
    {
      "CompanyId": 1548,
      "CompanyName": "CompanyA",
      "StoreId": 548,
      "StoreName": "Vancouver City Centre Mall",
      "RQEmployeeId": 897,
      "SalesPersonName": "Mike Johnson",
      "InvoiceId": "36977459",
      "OriginalInvoiceId": "36977400",
      "SalesTransactionDateTime": "2015-12-03 17:35:00.000",
      "SalesTransactionType": "Sales",
      "ProductName": "Samsung Galaxy S4 16GB - Black Mist",
      "ProductSku": "WDDDSM000146",
      "Quantity": 1,
      "TotalSales": 35.99,
      "UnitCost": 5.7,
      "GrossProfit": 30.29,
      "ProductLibrarySlug": "M3310-V1-E13076",
      "SerialNumber": "359367059548016",
      "ManufacturerName": "Samsung",
      "ActivationType": "New Activation",
      "CarrierName": "Sasktel Mobility"
    },          
    {
      "CompanyId": "1548",
      "CompanyName": "CompanyA",
      "StoreId": 548,
      "StoreName": "White Rock",
      "RQEmployeeId": 397,
      "SalesPersonName": "Jane Smith",
      "InvoiceId": 19949,
      "OriginalInvoiceId": 1994546,
      "SalesTransactionDateTime": "2015-10-03 10:4:00.000",
      "SalesTransactionType": "Refund",
      "ProductName": "$10 Fido Device Protection (iPhone and select Premium Tab) Term",
      "ProductSKU": "FDFERB000195",
      "Quantity": -1,
      "TotalSales": -25,
      "UnitCost": 0,
      "GrossProfit": -25,
      "ProductLibrarySlug": null,
      "SerialNumber": "6047236477",
      "ManufacturerName": "",
      "ActivationType": "NotSet",
      "CarrierName": null
    },
    {
      "CompanyId": "1548",
      "CompanyName": "CompanyA",
      "StoreId": 542,
      "StoreName": "Kinetic - Mission",
      "RQEmployeeId": 415,
      "SalesPersonName": "John Smith",
      "InvoiceId": 1994908,
      "OriginalInvoiceId": 1994908,
      "SalesTransactionDateTime": "2015-10-03 10:45:00.000",
      "SalesTransactionType": "Sales",
      "ProductName": "Sony Xperia TL",
      "ProductSKU": "DHADSO000045",
      "Quantity": 1,
      "TotalSales": 0,
      "UnitCost": 300,
      "GrossProfit": -300,
      "ProductLibrarySlug": "M73",
      "SerialNumber": "352226073857091",
      "ManufacturerName": "Sony Ericsson",
      "ActivationType": "Upgrade",
      "CarrierName": "Rogers Wireless Inc."
    }
  ]
}

```



 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[[partner-reporting](/api/transaction/#Transaction)]) </li><ul><li><code>CompanyId</code> (Integer) </li><li><code>CompanyName</code> (String) </li><li><code>StoreId</code> (Integer) </li><li><code>StoreName</code> (String) </li><li><code>RQEmployeeId</code> (Integer) </li><li><code>SalesPersonName</code> (String) </li><li><code>InvoiceId</code> (String) </li><li><code>OriginalInvoiceId</code> (String) </li><li><code>SalesTransactionDateTime</code> (Datetime) </li><li><code>SalesTransactionType</code> (String) </li><li><code>ProductName</code> (String) </li><li><code>ProductSku</code> (String) </li><li><code>ProductLibrarySlug</code> (String) </li><li><code>Quantity</code> (Integer) </li><li><code>UnitCost</code> (Decimal) </li><li><code>GrossProfit</code> (Decimal) </li><li><code>TotalSales</code> (Decimal) </li><li><code>SerialNumber</code> (String) </li><li><code>ManufacturerName</code> (String) </li><li><code>ActivationType</code> (String) </li><li><code>CarrierName</code> (String) </li></ul></ul>



# Pagination

The Parner Reporting API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 30 if no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "prev": null,
            "self": "/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$top=5",
            "next": "/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$skip=5&$top=5"
        },
        "_metadata": {
            "count": 15,
            "skip": 0,
            "top": 5
        }
    }

In the example above, the `_links` section is included in the data returned from an API call to <a href="#getting-sales-transactions">Getting Sales Transactions</a>, where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.


# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 401` | `Unauthorized Access` | Ensure the access code provided is valid |
| `HTTP 404` | `Not Found` | Ensure the PartnerId provided in the URI is correct |
| `HTTP 400` | `Bad Request` | Ensure URI parameters are valid |

