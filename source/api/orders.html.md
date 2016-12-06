---
title:  Orders
permalink: /api/orders/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The Order service is a centralized location for interacting with orders and their items. Each order is assigned an OrderType and OrderStatus, as are the items in the order. For example, an order could have an `InStock` item that has been `Processed`.

The state flow illustrated below shows the process from creating an order to its completion. An order can only be cancelled when in the `Pending` state, and cannot be cancelled otherwise.
<img src="{{ "/images/order-state-flow.png" | prepend: site.url }}" style="height: 80%; width: 80%" />



# Endpoints


* Sandbox: <a href="https://orderdemo.iqmetrix.net/v1">https://orderdemo.iqmetrix.net/v1</a>
* Production: <a href="https://order.iqmetrix.net/v1">https://order.iqmetrix.net/v1</a>



# Resources


## Order

```json
{
	"Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
	"Name": "iPhone 5 Order",
	"BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
	"BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
	"CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
	"DiscountAmount": "15.0",
	"DiscountCode": "MTRY-15",
	"DiscountDescription": "Military discount",
	"EmployeeId": "15",
	"EntityId": "14202",
	"OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
	"OrderExpiryHours": "20",
	"OrderType": "Sales",
	"OrderTypeId": "3",
	"PrintableId": "8765-1234-987",
	"ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
	"ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
	"ShippingEntityId": "14202",
	"State": "Created",
	"TenderId": "TT101IN18"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| Name (`String`) | Name | 
| BillingAddressId (`GUID`) | Unique identifier for the billing [Address](/api/crm/#address) | 
| BillingCustomerId (`GUID`) | Unique identifier for the billing [Customer](/api/crm/#customer) | 
| CreatedDateUtc (`DateTime`) | The date and time the Order was created, in UTC | 
| DiscountAmount (`Decimal`) | The value of the discount to be applied at the Order level | 
| DiscountCode (`String`) | The discount code for a discount applied to this Order | 
| DiscountDescription (`String`) | A description of the discount | 
| EmployeeId (`Integer`) | Identifier for the Employee who created this Order | 
| EntityId (`Integer`) | Identifier for the [Location](/api/company-tree/#location) | 
| OrderExpiryDate (`DateTime`) | The date and time this Order expires and can no longer be updated, in UTC | 
| OrderExpiryHours (`Integer`) | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | 
| OrderType (`String`) | Name of the [OrderType](#ordertype) | 
| OrderTypeId (`Integer`) | See [OrderType](#ordertype) for a list of acceptable values | 
| PrintableId (`String`) | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | 
| ShippingAddressId (`GUID`) | Unique identifier for the shipping [Address](/api/crm/#address) | 
| ShippingCustomerId (`GUID`) | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, ShippingEntityId must be excluded | 
| ShippingEntityId (`Integer`) | Identifier for the Location this Order will be shipped to. | 
| State (`String`) | See [OrderState](#orderstate) for a list of acceptable values | 
| TenderId (`String`) | An invoice number from the system that created the Order, Invoice Number in RQ | 
| *CustomerId (`String`)* | *This is a legacy property that should not be used* | |
| *SourceId (`String`)* | *Reserved for future use* | |
| *SourceName (`String`)* | *Reserved for future use* | |
| *TenderOrigin (`String`)* | *Reserved for future use* | |

## Item

```json
{
	"Id": "8592718e-bcca-468c-8009-38678929b693",
	"Cost": "5.99",
	"Description": "Samsung Galaxy S4 Standard Battery",
	"ItemStatus": "New",
	"ItemStatusId": "1",
	"ItemType": "DropShip",
	"ItemTypeId": "1",
	"Index": "0",
	"ListPrice": "12.99",
	"Notes": "Dented corner",
	"OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
	"ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
	"Quantity": "2",
	"SellingPrice": "9.99",
	"SerialNumbers": "abc321",
	"SKU": "00001",
	"ShippingOptionId": "1",
	"SupplierEntityId": "14107",
	"SupplierReference": "10",
	"TrackingInformation": [
		{
		"Quantity": "1",
	"TrackingNumber": "1TTTTN4421"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier for this Item | 
| Cost (`Decimal`) | Cost of this Item, defaults to 0 | 
| Description (`String`) | Description of this Item | 
| ItemStatus (`String`) | Name of the [ItemStatus](#itemstatus) | 
| ItemStatusId (`Integer`) | See [ItemStatus](#itemstatus) for a list of acceptable values | 
| ItemType (`String`) | Name of the [ItemType](#itemtype) | 
| ItemTypeId (`String`) | See [ItemType](#itemtype) for a list of acceptable values | 
| Index (`Integer`) | A value used for sorting Items, such as in a shopping cart | 
| ListPrice (`Decimal`) | List Price of this Item, defaults to 0 | 
| Notes (`String`) | Notes for this Item | 
| OrderId (`GUID`) | Unique identifier for the [Order](#order), specified by the OrderId in the URI | 
| ProductId (`String`) | Identifier for the Product. Generally, this is a CatalogItemId | 
| Quantity (`Integer`) | Amount of this Item In Stock, defaults to 0 | 
| SellingPrice (`Decimal`) | Selling Price of this Item, defaults to 0 | 
| SerialNumbers (`Array[string]`) | Serial numbers intended for product serialization | 
| SKU (`String`) | SKU for this Item | 
| ShippingOptionId (`String`) | Identifier for the ShippingOption that this Item will use | 
| SupplierEntityId (`Integer`) | Identifier for the Supplier of this Item | 
| SupplierReference (`String`) | May be used for additional Supplier reference information | 
| TrackingInformation (`Array[object]`) | Tracking information in the form of key-value pairs | 
| TrackingInformation.Quantity (`Integer`) | Number of items being tracked | 
| TrackingInformation.TrackingNumber (`String`) | Tracking number | 
| *ItemExtensions (`Array[object]`)* | *Reserved for future use* | |

## OrderFull

**OrderFull** is an extension on the Order resource

```json
{
	"Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
	"Name": "iPhone 5 Order",
	"BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
	"BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
	"CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
	"DiscountAmount": "15.0",
	"DiscountCode": "MTRY-15",
	"DiscountDescription": "Military discount",
	"EmployeeId": "15",
	"EntityId": "14202",
	"OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
	"OrderExpiryHours": "20",
	"OrderType": "Sales",
	"OrderTypeId": "3",
	"PrintableId": "8765-1234-987",
	"ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
	"ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
	"ShippingEntityId": "14202",
	"State": "Created",
	"TenderId": "INV112",
	"Items": ""
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| Name (`String`) | Name | 
| BillingAddressId (`GUID`) | Unique identifier for the billing [Address](/api/crm/#address) | 
| BillingCustomerId (`GUID`) | Unique identifier for the billing [Customer](/api/crm/#customer) | 
| CreatedDateUtc (`DateTime`) | The date and time the Order was created, in UTC | 
| DiscountAmount (`Decimal`) | The value of the discount to be applied at the Order level | 
| DiscountCode (`String`) | The discount code for a discount applied to this Order | 
| DiscountDescription (`String`) | A description of the discount | 
| EmployeeId (`Integer`) | Identifier for the Employee who created this Order | 
| EntityId (`Integer`) | Identifier for the [Location](/api/company-tree/#location) | 
| OrderExpiryDate (`DateTime`) | The date and time this Order expires and can no longer be updated, in UTC | 
| OrderExpiryHours (`Integer`) | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | 
| OrderType (`String`) | Name of the [OrderType](#ordertype) | 
| OrderTypeId (`Integer`) | See [OrderType](#ordertype) for a list of acceptable values | 
| PrintableId (`String`) | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | 
| ShippingAddressId (`GUID`) | Unique identifier for the shipping [Address](/api/crm/#address) | 
| ShippingCustomerId (`GUID`) | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, ShippingEntityId must be excluded | 
| ShippingEntityId (`Integer`) | Identifier for the Location this Order will be shipped to. | 
| State (`String`) | See [OrderState](#orderstate) for a list of acceptable values | 
| TenderId (`String`) | An invoice number from the system that created the Order, Invoice Number in RQ | 
| Items (`Array[[orders](/api/item/#Item)]`) | The Items in the [Order](#order) | 
| *CustomerId (`String`)* | *This is a legacy property that should not be used* | |
| *SourceId (`String`)* | *Reserved for future use* | |
| *SourceName (`String`)* | *Reserved for future use* | |
| *TenderOrigin (`String`)* | *Reserved for future use* | |



## Enumerations

### ItemStatus

| OrderType | ItemType | Id | 
|:----------|:---------|:---|
| Dropship | New | 1 |
| Dropship | Cancelled | 2 |
| Dropship | Processed | 3 |
| Dropship | Ordered | 4 |
| Dropship | Error | 5 |
| Dropship | NotAvailable | 6 |
| Dropship | Shipped | 7 |
| Dropship | Received | 8 |
| eCommerce | New | 13 |
| eCommerce | Processed | 14 |
| eCommerce | Cancelled | 17 |
| InStock | New | 9 |
| InStock | Processed | 10 |
| InStock | Error | 11 |
| InStock | BackOrder | 12 |
| InStock | Cancelled | 16 |
| Shipping | Shipping | 15 |

### ItemType

| Id | Item Type | Description | 
|:---|:----------|:------------|
| 1 | DropShip | Item is available to be shipped |
| 2 | InStock | Item is in stock |
| 3 | eCommerce | Item is from an eCommerce platform |
| 4 | Shipping | Item is shipping |

### OrderState

| Id | Name |
|:---|:-----|
| 0 | Created |
| 1 | Pending |
| 2 | Processed |
| 3 | Cancelled |
| 4 | Completed |

### OrderType

| Id | Name | Description |
|:---|------|:------------|
| 3 | Purchase | An Order placed to a Supplier or Vendor |
| 4 | RMA | Return Merchandise Authorization, an Order for returns, repairs or replacements |
| 1 | Sales | An Order placed by a Customer |
| 2 | Transfer | An Order to relocate inventory |


# Requests



## <span class='post'>POST</span> an Order

{{note}}The <code>EntityId</code> used in the request parameters must belong to the <code>CompanyId</code> used in the URI.{{end}}


> Definition

```
POST /Companies({CompanyId})/Orders
```

> Example Request

```javascript
POST /Companies(14146)/Orders
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "TenderId": "TT101IN18"
}'
```

```csharp
static IRestResponse CreatingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"TT101IN18\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"TT101IN18\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"TT101IN18\"}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders', body, {
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

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}
```



 [order](#Order)



## <span class='get'>GET</span> All Order Summaries for a Company



> Definition

```
GET /Companies({CompanyId})/Orders
```

> Example Request

```javascript
GET /Companies(14146)/Orders
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllOrderSummariesForACompany()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
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

public static CloseableHttpResponse GettingAllOrderSummariesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": 15,
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "TT101IN18"
    }
]
```



 Array[[order](#Order)]



## <span class='post'>POST</span> an Item to an Order



> Definition

```
POST /Companies({CompanyId})/Orders({OrderId})/Items
```

> Example Request

```javascript
POST /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Cost": 5.99,
    "Description": "Samsung Galaxy S4 Standard Battery",
    "ItemStatusId": 1,
    "ItemTypeId": "1",
    "Index": 0,
    "ListPrice": 12.99,
    "Notes": "Dented corner",
    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "Quantity": 2,
    "SellingPrice": 9.99,
    "SerialNumbers": [
        "abc321"
    ],
    "SKU": "00001",
    "ShippingOptionId": "1",
    "SupplierEntityId": 14107,
    "SupplierReference": "10",
    "TrackingInformation": [
        {
            "Quantity": 1,
            "TrackingNumber": "1TTTTN4421"
        }
    ]
}'
```

```csharp
static IRestResponse AddingAnItemToAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatusId\":1,\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse AddingAnItemToAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatusId\":1,\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatusId\":1,\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>OrderId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a> being updated</li>
</ul>



#### Request Parameters

<ul><li><code>ItemStatusId</code> (<strong>Required</strong>) </li><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>TrackingNumber</code> (<strong>Required</strong>) </li></ul></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "8592718e-bcca-468c-8009-38678929b693",
    "Cost": 5.99,
    "Description": "Samsung Galaxy S4 Standard Battery",
    "ItemStatus": "New",
    "ItemStatusId": 1,
    "ItemType": "DropShip",
    "ItemTypeId": "1",
    "Index": 0,
    "ListPrice": 12.99,
    "Notes": "Dented corner",
    "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "Quantity": 2,
    "SellingPrice": 9.99,
    "SerialNumbers": [
        "abc321"
    ],
    "SKU": "00001",
    "ShippingOptionId": "1",
    "SupplierEntityId": 14107,
    "SupplierReference": "10",
    "TrackingInformation": [
        {
            "Quantity": 1,
            "TrackingNumber": "1TTTTN4421"
        }
    ]
}
```



 [item](#Item)



## <span class='get'>GET</span> all Items on an Order



> Definition

```
GET /Companies({CompanyId})/Orders({OrderId})/Items
```

> Example Request

```javascript
GET /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllItemsOnAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
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

public static CloseableHttpResponse GettingAllItemsOnAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>OrderId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a> being updated</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": "8592718e-bcca-468c-8009-38678929b693",
        "Cost": 5.99,
        "Description": "Samsung Galaxy S4 Standard Battery",
        "ItemStatus": "New",
        "ItemStatusId": 1,
        "ItemType": "DropShip",
        "ItemTypeId": "1",
        "Index": 0,
        "ListPrice": 12.99,
        "Notes": "Dented corner",
        "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "Quantity": 2,
        "SellingPrice": 9.99,
        "SerialNumbers": [
            "abc321"
        ],
        "SKU": "00001",
        "ShippingOptionId": "1",
        "SupplierEntityId": 14107,
        "SupplierReference": "10",
        "TrackingInformation": [
            {
                "Quantity": 1,
                "TrackingNumber": "1TTTTN4421"
            }
        ]
    }
]
```



 Array[[item](#Item)]



## <span class='get'>GET</span> an Order



> Definition

```
GET /Companies({CompanyId})/Orders({OrderId})
```

> Example Request

```javascript
GET /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
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

public static CloseableHttpResponse GettingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>OrderId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}
```



 [order](#Order)



## <span class='put'>PUT</span> an Order



> Definition

```
PUT /Companies({CompanyId})/Orders({OrderId})
```

> Example Request

```javascript
PUT /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}'
```

```csharp
static IRestResponse UpdatingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"TT101IN18\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"TT101IN18\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"TT101IN18\"}";

response = RestClient.put 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>OrderId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a></li>
</ul>



#### Request Parameters

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}
```



 [order](#Order)



## Processing an Order



> Definition

```
POST /Companies({CompanyId})/Orders({OrderId})/Process
```

> Example Request

```javascript
POST /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e"
}'
```

```csharp
static IRestResponse ProcessingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse ProcessingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\"}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>OrderId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a></li>
</ul>



#### Request Parameters

<ul><li><code>OrderId</code> (<strong>Required</strong>) </li></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}
```



 [order](#Order)



## <span class='post'>POST</span> an Order with Items

{{note}}Instead of creating an Order and then adding Items to the Order one at a time, this request can be used to create an Order with Items all at once.{{end}}


> Definition

```
POST /Companies({CompanyId})/OrderFull
```

> Example Request

```javascript
POST /Companies(14146)/OrderFull
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "TenderId": "INV112",
    "Items": [
        {
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatusId": 1,
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "1TTTTN4421"
                }
            ]
        }
    ]
}'
```

```csharp
static IRestResponse CreatingAnOrderWithItems()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"INV112\",\"Items\":[{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatusId\":1,\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingAnOrderWithItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"INV112\",\"Items\":[{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatusId\":1,\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"INV112\",\"Items\":[{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatusId\":1,\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}]}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull', body, {
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

<ul><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>EntityId</code> (Optional) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>ItemStatusId</code> (<strong>Required</strong>) </li><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>TrackingNumber</code> (<strong>Required</strong>) </li></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "1TTTTN4421"
                }
            ]
        }
    ]
}
```



 [orderfull](#OrderFull)



## <span class='get'>GET</span> All Orders for a Company



> Definition

```
GET /Companies({CompanyId})/OrderFull
```

> Example Request

```javascript
GET /Companies(14146)/OrderFull
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllOrdersForACompany()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
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

public static CloseableHttpResponse GettingAllOrdersForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": 15,
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "INV112",
        "Items": [
            {
                "Id": "8592718e-bcca-468c-8009-38678929b693",
                "Cost": 5.99,
                "Description": "Samsung Galaxy S4 Standard Battery",
                "ItemStatus": "New",
                "ItemStatusId": 1,
                "ItemType": "DropShip",
                "ItemTypeId": "1",
                "Index": 0,
                "ListPrice": 12.99,
                "Notes": "Dented corner",
                "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
                "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                "Quantity": 2,
                "SellingPrice": 9.99,
                "SerialNumbers": [
                    "abc321"
                ],
                "SKU": "00001",
                "ShippingOptionId": "1",
                "SupplierEntityId": 14107,
                "SupplierReference": "10",
                "TrackingInformation": [
                    {
                        "Quantity": 1,
                        "TrackingNumber": "1TTTTN4421"
                    }
                ]
            }
        ]
    }
]
```



 Array[[orderfull](#OrderFull)]



## <span class='get'>GET</span> an Order with Items



> Definition

```
GET /Companies({CompanyId})/OrderFull({OrderId})
```

> Example Request

```javascript
GET /Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAnOrderWithItems()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
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

public static CloseableHttpResponse GettingAnOrderWithItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>OrderId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a> being updated</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "1TTTTN4421"
                }
            ]
        }
    ]
}
```



 [orderfull](#OrderFull)



## <span class='put'>PUT</span> an Order with Items

{{note}}The <code>OrderId</code> in the URI must match the <code>OrderId</code> used in the request parameters{{end}}


> Definition

```
PUT /Companies({CompanyId})/OrderFull({OrderId})
```

> Example Request

```javascript
PUT /Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "1TTTTN4421"
                }
            ]
        }
    ]
}'
```

```csharp
static IRestResponse UpdatingAnOrderWithItems()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"INV112\",\"Items\":[{\"Id\":\"8592718e-bcca-468c-8009-38678929b693\",\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemStatusId\":1,\"ItemType\":\"DropShip\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingAnOrderWithItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"INV112\",\"Items\":[{\"Id\":\"8592718e-bcca-468c-8009-38678929b693\",\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemStatusId\":1,\"ItemType\":\"DropShip\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":15,\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"INV112\",\"Items\":[{\"Id\":\"8592718e-bcca-468c-8009-38678929b693\",\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemStatusId\":1,\"ItemType\":\"DropShip\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"1TTTTN4421\"}]}]}";

response = RestClient.put 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>OrderId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a> being updated</li>
</ul>



#### Request Parameters

<ul><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>EntityId</code> (Optional) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>ItemStatusId</code> (<strong>Required</strong>) </li><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>TrackingNumber</code> (<strong>Required</strong>) </li></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": 15,
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "1TTTTN4421"
                }
            ]
        }
    ]
}
```



 [orderfull](#OrderFull)



## <span class='get'>GET</span> Pending Orders by Location



> Definition

```
GET /Companies({CompanyId})/Orders?$filter=State eq 'Pending' and EntityId eq {LocationId}
```

> Example Request

```javascript
GET /Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingPendingOrdersByLocation()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202");
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

public static CloseableHttpResponse GettingPendingOrdersByLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": 15,
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "TT101IN18"
    }
]
```



 Array[[order](#Order)]



## <span class='get'>GET</span> Orders by PrintableId

{{tip}}<code>PrintableId</code> is an identifier for an Order that can used to print on invoices. This request is useful for searching for an Order using a previously printed or saved invoice.{{end}}

> Definition

```
GET /Companies({CompanyId})/Orders?$filter=PrintableId eq '{PrintableId}'
```

> Example Request

```javascript
GET /Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingOrdersByPrintableid()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'");
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

public static CloseableHttpResponse GettingOrdersByPrintableid() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>PrintableId</code> (<strong>Required</strong>)  - An <a href='http://developers.iqmetrix.com/api/orders/#order'>Order</a> identifier printed on invoices</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": 15,
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "TT101IN18"
    }
]
```



 Array[[order](#Order)]



# Errors

| Error Code  | Description | Reason |
|:------------|:------------|:-------|
| `HTTP 400` | `Bad Request` | Billing Customer (id={x}) not found for company {y}. Proccessing an Order requires a Billing Customer on the Order |
| `HTTP 400` | `Bad Request` | The request could not be understood by the server. The message returned in the response body will give more details on why the request was invalid |
| `HTTP 400` | `Entity is not related to company` | Ensure the `EntityId` used in the request belongs to the `Company` specified in the URI |
| `HTTP 400` | `The request is invalid` | Ensure the `OrderId` used in the request matches the OrderId used in the URI |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br>`id found in the request content don't match` | Ensure the `OrderId` used in the request matches the OrderId used in the URI | 
| `HTTP 404` | `Order resource with id {x} cannot be found` | Ensure the provided OrderId is correct |
| `HTTP 409` | `Conflict` | Order expired and can no longer be updated |
| `HTTP 409` | `Resource state transition from {x} to {y} is invalid` | Order state can only be manually updated from Created to Pending |
| `HTTP 500` | `An error has occurred` | Ensure the provided Tracking Number is valid |

