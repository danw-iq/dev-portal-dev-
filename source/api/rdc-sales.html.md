---
title:  RQ Data Connect Sales Reports
permalink: /api/RQ-Data-Connect-Sales-Reports/
tags: []
keywords: 
audience: 
last_updated: 2-12-2016
summary: 
rouge: false
noPopUp: true
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview


RQ Data Connect allows you to retrieve report data from your RQ database (v4.23 and up).

To get started, see [RQ Data Connect Guide](/guides/rq-data-connect/).

#### Note

For reports that provide optional URI parameters for filtering at different levels (ForWho/ForWhoIDs/LocationType/LocationTypeIDs), omitting these values will run the report at the default company level.

### Authentication

RQ Data Connect and Bridge support many different methods of authentication, see {{AuthenticationOptions}}.

Note that for all reports the {{AccessToken_Glossary}} should be mapped to an employee in RQ.

### Report List

For a complete list of reports in RQ Data Connect, see [Report List](/rq-data-connect/report-list).


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

## ActivationGrossProfitReportData

```json
{
	"InvoiceDate": "2016-10-12T09:16:24.63",
	"InvoiceID": "129920",
	"InvoiceIDByStore": "84WEAIN15624",
	"StoreTypeName": "Retail Store",
	"LocationName": "84 West",
	"Profit": "667.99",
	"CustomerID": "108560",
	"CustomerName": "AAA AND ASSOCIATES",
	"PhoneDescription": "Apple iPhone 6 Plus 16GB White - AT&T",
	"PhoneNumber": "3065014785",
	"TermDescription": "CRU 2 YR Business New Act",
	"RatePlanDescription": "2 YR CRU Business Legacy Plan $0.01 - $9.99",
	"VendorAccountName": "AT&T",
	"EmployeeName": "iQmetrix User",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel"
}
```

| Name | Description |
|:-----|:------------|
| InvoiceDate (`DateTime`) | Date - date of the transaction | 
| InvoiceID (`INT`) | Identifier for an invoice in RQ | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice # - invoice number of the transaction | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - location type where the transaction was performed | 
| LocationName (`NVARCHAR(MAX)`) | Location -  location where the transaction occurred | 
| Profit (`MONEY`) | Profit - amount of profit made on the activation, includes the total profit for the parameters run | 
| CustomerID (`INT`) | Identifier for the customer in RQ | 
| CustomerName (`VARCHAR(151)`) | Customer - name of the customer on the invoice | 
| PhoneDescription (`NVARCHAR(MAX)`) | Phone - phone used in the activation | 
| PhoneNumber (`VARCHAR(30)`) | Phone # - phone number entered into the Phone Activation Wizard | 
| TermDescription (`NVARCHAR(MAX)`) | Term - term selected with the activation | 
| RatePlanDescription (`NVARCHAR(MAX)`) | Rate Plan - rate plan selected for the activation | 
| VendorAccountName (`VARCHAR(100)`) | Vendor Account - vendor account used in the activation | 
| EmployeeName (`VARCHAR(51)`) | Employee - sales person on the invoice | 
| DistrictName (`NVARCHAR(MAX)`) | District - district the store is in | 
| RegionName (`NVARCHAR(MAX)`) | Region - region the store is in | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel the store is in | 


## AgedSerializedSalesStatusReportData

```json
{
	"SaleInvoiceID": "126540",
	"DateCreated": "2016-01-05T09:20:39.773",
	"GlobalProductID": "2815",
	"SpecialProductID": "0",
	"Location": "84 West",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"SoldBy": "iQmetrix User",
	"TenderedBy": "iQmetrix User",
	"InvoiceIDByStore": "84WEAIN11555",
	"ProductIdentifier": "ACVZAP000574",
	"ProductName": "iPhone 5s 32GB - Gold",
	"SerialNumber": "866988333292854",
	"IsOldest": "No",
	"ReceivedDate": "2015-08-13T00:00:00",
	"DaysOnHand": "145",
	"QtyInStock": "27",
	"OlderQty": "1",
	"SoldAsUsed": "false",
	"StoreTypeName": "Retail Store"
}
```

| Name | Description |
|:-----|:------------|
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| DateCreated (`DateTime`) | Sold On - date and time the product was sold | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| SpecialProductID (`INT`) | Acceptable values include 0 for Regular Product, 1 for Vendor Rebate, 2 for Non-Stocked Product, 3 for Gift Card, 4 for Non Revenue Product | 
| Location (`NVARCHAR(MAX)`) | Location - name of the location where the product was sold | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the row's Location | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the row's Location | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the row's Location | 
| SoldBy (`VARCHAR(51)`) | Sold By - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | 
| TenderedBy (`VARCHAR(51)`) | Tendered By - name of the employee logged into RQ when the invoice was tendered | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice # - invoice number assigned by RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - tracking number associated with this product | 
| IsOldest (`VARCHAR(3)`) | Oldest - indicates if this was the oldest one of this product when sold | 
| ReceivedDate (`DateTime`) | Received - date and time this particular product was received | 
| DaysOnHand (`INT`) | Days On Hand - number of days on in stock | 
| QtyInStock (`INT`) | Qty In Stock - number of this SKU in stock before the sale | 
| OlderQty (`INT`) | Older Qty - number of this product older than the one sold | 
| SoldAsUsed (`BIT`) | Used - indicates the product is used | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - location type the the transaction was performed at | 


## CouponSummaryReportData

```json
{
	"Date": "2016-01-01T00:00:00",
	"QuantityApplied": "1",
	"QuantityRefunded": "1",
	"NetQuantity": "0",
	"TotalValue": "-10"
}
```

| Name | Description |
|:-----|:------------|
| Date (`DateTime`) | Date - every day in the date range selected | 
| QuantityApplied (`INT`) | Qty Applied - total quantity of coupons applied for the day | 
| QuantityRefunded (`INT`) | Qty Refunded - total quantity of coupons refunded for the day | 
| NetQuantity (`INT`) | Net Qty - net quantity of coupons for the day calculated as Qty Applied - Qty Refunded | 
| TotalValue (`MONEY`) | Total Value - net dollar value of all coupons for the day | 


## DailySalesSummaryReportData

```json
{
	"DateCreated": "2016-01-05T00:00:00",
	"QtySold": "19",
	"QtyRefunded": "-7",
	"NetQty": "12",
	"TotalInvoiced": "266.38",
	"Adjustment": "0",
	"Net": "246.38",
	"Cost": "80.92",
	"Coupon": "0",
	"CouponTax": "0",
	"Profit": "165.46"
}
```

| Name | Description |
|:-----|:------------|
| DateCreated (`DateTime`) | Created On - date the products were tendered or refunded | 
| QtySold (`INT`) | Qty Sold - total number of products sold | 
| QtyRefunded (`INT`) | Qty Ref - total number of products refunded | 
| NetQty (`INT`) | Net Qty - net total number of products | 
| TotalInvoiced (`MONEY`) | Total Invoiced - total dollar value of all invoiced products | 
| Adjustment (`MONEY`) | Adjustment - the net dollar amount of any adjustments for this day | 
| Net (`MONEY`) | Sales - total dollar value of all sales | 
| Cost (`MONEY`) | Cost - total purchase cost for all products sold that day | 
| Coupon (`MONEY`) | Coupon - dollar amount of coupons used on sale | 
| CouponTax (`MONEY`) | Coupon Taxes - dollar amount of coupon taxes on sale | 
| Profit (`MONEY`) | Gross Profit - gross profit, calculated as Sales - Cost | 


## DiscountSummaryReportData

