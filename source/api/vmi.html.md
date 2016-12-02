---
title: Vendor Managed Inventory
permalink: /api/vmi/
tags: []
keywords: 
audience:
last_updated: 2-12-2016
summary:
rouge: false
---

{% include linkrefs.html %}

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


## Overview

The Vendor Managed Inventory (VMI) API allows Vendors to automate inventory management. VMI provides a communication mechanism with RQ clients to report on product inventory and to create purchase orders to replenish products. RQ users will be able to see the purchase orders created using VMI API and receive them as they arrive in store. 

{{note}}RetailiQ is the legacy retail management system produced by iQmetrix, and has been replaced by RQ. In this document, RetailiQ and RQ are used synonymously.{{end}}

The VMI API uses different Authentication than other iQmetrix APIs. The credentials are assigned to you by iQmetrix and included in the body of the SOAP request. To request credentials, contact {{contact_support}}.

The Vendor Managed Inventory (VMI) API can be used to:

* Create and retrieve Purchase Orders (POs) created in RQ
* Create shipping notices for POs
* See a list of all VMI enabled stores in RQ   
* Enable and Disable companies for VMI  

### Implementation

The following call sequence is recommended. To learn more about the suggested VMI flow, see [VMI Guide](/guides/vmi).

1. [Getting a Company List](#getting-a-company-list) - Get a list of VMI enabled companies. This list contains a unique identifier for each company which is used in subsequent web method calls
2. One of the following;
  * [Getting a Store List](#getting-a-store-list) - Get the VMI enabled stores for a particular company
  * [Getting Hierarchy Info](#getting-hierarchy-info) - Get company tree (hierarchy)
3. One of the following;
  * [Getting the Inventory Report](#getting-the-inventory-report) - For each store call this web method to determine stock level, minimum and maximum levels for each product
  * [Getting the Geographic Inventory Report](#getting-the-geographic-inventory-report) - Apply logic to each level in the hierarchy to gather data for multiple stores
4. [Creating a Purchase Order](#creating-a-purchase-order) - If it is determined in step 3 that inventory of a particular set of products need to be replenished, call this method to create a purchase order in RQ
5. [Creating a Purchase Order Shipment Notice (Optional)](#creating-a-purchase-order-shipment-notice) - This method can be called to supply notification that products have shipped and any applicable serial numbers may be supplied

### Pending State

A company that is in a Pending State has...

* completed set up in RQ
* chosen you as a vendor
* added stores to the relationship
* configured products for replenishment

Pending companies must be <a href='#enabling-or-disabling-a-company'>Enabled</a> to have purchase orders created through VMI.

<hr/>
<div class="row">
  <span class="col-md-3 text-center">
    <span class="col-md-12">
      <h4>Purchase Orders</h4>
    </span>        
    <span class="col-md-12">
      <p><a href="#creating-a-purchase-order">Creating a Purchase Order</a></p>  
      <p><a href="#canceling-an-uncommitted-purchase-order">Canceling an Uncommitted Purchase Order</a></p>  
      <p><a href="#updating-a-purchase-order">Updating a Purchase Order</a></p>              
      <p><a href="#creating-an-uncommitted-purchase-order">Creating an Uncommitted Purchase Order</a></p>  
      <p><a href="#getting-committed-purchase-orders">Getting Committed Purchase Orders</a></p>  
      <p><a href="#getting-completed-purchase-orders">Getting Completed Purchase Orders</a></p>
      <p><a href="#getting-purchase-order-by-business-id">Getting Purchase Order By Business ID</a></p>
      <p><a href="#getting-purchase-order-by-reference-number">Getting Purchase Order by Reference Number</a></p>  
      <p><a href="#getting-purchase-orders-by-status">Getting Purchase Orders By Status</a></p>  
      <p><a href="#getting-uncommitted-purchase-orders">Getting Uncommitted Purchase Orders</a></p>
      <p><a href="#getting-purchase-orders-for-a-store">Getting Purchase Orders For a Store</a></p>  
      <p><a href="#creating-a-purchase-order-shipment-notice">Creating a Purchase Order Shipment Notice</a></p>  
      <p><a href="#getting-purchase-order-shipment-notices">Getting Purchase Order Shipment Notices</a></p>
    </span>
  </span>  
  <span class="col-md-3 text-center">
    <span class="col-md-12">
      <h4>Inventory</h4>
    </span>        
    <span class="col-md-12">
      <p><a href="#getting-the-inventory-list">Getting the Inventory List</a></p>  
      <p><a href="#getting-the-updated-inventory-list">Getting the Updated Inventory List</a></p>  
      <p><a href="#getting-serial-numbers-for-a-product">Getting Serial Numbers for a Product</a></p>  
      <p><a href="#getting-product-receiving-info">Getting Product Receiving Info</a></p>  
      <p><a href="#getting-transfer-counts">Getting Transfer Counts</a></p>  
      <p><a href="#updating-min-and-max-product-quantities">Updating Min and Max Product Quantities</a></p>  
      <p><a href="#getting-a-list-of-rmas">Getting a List of RMAs</a></p>
      <p><a href="#creating-a-rma">Creating a RMA</a></p>
      <p><a href="#updated-a-committed-rma">Updating a Committed RMA</a></p>
    </span>
  </span>  
  <span class="col-md-3 text-center">
    <span class="col-md-12">
      <h4>Reports</h4>
    </span>        
    <span class="col-md-12">  
      <p><a href="#getting-the-inventory-report">Getting the Inventory Report</a></p>  
      <p><a href="#getting-the-inventory-report-by-vendor-sku">Getting the Inventory Report by Vendor SKU</a></p>  
      <p><a href="#getting-the-inventory-listing-report">Getting the Inventory Listing Report</a></p>  
      <p><a href="#getting-the-adjustment-report">Getting the Adjustment Report</a></p>  
      <p><a href="#getting-the-geographic-inventory-report">Getting the Geographic Inventory Report</a></p>  
      <p><a href="#getting-the-product-sales-report">Getting the Product Sales Report</a></p>
    </span>
  </span>  
  <span class="col-md-3 text-center">
    <span class="col-md-12">
      <h4>Company Tree</h4>
    </span>        
    <span class="col-md-12">  
      <p><a href="#getting-a-company-list">Getting a Company List</a></p>  
      <p><a href="#enabling-or-disabling-a-company">Enabling or Disabling a Company</a></p>  
      <p><a href="#getting-enabled-companies">Getting Enabled Companies</a></p>  
      <p><a href="#getting-disabled-companies">Getting Disabled Companies</a></p>  
      <p><a href="#getting-pending-companies">Getting Pending Companies</a></p>  
      <p><a href="#getting-hierarchy-info">Getting Hierarchy Info</a></p>  
      <p><a href="#getting-a-store-list">Getting a Store List</a></p>
      <p><a href="#getting-store-information">Getting Store Information</a></p>  
      <p><a href="#getting-employee-list">Getting Employee List</a></p>  
    </span>
  </span>          
</div>
<hr/>


## Endpoints

* Sandbox: <a href="https://vmirc.iqmetrix.net/VMIService.asmx">https://vmirc.iqmetrix.net/VMIService.asmx</a>
* Production (Denver): <a href="https://vmi1.iqmetrix.net/VMIService.asmx">https://vmi1.iqmetrix.net/VMIService.asmx</a>
* Production (Toronto): <a href="https://vmi3.iqmetrix.net/VMIService.asmx">https://vmi3.iqmetrix.net/VMIService.asmx</a>
* Production (Philadelphia): <a href="https://vmi10.iqmetrix.net/VMIService.asmx">https://vmi10.iqmetrix.net/VMIService.asmx</a>

{{important}}
You should choose a production endpoint that is geographically closest to your data center 
{{end}}


## Resources



## VendorIdentity

Authentication for the VMI API is done by including a VendorIdentity resource in a `<vendor>` section at the beginning of each request.

VendorIdentitiy information is supplied by iQmetrix and used to authenticate requests made to the VMI API.
{{note}}Please be aware of the subtle difference between <code>&lt;vendor&gt;</code> and <code>&lt;Vendor&gt;</code> in the various requests. This API is case-sensitive and will cause an error should the incorrect tag be used.{{end}}

{{note}}VendorIdentity authentication information is <a href="{{'#environments' | prepend: site.api_baseurl}}">Environment</a> specific{{end}}

```json
{
	"VendorID": "9DC6AA95-856B-42C9-8AAF-392A2A02AC77",
	"Username": "sampleusername",
	"Password": "samplepassword",
	"Client": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| VendorID (`GUID`) | Vendor identifier | 
| Username (`String`) | Username | 
| Password (`String`) | Password | 
| Client (`[vmi](/api/clientagent/#ClientAgent)`) | Client identity | 











## ClientAgent

`VendorAccountNumber` can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`.

```json
{
	"ClientID": "c46ccb4d-2d44-4289-950a-b9cb51d58ac4",
	"Name": "DropshipTestDemo",
	"StoreID": "4",
	"VendorAccountNumber": "-1"
}
```

| Name | Description |
|:-----|:------------|
| ClientID (`GUID`) | Database identifier for corresponding client | 
| Name (`String`) | Company name | 
| StoreID (`Integer`) | Store identifer the vendor is targeting | 
| VendorAccountNumber (`String`) | Account number assigned by vendor. | 



## CompanyInformation

```json
{
	"CompanyID": "9DC6AA95-856B-42C9-8AAF-392A2A02AC77",
	"Name": "DropshipTestDemo"
}
```

| Name | Description |
|:-----|:------------|
| CompanyID (`GUID`) | Unique identifier provided by iQmetrix | 
| Name (`String`) | Company name | 



## PurchaseOrderShipmentNotice

```json
{
	"PurchaseOrderID": "84DACFD3-4095-4D50-A02E-781B86B7408E",
	"ProductItemID": "11142",
	"Quantity": "1",
	"RQPurchaseOrderID": "22073",
	"SerialNumbers": "490154203237518",
	"ShipmentNumber": "SHIP001",
	"VendorInvoiceNumber": "1002",
	"VendorSKU": "SSGS5CB"
}
```

| Name | Description |
|:-----|:------------|
| PurchaseOrderID (`GUID`) | Unique identifier | 
| ProductItemID (`Integer`) | GlobalProductId from RQ | 
| Quantity (`Integer`) | Number of items shipped | 
| RQPurchaseOrderID (`Integer`) | Identifier for the Purchase Order in RQ | 
| SerialNumbers (`Array[string]`) | Serial numbers from serialized products (e.g. Phone or SIM card) | 
| ShipmentNumber (`String`) | Vendor defined identifier for the shipment | 
| VendorInvoiceNumber (`String`) | Value supplied by the vendor when creating the purchase order | 
| VendorSKU (`String`) | The vendor part number/sku | 







## PurchaseOrder

```json
{
	"PurchaseOrderID": "28890F70-8FC9-4A9B-9458-410A8D08502D",
	"PurchaseOrderData": "undefined",
	"ProductsOrdered": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| PurchaseOrderID (`GUID`) | Unique identifier | 
| PurchaseOrderData (`[vmi](/api/purchaseorderdata/#PurchaseOrderData)`) | Purchase order | 
| ProductsOrdered (`Array[[vmi](/api/productinformation/#ProductInformation)]`) | Products ordered | 



## PurchaseOrderData

```json
{
	"PurchaseOrderID": "28890F70-8FC9-4A9B-9458-410A8D08502D",
	"BillToStoreID": "55",
	"BillToStoreName": "Cornwall west",
	"BillToVendorAccountNumber": "1",
	"IsDeleted": "false",
	"CreatedByVMI": "false",
	"CreatedDate": "3/16/2014 12:00:00 AM",
	"Comments": "comments",
	"EstimatedArrivalDate": "3/2/2014 12:00:00 AM",
	"OrderTotal": "99.99",
	"RetailiQPurchaseOrderID": "22075",
	"RetailiQPurchaseOrderNumber": "DALEKPO5",
	"ShippingTotal": "99.99",
	"ShipToStoreID": "55",
	"ShipToStoreName": "Cornwall west",
	"ShipToVendorAccountNumber": "1",
	"VendorInvoiceNumber": "15782",
	"VendorName": "SampleVendor"
}
```

| Name | Description |
|:-----|:------------|
| PurchaseOrderID (`GUID`) | Unique identifier | 
| BillToStoreID (`Integer`) | RQ StoreId | 
| BillToStoreName (`String`) | RQ store name | 
| BillToVendorAccountNumber (`String`) | Vendor account number to use for billing. Can be used in place of `BillToStoreId` | 
| IsDeleted (`Boolean`) | A flag to indicate if this purchase order has been deleted in RQ | 
| CreatedByVMI (`Boolean`) | A flag to indicate if this was created by the VMI API (true) or RQ (false) | 
| CreatedDate (`String`) | The date and time the purchase order was created, if it was created in RQ | 
| Comments (`String`) | Any comments for the purchase order | 
| EstimatedArrivalDate (`String`) | Estimated date of arrival | 
| OrderTotal (`Decimal`) | Cost of the order, provided by a vendor for informational purposes only | 
| RetailiQPurchaseOrderID (`Integer`) | Identifier of purchase order in RQ | 
| RetailiQPurchaseOrderNumber (`String`) | Purchase order number in RQ | 
| ShippingTotal (`Decimal`) | Cost of shipping | 
| ShipToStoreID (`Integer`) | Identifier of store to use for shipping | 
| ShipToStoreName (`String`) | Name of store to use for shipping | 
| ShipToVendorAccountNumber (`String`) | Vendor account number to use for shipping. Can be used in place of `ShipToStoreId` | 
| VendorInvoiceNumber (`String`) | Invoice number for the vendor | 
| VendorName (`String`) | Name of the vendor | 



## ProductInformation

```json
{
	"CategoryPath": "Activation >> Dropship",
	"DateEOL": "1/01/2016 12:00:00 AM",
	"DateReceived": "01/21/2016 16:58:23",
	"DoNotOrder": "false",
	"Enabled": "true",
	"GrossQuantityReturned": "11",
	"GrossQuantitySold": "10",
	"MaximumLevel": "100",
	"MinimumLevel": "10",
	"MinMaxLocked": "true",
	"ProductCost": "99.99",
	"ProductID": "86EE477F-C6B7-48FA-AA0A-105662D9A3ED",
	"ProductItemID": "11142",
	"ProductName": "Samsung Galaxy S6",
	"ProductReceived": "false",
	"ProductSKU": "CECPSM000017",
	"QuantityCommittedOnOrderEntry": "0",
	"QuantityInStock": "8",
	"QuantityInTransfer": "3",
	"QuantityOnBackOrder": "0",
	"QuantityOnLoan": "5",
	"QuantityOnOrder": "6",
	"QuantityOnRMA": "9",
	"QuantityOnUncommittedOrder": "2",
	"QuantityOrdered": "4",
	"QuantityReceived": "4",
	"QuantitySold": "30",
	"QuantitySuggestedByVendor": "50",
	"RetailPrice": "99.99",
	"SaleBegin": "01/01/2014 12:00:00 AM",
	"SaleEnd": "01/10/2014 12:00:00 AM",
	"SalePrice": "79.99",
	"VendorSKU": "SSGS5CB"
}
```

| Name | Description |
|:-----|:------------|
| CategoryPath (`String`) | Category location of product. path of category delimited by '>>' | 
| DateEOL (`DateTime`) | End of life date | 
| DateReceived (`String`) | Product receiving stauts in RQ | 
| DoNotOrder (`Boolean`) | A flag to indicate if the product should not be ordered | 
| Enabled (`Boolean`) | A flag to indicate if product is enabled | 
| GrossQuantityReturned (`Integer`) | Gross amount returned | 
| GrossQuantitySold (`Integer`) | Gross amount sold | 
| MaximumLevel (`Integer`) | Maximum number of Products that can be added to the PurchaseOrder | 
| MinimumLevel (`Integer`) | Minimum number of Products that can be added to the PurchaseOrder | 
| MinMaxLocked (`Boolean`) | A flag to indicate if the Min and Max values are locked (unchangeable) | 
| ProductCost (`Decimal`) | Required for PO creation or default from RQ will be used | 
| ProductID (`GUID`) | Unique identifier | 
| ProductItemID (`Integer`) | GlobalProductId from RQ | 
| ProductName (`String`) | Name | 
| ProductReceived (`Boolean`) | A flag to indicate if product was received | 
| ProductSKU (`String`) | ProductIdentifier in RQ | 
| QuantityCommittedOnOrderEntry (`Integer`) | Amount committed on an order entry | 
| QuantityInStock (`Integer`) | Amount in stock | 
| QuantityInTransfer (`Integer`) | Amount in transfer | 
| QuantityOnBackOrder (`Integer`) | Amount on back order | 
| QuantityOnLoan (`Integer`) | Amount on loan | 
| QuantityOnOrder (`Integer`) | Amount on order | 
| QuantityOnRMA (`Integer`) | Amount on RMA | 
| QuantityOnUncommittedOrder (`Integer`) | Amount on uncommitted order | 
| QuantityOrdered (`Integer`) | Amount ordered | 
| QuantityReceived (`Integer`) | Amount received | 
| QuantitySold (`Integer`) | Amount sold | 
| QuantitySuggestedByVendor (`Integer`) | Amount suggested by vendor | 
| RetailPrice (`Decimal`) | Retail price | 
| SaleBegin (`DateTime`) | Sale begin date | 
| SaleEnd (`DateTime`) | Sale end date | 
| SalePrice (`Decimal`) | Sale price | 
| VendorSKU (`String`) | Vendor SKU | 



## StoreInformation

```json
{
	"StoreID": "36",
	"Name": "Cornwall West",
	"Abbreviation": "CWW",
	"Address": "2102 11th Ave",
	"City": "Regina",
	"Country": "Canada",
	"District": "Regina",
	"PhoneNumber": "5555555555",
	"PostalZipCode": "S2S 2S2",
	"ProvinceState": "Saskatchewan",
	"Region": "Regina",
	"ShipToStoreID": "55",
	"BillToStoreID": "55",
	"VendorAccountNumber": "123"
}
```

| Name | Description |
|:-----|:------------|
| StoreID (`Integer`) | Unique identifier | 
| Name (`String`) | Name | 
| Abbreviation (`String`) | Abbrevation | 
| Address (`String`) | Address | 
| City (`String`) | City | 
| Country (`String`) | Country | 
| District (`String`) | District | 
| PhoneNumber (`String`) | Phone Number | 
| PostalZipCode (`String`) | Postal or Zip Code | 
| ProvinceState (`String`) | Province or State | 
| Region (`String`) | Region | 
| ShipToStoreID (`Integer`) | Shipping store ID | 
| BillToStoreID (`Integer`) | RQ StoreID | 
| VendorAccountNumber (`String`) | Account number assigned by vendor. | 



## ProductAndStoreInformation

```json
{
	"CategoryPath": "Activation >> Dropship",
	"ChannelID": "4bbb842d-0340-4ffc-9216-bf170c861424",
	"ChannelName": "First Channel",
	"DateEOL": "1/01/2016 12:00:00 AM",
	"DateReceived": "01/21/2016 16:58:23",
	"DistrictID": "1",
	"DistrictName": "First Region",
	"DoNotOrder": "false",
	"Enabled": "true",
	"GrossQuantityReturned": "11",
	"GrossQuantitySold": "10",
	"MaximumLevel": "100",
	"MinimumLevel": "10",
	"MinMaxLocked": "true",
	"ProductCost": "99.99",
	"ProductID": "86EE477F-C6B7-48FA-AA0A-105662D9A3ED",
	"ProductItemID": "11142",
	"ProductName": "Samsung Galaxy S6",
	"ProductReceived": "false",
	"ProductSKU": "CECPSM000017",
	"QuantityCommittedOnOrderEntry": "0",
	"QuantityInStock": "8",
	"QuantityInTransfer": "3",
	"QuantityOnBackOrder": "0",
	"QuantityOnLoan": "5",
	"QuantityOnOrder": "6",
	"QuantityOnRMA": "9",
	"QuantityOnUncommittedOrder": "2",
	"QuantityOrdered": "4",
	"QuantityReceived": "4",
	"QuantitySold": "30",
	"QuantitySuggestedByVendor": "50",
	"RegionID": "1",
	"RegionName": "First District",
	"RetailPrice": "99.99",
	"SaleBegin": "01/01/2014 12:00:00 AM",
	"SaleEnd": "01/10/2014 12:00:00 AM",
	"SalePrice": "79.99",
	"StoreID": "36",
	"StoreName": "Cornwall West",
	"VendorSKU": "SSGS5CB"
}
```

| Name | Description |
|:-----|:------------|
| CategoryPath (`String`) | Category location of product. path of category delimited by '>>' | 
| ChannelID (`GUID`) | Identifier for a Channel in RQ | 
| ChannelName (`String`) | Channel name | 
| DateEOL (`DateTime`) | End of life date | 
| DateReceived (`String`) | Product receiving stauts in RQ | 
| DistrictID (`Integer`) | Identifier for a District in RQ | 
| DistrictName (`String`) | District name | 
| DoNotOrder (`Boolean`) | A flag to indicate if the product should not be ordered | 
| Enabled (`Boolean`) | A flag to indicate if product is enabled | 
| GrossQuantityReturned (`Integer`) | Gross amount returned | 
| GrossQuantitySold (`Integer`) | Gross amount sold | 
| MaximumLevel (`Integer`) | Maximum number of Products that can be added to the PurchaseOrder | 
| MinimumLevel (`Integer`) | Minimum number of Products that can be added to the PurchaseOrder | 
| MinMaxLocked (`Boolean`) | A flag to indicate if the Min and Max values are locked (unchangeable) | 
| ProductCost (`Decimal`) | Required for PO creation or default from RQ will be used | 
| ProductID (`GUID`) | Unique identifier | 
| ProductItemID (`Integer`) | GlobalProductId from RQ | 
| ProductName (`String`) | Name | 
| ProductReceived (`Boolean`) | A flag to indicate if product was received | 
| ProductSKU (`String`) | ProductIdentifier in RQ | 
| QuantityCommittedOnOrderEntry (`Integer`) | Amount committed on an order entry | 
| QuantityInStock (`Integer`) | Amount in stock | 
| QuantityInTransfer (`Integer`) | Amount in transfer | 
| QuantityOnBackOrder (`Integer`) | Amount on back order | 
| QuantityOnLoan (`Integer`) | Amount on loan | 
| QuantityOnOrder (`Integer`) | Amount on order | 
| QuantityOnRMA (`Integer`) | Amount on RMA | 
| QuantityOnUncommittedOrder (`Integer`) | Amount on uncommitted order | 
| QuantityOrdered (`Integer`) | Amount ordered | 
| QuantityReceived (`Integer`) | Amount received | 
| QuantitySold (`Integer`) | Amount sold | 
| QuantitySuggestedByVendor (`Integer`) | Amount suggested by vendor | 
| RegionID (`Integer`) | Identifier for a Region in RQ | 
| RegionName (`String`) | Region name | 
| RetailPrice (`Decimal`) | Retail price | 
| SaleBegin (`DateTime`) | Sale begin date | 
| SaleEnd (`DateTime`) | Sale end date | 
| SalePrice (`Decimal`) | Sale price | 
| StoreID (`Integer`) | Unique identifier | 
| StoreName (`String`) | Name | 
| VendorSKU (`String`) | Vendor SKU | 



## ReceivingInfo

```json
{
	"DateReceived": "1/21/2016 4:58:24 PM",
	"ProductCost": "650",
	"ProductItemID": "20",
	"ProductName": "Samsung Galaxy Alpha Flipbook - Black/Magenta",
	"Quantity": "11",
	"RQPurchaseOrderNumber": "TT101PO1",
	"SerialNumber": "",
	"ShipToStoreID": "55",
	"ShipToStoreName": "Cornwall west",
	"RQReceivingNumber": "TT101RE1",
	"VendorName": "SampleVendor",
	"VendorSKU": "SSGS5CB"
}
```

| Name | Description |
|:-----|:------------|
| DateReceived (`DateTime`) | Date product was received | 
| ProductCost (`Decimal`) | Product cost | 
| ProductItemID (`Integer`) | Identifier of the Product in RQ | 
| ProductName (`String`) | Product name | 
| Quantity (`Integer`) | Quantity | 
| RQPurchaseOrderNumber (`String`) | Identifier of the PO in RQ | 
| SerialNumber (`String`) | Serial number | 
| ShipToStoreID (`Integer`) | Identifier of store to use for shipping | 
| ShipToStoreName (`String`) | Name of store to use for shipping | 
| RQReceivingNumber (`String`) | Receiving number in RQ | 
| VendorName (`String`) | Name of the vendor | 
| VendorSKU (`String`) | The vendor part number/sku | 



## EmployeeInformation

```json
{
	"CellPhone": "5555555555",
	"CompanyName": "KENTEL",
	"Email": "johnt@kentel.com",
	"Enabled": "true",
	"EndDate": "",
	"FirstName": "John",
	"LastName": "Tester",
	"Role": "Store Manager",
	"StartDate": "",
	"StoreAddress": "123 Main Street",
	"StoreCity": "Moon City",
	"StoreCountry": "US",
	"StoreEmail": "atlantis@kentel.com",
	"StoreID": "4",
	"StoreName": "Atlantis",
	"StorePostalCode": "90210",
	"StoreProvinceOrState": "ND"
}
```

| Name | Description |
|:-----|:------------|
| CellPhone (`String`) | Cell phone | 
| CompanyName (`String`) | Company name | 
| Email (`String`) | Email | 
| Enabled (`Boolean`) | A flag to indicate if this Employee is enabled at the store | 
| EndDate (`DateTime`) | Date employee stopped working at store, if applicable | 
| FirstName (`String`) | First name | 
| LastName (`String`) | Last name | 
| Role (`String`) | Employee role at store | 
| StartDate (`String`) | Date employee started working at store | 
| StoreAddress (`String`) | Address | 
| StoreCity (`String`) | City | 
| StoreCountry (`String`) | Country | 
| StoreEmail (`String`) | Store email | 
| StoreID (`Integer`) | Identifier for a Store in RQ | 
| StoreName (`String`) | Store name | 
| StorePostalCode (`String`) | Zip or Postal code | 
| StoreProvinceOrState (`String`) | State or Province | 

























































































## RMA

```json
{
	"ProductData": "undefined",
	"RMAID": "16",
	"RMAIDByStore": "ATTEXSB3",
	"StoreID": "0",
	"VendorID": "0",
	"CreatedByVMI": "false",
	"VendorRMANumber": "123456",
	"ShippingCost": "0",
	"Committed": "0",
	"DateCommitted": "2017-01-01T00:00:00",
	"ShippedAway": "0",
	"Completed": "0",
	"Comments": "Sent",
	"DateCreated": "2016-11-04T00:00:00"
}
```

| Name | Description |
|:-----|:------------|
| ProductData (`Array[[vmi](/api/rmaproduct/#RMAProduct)]`) | Product data | 
| RMAID (`Integer`) | Identifier | 
| RMAIDByStore (`String`) | Identifier for the RMA in RQ | 
| StoreID (`Integer`) | Identifier for a store in RQ | 
| VendorID (`Integer`) | Identifier for a vendor | 
| CreatedByVMI (`Boolean`) | A flag to indicate if the RMA was created by VMI | 
| VendorRMANumber (`String`) | Vendor RMA number | 
| ShippingCost (`Decimal`) | Shipping cost | 
| Committed (`Integer`) | A flag to indicate if the RMA is committed (1) or not (0) | 
| DateCommitted (`DateTime`) | Date the RMA was committed | 
| ShippedAway (`Integer`) | A flag to indicate if the RMA was shipped away (1) or not (0) | 
| Completed (`Integer`) | A flag to indicate if the RMA is completed (1) or not (0) | 
| Comments (`String`) | Comments | 
| DateCreated (`DateTime`) | Date the RMA was created | 







## ProductData

```json
{
	"RQProductSku": "CDATSS000019",
	"RQProductID": "19",
	"SerialNumberRemoved": "789987741147111",
	"VendorInvoiceNumber": "123456",
	"TotalQuantity": "1",
	"NonSellableQuantity": "0",
	"UnitCost": "0",
	"ActionTaken": "Credit"
}
```

| Name | Description |
|:-----|:------------|
| RQProductSku (`String`) | Return value | 
| RQProductID (`Integer`) | RQ product identifier | 
| SerialNumberRemoved (`String`) | Serial number of the item (if applicable) | 
| VendorInvoiceNumber (`String`) | Vendor invoice number | 
| TotalQuantity (`Integer`) | Quantity being placed on RMA (include non-sellable) | 
| NonSellableQuantity (`Integer`) | Quantitiy of non-sellable items | 
| UnitCost (`Decimal`) | Unit cost | 
| ActionTaken (`String`) | Acceptable values include: NotSet, Credit, Replacement, Rejected or Repaired  | 







## Requests


<h3 id='creating-a-purchase-order' class='clickable-header top-level-header'>Creating a Purchase Order</h3>

Allows the vendor to create a purchase order for a particular store and a set of products.

#### Notes

* Creating a Purchase Order allows RQ to properly account for products arriving at a store so that stock levels are updated correctly
* You must be marked as the Primary Vendor in RQ to add a product to a Purchase Order
* Each item must be unique
* To place multiple copies of an item on an order, adjust the quantity


#### Request

<pre>
POST /?op=CreatePurchaseOrder
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CreatePurchaseOrder</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>PurchaseOrder</code> (<strong>Required</strong>) - The <a href='http://developers.iqmetrix.com/api/cmi/#purchaseorder'>PurchaseOrder</a></li><ul><li><code>PurchaseOrderData</code> (<strong>Required</strong>) </li><ul><li><code>BillToStoreID</code> (<strong>Required</strong>) - Defaults to -1. Either this value or BillToVendorAccountNumber must be supplied</li><li><code>EstimatedArrivalDate</code> (<strong>Required</strong>) - Format mm/dd/yyyy</li><li><code>ShipToStoreID</code> (<strong>Required</strong>) - Defaults to -1. Either this value or ShipToVendorAccountNumber must be supplied</li><li><code>VendorInvoiceNumber</code> (<strong>Required</strong>) - Vendor supplied invoice number, this must be unique</li><li><code>CreatedByVMI</code> (Optional) - defaults to false</li><li><code>CreatedDate</code> (Optional) </li><li><code>Comments</code> (Optional) </li><li><code>OrderTotal</code> (Optional) - Defaults to -1</li><li><code>ShippingTotal</code> (Optional) - Defaults to -1</li></ul><li><code>ProductsOrdered</code> (<strong>Required</strong>) - Products ordered</li><ul><li><code>ProductInformation</code> (<strong>Required</strong>) </li><ul><li><code>QuantityOrdered</code> (<strong>Required</strong>) </li><li><code>VendorSKU</code> (<strong>Required</strong>) </li><li><code>DateReceived</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>MaximumLevel</code> (Optional) - defaults to -1</li><li><code>MinimumLevel</code> (Optional) - defaults to -1</li><li><code>ProductCost</code> (Optional) - defaults to -1</li><li><code>ProductID</code> (Optional) </li><li><code>ProductItemID</code> (Optional) </li><li><code>ProductName</code> (Optional) </li><li><code>ProductReceived</code> (Optional) </li><li><code>ProductSKU</code> (Optional) </li><li><code>QuantityCommittedOnOrderEntry</code> (Optional) - defaults to -1</li><li><code>QuantityInStock</code> (Optional) - defaults to -1</li><li><code>QuantityInTransfer</code> (Optional) - defaults to -1</li><li><code>QuantityOnBackOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnLoan</code> (Optional) - defaults to -1</li><li><code>QuantityOnOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnRMA</code> (Optional) - defaults to -1</li><li><code>QuantityReceived</code> (Optional) - defaults to -1</li><li><code>QuantitySold</code> (Optional) - defaults to -1</li></ul></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrder 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <PurchaseOrder>
        <PurchaseOrderData>
          <BillToStoreID>55</BillToStoreID>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <VendorInvoiceNumber>15782</VendorInvoiceNumber>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <Enabled>true</Enabled>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <ProductCost>99.99</ProductCost>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductItemID>11142</ProductItemID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </PurchaseOrder>
    </CreatePurchaseOrder>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = stores[0].StoreID;
po.PurchaseOrderData.Comments = "Vendor Invoice Number #: BDP123";
po.PurchaseOrderData.ShipToStoreID = stores[0].StoreID;
po.PurchaseOrderData.VendorInvoiceNumber = "BDP123";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].ProductItemID = productID;
po.ProductsOrdered[0].ProductName = "Samsung Galaxy S5 - Charcoal Black";
po.ProductsOrdered[0].ProductSKU = "SSSATM000002";
po.ProductsOrdered[0].VendorSKU = "SSGS5CB";
po.ProductsOrdered[0].QuantityOrdered = 1;
po.ProductsOrdered[0].ProductCost = 130.00;

PurchaseOrder poCreated = vmiService.CreatePurchaseOrder(vendor, po);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrderResponse 
      xmlns="http://www.iqmetrix.com">
      <CreatePurchaseOrderResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>15782</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantityReturned>11</GrossQuantityReturned>
            <GrossQuantitySold>10</GrossQuantitySold>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>true</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductItemID>11142</ProductItemID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </CreatePurchaseOrderResult>
    </CreatePurchaseOrderResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='creating-a-purchase-order-shipment-notice' class='clickable-header top-level-header'>Creating a Purchase Order Shipment Notice</h3>

Allows the vendor to create a shipment notice for an existing purchase order. 

#### Notes

* The shipment notice will be used when receiving purchase order products with serial numbers
* Multiple shipment notices can be created for a single purchase order
* Each shipment notice is for a single product
* If more than one product appears in a shipment, create one shipment notice for each product, but use the same shipment number for all products in the same shipment

{{tip}}
This request accepts an array of PurchaseOrderShipmentNotices, so you do not need to call the VMI service multiple times for products in an order
{{end}}            


#### Request

<pre>
POST /?op=CreatePurchaseOrderShipmentNotice
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CreatePurchaseOrderShipmentNotice</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>notice</code> (<strong>Required</strong>) </li><ul><li><code>PurchaseOrderShipmentNotice</code> (<strong>Required</strong>) </li><ul><li><code>PurchaseOrderID</code> (<strong>Required</strong>) - Either this value or VendorInvoiceNumber must be provided</li><li><code>ProductItemID</code> (<strong>Required</strong>) - Either this value or VendorSKU must be provided</li><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>RQPurchaseOrderID</code> (<strong>Required</strong>) - defaults to -1</li><li><code>SerialNumbers</code> (Optional) </li><li><code>ShipmentNumber</code> (Optional) - If this value is not provided, the service will automatically assign one</li><li><code>VendorInvoiceNumber</code> (Optional) - Either this value <strong>OR</strong> PurchaseOrderID must be provided</li><li><code>VendorSKU</code> (Optional) - Either this value or ProductItemId must be provided</li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrderShipmentNotice 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <notice>
        <PurchaseOrderShipmentNotice>
          <PurchaseOrderID>84DACFD3-4095-4D50-A02E-781B86B7408E</PurchaseOrderID>
          <ProductItemID>11142</ProductItemID>
          <Quantity>1</Quantity>
          <RQPurchaseOrderID>22073</RQPurchaseOrderID>
          <SerialNumbers>
            <string>490154203237518</string>
          </SerialNumbers>
          <ShipmentNumber>SHIP001</ShipmentNumber>
          <VendorInvoiceNumber>1002</VendorInvoiceNumber>
          <VendorSKU>SSGS5CB</VendorSKU>
        </PurchaseOrderShipmentNotice>
      </notice>
    </CreatePurchaseOrderShipmentNotice>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = -1;

PurchaseOrderShipmentNotice sn = new PurchaseOrderShipmentNotice();
sn.PurchaseOrderID = new GUID(84DACFD3-4095-4D50-A02E-781B86B7408E);

sn.ShipmentNumber = "SHIP001 ";
sn.ProductItemID = 11142;
sn.Quantity = 2;
sn.SerialNumber = {"490154203237518", "12321324"};

PurchaseOrderShipmentNotice snReturn = 
    vmiService.CreatePurchaseOrderShipmentNotice(vendor, new[] { sn });
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrderShipmentNoticeResponse 
      xmlns="http://www.iqmetrix.com">
      <CreatePurchaseOrderShipmentNoticeResult>
        <PurchaseOrderShipmentNotice>
          <PurchaseOrderID>84DACFD3-4095-4D50-A02E-781B86B7408E</PurchaseOrderID>
          <ProductItemID>11142</ProductItemID>
          <Quantity>1</Quantity>
          <RQPurchaseOrderID>22073</RQPurchaseOrderID>
          <SerialNumbers>
            <string>490154203237518</string>
          </SerialNumbers>
          <ShipmentNumber>SHIP001</ShipmentNumber>
          <VendorInvoiceNumber>1002</VendorInvoiceNumber>
          <VendorSKU>SSGS5CB</VendorSKU>
        </PurchaseOrderShipmentNotice>
      </CreatePurchaseOrderShipmentNoticeResult>
    </CreatePurchaseOrderShipmentNoticeResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='verify-api-status' class='clickable-header top-level-header'>Verify API Status</h3>

Verify that the VMI Service, and RQ Client Database are up and running.

If successful, the service will return a string declaring that the dealer’s database has been found.


#### Request

<pre>
POST /?op=Ping
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>Ping</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <Ping 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
    </Ping>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
string pingResult = vmiService.Ping(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <PingResponse xmlns="http://www.iqmetrix.com">
            <PingResult>DansSupplies database is up (5.15.10.57126, Release, DropshipTestDemo)!</PingResult>
        </PingResponse>
    </soap:Body>
</soap:Envelope>                        
</script></code></pre>



<h3 id='enabling-or-disabling-a-company' class='clickable-header top-level-header'>Enabling or Disabling a Company</h3>

Change the interaction status of a company. 

#### Notes

* Enabled companies appear in the response of <a href="#getting-enabled-companies">Getting Enabled Companies</a>
* Disabled companies appear only in the response of <a href="#getting-disabled-companies">Getting Disabled Companies</a> 
* Only enabled companies may receive purchase orders through the VMI service    


#### Request

<pre>
POST /?op=EnableCompany
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>EnableCompany</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>isEnabled</code> (Optional) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <EnableCompany 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <isEnabled>true</isEnabled>
    </EnableCompany>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vmiService.EnableCompany(vendor, true); // false to disable a company
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <EnableCompanyResponse xmlns="http://www.iqmetrix.com" />
    </soap:Body>
</soap:Envelope>          
</script></code></pre>



<h3 id='getting-committed-purchase-orders' class='clickable-header top-level-header'>Getting Committed Purchase Orders</h3>

Report on the committed purchase orders for a particular store to see what products have been received and have not been received. 

This request will allow you to take appropriate action for products that have not arrived at a store.   


#### Request

<pre>
POST /?op=GetCommittedPurchaseOrderList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetCommittedPurchaseOrderList</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetCommittedPurchaseOrderList 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
    </GetCommittedPurchaseOrderList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
PurchaseOrderInformation[] pos = vmiService.GetCommittedPurchaseOrderList(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetCommittedPurchaseOrderListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetCommittedPurchaseOrderListResult>
        <PurchaseOrderInformation>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <PurchaseOrderData>
            <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
            <BillToStoreID>55</BillToStoreID>
            <BillToStoreName>Cornwall west</BillToStoreName>
            <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
            <IsDeleted>false</IsDeleted>
            <CreatedByVMI>false</CreatedByVMI>
            <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
            <Comments>comments</Comments>
            <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
            <OrderTotal>99.99</OrderTotal>
            <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
            <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
            <ShippingTotal>99.99</ShippingTotal>
            <ShipToStoreID>55</ShipToStoreID>
            <ShipToStoreName>Cornwall west</ShipToStoreName>
            <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
            <VendorInvoiceNumber>15782</VendorInvoiceNumber>
            <VendorName>SampleVendor</VendorName>
          </PurchaseOrderData>
          <ProductsOrdered>
            <ProductInformation>
              <CategoryPath>Activation >> Dropship</CategoryPath>
              <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <DoNotOrder>false</DoNotOrder>
              <Enabled>true</Enabled>
              <GrossQuantityReturned>11</GrossQuantityReturned>
              <GrossQuantitySold>10</GrossQuantitySold>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <MinMaxLocked>true</MinMaxLocked>
              <ProductCost>99.99</ProductCost>
              <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
              <ProductItemID>11142</ProductItemID>
              <ProductName>Samsung Galaxy S6</ProductName>
              <ProductReceived>false</ProductReceived>
              <ProductSKU>CECPSM000017</ProductSKU>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantityInStock>8</QuantityInStock>
              <QuantityInTransfer>3</QuantityInTransfer>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityOnLoan>5</QuantityOnLoan>
              <QuantityOnOrder>6</QuantityOnOrder>
              <QuantityOnRMA>9</QuantityOnRMA>
              <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
              <QuantityOrdered>4</QuantityOrdered>
              <QuantityReceived>4</QuantityReceived>
              <QuantitySold>30</QuantitySold>
              <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
              <RetailPrice>99.99</RetailPrice>
              <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
              <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
              <SalePrice>79.99</SalePrice>
              <VendorSKU>SSGS5CB</VendorSKU>
            </ProductInformation>
          </ProductsOrdered>
        </PurchaseOrderInformation>
      </GetCommittedPurchaseOrderListResult>
    </GetCommittedPurchaseOrderListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-a-company-list' class='clickable-header top-level-header'>Getting a Company List</h3>

Retrieves a list of VMI enabled companies.


#### Request

<pre>
POST /?op=GetCompanyList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetCompanyList</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (Optional) </li><ul><li><code>ClientID</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetCompanyList 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetCompanyList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetCompanyList(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetCompanyListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetCompanyListResult>
        <CompanyInformation>
          <CompanyID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</CompanyID>
          <Name>DropshipTestDemo</Name>
        </CompanyInformation>
      </GetCompanyListResult>
    </GetCompanyListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-hierarchy-info' class='clickable-header top-level-header'>Getting Hierarchy Info</h3>

Returns the company tree structure (hierarchy) including store counts.

#### Notes

* Each level contains a store count for its level. 
* Only levels with a valid enabled store count will be returned
* The structure is Company (not part of the object) -> Channels -> Regions -> Districts -> Stores

##### Example

<img src="http://developers.iqmetrix.com/images/vmi/hierarchy.png" alt="Company Tree Structure" />

There is one Channel for this company; Default Channel. Expanding Default Channel we see Regions, the first of which is Northeast, which contains 37 locations. 

Expand the Region and you see Districts. The first District, Tri State, has 8 stores. Expand the District to see the Stores.


#### Request

<pre>
POST /?op=GetHierarchyInfo
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetHierarchyInfo</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetHierarchyInfo 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetHierarchyInfo>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

ProductInformation[] products = vmiService.GetHierarchyInfo(vendor); 
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetHierarchyInfoResponse xmlns="http://www.iqmetrix.com">
            <GetHierarchyInfoResult>
                <Channels>
                    <Channel>
                        <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
                        <ChannelName>First Channel</ChannelName>
                        <StoreCount>6</StoreCount>
                        <Regions>
                            <Region>
                                <RegionID>1</RegionID>
                                <RegionName>First Region</RegionName>
                                <StoreCount>6</StoreCount>
                                <Districts>
                                    <District>
                                        <DistrictID>1</DistrictID>
                                        <DistrictName>First District</DistrictName>
                                        <StoreCount>6</StoreCount>
                                        <Stores>
                                            <StoreInformation>
                                                <StoreID>6</StoreID>
                                                <Name>Vineland Test Store</Name>
                                                <Address />
                                                <City>Orlando</City>
                                                <ProvinceState>FL</ProvinceState>
                                                <PostalZipCode>32801</PostalZipCode>
                                                <Country>United States</Country>
                                                <PhoneNumber>8566916400</PhoneNumber>
                                                <ShipToStoreID>6</ShipToStoreID>
                                                <BillToStoreID>6</BillToStoreID>
                                                <VendorAccountNumber>-</VendorAccountNumber>
                                                <Abbreviation>VTS01</Abbreviation>
                                            </StoreInformation>
                                        </Stores>
                                    </District>
                                </Districts>
                            </Region>
                        </Regions>
                    </Channel>
                </Channels>
            </GetHierarchyInfoResult>
        </GetHierarchyInfoResponse>
    </soap:Body>
</soap:Envelope>          
</script></code></pre>



<h3 id='getting-completed-purchase-orders' class='clickable-header top-level-header'>Getting Completed Purchase Orders</h3>

This request allows you to run a report on the completed purchase orders in given time range for a particular store to see what products have been received.

#### Notes

* Purchase order completion date is determined by the latest receiving date in the purchase order


#### Request

<pre>
POST /?op=GetCompletedPurchaseOrderList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetCompletedPurchaseOrderList</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>startDateReceived</code> (<strong>Required</strong>) </li><li><code>endDateReceived</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetCompletedPurchaseOrderList 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <startDateReceived>01/01/2016</startDateReceived>
      <endDateReceived>10/31/2016</endDateReceived>
    </GetCompletedPurchaseOrderList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
DateTime startDateReceived = new DateTime(2011, 2, 1);
DateTime endDateReceived = new DateTime(2011, 2, 15);
PurchaseOrderInformation[] pos = vmiService. GetCompletedPurchaseOrderList (vendor, startDateReceived, endDateReceived);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetCompletedPurchaseOrderListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetCompletedPurchaseOrderListResult>
        <PurchaseOrderInformation>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <PurchaseOrderData>
            <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
            <BillToStoreID>55</BillToStoreID>
            <BillToStoreName>Cornwall west</BillToStoreName>
            <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
            <IsDeleted>false</IsDeleted>
            <CreatedByVMI>false</CreatedByVMI>
            <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
            <Comments>comments</Comments>
            <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
            <OrderTotal>99.99</OrderTotal>
            <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
            <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
            <ShippingTotal>99.99</ShippingTotal>
            <ShipToStoreID>55</ShipToStoreID>
            <ShipToStoreName>Cornwall west</ShipToStoreName>
            <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
            <VendorInvoiceNumber>15782</VendorInvoiceNumber>
            <VendorName>SampleVendor</VendorName>
          </PurchaseOrderData>
          <ProductsOrdered>
            <ProductInformation>
              <CategoryPath>Activation >> Dropship</CategoryPath>
              <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <DoNotOrder>false</DoNotOrder>
              <Enabled>true</Enabled>
              <GrossQuantityReturned>11</GrossQuantityReturned>
              <GrossQuantitySold>10</GrossQuantitySold>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <MinMaxLocked>true</MinMaxLocked>
              <ProductCost>99.99</ProductCost>
              <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
              <ProductItemID>11142</ProductItemID>
              <ProductName>Samsung Galaxy S6</ProductName>
              <ProductReceived>false</ProductReceived>
              <ProductSKU>CECPSM000017</ProductSKU>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantityInStock>8</QuantityInStock>
              <QuantityInTransfer>3</QuantityInTransfer>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityOnLoan>5</QuantityOnLoan>
              <QuantityOnOrder>6</QuantityOnOrder>
              <QuantityOnRMA>9</QuantityOnRMA>
              <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
              <QuantityOrdered>4</QuantityOrdered>
              <QuantityReceived>4</QuantityReceived>
              <QuantitySold>30</QuantitySold>
              <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
              <RetailPrice>99.99</RetailPrice>
              <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
              <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
              <SalePrice>79.99</SalePrice>
              <VendorSKU>SSGS5CB</VendorSKU>
            </ProductInformation>
          </ProductsOrdered>
        </PurchaseOrderInformation>
      </GetCompletedPurchaseOrderListResult>
    </GetCompletedPurchaseOrderListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-disabled-companies' class='clickable-header top-level-header'>Getting Disabled Companies</h3>

Retrieves a list of VMI disabled companies.


#### Request

<pre>
POST /?op=GetDisabledCompanies
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetDisabledCompanies</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (Optional) </li><ul><li><code>ClientID</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetDisabledCompanies 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
    </GetDisabledCompanies>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetDisabledCompanies(vendor);  
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetDisabledCompaniesResponse 
      xmlns="http://www.iqmetrix.com">
      <GetDisabledCompaniesResult>
        <CompanyInformation>
          <CompanyID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</CompanyID>
          <Name>DropshipTestDemo</Name>
        </CompanyInformation>
      </GetDisabledCompaniesResult>
    </GetDisabledCompaniesResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-employee-list' class='clickable-header top-level-header'>Getting Employee List</h3>

Retrieve a list of Employees and the Stores that they are assigned to. The response will include a record for each Employee/Store combination found.


#### Request

<pre>
POST /?op=GetEmployeeList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetEmployeeList</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>onlyEnabled</code> (Optional) - True for enabled employees, false for all employees</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetEmployeeList 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <onlyEnabled>false</onlyEnabled>
    </GetEmployeeList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

EmployeeInformation info = vmiService.GetEmployeeList(vendor, onlyEnabled);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetEmployeeListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetEmployeeListResult>
        <EmployeeInformation>
          <CellPhone>5555555555</CellPhone>
          <CompanyName>KENTEL</CompanyName>
          <Email>johnt@kentel.com</Email>
          <Enabled>true</Enabled>
          <EndDate></EndDate>
          <FirstName>John</FirstName>
          <LastName>Tester</LastName>
          <Role>Store Manager</Role>
          <StartDate></StartDate>
          <StoreAddress>123 Main Street</StoreAddress>
          <StoreCity>Moon City</StoreCity>
          <StoreCountry>US</StoreCountry>
          <StoreEmail>atlantis@kentel.com</StoreEmail>
          <StoreID>4</StoreID>
          <StoreName>Atlantis</StoreName>
          <StorePostalCode>90210</StorePostalCode>
          <StoreProvinceOrState>ND</StoreProvinceOrState>
        </EmployeeInformation>
      </GetEmployeeListResult>
    </GetEmployeeListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-enabled-companies' class='clickable-header top-level-header'>Getting Enabled Companies</h3>

Retrieves a list of VMI enabled companies.


#### Request

<pre>
POST /?op=GetEnabledCompanies
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetEnabledCompanies</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (Optional) </li><ul><li><code>ClientID</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetEnabledCompanies 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetEnabledCompanies>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetEnabledCompanies(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetEnabledCompaniesResponse 
      xmlns="http://www.iqmetrix.com">
      <GetEnabledCompaniesResult>
        <CompanyInformation>
          <CompanyID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</CompanyID>
          <Name>DropshipTestDemo</Name>
        </CompanyInformation>
      </GetEnabledCompaniesResult>
    </GetEnabledCompaniesResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-inventory-list' class='clickable-header top-level-header'>Getting the Inventory List</h3>

Retrieve an inventory of products for which the vendor is set as the primary vendor in RQ.        


#### Request

<pre>
POST /?op=GetInventoryList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetInventoryList</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryList 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetInventoryList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

ProductInformation[] products = vmiService.GetInventoryList(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetInventoryListResult>
        <ProductInformation>
          <CategoryPath>Activation >> Dropship</CategoryPath>
          <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
          <DateReceived>01/21/2016 16:58:23</DateReceived>
          <DoNotOrder>false</DoNotOrder>
          <Enabled>true</Enabled>
          <GrossQuantityReturned>11</GrossQuantityReturned>
          <GrossQuantitySold>10</GrossQuantitySold>
          <MaximumLevel>100</MaximumLevel>
          <MinimumLevel>10</MinimumLevel>
          <MinMaxLocked>true</MinMaxLocked>
          <ProductCost>99.99</ProductCost>
          <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
          <ProductItemID>11142</ProductItemID>
          <ProductName>Samsung Galaxy S6</ProductName>
          <ProductReceived>false</ProductReceived>
          <ProductSKU>CECPSM000017</ProductSKU>
          <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
          <QuantityInStock>8</QuantityInStock>
          <QuantityInTransfer>3</QuantityInTransfer>
          <QuantityOnBackOrder>0</QuantityOnBackOrder>
          <QuantityOnLoan>5</QuantityOnLoan>
          <QuantityOnOrder>6</QuantityOnOrder>
          <QuantityOnRMA>9</QuantityOnRMA>
          <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
          <QuantityOrdered>4</QuantityOrdered>
          <QuantityReceived>4</QuantityReceived>
          <QuantitySold>30</QuantitySold>
          <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
          <RetailPrice>99.99</RetailPrice>
          <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
          <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
          <SalePrice>79.99</SalePrice>
          <VendorSKU>SSGS5CB</VendorSKU>
        </ProductInformation>
      </GetInventoryListResult>
    </GetInventoryListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-inventory-report' class='clickable-header top-level-header'>Getting the Inventory Report</h3>

Retrieves an inventory report for a particular store. Includes minimum and maximum inventory, quantity on hand, quantity sold within a particular date range, product SKU, etc.


#### Request

<pre>
POST /?op=GetInventoryReport
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetInventoryReport</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>StartDate</code> (<strong>Required</strong>) </li><li><code>EndDate</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryReport 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
    </GetInventoryReport>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

vendor.Client.StoreID = 4;
ProductInformation[] inventoryReport = vmiService.GetInventoryReport(vendor, startDate, endDate);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryReportResponse 
      xmlns="http://www.iqmetrix.com">
      <GetInventoryReportResult>
        <ProductInformation>
          <CategoryPath>Activation >> Dropship</CategoryPath>
          <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
          <DateReceived>01/21/2016 16:58:23</DateReceived>
          <DoNotOrder>false</DoNotOrder>
          <Enabled>true</Enabled>
          <GrossQuantityReturned>11</GrossQuantityReturned>
          <GrossQuantitySold>10</GrossQuantitySold>
          <MaximumLevel>100</MaximumLevel>
          <MinimumLevel>10</MinimumLevel>
          <MinMaxLocked>true</MinMaxLocked>
          <ProductCost>99.99</ProductCost>
          <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
          <ProductItemID>11142</ProductItemID>
          <ProductName>Samsung Galaxy S6</ProductName>
          <ProductReceived>false</ProductReceived>
          <ProductSKU>CECPSM000017</ProductSKU>
          <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
          <QuantityInStock>8</QuantityInStock>
          <QuantityInTransfer>3</QuantityInTransfer>
          <QuantityOnBackOrder>0</QuantityOnBackOrder>
          <QuantityOnLoan>5</QuantityOnLoan>
          <QuantityOnOrder>6</QuantityOnOrder>
          <QuantityOnRMA>9</QuantityOnRMA>
          <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
          <QuantityOrdered>4</QuantityOrdered>
          <QuantityReceived>4</QuantityReceived>
          <QuantitySold>30</QuantitySold>
          <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
          <RetailPrice>99.99</RetailPrice>
          <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
          <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
          <SalePrice>79.99</SalePrice>
          <VendorSKU>SSGS5CB</VendorSKU>
        </ProductInformation>
      </GetInventoryReportResult>
    </GetInventoryReportResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-inventory-report-by-vendor-sku' class='clickable-header top-level-header'>Getting the Inventory Report by Vendor SKU</h3>

This method allows you to get an inventory report for all stores by a specified Vendor SKU. Includes minimum and maximum inventory, quantity on hand, quantity sold within a particular date range, product SKU etc.


#### Request

<pre>
POST /?op=GetInventoryReportByVendorSku
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetInventoryReportByVendorSku</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>StartDate</code> (<strong>Required</strong>) </li><li><code>EndDate</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryReportByVendorSku 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
      <VendorSku>SSGS5CB</VendorSku>
    </GetInventoryReportByVendorSku>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
ProductInformation[] inventoryReport = vmiService.GetInventoryReportByVendorSku(vendor, vendorSku, startDate, endDate);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryReportByVendorSkuResponse 
      xmlns="http://www.iqmetrix.com">
      <GetInventoryReportByVendorSkuResult>
        <ProductAndStoreInformation>
          <CategoryPath>Activation >> Dropship</CategoryPath>
          <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
          <ChannelName>First Channel</ChannelName>
          <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
          <DateReceived>01/21/2016 16:58:23</DateReceived>
          <DistrictID>1</DistrictID>
          <DistrictName>First Region</DistrictName>
          <DoNotOrder>false</DoNotOrder>
          <Enabled>true</Enabled>
          <GrossQuantityReturned>11</GrossQuantityReturned>
          <GrossQuantitySold>10</GrossQuantitySold>
          <MaximumLevel>100</MaximumLevel>
          <MinimumLevel>10</MinimumLevel>
          <MinMaxLocked>true</MinMaxLocked>
          <ProductCost>99.99</ProductCost>
          <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
          <ProductItemID>11142</ProductItemID>
          <ProductName>Samsung Galaxy S6</ProductName>
          <ProductReceived>false</ProductReceived>
          <ProductSKU>CECPSM000017</ProductSKU>
          <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
          <QuantityInStock>8</QuantityInStock>
          <QuantityInTransfer>3</QuantityInTransfer>
          <QuantityOnBackOrder>0</QuantityOnBackOrder>
          <QuantityOnLoan>5</QuantityOnLoan>
          <QuantityOnOrder>6</QuantityOnOrder>
          <QuantityOnRMA>9</QuantityOnRMA>
          <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
          <QuantityOrdered>4</QuantityOrdered>
          <QuantityReceived>4</QuantityReceived>
          <QuantitySold>30</QuantitySold>
          <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
          <RegionID>1</RegionID>
          <RegionName>First District</RegionName>
          <RetailPrice>99.99</RetailPrice>
          <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
          <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
          <SalePrice>79.99</SalePrice>
          <StoreID>36</StoreID>
          <StoreName>Cornwall West</StoreName>
          <VendorSKU>SSGS5CB</VendorSKU>
        </ProductAndStoreInformation>
      </GetInventoryReportByVendorSkuResult>
    </GetInventoryReportByVendorSkuResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-pending-companies' class='clickable-header top-level-header'>Getting Pending Companies</h3>

Retrieves a list of all companies that are in a [Pending State](#pending-state) for the Vendor. 

Vendors can only create purchase orders for <strong>Enabled</strong> companies. 

To change the status of a company, use <a href="#enabling-or-disabling-a-company">Enabling or Disabling a Company</a>.


#### Request

<pre>
POST /?op=GetPendingCompanies
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPendingCompanies</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (Optional) </li><ul><li><code>ClientID</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPendingCompanies 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
    </GetPendingCompanies>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetPendingCompanies(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPendingCompaniesResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPendingCompaniesResult>
        <CompanyInformation>
          <CompanyID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</CompanyID>
          <Name>DropshipTestDemo</Name>
        </CompanyInformation>
      </GetPendingCompaniesResult>
    </GetPendingCompaniesResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-serial-numbers-for-a-product' class='clickable-header top-level-header'>Getting Serial Numbers for a Product</h3>

Returns an array of ProductSerialNumber objects for the given RQ Product Identifier          


#### Request

<pre>
POST /?op=GetProductSerialNumbers
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetProductSerialNumbers</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>RQProductID</code> (Optional) - Identifier for a Product in RQ</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetProductSerialNumbers 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <RQProductID>20</RQProductID>
    </GetProductSerialNumbers>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
ProductSerialNumber[] serials = vmiService.GetProductSerialNumbers(vendor, productItemID);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetProductSerialNumbersResponse 
      xmlns="http://www.iqmetrix.com">
      <GetProductSerialNumbersResult>
        <ProductSerialNumber>
          <DateReceived>1/20/2016 4:58:24 PM</DateReceived>
          <NonSellable>false</NonSellable>
          <ProductItemID>11142</ProductItemID>
          <SerialNumber>490154203237518</SerialNumber>
        </ProductSerialNumber>
      </GetProductSerialNumbersResult>
    </GetProductSerialNumbersResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-purchase-order-by-business-id' class='clickable-header top-level-header'>Getting Purchase Order By Business ID</h3>

Retrieve a purchase order based on the RQ Business ID. 

This request is useful in the situation where a user has created a PO in RQ for a vendor. 

The vendor can get the PO data and product info to help with creation of shipping notifications.

#### Notes

* RQ Business ID is the visual ID by store that RQ users can see on printouts
* Will return both committed and uncommitted purchase orders
* To determine if a PO is committed or uncommitted, use [Getting Uncommitted Purchase Orders](#getting-uncommitted-purchase-orders) and [Getting Committed Purchase Orders](#getting-committed-purchase-orders)


#### Request

<pre>
POST /?op=GetPurchaseOrderByBusinessID
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPurchaseOrderByBusinessID</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>purchaseOrderIdByStore</code> (<strong>Required</strong>) - Identifier for a PO shown on printouts in RQ</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByBusinessID 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <purchaseOrderIdByStore>22073</purchaseOrderIdByStore>
    </GetPurchaseOrderByBusinessID>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
PurchaseOrderInformation[] pos = vmiService. GetPurchaseOrderByBusinessID(vendor, poNum);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByBusinessIDResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPurchaseOrderByBusinessIDResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>15782</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantityReturned>11</GrossQuantityReturned>
            <GrossQuantitySold>10</GrossQuantitySold>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>true</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductItemID>11142</ProductItemID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </GetPurchaseOrderByBusinessIDResult>
    </GetPurchaseOrderByBusinessIDResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-purchase-order-by-reference-number' class='clickable-header top-level-header'>Getting Purchase Order by Reference Number</h3>



#### Request

<pre>
POST /?op=GetPurchaseOrderByReferenceNumber
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPurchaseOrderByReferenceNumber</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>purchaseOrderReferenceNumber</code> (<strong>Required</strong>) - Reference number for a PO in RQ @TODO VALIDATE</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByReferenceNumber 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <purchaseOrderReferenceNumber>PO12456</purchaseOrderReferenceNumber>
    </GetPurchaseOrderByReferenceNumber>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
PurchaseOrderShipmentNotice[] sns = vmiService.GetPurchaseOrderByReferenceNumber(vendor, poRef);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByReferenceNumberResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPurchaseOrderByReferenceNumberResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>15782</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantityReturned>11</GrossQuantityReturned>
            <GrossQuantitySold>10</GrossQuantitySold>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>true</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductItemID>11142</ProductItemID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </GetPurchaseOrderByReferenceNumberResult>
    </GetPurchaseOrderByReferenceNumberResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-purchase-orders-by-status' class='clickable-header top-level-header'>Getting Purchase Orders By Status</h3>

Retrieves all purchase orders in the RQ database that match the provided status criteria, including those that were not created through the VMI API. 

Purchase Orders created within RQ will be available in this list.


#### Request

<pre>
POST /?op=GetClientPurchaseOrdersByStatus
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetClientPurchaseOrdersByStatus</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>startDate</code> (<strong>Required</strong>) - Search for POs committed and/or completed on or after this date at midnight</li><li><code>endDate</code> (<strong>Required</strong>) - Search for POs committed and/or completed up to the end of this day</li><li><code>isCompleted</code> (Optional) - Defaults to false @TODO VERIFY</li><li><code>isCommitted</code> (Optional) - Defaults to false @TODO VERIFY</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetClientPurchaseOrdersByStatus 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <startDate>01/01/2016</startDate>
      <endDate>10/31/2016</endDate>
      <isCompleted>false</isCompleted>
      <isCommitted>false</isCommitted>
    </GetClientPurchaseOrdersByStatus>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

vendor.Client.StoreID = 4;
PurchaseOrderInformation[] pos = vmiService.GetClientPurchaseOrdersByStatus(vendor, isCompleted, isCommitted, startDate, endDate);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetClientPurchaseOrdersByStatusResponse 
      xmlns="http://www.iqmetrix.com">
      <GetClientPurchaseOrdersByStatusResult>
        <PurchaseOrderInformation>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <PurchaseOrderData>
            <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
            <BillToStoreID>55</BillToStoreID>
            <BillToStoreName>Cornwall west</BillToStoreName>
            <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
            <IsDeleted>false</IsDeleted>
            <CreatedByVMI>false</CreatedByVMI>
            <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
            <Comments>comments</Comments>
            <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
            <OrderTotal>99.99</OrderTotal>
            <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
            <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
            <ShippingTotal>99.99</ShippingTotal>
            <ShipToStoreID>55</ShipToStoreID>
            <ShipToStoreName>Cornwall west</ShipToStoreName>
            <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
            <VendorInvoiceNumber>15782</VendorInvoiceNumber>
            <VendorName>SampleVendor</VendorName>
          </PurchaseOrderData>
          <ProductsOrdered>
            <ProductInformation>
              <CategoryPath>Activation >> Dropship</CategoryPath>
              <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <DoNotOrder>false</DoNotOrder>
              <Enabled>true</Enabled>
              <GrossQuantityReturned>11</GrossQuantityReturned>
              <GrossQuantitySold>10</GrossQuantitySold>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <MinMaxLocked>true</MinMaxLocked>
              <ProductCost>99.99</ProductCost>
              <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
              <ProductItemID>11142</ProductItemID>
              <ProductName>Samsung Galaxy S6</ProductName>
              <ProductReceived>false</ProductReceived>
              <ProductSKU>CECPSM000017</ProductSKU>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantityInStock>8</QuantityInStock>
              <QuantityInTransfer>3</QuantityInTransfer>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityOnLoan>5</QuantityOnLoan>
              <QuantityOnOrder>6</QuantityOnOrder>
              <QuantityOnRMA>9</QuantityOnRMA>
              <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
              <QuantityOrdered>4</QuantityOrdered>
              <QuantityReceived>4</QuantityReceived>
              <QuantitySold>30</QuantitySold>
              <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
              <RetailPrice>99.99</RetailPrice>
              <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
              <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
              <SalePrice>79.99</SalePrice>
              <VendorSKU>SSGS5CB</VendorSKU>
            </ProductInformation>
          </ProductsOrdered>
        </PurchaseOrderInformation>
      </GetClientPurchaseOrdersByStatusResult>
    </GetClientPurchaseOrdersByStatusResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-purchase-orders-for-a-store' class='clickable-header top-level-header'>Getting Purchase Orders For a Store</h3>

Run a report on the purchase orders for a particular store to see what products have been received and have not been received. 

This will allow you to take appropriate action for product that has not arrived at a store.

#### Note

* Will return both committed and uncommitted purchase orders
* To determine if a PO is committed or uncommitted, use [Getting Uncommitted Purchase Orders](#getting-uncommitted-purchase-orders) and [Getting Committed Purchase Orders](#getting-committed-purchase-orders)


#### Request

<pre>
POST /?op=GetPurchaseOrderList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPurchaseOrderList</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderList 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetPurchaseOrderList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
PurchaseOrderInformation[] pos = vmiService.GetPurchaseOrderList(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPurchaseOrderListResult>
        <PurchaseOrderInformation>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <PurchaseOrderData>
            <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
            <BillToStoreID>55</BillToStoreID>
            <BillToStoreName>Cornwall west</BillToStoreName>
            <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
            <IsDeleted>false</IsDeleted>
            <CreatedByVMI>false</CreatedByVMI>
            <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
            <Comments>comments</Comments>
            <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
            <OrderTotal>99.99</OrderTotal>
            <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
            <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
            <ShippingTotal>99.99</ShippingTotal>
            <ShipToStoreID>55</ShipToStoreID>
            <ShipToStoreName>Cornwall west</ShipToStoreName>
            <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
            <VendorInvoiceNumber>15782</VendorInvoiceNumber>
            <VendorName>SampleVendor</VendorName>
          </PurchaseOrderData>
          <ProductsOrdered>
            <ProductInformation>
              <CategoryPath>Activation >> Dropship</CategoryPath>
              <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <DoNotOrder>false</DoNotOrder>
              <Enabled>true</Enabled>
              <GrossQuantityReturned>11</GrossQuantityReturned>
              <GrossQuantitySold>10</GrossQuantitySold>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <MinMaxLocked>true</MinMaxLocked>
              <ProductCost>99.99</ProductCost>
              <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
              <ProductItemID>11142</ProductItemID>
              <ProductName>Samsung Galaxy S6</ProductName>
              <ProductReceived>false</ProductReceived>
              <ProductSKU>CECPSM000017</ProductSKU>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantityInStock>8</QuantityInStock>
              <QuantityInTransfer>3</QuantityInTransfer>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityOnLoan>5</QuantityOnLoan>
              <QuantityOnOrder>6</QuantityOnOrder>
              <QuantityOnRMA>9</QuantityOnRMA>
              <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
              <QuantityOrdered>4</QuantityOrdered>
              <QuantityReceived>4</QuantityReceived>
              <QuantitySold>30</QuantitySold>
              <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
              <RetailPrice>99.99</RetailPrice>
              <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
              <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
              <SalePrice>79.99</SalePrice>
              <VendorSKU>SSGS5CB</VendorSKU>
            </ProductInformation>
          </ProductsOrdered>
        </PurchaseOrderInformation>
      </GetPurchaseOrderListResult>
    </GetPurchaseOrderListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-purchase-order-shipment-notices' class='clickable-header top-level-header'>Getting Purchase Order Shipment Notices</h3>

This method allows the vendor to query for all shipment notices created for a purchase order.


#### Request

<pre>
POST /?op=GetPurchaseOrderShipmentNotices
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPurchaseOrderShipmentNotices</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>purchaseOrderID</code> (Optional) - Identifier for a <a href='http://developers.iqmetrix.com/api/cmi/#purchaseorder'>PurchaseOrder</a></li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderShipmentNotices 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <purchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</purchaseOrderID>
    </GetPurchaseOrderShipmentNotices>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
PurchaseOrderShipmentNotice[] sns = vmiService.GetPurchaseOrderShipmentNotices(vendor, poID);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderShipmentNoticesResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPurchaseOrderShipmentNoticesResult>
        <PurchaseOrderShipmentNotice>
          <PurchaseOrderID>84DACFD3-4095-4D50-A02E-781B86B7408E</PurchaseOrderID>
          <ProductItemID>11142</ProductItemID>
          <Quantity>1</Quantity>
          <RQPurchaseOrderID>22073</RQPurchaseOrderID>
          <SerialNumbers>
            <string>490154203237518</string>
          </SerialNumbers>
          <ShipmentNumber>SHIP001</ShipmentNumber>
          <VendorInvoiceNumber>1002</VendorInvoiceNumber>
          <VendorSKU>SSGS5CB</VendorSKU>
        </PurchaseOrderShipmentNotice>
      </GetPurchaseOrderShipmentNoticesResult>
    </GetPurchaseOrderShipmentNoticesResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-store-information' class='clickable-header top-level-header'>Getting Store Information</h3>

Get store details. Same as [Getting a Store List](#getting-a-store-list) except this method only returns a single store.


#### Request

<pre>
POST /?op=GetStoreInformation
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetStoreInformation</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetStoreInformation 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetStoreInformation>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 1;

StoreInformation[] stores = vmiService.GetStoreInformation(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetStoreInformationResponse 
      xmlns="http://www.iqmetrix.com">
      <GetStoreInformationResult>
        <StoreInformation>
          <StoreID>36</StoreID>
          <Name>Cornwall West</Name>
          <Abbreviation>CWW</Abbreviation>
          <Address>2102 11th Ave</Address>
          <City>Regina</City>
          <Country>Canada</Country>
          <District>Regina</District>
          <PhoneNumber>5555555555</PhoneNumber>
          <PostalZipCode>S2S 2S2</PostalZipCode>
          <ProvinceState>Saskatchewan</ProvinceState>
          <Region>Regina</Region>
          <ShipToStoreID>55</ShipToStoreID>
          <BillToStoreID>55</BillToStoreID>
          <VendorAccountNumber>123</VendorAccountNumber>
        </StoreInformation>
      </GetStoreInformationResult>
    </GetStoreInformationResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-a-store-list' class='clickable-header top-level-header'>Getting a Store List</h3>

Retrieves a list of VMI enabled stores.          


#### Request

<pre>
POST /?op=GetStoreList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetStoreList</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetStoreList 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetStoreList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

StoreInformation[] stores = vmiService.GetStoreList(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetStoreListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetStoreListResult>
        <StoreInformation>
          <StoreID>36</StoreID>
          <Name>Cornwall West</Name>
          <Abbreviation>CWW</Abbreviation>
          <Address>2102 11th Ave</Address>
          <City>Regina</City>
          <Country>Canada</Country>
          <District>Regina</District>
          <PhoneNumber>5555555555</PhoneNumber>
          <PostalZipCode>S2S 2S2</PostalZipCode>
          <ProvinceState>Saskatchewan</ProvinceState>
          <Region>Regina</Region>
          <ShipToStoreID>55</ShipToStoreID>
          <BillToStoreID>55</BillToStoreID>
          <VendorAccountNumber>123</VendorAccountNumber>
        </StoreInformation>
      </GetStoreListResult>
    </GetStoreListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-uncommitted-purchase-orders' class='clickable-header top-level-header'>Getting Uncommitted Purchase Orders</h3>

This request allows you to run a report on the uncommitted purchase orders for a particular store.

#### Notes 

* An uncommitted purchase order allows a customer to review the PO before agreeing to its contents
* The user may also modify the order by changing quantities or adding/removing products


#### Request

<pre>
POST /?op=GetUncommittedPurchaseOrderList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetUncommittedPurchaseOrderList</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetUncommittedPurchaseOrderList 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
    </GetUncommittedPurchaseOrderList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
PurchaseOrderInformation[] pos = vmiService.GetUnommittedPurchaseOrderList(vendor);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetUncommittedPurchaseOrderListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetUncommittedPurchaseOrderListResult>
        <PurchaseOrderInformation>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <PurchaseOrderData>
            <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
            <BillToStoreID>55</BillToStoreID>
            <BillToStoreName>Cornwall west</BillToStoreName>
            <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
            <IsDeleted>false</IsDeleted>
            <CreatedByVMI>false</CreatedByVMI>
            <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
            <Comments>comments</Comments>
            <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
            <OrderTotal>99.99</OrderTotal>
            <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
            <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
            <ShippingTotal>99.99</ShippingTotal>
            <ShipToStoreID>55</ShipToStoreID>
            <ShipToStoreName>Cornwall west</ShipToStoreName>
            <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
            <VendorInvoiceNumber>15782</VendorInvoiceNumber>
            <VendorName>SampleVendor</VendorName>
          </PurchaseOrderData>
          <ProductsOrdered>
            <ProductInformation>
              <CategoryPath>Activation >> Dropship</CategoryPath>
              <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <DoNotOrder>false</DoNotOrder>
              <Enabled>true</Enabled>
              <GrossQuantityReturned>11</GrossQuantityReturned>
              <GrossQuantitySold>10</GrossQuantitySold>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <MinMaxLocked>true</MinMaxLocked>
              <ProductCost>99.99</ProductCost>
              <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
              <ProductItemID>11142</ProductItemID>
              <ProductName>Samsung Galaxy S6</ProductName>
              <ProductReceived>false</ProductReceived>
              <ProductSKU>CECPSM000017</ProductSKU>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantityInStock>8</QuantityInStock>
              <QuantityInTransfer>3</QuantityInTransfer>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityOnLoan>5</QuantityOnLoan>
              <QuantityOnOrder>6</QuantityOnOrder>
              <QuantityOnRMA>9</QuantityOnRMA>
              <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
              <QuantityOrdered>4</QuantityOrdered>
              <QuantityReceived>4</QuantityReceived>
              <QuantitySold>30</QuantitySold>
              <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
              <RetailPrice>99.99</RetailPrice>
              <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
              <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
              <SalePrice>79.99</SalePrice>
              <VendorSKU>SSGS5CB</VendorSKU>
            </ProductInformation>
          </ProductsOrdered>
        </PurchaseOrderInformation>
      </GetUncommittedPurchaseOrderListResult>
    </GetUncommittedPurchaseOrderListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-updated-inventory-list' class='clickable-header top-level-header'>Getting the Updated Inventory List</h3>

This method returns a list of products that were added since the last time you called [Getting the Inventory List](#getting-the-inventory-list) or [Getting The Updated Inventory List](#getting-the-updated-inventory-list).          


#### Request

<pre>
POST /?op=GetUpdatedInventoryList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetUpdatedInventoryList</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetUpdatedInventoryList 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
    </GetUpdatedInventoryList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
ProductInformation[] products = vmiService.GetUpdatedInventoryList(vendor);  
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetUpdatedInventoryListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetUpdatedInventoryListResult>
        <ProductInformation>
          <CategoryPath>Activation >> Dropship</CategoryPath>
          <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
          <DateReceived>01/21/2016 16:58:23</DateReceived>
          <DoNotOrder>false</DoNotOrder>
          <Enabled>true</Enabled>
          <GrossQuantityReturned>11</GrossQuantityReturned>
          <GrossQuantitySold>10</GrossQuantitySold>
          <MaximumLevel>100</MaximumLevel>
          <MinimumLevel>10</MinimumLevel>
          <MinMaxLocked>true</MinMaxLocked>
          <ProductCost>99.99</ProductCost>
          <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
          <ProductItemID>11142</ProductItemID>
          <ProductName>Samsung Galaxy S6</ProductName>
          <ProductReceived>false</ProductReceived>
          <ProductSKU>CECPSM000017</ProductSKU>
          <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
          <QuantityInStock>8</QuantityInStock>
          <QuantityInTransfer>3</QuantityInTransfer>
          <QuantityOnBackOrder>0</QuantityOnBackOrder>
          <QuantityOnLoan>5</QuantityOnLoan>
          <QuantityOnOrder>6</QuantityOnOrder>
          <QuantityOnRMA>9</QuantityOnRMA>
          <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
          <QuantityOrdered>4</QuantityOrdered>
          <QuantityReceived>4</QuantityReceived>
          <QuantitySold>30</QuantitySold>
          <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
          <RetailPrice>99.99</RetailPrice>
          <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
          <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
          <SalePrice>79.99</SalePrice>
          <VendorSKU>SSGS5CB</VendorSKU>
        </ProductInformation>
      </GetUpdatedInventoryListResult>
    </GetUpdatedInventoryListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='updating-min-and-max-product-quantities' class='clickable-header top-level-header'>Updating Min and Max Product Quantities</h3>

This method allows the vendor to modify the minimum and maximum quantity thresholds for a given product in a particular store

Returns a boolean value of true for success, false for failure.


#### Request

<pre>
POST /?op=UpdateMinAndMaxProductQuantities
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>UpdateMinAndMaxProductQuantities</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>productItemID</code> (Optional) </li><li><code>minQuantity</code> (Optional) </li><li><code>maxQuantity</code> (Optional) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <UpdateMinAndMaxProductQuantities 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <productItemID>20</productItemID>
      <minQuantity>1</minQuantity>
      <maxQuantity>20</maxQuantity>
    </UpdateMinAndMaxProductQuantities>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
vmiService.UpdateMinAndMaxProductQuantities(vendor, productItemID, minQty, maxQty);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <UpdateMinAndMaxProductQuantitiesResponse xmlns="http://www.iqmetrix.com">
            <UpdateMinAndMaxProductQuantitiesResult>true</UpdateMinAndMaxProductQuantitiesResult>
        </UpdateMinAndMaxProductQuantitiesResponse>
    </soap:Body>
</soap:Envelope>            
</script></code></pre>



<h3 id='updating-a-purchase-order' class='clickable-header top-level-header'>Updating a Purchase Order</h3>

This method allows the vendor to update a purchase order for a particular store.

#### Notes

* The only updatable fields for the purchase order are VendorInvoiceNumber, Comments, and EstimatedArrivalDate
* Products are updateable. If you do not wish to change products then leave the products collection empty when submitting the update
* If you update any product(s) you must send the entire list of products
* If any products are supplied to this call, the PO is cleared and only the supplied products are added
* You cannot change state of a PO to Committed through this call
* If the PO is completed or has products received against it, it cannot be updated
* Every item must be unique. To place multiples of the same item on an order, adjust the quantity accordingly


#### Request

<pre>
POST /?op=UpdatePurchaseOrder
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>UpdatePurchaseOrder</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>purchaseOrder</code> (Optional) - The <a href='http://developers.iqmetrix.com/api/cmi/#purchaseorder'>PurchaseOrder</a></li><ul><li><code>PurchaseOrderID</code> (<strong>Required</strong>) - Identifier for the PurchaseOrder</li><li><code>PurchaseOrderData</code> (<strong>Required</strong>) </li><ul><li><code>Comments</code> (Optional) </li><li><code>EstimatedArrivalDate</code> (Optional) - Format mm/dd/yyyy</li><li><code>VendorInvoiceNumber</code> (Optional) - Vendor supplied invoice number, this must be unique</li></ul><li><code>ProductsOrdered</code> (Optional) - Products ordered</li><ul><li><code>ProductInformation</code> (<strong>Required</strong>) </li><ul><li><code>QuantityOrdered</code> (<strong>Required</strong>) </li><li><code>VendorSKU</code> (<strong>Required</strong>) </li><li><code>DateReceived</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>MaximumLevel</code> (Optional) - defaults to -1</li><li><code>MinimumLevel</code> (Optional) - defaults to -1</li><li><code>ProductCost</code> (Optional) - defaults to -1</li><li><code>ProductID</code> (Optional) </li><li><code>ProductItemID</code> (Optional) </li><li><code>ProductName</code> (Optional) </li><li><code>ProductReceived</code> (Optional) </li><li><code>ProductSKU</code> (Optional) </li><li><code>QuantityCommittedOnOrderEntry</code> (Optional) - defaults to -1</li><li><code>QuantityInStock</code> (Optional) - defaults to -1</li><li><code>QuantityInTransfer</code> (Optional) - defaults to -1</li><li><code>QuantityOnBackOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnLoan</code> (Optional) - defaults to -1</li><li><code>QuantityOnOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnRMA</code> (Optional) - defaults to -1</li><li><code>QuantityReceived</code> (Optional) - defaults to -1</li><li><code>QuantitySold</code> (Optional) - defaults to -1</li></ul></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <UpdatePurchaseOrder 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <purchaseOrder>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <VendorInvoiceNumber>15782</VendorInvoiceNumber>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <Enabled>true</Enabled>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <ProductCost>99.99</ProductCost>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductItemID>11142</ProductItemID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </purchaseOrder>
    </UpdatePurchaseOrder>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = purchaseOrderID;
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = stores[0].StoreID;
po.PurchaseOrderData.Comments = "Vendor Invoice Number #: BDP123";
po.PurchaseOrderData.ShipToStoreID = stores[0].StoreID;
po.PurchaseOrderData.VendorInvoiceNumber = "BDP123";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].ProductItemID = productID;
po.ProductsOrdered[0].ProductName = "Samsung Galaxy S5 - Charcoal Black";
po.ProductsOrdered[0].ProductSKU = "SSSATM000002";
po.ProductsOrdered[0].VendorSKU = "SSGS5CB";
po.ProductsOrdered[0].QuantityOrdered = 1;
po.ProductsOrdered[0].ProductCost = 130.00;

PurchaseOrder poCreated = vmiService.UpdatePurchaseOrder(vendor, po);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <UpdatePurchaseOrderResponse xmlns="http://www.iqmetrix.com">
            <UpdatePurchaseOrderResult>true</UpdatePurchaseOrderResult>
        </UpdatePurchaseOrderResponse>
    </soap:Body>
</soap:Envelope> 
</script></code></pre>



<h3 id='canceling-an-uncommitted-purchase-order' class='clickable-header top-level-header'>Canceling an Uncommitted Purchase Order</h3>

Cancel a Purchase Order that is in an uncommitted state.


#### Request

<pre>
POST /?op=CancelUncommittedPurchaseOrder
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CancelUncommittedPurchaseOrder</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>purchaseOrderID</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/cmi/#purchaseorder'>PurchaseOrder</a></li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CancelUncommittedPurchaseOrder 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <purchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</purchaseOrderID>
    </CancelUncommittedPurchaseOrder>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

vmiService.CancelUncommittedPurchaseOrder(vendor, poId);      
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CancelUncommittedPurchaseOrderResponse xmlns="http://www.iqmetrix.com">
      <CancelUncommittedPurchaseOrderResult>true</CancelUncommittedPurchaseOrderResult>
    </CancelUncommittedPurchaseOrderResponse>
  </soap:Body>
</soap:Envelope>
</script></code></pre>



<h3 id='creating-an-uncommitted-purchase-order' class='clickable-header top-level-header'>Creating an Uncommitted Purchase Order</h3>

Create a purchase order that is not committed. 

The purchase order can then be reviewed in RQ by the client, modified as required and committed by the client before any product is sent.              


#### Request

<pre>
POST /?op=CreateUncommittedPurchaseOrder
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CreateUncommittedPurchaseOrder</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (Optional) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>purchaseOrder</code> (Optional) - The <a href='http://developers.iqmetrix.com/api/cmi/#purchaseorder'>PurchaseOrder</a></li><ul><li><code>PurchaseOrderData</code> (<strong>Required</strong>) </li><ul><li><code>BillToStoreID</code> (<strong>Required</strong>) - Defaults to -1. Either this value or BillToVendorAccountNumber must be supplied</li><li><code>EstimatedArrivalDate</code> (<strong>Required</strong>) - Format mm/dd/yyyy</li><li><code>ShipToStoreID</code> (<strong>Required</strong>) - Defaults to -1. Either this value or ShipToVendorAccountNumber must be supplied</li><li><code>VendorInvoiceNumber</code> (<strong>Required</strong>) - Vendor supplied invoice number, this must be unique</li><li><code>CreatedByVMI</code> (Optional) - defaults to false</li><li><code>CreatedDate</code> (Optional) </li><li><code>Comments</code> (Optional) </li><li><code>OrderTotal</code> (Optional) - Defaults to -1</li><li><code>ShippingTotal</code> (Optional) - Defaults to -1</li></ul><li><code>ProductsOrdered</code> (<strong>Required</strong>) - Products ordered</li><ul><li><code>ProductInformation</code> (<strong>Required</strong>) </li><ul><li><code>QuantityOrdered</code> (<strong>Required</strong>) </li><li><code>VendorSKU</code> (<strong>Required</strong>) </li><li><code>DateReceived</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>MaximumLevel</code> (Optional) - defaults to -1</li><li><code>MinimumLevel</code> (Optional) - defaults to -1</li><li><code>ProductCost</code> (Optional) - defaults to -1</li><li><code>ProductID</code> (Optional) </li><li><code>ProductItemID</code> (Optional) </li><li><code>ProductName</code> (Optional) </li><li><code>ProductReceived</code> (Optional) </li><li><code>ProductSKU</code> (Optional) </li><li><code>QuantityCommittedOnOrderEntry</code> (Optional) - defaults to -1</li><li><code>QuantityInStock</code> (Optional) - defaults to -1</li><li><code>QuantityInTransfer</code> (Optional) - defaults to -1</li><li><code>QuantityOnBackOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnLoan</code> (Optional) - defaults to -1</li><li><code>QuantityOnOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnRMA</code> (Optional) - defaults to -1</li><li><code>QuantityReceived</code> (Optional) - defaults to -1</li><li><code>QuantitySold</code> (Optional) - defaults to -1</li></ul></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreateUncommittedPurchaseOrder 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <purchaseOrder>
        <PurchaseOrderData>
          <BillToStoreID>55</BillToStoreID>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <VendorInvoiceNumber>15782</VendorInvoiceNumber>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <Enabled>true</Enabled>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <ProductCost>99.99</ProductCost>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductItemID>11142</ProductItemID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </purchaseOrder>
    </CreateUncommittedPurchaseOrder>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = stores[0].StoreID;
po.PurchaseOrderData.Comments = "Vendor Invoice Number #: BDP123";
po.PurchaseOrderData.ShipToStoreID = stores[0].StoreID;
po.PurchaseOrderData.VendorInvoiceNumber = "BDP123";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].ProductItemID = productID;
po.ProductsOrdered[0].ProductName = "Samsung Galaxy S5 - Charcoal Black";
po.ProductsOrdered[0].ProductSKU = "SSSATM000002";
po.ProductsOrdered[0].VendorSKU = "SSGS5CB";
po.ProductsOrdered[0].QuantityOrdered = 1;
po.ProductsOrdered[0].ProductCost = 130.00;

PurchaseOrder poCreated = vmiService.CreateUncommittedPurchaseOrder(vendor, po);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreateUncommittedPurchaseOrderResponse 
      xmlns="http://www.iqmetrix.com">
      <CreateUncommittedPurchaseOrderResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>15782</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantityReturned>11</GrossQuantityReturned>
            <GrossQuantitySold>10</GrossQuantitySold>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>true</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductItemID>11142</ProductItemID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </CreateUncommittedPurchaseOrderResult>
    </CreateUncommittedPurchaseOrderResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-product-receiving-info' class='clickable-header top-level-header'>Getting Product Receiving Info</h3>

Retrieves a list of products received within a date range.


#### Request

<pre>
POST /?op=GetReceivingInfo
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetReceivingInfo</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>StartDate</code> (<strong>Required</strong>) </li><li><code>EndDate</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetReceivingInfo 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
    </GetReceivingInfo>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;
ReceivingInfo[] receivingInfo = vmiService.GetReceivingInfo(vendor, startDate, endDate);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetReceivingInfoResponse 
      xmlns="http://www.iqmetrix.com">
      <GetReceivingInfoResult>
        <ReceivingInfo>
          <DateReceived>1/21/2016 4:58:24 PM</DateReceived>
          <ProductCost>650</ProductCost>
          <ProductItemID>20</ProductItemID>
          <ProductName>Samsung Galaxy Alpha Flipbook - Black/Magenta</ProductName>
          <Quantity>11</Quantity>
          <RQPurchaseOrderNumber>TT101PO1</RQPurchaseOrderNumber>
          <SerialNumber></SerialNumber>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <RQReceivingNumber>TT101RE1</RQReceivingNumber>
          <VendorName>SampleVendor</VendorName>
          <VendorSKU>SSGS5CB</VendorSKU>
        </ReceivingInfo>
      </GetReceivingInfoResult>
    </GetReceivingInfoResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-transfer-counts' class='clickable-header top-level-header'>Getting Transfer Counts</h3>

Retrieves a matrix of transfers that occured within the specified date range.

#### Notes

* For no channel, use Guid.Empty or `00000000-0000-0000-0000-000000000000`
* For no region, district or store use -1            


#### Request

<pre>
POST /?op=GetTransferCounts
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetTransferCounts</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>StartDate</code> (<strong>Required</strong>) - Search for transfers shipped and/or received on or after this date at midnight</li><li><code>EndDate</code> (<strong>Required</strong>) - Search for transfers shipped and/or received up to the end of this date</li><li><code>storeId</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetTransferCounts 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
      <storeId>4</storeId>
    </GetTransferCounts>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
DateTime startDate = new DateTime(2011, 2, 1);
DateTime endDate = new DateTime(2011, 2, 15);

ProductInformation[] products = vmiService.GetTransferCounts(vendor, startDate, endDate, storeId); 
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetTransferCountsResponse 
      xmlns="http://www.iqmetrix.com">
      <GetTransferCountsResult>
        <TransferCount>
          <ProductItemID>11142</ProductItemID>
          <ReceivedIn>1/21/2016 4:58:24 PM</ReceivedIn>
          <ReceivedOut>1/22/2016 4:58:24 PM</ReceivedOut>
          <ShippedIn>1/20/2016 4:58:24 PM</ShippedIn>
          <ShippedOut>1/19/2016 4:58:24 PM</ShippedOut>
          <storeId>4</storeId>
          <VendorSKU>SSGS5CB</VendorSKU>
        </TransferCount>
      </GetTransferCountsResult>
    </GetTransferCountsResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-inventory-listing-report' class='clickable-header top-level-header'>Getting the Inventory Listing Report</h3>

Retrieve a detailed list of locations and on-hand products where you are set as the primary vendor for that product. 

To be used in conjunction with results from <a href='#getting-hierarchy-info'>Getting Hierarchy Info</a>.

#### Notes

* For no channel, use Guid.Empty or `00000000-0000-0000-0000-000000000000`
* For no region, district or store use -1      


#### Request

<pre>
POST /?op=GetInventoryListingReport
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetInventoryListingReport</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>storeId</code> (<strong>Required</strong>) - This value can be a Channel, Region, District or Store Id. The request body will change depending on the parameter used (i.e. <channelId></channelId>)</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryListingReport 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <storeId>4</storeId>
    </GetInventoryListingReport>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

ProductInformation[] products = vmiService.GetInventoryListingReport(vendor, storeId);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetInventoryListingReportResponse 
      xmlns="http://www.iqmetrix.com">
      <GetInventoryListingReportResult>
        <InventoryListingData>
          <CategoryPath>&gt;&gt; Activations &gt;&gt; SamsungCR</CategoryPath>
          <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
          <Description>Samsung Galaxy S5 - Charcoal Black</Description>
          <DistrictID>1</DistrictID>
          <DistrictName>First District</DistrictName>
          <Location>Tasha's Test</Location>
          <ManufacturerSKU></ManufacturerSKU>
          <ProductSKU>ACCRTM000001</ProductSKU>
          <Quantity>1</Quantity>
          <RegionID>1</RegionID>
          <RegionName>First Region</RegionName>
          <TrackingNumber>12345</TrackingNumber>
          <VendorName>Dan's Supplies</VendorName>
          <VendorSKU>SSGS5CB</VendorSKU>
        </InventoryListingData>
      </GetInventoryListingReportResult>
    </GetInventoryListingReportResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-adjustment-report' class='clickable-header top-level-header'>Getting the Adjustment Report</h3>

Get a list of inventory adjustments with quantity and reason codes within a date range.

#### Notes

* For no channel, use Guid.Empty or `00000000-0000-0000-0000-000000000000`
* For no region, district or store use -1


#### Request

<pre>
POST /?op=GetAdjustmentReport
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetAdjustmentReport</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>storeId</code> (<strong>Required</strong>) - This value can be a Channel, Region, District or Store Id. The request body will change depending on the parameter used (i.e. <channelId></channelId>)</li><li><code>StartDate</code> (<strong>Required</strong>) - Look for adjustments created on or after this date at midnight</li><li><code>EndDate</code> (<strong>Required</strong>) - Look for adjustments created up to the end of this day</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetAdjustmentReport 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <storeId>4</storeId>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
    </GetAdjustmentReport>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

vendor.Client.StoreID = 4;
Adjustment[] adjustmentReport = vmiService.GetAdjustmentReport(vendor, startDate, endDate, storeId);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetAdjustmentReportResponse 
      xmlns="http://www.iqmetrix.com">
      <GetAdjustmentReportResult>
        <Adjustment>
          <ProductItemID>11142</ProductItemID>
          <Quantity>1</Quantity>
          <Reason>Refurbished</Reason>
          <StoreID>4</StoreID>
          <VendorSKU>SSGS5CB</VendorSKU>
        </Adjustment>
      </GetAdjustmentReportResult>
    </GetAdjustmentReportResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-geographic-inventory-report' class='clickable-header top-level-header'>Getting the Geographic Inventory Report</h3>


Similar to GetInventoryReportByVendorSKU, but can be used with <a href='#getting-hierarchy-info'>Getting Hierarchy Info</a> to rub the report at any level in the company tree (hierarchy).
     
This allows consumers to get inventory data for a large number of stores at one time. 

{{note}}
The payload and/or processing time for this call can be huge. Consider the number of locations multiplied by the number of products you supply for that store. 
<br/><a href='#getting-hierarchy-info'>Getting Hierarchy Info</a> includes a store count for each level of the hierarchy, use this value to allow your software to intelligently choose the appropriate level to request. 
<br/>Consider using a configuration value instead of hard-coding.
{{end}}

#### Notes

* For no channel, use Guid.Empty or `00000000-0000-0000-0000-000000000000`
* For no region, district or store use -1
* If the result of HierarchyInfo contains a default Channel of Guid.Empty (00000000-0000-0000-0000-000000000000), you must get data at the Region level.


#### Request

<pre>
POST /?op=GetGeographicInventoryReport
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetGeographicInventoryReport</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>storeId</code> (<strong>Required</strong>) - This value can be a Channel, Region, District or Store Id. The request body will change depending on the parameter used (i.e. <channelId></channelId>)</li><li><code>StartDate</code> (<strong>Required</strong>) </li><li><code>EndDate</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetGeographicInventoryReport 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <storeId>4</storeId>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
    </GetGeographicInventoryReport>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

vendor.Client.StoreID = 4;
ProductAndStoreInformation[] inventoryReport = vmiService.GetGeographicInventoryReport(vendor, startDate, endDate, storeId);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetGeographicInventoryReportResponse xmlns="http://www.iqmetrix.com">
      <GetGeographicInventoryReportResult>
        <ProductAndStoreInformation>
          <StoreID>6</StoreID>
          <Name>Vineland Test Store</Name>
          <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
          <ChannelName>First Channel</ChannelName>
          <RegionID>1</RegionID>
          <RegionName>First Region</RegionName>
          <DistrictID>1</DistrictID>
          <DistrictName>First District</DistrictName>
        </ProductAndStoreInformation>
      </GetGeographicInventoryReportResult>
    </GetGeographicInventoryReportResponse>
  </soap:Body>
</soap:Envelope>            
</script></code></pre>



<h3 id='getting-the-product-sales-report' class='clickable-header top-level-header'>Getting the Product Sales Report</h3>

Retrieves detailed sell through data for products where you are set as the primary vendor.

#### Notes

* For no channel, use Guid.Empty or `00000000-0000-0000-0000-000000000000`
* For no region, district or store use -1


#### Request

<pre>
POST /?op=GetProductSalesReport
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetProductSalesReport</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - Case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>storeId</code> (<strong>Required</strong>) - This value can be a Channel, Region, District or Store Id. The request body will change depending on the parameter used (i.e. <channelId></channelId>)</li><li><code>StartDate</code> (<strong>Required</strong>) </li><li><code>EndDate</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetProductSalesReport 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <storeId>4</storeId>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
    </GetProductSalesReport>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

vendor.Client.StoreID = 4;
ProductSalesReportData[] productReport = vmiService.GetProductSalesReport(vendor, startDate, endDate, storeId);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetProductSalesReportResponse 
      xmlns="http://www.iqmetrix.com">
      <GetProductSalesReportResult>
        <ProductSalesReportData>
          <CategoryPath>Activation >> Dropship</CategoryPath>
          <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
          <ChannelName>First Channel</ChannelName>
          <Description></Description>
          <DistrictID>1</DistrictID>
          <DistrictName>First District</DistrictName>
          <InvoicedBy>iQmetrix User</InvoicedBy>
          <ListPrice>99.99</ListPrice>
          <ProductItemID>11142</ProductItemID>
          <ProductSKU>CECPSM000017</ProductSKU>
          <Quantity>1</Quantity>
          <Refund>false</Refund>
          <RegionID>1</RegionID>
          <RegionName>First Region</RegionName>
          <RqInvoiceIdByStore>BDP123</RqInvoiceIdByStore>
          <SoldOn>1/21/2016 4:58:24 PM</SoldOn>
          <StoreID>4</StoreID>
          <TrackingNumber>12345</TrackingNumber>
          <VendorSKU>SSGS5CB</VendorSKU>
        </ProductSalesReportData>
      </GetProductSalesReportResult>
    </GetProductSalesReportResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-a-list-of-rmas' class='clickable-header top-level-header'>Getting a List of RMAs</h3>

This method allows you to retrieve a list of RMAs for a particular store. You can search on Uncommitted (pending), committed, or shipped RMAs.     


#### Request

<pre>
POST /?op=GetRMAList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetRMAList</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>StoreID</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>isCommitted</code> (Optional) - True to include committed RMAs, false to exclude. Defaults to false</li><li><code>isShipped</code> (Optional) - True to include shipped RMAs, false to exclude. Defaults to false</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetRMAList 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <isCommitted>false</isCommitted>
      <isShipped>false</isShipped>
    </GetRMAList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>var vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

var isCommitted = true;
var isShipped = false;

var rmaList = vmiService.GetRMAList(vendor, isCommitted, isShipped);            
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetRMAListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetRMAListResult>
        <ReturnMerchandiseAuthorization>
          <ProductData>
            <RMAProduct>
              <RQProductSku>CDATSS000019</RQProductSku>
              <RQProductID>19</RQProductID>
              <SerialNumberRemoved>789987741147111</SerialNumberRemoved>
              <VendorInvoiceNumber>123456</VendorInvoiceNumber>
              <TotalQuantity>1</TotalQuantity>
              <NonSellableQuantity>0</NonSellableQuantity>
              <UnitCost>0</UnitCost>
              <ActionTaken>Credit</ActionTaken>
            </RMAProduct>
          </ProductData>
          <RMAID>16</RMAID>
          <RMAIDByStore>ATTEXSB3</RMAIDByStore>
          <StoreID>0</StoreID>
          <VendorID>0</VendorID>
          <CreatedByVMI>false</CreatedByVMI>
          <VendorRMANumber>123456</VendorRMANumber>
          <WayBillNumber>0</WayBillNumber>
          <ShippingMethod>USPS</ShippingMethod>
          <ReceivingComments>Broken</ReceivingComments>
          <ShippingCost>0</ShippingCost>
          <Committed>0</Committed>
          <DateCommitted>2017-01-01T00:00:00</DateCommitted>
          <ShippedAway>0</ShippedAway>
          <Completed>0</Completed>
          <Comments>Sent</Comments>
          <DateCreated>2016-11-04T00:00:00</DateCreated>
        </ReturnMerchandiseAuthorization>
      </GetRMAListResult>
    </GetRMAListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='creating-a-rma' class='clickable-header top-level-header'>Creating a RMA</h3>

This method allows the vendor to create a Return Merchandise Authorization for a client. 

Committed, DateCommitted, ShippedAway, Completed, ShippingCost, EmployeeID, and VendorID will be ignored if set when creating an RMA. 

These fields are only set for informational purposes in other RMA calls.

#### Notes

* The RMA is created in an uncommitted (pending) state
* It will become visible in RQ and will be reviewed and fulfilled by store staff using RQ
* For serialized products, a serial number must be supplied. 


#### Request

<pre>
POST /?op=CreateRMA
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CreateRMA</code> (<strong>Required</strong>) </li><ul><li><code>Vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>RMA</code> (Optional) </li><ul><li><code>ProductData</code> (<strong>Required</strong>) </li><ul><li><code>RMAProduct</code> (<strong>Required</strong>) </li><ul><li><code>RQProductSku</code> (<strong>Required</strong>) </li><li><code>RQProductID</code> (<strong>Required</strong>) </li><li><code>SerialNumberRemoved</code> (<strong>Required</strong>) </li><li><code>TotalQuantity</code> (<strong>Required</strong>) </li><li><code>ActionTaken</code> (<strong>Required</strong>) </li><li><code>VendorInvoiceNumber</code> (Optional) </li><li><code>NonSellableQuantity</code> (Optional) </li><li><code>UnitCost</code> (Optional) </li></ul></ul><li><code>VendorID</code> (Optional) </li><li><code>CreatedByVMI</code> (Optional) </li><li><code>VendorRMANumber</code> (Optional) </li><li><code>ShippingCost</code> (Optional) </li><li><code>Comments</code> (Optional) </li></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreateRMA 
      xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <RMA>
        <ProductData>
          <RMAProduct>
            <RQProductSku>CDATSS000019</RQProductSku>
            <RQProductID>19</RQProductID>
            <SerialNumberRemoved>789987741147111</SerialNumberRemoved>
            <VendorInvoiceNumber>123456</VendorInvoiceNumber>
            <TotalQuantity>1</TotalQuantity>
            <NonSellableQuantity>0</NonSellableQuantity>
            <UnitCost>0</UnitCost>
            <ActionTaken>Credit</ActionTaken>
          </RMAProduct>
        </ProductData>
        <VendorID>0</VendorID>
        <CreatedByVMI>false</CreatedByVMI>
        <VendorRMANumber>123456</VendorRMANumber>
        <ShippingCost>0</ShippingCost>
        <Comments>Sent</Comments>
      </RMA>
    </CreateRMA>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;

ReturnMerchandiseAuthorization rma = new ReturnMerchandiseAuthorization();

rma.Comments = "Test RMA";

rma.VendorRMANumber = "123456789";
rma.ProductData = new RMAProduct[1];
rma.ProductData[0] = new RMAProduct();
rma.ProductData[0].RQProductID = productID; 
rma.ProductData[0].RQProductSku = "PSKU123"; 
rma.ProductData[0].SerialNumberRemoved = "320192949201938"; 
rma.ProductData[0].VendorInvoiceNumber = "12345"; 
rma.ProductData[0].TotalQuantity = 1; 
rma.ProductData[0].NonSellableQuantity = 1; 
rma.ProductData[0].UnitCost = 500.00m; 
rma.ProductData[0].ActionTaken = ActionTaken.Credit; 

ReturnMerchandiseAuthorization rmaCreated = vmiService.CreateRMA(vendor, rma);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreateRMAResponse 
      xmlns="http://www.iqmetrix.com">
      <CreateRMAResult>
        <ProductData>
          <RMAProduct>
            <RQProductSku>CDATSS000019</RQProductSku>
            <RQProductID>19</RQProductID>
            <SerialNumberRemoved>789987741147111</SerialNumberRemoved>
            <VendorInvoiceNumber>123456</VendorInvoiceNumber>
            <TotalQuantity>1</TotalQuantity>
            <NonSellableQuantity>0</NonSellableQuantity>
            <UnitCost>0</UnitCost>
            <ActionTaken>Credit</ActionTaken>
          </RMAProduct>
        </ProductData>
        <RMAID>16</RMAID>
        <RMAIDByStore>ATTEXSB3</RMAIDByStore>
        <StoreID>0</StoreID>
        <VendorID>0</VendorID>
        <CreatedByVMI>false</CreatedByVMI>
        <VendorRMANumber>123456</VendorRMANumber>
        <ShippingCost>0</ShippingCost>
        <Committed>0</Committed>
        <DateCommitted>2017-01-01T00:00:00</DateCommitted>
        <ShippedAway>0</ShippedAway>
        <Completed>0</Completed>
        <Comments>Sent</Comments>
        <DateCreated>2016-11-04T00:00:00</DateCreated>
      </CreateRMAResult>
    </CreateRMAResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='updating-a-committed-rma' class='clickable-header top-level-header'>Updating a Committed RMA</h3>

This method allows the vendor to update an existing RMA that is in the committed or shipped state. 

The main purpose of this method is to allow the vendor to assign a Vendor RMA number to the RMA after the client has accepted and committed the RMA.    

#### Request

<pre>
POST /?op=UpdateCommittedRMA
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>UpdateCommittedRMA</code> (<strong>Required</strong>) </li><ul><li><code>vendor</code> (<strong>Required</strong>) - case-sensitive</li><ul><li><code>VendorID</code> (<strong>Required</strong>) </li><li><code>Username</code> (<strong>Required</strong>) </li><li><code>Password</code> (<strong>Required</strong>) </li><li><code>Client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) </li><li><code>StoreID</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>VendorAccountNumber</code> (Optional) </li></ul></ul><li><code>rma</code> (<strong>Required</strong>) </li><ul><li><code>UpdateRMA</code> (<strong>Required</strong>) </li><ul><li><code>ProductData</code> (<strong>Required</strong>) </li><ul><li><code>RMAProduct</code> (<strong>Required</strong>) </li><ul><li><code>RQProductSku</code> (<strong>Required</strong>) </li><li><code>RQProductID</code> (<strong>Required</strong>) </li><li><code>SerialNumberRemoved</code> (<strong>Required</strong>) </li><li><code>TotalQuantity</code> (<strong>Required</strong>) </li><li><code>ActionTaken</code> (<strong>Required</strong>) </li><li><code>VendorInvoiceNumber</code> (Optional) </li><li><code>NonSellableQuantity</code> (Optional) </li><li><code>UnitCost</code> (Optional) </li></ul></ul><li><code>VendorID</code> (Optional) </li><li><code>CreatedByVMI</code> (Optional) </li><li><code>VendorRMANumber</code> (Optional) </li><li><code>WayBillNumber</code> (Optional) </li><li><code>ShippingMethod</code> (Optional) </li><li><code>ReceivingComments</code> (Optional) </li><li><code>ShippingCost</code> (Optional) </li><li><code>Comments</code> (Optional) </li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <UpdateCommittedRMA 
      xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
      <rma>
        <UpdateRMA>
          <ProductData>
            <RMAProduct>
              <RQProductSku>CDATSS000019</RQProductSku>
              <RQProductID>19</RQProductID>
              <SerialNumberRemoved>789987741147111</SerialNumberRemoved>
              <VendorInvoiceNumber>123456</VendorInvoiceNumber>
              <TotalQuantity>1</TotalQuantity>
              <NonSellableQuantity>0</NonSellableQuantity>
              <UnitCost>0</UnitCost>
              <ActionTaken>Credit</ActionTaken>
            </RMAProduct>
          </ProductData>
          <VendorID>0</VendorID>
          <CreatedByVMI>false</CreatedByVMI>
          <VendorRMANumber>123456</VendorRMANumber>
          <WayBillNumber>0</WayBillNumber>
          <ShippingMethod>USPS</ShippingMethod>
          <ReceivingComments>Broken</ReceivingComments>
          <ShippingCost>0</ShippingCost>
          <Comments>Sent</Comments>
        </UpdateRMA>
      </rma>
    </UpdateCommittedRMA>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;

ReturnMerchandiseAuthorization rma = new ReturnMerchandiseAuthorization();
rma.RMAID = rmaId;
rma.Comments = "Defective";
rma.VendorRMANumber = "12345";

ReturnMerchandiseAuthorization updatedRma = vmiService.UpdateCommittedRMA(vendor, rma);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <UpdateCommittedRMAResponse 
      xmlns="http://www.iqmetrix.com">
      <UpdateCommittedRMAResult>
        <ProductData>
          <RMAProduct>
            <RQProductSku>CDATSS000019</RQProductSku>
            <RQProductID>19</RQProductID>
            <SerialNumberRemoved>789987741147111</SerialNumberRemoved>
            <VendorInvoiceNumber>123456</VendorInvoiceNumber>
            <TotalQuantity>1</TotalQuantity>
            <NonSellableQuantity>0</NonSellableQuantity>
            <UnitCost>0</UnitCost>
            <ActionTaken>Credit</ActionTaken>
          </RMAProduct>
        </ProductData>
        <RMAID>16</RMAID>
        <RMAIDByStore>ATTEXSB3</RMAIDByStore>
        <StoreID>0</StoreID>
        <VendorID>0</VendorID>
        <CreatedByVMI>false</CreatedByVMI>
        <VendorRMANumber>123456</VendorRMANumber>
        <ShippingCost>0</ShippingCost>
        <Committed>0</Committed>
        <DateCommitted>2017-01-01T00:00:00</DateCommitted>
        <ShippedAway>0</ShippedAway>
        <Completed>0</Completed>
        <Comments>Sent</Comments>
        <DateCreated>2016-11-04T00:00:00</DateCreated>
      </UpdateCommittedRMAResult>
    </UpdateCommittedRMAResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>






<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 500` | `Found Purchase orders for StoreID [x] by VendorInvoiceNumber [y]` | Ensure VendorInvoiceNumber is unique |   
| `HTTP 500` | `ShipToStoreID must be > 0 or ShipToVendorAccountNumber must be supplied` | Ensure one of ShipToStoreID or ShipToVendorAccountNumber is provided |   
| `HTTP 500` | `BillToStoreID must be > 0 or BillToVendorAccountNumber must be supplied` | Ensure one of BillToStoreID or BillToVendorAccountNumber is provided |   
| `HTTP 500` | `Existing Purchase order has been found with Purchase Order ID [x]` | Omit PurchaseOrderID from request body or ensure it is unique |   
| `HTTP 500` | `Cannot update Purchase Order [x] because it has received products or is marked as complete | Ensure the PO you are updating is not complete |
| `HTTP 500` | `The estimated arrival date is not in the MM/dd/yyyy format` | Change the `EstimatedArrivalDate` to use the format `MM/dd/yyyy` |