```json
{
	"GlobalProductID": "2611",
	"DateCreated": "2016-01-05T07:48:16.22",
	"StoreID": "1",
	"StoreInStoreFlowIsEnabledForStore": "false",
	"StoreName": "84 West",
	"EntityID": "126533",
	"EntityIDByStore": "84WEAIN11546",
	"ProductIdentifier": "ASBAUN000048",
	"ProductName": "Powerocks Tarot 1500 mAh Extended Battery Pak",
	"CustomerName": "John Test",
	"PrimarySalesPersonName": "iQmetrix User",
	"TenderEmployeeName": "iQmetrix User",
	"PrimarySalesPersonUsername": "iQmetrix.User",
	"TenderEmployeeUsername": "iQmetrix.User",
	"ListPrice": "44.99",
	"StoreInStoreListPrice": "250",
	"SerialNumber": "866988333292854",
	"UnitCost": "19.65",
	"MLPCalculatedPrice": "599",
	"SoldForUnitPrice": "25",
	"StoreInStorePrice": "599",
	"OriginalUnitPrice": "499",
	"Quantity": "1",
	"CommentsFromInvoice": "Damage",
	"DiscountReasonName": "Verizon Edge",
	"ActivatedThroughPAW": "false",
	"ReferenceNumbers": "",
	"RecordType": "0",
	"InvoiceRowID": "e66327f5-68a8-f32e-2e8e-17eb95c958f2",
	"ProductRowID": "8d312986-a26c-5dd4-75c7-1f5201a34ea8"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| DateCreated (`DateTime`) | Date of Invoice/Sales Order - date and time the invoice was tendered | 
| StoreID (`INT`) | Internal identifier for a store in RQ | 
| StoreInStoreFlowIsEnabledForStore (`BIT`) | Internal identifier in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Location - where the transaction was done. | 
| EntityID (`INT`) | Identifier for the store as a <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a> in Entity Store | 
| EntityIDByStore (`VARCHAR(14)`) | Invoice/Sales Order - invoice number assigned by RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| CustomerName (`VARCHAR(151)`) | Customer - name of the customer as entered on their profile | 
| PrimarySalesPersonName (`VARCHAR(51)`) | Primary Salesperson - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box on the Accept Payment screen | 
| TenderEmployeeName (`VARCHAR(51)`) | Tendered By - name of the employee logged into RQ when the invoice was tendered | 
| PrimarySalesPersonUsername (`VARCHAR(51)`) | Primary Username - username of the employee of record for the sale, i.e. the employee whose name is in the Commission box on the Accept Payment screen | 
| TenderEmployeeUsername (`VARCHAR(51)`) | Tendered By Username - username of the employee logged into RQ when the invoice was tendered | 
| ListPrice (`MONEY`) | List Price - pre-discount price | 
| StoreInStoreListPrice (`MONEY`) | Discounted below MLP - amount below the MLP price | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - tracking number associated with the discounted serialized product | 
| UnitCost (`MONEY`) | Cost - actual cost for serialized product or WAC (see Weighted Average Cost Details) from the time of sale if non-serialized | 
| MLPCalculatedPrice (`MONEY`) | MLP Price - the multi level price listed | 
| SoldForUnitPrice (`MONEY`) | Discount below PAW - amount below the PAW price | 
| StoreInStorePrice (`MONEY`) | Sold For - discounted price | 
| OriginalUnitPrice (`MONEY`) | PAW Price - listed price in the Carrier Price Sheet | 
| Quantity (`INT`) | Quantity | 
| CommentsFromInvoice (`TEXT`) | Comments - any comments added at the time of discount | 
| DiscountReasonName (`NVARCHAR(MAX)`) | Discount Code - discount code selected by the discounting employee | 
| ActivatedThroughPAW (`BIT`) | A flag to indicate if the product was activated through the Phone Activation Wizard | 
| ReferenceNumbers (`NVARCHAR(MAX)`) | Reference numbers | 
| RecordType (`INT`) | Acceptable values include 0 for Invoice and 1 for Sales Order | 
| InvoiceRowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| ProductRowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 


## DonationsSummaryReportData

```json
{
	"DateCreated": "2016-04-12T07:30:43.52",
	"SaleInvoiceID": "128579",
	"InvoiceIDByStore": "84WEAIN14250",
	"CustomerID": "92997",
	"CustomerName": "anne fox",
	"DonationID": "bca3b5ad-923b-2955-28c1-544d524c3bd9",
	"DonationName": "Free The Children",
	"DonationValue": "0.01",
	"ProductIdentifier": "ASBANR000069",
	"Location": "84 West",
	"StoreTypeName": "Retail Store",
	"TenderedBy": "iQmetrix User",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel"
}
```

| Name | Description |
|:-----|:------------|
| DateCreated (`DateTime`) | Date - date and time the donation was accepted | 
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice - invoice the donation was processed on | 
| CustomerID (`INT`) | Identifier for a customer in RQ | 
| CustomerName (`VARCHAR(151)`) | Customer - name of the customer who made the donation | 
| DonationID (`UNIQUEIDENTIFIER`) | Identifier for the donation in RQ | 
| DonationName (`NVARCHAR(MAX)`) | Donation - name of the charity the donation was made to | 
| DonationValue (`MONEY`) | Value- dollar amount donated | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - SKU for the donation | 
| Location (`NVARCHAR(MAX)`) | Location - location in which donation was accepted | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - location type where the donation was accepted | 
| TenderedBy (`VARCHAR(51)`) | Tendered by - employee who accepted the donation | 
| DistrictName (`NVARCHAR(MAX)`) | District - district in which the donation was accepted | 
| RegionName (`NVARCHAR(MAX)`) | Region - region on which the donation was accepted | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel in which the donation was accepted | 


## InvoiceHistoryReportData

```json
{
	"InvoiceIDByStore": "84WEAIN12398",
	"CreatedByEmployee": "iQmetrix User",
	"CreatedByEmployeeUsername": "iQmetrix.User",
	"DateCreated": "2016-01-19T07:56:57.613",
	"CreatedWorkstationName": "MAIN",
	"CustomerID": "71419",
	"CustomerName": "John Test",
	"CompletedBy": "1",
	"CompletedByEmployeeName": "iQmetrix User",
	"CompletedByUsername": "iQmetrix.User",
	"CompletedOn": "2016-01-19T09:56:57.613",
	"CompletedWorkstationName": "MAIN",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"LocationType": "1",
	"LocationTypeName": "Retail Store",
	"Status": "3",
	"LocationName": "84 West",
	"DiscountCode": "",
	"RefundCode": "",
	"RefundComments": "",
	"InvoiceSubtotal": "1",
	"InvoiceAmount": "11.55",
	"PaymentTaken": "true",
	"PaymentTakenWorkstationName": "MAIN"
}
```

| Name | Description |
|:-----|:------------|
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice # - invoice number assigned by RQ | 
| CreatedByEmployee (`VARCHAR(51)`) | Created By Employee - employee logged in when the invoice was created | 
| CreatedByEmployeeUsername (`VARCHAR(51)`) | Created By Username - username of employee that created the invoice (person that started the creation of the invoice) | 
| DateCreated (`DateTime`) | Date Created - date and time the invoice was started | 
| CreatedWorkstationName (`VARCHAR(50)`) | Created Workstation Name - name of the workstation where the invoice was created | 
| CustomerID (`INT`) | Identifier for a customer in RQ | 
| CustomerName (`VARCHAR(152)`) | Customer Name - name of the customer on the invoice | 
| CompletedBy (`INT`) | Identifier for the employee that completed the invoice | 
| CompletedByEmployeeName (`VARCHAR(51)`) | Completed By - name of the employee that has their name attached to the completed invoice (Sales Person) | 
| CompletedByUsername (`VARCHAR(51)`) | Completed By Username - username of employee that completed the invoice (person that tendered the invoice) | 
| CompletedOn (`DateTime`) | Completed On - date the invoice was completed | 
| CompletedWorkstationName (`VARCHAR(50)`) | Completed Workstation Name - workstation the invoice was completed on | 
| DistrictName (`NVARCHAR(MAX)`) | District Name - name of the District the invoice was created and completed at | 
| RegionName (`NVARCHAR(MAX)`) | Region Name - name of the Region the invoice was created and completed at | 
| ChannelName (`NVARCHAR(MAX)`) | Channel Name - name of the Channel the invoice was created and completed at | 
| LocationType (`INT`) | Internal identifier for a Location Type in RQ. See LocationTypeName property | 
| LocationTypeName (`NVARCHAR(MAX)`) | Location Type - type of location which is selected in the location setup screen, e.g.. retail, corporate, kiosk, etc. | 
| Status (`INT`) | Status - status of the invoice Tendering, Failed, Incomplete, Tendered | 
| LocationName (`NVARCHAR(MAX)`) | Location Name - name of the location the invoice was created and completed a | 
| DiscountCode (`NVARCHAR(MAX)`) | Discount Code - discount code used on the invoice (blank if not used) | 
| RefundCode (`NVARCHAR(MAX)`) | Refund Code - refund code used on the invoice (blank if not used) | 
| RefundComments (`TEXT`) | Refund Comments - comments that were attached to the invoice | 
| InvoiceSubtotal (`FLOAT`) | Invoice Subtotal - amount of the invoice before taxes, coupons and discounts (shows the price of the items, either regular or sale price) | 
| InvoiceAmount (`FLOAT`) | Invoice Amount - total amount of the invoice | 
| PaymentTaken (`BIT`) | Payment Taken - if a payment was taken this value will be true | 
| PaymentTakenWorkstationName (`VARCHAR(50)`) | Payment Taken Workstation - workstation that took the payment | 


## PawExceptionsReportData

```json
{
	"SaleInvoiceID": "126540",
	"InvoiceIDByStore": "84WEAIN11555",
	"OrderEntryID": "3135",
	"OrderEntryIDByStore": "",
	"DateCreated": "2016-01-05T09:20:39.773",
	"StoreID1": "1",
	"EmployeeID1": "2384",
	"EmployeeName": "iQmetrix Employee",
	"Username": "iQmetrix.Employee",
	"TermName": "1 Year UPGRADE",
	"DeviceSKU": "ACVZAP000574",
	"DeviceSerialNumber": "866988333292854",
	"RatePlanSKU": "ASAANS000035",
	"IsManualOverrideImport": "true",
	"IsCarrierImportUsed": "false",
	"RatePlan2SKU": "ACVZNS000159",
	"ManualOverrideComments": "Sale",
	"CarrierImportNotUsedComments": "Carrier down",
	"StoreName": "84 West",
	"DeviceDescription": "iPhone 5s 32GB - Gold",
	"RatePlanDescription": "Act $20.99 to $49.99",
	"RatePlan2Description": "Act $9.99 to $20.98",
	"ManualOverrideReason": "Damage",
	"CarrierImportNotUsedReason": "The Carrier site is down",
	"ManagerOverride": "No"
}
```

| Name | Description |
|:-----|:------------|
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice - a hyperlink that you can click on to see the original invoice | 
| OrderEntryID (`INT`) | Identifier for an Order in RQ | 
| OrderEntryIDByStore (`VARCHAR(14)`) | Order # - a hyperlink that you can click on to see the original order | 
| DateCreated (`DateTime`) | Date - date and time of invoice | 
| StoreID1 (`INT`) | Identifier for a store in RQ | 
| EmployeeID1 (`INT`) | Identifier for an employee in RQ | 
| EmployeeName (`VARCHAR(51)`) | Employee Name - name of the employee logged into RQ | 
| Username (`VARCHAR(51)`) | Username - username of the employee logged into RQ | 
| TermName (`NVARCHAR(MAX)`) | Term - carrier term the device was activated on | 
| DeviceSKU (`VARCHAR(12)`) | Device SKU - RQ SKU of the product referenced in the report results | 
| DeviceSerialNumber (`VARCHAR(100)`) | ESN/IMEI - serial number of the device | 
| RatePlanSKU (`VARCHAR(12)`) | Rate Plan SKU - RQ SKU of the product referenced in the report results | 
| IsManualOverrideImport (`BIT`) | Manual Override - will indicate that a Manual Override was used | 
| IsCarrierImportUsed (`BIT`) | Carrier Import Used - flagged to indicate when a Carrier Import was used on the transaction | 
| RatePlan2SKU (`VARCHAR(12)`) | Second rate plan SKU | 
| ManualOverrideComments (`VARCHAR(100)`) | Manual Overrides Comments - will report the override comments typed in at transaction time | 
| CarrierImportNotUsedComments (`VARCHAR(100)`) | Carrier Import Not Used Comments - will report the comments typed in at transaction time when the Carrier Import was not used | 
| StoreName (`NVARCHAR(MAX)`) | Location - location invoice was created in | 
| DeviceDescription (`NVARCHAR(MAX)`) | Device - RQ name of the product referenced in the report results | 
| RatePlanDescription (`NVARCHAR(MAX)`) | Rate Plan - RQ name of the product referenced in the report results | 
| RatePlan2Description (`NVARCHAR(MAX)`) | Second rate plan description | 
| ManualOverrideReason (`NVARCHAR(MAX)`) | Manual Override Reason - will report the reason chosen at transaction time from the drop down menu of options | 
| CarrierImportNotUsedReason (`NVARCHAR(MAX)`) | Carrier Import Not Used Reason - will report the reason chosen at transaction time from the drop down menu of options | 
| ManagerOverride (`VARCHAR(255)`) | Manager Override - indicates if a manager override was used | 


## ProductDetailReportData

```json
{
	"Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
	"AdjustedUnitPrice": "25",
	"BillingAccountNumber": "",
	"CarrierPrice": "null",
	"CategoryPath": ">> Phones >> Galaxies",
	"ChannelName": "English Channel",
	"Comments": "",
	"ContractNumber": "12345",
	"CustomerID": "131149",
	"CustomerName": "Bob Jones",
	"DateCreated": "2016-05-13T12:18:08.723",
	"DistrictName": "Westminster",
	"EmployeeName": "iQmetrix User",
	"EmployeeID": "4",
	"GlobalProductID": "5179",
	"InvoicedAt": "100: My Network LLC - Anchorage",
	"InvoicedAt_StoreID": "1",
	"InvoicedBy": "100: My Network LLC - Anchorage",
	"InvoicedBy_StoreID": "1",
	"InvoiceIDByStore": "77224IN3",
	"IsOrderServiceDropShipProduct": "null",
	"IsOrderServiceShippingProduct": "null",
	"ListPrice": "449.95",
	"OriginalUnitPrice": "25",
	"Priority": "1",
	"ProductCouponDiscount": "0",
	"ProductIdentifier": "ASHCSA000120",
	"ProductName": "Samsung Galaxy Rugby LTE",
	"Quantity": "1",
	"Refund": "0",
	"RegionName": "London",
	"RetailerCatalogID": "null",
	"SaleInvoice_RowID": "8c6537ae-75a5-4155-82b2-c8647ed05f3d",
	"SaleInvoiceID": "128962",
	"SaleInvoiceProduct_RowID": "0099b78f-ba02-4a91-afd4-2f7eb0fbbb06",
	"SerialNumber": "1111111",
	"SoldAsUsed": "false",
	"SpecialProductID": "0",
	"StoreInStoreFlowIsEnabledForStore": "false",
	"StoreInStoreGrossProfit": "null",
	"StoreInStoreListPrice": "null",
	"StoreInStorePrice": "null",
	"StoreTypeName": "Costco",
	"TenderedBy": "iQmetrix User",
	"TenderedBy_EmployeeID": "277",
	"TotalCost": "0",
	"TotalDiscount": "424.95",
	"TotalPrice": "25",
	"UnitCost": "0",
	"UnitPrice": "25",
	"VendorName": "",
	"VendorSKU": ""
}
```

| Name | Description |
|:-----|:------------|
| Activation_RowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| AdjustedUnitPrice (`MONEY`) | Adjusted Unit Price - price that the product was actually sold for | 
| BillingAccountNumber (`NVARCHAR(MAX)`) | BAN -  if your company uses BAN you will enter it in the Customer profile and it will show here | 
| CarrierPrice (`MONEY`) | Carrier Price - value or revenue that a carrier assigns this feature | 
| CategoryPath (`NVARCHAR(MAX)`) | Category - the category the product belongs to | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the rows location | 
| Comments (`TEXT`) | Invoice Comments - comments added to the invoice | 
| ContractNumber (`VARCHAR (50)`) | Contract # - number of the contract, recorded at the time of sale | 
| CustomerID (`INT`) | Internal identifier for a customer in RQ | 
| CustomerName (`VARCHAR (101)`) | Customer - name of the customer as entered on their profile | 
| DateCreated (`DateTime`) | Sold On - date and time the invoice was tendered | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the rows location | 
| EmployeeName (`VARCHAR (51)`) | Sold By - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | 
| EmployeeID (`INT`) | Internal identifier for an employee in RQ | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| InvoicedAt (`NVARCHAR(MAX)`) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | 
| InvoicedAt_StoreID (`INT`) | Internal identifier for a store in RQ | 
| InvoicedBy (`NVARCHAR(MAX)`) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | 
| InvoicedBy_StoreID (`INT`) | Internal identifier for a store in RQ | 
| InvoiceIDByStore (`VARCHAR (14)`) | Invoice # - invoice number assigned by RQ | 
| IsOrderServiceDropShipProduct (`BIT`) | Internal identifier in RQ | 
| IsOrderServiceShippingProduct (`BIT`) | Internal identifier in RQ | 
| ListPrice (`MONEY`) | List Price - current price as noted on the pricing tab in the inventory console for the product | 
| OriginalUnitPrice (`MONEY`) | Orig. Unit Price - original price on the invoice | 
| Priority (`INT`) | The order that the products were saved in on an Invoice | 
| ProductCouponDiscount (`MONEY`) | Coupon discount on the product | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - the RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| Quantity (`INT`) | Qty - total number of times the Product SKU appears on the invoice | 
| Refund (`BIT`) | Refund - indicates if a negative quantity of this item was sold | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the rows location | 
| RetailerCatalogID (`VARCHAR (50)`) | Internal identifier in RQ | 
| SaleInvoice_RowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| SaleInvoiceProduct_RowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| SerialNumber (`VARCHAR (100)`) | Tracking # - tracking number associated with this product, serialized products only | 
| SoldAsUsed (`BIT`) | Sold As Used - indicates the product was used when sold | 
| SpecialProductID (`INT`) | Acceptable values include 0 for Regular Product, 1 for Vendor Rebate, 2 for Non-Stocked Product, 3 for Gift Card, 4 for Non Revenue Product | 
| StoreInStoreFlowIsEnabledForStore (`BIT`) | Internal identifier in RQ | 
| StoreInStoreGrossProfit (`MONEY`) | SIS Gross Profit - profit, calculated as Total Sales - Cost for a SIS location. | 
| StoreInStoreListPrice (`MONEY`) | SIS List Price - Price from the store-in-store setup of the product | 
| StoreInStorePrice (`MONEY`) | SIS Price - The default price when sold through the store-in-store flow | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - the location type the the transaction was performed at | 
| TenderedBy (`VARCHAR (51)`) | Tendered By - name of the employee logged into RQ when the invoice was tendered | 
| TenderedBy_EmployeeID (`INT`) | Internal identifier for an employee in RQ | 
| TotalCost (`MONEY`) | Total Cost - total purchase cost for the product(s) on the invoice | 
| TotalDiscount (`DECIMAL (8, 4)`) | Total Discount - net discount amount for the Product SKU on the particular invoice | 
| TotalPrice (`MONEY`) | Total Sales - net dollar amount for the Product SKU on the particular invoice | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit | 
| UnitPrice (`MONEY`) | Sold For - price that appeared on the invoice (including hide on invoice items), i.e. negative if a refund | 
| VendorName (`NVARCHAR(MAX)`) | Name for a vendor in RQ | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU | 


## ProductDetailReportTaxColumnData

```json
{
	"ColName": "T102",
	"ColCaption": "Flat tax",
	"CreditCardPaymentType": "null"
}
```

| Name | Description |
|:-----|:------------|
| ColName (`VARCHAR`) | Tax name | 
| ColCaption (`NVARCHAR(MAX)`) | Description | 
| CreditCardPaymentType (`VARCHAR (20)`) | Credit card information | 


## ProductDetailReportTaxDetailData

```json
{
	"Amount": "22.5",
	"GlobalProductID": "5179",
	"Priority": "1",
	"SaleInvoiceID": "128996",
	"SerialNumber": "2222222",
	"TaxID": "T102",
	"TaxName": "Brad flat tax"
}
```

| Name | Description |
|:-----|:------------|
| Amount (`MONEY `) | Amount | 
| GlobalProductID (`INT`) | Identifier of a Product in RQ | 
| Priority (`INT`) | Priority | 
| SaleInvoiceID (`INT`) | Identifier of a sale invoice in RQ | 
| SerialNumber (`VARCHAR (100) `) | Serial number | 
| TaxID (`VARCHAR`) | Tax identifier | 
| TaxName (`NVARCHAR(MAX)`) | Tax name | 


## ProductFinancingReportData

```json
{
	"ProductSKU": "ASHCSA000120",
	"ProductName": "Samsung Galaxy Rugby LTE",
	"SaleInvoiceID": "128903",
	"InvoiceNumber": "84WEAIN14417",
	"Date": "2016-05-09T08:46:40.657",
	"EmployeeName": "iQmetrix Employee",
	"EmployeeID": "221",
	"CustomerID": "115326",
	"CustomerName": "Bob Smith",
	"LocationID": "1",
	"LocationName": "84 West",
	"TrackingNumber": "123440",
	"PhoneNumber": "0123465980",
	"Term": "1 Year UPGRADE",
	"Price": "25",
	"Cost": "449.95",
	"ProgramName": "Any Levels",
	"RequiredDownPayment": "5",
	"RequiredDownPaymentPercent": "10",
	"AdditionalDownPayment": "20",
	"TotalDownPayment": "25",
	"FinancedAmountSKU": "",
	"FinancedAmount": "25",
	"RebateSKU": "ACFNRB000002",
	"RebateAmount": "25",
	"VendorFeeSKU": "ACFNRB000007",
	"VendorFeeAmount": "5",
	"StoreFeeSKU": "ACFNNS000003",
	"StoreFeeAmount": "5",
	"OriginalSaleInvoiceID": "128962"
}
```

| Name | Description |
|:-----|:------------|
| ProductSKU (`VARCHAR(12)`) | Product SKU - product SKU that was financed | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name associated to the product SKU | 
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| InvoiceNumber (`VARCHAR(14)`) | Invoice # - invoice number of the sale that involved the product represented in the row | 
| Date (`DateTime`) | Date - the date and time the invoice was tendered | 
| EmployeeName (`VARCHAR(51)`) | Employee - first/last name of the employee who tendered the invoice | 
| EmployeeID (`INT`) | Identifier for an employee in RQ | 
| CustomerID (`INT`) | Identifier for a customer in RQ | 
| CustomerName (`VARCHAR(151)`) | Customer - first/last name (or Company) of the primary customer associated to the invoice | 
| LocationID (`INT`) | Identifier of a store in RQ | 
| LocationName (`NVARCHAR(MAX)`) | Location - location name where the invoice was tendered | 
| TrackingNumber (`VARCHAR(100)`) | Tracking # - tracking number of the device (IMEI) | 
| PhoneNumber (`VARCHAR(30)`) | Phone # - phone number entered in PAW | 
| Term (`NVARCHAR(MAX)`) | Term - term name selected in PAW | 
| Price (`MONEY`) | Price - total price of the product - the PAW price | 
| Cost (`MONEY`) | Cost - total cost of the product | 
| ProgramName (`NVARCHAR(MAX)`) | Program Name - name of the financing program selected | 
| RequiredDownPayment (`DECIMAL`) | Required Down Payment - amount of the down payment given that was required. This column will always have a value. | 
| RequiredDownPaymentPercent (`DECIMAL`) | Required Down Payment % - required down payment expressed as a percentage | 
| AdditionalDownPayment (`DECIMAL`) | Additional Down Payment - optional down payment amount added by the customer. This column is optional. | 
| TotalDownPayment (`DECIMAL`) | Total Down Payment - total of the required + additional down payments | 
| FinancedAmountSKU (`VARCHAR(12)`) | Financed amount SKU | 
| FinancedAmount (`DECIMAL`) | Financed Amount - phone price column minus the total down payment | 
| RebateSKU (`VARCHAR(12)`) | Rebate SKU - financing rebate SKU that was added to the sale. This is associated based on the Financing Rebate SKU value in the program setup. | 
| RebateAmount (`MONEY`) | 10 | 
| VendorFeeSKU (`VARCHAR(12)`) | Vendor Fee SKU - vendor fee SKU that is associated to the financing program used in the transaction. This value may be null. | 
| VendorFeeAmount (`MONEY`) | Vendor Fee Amount - dollar amount of the vendor fee charged on the sale which was represented by the vendor fee SKU. This value may be null. | 
| StoreFeeSKU (`VARCHAR(12)`) | Financing Fee SKU - financing fee SKU that is associated to the financing program used in the transaction. This value may be null. | 
| StoreFeeAmount (`MONEY`) | Financing Fee Amount - dollar amount of the financing fee charged on the sale which was represented by the financing fee SKU. This value may be null. | 
| OriginalSaleInvoiceID (`INT`) | Internal identifier in RQ | 


## ProductSummaryReportData

```json
{
	"ProductIdentifier": "AAATAP000094",
	"SpecialProductID": "0",
	"ProductName": "Apple iPhone 6 Plus 16GB White - AT&T",
	"TotalInvoiced": "949.98",
	"Adjustment": "0",
	"ExtendedUnitPrice": "949.98",
	"ExtendedUnitCost": "0",
	"ExtendedUnitProfit": "949.98",
	"PercentProfit": "100",
	"QuantitySold": "2",
	"QuantityRefunded": "0",
	"NetQuantity": "2",
	"ManufacturerPartNumber": "1234567890-pl",
	"VendorPartNumber": "10999",
	"BarCode": "738516343990"
}
```

| Name | Description |
|:-----|:------------|
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| SpecialProductID (`INT`) | Acceptable values include 0 for Regular Product, 1 for Vendor Rebate, 2 for Non-Stocked Product, 3 for Gift Card, 4 for Non Revenue Product | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| TotalInvoiced (`MONEY`) | Total Invoiced - net dollar amount of this product SKU invoiced | 
| Adjustment (`MONEY`) | Adjustment - net dollar amount of any adjustments for this product SKU | 
| ExtendedUnitPrice (`MONEY`) | Avg Sales Price - calculates as Total Sales / Net Quantity | 
| ExtendedUnitCost (`MONEY`) | Cost - purchase cost of the product SKU | 
| ExtendedUnitProfit (`MONEY`) | Gross Profit - profit calculated as Sales - Cost | 
| PercentProfit (`MONEY`) | % Profit - profit expressed as a percentage | 
| QuantitySold (`INT`) | Qty Sold - total quantity of the product SKU sold before refunds | 
| QuantityRefunded (`INT`) | Qty Ref - total quantity of the product SKU refunded | 
| NetQuantity (`INT`) | Net Qty - net quantity sold, calculated as Qty Sold minus Qty Refunded | 
| ManufacturerPartNumber (`VARCHAR(50)`) | Manufacturer SKU - SKU assigned by the manufacturer | 
| VendorPartNumber (`VARCHAR(25)`) | Vendor SKU - SKU assigned by the vendor | 
| BarCode (`NVARCHAR(MAX)`) | Bar Code - any bar code(s) you have assigned to this product | 


## RefundSummaryReportData

```json
{
	"SaleInvoiceID": "128962",
	"OriginalSaleInvoiceID": "-1",
	"StoreInStoreFlowIsEnabledForAtLeastOneStore": "0",
	"OriginalDateCreated": "2015-07-14T13:42:43.98",
	"DateCreated": "2016-05-13T12:18:08.723",
	"InvoicedAt": "84 West",
	"InvoicedBy": "84 West",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"TenderedBy": "Chad Tester",
	"TenderedByUsername": "Chad.Tester",
	"SalesPersonName": "Chad Tester",
	"SalesPersonUsername": "Chad.Tester",
	"InvoiceIDByStore": "84WEAIN5995",
	"CustomerName": "BOBCAT PRESSURE CONTROL INC",
	"CustomerID": "110437",
	"CustomerAddress": "442 Athabasca st w",
	"CustomerCity": "Regina",
	"CustomerProvinceOrState": "PR",
	"CustomerPostalOrZipCode": "h0h0h0",
	"CustomerCountry": "USA",
	"OriginalInvoiceIDByStore": "84WEAIN10368",
	"NetSale": "420",
	"AmountRefunded": "0",
	"SISAmountRefunded": "0",
	"AmountSold": "420",
	"TotalAfterTax": "0",
	"TotalCoupon": "0",
	"TotalCouponTax": "0",
	"RefundCode": "",
	"Comments": "Invoice Editor Adjustment for 84WEAIN10368",
	"InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
	"OriginalInvoiceRowID": "f30bb5bd-0813-dc2a-1844-41ca87795e17",
	"ProductRowID": "dd27caa4-274f-b5b2-c94c-78a4e5d93a6e"
}
```

| Name | Description |
|:-----|:------------|
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| OriginalSaleInvoiceID (`INT`) | Internal identifier in RQ | 
| StoreInStoreFlowIsEnabledForAtLeastOneStore (`INT`) | A flag to indicate if Store in Store Flow is enabled for at least one store (1) or not (0) | 
| OriginalDateCreated (`DateTime`) | Original Invoice Created On - Date and time the original invoice was created | 
| DateCreated (`DateTime`) | Refund Invoice Created On - Date and time the refund invoice was created | 
| InvoicedAt (`NVARCHAR(MAX)`) | Invoiced At - location which tendered the refund | 
| InvoicedBy (`NVARCHAR(MAX)`) | Invoiced By - location which tendered the original invoice | 
| DistrictName (`NVARCHAR(MAX)`) | district for the rows location | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the rows location | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the rows location | 
| TenderedBy (`VARCHAR(51)`) | Tendered By - name of the employee logged into RQ when the invoice was tendered | 
| TenderedByUsername (`VARCHAR(51)`) | Tendered By Username - username of the employee logged into RQ when the invoice was tendered | 
| SalesPersonName (`VARCHAR(51)`) | Sales Person - employee that is the primary commissioned sales person | 
| SalesPersonUsername (`VARCHAR(51)`) | Sales Person Username - username of the employee that is the primary commissioned sales person | 
| InvoiceIDByStore (`VARCHAR(14)`) | Refund Invoice Created On - date and time the refund invoice was created | 
| CustomerName (`VARCHAR(151)`) | Customer - name of the customer as entered on their profile | 
| CustomerID (`INT`) | Internal identifier for a customer in RQ | 
| CustomerAddress (`VARCHAR(50)`) | Address - first line of the customers address | 
| CustomerCity (`VARCHAR(50)`) | City - customers city | 
| CustomerProvinceOrState (`VARCHAR(50)`) | State/Prov - customers state or province | 
| CustomerPostalOrZipCode (`VARCHAR(15)`) | Zip/Postal Code - customers zip or postal code | 
| CustomerCountry (`VARCHAR(50)`) | Country - customers country | 
| OriginalInvoiceIDByStore (`VARCHAR(14)`) | Original Invoice # - invoice number assigned by RQ to the original sale | 
| NetSale (`MONEY`) | Net Sale - net dollar amount of the refund | 
| AmountRefunded (`MONEY`) | Amount Refunded - dollar amount refunded (including Vendor Rebates) | 
| SISAmountRefunded (`MONEY`) | This value may be null | 
| AmountSold (`MONEY`) | Amount Sold- dollar amount of the refund | 
| TotalAfterTax (`MONEY`) | Total Invoice - net dollar amount of the refund invoice | 
| TotalCoupon (`MONEY`) | Coupon - the value of any coupons | 
| TotalCouponTax (`MONEY`) | Coupon Taxes - the value for any taxed coupons | 
| RefundCode (`NVARCHAR(MAX)`) | Refund Code - code entered at the time of the refund | 
| Comments (`VARCHAR(500)`) | Invoice Comments - any comments added to the invoice | 
| InvoiceRowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| OriginalInvoiceRowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| ProductRowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 


## SalesByCategoryReportData

```json
{
	"CategoryNumber": "10101010",
	"CategoryPath": "Activations",
	"TotalInvoiced": "1",
	"Adjustment": "52.6",
	"TotalPrice": "265.62",
	"TotalCost": "363",
	"TotalProfit": "23",
	"TotalDiscount": "64",
	"PercentProfit": "20",
	"QuantitySold": "2",
	"QuantityRefunded": "1",
	"NetQuantity": "2",
	"InvoicedAtDifferentLocation": "0"
}
```

| Name | Description |
|:-----|:------------|
| CategoryNumber (`VARCHAR(100)`) | Identifier for a Category in RQ | 
| CategoryPath (`NVARCHAR(MAX)`) | Category - inventory category | 
| TotalInvoiced (`MONEY`) | Total Invoiced - net dollar amount invoiced in this category | 
| Adjustment (`MONEY`) | Adjustment - total dollar amount of any adjustments in this category | 
| TotalPrice (`MONEY`) | Sales - total of sales for this category | 
| TotalCost (`MONEY`) | Cost - total purchase cost for each individual product sold in the category | 
| TotalProfit (`MONEY`) | Gross Profit - gross profit calculated as Sales - Cost | 
| TotalDiscount (`MONEY`) | Discount - net dollar amount of discounts in this category | 
| PercentProfit (`MONEY`) | % Profit - profit displayed as a percentage | 
| QuantitySold (`INT`) | Qty Sold - total sold before refunds | 
| QuantityRefunded (`INT`) | Qty Ref - total refunded | 
| NetQuantity (`INT`) | Net Qty - net quantity sold, calculated by Qty Sold minus Qty Refunded | 
| InvoicedAtDifferentLocation (`INT`) | Value invoiced at a different location | 


## SalesByCustomerReportData

```json
{
	"CustomerID": "57818",
	"CustomerName": "Ann Fox",
	"Customer_CompanyName": "KENTEL",
	"Customer_LastName": "Ann Fox",
	"CustomerAddress": "8105 Blanche Dr",
	"CustomerCity": "Panama City",
	"CustomerProvinceOrState": "FL",
	"CustomerCountry": "United States",
	"CustomerPostalCode": "32404",
	"CustomInteger1": "12",
	"CustomInteger2": "1",
	"CustomDate1": "2016-01-01T00:00:00",
	"CustomDate2": "2016-01-01T00:00:00",
	"CustomText1": "March",
	"CustomText2": "Orange",
	"CompanySize": "200",
	"CustomDropDown1": "2112",
	"CustomDropDown2": "Orange",
	"CustomDropDown3": "Three",
	"CustomDropDown4": "Ph.D",
	"CustomDropDown5": "Enabled",
	"TotalInvoiced": "1210.02",
	"Adjustment": "0",
	"TotalPrice": "1185.01",
	"TotalCost": "18.01",
	"TotalCoupon": "0",
	"TotalCouponTax": "0",
	"TotalProfit": "1167",
	"TotalDiscount": "-784.01",
	"PercentProfit": "98.48",
	"QuantitySold": "18",
	"QuantityRefunded": "-6",
	"NetQuantity": "12",
	"InvoicedAtDifferentLocation": "0",
	"CustomerIdentifier": "C10KNRVY",
	"BillingAccountNumber": "5555555555",
	"FinancedAmount": "0",
	"TotalDownPayment": "0",
	"TypeOfCustomer": "3"
}
```

| Name | Description |
|:-----|:------------|
| CustomerID (`INT`) | Identifier for a customer in RQ | 
| CustomerName (`VARCHAR(151)`) | Customer - name of the customer as entered on their profile | 
| Customer_CompanyName (`VARCHAR(50)`) | Company name | 
| Customer_LastName (`VARCHAR(50)`) | Customer last name | 
| CustomerAddress (`VARCHAR(101)`) | Address - column will contain the contents of the Address and Address 2 fields in the Customer profile (new in 5.17) | 
| CustomerCity (`VARCHAR(50)`) | City - name of the city entered on the customers profile | 
| CustomerProvinceOrState (`VARCHAR(50)`) | State/Province - state or province selected from the drop down list on the customer's profile | 
| CustomerCountry (`VARCHAR(50)`) | Country - name of the country entered on the customers profile | 
| CustomerPostalCode (`VARCHAR(15)`) | ZIP/Postal Code - zip or postal code as entered on the customers profile | 
| CustomInteger1 (`VARCHAR(20)`) | Custom value | 
| CustomInteger2 (`VARCHAR(20)`) | Custom value | 
| CustomDate1 (`DateTime`) | Custom value | 
| CustomDate2 (`DateTime`) | Custom value | 
| CustomText1 (`VARCHAR(150)`) | Custom value | 
| CustomText2 (`VARCHAR(150)`) | Custom value | 
| CompanySize (`NVARCHAR(MAX)`) | Company Size - a Category Field which may or not be enabled on your database | 
| CustomDropDown1 (`NVARCHAR(MAX)`) | Custom value | 
| CustomDropDown2 (`NVARCHAR(MAX)`) | Custom value | 
| CustomDropDown3 (`NVARCHAR(MAX)`) | Custom value | 
| CustomDropDown4 (`NVARCHAR(MAX)`) | Custom value | 
| CustomDropDown5 (`NVARCHAR(MAX)`) | Custom value | 
| TotalInvoiced (`MONEY`) | Total Invoiced - net dollar amount for this category, and sub-categories, or this specific product sold to this customer within the report criteria | 
| Adjustment (`MONEY`) | Adjustment - net dollar amount of any adjustments for this customer in this category or for this product | 
| TotalPrice (`MONEY`) | Sales - total dollar amount for this category, and sub-categories, or this specific product sold to this customer for the report criteria after any adjustment(s) | 
| TotalCost (`MONEY`) | Cost - total inventory cost for the products sold to this customer within the report criteria | 
| TotalCoupon (`MONEY`) | Coupon - dollar amount of coupons used on sale | 
| TotalCouponTax (`MONEY`) | Coupon Taxes - dollar amount of taxes applied to the coupon | 
| TotalProfit (`MONEY`) | Gross Profit - total gross profit, calculated as Sales - Cost | 
| TotalDiscount (`MONEY`) | Total Discount - total dollar amount of discount(s) applied to the customers invoices within the report criteria | 
| PercentProfit (`MONEY`) | % Profit - gross profit displayed as a percentage | 
| QuantitySold (`INT`) | Qty Sold - total number of products from this category, and sub-categories, or number of this specific product sold to this customer within the report criteria | 
| QuantityRefunded (`INT`) | Qty Ref - total number of products from this category, and sub-categories, or number of this specific product refunded from this customer within the report criteria | 
| NetQuantity (`INT`) | Net Qty - net total number of products from this category, and sub-categories, or number of this specific product sold to this customer within the report criteria | 
| InvoicedAtDifferentLocation (`INT`) | Amount invoices at a different location | 
| CustomerIdentifier (`VARCHAR(25)`) | Customer Identifier - customer identifier as entered on the customers profile | 
| BillingAccountNumber (`NVARCHAR(MAX)`) | BAN - contract number from a carrier and not editable | 
| FinancedAmount (`DECIMAL`) | Financed amount | 
| TotalDownPayment (`DECIMAL`) | Total down payment | 
| TypeOfCustomer (`INT`) | Type of Customer - column will display the customer type - Company, Division, Group, Individual (new in 5.17) | 


## SalesByEmployeeReportData

```json
{
	"EmployeeID": "256",
	"EmployeeName": "iQmetrix Employee",
	"EmployeeSpecialIdentifier": "912345987654321",
	"StoreInStoreFlowIsEnabledForAtLeastOneStore": "0",
	"QtySold": "50",
	"QtyRefunded": "0",
	"NetQty": "50",
	"TotalInvoiced": "1825.74",
	"Adjustment": "0",
	"TotalSales": "1825.74",
	"TotalStoreInStoreSales": "0",
	"RoundingVariance": "0.26",
	"TotalCost": "284.33",
	"TotalCoupon": "5",
	"TotalCouponTax": "0",
	"TotalProfit": "1536.41",
	"TotalStoreInStoreProfit": "0",
	"TotalCommission": "0",
	"EmployeeUsername": "iQmetrix.Employee"
}
```

| Name | Description |
|:-----|:------------|
| EmployeeID (`INT`) | ID # - Employee ID number (assigned when hired; this is usually from a Payroll system) | 
| EmployeeName (`VARCHAR(51)`) | Employee - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box on the Accept Payment screen | 
| EmployeeSpecialIdentifier (`VARCHAR(25)`) | Internal identifier in RQ | 
| StoreInStoreFlowIsEnabledForAtLeastOneStore (`INT`) | A flag to indicate if Store in Store Flow is enabled for at least one store (1) or not (0) | 
| QtySold (`BIGINT`) | Qty Sold - total number of products sold | 
| QtyRefunded (`BIGINT`) | Qty Ref - total number of products refunded | 
| NetQty (`INT`) | Net Qty - net total number of products | 
| TotalInvoiced (`MONEY`) | Total Invoiced - total dollar value of all invoiced products | 
| Adjustment (`MONEY`) | Adjustment - the net dollar amount of any adjustments for this day | 
| TotalSales (`MONEY`) | Sales - total dollar value of all sales | 
| TotalStoreInStoreSales (`MONEY`) | Total store in store sales | 
| RoundingVariance (`MONEY`) | Rounding Variance - total dollar value of the rounding variance [may not appear in your database] | 
| TotalCost (`MONEY`) | Cost - total purchase cost for all products sold that day | 
| TotalCoupon (`MONEY`) | Coupon - value of any coupons. The Coupon column will only appear when the user runs the report with All Categories or does not select any product in the product picker when running by This Product. | 
| TotalCouponTax (`MONEY`) | Coupon Taxes - the value for any taxed coupons | 
| TotalProfit (`MONEY`) | Gross Profit - gross profit, calculated as Sales - Cost | 
| TotalStoreInStoreProfit (`MONEY`) | Total store in store profit | 
| TotalCommission (`MONEY`) | Commission - total dollar amount of commission calculated for the employee           | 
| EmployeeUsername (`VARCHAR(51)`) | Username - username of the employee of record for the sale, i.e. the employee whose name is in the Commission box on the Accept Payment screen | 


## SalesByInvoiceReportData

```json
{
	"Adjustment": "0",
	"ChannelName": "English Channel",
	"Comments": "Comment",
	"CustomerID": "131149",
	"CustomerName": "Bob Jones",
	"DateCreated": "2016-05-13T12:18:08.723",
	"DistrictName": "Westminster",
	"Earned": "null",
	"FinancedAmount": "75",
	"InvoiceEmailed": "0",
	"InvoiceIDByStore": "REDSTIN916",
	"Redeemed": "null",
	"RefundCodeID": "null",
	"RegionName": "London",
	"RoundingVariance": "0",
	"SaleInvoiceID": "129036",
	"SoldBy": "iQmetrix User",
	"SoldByUserName": "iQmetrix.User",
	"StoreID": "1",
	"StoreInStoreFlowIsEnabledForStore": "false",
	"StoreName": "100: My Network LLC - Anchorage",
	"StoreName2": "100: My Network LLC - Anchorage",
	"TenderedBy": "iQmetrix User",
	"TenderedByUserName": "iQmetrix.User",
	"TotalAfterTax": "26",
	"TotalCost": "0",
	"TotalCoupon": "0",
	"TotalDonations": "0",
	"TotalDownPayment": "25",
	"TotalExtraCharges": "0",
	"TotalGiftCard": "0",
	"TotalInvoiced": "26",
	"TotalNRP": "0",
	"TotalProfit": "164",
	"TotalSales": "164",
	"TotalStoreInStoreProfit": "0",
	"TotalStoreInStoreSales": "0"
}
```

| Name | Description |
|:-----|:------------|
| Adjustment (`INT`) | Adjustment - total dollar value of any adjustments | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the rows location | 
| Comments (`VARCHAR (1000)`) | Invoice Comments - any comments added to the invoice | 
| CustomerID (`INT`) | Internal identifier for a customer in RQ | 
| CustomerName (`VARCHAR (101)`) | Customer - name of the customer as entered on their profile; if this is a Quick Sale that will be the name of the customer | 
| DateCreated (`DateTime`) | Created On - date and time the invoice was created | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the rows location | 
| Earned (`MONEY`) | Internal identifier in RQ | 
| FinancedAmount (`MONEY`) | Invoice Amount - formally known as Total Invoice - this shows the actual amount paid by the customer including coupons, gift cards, donations and taxes | 
| InvoiceEmailed (`BIT`) | Emailed - indicates that the invoice was emailed | 
| InvoiceIDByStore (`VARCHAR (14)`) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | 
| Redeemed (`BIT`) | Ven Reb Act - net dollar amount of vendor rebates for the invoice and the taxes associated to the rebate | 
| RefundCodeID (`UNIQUEIDENTIFIER`) | Invoice # - invoice number assigned by RQ | 
| RegionName (`NVARCHAR (MAX)`) | Region - region for the rows location | 
| RoundingVariance (`MONEY`) | Rounding Variance - total dollar value of the rounding variance [may not be present in every database] | 
| SaleInvoiceID (`INT`) | Invoice # - invoice number assigned by RQ | 
| SoldBy (`NVARCHAR (51)`) | Sold By Username - username of the employee of record for the sale, i.e. the employee whose name is in the Commission box | 
| SoldByUserName (`NVARCHAR (MAX)`) | Sold By - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | 
| StoreID (`INT`) | Internal identifier for a store in RQ | 
| StoreInStoreFlowIsEnabledForStore (`BIT`) | Internal identifier in RQ | 
| StoreName (`NVARCHAR (MAX)`) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | 
| StoreName2 (`NVARCHAR (MAX)`) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | 
| TenderedBy (`VARCHAR (51)`) | Tendered By Username - username of the employee logged into RQ when the invoice was taken | 
| TenderedByUserName (`NVARCHAR (MAX)`) | Tendered By - name of the employee logged into RQ when the invoice was taken | 
| TotalAfterTax (`MONEY`) | Total after tax | 
| TotalCost (`MONEY`) | Cost - total purchase cost of the products on the invoice | 
| TotalCoupon (`MONEY`) | Coupon Used - the sum of the coupons applied to the invoice. | 
| TotalDonations (`MONEY`) | Donations - total dollar value of the donation | 
| TotalDownPayment (`MONEY`) | Total invoiced - Financed amount = TotalDownpayment | 
| TotalExtraCharges (`MONEY`) | Extra Charges - total dollar value of any extra charges added to the invoice | 
| TotalGiftCard (`MONEY`) | Gift Card Sold - if a gift card was purchased, this is the value of the gift card. | 
| TotalInvoiced (`MONEY`) | Invoice Subtotal - formally known as Total Invoiced - this represents the invoice subtotal which would include gift cards and extra charges. Coupons and Vendor Rebates are removed from this amount. | 
| TotalNRP (`MONEY`) | NRP sold - value of any Non Revenue Products sold | 
| TotalProfit (`MONEY`) | Gross Profit - total dollar value of profit, calculated as Sales - Cost | 
| TotalSales (`MONEY`) | Sales - total dollar amount of the invoice after adjustments | 
| TotalStoreInStoreProfit (`MONEY`) | Internal identifier in RQ | 
| TotalStoreInStoreSales (`MONEY`) | Ven Reb Act - net dollar amount of vendor rebates for the invoice and the taxes associated to the rebate | 


## SalesByLocationReportData

```json
{
	"StoreID": "1",
	"StoreTypeName": "Retail Store",
	"StoreName": "84 West",
	"Date": "1",
	"DateName": "2016-01-01T00:00:00",
	"StoreInStoreFlowIsEnabledForStore": "false",
	"QtySold": "283",
	"QtyRefunded": "-23",
	"NetQty": "260",
	"TotalInvoiced": "17738.1",
	"Adjustment": "0",
	"Net": "16293.58",
	"StoreInStoreNet": "0",
	"Cost": "90004818.51",
	"Coupon": "77.48",
	"CouponTax": "1",
	"Profit": "-89988524.93",
	"StoreInStoreGrossProfit": "0",
	"RegionName": "Region A",
	"DistrictName": "Valley Area District",
	"ChannelName": "Regina Channel",
	"RoundingVariance": "0.6"
}
```

| Name | Description |
|:-----|:------------|
| StoreID (`INT`) | Identifier for a store in RQ | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - location type the the transaction was performed at | 
| StoreName (`NVARCHAR(MAX)`) | Location - name of the location being displayed | 
| Date (`INT`) | Date | 
| DateName (`DateTime`) | Date value | 
| StoreInStoreFlowIsEnabledForStore (`BIT`) | A flag to indicate if SIS is enabled | 
| QtySold (`INT`) | Qty Sold - total number of products, as selected in search criteria, sold | 
| QtyRefunded (`INT`) | Qty Ref - total number of products, as selected in search criteria, refunded | 
| NetQty (`INT`) | Net Qty - total net quantity of products, as selected in search criteria, sold | 
| TotalInvoiced (`MONEY`) | Total Invoiced - net dollar amount invoiced in the search criteria | 
| Adjustment (`MONEY`) | Adjustment - net dollar amount of any Vendor Rebate Product (VRP) | 
| Net (`MONEY`) | Sales - total dollar value of all products in the search criteria after adjustments are applied | 
| StoreInStoreNet (`MONEY`) | Store in store net | 
| Cost (`MONEY`) | Cost - purchase cost of all products in the search criteria | 
| Coupon (`MONEY`) | Coupon - dollar amount of coupons used | 
| CouponTax (`MONEY`) | Coupon Taxes - amount in dollars of coupon taxes on sales | 
| Profit (`MONEY`) | Gross Profit - profit, calculated as Sales - Cost | 
| StoreInStoreGrossProfit (`MONEY`) | Store in store profit | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the rows location | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the rows location | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the rows location | 
| RoundingVariance (`MONEY`) | Rounding Variance - Canadian clients dealing with the deletion of the penny, see Penny Rounding for more detail | 


## SalesForecastReportData

```json
{
	"CategoryName": "@ Activations (Price Sheets)",
	"QtyThisMonth": "10",
	"NetThisMonth": "19.65",
	"ProfitThisMonth": "9.64",
	"QtyThisMonthLastYear": "15",
	"NetThisMonthLastYear": "40.5",
	"ProfitThisMonthLastYear": "10.12",
	"QtyThisYear": "150",
	"NetThisYear": "476.5",
	"ProfitThisYear": "456.25",
	"QtyLastYear": "160",
	"NetLastYear": "4579.54",
	"ProfitLastYear": "4876.57",
	"OrderBy": "0"
}
```

| Name | Description |
|:-----|:------------|
| CategoryName (`NVARCHAR(MAX)`) | Category - name of the category directly below the category selected | 
| QtyThisMonth (`INT`) | Quantity Month To Date - net total number of products sold month to date | 
| NetThisMonth (`MONEY`) | Sales Month To Date - net dollar amount of sales month to date | 
| ProfitThisMonth (`MONEY`) | Gross Profit Month To Date - gross profit month to date | 
| QtyThisMonthLastYear (`INT`) | Quantity MTD Last Year - net total number of products sold month to date for last year at the same point | 
| NetThisMonthLastYear (`MONEY`) | Sales MTD Last Year - net dollar amount of sales month to date for last year at the same point | 
| ProfitThisMonthLastYear (`MONEY`) | Gross Profit MTD Last Year - gross profit month to date for last year at the same point | 
| QtyThisYear (`INT`) | Quantity Year To Date - net total number of products sold year to date | 
| NetThisYear (`MONEY`) | Sales Year To Date - net dollar amount of sales year to date | 
| ProfitThisYear (`MONEY`) | Gross Profit Year To Date - gross profit year to date | 
| QtyLastYear (`INT`) | Quantity Last Year To Date - net total number of products sold year to date for last year at the same point | 
| NetLastYear (`MONEY`) | Sales Last Year To Date - net dollar amount of sales year to date for last year at the same point | 
| ProfitLastYear (`MONEY`) | Gross Profit Last Year To Date - gross profit year to date for last year at the same point | 
| OrderBy (`INT`) | Sorting order | 


## SerializedCouponReportData

```json
{
	"CouponID": "1089",
	"Customer": "John Test",
	"CouponName": "RQ API FpP Serialized",
	"SerialNumber": "cpn00000",
	"Issued": "2015-06-04T10:18:38.403",
	"Percentage": "15",
	"Amount": "0",
	"CouponSKU": "COUPON001089"
}
```

| Name | Description |
|:-----|:------------|
| CouponID (`INT`) | Identifier for a coupon in RQ | 
| Customer (`VARCHAR(101)`) | Customer - customer name (will only show if assigned to the Customer using the Marketing List Report). If not, column will state imported serial number | 
| CouponName (`NVARCHAR(MAX)`) | Coupon Name - name of the coupon, i.e. Serialized $50 | 
| SerialNumber (`VARCHAR(50)`) | Serial Number - serial number of the coupon | 
| Issued (`DateTime`) | Issued - date coupon was issued | 
| Percentage (`VARCHAR(31)`) | Percentage - percentage of the discount of the invoice (will only have a value if the coupon is for a percentage of the invoice) | 
| Amount (`MONEY`) | Amount - total amount of the coupon (will only have a value if the coupon is for a specific value) | 
| CouponSKU (`VARCHAR(32)`) | Coupon SKU - the SKU attached to the coupon used to identify it | 






## Requests



<h3 id='getting-the-activation-gross-profit-report' class='clickable-header top-level-header'>Getting the Activation Gross Profit Report</h3>

For more information, see {{support_ActivationGrossProfitReport}}.


<h4>Request</h4>

<pre>
GET /reports/ActivationGrossProfitReport?StartDate={StartDate}&StopDate={StopDate}&StoreType={StoreType}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ReasonCode={ReasonCode}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#reasoncode'>ReasonCode</a>. Use -1 to specify All Reason Codes. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-reason-codes">Getting Reason Codes</a>
    </li>
    
    <li>
        <code>StoreType</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#storetype'>StoreType</a>. Use -1 to specify All Types. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-store-types">Getting Store Types</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-activation-gross-profit-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-activation-gross-profit-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-activation-gross-profit-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-activation-gross-profit-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-activation-gross-profit-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-activation-gross-profit-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-activation-gross-profit-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-activation-gross-profit-report">
<pre id="http-code-getting-the-activation-gross-profit-report"><code class="language-http">GET /reports/ActivationGrossProfitReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-activation-gross-profit-report">
<pre id="curl-code-getting-the-activation-gross-profit-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/ActivationGrossProfitReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-activation-gross-profit-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-activation-gross-profit-report"><code class="language-csharp">static IRestResponse GettingTheActivationGrossProfitReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/ActivationGrossProfitReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-activation-gross-profit-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-activation-gross-profit-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheActivationGrossProfitReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/ActivationGrossProfitReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-activation-gross-profit-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-activation-gross-profit-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/ActivationGrossProfitReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[activationgrossprofitreportdata](#ActivationGrossProfitReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-activation-gross-profit-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-activation-gross-profit-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-activation-gross-profit-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-activation-gross-profit-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-activation-gross-profit-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-activation-gross-profit-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-activation-gross-profit-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "InvoiceDate": "2016-10-12T09:16:24.63",
        "InvoiceID": 129920,
        "InvoiceIDByStore": "84WEAIN15624",
        "StoreTypeName": "Retail Store",
        "LocationName": "84 West",
        "Profit": 667.99,
        "CustomerID": 108560,
        "CustomerName": "AAA AND ASSOCIATES",
        "PhoneDescription": "Apple iPhone 6 Plus 16GB White - AT&T",
        "PhoneNumber": "3065014785",
        "TermDescription": "CRU 2 YR Business New Act",
        "RatePlanDescription": "2 YR CRU Business Legacy Plan $0.01 - $9.99",
        "VendorAccountName": "AT&T",
        "EmployeeName": "iQmetrix User",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-activation-gross-profit-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "InvoiceDate": "2016-10-12T09:16:24.63",
            "InvoiceID": 129920,
            "InvoiceIDByStore": "84WEAIN15624",
            "StoreTypeName": "Retail Store",
            "LocationName": "84 West",
            "Profit": 667.99,
            "CustomerID": 108560,
            "CustomerName": "AAA AND ASSOCIATES",
            "PhoneDescription": "Apple iPhone 6 Plus 16GB White - AT&T",
            "PhoneNumber": "3065014785",
            "TermDescription": "CRU 2 YR Business New Act",
            "RatePlanDescription": "2 YR CRU Business Legacy Plan $0.01 - $9.99",
            "VendorAccountName": "AT&T",
            "EmployeeName": "iQmetrix User",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceDate>2016-10-12T09:16:24.63</InvoiceDate>
    <InvoiceID>129920</InvoiceID>
    <InvoiceIDByStore>84WEAIN15624</InvoiceIDByStore>
    <StoreTypeName>Retail Store</StoreTypeName>
    <LocationName>84 West</LocationName>
    <Profit>667.99</Profit>
    <CustomerID>108560</CustomerID>
    <CustomerName>AAA AND ASSOCIATES</CustomerName>
    <PhoneDescription>Apple iPhone 6 Plus 16GB White - AT&T</PhoneDescription>
    <PhoneNumber>3065014785</PhoneNumber>
    <TermDescription>CRU 2 YR Business New Act</TermDescription>
    <RatePlanDescription>2 YR CRU Business Legacy Plan $0.01 - $9.99</RatePlanDescription>
    <VendorAccountName>AT&T</VendorAccountName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceDate>2016-10-12T09:16:24.63</InvoiceDate>
    <InvoiceID>129920</InvoiceID>
    <InvoiceIDByStore>84WEAIN15624</InvoiceIDByStore>
    <StoreTypeName>Retail Store</StoreTypeName>
    <LocationName>84 West</LocationName>
    <Profit>667.99</Profit>
    <CustomerID>108560</CustomerID>
    <CustomerName>AAA AND ASSOCIATES</CustomerName>
    <PhoneDescription>Apple iPhone 6 Plus 16GB White - AT&T</PhoneDescription>
    <PhoneNumber>3065014785</PhoneNumber>
    <TermDescription>CRU 2 YR Business New Act</TermDescription>
    <RatePlanDescription>2 YR CRU Business Legacy Plan $0.01 - $9.99</RatePlanDescription>
    <VendorAccountName>AT&T</VendorAccountName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>InvoiceDate,InvoiceID,InvoiceIDByStore,StoreTypeName,LocationName,Profit,CustomerID,CustomerName,PhoneDescription,PhoneNumber,TermDescription,RatePlanDescription,VendorAccountName,EmployeeName,DistrictName,RegionName,ChannelName
2016-10-12T09:16:24.63,129920,84WEAIN15624,Retail Store,84 West,667.99,108560,AAA AND ASSOCIATES,Apple iPhone 6 Plus 16GB White - AT&T,3065014785,CRU 2 YR Business New Act,2 YR CRU Business Legacy Plan $0.01 - $9.99,AT&T,iQmetrix User,Valley Area District,Region A,Regina Channel</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-aged-serialized-sales-status-report' class='clickable-header top-level-header'>Getting the Aged Serialized Sales Status Report</h3>

For more information, see {{support_AgedSerializedSalesStatusReport}}.    


<h4>Request</h4>

<pre>
GET /reports/AgedSerializedSalesStatusReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ExcludeIfOldest={ExcludeIfOldest}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>ExcludeIfOldest</code> (Optional)  - A flag to indicate if rows in the report that have have the "IsOldest" property set to true should be excluded from the results. Defaults to false
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-aged-serialized-sales-status-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-aged-serialized-sales-status-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-aged-serialized-sales-status-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-aged-serialized-sales-status-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-aged-serialized-sales-status-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-aged-serialized-sales-status-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-aged-serialized-sales-status-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-aged-serialized-sales-status-report">
<pre id="http-code-getting-the-aged-serialized-sales-status-report"><code class="language-http">GET /reports/AgedSerializedSalesStatusReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ExcludeIfOldest=false&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-aged-serialized-sales-status-report">
<pre id="curl-code-getting-the-aged-serialized-sales-status-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/AgedSerializedSalesStatusReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ExcludeIfOldest=false&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-aged-serialized-sales-status-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-aged-serialized-sales-status-report"><code class="language-csharp">static IRestResponse GettingTheAgedSerializedSalesStatusReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/AgedSerializedSalesStatusReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ExcludeIfOldest=false&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-aged-serialized-sales-status-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-aged-serialized-sales-status-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAgedSerializedSalesStatusReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/AgedSerializedSalesStatusReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ExcludeIfOldest=false&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-aged-serialized-sales-status-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-aged-serialized-sales-status-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/AgedSerializedSalesStatusReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ExcludeIfOldest=false&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[agedserializedsalesstatusreportdata](#AgedSerializedSalesStatusReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-aged-serialized-sales-status-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-aged-serialized-sales-status-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-aged-serialized-sales-status-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-aged-serialized-sales-status-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-aged-serialized-sales-status-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-aged-serialized-sales-status-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-aged-serialized-sales-status-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "SaleInvoiceID": 126540,
        "DateCreated": "2016-01-05T09:20:39.773",
        "GlobalProductID": 2815,
        "SpecialProductID": 0,
        "Location": "84 West",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "SoldBy": "iQmetrix User",
        "TenderedBy": "iQmetrix User",
        "InvoiceIDByStore": "84WEAIN11555",
        "ProductIdentifier": "ACVZAP000574",
        "ProductName": "iPhone 5s 32GB - Gold",
        "SerialNumber": "866988333292854",
        "IsOldest": "No",
        "ReceivedDate": "2015-08-13T00:00:00",
        "DaysOnHand": 145,
        "QtyInStock": 27,
        "OlderQty": 1,
        "SoldAsUsed": false,
        "StoreTypeName": "Retail Store"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-aged-serialized-sales-status-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "SaleInvoiceID": 126540,
            "DateCreated": "2016-01-05T09:20:39.773",
            "GlobalProductID": 2815,
            "SpecialProductID": 0,
            "Location": "84 West",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "SoldBy": "iQmetrix User",
            "TenderedBy": "iQmetrix User",
            "InvoiceIDByStore": "84WEAIN11555",
            "ProductIdentifier": "ACVZAP000574",
            "ProductName": "iPhone 5s 32GB - Gold",
            "SerialNumber": "866988333292854",
            "IsOldest": "No",
            "ReceivedDate": "2015-08-13T00:00:00",
            "DaysOnHand": 145,
            "QtyInStock": 27,
            "OlderQty": 1,
            "SoldAsUsed": false,
            "StoreTypeName": "Retail Store"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-aged-serialized-sales-status-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SaleInvoiceID>126540</SaleInvoiceID>
    <DateCreated>2016-01-05T09:20:39.773</DateCreated>
    <GlobalProductID>2815</GlobalProductID>
    <SpecialProductID>0</SpecialProductID>
    <Location>84 West</Location>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <SoldBy>iQmetrix User</SoldBy>
    <TenderedBy>iQmetrix User</TenderedBy>
    <InvoiceIDByStore>84WEAIN11555</InvoiceIDByStore>
    <ProductIdentifier>ACVZAP000574</ProductIdentifier>
    <ProductName>iPhone 5s 32GB - Gold</ProductName>
    <SerialNumber>866988333292854</SerialNumber>
    <IsOldest>No</IsOldest>
    <ReceivedDate>2015-08-13T00:00:00</ReceivedDate>
    <DaysOnHand>145</DaysOnHand>
    <QtyInStock>27</QtyInStock>
    <OlderQty>1</OlderQty>
    <SoldAsUsed>false</SoldAsUsed>
    <StoreTypeName>Retail Store</StoreTypeName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-aged-serialized-sales-status-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SaleInvoiceID>126540</SaleInvoiceID>
    <DateCreated>2016-01-05T09:20:39.773</DateCreated>
    <GlobalProductID>2815</GlobalProductID>
    <SpecialProductID>0</SpecialProductID>
    <Location>84 West</Location>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <SoldBy>iQmetrix User</SoldBy>
    <TenderedBy>iQmetrix User</TenderedBy>
    <InvoiceIDByStore>84WEAIN11555</InvoiceIDByStore>
    <ProductIdentifier>ACVZAP000574</ProductIdentifier>
    <ProductName>iPhone 5s 32GB - Gold</ProductName>
    <SerialNumber>866988333292854</SerialNumber>
    <IsOldest>No</IsOldest>
    <ReceivedDate>2015-08-13T00:00:00</ReceivedDate>
    <DaysOnHand>145</DaysOnHand>
    <QtyInStock>27</QtyInStock>
    <OlderQty>1</OlderQty>
    <SoldAsUsed>false</SoldAsUsed>
    <StoreTypeName>Retail Store</StoreTypeName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-aged-serialized-sales-status-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>SaleInvoiceID,DateCreated,GlobalProductID,SpecialProductID,Location,DistrictName,RegionName,ChannelName,SoldBy,TenderedBy,InvoiceIDByStore,ProductIdentifier,ProductName,SerialNumber,IsOldest,ReceivedDate,DaysOnHand,QtyInStock,OlderQty,SoldAsUsed,StoreTypeName
126540,2016-01-05T09:20:39.773,2815,0,84 West,Valley Area District,Region A,Regina Channel,iQmetrix User,iQmetrix User,84WEAIN11555,ACVZAP000574,iPhone 5s 32GB - Gold,866988333292854,No,2015-08-13T00:00:00,145,27,1,false,Retail Store</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-aged-serialized-sales-status-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-coupon-summary-report' class='clickable-header top-level-header'>Getting the Coupon Summary Report</h3>

For more information, see {{support_CouponSummaryReport}}.


<h4>Request</h4>

<pre>
GET /reports/CouponSummaryReport?StartDate={StartDate}&StopDate={StopDate}&ReportType={ReportType}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ReportType</code> (<strong>Required</strong>)  - Acceptable values include DailySummary, LocationSummary, CouponSummary, CouponDetail, EmployeeSummary and CommissionDetail
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-coupon-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-coupon-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-coupon-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-coupon-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-coupon-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-coupon-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-coupon-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-coupon-summary-report">
<pre id="http-code-getting-the-coupon-summary-report"><code class="language-http">GET /reports/CouponSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-coupon-summary-report">
<pre id="curl-code-getting-the-coupon-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/CouponSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-coupon-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-coupon-summary-report"><code class="language-csharp">static IRestResponse GettingTheCouponSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/CouponSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-coupon-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-coupon-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheCouponSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/CouponSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-coupon-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-coupon-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/CouponSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[couponsummaryreportdata](#CouponSummaryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-coupon-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-coupon-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-coupon-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-coupon-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-coupon-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-coupon-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-coupon-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Date": "2016-01-01T00:00:00",
        "QuantityApplied": 1,
        "QuantityRefunded": 1,
        "NetQuantity": 0,
        "TotalValue": -10
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-coupon-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Date": "2016-01-01T00:00:00",
            "QuantityApplied": 1,
            "QuantityRefunded": 1,
            "NetQuantity": 0,
            "TotalValue": -10
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Date>2016-01-01T00:00:00</Date>
    <QuantityApplied>1</QuantityApplied>
    <QuantityRefunded>1</QuantityRefunded>
    <NetQuantity>0</NetQuantity>
    <TotalValue>-10</TotalValue>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Date>2016-01-01T00:00:00</Date>
    <QuantityApplied>1</QuantityApplied>
    <QuantityRefunded>1</QuantityRefunded>
    <NetQuantity>0</NetQuantity>
    <TotalValue>-10</TotalValue>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Date,QuantityApplied,QuantityRefunded,NetQuantity,TotalValue
2016-01-01T00:00:00,1,1,0,-10</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-daily-sales-summary-report' class='clickable-header top-level-header'>Getting the Daily Sales Summary Report</h3>

For more information, see {{support_DailySalesSummaryReport}}.


<h4>Request</h4>

<pre>
GET /reports/DailySalesSummaryReport?StartDate={StartDate}&StopDate={StopDate}&CategoryNumber={CategoryNumber}&SpecialProductID={SpecialProductID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>SpecialProductID</code> (<strong>Required</strong>)  - Acceptable values include -1 for All, 0 for Regular Products, 1 for Vendor Rebates, 2 for Non-Stocked Products, 3 for Gift Cards, 4 for Non Revenue Products or 5 for a Specific Product - use ProductIdentifier to specify SKU
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU, if this value is used SpecialProductID must be 5
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-daily-sales-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-daily-sales-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-daily-sales-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-daily-sales-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-daily-sales-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-daily-sales-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-daily-sales-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-daily-sales-summary-report">
<pre id="http-code-getting-the-daily-sales-summary-report"><code class="language-http">GET /reports/DailySalesSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&SpecialProductID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2ProductIdentifier=ASCLMO000001&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-daily-sales-summary-report">
<pre id="curl-code-getting-the-daily-sales-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/DailySalesSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&SpecialProductID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2ProductIdentifier=ASCLMO000001&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-daily-sales-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-daily-sales-summary-report"><code class="language-csharp">static IRestResponse GettingTheDailySalesSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/DailySalesSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&SpecialProductID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-daily-sales-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-daily-sales-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheDailySalesSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/DailySalesSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&SpecialProductID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-daily-sales-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-daily-sales-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/DailySalesSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&SpecialProductID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2ProductIdentifier=ASCLMO000001&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[dailysalessummaryreportdata](#DailySalesSummaryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-daily-sales-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-daily-sales-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-daily-sales-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-daily-sales-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-daily-sales-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-daily-sales-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-daily-sales-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "DateCreated": "2016-01-05T00:00:00",
        "QtySold": 19,
        "QtyRefunded": -7,
        "NetQty": 12,
        "TotalInvoiced": 266.38,
        "Adjustment": 0,
        "Net": 246.38,
        "Cost": 80.92,
        "Coupon": 0,
        "CouponTax": 0,
        "Profit": 165.46
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-daily-sales-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "DateCreated": "2016-01-05T00:00:00",
            "QtySold": 19,
            "QtyRefunded": -7,
            "NetQty": 12,
            "TotalInvoiced": 266.38,
            "Adjustment": 0,
            "Net": 246.38,
            "Cost": 80.92,
            "Coupon": 0,
            "CouponTax": 0,
            "Profit": 165.46
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-daily-sales-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2016-01-05T00:00:00</DateCreated>
    <QtySold>19</QtySold>
    <QtyRefunded>-7</QtyRefunded>
    <NetQty>12</NetQty>
    <TotalInvoiced>266.38</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <Net>246.38</Net>
    <Cost>80.92</Cost>
    <Coupon>0</Coupon>
    <CouponTax>0</CouponTax>
    <Profit>165.46</Profit>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-daily-sales-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2016-01-05T00:00:00</DateCreated>
    <QtySold>19</QtySold>
    <QtyRefunded>-7</QtyRefunded>
    <NetQty>12</NetQty>
    <TotalInvoiced>266.38</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <Net>246.38</Net>
    <Cost>80.92</Cost>
    <Coupon>0</Coupon>
    <CouponTax>0</CouponTax>
    <Profit>165.46</Profit>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-daily-sales-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>DateCreated,QtySold,QtyRefunded,NetQty,TotalInvoiced,Adjustment,Net,Cost,Coupon,CouponTax,Profit
2016-01-05T00:00:00,19,-7,12,266.38,0,246.38,80.92,0,0,165.46</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-daily-sales-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-discount-summary-report' class='clickable-header top-level-header'>Getting the Discount Summary Report</h3>

For more information, see {{support_DiscountSummaryReport}}.


<h4>Request</h4>

<pre>
GET /reports/DiscountSummaryReport?StartDate={StartDate}&StopDate={StopDate}&CategoryNumber={CategoryNumber}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ShowRefunds={ShowRefunds}&ShowOrderEntryDiscounts={ShowOrderEntryDiscounts}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>ShowRefunds</code> (Optional)  - A flag to indicate if the report should include refunds. Defaults to false
    </li>
    
    <li>
        <code>ShowOrderEntryDiscounts</code> (Optional)  - A flag to indicate if the report should include Sales Order Discounts. Defaults to false
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-discount-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-discount-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-discount-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-discount-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-discount-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-discount-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-discount-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-discount-summary-report">
<pre id="http-code-getting-the-discount-summary-report"><code class="language-http">GET /reports/DiscountSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ShowRefunds=false&ShowOrderEntryDiscounts=false&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-discount-summary-report">
<pre id="curl-code-getting-the-discount-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/DiscountSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ShowRefunds=false&ShowOrderEntryDiscounts=false&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-discount-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-discount-summary-report"><code class="language-csharp">static IRestResponse GettingTheDiscountSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/DiscountSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ShowRefunds=false&ShowOrderEntryDiscounts=false&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-discount-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-discount-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheDiscountSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/DiscountSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ShowRefunds=false&ShowOrderEntryDiscounts=false&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-discount-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-discount-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/DiscountSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ShowRefunds=false&ShowOrderEntryDiscounts=false&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[discountsummaryreportdata](#DiscountSummaryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-discount-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-discount-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-discount-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-discount-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-discount-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-discount-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-discount-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "GlobalProductID": 2611,
        "DateCreated": "2016-01-05T07:48:16.22",
        "StoreID": 1,
        "StoreInStoreFlowIsEnabledForStore": false,
        "StoreName": "84 West",
        "EntityID": 126533,
        "EntityIDByStore": "84WEAIN11546",
        "ProductIdentifier": "ASBAUN000048",
        "ProductName": "Powerocks Tarot 1500 mAh Extended Battery Pak",
        "CustomerName": "John Test",
        "PrimarySalesPersonName": "iQmetrix User",
        "TenderEmployeeName": "iQmetrix User",
        "PrimarySalesPersonUsername": "iQmetrix.User",
        "TenderEmployeeUsername": "iQmetrix.User",
        "ListPrice": 44.99,
        "StoreInStoreListPrice": 250,
        "SerialNumber": "866988333292854",
        "UnitCost": 19.65,
        "MLPCalculatedPrice": 599,
        "SoldForUnitPrice": 25,
        "StoreInStorePrice": 599,
        "OriginalUnitPrice": 499,
        "Quantity": 1,
        "CommentsFromInvoice": "Damage",
        "DiscountReasonName": "Verizon Edge",
        "ActivatedThroughPAW": false,
        "ReferenceNumbers": "",
        "RecordType": 0,
        "InvoiceRowID": "e66327f5-68a8-f32e-2e8e-17eb95c958f2",
        "ProductRowID": "8d312986-a26c-5dd4-75c7-1f5201a34ea8"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-discount-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "GlobalProductID": 2611,
            "DateCreated": "2016-01-05T07:48:16.22",
            "StoreID": 1,
            "StoreInStoreFlowIsEnabledForStore": false,
            "StoreName": "84 West",
            "EntityID": 126533,
            "EntityIDByStore": "84WEAIN11546",
            "ProductIdentifier": "ASBAUN000048",
            "ProductName": "Powerocks Tarot 1500 mAh Extended Battery Pak",
            "CustomerName": "John Test",
            "PrimarySalesPersonName": "iQmetrix User",
            "TenderEmployeeName": "iQmetrix User",
            "PrimarySalesPersonUsername": "iQmetrix.User",
            "TenderEmployeeUsername": "iQmetrix.User",
            "ListPrice": 44.99,
            "StoreInStoreListPrice": 250,
            "SerialNumber": "866988333292854",
            "UnitCost": 19.65,
            "MLPCalculatedPrice": 599,
            "SoldForUnitPrice": 25,
            "StoreInStorePrice": 599,
            "OriginalUnitPrice": 499,
            "Quantity": 1,
            "CommentsFromInvoice": "Damage",
            "DiscountReasonName": "Verizon Edge",
            "ActivatedThroughPAW": false,
            "ReferenceNumbers": "",
            "RecordType": 0,
            "InvoiceRowID": "e66327f5-68a8-f32e-2e8e-17eb95c958f2",
            "ProductRowID": "8d312986-a26c-5dd4-75c7-1f5201a34ea8"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-discount-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GlobalProductID>2611</GlobalProductID>
    <DateCreated>2016-01-05T07:48:16.22</DateCreated>
    <StoreID>1</StoreID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreName>84 West</StoreName>
    <EntityID>126533</EntityID>
    <EntityIDByStore>84WEAIN11546</EntityIDByStore>
    <ProductIdentifier>ASBAUN000048</ProductIdentifier>
    <ProductName>Powerocks Tarot 1500 mAh Extended Battery Pak</ProductName>
    <CustomerName>John Test</CustomerName>
    <PrimarySalesPersonName>iQmetrix User</PrimarySalesPersonName>
    <TenderEmployeeName>iQmetrix User</TenderEmployeeName>
    <PrimarySalesPersonUsername>iQmetrix.User</PrimarySalesPersonUsername>
    <TenderEmployeeUsername>iQmetrix.User</TenderEmployeeUsername>
    <ListPrice>44.99</ListPrice>
    <StoreInStoreListPrice>250</StoreInStoreListPrice>
    <SerialNumber>866988333292854</SerialNumber>
    <UnitCost>19.65</UnitCost>
    <MLPCalculatedPrice>599</MLPCalculatedPrice>
    <SoldForUnitPrice>25</SoldForUnitPrice>
    <StoreInStorePrice>599</StoreInStorePrice>
    <OriginalUnitPrice>499</OriginalUnitPrice>
    <Quantity>1</Quantity>
    <CommentsFromInvoice>Damage</CommentsFromInvoice>
    <DiscountReasonName>Verizon Edge</DiscountReasonName>
    <ActivatedThroughPAW>false</ActivatedThroughPAW>
    <ReferenceNumbers></ReferenceNumbers>
    <RecordType>0</RecordType>
    <InvoiceRowID>e66327f5-68a8-f32e-2e8e-17eb95c958f2</InvoiceRowID>
    <ProductRowID>8d312986-a26c-5dd4-75c7-1f5201a34ea8</ProductRowID>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-discount-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GlobalProductID>2611</GlobalProductID>
    <DateCreated>2016-01-05T07:48:16.22</DateCreated>
    <StoreID>1</StoreID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreName>84 West</StoreName>
    <EntityID>126533</EntityID>
    <EntityIDByStore>84WEAIN11546</EntityIDByStore>
    <ProductIdentifier>ASBAUN000048</ProductIdentifier>
    <ProductName>Powerocks Tarot 1500 mAh Extended Battery Pak</ProductName>
    <CustomerName>John Test</CustomerName>
    <PrimarySalesPersonName>iQmetrix User</PrimarySalesPersonName>
    <TenderEmployeeName>iQmetrix User</TenderEmployeeName>
    <PrimarySalesPersonUsername>iQmetrix.User</PrimarySalesPersonUsername>
    <TenderEmployeeUsername>iQmetrix.User</TenderEmployeeUsername>
    <ListPrice>44.99</ListPrice>
    <StoreInStoreListPrice>250</StoreInStoreListPrice>
    <SerialNumber>866988333292854</SerialNumber>
    <UnitCost>19.65</UnitCost>
    <MLPCalculatedPrice>599</MLPCalculatedPrice>
    <SoldForUnitPrice>25</SoldForUnitPrice>
    <StoreInStorePrice>599</StoreInStorePrice>
    <OriginalUnitPrice>499</OriginalUnitPrice>
    <Quantity>1</Quantity>
    <CommentsFromInvoice>Damage</CommentsFromInvoice>
    <DiscountReasonName>Verizon Edge</DiscountReasonName>
    <ActivatedThroughPAW>false</ActivatedThroughPAW>
    <ReferenceNumbers></ReferenceNumbers>
    <RecordType>0</RecordType>
    <InvoiceRowID>e66327f5-68a8-f32e-2e8e-17eb95c958f2</InvoiceRowID>
    <ProductRowID>8d312986-a26c-5dd4-75c7-1f5201a34ea8</ProductRowID>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-discount-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>GlobalProductID,DateCreated,StoreID,StoreInStoreFlowIsEnabledForStore,StoreName,EntityID,EntityIDByStore,ProductIdentifier,ProductName,CustomerName,PrimarySalesPersonName,TenderEmployeeName,PrimarySalesPersonUsername,TenderEmployeeUsername,ListPrice,StoreInStoreListPrice,SerialNumber,UnitCost,MLPCalculatedPrice,SoldForUnitPrice,StoreInStorePrice,OriginalUnitPrice,Quantity,CommentsFromInvoice,DiscountReasonName,ActivatedThroughPAW,ReferenceNumbers,RecordType,InvoiceRowID,ProductRowID
2611,2016-01-05T07:48:16.22,1,false,84 West,126533,84WEAIN11546,ASBAUN000048,Powerocks Tarot 1500 mAh Extended Battery Pak,John Test,iQmetrix User,iQmetrix User,iQmetrix.User,iQmetrix.User,44.99,250,866988333292854,19.65,599,25,599,499,1,Damage,Verizon Edge,false,,0,e66327f5-68a8-f32e-2e8e-17eb95c958f2,8d312986-a26c-5dd4-75c7-1f5201a34ea8</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-discount-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-donations-summary-report' class='clickable-header top-level-header'>Getting the Donations Summary Report</h3>

For more information, see {{support_DonationsSummaryReport}}.


<h4>Request</h4>

<pre>
GET /reports/DonationsSummaryReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-donations-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-donations-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-donations-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-donations-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-donations-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-donations-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-donations-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-donations-summary-report">
<pre id="http-code-getting-the-donations-summary-report"><code class="language-http">GET /reports/DonationsSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-donations-summary-report">
<pre id="curl-code-getting-the-donations-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/DonationsSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-donations-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-donations-summary-report"><code class="language-csharp">static IRestResponse GettingTheDonationsSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/DonationsSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-donations-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-donations-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheDonationsSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/DonationsSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-donations-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-donations-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/DonationsSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[donationssummaryreportdata](#DonationsSummaryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-donations-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-donations-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-donations-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-donations-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-donations-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-donations-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-donations-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "DateCreated": "2016-04-12T07:30:43.52",
        "SaleInvoiceID": 128579,
        "InvoiceIDByStore": "84WEAIN14250",
        "CustomerID": 92997,
        "CustomerName": "anne fox",
        "DonationID": "bca3b5ad-923b-2955-28c1-544d524c3bd9",
        "DonationName": "Free The Children",
        "DonationValue": 0.01,
        "ProductIdentifier": "ASBANR000069",
        "Location": "84 West",
        "StoreTypeName": "Retail Store",
        "TenderedBy": "iQmetrix User",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-donations-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "DateCreated": "2016-04-12T07:30:43.52",
            "SaleInvoiceID": 128579,
            "InvoiceIDByStore": "84WEAIN14250",
            "CustomerID": 92997,
            "CustomerName": "anne fox",
            "DonationID": "bca3b5ad-923b-2955-28c1-544d524c3bd9",
            "DonationName": "Free The Children",
            "DonationValue": 0.01,
            "ProductIdentifier": "ASBANR000069",
            "Location": "84 West",
            "StoreTypeName": "Retail Store",
            "TenderedBy": "iQmetrix User",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-donations-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2016-04-12T07:30:43.52</DateCreated>
    <SaleInvoiceID>128579</SaleInvoiceID>
    <InvoiceIDByStore>84WEAIN14250</InvoiceIDByStore>
    <CustomerID>92997</CustomerID>
    <CustomerName>anne fox</CustomerName>
    <DonationID>bca3b5ad-923b-2955-28c1-544d524c3bd9</DonationID>
    <DonationName>Free The Children</DonationName>
    <DonationValue>0.01</DonationValue>
    <ProductIdentifier>ASBANR000069</ProductIdentifier>
    <Location>84 West</Location>
    <StoreTypeName>Retail Store</StoreTypeName>
    <TenderedBy>iQmetrix User</TenderedBy>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-donations-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2016-04-12T07:30:43.52</DateCreated>
    <SaleInvoiceID>128579</SaleInvoiceID>
    <InvoiceIDByStore>84WEAIN14250</InvoiceIDByStore>
    <CustomerID>92997</CustomerID>
    <CustomerName>anne fox</CustomerName>
    <DonationID>bca3b5ad-923b-2955-28c1-544d524c3bd9</DonationID>
    <DonationName>Free The Children</DonationName>
    <DonationValue>0.01</DonationValue>
    <ProductIdentifier>ASBANR000069</ProductIdentifier>
    <Location>84 West</Location>
    <StoreTypeName>Retail Store</StoreTypeName>
    <TenderedBy>iQmetrix User</TenderedBy>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-donations-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>DateCreated,SaleInvoiceID,InvoiceIDByStore,CustomerID,CustomerName,DonationID,DonationName,DonationValue,ProductIdentifier,Location,StoreTypeName,TenderedBy,DistrictName,RegionName,ChannelName
2016-04-12T07:30:43.52,128579,84WEAIN14250,92997,anne fox,bca3b5ad-923b-2955-28c1-544d524c3bd9,Free The Children,0.01,ASBANR000069,84 West,Retail Store,iQmetrix User,Valley Area District,Region A,Regina Channel</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-donations-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-invoice-history-report' class='clickable-header top-level-header'>Getting the Invoice History Report</h3>

For more information, see {{support_InvoiceHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/InvoiceHistoryReport?StartDate={StartDate}&StopDate={StopDate}&InvoiceStatus={InvoiceStatus}&SearchType={SearchType}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&InvoiceIDByStore={InvoiceIDByStore}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>InvoiceStatus</code> (<strong>Required</strong>)  - Acceptable values include -1 for All, 0 for Tendering, 1 for Failed, for 2 Incomplete or 3 for Tendered
    </li>
    
    <li>
        <code>SearchType</code> (<strong>Required</strong>)  - Acceptable values include 0 for Invoice or 1 for Location
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>InvoiceIDByStore</code> (Optional)  - Tracking number
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-invoice-history-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-invoice-history-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-invoice-history-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-invoice-history-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-invoice-history-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-invoice-history-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-invoice-history-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-invoice-history-report">
<pre id="http-code-getting-the-invoice-history-report"><code class="language-http">GET /reports/InvoiceHistoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&InvoiceStatus=3&SearchType=0&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&InvoiceIDByStore=77224IN3
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-invoice-history-report">
<pre id="curl-code-getting-the-invoice-history-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/InvoiceHistoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&InvoiceStatus=3&SearchType=0&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&InvoiceIDByStore=77224IN3"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-invoice-history-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-invoice-history-report"><code class="language-csharp">static IRestResponse GettingTheInvoiceHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/InvoiceHistoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&InvoiceStatus=3&SearchType=0&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&InvoiceIDByStore=77224IN3");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-invoice-history-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-invoice-history-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheInvoiceHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/InvoiceHistoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&InvoiceStatus=3&SearchType=0&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&InvoiceIDByStore=77224IN3");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-invoice-history-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-invoice-history-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/InvoiceHistoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&InvoiceStatus=3&SearchType=0&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&InvoiceIDByStore=77224IN3', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[invoicehistoryreportdata](#InvoiceHistoryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-invoice-history-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-invoice-history-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-invoice-history-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-invoice-history-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-invoice-history-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-invoice-history-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-invoice-history-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "InvoiceIDByStore": "84WEAIN12398",
        "CreatedByEmployee": "iQmetrix User",
        "CreatedByEmployeeUsername": "iQmetrix.User",
        "DateCreated": "2016-01-19T07:56:57.613",
        "CreatedWorkstationName": "MAIN",
        "CustomerID": 71419,
        "CustomerName": "John Test",
        "CompletedBy": 1,
        "CompletedByEmployeeName": "iQmetrix User",
        "CompletedByUsername": "iQmetrix.User",
        "CompletedOn": "2016-01-19T09:56:57.613",
        "CompletedWorkstationName": "MAIN",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "LocationType": 1,
        "LocationTypeName": "Retail Store",
        "Status": 3,
        "LocationName": "84 West",
        "DiscountCode": "",
        "RefundCode": "",
        "RefundComments": "",
        "InvoiceSubtotal": 1,
        "InvoiceAmount": 11.55,
        "PaymentTaken": true,
        "PaymentTakenWorkstationName": "MAIN"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-invoice-history-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "InvoiceIDByStore": "84WEAIN12398",
            "CreatedByEmployee": "iQmetrix User",
            "CreatedByEmployeeUsername": "iQmetrix.User",
            "DateCreated": "2016-01-19T07:56:57.613",
            "CreatedWorkstationName": "MAIN",
            "CustomerID": 71419,
            "CustomerName": "John Test",
            "CompletedBy": 1,
            "CompletedByEmployeeName": "iQmetrix User",
            "CompletedByUsername": "iQmetrix.User",
            "CompletedOn": "2016-01-19T09:56:57.613",
            "CompletedWorkstationName": "MAIN",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "LocationType": 1,
            "LocationTypeName": "Retail Store",
            "Status": 3,
            "LocationName": "84 West",
            "DiscountCode": "",
            "RefundCode": "",
            "RefundComments": "",
            "InvoiceSubtotal": 1,
            "InvoiceAmount": 11.55,
            "PaymentTaken": true,
            "PaymentTakenWorkstationName": "MAIN"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-invoice-history-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceIDByStore>84WEAIN12398</InvoiceIDByStore>
    <CreatedByEmployee>iQmetrix User</CreatedByEmployee>
    <CreatedByEmployeeUsername>iQmetrix.User</CreatedByEmployeeUsername>
    <DateCreated>2016-01-19T07:56:57.613</DateCreated>
    <CreatedWorkstationName>MAIN</CreatedWorkstationName>
    <CustomerID>71419</CustomerID>
    <CustomerName>John Test</CustomerName>
    <CompletedBy>1</CompletedBy>
    <CompletedByEmployeeName>iQmetrix User</CompletedByEmployeeName>
    <CompletedByUsername>iQmetrix.User</CompletedByUsername>
    <CompletedOn>2016-01-19T09:56:57.613</CompletedOn>
    <CompletedWorkstationName>MAIN</CompletedWorkstationName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <LocationType>1</LocationType>
    <LocationTypeName>Retail Store</LocationTypeName>
    <Status>3</Status>
    <LocationName>84 West</LocationName>
    <DiscountCode></DiscountCode>
    <RefundCode></RefundCode>
    <RefundComments></RefundComments>
    <InvoiceSubtotal>1</InvoiceSubtotal>
    <InvoiceAmount>11.55</InvoiceAmount>
    <PaymentTaken>true</PaymentTaken>
    <PaymentTakenWorkstationName>MAIN</PaymentTakenWorkstationName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-invoice-history-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceIDByStore>84WEAIN12398</InvoiceIDByStore>
    <CreatedByEmployee>iQmetrix User</CreatedByEmployee>
    <CreatedByEmployeeUsername>iQmetrix.User</CreatedByEmployeeUsername>
    <DateCreated>2016-01-19T07:56:57.613</DateCreated>
    <CreatedWorkstationName>MAIN</CreatedWorkstationName>
    <CustomerID>71419</CustomerID>
    <CustomerName>John Test</CustomerName>
    <CompletedBy>1</CompletedBy>
    <CompletedByEmployeeName>iQmetrix User</CompletedByEmployeeName>
    <CompletedByUsername>iQmetrix.User</CompletedByUsername>
    <CompletedOn>2016-01-19T09:56:57.613</CompletedOn>
    <CompletedWorkstationName>MAIN</CompletedWorkstationName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <LocationType>1</LocationType>
    <LocationTypeName>Retail Store</LocationTypeName>
    <Status>3</Status>
    <LocationName>84 West</LocationName>
    <DiscountCode></DiscountCode>
    <RefundCode></RefundCode>
    <RefundComments></RefundComments>
    <InvoiceSubtotal>1</InvoiceSubtotal>
    <InvoiceAmount>11.55</InvoiceAmount>
    <PaymentTaken>true</PaymentTaken>
    <PaymentTakenWorkstationName>MAIN</PaymentTakenWorkstationName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-invoice-history-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>InvoiceIDByStore,CreatedByEmployee,CreatedByEmployeeUsername,DateCreated,CreatedWorkstationName,CustomerID,CustomerName,CompletedBy,CompletedByEmployeeName,CompletedByUsername,CompletedOn,CompletedWorkstationName,DistrictName,RegionName,ChannelName,LocationType,LocationTypeName,Status,LocationName,DiscountCode,RefundCode,RefundComments,InvoiceSubtotal,InvoiceAmount,PaymentTaken,PaymentTakenWorkstationName
84WEAIN12398,iQmetrix User,iQmetrix.User,2016-01-19T07:56:57.613,MAIN,71419,John Test,1,iQmetrix User,iQmetrix.User,2016-01-19T09:56:57.613,MAIN,Valley Area District,Region A,Regina Channel,1,Retail Store,3,84 West,,,,1,11.55,true,MAIN</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-invoice-history-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-refund-summary-report' class='clickable-header top-level-header'>Getting the Refund Summary Report</h3>

For more information, see {{support_RefundSummaryReport}}.


<h4>Request</h4>

<pre>
GET /reports/RefundSummaryReport?StartDate={StartDate}&StopDate={StopDate}&Filter={Filter}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>Filter</code> (<strong>Required</strong>)  - Acceptable values include 0 for Any Balance, 1 for Positive Balance, 2 for Negative Balance or 3 for Zero Balance
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-refund-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-refund-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-refund-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-refund-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-refund-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-refund-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-refund-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-refund-summary-report">
<pre id="http-code-getting-the-refund-summary-report"><code class="language-http">GET /reports/RefundSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Filter=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-refund-summary-report">
<pre id="curl-code-getting-the-refund-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/RefundSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Filter=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-refund-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-refund-summary-report"><code class="language-csharp">static IRestResponse GettingTheRefundSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/RefundSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Filter=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-refund-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-refund-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheRefundSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/RefundSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Filter=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-refund-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-refund-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/RefundSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Filter=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[refundsummaryreportdata](#RefundSummaryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-refund-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-refund-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-refund-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-refund-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-refund-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-refund-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-refund-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "SaleInvoiceID": 128962,
        "OriginalSaleInvoiceID": -1,
        "StoreInStoreFlowIsEnabledForAtLeastOneStore": 0,
        "OriginalDateCreated": "2015-07-14T13:42:43.98",
        "DateCreated": "2016-05-13T12:18:08.723",
        "InvoicedAt": "84 West",
        "InvoicedBy": "84 West",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "TenderedBy": "Chad Tester",
        "TenderedByUsername": "Chad.Tester",
        "SalesPersonName": "Chad Tester",
        "SalesPersonUsername": "Chad.Tester",
        "InvoiceIDByStore": "84WEAIN5995",
        "CustomerName": "BOBCAT PRESSURE CONTROL INC",
        "CustomerID": 110437,
        "CustomerAddress": "442 Athabasca st w",
        "CustomerCity": "Regina",
        "CustomerProvinceOrState": "PR",
        "CustomerPostalOrZipCode": "h0h0h0",
        "CustomerCountry": "USA",
        "OriginalInvoiceIDByStore": "84WEAIN10368",
        "NetSale": 420,
        "AmountRefunded": 0,
        "SISAmountRefunded": 0,
        "AmountSold": 420,
        "TotalAfterTax": 0,
        "TotalCoupon": 0,
        "TotalCouponTax": 0,
        "RefundCode": "",
        "Comments": "Invoice Editor Adjustment for 84WEAIN10368",
        "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
        "OriginalInvoiceRowID": "f30bb5bd-0813-dc2a-1844-41ca87795e17",
        "ProductRowID": "dd27caa4-274f-b5b2-c94c-78a4e5d93a6e"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-refund-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "SaleInvoiceID": 128962,
            "OriginalSaleInvoiceID": -1,
            "StoreInStoreFlowIsEnabledForAtLeastOneStore": 0,
            "OriginalDateCreated": "2015-07-14T13:42:43.98",
            "DateCreated": "2016-05-13T12:18:08.723",
            "InvoicedAt": "84 West",
            "InvoicedBy": "84 West",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "TenderedBy": "Chad Tester",
            "TenderedByUsername": "Chad.Tester",
            "SalesPersonName": "Chad Tester",
            "SalesPersonUsername": "Chad.Tester",
            "InvoiceIDByStore": "84WEAIN5995",
            "CustomerName": "BOBCAT PRESSURE CONTROL INC",
            "CustomerID": 110437,
            "CustomerAddress": "442 Athabasca st w",
            "CustomerCity": "Regina",
            "CustomerProvinceOrState": "PR",
            "CustomerPostalOrZipCode": "h0h0h0",
            "CustomerCountry": "USA",
            "OriginalInvoiceIDByStore": "84WEAIN10368",
            "NetSale": 420,
            "AmountRefunded": 0,
            "SISAmountRefunded": 0,
            "AmountSold": 420,
            "TotalAfterTax": 0,
            "TotalCoupon": 0,
            "TotalCouponTax": 0,
            "RefundCode": "",
            "Comments": "Invoice Editor Adjustment for 84WEAIN10368",
            "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
            "OriginalInvoiceRowID": "f30bb5bd-0813-dc2a-1844-41ca87795e17",
            "ProductRowID": "dd27caa4-274f-b5b2-c94c-78a4e5d93a6e"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-refund-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SaleInvoiceID>128962</SaleInvoiceID>
    <OriginalSaleInvoiceID>-1</OriginalSaleInvoiceID>
    <StoreInStoreFlowIsEnabledForAtLeastOneStore>0</StoreInStoreFlowIsEnabledForAtLeastOneStore>
    <OriginalDateCreated>2015-07-14T13:42:43.98</OriginalDateCreated>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <InvoicedAt>84 West</InvoicedAt>
    <InvoicedBy>84 West</InvoicedBy>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <TenderedBy>Chad Tester</TenderedBy>
    <TenderedByUsername>Chad.Tester</TenderedByUsername>
    <SalesPersonName>Chad Tester</SalesPersonName>
    <SalesPersonUsername>Chad.Tester</SalesPersonUsername>
    <InvoiceIDByStore>84WEAIN5995</InvoiceIDByStore>
    <CustomerName>BOBCAT PRESSURE CONTROL INC</CustomerName>
    <CustomerID>110437</CustomerID>
    <CustomerAddress>442 Athabasca st w</CustomerAddress>
    <CustomerCity>Regina</CustomerCity>
    <CustomerProvinceOrState>PR</CustomerProvinceOrState>
    <CustomerPostalOrZipCode>h0h0h0</CustomerPostalOrZipCode>
    <CustomerCountry>USA</CustomerCountry>
    <OriginalInvoiceIDByStore>84WEAIN10368</OriginalInvoiceIDByStore>
    <NetSale>420</NetSale>
    <AmountRefunded>0</AmountRefunded>
    <SISAmountRefunded>0</SISAmountRefunded>
    <AmountSold>420</AmountSold>
    <TotalAfterTax>0</TotalAfterTax>
    <TotalCoupon>0</TotalCoupon>
    <TotalCouponTax>0</TotalCouponTax>
    <RefundCode></RefundCode>
    <Comments>Invoice Editor Adjustment for 84WEAIN10368</Comments>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <OriginalInvoiceRowID>f30bb5bd-0813-dc2a-1844-41ca87795e17</OriginalInvoiceRowID>
    <ProductRowID>dd27caa4-274f-b5b2-c94c-78a4e5d93a6e</ProductRowID>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-refund-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SaleInvoiceID>128962</SaleInvoiceID>
    <OriginalSaleInvoiceID>-1</OriginalSaleInvoiceID>
    <StoreInStoreFlowIsEnabledForAtLeastOneStore>0</StoreInStoreFlowIsEnabledForAtLeastOneStore>
    <OriginalDateCreated>2015-07-14T13:42:43.98</OriginalDateCreated>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <InvoicedAt>84 West</InvoicedAt>
    <InvoicedBy>84 West</InvoicedBy>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <TenderedBy>Chad Tester</TenderedBy>
    <TenderedByUsername>Chad.Tester</TenderedByUsername>
    <SalesPersonName>Chad Tester</SalesPersonName>
    <SalesPersonUsername>Chad.Tester</SalesPersonUsername>
    <InvoiceIDByStore>84WEAIN5995</InvoiceIDByStore>
    <CustomerName>BOBCAT PRESSURE CONTROL INC</CustomerName>
    <CustomerID>110437</CustomerID>
    <CustomerAddress>442 Athabasca st w</CustomerAddress>
    <CustomerCity>Regina</CustomerCity>
    <CustomerProvinceOrState>PR</CustomerProvinceOrState>
    <CustomerPostalOrZipCode>h0h0h0</CustomerPostalOrZipCode>
    <CustomerCountry>USA</CustomerCountry>
    <OriginalInvoiceIDByStore>84WEAIN10368</OriginalInvoiceIDByStore>
    <NetSale>420</NetSale>
    <AmountRefunded>0</AmountRefunded>
    <SISAmountRefunded>0</SISAmountRefunded>
    <AmountSold>420</AmountSold>
    <TotalAfterTax>0</TotalAfterTax>
    <TotalCoupon>0</TotalCoupon>
    <TotalCouponTax>0</TotalCouponTax>
    <RefundCode></RefundCode>
    <Comments>Invoice Editor Adjustment for 84WEAIN10368</Comments>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <OriginalInvoiceRowID>f30bb5bd-0813-dc2a-1844-41ca87795e17</OriginalInvoiceRowID>
    <ProductRowID>dd27caa4-274f-b5b2-c94c-78a4e5d93a6e</ProductRowID>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-refund-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>SaleInvoiceID,OriginalSaleInvoiceID,StoreInStoreFlowIsEnabledForAtLeastOneStore,OriginalDateCreated,DateCreated,InvoicedAt,InvoicedBy,DistrictName,RegionName,ChannelName,TenderedBy,TenderedByUsername,SalesPersonName,SalesPersonUsername,InvoiceIDByStore,CustomerName,CustomerID,CustomerAddress,CustomerCity,CustomerProvinceOrState,CustomerPostalOrZipCode,CustomerCountry,OriginalInvoiceIDByStore,NetSale,AmountRefunded,SISAmountRefunded,AmountSold,TotalAfterTax,TotalCoupon,TotalCouponTax,RefundCode,Comments,InvoiceRowID,OriginalInvoiceRowID,ProductRowID
128962,-1,0,2015-07-14T13:42:43.98,2016-05-13T12:18:08.723,84 West,84 West,Valley Area District,Region A,Regina Channel,Chad Tester,Chad.Tester,Chad Tester,Chad.Tester,84WEAIN5995,BOBCAT PRESSURE CONTROL INC,110437,442 Athabasca st w,Regina,PR,h0h0h0,USA,84WEAIN10368,420,0,0,420,0,0,0,,Invoice Editor Adjustment for 84WEAIN10368,db8f28cf-5017-47f4-9ccf-b90cff32185d,f30bb5bd-0813-dc2a-1844-41ca87795e17,dd27caa4-274f-b5b2-c94c-78a4e5d93a6e</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-refund-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-paw-exceptions-report' class='clickable-header top-level-header'>Getting the PAW Exceptions Report</h3>

For more information, see {{support_PAWExceptionsReport}}.    


<h4>Request</h4>

<pre>
GET /reports/PawExceptionsReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-paw-exceptions-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-paw-exceptions-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-paw-exceptions-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-paw-exceptions-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-paw-exceptions-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-paw-exceptions-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-paw-exceptions-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-paw-exceptions-report">
<pre id="http-code-getting-the-paw-exceptions-report"><code class="language-http">GET /reports/PawExceptionsReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-paw-exceptions-report">
<pre id="curl-code-getting-the-paw-exceptions-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/PawExceptionsReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-paw-exceptions-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-paw-exceptions-report"><code class="language-csharp">static IRestResponse GettingThePawExceptionsReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/PawExceptionsReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-paw-exceptions-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-paw-exceptions-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePawExceptionsReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/PawExceptionsReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-paw-exceptions-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-paw-exceptions-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/PawExceptionsReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[pawexceptionsreportdata](#PawExceptionsReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-paw-exceptions-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-paw-exceptions-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-paw-exceptions-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-paw-exceptions-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-paw-exceptions-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-paw-exceptions-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-paw-exceptions-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "SaleInvoiceID": 126540,
        "InvoiceIDByStore": "84WEAIN11555",
        "OrderEntryID": 3135,
        "OrderEntryIDByStore": "",
        "DateCreated": "2016-01-05T09:20:39.773",
        "StoreID1": 1,
        "EmployeeID1": 2384,
        "EmployeeName": "iQmetrix Employee",
        "Username": "iQmetrix.Employee",
        "TermName": "1 Year UPGRADE",
        "DeviceSKU": "ACVZAP000574",
        "DeviceSerialNumber": "866988333292854",
        "RatePlanSKU": "ASAANS000035",
        "IsManualOverrideImport": true,
        "IsCarrierImportUsed": false,
        "RatePlan2SKU": "ACVZNS000159",
        "ManualOverrideComments": "Sale",
        "CarrierImportNotUsedComments": "Carrier down",
        "StoreName": "84 West",
        "DeviceDescription": "iPhone 5s 32GB - Gold",
        "RatePlanDescription": "Act $20.99 to $49.99",
        "RatePlan2Description": "Act $9.99 to $20.98",
        "ManualOverrideReason": "Damage",
        "CarrierImportNotUsedReason": "The Carrier site is down",
        "ManagerOverride": "No"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-paw-exceptions-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "SaleInvoiceID": 126540,
            "InvoiceIDByStore": "84WEAIN11555",
            "OrderEntryID": 3135,
            "OrderEntryIDByStore": "",
            "DateCreated": "2016-01-05T09:20:39.773",
            "StoreID1": 1,
            "EmployeeID1": 2384,
            "EmployeeName": "iQmetrix Employee",
            "Username": "iQmetrix.Employee",
            "TermName": "1 Year UPGRADE",
            "DeviceSKU": "ACVZAP000574",
            "DeviceSerialNumber": "866988333292854",
            "RatePlanSKU": "ASAANS000035",
            "IsManualOverrideImport": true,
            "IsCarrierImportUsed": false,
            "RatePlan2SKU": "ACVZNS000159",
            "ManualOverrideComments": "Sale",
            "CarrierImportNotUsedComments": "Carrier down",
            "StoreName": "84 West",
            "DeviceDescription": "iPhone 5s 32GB - Gold",
            "RatePlanDescription": "Act $20.99 to $49.99",
            "RatePlan2Description": "Act $9.99 to $20.98",
            "ManualOverrideReason": "Damage",
            "CarrierImportNotUsedReason": "The Carrier site is down",
            "ManagerOverride": "No"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-paw-exceptions-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SaleInvoiceID>126540</SaleInvoiceID>
    <InvoiceIDByStore>84WEAIN11555</InvoiceIDByStore>
    <OrderEntryID>3135</OrderEntryID>
    <OrderEntryIDByStore></OrderEntryIDByStore>
    <DateCreated>2016-01-05T09:20:39.773</DateCreated>
    <StoreID1>1</StoreID1>
    <EmployeeID1>2384</EmployeeID1>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <Username>iQmetrix.Employee</Username>
    <TermName>1 Year UPGRADE</TermName>
    <DeviceSKU>ACVZAP000574</DeviceSKU>
    <DeviceSerialNumber>866988333292854</DeviceSerialNumber>
    <RatePlanSKU>ASAANS000035</RatePlanSKU>
    <IsManualOverrideImport>true</IsManualOverrideImport>
    <IsCarrierImportUsed>false</IsCarrierImportUsed>
    <RatePlan2SKU>ACVZNS000159</RatePlan2SKU>
    <ManualOverrideComments>Sale</ManualOverrideComments>
    <CarrierImportNotUsedComments>Carrier down</CarrierImportNotUsedComments>
    <StoreName>84 West</StoreName>
    <DeviceDescription>iPhone 5s 32GB - Gold</DeviceDescription>
    <RatePlanDescription>Act $20.99 to $49.99</RatePlanDescription>
    <RatePlan2Description>Act $9.99 to $20.98</RatePlan2Description>
    <ManualOverrideReason>Damage</ManualOverrideReason>
    <CarrierImportNotUsedReason>The Carrier site is down</CarrierImportNotUsedReason>
    <ManagerOverride>No</ManagerOverride>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-paw-exceptions-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SaleInvoiceID>126540</SaleInvoiceID>
    <InvoiceIDByStore>84WEAIN11555</InvoiceIDByStore>
    <OrderEntryID>3135</OrderEntryID>
    <OrderEntryIDByStore></OrderEntryIDByStore>
    <DateCreated>2016-01-05T09:20:39.773</DateCreated>
    <StoreID1>1</StoreID1>
    <EmployeeID1>2384</EmployeeID1>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <Username>iQmetrix.Employee</Username>
    <TermName>1 Year UPGRADE</TermName>
    <DeviceSKU>ACVZAP000574</DeviceSKU>
    <DeviceSerialNumber>866988333292854</DeviceSerialNumber>
    <RatePlanSKU>ASAANS000035</RatePlanSKU>
    <IsManualOverrideImport>true</IsManualOverrideImport>
    <IsCarrierImportUsed>false</IsCarrierImportUsed>
    <RatePlan2SKU>ACVZNS000159</RatePlan2SKU>
    <ManualOverrideComments>Sale</ManualOverrideComments>
    <CarrierImportNotUsedComments>Carrier down</CarrierImportNotUsedComments>
    <StoreName>84 West</StoreName>
    <DeviceDescription>iPhone 5s 32GB - Gold</DeviceDescription>
    <RatePlanDescription>Act $20.99 to $49.99</RatePlanDescription>
    <RatePlan2Description>Act $9.99 to $20.98</RatePlan2Description>
    <ManualOverrideReason>Damage</ManualOverrideReason>
    <CarrierImportNotUsedReason>The Carrier site is down</CarrierImportNotUsedReason>
    <ManagerOverride>No</ManagerOverride>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-paw-exceptions-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>SaleInvoiceID,InvoiceIDByStore,OrderEntryID,OrderEntryIDByStore,DateCreated,StoreID1,EmployeeID1,EmployeeName,Username,TermName,DeviceSKU,DeviceSerialNumber,RatePlanSKU,IsManualOverrideImport,IsCarrierImportUsed,RatePlan2SKU,ManualOverrideComments,CarrierImportNotUsedComments,StoreName,DeviceDescription,RatePlanDescription,RatePlan2Description,ManualOverrideReason,CarrierImportNotUsedReason,ManagerOverride
126540,84WEAIN11555,3135,,2016-01-05T09:20:39.773,1,2384,iQmetrix Employee,iQmetrix.Employee,1 Year UPGRADE,ACVZAP000574,866988333292854,ASAANS000035,true,false,ACVZNS000159,Sale,Carrier down,84 West,iPhone 5s 32GB - Gold,Act $20.99 to $49.99,Act $9.99 to $20.98,Damage,The Carrier site is down,No</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-paw-exceptions-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-product-detail-report' class='clickable-header top-level-header'>Getting the Product Detail Report</h3>

<a name="sales-reports"></a>For more information, see {{support_ProductDetailReport}}.

Note that this report has multiple responses, depending on the ReportPart specified.

| Report Part | Response |
|:------------|:---------|
| 1 | <a href='http://developers.iqmetrix.com/api/Chatterspot-Reports/#productdetailreportdata'>ProductDetailReportData</a> |
| 2 | <a href='http://developers.iqmetrix.com/api/Chatterspot-Reports/#productdetailreporttaxdetaildata'>ProductDetailReportTaxDetailData</a> |
| 3 | <a href='http://developers.iqmetrix.com/api/Chatterspot-Reports/#productdetailreporttaxcolumndata'>ProductDetailReportTaxColumnData</a> |


<h4>Request</h4>

<pre>
GET /reports/ProductDetailReport?StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ManufacturerID={ManufacturerID}&CategoryNumber={CategoryNumber}&ReportPart={ReportPart}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ProductIdentifier={ProductIdentifier}&InvoiceIDByStore={InvoiceIDByStore}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Product SKU, 2 for Manufacutrer, 3 for Category and 4 for Invoice Number
    </li>
    
    <li>
        <code>ManufacturerID</code> (<strong>Required</strong>)  - Identifier for a Manufacturer in RQ. Use -1 for all Manufacturers. For a complete list see <a href="/api/RQ-Data-Connect/#getting-a-list-of-manufacturers-in-rq">Getting a List of Manufacturers in RQ</a>
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ReportPart</code> (<strong>Required</strong>)  - Acceptable values include 1 to return the default report, 2 for the tax detail report and 3 for tax column data
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>InvoiceIDByStore</code> (Optional)  - Tracking number
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-product-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-product-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-product-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-product-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-product-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-product-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-product-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-product-detail-report">
<pre id="http-code-getting-the-product-detail-report"><code class="language-http">GET /reports/ProductDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=3&ManufacturerID=-1&CategoryNumber=10&ReportPart=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-product-detail-report">
<pre id="curl-code-getting-the-product-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/ProductDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=3&ManufacturerID=-1&CategoryNumber=10&ReportPart=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-product-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-product-detail-report"><code class="language-csharp">static IRestResponse GettingTheProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/ProductDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=3&ManufacturerID=-1&CategoryNumber=10&ReportPart=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-product-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-product-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheProductDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/ProductDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=3&ManufacturerID=-1&CategoryNumber=10&ReportPart=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-product-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-product-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/ProductDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=3&ManufacturerID=-1&CategoryNumber=10&ReportPart=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[productdetailreportdata](#ProductDetailReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-product-detail-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-product-detail-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-product-detail-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-product-detail-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-product-detail-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-detail-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-product-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
        "AdjustedUnitPrice": 25,
        "BillingAccountNumber": "",
        "CarrierPrice": null,
        "CategoryPath": ">> Phones >> Galaxies",
        "ChannelName": "English Channel",
        "Comments": "",
        "ContractNumber": "12345",
        "CustomerID": 131149,
        "CustomerName": "Bob Jones",
        "DateCreated": "2016-05-13T12:18:08.723",
        "DistrictName": "Westminster",
        "EmployeeName": "iQmetrix User",
        "EmployeeID": 4,
        "GlobalProductID": 5179,
        "InvoicedAt": "100: My Network LLC - Anchorage",
        "InvoicedAt_StoreID": 1,
        "InvoicedBy": "100: My Network LLC - Anchorage",
        "InvoicedBy_StoreID": 1,
        "InvoiceIDByStore": "77224IN3",
        "IsOrderServiceDropShipProduct": null,
        "IsOrderServiceShippingProduct": null,
        "ListPrice": 449.95,
        "OriginalUnitPrice": 25,
        "Priority": 1,
        "ProductCouponDiscount": 0,
        "ProductIdentifier": "ASHCSA000120",
        "ProductName": "Samsung Galaxy Rugby LTE",
        "Quantity": 1,
        "Refund": 0,
        "RegionName": "London",
        "RetailerCatalogID": "null",
        "SaleInvoice_RowID": "8c6537ae-75a5-4155-82b2-c8647ed05f3d",
        "SaleInvoiceID": 128962,
        "SaleInvoiceProduct_RowID": "0099b78f-ba02-4a91-afd4-2f7eb0fbbb06",
        "SerialNumber": "1111111",
        "SoldAsUsed": false,
        "SpecialProductID": 0,
        "StoreInStoreFlowIsEnabledForStore": false,
        "StoreInStoreGrossProfit": null,
        "StoreInStoreListPrice": null,
        "StoreInStorePrice": null,
        "StoreTypeName": "Costco",
        "TenderedBy": "iQmetrix User",
        "TenderedBy_EmployeeID": 277,
        "TotalCost": 0,
        "TotalDiscount": 424.95,
        "TotalPrice": 25,
        "UnitCost": 0,
        "UnitPrice": 25,
        "VendorName": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-product-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
            "AdjustedUnitPrice": 25,
            "BillingAccountNumber": "",
            "CarrierPrice": null,
            "CategoryPath": ">> Phones >> Galaxies",
            "ChannelName": "English Channel",
            "Comments": "",
            "ContractNumber": "12345",
            "CustomerID": 131149,
            "CustomerName": "Bob Jones",
            "DateCreated": "2016-05-13T12:18:08.723",
            "DistrictName": "Westminster",
            "EmployeeName": "iQmetrix User",
            "EmployeeID": 4,
            "GlobalProductID": 5179,
            "InvoicedAt": "100: My Network LLC - Anchorage",
            "InvoicedAt_StoreID": 1,
            "InvoicedBy": "100: My Network LLC - Anchorage",
            "InvoicedBy_StoreID": 1,
            "InvoiceIDByStore": "77224IN3",
            "IsOrderServiceDropShipProduct": null,
            "IsOrderServiceShippingProduct": null,
            "ListPrice": 449.95,
            "OriginalUnitPrice": 25,
            "Priority": 1,
            "ProductCouponDiscount": 0,
            "ProductIdentifier": "ASHCSA000120",
            "ProductName": "Samsung Galaxy Rugby LTE",
            "Quantity": 1,
            "Refund": 0,
            "RegionName": "London",
            "RetailerCatalogID": "null",
            "SaleInvoice_RowID": "8c6537ae-75a5-4155-82b2-c8647ed05f3d",
            "SaleInvoiceID": 128962,
            "SaleInvoiceProduct_RowID": "0099b78f-ba02-4a91-afd4-2f7eb0fbbb06",
            "SerialNumber": "1111111",
            "SoldAsUsed": false,
            "SpecialProductID": 0,
            "StoreInStoreFlowIsEnabledForStore": false,
            "StoreInStoreGrossProfit": null,
            "StoreInStoreListPrice": null,
            "StoreInStorePrice": null,
            "StoreTypeName": "Costco",
            "TenderedBy": "iQmetrix User",
            "TenderedBy_EmployeeID": 277,
            "TotalCost": 0,
            "TotalDiscount": 424.95,
            "TotalPrice": 25,
            "UnitCost": 0,
            "UnitPrice": 25,
            "VendorName": "",
            "VendorSKU": ""
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation_RowID>d3d65281-5201-4927-9bac-6f3a47ddf56b</Activation_RowID>
    <AdjustedUnitPrice>25</AdjustedUnitPrice>
    <BillingAccountNumber></BillingAccountNumber>
    <CarrierPrice>null</CarrierPrice>
    <CategoryPath>>> Phones >> Galaxies</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <Comments></Comments>
    <ContractNumber>12345</ContractNumber>
    <CustomerID>131149</CustomerID>
    <CustomerName>Bob Jones</CustomerName>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <DistrictName>Westminster</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <EmployeeID>4</EmployeeID>
    <GlobalProductID>5179</GlobalProductID>
    <InvoicedAt>100: My Network LLC - Anchorage</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>100: My Network LLC - Anchorage</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>77224IN3</InvoiceIDByStore>
    <IsOrderServiceDropShipProduct>null</IsOrderServiceDropShipProduct>
    <IsOrderServiceShippingProduct>null</IsOrderServiceShippingProduct>
    <ListPrice>449.95</ListPrice>
    <OriginalUnitPrice>25</OriginalUnitPrice>
    <Priority>1</Priority>
    <ProductCouponDiscount>0</ProductCouponDiscount>
    <ProductIdentifier>ASHCSA000120</ProductIdentifier>
    <ProductName>Samsung Galaxy Rugby LTE</ProductName>
    <Quantity>1</Quantity>
    <Refund>0</Refund>
    <RegionName>London</RegionName>
    <RetailerCatalogID>null</RetailerCatalogID>
    <SaleInvoice_RowID>8c6537ae-75a5-4155-82b2-c8647ed05f3d</SaleInvoice_RowID>
    <SaleInvoiceID>128962</SaleInvoiceID>
    <SaleInvoiceProduct_RowID>0099b78f-ba02-4a91-afd4-2f7eb0fbbb06</SaleInvoiceProduct_RowID>
    <SerialNumber>1111111</SerialNumber>
    <SoldAsUsed>false</SoldAsUsed>
    <SpecialProductID>0</SpecialProductID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreInStoreGrossProfit>null</StoreInStoreGrossProfit>
    <StoreInStoreListPrice>null</StoreInStoreListPrice>
    <StoreInStorePrice>null</StoreInStorePrice>
    <StoreTypeName>Costco</StoreTypeName>
    <TenderedBy>iQmetrix User</TenderedBy>
    <TenderedBy_EmployeeID>277</TenderedBy_EmployeeID>
    <TotalCost>0</TotalCost>
    <TotalDiscount>424.95</TotalDiscount>
    <TotalPrice>25</TotalPrice>
    <UnitCost>0</UnitCost>
    <UnitPrice>25</UnitPrice>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation_RowID>d3d65281-5201-4927-9bac-6f3a47ddf56b</Activation_RowID>
    <AdjustedUnitPrice>25</AdjustedUnitPrice>
    <BillingAccountNumber></BillingAccountNumber>
    <CarrierPrice>null</CarrierPrice>
    <CategoryPath>>> Phones >> Galaxies</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <Comments></Comments>
    <ContractNumber>12345</ContractNumber>
    <CustomerID>131149</CustomerID>
    <CustomerName>Bob Jones</CustomerName>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <DistrictName>Westminster</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <EmployeeID>4</EmployeeID>
    <GlobalProductID>5179</GlobalProductID>
    <InvoicedAt>100: My Network LLC - Anchorage</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>100: My Network LLC - Anchorage</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>77224IN3</InvoiceIDByStore>
    <IsOrderServiceDropShipProduct>null</IsOrderServiceDropShipProduct>
    <IsOrderServiceShippingProduct>null</IsOrderServiceShippingProduct>
    <ListPrice>449.95</ListPrice>
    <OriginalUnitPrice>25</OriginalUnitPrice>
    <Priority>1</Priority>
    <ProductCouponDiscount>0</ProductCouponDiscount>
    <ProductIdentifier>ASHCSA000120</ProductIdentifier>
    <ProductName>Samsung Galaxy Rugby LTE</ProductName>
    <Quantity>1</Quantity>
    <Refund>0</Refund>
    <RegionName>London</RegionName>
    <RetailerCatalogID>null</RetailerCatalogID>
    <SaleInvoice_RowID>8c6537ae-75a5-4155-82b2-c8647ed05f3d</SaleInvoice_RowID>
    <SaleInvoiceID>128962</SaleInvoiceID>
    <SaleInvoiceProduct_RowID>0099b78f-ba02-4a91-afd4-2f7eb0fbbb06</SaleInvoiceProduct_RowID>
    <SerialNumber>1111111</SerialNumber>
    <SoldAsUsed>false</SoldAsUsed>
    <SpecialProductID>0</SpecialProductID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreInStoreGrossProfit>null</StoreInStoreGrossProfit>
    <StoreInStoreListPrice>null</StoreInStoreListPrice>
    <StoreInStorePrice>null</StoreInStorePrice>
    <StoreTypeName>Costco</StoreTypeName>
    <TenderedBy>iQmetrix User</TenderedBy>
    <TenderedBy_EmployeeID>277</TenderedBy_EmployeeID>
    <TotalCost>0</TotalCost>
    <TotalDiscount>424.95</TotalDiscount>
    <TotalPrice>25</TotalPrice>
    <UnitCost>0</UnitCost>
    <UnitPrice>25</UnitPrice>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Activation_RowID,AdjustedUnitPrice,BillingAccountNumber,CarrierPrice,CategoryPath,ChannelName,Comments,ContractNumber,CustomerID,CustomerName,DateCreated,DistrictName,EmployeeName,EmployeeID,GlobalProductID,InvoicedAt,InvoicedAt_StoreID,InvoicedBy,InvoicedBy_StoreID,InvoiceIDByStore,IsOrderServiceDropShipProduct,IsOrderServiceShippingProduct,ListPrice,OriginalUnitPrice,Priority,ProductCouponDiscount,ProductIdentifier,ProductName,Quantity,Refund,RegionName,RetailerCatalogID,SaleInvoice_RowID,SaleInvoiceID,SaleInvoiceProduct_RowID,SerialNumber,SoldAsUsed,SpecialProductID,StoreInStoreFlowIsEnabledForStore,StoreInStoreGrossProfit,StoreInStoreListPrice,StoreInStorePrice,StoreTypeName,TenderedBy,TenderedBy_EmployeeID,TotalCost,TotalDiscount,TotalPrice,UnitCost,UnitPrice,VendorName,VendorSKU
d3d65281-5201-4927-9bac-6f3a47ddf56b,25,,null,>> Phones >> Galaxies,English Channel,,12345,131149,Bob Jones,2016-05-13T12:18:08.723,Westminster,iQmetrix User,4,5179,100: My Network LLC - Anchorage,1,100: My Network LLC - Anchorage,1,77224IN3,null,null,449.95,25,1,0,ASHCSA000120,Samsung Galaxy Rugby LTE,1,0,London,null,8c6537ae-75a5-4155-82b2-c8647ed05f3d,128962,0099b78f-ba02-4a91-afd4-2f7eb0fbbb06,1111111,false,0,false,null,null,null,Costco,iQmetrix User,277,0,424.95,25,0,25,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-detail-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-product-financing-report' class='clickable-header top-level-header'>Getting the Product Financing Report</h3>

For more information see {{support_ProductFinancingReport}}.


<h4>Request</h4>

<pre>
GET /reports/ProductFinancingReport?StartDate={StartDate}&StopDate={StopDate}&FinancingID={FinancingID}&CarrierSIPNumbering={CarrierSIPNumbering}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>FinancingID</code> (Optional)  - Identifier for a finanacing type. Use -1 for all types. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-financing-types">Getting Financing Types</a>
    </li>
    
    <li>
        <code>CarrierSIPNumbering</code> (Optional)  - Identifier for a carrier in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-carriers-in-rq">Getting a List of Carriers in RQ</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-product-financing-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-product-financing-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-product-financing-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-product-financing-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-product-financing-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-product-financing-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-product-financing-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-product-financing-report">
<pre id="http-code-getting-the-product-financing-report"><code class="language-http">GET /reports/ProductFinancingReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&FinancingID=-1&CarrierSIPNumbering=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-product-financing-report">
<pre id="curl-code-getting-the-product-financing-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/ProductFinancingReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&FinancingID=-1&CarrierSIPNumbering=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-product-financing-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-product-financing-report"><code class="language-csharp">static IRestResponse GettingTheProductFinancingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/ProductFinancingReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&FinancingID=-1&CarrierSIPNumbering=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-product-financing-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-product-financing-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheProductFinancingReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/ProductFinancingReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&FinancingID=-1&CarrierSIPNumbering=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-product-financing-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-product-financing-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/ProductFinancingReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&FinancingID=-1&CarrierSIPNumbering=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[productfinancingreportdata](#ProductFinancingReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-product-financing-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-product-financing-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-product-financing-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-product-financing-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-product-financing-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-financing-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-product-financing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ProductSKU": "ASHCSA000120",
        "ProductName": "Samsung Galaxy Rugby LTE",
        "SaleInvoiceID": 128903,
        "InvoiceNumber": "84WEAIN14417",
        "Date": "2016-05-09T08:46:40.657",
        "EmployeeName": "iQmetrix Employee",
        "EmployeeID": 221,
        "CustomerID": 115326,
        "CustomerName": "Bob Smith",
        "LocationID": 1,
        "LocationName": "84 West",
        "TrackingNumber": "123440",
        "PhoneNumber": "0123465980",
        "Term": "1 Year UPGRADE",
        "Price": 25,
        "Cost": 449.95,
        "ProgramName": "Any Levels",
        "RequiredDownPayment": 5,
        "RequiredDownPaymentPercent": 10,
        "AdditionalDownPayment": 20,
        "TotalDownPayment": 25,
        "FinancedAmountSKU": "",
        "FinancedAmount": 25,
        "RebateSKU": "ACFNRB000002",
        "RebateAmount": 25,
        "VendorFeeSKU": "ACFNRB000007",
        "VendorFeeAmount": 5,
        "StoreFeeSKU": "ACFNNS000003",
        "StoreFeeAmount": 5,
        "OriginalSaleInvoiceID": 128962
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-product-financing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ProductSKU": "ASHCSA000120",
            "ProductName": "Samsung Galaxy Rugby LTE",
            "SaleInvoiceID": 128903,
            "InvoiceNumber": "84WEAIN14417",
            "Date": "2016-05-09T08:46:40.657",
            "EmployeeName": "iQmetrix Employee",
            "EmployeeID": 221,
            "CustomerID": 115326,
            "CustomerName": "Bob Smith",
            "LocationID": 1,
            "LocationName": "84 West",
            "TrackingNumber": "123440",
            "PhoneNumber": "0123465980",
            "Term": "1 Year UPGRADE",
            "Price": 25,
            "Cost": 449.95,
            "ProgramName": "Any Levels",
            "RequiredDownPayment": 5,
            "RequiredDownPaymentPercent": 10,
            "AdditionalDownPayment": 20,
            "TotalDownPayment": 25,
            "FinancedAmountSKU": "",
            "FinancedAmount": 25,
            "RebateSKU": "ACFNRB000002",
            "RebateAmount": 25,
            "VendorFeeSKU": "ACFNRB000007",
            "VendorFeeAmount": 5,
            "StoreFeeSKU": "ACFNNS000003",
            "StoreFeeAmount": 5,
            "OriginalSaleInvoiceID": 128962
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-product-financing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ProductSKU>ASHCSA000120</ProductSKU>
    <ProductName>Samsung Galaxy Rugby LTE</ProductName>
    <SaleInvoiceID>128903</SaleInvoiceID>
    <InvoiceNumber>84WEAIN14417</InvoiceNumber>
    <Date>2016-05-09T08:46:40.657</Date>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeID>221</EmployeeID>
    <CustomerID>115326</CustomerID>
    <CustomerName>Bob Smith</CustomerName>
    <LocationID>1</LocationID>
    <LocationName>84 West</LocationName>
    <TrackingNumber>123440</TrackingNumber>
    <PhoneNumber>0123465980</PhoneNumber>
    <Term>1 Year UPGRADE</Term>
    <Price>25</Price>
    <Cost>449.95</Cost>
    <ProgramName>Any Levels</ProgramName>
    <RequiredDownPayment>5</RequiredDownPayment>
    <RequiredDownPaymentPercent>10</RequiredDownPaymentPercent>
    <AdditionalDownPayment>20</AdditionalDownPayment>
    <TotalDownPayment>25</TotalDownPayment>
    <FinancedAmountSKU></FinancedAmountSKU>
    <FinancedAmount>25</FinancedAmount>
    <RebateSKU>ACFNRB000002</RebateSKU>
    <RebateAmount>25</RebateAmount>
    <VendorFeeSKU>ACFNRB000007</VendorFeeSKU>
    <VendorFeeAmount>5</VendorFeeAmount>
    <StoreFeeSKU>ACFNNS000003</StoreFeeSKU>
    <StoreFeeAmount>5</StoreFeeAmount>
    <OriginalSaleInvoiceID>128962</OriginalSaleInvoiceID>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-product-financing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ProductSKU>ASHCSA000120</ProductSKU>
    <ProductName>Samsung Galaxy Rugby LTE</ProductName>
    <SaleInvoiceID>128903</SaleInvoiceID>
    <InvoiceNumber>84WEAIN14417</InvoiceNumber>
    <Date>2016-05-09T08:46:40.657</Date>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeID>221</EmployeeID>
    <CustomerID>115326</CustomerID>
    <CustomerName>Bob Smith</CustomerName>
    <LocationID>1</LocationID>
    <LocationName>84 West</LocationName>
    <TrackingNumber>123440</TrackingNumber>
    <PhoneNumber>0123465980</PhoneNumber>
    <Term>1 Year UPGRADE</Term>
    <Price>25</Price>
    <Cost>449.95</Cost>
    <ProgramName>Any Levels</ProgramName>
    <RequiredDownPayment>5</RequiredDownPayment>
    <RequiredDownPaymentPercent>10</RequiredDownPaymentPercent>
    <AdditionalDownPayment>20</AdditionalDownPayment>
    <TotalDownPayment>25</TotalDownPayment>
    <FinancedAmountSKU></FinancedAmountSKU>
    <FinancedAmount>25</FinancedAmount>
    <RebateSKU>ACFNRB000002</RebateSKU>
    <RebateAmount>25</RebateAmount>
    <VendorFeeSKU>ACFNRB000007</VendorFeeSKU>
    <VendorFeeAmount>5</VendorFeeAmount>
    <StoreFeeSKU>ACFNNS000003</StoreFeeSKU>
    <StoreFeeAmount>5</StoreFeeAmount>
    <OriginalSaleInvoiceID>128962</OriginalSaleInvoiceID>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-product-financing-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ProductSKU,ProductName,SaleInvoiceID,InvoiceNumber,Date,EmployeeName,EmployeeID,CustomerID,CustomerName,LocationID,LocationName,TrackingNumber,PhoneNumber,Term,Price,Cost,ProgramName,RequiredDownPayment,RequiredDownPaymentPercent,AdditionalDownPayment,TotalDownPayment,FinancedAmountSKU,FinancedAmount,RebateSKU,RebateAmount,VendorFeeSKU,VendorFeeAmount,StoreFeeSKU,StoreFeeAmount,OriginalSaleInvoiceID
ASHCSA000120,Samsung Galaxy Rugby LTE,128903,84WEAIN14417,2016-05-09T08:46:40.657,iQmetrix Employee,221,115326,Bob Smith,1,84 West,123440,0123465980,1 Year UPGRADE,25,449.95,Any Levels,5,10,20,25,,25,ACFNRB000002,25,ACFNRB000007,5,ACFNNS000003,5,128962</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-financing-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-product-summary-report' class='clickable-header top-level-header'>Getting the Product Summary Report</h3>

For more information, see {{support_ProductSummaryReport}}.


<h4>Request</h4>

<pre>
GET /reports/ProductSummaryReport?StartDate={StartDate}&StopDate={StopDate}&CategoryNumber={CategoryNumber}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-product-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-product-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-product-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-product-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-product-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-product-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-product-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-product-summary-report">
<pre id="http-code-getting-the-product-summary-report"><code class="language-http">GET /reports/ProductSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-product-summary-report">
<pre id="curl-code-getting-the-product-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/ProductSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-product-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-product-summary-report"><code class="language-csharp">static IRestResponse GettingTheProductSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/ProductSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-product-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-product-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheProductSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/ProductSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-product-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-product-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/ProductSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[productsummaryreportdata](#ProductSummaryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-product-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-product-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-product-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-product-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-product-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-product-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ProductIdentifier": "AAATAP000094",
        "SpecialProductID": 0,
        "ProductName": "Apple iPhone 6 Plus 16GB White - AT&T",
        "TotalInvoiced": 949.98,
        "Adjustment": 0,
        "ExtendedUnitPrice": 949.98,
        "ExtendedUnitCost": 0,
        "ExtendedUnitProfit": 949.98,
        "PercentProfit": 100,
        "QuantitySold": 2,
        "QuantityRefunded": 0,
        "NetQuantity": 2,
        "ManufacturerPartNumber": "1234567890-pl",
        "VendorPartNumber": "10999",
        "BarCode": "738516343990"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-product-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ProductIdentifier": "AAATAP000094",
            "SpecialProductID": 0,
            "ProductName": "Apple iPhone 6 Plus 16GB White - AT&T",
            "TotalInvoiced": 949.98,
            "Adjustment": 0,
            "ExtendedUnitPrice": 949.98,
            "ExtendedUnitCost": 0,
            "ExtendedUnitProfit": 949.98,
            "PercentProfit": 100,
            "QuantitySold": 2,
            "QuantityRefunded": 0,
            "NetQuantity": 2,
            "ManufacturerPartNumber": "1234567890-pl",
            "VendorPartNumber": "10999",
            "BarCode": "738516343990"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-product-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ProductIdentifier>AAATAP000094</ProductIdentifier>
    <SpecialProductID>0</SpecialProductID>
    <ProductName>Apple iPhone 6 Plus 16GB White - AT&T</ProductName>
    <TotalInvoiced>949.98</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <ExtendedUnitPrice>949.98</ExtendedUnitPrice>
    <ExtendedUnitCost>0</ExtendedUnitCost>
    <ExtendedUnitProfit>949.98</ExtendedUnitProfit>
    <PercentProfit>100</PercentProfit>
    <QuantitySold>2</QuantitySold>
    <QuantityRefunded>0</QuantityRefunded>
    <NetQuantity>2</NetQuantity>
    <ManufacturerPartNumber>1234567890-pl</ManufacturerPartNumber>
    <VendorPartNumber>10999</VendorPartNumber>
    <BarCode>738516343990</BarCode>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-product-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ProductIdentifier>AAATAP000094</ProductIdentifier>
    <SpecialProductID>0</SpecialProductID>
    <ProductName>Apple iPhone 6 Plus 16GB White - AT&T</ProductName>
    <TotalInvoiced>949.98</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <ExtendedUnitPrice>949.98</ExtendedUnitPrice>
    <ExtendedUnitCost>0</ExtendedUnitCost>
    <ExtendedUnitProfit>949.98</ExtendedUnitProfit>
    <PercentProfit>100</PercentProfit>
    <QuantitySold>2</QuantitySold>
    <QuantityRefunded>0</QuantityRefunded>
    <NetQuantity>2</NetQuantity>
    <ManufacturerPartNumber>1234567890-pl</ManufacturerPartNumber>
    <VendorPartNumber>10999</VendorPartNumber>
    <BarCode>738516343990</BarCode>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-product-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ProductIdentifier,SpecialProductID,ProductName,TotalInvoiced,Adjustment,ExtendedUnitPrice,ExtendedUnitCost,ExtendedUnitProfit,PercentProfit,QuantitySold,QuantityRefunded,NetQuantity,ManufacturerPartNumber,VendorPartNumber,BarCode
AAATAP000094,0,Apple iPhone 6 Plus 16GB White - AT&T,949.98,0,949.98,0,949.98,100,2,0,2,1234567890-pl,10999,738516343990</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-sales-by-category-report' class='clickable-header top-level-header'>Getting the Sales By Category Report</h3>

For more information, see {{support_SalesByCategoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/SalesByCategoryReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&CategoryNumber={CategoryNumber}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. Defaults to all categories. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-sales-by-category-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-sales-by-category-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-sales-by-category-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-sales-by-category-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-sales-by-category-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-sales-by-category-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-sales-by-category-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-sales-by-category-report">
<pre id="http-code-getting-the-sales-by-category-report"><code class="language-http">GET /reports/SalesByCategoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-sales-by-category-report">
<pre id="curl-code-getting-the-sales-by-category-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCategoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-sales-by-category-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-sales-by-category-report"><code class="language-csharp">static IRestResponse GettingTheSalesByCategoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCategoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-sales-by-category-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-sales-by-category-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSalesByCategoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCategoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-sales-by-category-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-sales-by-category-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCategoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[salesbycategoryreportdata](#SalesByCategoryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-sales-by-category-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-sales-by-category-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-sales-by-category-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-sales-by-category-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-sales-by-category-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-category-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-sales-by-category-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CategoryNumber": "10101010",
        "CategoryPath": "Activations",
        "TotalInvoiced": 1,
        "Adjustment": 52.6,
        "TotalPrice": 265.62,
        "TotalCost": 363,
        "TotalProfit": 23,
        "TotalDiscount": 64,
        "PercentProfit": 20,
        "QuantitySold": 2,
        "QuantityRefunded": 1,
        "NetQuantity": 2,
        "InvoicedAtDifferentLocation": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-sales-by-category-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CategoryNumber": "10101010",
            "CategoryPath": "Activations",
            "TotalInvoiced": 1,
            "Adjustment": 52.6,
            "TotalPrice": 265.62,
            "TotalCost": 363,
            "TotalProfit": 23,
            "TotalDiscount": 64,
            "PercentProfit": 20,
            "QuantitySold": 2,
            "QuantityRefunded": 1,
            "NetQuantity": 2,
            "InvoicedAtDifferentLocation": 0
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-sales-by-category-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CategoryNumber>10101010</CategoryNumber>
    <CategoryPath>Activations</CategoryPath>
    <TotalInvoiced>1</TotalInvoiced>
    <Adjustment>52.6</Adjustment>
    <TotalPrice>265.62</TotalPrice>
    <TotalCost>363</TotalCost>
    <TotalProfit>23</TotalProfit>
    <TotalDiscount>64</TotalDiscount>
    <PercentProfit>20</PercentProfit>
    <QuantitySold>2</QuantitySold>
    <QuantityRefunded>1</QuantityRefunded>
    <NetQuantity>2</NetQuantity>
    <InvoicedAtDifferentLocation>0</InvoicedAtDifferentLocation>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-sales-by-category-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CategoryNumber>10101010</CategoryNumber>
    <CategoryPath>Activations</CategoryPath>
    <TotalInvoiced>1</TotalInvoiced>
    <Adjustment>52.6</Adjustment>
    <TotalPrice>265.62</TotalPrice>
    <TotalCost>363</TotalCost>
    <TotalProfit>23</TotalProfit>
    <TotalDiscount>64</TotalDiscount>
    <PercentProfit>20</PercentProfit>
    <QuantitySold>2</QuantitySold>
    <QuantityRefunded>1</QuantityRefunded>
    <NetQuantity>2</NetQuantity>
    <InvoicedAtDifferentLocation>0</InvoicedAtDifferentLocation>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-sales-by-category-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CategoryNumber,CategoryPath,TotalInvoiced,Adjustment,TotalPrice,TotalCost,TotalProfit,TotalDiscount,PercentProfit,QuantitySold,QuantityRefunded,NetQuantity,InvoicedAtDifferentLocation
10101010,Activations,1,52.6,265.62,363,23,64,20,2,1,2,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-category-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-sales-by-customer-report' class='clickable-header top-level-header'>Getting the Sales by Customer Report</h3>

For more information, see {{support_SalesByCustomerReport}}.


<h4>Request</h4>

<pre>
GET /reports/SalesByCustomerReport?StartDate={StartDate}&StopDate={StopDate}&ShowVendorRebate={ShowVendorRebate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ShowVendorRebate</code> (<strong>Required</strong>)  - A flag to indicate if vendor rebates should be included in the report (true) or not (false)
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. Defaults to all categories. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-sales-by-customer-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-sales-by-customer-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-sales-by-customer-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-sales-by-customer-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-sales-by-customer-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-sales-by-customer-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-sales-by-customer-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-sales-by-customer-report">
<pre id="http-code-getting-the-sales-by-customer-report"><code class="language-http">GET /reports/SalesByCustomerReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShowVendorRebate=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-sales-by-customer-report">
<pre id="curl-code-getting-the-sales-by-customer-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCustomerReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShowVendorRebate=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-sales-by-customer-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-sales-by-customer-report"><code class="language-csharp">static IRestResponse GettingTheSalesByCustomerReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCustomerReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShowVendorRebate=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-sales-by-customer-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-sales-by-customer-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSalesByCustomerReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCustomerReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShowVendorRebate=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-sales-by-customer-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-sales-by-customer-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/SalesByCustomerReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShowVendorRebate=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[salesbycustomerreportdata](#SalesByCustomerReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-sales-by-customer-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-sales-by-customer-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-sales-by-customer-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-sales-by-customer-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-sales-by-customer-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-customer-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-sales-by-customer-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CustomerID": 57818,
        "CustomerName": "Ann Fox",
        "Customer_CompanyName": "KENTEL",
        "Customer_LastName": "Ann Fox",
        "CustomerAddress": "8105 Blanche Dr",
        "CustomerCity": "Panama City",
        "CustomerProvinceOrState": "FL",
        "CustomerCountry": "United States",
        "CustomerPostalCode": "32404",
        "CustomInteger1": "12",
        "CustomInteger2": "1",
        "CustomDate1": "2016-01-01T00:00:00",
        "CustomDate2": "2016-01-01T00:00:00",
        "CustomText1": "March",
        "CustomText2": "Orange",
        "CompanySize": "200",
        "CustomDropDown1": "2112",
        "CustomDropDown2": "Orange",
        "CustomDropDown3": "Three",
        "CustomDropDown4": "Ph.D",
        "CustomDropDown5": "Enabled",
        "TotalInvoiced": 1210.02,
        "Adjustment": 0,
        "TotalPrice": 1185.01,
        "TotalCost": 18.01,
        "TotalCoupon": 0,
        "TotalCouponTax": 0,
        "TotalProfit": 1167,
        "TotalDiscount": -784.01,
        "PercentProfit": 98.48,
        "QuantitySold": 18,
        "QuantityRefunded": -6,
        "NetQuantity": 12,
        "InvoicedAtDifferentLocation": 0,
        "CustomerIdentifier": "C10KNRVY",
        "BillingAccountNumber": "5555555555",
        "FinancedAmount": 0,
        "TotalDownPayment": 0,
        "TypeOfCustomer": 3
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-sales-by-customer-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CustomerID": 57818,
            "CustomerName": "Ann Fox",
            "Customer_CompanyName": "KENTEL",
            "Customer_LastName": "Ann Fox",
            "CustomerAddress": "8105 Blanche Dr",
            "CustomerCity": "Panama City",
            "CustomerProvinceOrState": "FL",
            "CustomerCountry": "United States",
            "CustomerPostalCode": "32404",
            "CustomInteger1": "12",
            "CustomInteger2": "1",
            "CustomDate1": "2016-01-01T00:00:00",
            "CustomDate2": "2016-01-01T00:00:00",
            "CustomText1": "March",
            "CustomText2": "Orange",
            "CompanySize": "200",
            "CustomDropDown1": "2112",
            "CustomDropDown2": "Orange",
            "CustomDropDown3": "Three",
            "CustomDropDown4": "Ph.D",
            "CustomDropDown5": "Enabled",
            "TotalInvoiced": 1210.02,
            "Adjustment": 0,
            "TotalPrice": 1185.01,
            "TotalCost": 18.01,
            "TotalCoupon": 0,
            "TotalCouponTax": 0,
            "TotalProfit": 1167,
            "TotalDiscount": -784.01,
            "PercentProfit": 98.48,
            "QuantitySold": 18,
            "QuantityRefunded": -6,
            "NetQuantity": 12,
            "InvoicedAtDifferentLocation": 0,
            "CustomerIdentifier": "C10KNRVY",
            "BillingAccountNumber": "5555555555",
            "FinancedAmount": 0,
            "TotalDownPayment": 0,
            "TypeOfCustomer": 3
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-sales-by-customer-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerID>57818</CustomerID>
    <CustomerName>Ann Fox</CustomerName>
    <Customer_CompanyName>KENTEL</Customer_CompanyName>
    <Customer_LastName>Ann Fox</Customer_LastName>
    <CustomerAddress>8105 Blanche Dr</CustomerAddress>
    <CustomerCity>Panama City</CustomerCity>
    <CustomerProvinceOrState>FL</CustomerProvinceOrState>
    <CustomerCountry>United States</CustomerCountry>
    <CustomerPostalCode>32404</CustomerPostalCode>
    <CustomInteger1>12</CustomInteger1>
    <CustomInteger2>1</CustomInteger2>
    <CustomDate1>2016-01-01T00:00:00</CustomDate1>
    <CustomDate2>2016-01-01T00:00:00</CustomDate2>
    <CustomText1>March</CustomText1>
    <CustomText2>Orange</CustomText2>
    <CompanySize>200</CompanySize>
    <CustomDropDown1>2112</CustomDropDown1>
    <CustomDropDown2>Orange</CustomDropDown2>
    <CustomDropDown3>Three</CustomDropDown3>
    <CustomDropDown4>Ph.D</CustomDropDown4>
    <CustomDropDown5>Enabled</CustomDropDown5>
    <TotalInvoiced>1210.02</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <TotalPrice>1185.01</TotalPrice>
    <TotalCost>18.01</TotalCost>
    <TotalCoupon>0</TotalCoupon>
    <TotalCouponTax>0</TotalCouponTax>
    <TotalProfit>1167</TotalProfit>
    <TotalDiscount>-784.01</TotalDiscount>
    <PercentProfit>98.48</PercentProfit>
    <QuantitySold>18</QuantitySold>
    <QuantityRefunded>-6</QuantityRefunded>
    <NetQuantity>12</NetQuantity>
    <InvoicedAtDifferentLocation>0</InvoicedAtDifferentLocation>
    <CustomerIdentifier>C10KNRVY</CustomerIdentifier>
    <BillingAccountNumber>5555555555</BillingAccountNumber>
    <FinancedAmount>0</FinancedAmount>
    <TotalDownPayment>0</TotalDownPayment>
    <TypeOfCustomer>3</TypeOfCustomer>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-sales-by-customer-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerID>57818</CustomerID>
    <CustomerName>Ann Fox</CustomerName>
    <Customer_CompanyName>KENTEL</Customer_CompanyName>
    <Customer_LastName>Ann Fox</Customer_LastName>
    <CustomerAddress>8105 Blanche Dr</CustomerAddress>
    <CustomerCity>Panama City</CustomerCity>
    <CustomerProvinceOrState>FL</CustomerProvinceOrState>
    <CustomerCountry>United States</CustomerCountry>
    <CustomerPostalCode>32404</CustomerPostalCode>
    <CustomInteger1>12</CustomInteger1>
    <CustomInteger2>1</CustomInteger2>
    <CustomDate1>2016-01-01T00:00:00</CustomDate1>
    <CustomDate2>2016-01-01T00:00:00</CustomDate2>
    <CustomText1>March</CustomText1>
    <CustomText2>Orange</CustomText2>
    <CompanySize>200</CompanySize>
    <CustomDropDown1>2112</CustomDropDown1>
    <CustomDropDown2>Orange</CustomDropDown2>
    <CustomDropDown3>Three</CustomDropDown3>
    <CustomDropDown4>Ph.D</CustomDropDown4>
    <CustomDropDown5>Enabled</CustomDropDown5>
    <TotalInvoiced>1210.02</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <TotalPrice>1185.01</TotalPrice>
    <TotalCost>18.01</TotalCost>
    <TotalCoupon>0</TotalCoupon>
    <TotalCouponTax>0</TotalCouponTax>
    <TotalProfit>1167</TotalProfit>
    <TotalDiscount>-784.01</TotalDiscount>
    <PercentProfit>98.48</PercentProfit>
    <QuantitySold>18</QuantitySold>
    <QuantityRefunded>-6</QuantityRefunded>
    <NetQuantity>12</NetQuantity>
    <InvoicedAtDifferentLocation>0</InvoicedAtDifferentLocation>
    <CustomerIdentifier>C10KNRVY</CustomerIdentifier>
    <BillingAccountNumber>5555555555</BillingAccountNumber>
    <FinancedAmount>0</FinancedAmount>
    <TotalDownPayment>0</TotalDownPayment>
    <TypeOfCustomer>3</TypeOfCustomer>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-sales-by-customer-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CustomerID,CustomerName,Customer_CompanyName,Customer_LastName,CustomerAddress,CustomerCity,CustomerProvinceOrState,CustomerCountry,CustomerPostalCode,CustomInteger1,CustomInteger2,CustomDate1,CustomDate2,CustomText1,CustomText2,CompanySize,CustomDropDown1,CustomDropDown2,CustomDropDown3,CustomDropDown4,CustomDropDown5,TotalInvoiced,Adjustment,TotalPrice,TotalCost,TotalCoupon,TotalCouponTax,TotalProfit,TotalDiscount,PercentProfit,QuantitySold,QuantityRefunded,NetQuantity,InvoicedAtDifferentLocation,CustomerIdentifier,BillingAccountNumber,FinancedAmount,TotalDownPayment,TypeOfCustomer
57818,Ann Fox,KENTEL,Ann Fox,8105 Blanche Dr,Panama City,FL,United States,32404,12,1,2016-01-01T00:00:00,2016-01-01T00:00:00,March,Orange,200,2112,Orange,Three,Ph.D,Enabled,1210.02,0,1185.01,18.01,0,0,1167,-784.01,98.48,18,-6,12,0,C10KNRVY,5555555555,0,0,3</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-customer-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-sales-by-employee-report' class='clickable-header top-level-header'>Getting the Sales by Employee Report</h3>

For more information, see {{support_SalesByEmployeeReport}}.


<h4>Request</h4>

<pre>
GET /reports/SalesByEmployeeReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&AssignedGroupID={AssignedGroupID}&CommissionGroupID={CommissionGroupID}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. Defaults to all categories. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>AssignedGroupID</code> (Optional)  - Identifier for an assigned <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#group'>Group</a> in RQ. Defaults to all groups. For a complete list see <a href="/api/RQ-Data-Connect/#getting-a-list-of-groups-in-rq">Getting A List of Groups in RQ</a>
    </li>
    
    <li>
        <code>CommissionGroupID</code> (Optional)  - Identifier for a commission <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#group'>Group</a> in RQ. Defaults to all groups. For a complete list see <a href="/api/RQ-Data-Connect/#getting-a-list-of-groups-in-rq">Getting A List of Groups in RQ</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-sales-by-employee-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-sales-by-employee-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-sales-by-employee-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-sales-by-employee-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-sales-by-employee-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-sales-by-employee-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-sales-by-employee-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-sales-by-employee-report">
<pre id="http-code-getting-the-sales-by-employee-report"><code class="language-http">GET /reports/SalesByEmployeeReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&AssignedGroupID=2&CommissionGroupID=2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-sales-by-employee-report">
<pre id="curl-code-getting-the-sales-by-employee-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/SalesByEmployeeReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&AssignedGroupID=2&CommissionGroupID=2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-sales-by-employee-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-sales-by-employee-report"><code class="language-csharp">static IRestResponse GettingTheSalesByEmployeeReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByEmployeeReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&AssignedGroupID=2&CommissionGroupID=2");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-sales-by-employee-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-sales-by-employee-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSalesByEmployeeReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByEmployeeReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&AssignedGroupID=2&CommissionGroupID=2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-sales-by-employee-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-sales-by-employee-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/SalesByEmployeeReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&AssignedGroupID=2&CommissionGroupID=2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[salesbyemployeereportdata](#SalesByEmployeeReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-sales-by-employee-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-sales-by-employee-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-sales-by-employee-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-sales-by-employee-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-sales-by-employee-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-employee-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-sales-by-employee-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "EmployeeID": 256,
        "EmployeeName": "iQmetrix Employee",
        "EmployeeSpecialIdentifier": "912345987654321",
        "StoreInStoreFlowIsEnabledForAtLeastOneStore": 0,
        "QtySold": 50,
        "QtyRefunded": 0,
        "NetQty": 50,
        "TotalInvoiced": 1825.74,
        "Adjustment": 0,
        "TotalSales": 1825.74,
        "TotalStoreInStoreSales": 0,
        "RoundingVariance": 0.26,
        "TotalCost": 284.33,
        "TotalCoupon": 5,
        "TotalCouponTax": 0,
        "TotalProfit": 1536.41,
        "TotalStoreInStoreProfit": 0,
        "TotalCommission": 0,
        "EmployeeUsername": "iQmetrix.Employee"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-sales-by-employee-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "EmployeeID": 256,
            "EmployeeName": "iQmetrix Employee",
            "EmployeeSpecialIdentifier": "912345987654321",
            "StoreInStoreFlowIsEnabledForAtLeastOneStore": 0,
            "QtySold": 50,
            "QtyRefunded": 0,
            "NetQty": 50,
            "TotalInvoiced": 1825.74,
            "Adjustment": 0,
            "TotalSales": 1825.74,
            "TotalStoreInStoreSales": 0,
            "RoundingVariance": 0.26,
            "TotalCost": 284.33,
            "TotalCoupon": 5,
            "TotalCouponTax": 0,
            "TotalProfit": 1536.41,
            "TotalStoreInStoreProfit": 0,
            "TotalCommission": 0,
            "EmployeeUsername": "iQmetrix.Employee"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-sales-by-employee-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EmployeeID>256</EmployeeID>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeSpecialIdentifier>912345987654321</EmployeeSpecialIdentifier>
    <StoreInStoreFlowIsEnabledForAtLeastOneStore>0</StoreInStoreFlowIsEnabledForAtLeastOneStore>
    <QtySold>50</QtySold>
    <QtyRefunded>0</QtyRefunded>
    <NetQty>50</NetQty>
    <TotalInvoiced>1825.74</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <TotalSales>1825.74</TotalSales>
    <TotalStoreInStoreSales>0</TotalStoreInStoreSales>
    <RoundingVariance>0.26</RoundingVariance>
    <TotalCost>284.33</TotalCost>
    <TotalCoupon>5</TotalCoupon>
    <TotalCouponTax>0</TotalCouponTax>
    <TotalProfit>1536.41</TotalProfit>
    <TotalStoreInStoreProfit>0</TotalStoreInStoreProfit>
    <TotalCommission>0</TotalCommission>
    <EmployeeUsername>iQmetrix.Employee</EmployeeUsername>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-sales-by-employee-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EmployeeID>256</EmployeeID>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeSpecialIdentifier>912345987654321</EmployeeSpecialIdentifier>
    <StoreInStoreFlowIsEnabledForAtLeastOneStore>0</StoreInStoreFlowIsEnabledForAtLeastOneStore>
    <QtySold>50</QtySold>
    <QtyRefunded>0</QtyRefunded>
    <NetQty>50</NetQty>
    <TotalInvoiced>1825.74</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <TotalSales>1825.74</TotalSales>
    <TotalStoreInStoreSales>0</TotalStoreInStoreSales>
    <RoundingVariance>0.26</RoundingVariance>
    <TotalCost>284.33</TotalCost>
    <TotalCoupon>5</TotalCoupon>
    <TotalCouponTax>0</TotalCouponTax>
    <TotalProfit>1536.41</TotalProfit>
    <TotalStoreInStoreProfit>0</TotalStoreInStoreProfit>
    <TotalCommission>0</TotalCommission>
    <EmployeeUsername>iQmetrix.Employee</EmployeeUsername>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-sales-by-employee-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>EmployeeID,EmployeeName,EmployeeSpecialIdentifier,StoreInStoreFlowIsEnabledForAtLeastOneStore,QtySold,QtyRefunded,NetQty,TotalInvoiced,Adjustment,TotalSales,TotalStoreInStoreSales,RoundingVariance,TotalCost,TotalCoupon,TotalCouponTax,TotalProfit,TotalStoreInStoreProfit,TotalCommission,EmployeeUsername
256,iQmetrix Employee,912345987654321,0,50,0,50,1825.74,0,1825.74,0,0.26,284.33,5,0,1536.41,0,0,iQmetrix.Employee</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-employee-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-sales-by-invoice-report' class='clickable-header top-level-header'>Getting the Sales By Invoice Report</h3>

For more information, see {{support_SalesByInvoiceReport}}.      


<h4>Request</h4>

<pre>
GET /reports/SalesByInvoiceReport?StartDate={StartDate}&StopDate={StopDate}&HideRebates={HideRebates}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-sales-by-invoice-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-sales-by-invoice-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-sales-by-invoice-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-sales-by-invoice-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-sales-by-invoice-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-sales-by-invoice-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-sales-by-invoice-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-sales-by-invoice-report">
<pre id="http-code-getting-the-sales-by-invoice-report"><code class="language-http">GET /reports/SalesByInvoiceReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-sales-by-invoice-report">
<pre id="curl-code-getting-the-sales-by-invoice-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/SalesByInvoiceReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-sales-by-invoice-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-sales-by-invoice-report"><code class="language-csharp">static IRestResponse GettingTheSalesByInvoiceReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByInvoiceReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-sales-by-invoice-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-sales-by-invoice-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSalesByInvoiceReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByInvoiceReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-sales-by-invoice-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-sales-by-invoice-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/SalesByInvoiceReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[salesbyinvoicereportdata](#SalesByInvoiceReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-sales-by-invoice-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-sales-by-invoice-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-sales-by-invoice-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-sales-by-invoice-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-sales-by-invoice-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-invoice-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-sales-by-invoice-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Adjustment": 0,
        "ChannelName": "English Channel",
        "Comments": "Comment",
        "CustomerID": 131149,
        "CustomerName": "Bob Jones",
        "DateCreated": "2016-05-13T12:18:08.723",
        "DistrictName": "Westminster",
        "Earned": null,
        "FinancedAmount": 75,
        "InvoiceEmailed": 0,
        "InvoiceIDByStore": "REDSTIN916",
        "Redeemed": null,
        "RefundCodeID": "null",
        "RegionName": "London",
        "RoundingVariance": 0,
        "SaleInvoiceID": 129036,
        "SoldBy": "iQmetrix User",
        "SoldByUserName": "iQmetrix.User",
        "StoreID": 1,
        "StoreInStoreFlowIsEnabledForStore": false,
        "StoreName": "100: My Network LLC - Anchorage",
        "StoreName2": "100: My Network LLC - Anchorage",
        "TenderedBy": "iQmetrix User",
        "TenderedByUserName": "iQmetrix.User",
        "TotalAfterTax": 26,
        "TotalCost": 0,
        "TotalCoupon": 0,
        "TotalDonations": 0,
        "TotalDownPayment": 25,
        "TotalExtraCharges": 0,
        "TotalGiftCard": 0,
        "TotalInvoiced": 26,
        "TotalNRP": 0,
        "TotalProfit": 164,
        "TotalSales": 164,
        "TotalStoreInStoreProfit": 0,
        "TotalStoreInStoreSales": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-sales-by-invoice-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Adjustment": 0,
            "ChannelName": "English Channel",
            "Comments": "Comment",
            "CustomerID": 131149,
            "CustomerName": "Bob Jones",
            "DateCreated": "2016-05-13T12:18:08.723",
            "DistrictName": "Westminster",
            "Earned": null,
            "FinancedAmount": 75,
            "InvoiceEmailed": 0,
            "InvoiceIDByStore": "REDSTIN916",
            "Redeemed": null,
            "RefundCodeID": "null",
            "RegionName": "London",
            "RoundingVariance": 0,
            "SaleInvoiceID": 129036,
            "SoldBy": "iQmetrix User",
            "SoldByUserName": "iQmetrix.User",
            "StoreID": 1,
            "StoreInStoreFlowIsEnabledForStore": false,
            "StoreName": "100: My Network LLC - Anchorage",
            "StoreName2": "100: My Network LLC - Anchorage",
            "TenderedBy": "iQmetrix User",
            "TenderedByUserName": "iQmetrix.User",
            "TotalAfterTax": 26,
            "TotalCost": 0,
            "TotalCoupon": 0,
            "TotalDonations": 0,
            "TotalDownPayment": 25,
            "TotalExtraCharges": 0,
            "TotalGiftCard": 0,
            "TotalInvoiced": 26,
            "TotalNRP": 0,
            "TotalProfit": 164,
            "TotalSales": 164,
            "TotalStoreInStoreProfit": 0,
            "TotalStoreInStoreSales": 0
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-sales-by-invoice-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Adjustment>0</Adjustment>
    <ChannelName>English Channel</ChannelName>
    <Comments>Comment</Comments>
    <CustomerID>131149</CustomerID>
    <CustomerName>Bob Jones</CustomerName>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <DistrictName>Westminster</DistrictName>
    <Earned>null</Earned>
    <FinancedAmount>75</FinancedAmount>
    <InvoiceEmailed>0</InvoiceEmailed>
    <InvoiceIDByStore>REDSTIN916</InvoiceIDByStore>
    <Redeemed>null</Redeemed>
    <RefundCodeID>null</RefundCodeID>
    <RegionName>London</RegionName>
    <RoundingVariance>0</RoundingVariance>
    <SaleInvoiceID>129036</SaleInvoiceID>
    <SoldBy>iQmetrix User</SoldBy>
    <SoldByUserName>iQmetrix.User</SoldByUserName>
    <StoreID>1</StoreID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <StoreName2>100: My Network LLC - Anchorage</StoreName2>
    <TenderedBy>iQmetrix User</TenderedBy>
    <TenderedByUserName>iQmetrix.User</TenderedByUserName>
    <TotalAfterTax>26</TotalAfterTax>
    <TotalCost>0</TotalCost>
    <TotalCoupon>0</TotalCoupon>
    <TotalDonations>0</TotalDonations>
    <TotalDownPayment>25</TotalDownPayment>
    <TotalExtraCharges>0</TotalExtraCharges>
    <TotalGiftCard>0</TotalGiftCard>
    <TotalInvoiced>26</TotalInvoiced>
    <TotalNRP>0</TotalNRP>
    <TotalProfit>164</TotalProfit>
    <TotalSales>164</TotalSales>
    <TotalStoreInStoreProfit>0</TotalStoreInStoreProfit>
    <TotalStoreInStoreSales>0</TotalStoreInStoreSales>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-sales-by-invoice-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Adjustment>0</Adjustment>
    <ChannelName>English Channel</ChannelName>
    <Comments>Comment</Comments>
    <CustomerID>131149</CustomerID>
    <CustomerName>Bob Jones</CustomerName>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <DistrictName>Westminster</DistrictName>
    <Earned>null</Earned>
    <FinancedAmount>75</FinancedAmount>
    <InvoiceEmailed>0</InvoiceEmailed>
    <InvoiceIDByStore>REDSTIN916</InvoiceIDByStore>
    <Redeemed>null</Redeemed>
    <RefundCodeID>null</RefundCodeID>
    <RegionName>London</RegionName>
    <RoundingVariance>0</RoundingVariance>
    <SaleInvoiceID>129036</SaleInvoiceID>
    <SoldBy>iQmetrix User</SoldBy>
    <SoldByUserName>iQmetrix.User</SoldByUserName>
    <StoreID>1</StoreID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <StoreName2>100: My Network LLC - Anchorage</StoreName2>
    <TenderedBy>iQmetrix User</TenderedBy>
    <TenderedByUserName>iQmetrix.User</TenderedByUserName>
    <TotalAfterTax>26</TotalAfterTax>
    <TotalCost>0</TotalCost>
    <TotalCoupon>0</TotalCoupon>
    <TotalDonations>0</TotalDonations>
    <TotalDownPayment>25</TotalDownPayment>
    <TotalExtraCharges>0</TotalExtraCharges>
    <TotalGiftCard>0</TotalGiftCard>
    <TotalInvoiced>26</TotalInvoiced>
    <TotalNRP>0</TotalNRP>
    <TotalProfit>164</TotalProfit>
    <TotalSales>164</TotalSales>
    <TotalStoreInStoreProfit>0</TotalStoreInStoreProfit>
    <TotalStoreInStoreSales>0</TotalStoreInStoreSales>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-sales-by-invoice-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Adjustment,ChannelName,Comments,CustomerID,CustomerName,DateCreated,DistrictName,Earned,FinancedAmount,InvoiceEmailed,InvoiceIDByStore,Redeemed,RefundCodeID,RegionName,RoundingVariance,SaleInvoiceID,SoldBy,SoldByUserName,StoreID,StoreInStoreFlowIsEnabledForStore,StoreName,StoreName2,TenderedBy,TenderedByUserName,TotalAfterTax,TotalCost,TotalCoupon,TotalDonations,TotalDownPayment,TotalExtraCharges,TotalGiftCard,TotalInvoiced,TotalNRP,TotalProfit,TotalSales,TotalStoreInStoreProfit,TotalStoreInStoreSales
0,English Channel,Comment,131149,Bob Jones,2016-05-13T12:18:08.723,Westminster,null,75,0,REDSTIN916,null,null,London,0,129036,iQmetrix User,iQmetrix.User,1,false,100: My Network LLC - Anchorage,100: My Network LLC - Anchorage,iQmetrix User,iQmetrix.User,26,0,0,0,25,0,0,26,0,164,164,0,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-invoice-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-sales-by-location-report' class='clickable-header top-level-header'>Getting the Sales By Location Report</h3>

For more information, see {{support_SalesByLocationReport}}.


<h4>Request</h4>

<pre>
GET /reports/SalesByLocationReport?StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&StoreTypeID={StoreTypeID}&ByDate={ByMonth}&CouponIDs={CouponIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for All Products, 2 for Regular Products, 3 for Vendor Rebates, 4 for Non-Stocked Products, 5 for Gift Cards, 6 for Products In This Category (use CategoryNumber param), 7 for This Product (use ProductIdentifier param), 8 for Coupons (use CouponIDs param) or 9 for Non-Revenue Products
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Use with SearchMethod 6. Identifier for a CategoryNumber. For a complete list see <a href='/api/RQ-Data-Connect/#getting-category-numbers'>Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Use with SearchMethod 7. Product SKU
    </li>
    
    <li>
        <code>StoreTypeID</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#storetype'>StoreType</a>. Use -1 to specify All Types. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-store-types'>Getting Store Types</a>
    </li>
    
    <li>
        <code>ByMonth</code> (Optional)  - A flag to indicate if the report should display sales by month
    </li>
    
    <li>
        <code>CouponIDs</code> (Optional)  - Use with SearchMethod 8. Comma seperated list <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#coupon'>Coupon</a> identifiers. For a complete list see <a href='/api/RQ-Data-Connect/#getting-a-list-of-coupons-in-rq'>Getting A List of Coupons in RQ</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-sales-by-location-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-sales-by-location-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-sales-by-location-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-sales-by-location-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-sales-by-location-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-sales-by-location-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-sales-by-location-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-sales-by-location-report">
<pre id="http-code-getting-the-sales-by-location-report"><code class="language-http">GET /reports/SalesByLocationReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&StoreTypeID=-1&ByDate=ByMonth&CouponIDs=-1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-sales-by-location-report">
<pre id="curl-code-getting-the-sales-by-location-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/SalesByLocationReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&StoreTypeID=-1&ByDate=ByMonth&CouponIDs=-1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-sales-by-location-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-sales-by-location-report"><code class="language-csharp">static IRestResponse GettingTheSalesByLocationReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByLocationReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&StoreTypeID=-1&ByDate=ByMonth&CouponIDs=-1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-sales-by-location-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-sales-by-location-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSalesByLocationReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/SalesByLocationReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&StoreTypeID=-1&ByDate=ByMonth&CouponIDs=-1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-sales-by-location-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-sales-by-location-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/SalesByLocationReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&CategoryNumber=10&ProductIdentifier=ASCLMO000001&StoreTypeID=-1&ByDate=ByMonth&CouponIDs=-1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[salesbylocationreportdata](#SalesByLocationReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-sales-by-location-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-sales-by-location-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-sales-by-location-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-sales-by-location-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-sales-by-location-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-location-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-sales-by-location-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "StoreID": 1,
        "StoreTypeName": "Retail Store",
        "StoreName": "84 West",
        "Date": 1,
        "DateName": "2016-01-01T00:00:00",
        "StoreInStoreFlowIsEnabledForStore": false,
        "QtySold": 283,
        "QtyRefunded": -23,
        "NetQty": 260,
        "TotalInvoiced": 17738.1,
        "Adjustment": 0,
        "Net": 16293.58,
        "StoreInStoreNet": 0,
        "Cost": 90004818.51,
        "Coupon": 77.48,
        "CouponTax": 1,
        "Profit": -89988524.93,
        "StoreInStoreGrossProfit": 0,
        "RegionName": "Region A",
        "DistrictName": "Valley Area District",
        "ChannelName": "Regina Channel",
        "RoundingVariance": 0.6
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-sales-by-location-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "StoreID": 1,
            "StoreTypeName": "Retail Store",
            "StoreName": "84 West",
            "Date": 1,
            "DateName": "2016-01-01T00:00:00",
            "StoreInStoreFlowIsEnabledForStore": false,
            "QtySold": 283,
            "QtyRefunded": -23,
            "NetQty": 260,
            "TotalInvoiced": 17738.1,
            "Adjustment": 0,
            "Net": 16293.58,
            "StoreInStoreNet": 0,
            "Cost": 90004818.51,
            "Coupon": 77.48,
            "CouponTax": 1,
            "Profit": -89988524.93,
            "StoreInStoreGrossProfit": 0,
            "RegionName": "Region A",
            "DistrictName": "Valley Area District",
            "ChannelName": "Regina Channel",
            "RoundingVariance": 0.6
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-sales-by-location-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1</StoreID>
    <StoreTypeName>Retail Store</StoreTypeName>
    <StoreName>84 West</StoreName>
    <Date>1</Date>
    <DateName>2016-01-01T00:00:00</DateName>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <QtySold>283</QtySold>
    <QtyRefunded>-23</QtyRefunded>
    <NetQty>260</NetQty>
    <TotalInvoiced>17738.1</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <Net>16293.58</Net>
    <StoreInStoreNet>0</StoreInStoreNet>
    <Cost>90004818.51</Cost>
    <Coupon>77.48</Coupon>
    <CouponTax>1</CouponTax>
    <Profit>-89988524.93</Profit>
    <StoreInStoreGrossProfit>0</StoreInStoreGrossProfit>
    <RegionName>Region A</RegionName>
    <DistrictName>Valley Area District</DistrictName>
    <ChannelName>Regina Channel</ChannelName>
    <RoundingVariance>0.6</RoundingVariance>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-sales-by-location-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1</StoreID>
    <StoreTypeName>Retail Store</StoreTypeName>
    <StoreName>84 West</StoreName>
    <Date>1</Date>
    <DateName>2016-01-01T00:00:00</DateName>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <QtySold>283</QtySold>
    <QtyRefunded>-23</QtyRefunded>
    <NetQty>260</NetQty>
    <TotalInvoiced>17738.1</TotalInvoiced>
    <Adjustment>0</Adjustment>
    <Net>16293.58</Net>
    <StoreInStoreNet>0</StoreInStoreNet>
    <Cost>90004818.51</Cost>
    <Coupon>77.48</Coupon>
    <CouponTax>1</CouponTax>
    <Profit>-89988524.93</Profit>
    <StoreInStoreGrossProfit>0</StoreInStoreGrossProfit>
    <RegionName>Region A</RegionName>
    <DistrictName>Valley Area District</DistrictName>
    <ChannelName>Regina Channel</ChannelName>
    <RoundingVariance>0.6</RoundingVariance>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-sales-by-location-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>StoreID,StoreTypeName,StoreName,Date,DateName,StoreInStoreFlowIsEnabledForStore,QtySold,QtyRefunded,NetQty,TotalInvoiced,Adjustment,Net,StoreInStoreNet,Cost,Coupon,CouponTax,Profit,StoreInStoreGrossProfit,RegionName,DistrictName,ChannelName,RoundingVariance
1,Retail Store,84 West,1,2016-01-01T00:00:00,false,283,-23,260,17738.1,0,16293.58,0,90004818.51,77.48,1,-89988524.93,0,Region A,Valley Area District,Regina Channel,0.6</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-by-location-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-sales-forecast-report' class='clickable-header top-level-header'>Getting the Sales Forecast Report</h3>

For more information, see {{support_SalesForecastReport}}.      


<h4>Request</h4>

<pre>
GET /reports/SalesForecastReport?DateAsOf={DateAsOf}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&CategoryNumber={CategoryNumber}&CouponIDs={CouponIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>DateAsOf</code> (<strong>Required</strong>)  - Date at which to run report
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. Defaults to all categories. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>CouponIDs</code> (Optional)  - Comma seperated list <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#coupon'>Coupon</a> identifiers. For a complete list see <a href="/api/RQ-Data-Connect/#getting-a-list-of-coupons-in-rq">Getting A List of Coupons in RQ</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-sales-forecast-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-sales-forecast-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-sales-forecast-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-sales-forecast-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-sales-forecast-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-sales-forecast-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-sales-forecast-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-sales-forecast-report">
<pre id="http-code-getting-the-sales-forecast-report"><code class="language-http">GET /reports/SalesForecastReport?DateAsOf=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&CouponIDs=-1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-sales-forecast-report">
<pre id="curl-code-getting-the-sales-forecast-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/SalesForecastReport?DateAsOf=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&CouponIDs=-1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-sales-forecast-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-sales-forecast-report"><code class="language-csharp">static IRestResponse GettingTheSalesForecastReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/SalesForecastReport?DateAsOf=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&CouponIDs=-1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-sales-forecast-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-sales-forecast-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSalesForecastReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/SalesForecastReport?DateAsOf=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&CouponIDs=-1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-sales-forecast-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-sales-forecast-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/SalesForecastReport?DateAsOf=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&CouponIDs=-1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[salesforecastreportdata](#SalesForecastReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-sales-forecast-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-sales-forecast-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-sales-forecast-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-sales-forecast-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-sales-forecast-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-forecast-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-sales-forecast-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CategoryName": "@ Activations (Price Sheets)",
        "QtyThisMonth": 10,
        "NetThisMonth": 19.65,
        "ProfitThisMonth": 9.64,
        "QtyThisMonthLastYear": 15,
        "NetThisMonthLastYear": 40.5,
        "ProfitThisMonthLastYear": 10.12,
        "QtyThisYear": 150,
        "NetThisYear": 476.5,
        "ProfitThisYear": 456.25,
        "QtyLastYear": 160,
        "NetLastYear": 4579.54,
        "ProfitLastYear": 4876.57,
        "OrderBy": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-sales-forecast-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CategoryName": "@ Activations (Price Sheets)",
            "QtyThisMonth": 10,
            "NetThisMonth": 19.65,
            "ProfitThisMonth": 9.64,
            "QtyThisMonthLastYear": 15,
            "NetThisMonthLastYear": 40.5,
            "ProfitThisMonthLastYear": 10.12,
            "QtyThisYear": 150,
            "NetThisYear": 476.5,
            "ProfitThisYear": 456.25,
            "QtyLastYear": 160,
            "NetLastYear": 4579.54,
            "ProfitLastYear": 4876.57,
            "OrderBy": 0
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-sales-forecast-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CategoryName>@ Activations (Price Sheets)</CategoryName>
    <QtyThisMonth>10</QtyThisMonth>
    <NetThisMonth>19.65</NetThisMonth>
    <ProfitThisMonth>9.64</ProfitThisMonth>
    <QtyThisMonthLastYear>15</QtyThisMonthLastYear>
    <NetThisMonthLastYear>40.5</NetThisMonthLastYear>
    <ProfitThisMonthLastYear>10.12</ProfitThisMonthLastYear>
    <QtyThisYear>150</QtyThisYear>
    <NetThisYear>476.5</NetThisYear>
    <ProfitThisYear>456.25</ProfitThisYear>
    <QtyLastYear>160</QtyLastYear>
    <NetLastYear>4579.54</NetLastYear>
    <ProfitLastYear>4876.57</ProfitLastYear>
    <OrderBy>0</OrderBy>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-sales-forecast-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CategoryName>@ Activations (Price Sheets)</CategoryName>
    <QtyThisMonth>10</QtyThisMonth>
    <NetThisMonth>19.65</NetThisMonth>
    <ProfitThisMonth>9.64</ProfitThisMonth>
    <QtyThisMonthLastYear>15</QtyThisMonthLastYear>
    <NetThisMonthLastYear>40.5</NetThisMonthLastYear>
    <ProfitThisMonthLastYear>10.12</ProfitThisMonthLastYear>
    <QtyThisYear>150</QtyThisYear>
    <NetThisYear>476.5</NetThisYear>
    <ProfitThisYear>456.25</ProfitThisYear>
    <QtyLastYear>160</QtyLastYear>
    <NetLastYear>4579.54</NetLastYear>
    <ProfitLastYear>4876.57</ProfitLastYear>
    <OrderBy>0</OrderBy>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-sales-forecast-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CategoryName,QtyThisMonth,NetThisMonth,ProfitThisMonth,QtyThisMonthLastYear,NetThisMonthLastYear,ProfitThisMonthLastYear,QtyThisYear,NetThisYear,ProfitThisYear,QtyLastYear,NetLastYear,ProfitLastYear,OrderBy
@ Activations (Price Sheets),10,19.65,9.64,15,40.5,10.12,150,476.5,456.25,160,4579.54,4876.57,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-sales-forecast-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-serialized-coupon-report' class='clickable-header top-level-header'>Getting the Serialized Coupon Report</h3>

For more information, see {{support_SerializedCouponReport}}.

<h4>Request</h4>

<pre>
GET /reports/SerializedCouponReport?StartDate={StartDate}&StopDate={StopDate}&Enabled={Enabled}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&SerialNumberFilter={SerialNumberFilter}&CouponID={CouponID}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>Enabled</code> (<strong>Required</strong>)  - A flag to indicate if the report should search by Enabled cupons (true) or Disabled (false)
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>SerialNumberFilter</code> (Optional)  - A text field that allows you to search for specific serial numbers
    </li>
    
    <li>
        <code>CouponID</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#coupon'>Coupon</a>. Defaults to All Coupons (-1). For a complete list see <a href="/api/RQ-Data-Connect/#getting-a-list-of-coupons-in-rq">Getting A List of Coupons in RQ</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-serialized-coupon-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-serialized-coupon-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-serialized-coupon-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-serialized-coupon-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-serialized-coupon-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-serialized-coupon-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-serialized-coupon-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-serialized-coupon-report">
<pre id="http-code-getting-the-serialized-coupon-report"><code class="language-http">GET /reports/SerializedCouponReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Enabled=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumberFilter=866988333292854&CouponID=-1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-serialized-coupon-report">
<pre id="curl-code-getting-the-serialized-coupon-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/SerializedCouponReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Enabled=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumberFilter=866988333292854&CouponID=-1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-serialized-coupon-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-serialized-coupon-report"><code class="language-csharp">static IRestResponse GettingTheSerializedCouponReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/SerializedCouponReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Enabled=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumberFilter=866988333292854&CouponID=-1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-serialized-coupon-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-serialized-coupon-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSerializedCouponReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/SerializedCouponReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Enabled=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumberFilter=866988333292854&CouponID=-1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-serialized-coupon-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-serialized-coupon-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/SerializedCouponReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&Enabled=true&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumberFilter=866988333292854&CouponID=-1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[serializedcouponreportdata](#SerializedCouponReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-serialized-coupon-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-serialized-coupon-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-serialized-coupon-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-serialized-coupon-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-serialized-coupon-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-serialized-coupon-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-serialized-coupon-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CouponID": 1089,
        "Customer": "John Test",
        "CouponName": "RQ API FpP Serialized",
        "SerialNumber": "cpn00000",
        "Issued": "2015-06-04T10:18:38.403",
        "Percentage": "15",
        "Amount": 0,
        "CouponSKU": "COUPON001089"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-serialized-coupon-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CouponID": 1089,
            "Customer": "John Test",
            "CouponName": "RQ API FpP Serialized",
            "SerialNumber": "cpn00000",
            "Issued": "2015-06-04T10:18:38.403",
            "Percentage": "15",
            "Amount": 0,
            "CouponSKU": "COUPON001089"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-serialized-coupon-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CouponID>1089</CouponID>
    <Customer>John Test</Customer>
    <CouponName>RQ API FpP Serialized</CouponName>
    <SerialNumber>cpn00000</SerialNumber>
    <Issued>2015-06-04T10:18:38.403</Issued>
    <Percentage>15</Percentage>
    <Amount>0</Amount>
    <CouponSKU>COUPON001089</CouponSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-serialized-coupon-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CouponID>1089</CouponID>
    <Customer>John Test</Customer>
    <CouponName>RQ API FpP Serialized</CouponName>
    <SerialNumber>cpn00000</SerialNumber>
    <Issued>2015-06-04T10:18:38.403</Issued>
    <Percentage>15</Percentage>
    <Amount>0</Amount>
    <CouponSKU>COUPON001089</CouponSKU>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-serialized-coupon-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CouponID,Customer,CouponName,SerialNumber,Issued,Percentage,Amount,CouponSKU
1089,John Test,RQ API FpP Serialized,cpn00000,2015-06-04T10:18:38.403,15,0,COUPON001089</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-serialized-coupon-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


    
    

    
    

    
    
<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure request body is formatted properly |
| `HTTP 401` | `Tokan is invalid` | Ensure Access Token is valid and has not expired |
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure URI is valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | See Message in response for more information |        

    
