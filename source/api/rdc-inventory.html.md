---
title:  RQ Data Connect Inventory Reports
permalink: /api/RQ-Data-Connect-Inventory-Reports/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby
  - python: JSON
  - json-doc: JsonDataTable
  - xml: XML
  - html: XmlDataTable
  - coffeescript: CSV
  - c: Excel

search: true

noPopUp: true
---




# Overview


RQ Data Connect allows you to retrieve report data from your RQ database (v4.23 and up).

To get started, see [RQ Data Connect Guide](/guides/rq-data-connect/).

#### Note

For reports that provide optional URI parameters for filtering at different levels (ForWho/ForWhoIDs/LocationType/LocationTypeIDs), omitting these values will run the report at the default company level.

### Authentication

RQ Data Connect and Bridge support many different methods of authentication, see {{AuthenticationOptions}}.

Note that for all reports the {{AccessToken_Glossary}} should be mapped to an employee in RQ.

### Report List

For a complete list of reports in RQ Data Connect, see [Report List](/rq-data-connect/report-list).


# Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

# Resources

## AdjustmentHistoryInvoiceDetailReportData

```json
{
	"AdjustmentType": "1",
	"Comments": "Comment",
	"CountSheetID": "1",
	"CountSheetIDByStore": "1",
	"DateCreated": "2015-12-16T07:39:39.49",
	"EmployeeName": "iQmetrix User",
	"IsReceiving": "false",
	"StoreName": "100: My Network LLC - Anchorage",
	"TotalInvoice": "0",
	"TransactionID": "19240",
	"TransactionIDByStore": "84WEAIA1187"
}
```

| Name | Description |
|:-----|:------------|
| AdjustmentType (`TINYINT`) | Type: 0 = Not Set : 1 = Quantity : 2 = Unit Cost : 3 = New Product : 4 = Delete Product | 
| Comments (`VARCHAR (1000)`) | Comments - any comments entered regarding the adjustment; if the adjustment was done via the reconcile receiving invoices screen, it will be noted here automatically | 
| CountSheetID (`INT`) | Internal identifier for a Count Sheet in RQ | 
| CountSheetIDByStore (`VARCHAR (14)`) | Count Sheet # - if an adjustment is generated from an inventory count sheet it will be noted here | 
| DateCreated (`DateTime`) | Adjusted On - date and time the adjustment was made | 
| EmployeeName (`VARCHAR (51)`) | Created By - name of the employee who did the adjustment | 
| IsReceiving (`BIT`) | Is Adjustment from receiving Products or not (adjustments made either made through receiving, or manual adjustment) | 
| StoreName (`NVARCHAR (MAX)`) | Location - where the adjustment was made | 
| TotalInvoice (`MONEY`) | Total Invoice - total dollar amount of the adjustment invoice | 
| TransactionID (`INT`) | Internal RQ identifier | 
| TransactionIDByStore (`VARCHAR (14)`) | Transaction # - transaction number, including corrected purchase orders | 


## AdjustmentHistoryProductDetailReportData

```json
{
	"Comments": "Comment",
	"CountSheetID": "0",
	"CountSheetIDByStore": "",
	"DateCreated": "2015-12-16T07:39:39.49",
	"EmployeeName": "iQmetrix User",
	"IsReceiving": "false",
	"ProductIdentifier": "ASMAAP000017",
	"ProductName": "Samsung Galaxy S4",
	"Quantity": "5",
	"ReasonCode": "Unexplained Shrinkage",
	"SerialNumber": "123000000000000",
	"StoreName": "100: My Network LLC - Anchorage",
	"TotalCost": "0",
	"TransactionID": "19240",
	"TransactionIDByStore": "84WEAIA1187",
	"UnitCost": "0",
	"VendorName": "",
	"VendorSKU": ""
}
```

| Name | Description |
|:-----|:------------|
| Comments (`VARCHAR (100)`) | Comments - any comments entered regarding the adjustment; if an adjustment was made via the reconcile receiving invoices screen, it will automatically be entered in comments | 
| CountSheetID (`INT`) | Internal identifier for a Count Sheet in RQ | 
| CountSheetIDByStore (`VARCHAR (14)`) | Count Sheet # - if an adjustment is generated from an inventory count sheet it will be noted here | 
| DateCreated (`DateTime`) | Adjusted On - date and time the adjustment was made | 
| EmployeeName (`VARCHAR (51)`) | Created By - name of the employee who did the adjustment | 
| IsReceiving (`BIT`) | Is Adjustment from receiving Products or not (adjustments made either made through receiving, or manual adjustment) | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU - RQ generated SKU for the product adjusted | 
| ProductName (`NVARCHAR (MAX)`) | Product Name - name of the product as it appears in inventory | 
| Quantity (`INT`) | Quantity - total quantity of the product adjusted | 
| ReasonCode (`NVARCHAR (MAX)`) | Reason Code - reason code selected from the drop down list at the time of adjustment | 
| SerialNumber (`VARCHAR (100)`) | Tracking # - tracking number, if there is one | 
| StoreName (`NVARCHAR (MAX)`) | Location - where the adjustment was made | 
| TotalCost (`MONEY`) | Total Cost - total cost for that product calculated as Quantity X Unit Cost | 
| TransactionID (`INT`) | Internal RQ identifier | 
| TransactionIDByStore (`VARCHAR (14)`) | Transaction # - transaction number, including corrected purchase orders | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products | 
| VendorName (`NVARCHAR(MAX)`) | Name for a vendor in RQ | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU | 


## AgedSeralizedInventoryReportData

```json
{
	"StoreID": "1",
	"StoreTypeName": "Retail Store",
	"StoreName": "84 West",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"GlobalProductID": "781",
	"ProductIdentifier": "ACPHRI000170",
	"ProductName": "Blackberry 9650 Bold  VZW",
	"SerialNumber": "123000000000000",
	"SerializedCOS": "11919371.73",
	"DateReceived": "2016-07-27T14:08:17.643",
	"DateReceivedAtStore": "2016-07-27T14:08:17.643",
	"DaysUntilStockBalance": "0",
	"NonSellable": "false",
	"InTransfer": "false",
	"CommittedOnOrderEntry": "false",
	"InStock": "true",
	"IsUsed": "false",
	"VendorName": "Brightpoint",
	"VendorPartNumber": "DANKIT"
}
```

| Name | Description |
|:-----|:------------|
| StoreID (`INT`) | Internal identifier for a store in RQ | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - location type for the row's location | 
| StoreName (`NVARCHAR(MAX)`) | Location - where the product is in stock | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the row's location | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the row's location | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the row's location | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`VARCHAR(100)`) | Product Name - name of the product as it appears in the inventory | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - serial number | 
| SerializedCOS (`MONEY`) | Cost - purchase cost for that individual product | 
| DateReceived (`DateTime`) | Received On - date and time the individual product was received | 
| DateReceivedAtStore (`DateTime`) |  | 
| DaysUntilStockBalance (`SMALLINT`) | Days Until RMA - value in the Keep in stock for ___ days field | 
| NonSellable (`BIT`) | Status - indicates if the product is In Stock, Non-Sellable or In Transfer | 
| InTransfer (`BIT`) | Status - indicates if the product is In Stock, Non-Sellable or In Transfer | 
| CommittedOnOrderEntry (`BIT`) |  | 
| InStock (`BIT`) | Status - indicates if the product is In Stock, Non-Sellable or In Transfer | 
| IsUsed (`BIT`) | Used - indicates if this product is used | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - vendor from whom the individual product was purchased | 
| VendorPartNumber (`VARCHAR(25)`) | Vendor SKU - SKU assigned by the vendor | 


## AutoOrderingReportData

```json
{
	"GlobalProductID": "9918",
	"ProductIdentifier": "AAATAP000093",
	"CategoryNumber": "1010271011",
	"StoreTypeName": "Retail Store",
	"CategoryPath": "Activations",
	"CategoryName": "Equipment",
	"ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
	"StoreID": "1",
	"StoreName": "84 West",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"Cost": "629",
	"VendorID": "21",
	"VendorPartNumber": "",
	"VendorName": "Offwire",
	"Priority": "1",
	"VendorNumber": "",
	"MinQty": "1",
	"MaxQty": "10",
	"QtyInStock": "1",
	"NonSellableQuantity": "1",
	"QtyTransferIn": "2",
	"QtyTransferOut": "3",
	"QtyOnRMA": "4",
	"QtyOnLoan": "1",
	"QtyCommittedOnOrderEntry": "2",
	"QtyOnOrder": "0",
	"QtyOnBackOrder": "1",
	"IsUsedQty": "5",
	"DoNotOrder": "1"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| CategoryNumber (`VARCHAR(100)`) | Internal identifier in RQ | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - location type for the row's location | 
| CategoryPath (`NVARCHAR(MAX)`) | Internal value in RQ | 
| CategoryName (`NVARCHAR(MAX)`) | Category - displays the category to which the SKU belongs | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| StoreID (`INT`) | Internal identifier in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Location - displays any location that fits the search parameters, e.g. if you are searching for shortages, a location that does not need a product from that vendor will not be displayed | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the row's location | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the row's location | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the row's location | 
| Cost (`MONEY`) | Unit Cost - cost of the individual product | 
| VendorID (`INT`) | Internal value in RQ | 
| VendorPartNumber (`VARCHAR(25)`) | Vendor SKU - SKU assigned by the vendor | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - vendor selected in Search criteria | 
| Priority (`BIGINT`) | Internal value in RQ | 
| VendorNumber (`VARCHAR(50)`) | Vendor # - imported vendor # to appear on the generated purchase order (not an editable field) | 
| MinQty (`INT`) | Min Qty - lowest quantity of this product that you are satisfied with for the upcoming sales period | 
| MaxQty (`INT`) | Max Qty - greatest quantity of this product that you are satisfied with for the upcoming sales period | 
| QtyInStock (`INT`) | In Stock - current quantity available for sale in that location | 
| NonSellableQuantity (`INT`) | Non-Sellable - current quantity in non-sellable status | 
| QtyTransferIn (`INT`) | Transfer In - current quantity being transferred in to the location | 
| QtyTransferOut (`INT`) | Transfer Out - current quantity being transferred out of the location | 
| QtyOnRMA (`INT`) | On RMA - current quantity on RMA for replacement or repair | 
| QtyOnLoan (`INT`) | On Cons - current quantity on consignment | 
| QtyCommittedOnOrderEntry (`INT`) | Committed - current quantity committed on Sales Orders | 
| QtyOnOrder (`INT`) | On Order - current quantity on outstanding purchase orders | 
| QtyOnBackOrder (`INT`) | On Back - current quantity on backorder | 
| IsUsedQty (`INT`) | Used Stock - quantity of items listed as Used | 
| DoNotOrder (`INT`) | Internal value in RQ | 


## BackOrderListingReportData

```json
{
	"PurchaseOrderID": "17386",
	"PurchaseOrderIDByStore": "84WEAPO1059",
	"GlobalProductID": "2815",
	"ProductIdentifier": "KLERNO000015",
	"QtyOrdered": "28",
	"QtyReceived": "0",
	"ReferenceNumber": "",
	"QtyOnBackOrder": "28",
	"DateCommitted": "2015-07-16T09:08:39.11",
	"EstimatedArrivalDate": "2015-07-06T00:00:00",
	"ProductName": "Red Bell Case",
	"StoreName": "84 West",
	"EmployeeName": "iQmetrix Employee",
	"VendorName": "Offwire",
	"VendorPartNumber": "HFW5123",
	"VendorNumber": ""
}
```

| Name | Description |
|:-----|:------------|
| PurchaseOrderID (`INT`) | Identifier for a Purchase Order in RQ | 
| PurchaseOrderIDByStore (`VARCHAR(14)`) | PO # - purchase order number generated by RQ | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| QtyOrdered (`INT`) | Ordered - quantity of the original order | 
| QtyReceived (`INT`) | Received - quantity received so far | 
| ReferenceNumber (`VARCHAR(50)`) | Reference numbers | 
| QtyOnBackOrder (`INT`) | On Back - quantity not received | 
| DateCommitted (`DateTime`) | Ordered On - date and time of the original order | 
| EstimatedArrivalDate (`DateTime`) | ETA - original delivery estimate | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| StoreName (`NVARCHAR(MAX)`) | Received At - location that has received the stock so far | 
| EmployeeName (`VARCHAR(51)`) | Ordered By - employee who created the original purchase order | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - vendor selected in search criteria | 
| VendorPartNumber (`VARCHAR(25)`) | Vendor SKU - SKU assigned by the vendor | 
| VendorNumber (`VARCHAR(50)`) | Vendor # - number assigned to the vendor in the inventory | 


## CountSheetHistoryReportData

```json
{
	"CountSheetID": "675",
	"CountSheetIDByStore": "84WEACS100",
	"DateCreated": "2015-07-21T09:17:43.13",
	"CategoryPath": "Wrapsol",
	"EmployeeName1": "iQmetrix Employee",
	"EmployeeName2": "iQmetrix Employee",
	"StoreName": "84 West",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"OriginalCountSheetID": "-1",
	"OriginalCountSheetIDByStore": "",
	"DateStarted": "2015-07-21T09:17:00",
	"DateCommitted": "2015-07-21T09:26:40.45",
	"DateCompleted": "2015-07-22T011:30:40.36",
	"DateModified": "2015-07-21T09:17:43.147",
	"Comments": ""
}
```

| Name | Description |
|:-----|:------------|
| CountSheetID (`INT`) | Identifier for a count sheet in RQ | 
| CountSheetIDByStore (`VARCHAR(14)`) | Count # - count sheet to which this row relates | 
| DateCreated (`DateTime`) | Created On - date and time the count sheet was created | 
| CategoryPath (`NVARCHAR(MAX)`) | Category - category, with sub categories, counted | 
| EmployeeName1 (`VARCHAR(51)`) | Created By - employee who created the count sheet | 
| EmployeeName2 (`VARCHAR(51)`) | Counted By - employee who actually counted the inventory | 
| StoreName (`NVARCHAR(MAX)`) | Location - where this count sheet was done | 
| DistrictName (`NVARCHAR(MAX)`) | District - district the store is in | 
| RegionName (`NVARCHAR(MAX)`) | Region - region the store is in | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel the store is in | 
| OriginalCountSheetID (`INT`) | Identifier for a count sheet in RQ | 
| OriginalCountSheetIDByStore (`VARCHAR(14)`) | Original Count # - original count sheet if this row now relates to a different count sheet | 
| DateStarted (`DateTime`) | Started On - date and time the count was started | 
| DateCommitted (`DateTime`) | Committed On - date and time the count sheet was committed | 
| DateCompleted (`DateTime`) | Completed On - date and time the count sheet was completed | 
| DateModified (`DateTime`) | Last Modified On - date and time the count sheet was last modified | 
| Comments (`VARCHAR(1000)`) | Comments - any comments relating to this count sheet | 


## CompletedRMAsReportData

```json
{
	"StockBalanceID": "1",
	"StockBalanceIDByStore": "84WEASB1",
	"RMANumber": "112482",
	"StoreName": "84 West",
	"VendorName": "Reliance",
	"DateCommitted": "2011-03-02T17:10:11.78",
	"CustomerName": "N/A",
	"TotalOnRMA": "460"
}
```

| Name | Description |
|:-----|:------------|
| StockBalanceID (`INT`) | Internal identifier for a RMA in RQ | 
| StockBalanceIDByStore (`VARCHAR(14)`) | RMA# - RMA number assigned by RQ | 
| RMANumber (`VARCHAR(15)`) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail. | 
| StoreName (`NVARCHAR(MAX)`) | Location - location that created the RMA | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - vendor receiving the RMA | 
| DateCommitted (`DateTime`) | Committed On - date and time the RMA was committed on | 
| CustomerName (`VARCHAR(151)`) | Customer name | 
| TotalOnRMA (`MONEY`) | Unit Cost - purchase cost per unit sent away on RMA; weighted average cost for non-serialized products and true cost for serialized products, click Inventory Valuation in RQ for more information | 


## CompletedRMAsReportRMADetailData

```json
{
	"StockBalanceID": "78",
	"StockBalanceIDByStore": "84WEASB2",
	"StoreID": "1",
	"VendorID": "25",
	"EmployeeID": "41",
	"CustomerID": "-1",
	"RMANumber": "inv# 401666",
	"WaybillNumber": "",
	"CreditInvoiceNumber": "409661",
	"ShippingMethod": "Regular",
	"ShippingCost": "0",
	"SBCommitted": "true",
	"DateCommitted": "2012-08-01T15:04:38.32",
	"SBShippedAway": "true",
	"SBCompleted": "true",
	"Comments": "From invoice# 401666",
	"ReceivingComments": "",
	"DateCreated": "2012-08-01T15:04:38.32",
	"RowTimeStamp": "AAAAAAAJpbg=",
	"EmployeeName": "Skip Davis",
	"VendorName": "Reliance",
	"VendorCode": "",
	"StoreName": "84 West",
	"CustomerName": "Jim Smith",
	"CustomerAddress": "123 Cornwall Ave",
	"CustomerCity": "Regina",
	"CustomerProvinceOrState": "SK",
	"CustomerCountry": "CA",
	"CustomerPostalOrZipCode": "H0H0H0",
	"CustomerPhoneNumber": "5555555555"
}
```

| Name | Description |
|:-----|:------------|
| StockBalanceID (`INT`) | Internal identifier for a RMA in RQ | 
| StockBalanceIDByStore (`VARCHAR(14)`) | RMA# - RMA number assigned by RQ | 
| StoreID (`INT`) | Internal identifier for a store in RQ | 
| VendorID (`INT`) | Internal identifier for a vendor in RQ | 
| EmployeeID (`INT`) | Internal identifier for an employee in RQ | 
| CustomerID (`INT`) | Internal identifier for a customer in RQ | 
| RMANumber (`VARCHAR(15)`) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail | 
| WaybillNumber (`VARCHAR(50)`) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | 
| CreditInvoiceNumber (`VARCHAR(20)`) | Credit Invoice # - number of the credit invoice from vendor used to provide an audit trail | 
| ShippingMethod (`VARCHAR(15)`) | Shipping Method - shipping company name will appear here | 
| ShippingCost (`MONEY`) | Shipping Cost - total of the cost to return the product  | 
| SBCommitted (`BIT`) | A flag to indicate if the RMA has been committed (1) or not (0) | 
| DateCommitted (`DateTime`) | Committed On - date and time the RMA was committed on | 
| SBShippedAway (`BIT`) | A flag to indicate if the RMA has been shipped (1) or not (0) | 
| SBCompleted (`BIT`) | A flag to indicate of the RMA has been completd (1) or not (0) | 
| Comments (`VARCHAR(1000)`) | RMA comments | 
| ReceivingComments (`VARCHAR(1000)`) | Receiving RMA comments | 
| DateCreated (`DateTime`) | Created On - date and time the RMA was created | 
| RowTimeStamp (`TIMESTAMP`) | Internal value in RQ | 
| EmployeeName (`VARCHAR(51)`) | Created By - name of the employee logged into RQ when the RMA was created | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - vendor receiving the RMA | 
| VendorCode (`VARCHAR(100)`) | Internal value in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Location - location that created the RMA | 
| CustomerName (`VARCHAR(151)`) | Customer name | 
| CustomerAddress (`VARCHAR(50)`) | Customer address | 
| CustomerCity (`VARCHAR(50)`) | Customer city | 
| CustomerProvinceOrState (`VARCHAR(50)`) | Customer province/state | 
| CustomerCountry (`VARCHAR(50)`) | Customer country | 
| CustomerPostalOrZipCode (`VARCHAR(15)`) | Customer postal/zip code | 
| CustomerPhoneNumber (`VARCHAR(211)`) | Customer phone number | 


## CompletedRMAsProductReportData

```json
{
	"GlobalProductID": "2468",
	"ProductIdentifier": "ACVZNB000438",
	"ProductName": "Novatel 4620 4G Hot Spot",
	"SerialNumberLength": "15",
	"VendorPartNumber": "",
	"SerialNumberRemoved": "990000926066533",
	"SerialNumberAdded": "",
	"Quantity": "1",
	"NonSellableQuantity": "0",
	"VendorInvoiceNumber": "401666",
	"UnitCost": "198",
	"UnitCostCredited": "197",
	"ActionTaken": "1",
	"Serialized": "true",
	"DateShipped": "2012-08-01T15:04:38.517",
	"EmployeeName1": "Skip Davis",
	"DateReceived": "2012-08-01T15:05:37.65",
	"EmployeeName2": "Skip Davis",
	"IsUsed": "false"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| SerialNumberLength (`INT`) | Tracking number length | 
| VendorPartNumber (`VARCHAR(25)`) | Vendor SKU - SKU assigned by the vendor | 
| SerialNumberRemoved (`VARCHAR(100)`) | Tracking # Shipped - tracking number shipped from inventory | 
| SerialNumberAdded (`VARCHAR(100)`) | Tracking # Received - tracking number received as replacement | 
| Quantity (`INT`) | Qty - total number of that product SKU on the purchase order | 
| NonSellableQuantity (`INT`) | Non sellable quantity | 
| VendorInvoiceNumber (`VARCHAR(20)`) | Vendor Invoice # - invoice number assigned by the vendor for the purchase order | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit sent away on RMA; weighted average cost for non-serialized products and true cost for serialized products, click Inventory Valuation in RQ for more information | 
| UnitCostCredited (`MONEY`) | Unit Cost Credited - total cost of items sent away on RMA | 
| ActionTaken (`TINYINT`) | Type - indicated the type of RMA: Not Set (0), Credit (1), Replacement (2), Rejected (3) or Repaired (4) | 
| Serialized (`BIT`) | A flag to indicate if the product is serialized (1) or not (0) | 
| DateShipped (`DateTime`) | Shipped On -  date and time the Shipped box was checked | 
| EmployeeName1 (`VARCHAR(51)`) | Shipped By - name of the employee logged into RQ when the RMA was shipped | 
| DateReceived (`DateTime`) | Received On - date and time the RMA was received | 
| EmployeeName2 (`VARCHAR(51)`) | Received By - name of the employee logged into RQ when the RMA was received | 
| IsUsed (`BIT`) | A flag to indicate if the product was sold as used | 


## ConsignmentHistoryReportData

```json
{
	"LoanInvoiceID": "18",
	"LoanInvoiceIDByStore": "84WEALI1",
	"LoanType": "1",
	"StoreName": "84 West",
	"EmployeeName": "iQmetrix Employee",
	"Comments": "",
	"BorrowerName": "John Lacquey Pinestraw Inc",
	"DateCommitted": "2015-07-15T08:39:36.18",
	"LoanCompleted": "true",
	"DateCompleted": "2015-07-15T11:00:04.86",
	"CompletedEmployeeName": "iQmetrix Employee",
	"DateCreated": "2015-07-15T08:39:36.18",
	"TotalOnLoan": "0",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"DistrictName": "Valley Area District"
}
```

| Name | Description |
|:-----|:------------|
| LoanInvoiceID (`INT`) | Identifier for a Consignment in RQ | 
| LoanInvoiceIDByStore (`VARCHAR(14)`) | Consignment # - RQ generated consignment invoice number | 
| LoanType (`TINYINT`) | Type - employee, customer or location | 
| StoreName (`NVARCHAR(MAX)`) | Consigned From - where the product was consigned from | 
| EmployeeName (`VARCHAR(51)`) | Created By - employee who created the consignment | 
| Comments (`VARCHAR(1000)`) | Comments - any comments relating to the consignment | 
| BorrowerName (`NVARCHAR(MAX)`) | Consigned To - to whom the product been consigned | 
| DateCommitted (`DateTime`) | Committed On - date and time the consignment was committed | 
| LoanCompleted (`BIT`) | Completed - indicates whether or not the consignment has been completed | 
| DateCompleted (`DateTime`) | Completed On - states the date the consignment was completed | 
| CompletedEmployeeName (`VARCHAR(51)`) | Completed By - Name of the employee that completed the consignment | 
| DateCreated (`DateTime`) | Created On - date and time of the consignment | 
| TotalOnLoan (`MONEY`) | Consignment Amount - total value of the consignment invoice | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the row's location | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the row's location | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the row's location | 


## DiscontinuedInventoryReportData

```json
{
	"GlobalProductID": "2815",
	"ProductIdentifier": "ASCLMO000001",
	"SpecialProductID": "0",
	"ProductName": "iPhone 5s 32GB - Gold",
	"EmployeeID": "2384",
	"DiscontinuedDate": "2014-02-13T00:00:00",
	"DiscontinuedEmployeeID": "250",
	"InStock": "12",
	"QuantityInNonSellable": "1",
	"QuantityInTransfer": "2",
	"QuantityOnRMA": "1",
	"QuantityOnOrder": "0",
	"QuantityOnBackOrder": "1",
	"QuantityOnLoan": "3",
	"QuantityCommitted": "2",
	"DiscontinuedEmployeeName": "iQmetrix Employee"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| SpecialProductID (`INT`) | Acceptable values include 0 for Regular Product, 1 for Vendor Rebate, 2 for Non-Stocked Product, 3 for Gift Card, 4 for Non Revenue Product | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| EmployeeID (`INT`) | Identifier for an employee in RQ | 
| DiscontinuedDate (`DateTime`) | Discontinued Date - date the product is scheduled to be discontinued | 
| DiscontinuedEmployeeID (`INT`) | Identifier for an employee in RQ | 
| InStock (`INT`) | In Stock- quantity currently in stock | 
| QuantityInNonSellable (`INT`) | Non-Sellable - quantity currently marked as Non-Sellable | 
| QuantityInTransfer (`INT`) | Transfer - quantity currently on transfer | 
| QuantityOnRMA (`INT`) | RMA - quantity currently on RMA | 
| QuantityOnOrder (`INT`) | Order - quantity currently on order | 
| QuantityOnBackOrder (`INT`) | Back Order - quantity currently back ordered | 
| QuantityOnLoan (`INT`) | On Loan - quantity currently loaned or consigned | 
| QuantityCommitted (`INT`) | Committed - quantity currently committed on Sales Orders | 
| DiscontinuedEmployeeName (`VARCHAR(51)`) | Discontinued By - name of the employee logged into RQ when the product was marked as discontinued | 


## InventoryAvailabilitySummaryReportData

```json
{
	"ChannelID": "3a5ab3b9-df8b-412b-fffa-6b59bcaaaa94",
	"ChannelName": "English Channel",
	"RegionID": "4",
	"RegionName": "London",
	"DistrictID": "72",
	"DistrictName": "Westminster",
	"StoreID": "6679",
	"StoreName": "100: My Network LLC - Anchorage",
	"GlobalProductID": "2815",
	"ProductIdentifier": "AAATAP000093",
	"ProductName": "Apple iPhone 6 Plus 16GB Space Gray",
	"QtyInStock": "59",
	"QtyOnOrder": "1",
	"QtyOnBackOrder": "2",
	"QtyInNonSellable": "0",
	"QtyTransferIn": "2",
	"QtyTransferOut": "1",
	"QtyOnRMA": "3",
	"QtyOnLoan": "2",
	"QtyCommittedOnOrderEntry": "1",
	"UnitCost": "699",
	"NoSale": "false",
	"DoNotOrder": "false",
	"SpecialOrder": "false",
	"DateEOL": "",
	"WriteOff": "false"
}
```

| Name | Description |
|:-----|:------------|
| ChannelID (`UNIQUEIDENTIFIER`) | Identifier for a channel in RQ | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - Channel for the row's Location | 
| RegionID (`INT`) | Identifier for a region in RQ | 
| RegionName (`NVARCHAR(MAX)`) | Region - Region for the row's Location | 
| DistrictID (`INT`) | Identifier for a district in RQ | 
| DistrictName (`NVARCHAR(MAX)`) | District - District for the row's Location | 
| StoreID (`INT`) | Identifier for a store in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Location - name of the location, Company, Region, District or Location, for which the row is reporting | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| QtyInStock (`INT`) | In Stock - total quantity in stock at the location for this row | 
| QtyOnOrder (`INT`) | On Order - total quantity on order but not received at the location for this row | 
| QtyOnBackOrder (`INT`) | On Back Order - remaining quantity on partially received purchase order(s) at the location for this row | 
| QtyInNonSellable (`INT`) | Non-Sellable - total quantity with a status of non-sellable at the location for this row | 
| QtyTransferIn (`INT`) | Transfer In - total quantity being transferred in for the location for this row | 
| QtyTransferOut (`INT`) | Transfer Out - total quantity being transferred out for the location for this row | 
| QtyOnRMA (`INT`) | On RMA - total quantity on RMA at the location for this row | 
| QtyOnLoan (`INT`) | On Loan - total quantity loaned out on consignment at the location for this row | 
| QtyCommittedOnOrderEntry (`INT`) | Committed - current quantity committed on Sales Orders | 
| UnitCost (`MONEY`) | Unit Cost -  purchase cost per unit; weighted average cost for non-serialized products and most recent cost for serialized products | 
| NoSale (`BIT`) | Do Not Sell - yes/no field noting whether this product has been marked Do Not Sell | 
| DoNotOrder (`BIT`) | Do Not Order - yes/no field noting whether this product has been marked Do Not Order | 
| SpecialOrder (`BIT`) | Special Order - yes/no field noting this product as a Special Order | 
| DateEOL (`DateTime`) | EOL - End of Life date | 
| WriteOff (`BIT`) | Write Off - yes/no field noting this product as a Write Off | 


## InventoryListingReportData

```json
{
	"BarCode": "",
	"BinStatus": "String_InStock",
	"CategoryPath": "Equipment",
	"ChannelName": "English Channel",
	"DateEOL": "null",
	"DiscontinuedDate": "null",
	"DistrictName": "Westminster",
	"DoNotOrder": "false",
	"IsUsed": "false",
	"ManufacturerPartNumber": "",
	"NoSale": "false",
	"ProductIdentifier": "AAATAP000093",
	"ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
	"Quantity": "1",
	"RefundPeriodLength": "null",
	"RegionName": "London",
	"SerialNumber": "2342342341",
	"SpecialOrder": "false",
	"StoreName": "100: My Network LLC - Anchorage",
	"StoreTypeName": "Costco",
	"TotalCost": "699",
	"UnitCost": "699",
	"VendorName": "Offwire",
	"VendorPartNumber": "",
	"WarehouseLocation": "",
	"WriteOff": "false"
}
```

| Name | Description |
|:-----|:------------|
| BarCode (`VARCHAR (20)`) | Bar Code - any bar code(s) you have assigned to this product | 
| BinStatus (`VARCHAR(100)`) | Status - dependent on the Status setting in the search criteria but can be In Stock, On RMA, Transfer In, Transfer Out, On Order, On Loan or Non Sellable | 
| CategoryPath (`NVARCHAR (MAX)`) | Category - inventory category | 
| ChannelName (`NVARCHAR (MAX)`) | Channel - channel for the rows location | 
| DateEOL (`DateTime`) | EOL - date this product will be End of Life | 
| DiscontinuedDate (`DateTime`) | Discontinued Date - date that this product was, or will be, discontinued | 
| DistrictName (`NVARCHAR (MAX)`) | District - district for the rows location | 
| DoNotOrder (`BIT`) | Do Not Order - yes/no field noting whether this product has been marked Do Not Order | 
| IsUsed (`BIT`) | Used - this will show checked if the product is in a used status | 
| ManufacturerPartNumber (`VARCHAR (50)`) | Manufacturer SKU - SKU assigned by the manufacturer (can be anything user specifies, not necessarily from manufacturer) | 
| NoSale (`BIT`) | Do Not Sell - yes/no field noting whether this product has been marked Do Not Sell | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR (MAX)`) | Product Name - name of the product as it appears in the inventory | 
| Quantity (`INT`) | Quantity - total number in stock at the location | 
| RefundPeriodLength (`INT`) | Refund Period (days) - number of days that product can be refunded in | 
| RegionName (`NVARCHAR (MAX)`) | Region - region for the rows location | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - any serial number attached to the particular product | 
| SpecialOrder (`BIT`) | Special Order - yes/no field noting this product as a Special Order | 
| StoreName (`NVARCHAR (MAX)`) | Location - where the product is in stock | 
| StoreTypeName (`NVARCHAR (MAX)`) | Location Type - location type where the product is in stock | 
| TotalCost (`MONEY`) | Total Cost - Quantity X Unit Cost | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products | 
| VendorName (`NVARCHAR (MAX)`) | Vendor - vendor from whom the individual product was purchased | 
| VendorPartNumber (`VARCHAR (25)`) | Vendor SKU - SKU assigned by the vendor | 
| WarehouseLocation (`VARCHAR (100)`) | Warehouse Location - where the stock is located in the warehouse, if used | 
| WriteOff (`BIT`) | Write Off - yes/no field noting this product as a Write Off | 


## InventoryRemovalHistoryReportData

```json
{
	"GlobalProductID": "2815",
	"ProductType": "4",
	"ProductIdentifier": "ACVZAP000574",
	"ProductName": "iPhone 5s 32GB - Gold",
	"DateDeleted": "2015-01-05T12:03:20.03",
	"Employee_Name": "iQmetrix Employee"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductType (`INT`) | Product Type. For a list of acceptable values, see <a href='/api/RQ-Data-Connect/#getting-product-types'>Getting Product Types</a> | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| DateDeleted (`DateTime`) | Deleted On - date and time the product was removed from inventory | 
| Employee_Name (`VARCHAR(51)`) | Deleted By - name of the employee who removed the product from inventory | 


## NonSellableHistoryReportData

```json
{
	"DateCreated": "2016-01-04T13:40:43.267",
	"StoreID": "1",
	"StoreName": "84 West",
	"SaleInvoiceID": "512",
	"NonSellableAdjustmentID": "68a397e9-18e7-070d-9c70-da103de98c1c",
	"StockBalanceID": "0",
	"InvoiceIDByStore": "84WEANA5",
	"GlobalProductID": "2815",
	"ProductIdentifier": "ACVZCB000363",
	"ProductName": "Casio Ravine 2",
	"SerialNumber": "355256020008965",
	"Quantity": "1",
	"EmployeeID1": "253",
	"First_Name": "iQmetrix",
	"Last_Name": "Employee",
	"Employee_Name": "iQmetrix Employee",
	"ToInStock": "0",
	"ToNonSellable": "2016-01-04T13:40:43.267",
	"ToUsed": "0",
	"NonSellableComments": "",
	"NonSellableReasonCode": "ed10636b-3b32-36d6-243d-4f4ce4a01290",
	"TransactionType": "2"
}
```

| Name | Description |
|:-----|:------------|
| DateCreated (`DateTime`) | Date - date the product was moved to or from Non-Sellable | 
| StoreID (`INT`) | Identifier for a store in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Location - where the product was put into Non-Sellable | 
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| NonSellableAdjustmentID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| StockBalanceID (`INT`) | Internal identifier in RQ | 
| InvoiceIDByStore (`VARCHAR(30)`) | Invoice # - invoice of the transaction | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU that is attached to the product that was moved to or from Non-Sellable | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product that belongs to the product SKU, as it appears in the inventory | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - serial number attached to the particular product | 
| Quantity (`INT`) | Quantity - number of products that were moved to or from Non-Sellable | 
| EmployeeID1 (`INT`) | Identifier of an employee in RQ | 
| First_Name (`VARCHAR(25)`) | Employee first name | 
| Last_Name (`VARCHAR(25)`) | Employee last name | 
| Employee_Name (`VARCHAR(51)`) | Employee - employee listed as the Sales rep or Adjusted By on the transaction | 
| ToInStock (`DateTime`) | To In Stock - date the product was moved back into regular stock from Non-Sellable | 
| ToNonSellable (`DateTime`) | To Non-Sellable - date the product was moved to Non-Sellable | 
| ToUsed (`INT`) | To Used - indicates the item was placed in the Used inventory | 
| NonSellableComments (`VARCHAR(100)`) | Non-Sellable Comments - will display any user-inputted comments at the time the product was moved to Non-Sellable | 
| NonSellableReasonCode (`UNIQUEIDENTIFIER`) | Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#nonsellablereasoncode'>NonSellableReasonCode</a>. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-non-sellable-reason-codes'>Getting Non Sellable Reason Codes</a> | 
| TransactionType (`INT`) | Transaction Type - values in this column are automatically assigned based on where the transaction took place. Acceptable values include 0 (Refund), 1 (Adjustment) or 2 (Rejected) | 


## OverReceivingInventoryReportData

```json
{
	"StoreName": "84 West",
	"PurchaseOrderID": "18378",
	"PurchaseOrderIDByStore": "84WEAPO1151",
	"GlobalProductID": "6364",
	"ProductSKU": "KLDSVC000077",
	"ProductName": "Nokia 3285/5100/6100 Belt Clip - OEM",
	"QtyOrdered": "1",
	"QtyReceived": "12",
	"QtyVariance": "11",
	"UnitCost": "0",
	"Value": "0",
	"EmployeeName": "iQmetrix Employee"
}
```

| Name | Description |
|:-----|:------------|
| StoreName (`NVARCHAR(MAX)`) | Location - location the purchase order is for | 
| PurchaseOrderID (`INT`) | Internal identifier in RQ | 
| PurchaseOrderIDByStore (`VARCHAR(14)`) | Purchase Order # - purchase order number generated by RQ | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductSKU (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| QtyOrdered (`INT`) | Ordered - quantity originally ordered | 
| QtyReceived (`INT`) | Received - quantity actually received | 
| QtyVariance (`INT`) | Variance - quantity above the ordered quantity actually received | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit | 
| Value (`MONEY`) | Value - value of the over received inventory | 
| EmployeeName (`NVARCHAR(MAX)`) | Employee - employee who received the inventory | 


## InventoryTotalsByLocationReportData

```json
{
	"StoreID": "1",
	"StoreName": "84 West",
	"StoreTypeName": "Retail Store",
	"Enabled": "1",
	"InStock": "7",
	"OnRMA": "5",
	"TransferIn": "6",
	"TransferOut": "4",
	"OnLoan": "1",
	"InNonSellable": "2",
	"Total": "25"
}
```

| Name | Description |
|:-----|:------------|
| StoreID (`INT`) | Identifier for a store in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Location - location to which the inventory totals belong | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - this will display the location type | 
| Enabled (`INT`) | A flag to indicate if Enabled (1) or Disabled (0) | 
| InStock (`MONEY`) | In Stock - total dollar amount at cost of all products with an in stock status | 
| OnRMA (`MONEY`) | On RMA - total dollar amount at cost of all products with an on RMA status | 
| TransferIn (`MONEY`) | Transfer In - total dollar amount at cost of all products that are currently being shipped to the location by transfer | 
| TransferOut (`MONEY`) | Transfer Out - total dollar amount at cost of all products that currently are being shipped from of the location by transfer | 
| OnLoan (`MONEY`) | On Loan - total dollar amount at cost of all products currently on loan (consignment) | 
| InNonSellable (`MONEY`) | In Non-Sellable - total dollar amount at cost of all products with a non-sellable status | 
| Total (`MONEY`) | Total - combined dollar amounts of In Stock, Non-Sellable, Transfer Out, On RMA and On Loan statuses | 


## ProductsOnConsignmentReportData

```json
{
	"LoanInvoiceID": "49",
	"LoanInvoiceIDByStore": "84WEALI12",
	"LoanType": "3",
	"BorrowerName": "84 West",
	"ProductIdentifier": "ACVZAP000422",
	"ProductName": "iPad 3 16 GB White",
	"SerialNumber": "333331234567891",
	"Quantity": "1",
	"DateCommitted": "2016-05-12T13:18:01.013",
	"DateDue": "",
	"DaysOverDue": "0",
	"UnitCost": "595",
	"ExtendedUnitCost": "595",
	"VendorName": "Dymaxx",
	"VendorSKU": ""
}
```

| Name | Description |
|:-----|:------------|
| LoanInvoiceID (`INT`) | Identifier for a consignment in RQ | 
| LoanInvoiceIDByStore (`VARCHAR(14)`) | Consignment # - RQ generated consignment invoice number | 
| LoanType (`TINYINT`) | Consignment Type - employee, customer or location | 
| BorrowerName (`NVARCHAR(MAX)`) | Consigned To - to whom the product been consigned | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - tracking number associated with this product, serialized products only | 
| Quantity (`INT`) | Quantity - total number of the product consigned on the invoice | 
| DateCommitted (`DateTime`) | Consigned On - date and time of the consignment | 
| DateDue (`DateTime`) | Due On - date the product must be returned | 
| DaysOverDue (`INT`) | Days Overdue - number of days overdue | 
| UnitCost (`MONEY`) | Unit Cost -  purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products | 
| ExtendedUnitCost (`MONEY`) | Total Cost - total cost for the product on the invoice | 
| VendorName (`NVARCHAR(MAX)`) | Name of the vendor | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU | 


## PurchaseHistoryReportData

```json
{
	"GlobalProductID": "2815",
	"ProductIdentifier": "ASLCUN000002",
	"ProductName": "Universal Leather Pouch",
	"Ordered": "4",
	"Received": "0",
	"UnitCost": "1.19"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`VARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| Ordered (`INT`) | # Ordered - quantity on the original order | 
| Received (`INT`) | # Received - quantity actually received | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products | 


## PurchaseOrderAmendmentReportData

```json
{
	"AmendmentID": "1",
	"PurchaseOrderID": "8035",
	"PurchaseOrderIDByStore": "WETM2PO325",
	"Location": "Corporate Office",
	"ReceiveAt": "Cornwall",
	"DateEdited": "2011-12-29T17:09:00",
	"EmployeeID": "4",
	"EmployeeName": "iQmetrix Employee",
	"ProductIdentifier": "ACVZSA000297",
	"ProductName": "Samsung U660 Convoy 2",
	"ActionType": "0",
	"QtyVariance": "1",
	"CostVariance": "0",
	"OrderingComments": "285647",
	"ReceivingComments": "",
	"VendorNumber": ""
}
```

| Name | Description |
|:-----|:------------|
| AmendmentID (`INT`) | Internal identifier in RQ | 
| PurchaseOrderID (`INT`) | Internal identifier in RQ | 
| PurchaseOrderIDByStore (`VARCHAR(14)`) | Purchase Order # - purchase order that was amended | 
| Location (`NVARCHAR(MAX)`) | Location - location RQ was logged into when the change was made | 
| ReceiveAt (`NVARCHAR(MAX)`) | Receive At - location the PO was set to be received at | 
| DateEdited (`DateTime`) | Edited On - date of edit | 
| EmployeeID (`INT`) | Internal identifier for an employee in RQ | 
| EmployeeName (`VARCHAR(100)`) | Employee - employee logged into RQ when the change was made | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| ActionType (`TINYINT`) | Action - will indicate if the Quantity or Cost was edited (1) or not (0) | 
| QtyVariance (`INT`) | QTY Variance - difference between original and edited quantity adjusted on the Committed Purchase Order | 
| CostVariance (`MONEY`) | Unit Cost Variance - is only for cost adjustments per product; this will not update to the total cost of the Purchase Order | 
| OrderingComments (`VARCHAR(500)`) | Ordering Comments - any comments entered in the Ordering Comments field will populate here | 
| ReceivingComments (`NVARCHAR(MAX)`) | Receiving Comments - any comments entered in the Receiving Comments field will populate here  | 
| VendorNumber (`VARCHAR(50)`) | Vendor # - number given to identify the vendor used | 


## ReceivingInvoiceHistoryReportByProductData

```json
{
	"ReceivingID": "16912",
	"ReceivingIDByStore": "84WEARE1044",
	"PurchaseOrderID": "18339",
	"PurchaseOrderIDByStore": "84WEAPO1141",
	"ReferenceNumber": "",
	"DateReceived": "2016-01-19T08:54:52.26",
	"ProductIdentifier": "ASMIMO000026",
	"VendorSKU": "Mot A956 Droid 2 Global",
	"ProductName": "Mot Blue Droid 2 Global",
	"SerialNumber": "43211234567890",
	"Quantity": "1",
	"UnitCost": "300",
	"TotalCost": "300",
	"Reconciled": "false",
	"ReconciledDate": "",
	"Correction": "false",
	"ReasonCode": "",
	"VendorName": "Dymaxx",
	"OrderingComments": "",
	"ReceivingComments": ""
}
```

| Name | Description |
|:-----|:------------|
| ReceivingID (`INT`) | Internal identifier in RQ | 
| ReceivingIDByStore (`VARCHAR(14)`) | Receiving # - receiving invoice number generated by RQ | 
| PurchaseOrderID (`INT`) | Internal identifier in RQ | 
| PurchaseOrderIDByStore (`VARCHAR(14)`) | PO # - purchase order number generated by RQ | 
| ReferenceNumber (`VARCHAR(50)`) | Reference # - any reference number entered on the original purchase order | 
| DateReceived (`DateTime`) | Received On - date and time the purchase order was received | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU - vendor's SKU for this product (new for RQ v4.1.4) | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - description of the product as it appears in the inventory | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - tracking number associated with this entry | 
| Quantity (`INT`) | Quantity - total number of that product SKU on the purchase order | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products | 
| TotalCost (`MONEY`) | Total Cost - total cost for the product on the invoice | 
| Reconciled (`BIT`) | Reconciled - indicates if the product on the purchase order has been reconciled | 
| ReconciledDate (`DateTime`) | Reconciled Date - date the product on the purchase order was reconciled | 
| Correction (`BIT`) | Correction - indicates if the receiving invoice was corrected | 
| ReasonCode (`NVARCHAR(MAX)`) | Reason - the reason code for the correction | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - name of the vendor | 
| OrderingComments (`VARCHAR(500)`) | Ordering Comments - any comments entered in the Ordering Comments | 
| ReceivingComments (`VARCHAR(500)`) | Receiving Comments - any comments entered in the Receiving Comments  | 


## ReceivingInvoiceHistoryReportByInvoiceData

```json
{
	"ReceivingID": "16912",
	"ReceivingIDByStore": "84WEARE1044",
	"PurchaseOrderID": "18339",
	"PurchaseOrderIDByStore": "84WEAPO1141",
	"ReferenceNumber": "",
	"DateReceived": "2016-01-19T08:54:52.26",
	"ReconciliationComments": "",
	"StoreName": "84 West",
	"DistrictName": "Valley Area District",
	"RegionName": "Region A",
	"ChannelName": "Regina Channel",
	"EmployeeName": "iQmetrix Employee",
	"VendorName": "Dymaxx",
	"VendorInvoiceNumber": "1231564",
	"Posted": "false",
	"Paid": "false",
	"Flagged": "false",
	"ProductTotal": "300",
	"Tax1Name": "",
	"Tax1Amount": "0",
	"Tax2Name": "",
	"Tax2Amount": "0",
	"Shipping": "0",
	"TotalInvoice": "300",
	"OrderingComments": "",
	"ReceivingComments": ""
}
```

| Name | Description |
|:-----|:------------|
| ReceivingID (`INT`) | Internal identifier in RQ | 
| ReceivingIDByStore (`VARCHAR(14)`) | Receiving # - receiving invoice number generated by RQ | 
| PurchaseOrderID (`INT`) | Internal identifier in RQ | 
| PurchaseOrderIDByStore (`VARCHAR(14)`) | PO # - purchase order number generated by RQ | 
| ReferenceNumber (`VARCHAR(50)`) | Reference # - any reference number entered on the original purchase order | 
| DateReceived (`DateTime`) | Received On - date and time the purchase order was received | 
| ReconciliationComments (`VARCHAR(1000)`) | Reconciliation Comments - any comments added when the Receiving Invoice was reconciled | 
| StoreName (`NVARCHAR(MAX)`) | Received At - location where the purchase order was received | 
| DistrictName (`NVARCHAR(MAX)`) | District - district for the row's location  | 
| RegionName (`NVARCHAR(MAX)`) | Region - region for the row's location | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel for the row's location | 
| EmployeeName (`VARCHAR(51)`) | Received By - name of the employee who received the purchase order | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - name of the vendor | 
| VendorInvoiceNumber (`VARCHAR(20)`) | Vendor Invoice # - invoice number assigned by the vendor for the purchase order | 
| Posted (`BIT`) | Posted - indicates if the purchase order has been posted | 
| Paid (`BIT`) | Paid - indicates if the purchase order has been paid | 
| Flagged (`BIT`) | Flagged - indicates if the purchase order has been flagged for any reason | 
| ProductTotal (`MONEY`) | Total Product - total dollar cost for the product on the purchase order | 
| Tax1Name (`NVARCHAR(MAX)`) | Tax 1 - name of the first tax charged on the purchase order | 
| Tax1Amount (`MONEY`) | Tax 1 Amount - total dollar amount for the first tax charged on the purchase order | 
| Tax2Name (`NVARCHAR(MAX)`) | Tax 2 - name of the second tax charged on the purchase order | 
| Tax2Amount (`MONEY`) | Tax 2 Amount - total dollar amount for the second tax charged on the purchase order | 
| Shipping (`MONEY`) | Shipping Costs - total dollar amount of the shipping costs | 
| TotalInvoice (`MONEY`) | Total Invoice - total cost of the invoice, calculated as Total Product + Tax 1 + Tax 2 + Shipping Costs | 
| OrderingComments (`VARCHAR(500)`) | Ordering Comments - any comments entered when the purchase order was created | 
| ReceivingComments (`VARCHAR(500)`) | Receiving Comments - any comments entered when the purchase order was received | 


## RMAHistoryInvoiceReportData

```json
{
	"ChannelName": "English Channel",
	"Comments": "Phone missing from package delivered on invoice #87742",
	"Committed": "true",
	"Completed": "true",
	"CreditInvoiceNumber": "",
	"CustomerID": "-1",
	"CustomerName": "",
	"DateCommitted": "2011-03-02T17:10:11.78",
	"DateCreated": "2011-03-02T17:10:11.78",
	"DistrictName": "Valley Area District",
	"EmployeeName": "iQmetrix User",
	"ReceivingComments": "Received Credit on 2/22/11.",
	"RegionName": "Region A",
	"RMANumber": "112482",
	"ShippedAway": "true",
	"ShippingCost": "8.5",
	"ShippingMethod": "Regular",
	"StockBalanceID": "1",
	"StockBalanceIDByStore": "84WEASB1",
	"StoreName": "84 West",
	"TotalCost": "460",
	"TotalCostCredited": "459",
	"VendorName": "Reliance",
	"WaybillNumber": ""
}
```

| Name | Description |
|:-----|:------------|
| ChannelName (`NVARCHAR (MAX)`) | Channel - channel for the rows location | 
| Comments (`VARCHAR (1000)`) | Comments - comments entered on the RMA form will be displayed here | 
| Committed (`BIT`) | Committed - indicates if the RMA is committed or non-committed | 
| Completed (`BIT`) | Completed - indicates if the RMA is completed | 
| CreditInvoiceNumber (`VARCHAR (20)`) | Credit Invoice # - number of the credit invoice from vendor used to provide an audit trail | 
| CustomerID (`INT`) | Identifier for a customer in RQ | 
| CustomerName (`VARCHAR (101)`) | Customer - it is possible to RMA a customer owned product (very rare); customer name will be recorded here | 
| DateCommitted (`DateTime`) | Committed On - date and time committed | 
| DateCreated (`DateTime`) | Created On - date and time the RMA was created | 
| DistrictName (`NVARCHAR (MAX)`) | District - district for the rows location | 
| EmployeeName (`VARCHAR (51)`) | Created By - name of the employee logged into RQ when the RMA was created | 
| ReceivingComments (`VARCHAR (1000)`) | Receiving Comments - comments entered during the RMA completion process will be displayed here | 
| RegionName (`NVARCHAR (MAX)`) | Region - region for the rows location | 
| RMANumber (`VARCHAR (15)`) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail. | 
| ShippedAway (`BIT`) | Shipped Away - indicates if the Shipped box on the RMA has been checked | 
| ShippingCost (`MONEY`) | Shipping Cost - total of the cost to return the product | 
| ShippingMethod (`VARCHAR (30)`) | Shipping Method - shipping company name will appear here | 
| StockBalanceID (`INT`) | Identifier in RQ | 
| StockBalanceIDByStore (`VARCHAR (14)`) | RMA # - RMA number assigned by RQ | 
| StoreName (`NVARCHAR (MAX)`) | Location - location that created the RMA | 
| TotalCost (`MONEY`) | Total Cost - total cost of items sent away on RMA | 
| TotalCostCredited (`MONEY`) | Total Cost Credited - amount credited by vendor for products on the RMA. It grabs the average cost under the product. | 
| VendorName (`NVARCHAR (MAX)`) | Vendor - vendor receiving the RMA | 
| WaybillNumber (`VARCHAR (50)`) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | 


## RMAHistoryProductReportData

```json
{
	"ActionTaken": "1",
	"ChannelName": "English Channel",
	"DateCreated": "2011-03-02T17:10:11.78",
	"DateReceived": "2011-03-02T17:18:44.913",
	"DateShipped": "2011-03-02T17:10:12.17",
	"DistrictName": "Valley Area District",
	"EmployeeName1": "iQmetrix User",
	"EmployeeName2": "iQmetrix User",
	"ProductIdentifier": "ACPHUT000163",
	"ProductName": "HTC Droid Incredible",
	"Quantity": "1",
	"RegionName": "Region A",
	"RMANumber": "112482",
	"SerialNumberAdded": "",
	"SerialNumberRemoved": "A1000017AB0E93",
	"StockBalanceID": "1",
	"StockBalanceIDByStore": "84WEASB1",
	"StoreName": "84 West",
	"TotalCost": "460",
	"TotalCostCredited": "459",
	"UnitCost": "460",
	"UnitCostCredited": "459",
	"VendorInvoiceNumber": "",
	"VendorName": "Reliance",
	"VendorPartNumber": ""
}
```

| Name | Description |
|:-----|:------------|
| ActionTaken (`TINYINT`) | Type - indicated the type of RMA: Credit, Replacement, Rejected or Repaired (1:Credit, 2:Replacement, 3:Rejected, 4:Repaired) | 
| ChannelName (`NVARCHAR (MAX)`) | Channel - channel for the rows location | 
| DateCreated (`DateTime`) | Created On - date and time the RMA was created | 
| DateReceived (`DateTime`) | Received On - date and time the RMA was received | 
| DateShipped (`DateTime`) | Shipped On - date and time the Shipped box was checked | 
| DistrictName (`NVARCHAR (MAX)`) | District - district for the rows location | 
| EmployeeName1 (`VARCHAR (51)`) | Shipped By - name of the employee logged into RQ when the RMA was shipped | 
| EmployeeName2 (`VARCHAR (51)`) | TransferHistoryInvoiceDetailReportData | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR (MAX)`) | Product Name - name of the product as it appears in the inventory | 
| Quantity (`INT`) | Quantity - total number of that product SKU on the purchase order | 
| RegionName (`NVARCHAR (MAX)`) | Region - region for the rows location | 
| RMANumber (`VARCHAR (15)`) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail | 
| SerialNumberAdded (`VARCHAR (100)`) | Tracking # Received - tracking number received as replacement | 
| SerialNumberRemoved (`VARCHAR (100)`) | Tracking # Shipped - tracking number shipped from inventory | 
| StockBalanceID (`INT`) | Identifier in RQ | 
| StockBalanceIDByStore (`VARCHAR (14)`) | RMA # - RMA number assigned by RQ | 
| StoreName (`NVARCHAR (MAX)`) | Location - location that created the RMA | 
| TotalCost (`MONEY`) | Total Cost - total cost of items sent away on RMA | 
| TotalCostCredited (`MONEY`) | Total Cost Credited - dollar amount credited by vendor for products on the RMA | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit sent away on RMA; weighted average cost for non-serialized products and true cost for serialized products | 
| UnitCostCredited (`MONEY`) | Unit Cost Credited - dollar amount of the credit granted by the vendor per unit | 
| VendorInvoiceNumber (`VARCHAR (20)`) | Vendor Invoice # - invoice number assigned by the vendor for the purchase order | 
| VendorName (`NVARCHAR (MAX)`) | RMA Vendor - vendor to whom the product was returned | 
| VendorPartNumber (`VARCHAR (25)`) | RMA Vendor SKU - SKU assigned by the RMA Vendor | 


## StaleInventoryReportData

```json
{
	"GlobalProductID": "9647",
	"SpecialProductID": "0",
	"ProductSKU": "KLERAP000191",
	"ProductName": "Products",
	"QtySold": "403",
	"DailyAvg": "1.1",
	"StockOut": "-367",
	"QtyInStock": "-403",
	"QtyOnOrder": "1",
	"QtyOnBackOrder": "2",
	"QtyInNonSellable": "0",
	"QtyTransferIn": "1",
	"QtyTransferOut": "3",
	"QtyOnRMA": "2",
	"QtyOnLoan": "2",
	"QtyCommittedOnOrderEntry": "0"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| SpecialProductID (`INT`) |  | 
| ProductSKU (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of the product as it appears in the inventory | 
| QtySold (`INT`) | Sold - total quantity sold during the time frame | 
| DailyAvg (`DECIMAL`) | Daily Avg - average number sold per day for the search criteria (quantity sold / days) | 
| StockOut (`DECIMAL`) | Stock Out - number of days it will take to deplete the in stock value (In stock quantity / daily average) | 
| QtyInStock (`INT`) | In Stock - total quantity in stock for the search criteria (same as availability tab) | 
| QtyOnOrder (`INT`) | On Order - current quantity on outstanding purchase orders, including committed and back order POs | 
| QtyOnBackOrder (`INT`) | On Back Order - the quantity not received | 
| QtyInNonSellable (`INT`) | Non-Sellable - current quantity in non-sellable status | 
| QtyTransferIn (`INT`) | Transfer In - current quantity transferred in | 
| QtyTransferOut (`INT`) | Transfer Out - current quantity transferred out | 
| QtyOnRMA (`INT`) | On RMA - current quantity on RMA for replacement or repair | 
| QtyOnLoan (`INT`) | On Loan - total quantity loaned out on consignment | 
| QtyCommittedOnOrderEntry (`INT`) | Committed - current quantity committed on Sales Orders         | 


## TransferHistoryInvoiceDetailReportData

```json
{
	"BillingStoreName": "100: My Network LLC - Anchorage",
	"CancelledByID": "null",
	"CancelledByName": "null",
	"CancelledDate": "null",
	"Committed": "true",
	"Completed": "true",
	"DateCommitted": "2016-04-19T14:57:20.32",
	"DateRequested": "2016-04-19T14:57:20.32",
	"EstimatedArrivalDate": "2016-04-20T00:00:00",
	"ReceivingChannelName": "English Channel",
	"ReceivingComments": "",
	"ReceivingDistrictName": "Westminster",
	"ReceivingRegionName": "London",
	"ReceivingStoreName": "100: My Network LLC - Anchorage",
	"RequestingComments": "",
	"RequestingEmployeeName": "iQmetrix User",
	"ShippingChannelName": "English Channel",
	"ShippingComments": "",
	"ShippingCost": "0",
	"ShippingDistrictName": "Valley Area District",
	"ShippingMethod": "Regular",
	"ShippingRegionName": "Region A",
	"ShippingStoreName": "84 West",
	"TotalInvoice": "500",
	"TransferID": "4326",
	"TransferIDByStore": "77224TR1",
	"WaybillNumber": "53454354"
}
```

| Name | Description |
|:-----|:------------|
| BillingStoreName (`NVARCHAR(MAX)`) | Bill To - location to be billed | 
| CancelledByID (`INT`) | Internal identifier in RQ | 
| CancelledByName (`VARCHAR (51)`) | Cancelled By - employee logged into RQ when the transfer was cancelled | 
| CancelledDate (`DateTime`) | Cancelled On - date and time the transfer was cancelled | 
| Committed (`BIT`) | Committed - indicates if the transfer has been committed or not | 
| Completed (`BIT`) | Completed - indicates if the transfer has been completed, i.e. received by the requesting location | 
| DateCommitted (`DateTime`) | Committed On - date and time the transfer was committed | 
| DateRequested (`DateTime`) | Requested On - date and time the product(s) were requested | 
| EstimatedArrivalDate (`DateTime`) | ETA - original estimate of date of delivery | 
| ReceivingChannelName (`NVARCHAR(MAX)`) | Received At Channel - channel that received the inventory | 
| ReceivingComments (`VARCHAR (500)`) | Receiving Comments - any commented entered at the time the transfer was received | 
| ReceivingDistrictName (`NVARCHAR(MAX)`) | Received At District - district that received the inventory | 
| ReceivingRegionName (`NVARCHAR(MAX)`) | Received At Region - region that received the inventory | 
| ReceivingStoreName (`NVARCHAR(MAX)`) | Received At - location that received the product(s) shipped from another location | 
| RequestingComments (`VARCHAR (500)`) | Requesting Comments - any comments entered at the time the transfer request was made | 
| RequestingEmployeeName (`VARCHAR (51)`) | Requested By - employee logged into RQ when the request was made | 
| ShippingChannelName (`NVARCHAR(MAX)`) | Shipped From Channel - channel that shipped the inventory | 
| ShippingComments (`VARCHAR (500)`) | Shipping Comments - any comments entered at the time the transfer was shipped | 
| ShippingCost (`MONEY`) | Shipping Cost - total cost to ship the product(s) | 
| ShippingDistrictName (`NVARCHAR(MAX)`) | Shipped From District - district that shipped the inventory | 
| ShippingMethod (`VARCHAR (30)`) | Shipping Method - selected at the time of shipping | 
| ShippingRegionName (`NVARCHAR(MAX)`) | Shipped From Region - region that shipped the inventory | 
| ShippingStoreName (`NVARCHAR(MAX)`) | Shipped From - location that shipped the product(s) to another location | 
| TotalInvoice (`MONEY`) | Total Invoice - total dollar amount of the cost of the product(s) on being transferred | 
| TransferID (`INT`) | Identifier for a transfer in RQ | 
| TransferIDByStore (`VARCHAR (14)`) | Transfer # - transfer number generated by RQ | 
| WaybillNumber (`VARCHAR (100)`) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | 


## TransferHistoryProductDetailReportData

```json
{
	"CancelledByID": "null",
	"CancelledByName": "null",
	"CancelledDate": "null",
	"CategoryPath": "Galaxies",
	"DateReceived": "2011-06-02T10:04:51.59",
	"DateShipped": "2011-06-02T09:41:08.027",
	"ProductIdentifier": "ASBORI000028",
	"ProductName": "BG Curve2 Posh PK",
	"Quantity": "1",
	"ReceivingChannelName": "English Channel",
	"ReceivingDistrictName": "Westminster",
	"ReceivingEmployeeName": "Courtney Noon",
	"ReceivingRegionName": "London",
	"ReceivingStoreName": "100: My Network LLC - Anchorage",
	"RequestingEmployeeName": "iQmetrix User",
	"SerialNumber": "",
	"ShippingChannelName": "English Channel",
	"ShippingDistrictName": "Valley Area District",
	"ShippingEmployeeName": "Courtney Noon",
	"ShippingRegionName": "Region A",
	"ShippingStoreName": "84 West",
	"TotalCost": "9.6705",
	"TransferID": "718",
	"TransferIDByStore": "WIREGTR73",
	"UnitCost": "9.6705",
	"VendorName": "LTD Wireless",
	"VendorPartNumber": "EEG675",
	"WaybillNumber": "53454354"
}
```

| Name | Description |
|:-----|:------------|
| CancelledByID (`INT`) | Internal identifier in RQ | 
| CancelledByName (`VARCHAR (51)`) | Cancelled By - cancelling employee | 
| CancelledDate (`DateTime`) | Cancelled On - date the transfer was cancelled | 
| CategoryPath (`NVARCHAR(MAX)`) | Category - inventory category this product lives in | 
| DateReceived (`DateTime`) | Received On - date the item(s) were received on | 
| DateShipped (`DateTime`) | Shipped On - date the item(s) was shipped | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of this product as it appears in inventory | 
| Quantity (`INT`) | Quantity - quantity of item transferred | 
| ReceivingChannelName (`NVARCHAR(MAX)`) | Received At Channel - channel that received the inventory | 
| ReceivingDistrictName (`NVARCHAR(MAX)`) | Received At District - district that received the inventory | 
| ReceivingEmployeeName (`VARCHAR (51)`) | Received By - employee who received the transfer | 
| ReceivingRegionName (`NVARCHAR(MAX)`) | Received At Region - region that received the inventory | 
| ReceivingStoreName (`NVARCHAR(MAX)`) | Received At - location that received the product(s) shipped from another location | 
| RequestingEmployeeName (`VARCHAR (51)`) | Requested By - employee who requested the transfer | 
| SerialNumber (`VARCHAR (100)`) | Tracking # - tracking # for the item shipped | 
| ShippingChannelName (`NVARCHAR(MAX)`) | Shipped From Channel - channel that shipped the inventory | 
| ShippingDistrictName (`NVARCHAR(MAX)`) | Shipped From District - district that shipped the inventory | 
| ShippingEmployeeName (`VARCHAR (51)`) | Shipped By - employee who shipped the transfer | 
| ShippingRegionName (`NVARCHAR(MAX)`) | Shipped From Region - region that shipped the inventory | 
| ShippingStoreName (`NVARCHAR(MAX)`) | Shipped From - location that shipped the product(s) to another location | 
| TotalCost (`MONEY`) | Total Cost - cost per item multiplied by how many of the item were transferred | 
| TransferID (`INT`) | Internal identifier in RQ | 
| TransferIDByStore (`VARCHAR(14)`) | Transfer # - transfer number generated by RQ | 
| UnitCost (`MONEY`) | Unit Cost - cost per item | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - vendor the item was purchased from | 
| VendorPartNumber (`VARCHAR (25)`) | Vendor SKU - vendor SKU | 
| WaybillNumber (`VARCHAR (100)`) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | 




# Enumerations

## BinStatus

| Id | Name |
|:---|:-----|
| 1 | InStock|
| 2 | OnRMA |
| 3 | TransferIn |
| 4 | TransferOut |
| 5 | OnLoan |
| 6 | NonSellable |
| 7 | OnOrder |
| 8 | OnBackOrder |
| 9 | AnyStatusWithoutOrder |
| 10 | AnyStatus |   


# Requests



## <span class='get'>GET</span> the Adjustment History Invoice Detail Report

For more information, see {{support_AdjustmentHistoryReport}}.



> Definition

```
GET /reports/adjustmenthistoryinvoicedetailreport?ReasonCode={ReasonCode}&StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&SerialNumber={SerialNumber}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheAdjustmentHistoryInvoiceDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAdjustmentHistoryInvoiceDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#reasoncode'>ReasonCode</a>. Use -1 to specify All Reason Codes. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-reason-codes">Getting Reason Codes</a></li>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>SerialNumber</code> (Optional)  - Serial Number</li>
    <li><code>ProductIdentifier</code> (Optional)  - Product SKU</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[adjustmenthistoryinvoicedetailreportdata](#AdjustmentHistoryInvoiceDetailReportData)]











> Example Response



 
```python
[
    {
        "AdjustmentType": 1,
        "Comments": "Comment",
        "CountSheetID": 1,
        "CountSheetIDByStore": "1",
        "DateCreated": "2015-12-16T07:39:39.49",
        "EmployeeName": "iQmetrix User",
        "IsReceiving": false,
        "StoreName": "100: My Network LLC - Anchorage",
        "TotalInvoice": 0,
        "TransactionID": 19240,
        "TransactionIDByStore": "84WEAIA1187"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "AdjustmentType": 1,
            "Comments": "Comment",
            "CountSheetID": 1,
            "CountSheetIDByStore": "1",
            "DateCreated": "2015-12-16T07:39:39.49",
            "EmployeeName": "iQmetrix User",
            "IsReceiving": false,
            "StoreName": "100: My Network LLC - Anchorage",
            "TotalInvoice": 0,
            "TransactionID": 19240,
            "TransactionIDByStore": "84WEAIA1187"
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
}
```





```xml
<Table>
  <Record>
    <AdjustmentType>1</AdjustmentType>
    <Comments>Comment</Comments>
    <CountSheetID>1</CountSheetID>
    <CountSheetIDByStore>1</CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalInvoice>0</TotalInvoice>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <AdjustmentType>1</AdjustmentType>
    <Comments>Comment</Comments>
    <CountSheetID>1</CountSheetID>
    <CountSheetIDByStore>1</CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalInvoice>0</TotalInvoice>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
AdjustmentType,Comments,CountSheetID,CountSheetIDByStore,DateCreated,EmployeeName,IsReceiving,StoreName,TotalInvoice,TransactionID,TransactionIDByStore
1,Comment,1,1,2015-12-16T07:39:39.49,iQmetrix User,false,100: My Network LLC - Anchorage,0,19240,84WEAIA1187
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Adjustment History Product Detail Report

For more information, see {{support_AdjustmentHistoryReport}}.



> Definition

```
GET /reports/adjustmenthistoryproductdetailreport?ReasonCode={ReasonCode}&StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&ProductIdentifier={ProductIdentifier}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheAdjustmentHistoryProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAdjustmentHistoryProductDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#reasoncode'>ReasonCode</a>. Use -1 to specify All Reason Codes. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-reason-codes">Getting Reason Codes</a></li>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>ProductIdentifier</code> (Optional)  - Product SKU</li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[adjustmenthistoryproductdetailreportdata](#AdjustmentHistoryProductDetailReportData)]











> Example Response



 
```python
[
    {
        "Comments": "Comment",
        "CountSheetID": 0,
        "CountSheetIDByStore": "",
        "DateCreated": "2015-12-16T07:39:39.49",
        "EmployeeName": "iQmetrix User",
        "IsReceiving": false,
        "ProductIdentifier": "ASMAAP000017",
        "ProductName": "Samsung Galaxy S4",
        "Quantity": 5,
        "ReasonCode": "Unexplained Shrinkage",
        "SerialNumber": "123000000000000",
        "StoreName": "100: My Network LLC - Anchorage",
        "TotalCost": 0,
        "TransactionID": 19240,
        "TransactionIDByStore": "84WEAIA1187",
        "UnitCost": 0,
        "VendorName": "",
        "VendorSKU": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "Comments": "Comment",
            "CountSheetID": 0,
            "CountSheetIDByStore": "",
            "DateCreated": "2015-12-16T07:39:39.49",
            "EmployeeName": "iQmetrix User",
            "IsReceiving": false,
            "ProductIdentifier": "ASMAAP000017",
            "ProductName": "Samsung Galaxy S4",
            "Quantity": 5,
            "ReasonCode": "Unexplained Shrinkage",
            "SerialNumber": "123000000000000",
            "StoreName": "100: My Network LLC - Anchorage",
            "TotalCost": 0,
            "TransactionID": 19240,
            "TransactionIDByStore": "84WEAIA1187",
            "UnitCost": 0,
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
}
```





```xml
<Table>
  <Record>
    <Comments>Comment</Comments>
    <CountSheetID>0</CountSheetID>
    <CountSheetIDByStore></CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <ProductIdentifier>ASMAAP000017</ProductIdentifier>
    <ProductName>Samsung Galaxy S4</ProductName>
    <Quantity>5</Quantity>
    <ReasonCode>Unexplained Shrinkage</ReasonCode>
    <SerialNumber>123000000000000</SerialNumber>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalCost>0</TotalCost>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
    <UnitCost>0</UnitCost>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <Comments>Comment</Comments>
    <CountSheetID>0</CountSheetID>
    <CountSheetIDByStore></CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <ProductIdentifier>ASMAAP000017</ProductIdentifier>
    <ProductName>Samsung Galaxy S4</ProductName>
    <Quantity>5</Quantity>
    <ReasonCode>Unexplained Shrinkage</ReasonCode>
    <SerialNumber>123000000000000</SerialNumber>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalCost>0</TotalCost>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
    <UnitCost>0</UnitCost>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
Comments,CountSheetID,CountSheetIDByStore,DateCreated,EmployeeName,IsReceiving,ProductIdentifier,ProductName,Quantity,ReasonCode,SerialNumber,StoreName,TotalCost,TransactionID,TransactionIDByStore,UnitCost,VendorName,VendorSKU
Comment,0,,2015-12-16T07:39:39.49,iQmetrix User,false,ASMAAP000017,Samsung Galaxy S4,5,Unexplained Shrinkage,123000000000000,100: My Network LLC - Anchorage,0,19240,84WEAIA1187,0,,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Aged Serialized Inventory Report

For more information see {{support_AgedSerializedInventoryReport}}.



> Definition

```
GET /reports/AgedSeralizedInventoryReport?SearchMethod={SearchMethod}&SearchCriteria2={SearchCriteria2}&StoreIDLoggedIn={StoreIDLoggedIn}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/AgedSeralizedInventoryReport?SearchMethod=3&SearchCriteria2=-1&StoreIDLoggedIn=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/AgedSeralizedInventoryReport?SearchMethod=3&SearchCriteria2=-1&StoreIDLoggedIn=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheAgedSerializedInventoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/AgedSeralizedInventoryReport?SearchMethod=3&SearchCriteria2=-1&StoreIDLoggedIn=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAgedSerializedInventoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/AgedSeralizedInventoryReport?SearchMethod=3&SearchCriteria2=-1&StoreIDLoggedIn=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/AgedSeralizedInventoryReport?SearchMethod=3&SearchCriteria2=-1&StoreIDLoggedIn=1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 (Location), 2 (Vendor), 3 (Location and Vendor), 4 (Location and Product SKU) or 5 (Location and Category)</li>
    <li><code>SearchCriteria2</code> (<strong>Required</strong>)  - Identifier for a Location (SearchMethod 1), Vendor (SearchMethod 2 or 3), Product SKU (SearchMethod 4) or Category (SearchMethod 5)</li>
    <li><code>StoreIDLoggedIn</code> (<strong>Required</strong>)  - Identifier for a store in RQ. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-a-list-of-stores-in-rq'>Getting A List of Stores in RQ</a></li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[agedseralizedinventoryreportdata](#AgedSeralizedInventoryReportData)]











> Example Response



 
```python
[
    {
        "StoreID": 1,
        "StoreTypeName": "Retail Store",
        "StoreName": "84 West",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "GlobalProductID": 781,
        "ProductIdentifier": "ACPHRI000170",
        "ProductName": "Blackberry 9650 Bold  VZW",
        "SerialNumber": "123000000000000",
        "SerializedCOS": 11919371.73,
        "DateReceived": "2016-07-27T14:08:17.643",
        "DateReceivedAtStore": "2016-07-27T14:08:17.643",
        "DaysUntilStockBalance": 0,
        "NonSellable": false,
        "InTransfer": false,
        "CommittedOnOrderEntry": false,
        "InStock": true,
        "IsUsed": false,
        "VendorName": "Brightpoint",
        "VendorPartNumber": "DANKIT"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "StoreID": 1,
            "StoreTypeName": "Retail Store",
            "StoreName": "84 West",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "GlobalProductID": 781,
            "ProductIdentifier": "ACPHRI000170",
            "ProductName": "Blackberry 9650 Bold  VZW",
            "SerialNumber": "123000000000000",
            "SerializedCOS": 11919371.73,
            "DateReceived": "2016-07-27T14:08:17.643",
            "DateReceivedAtStore": "2016-07-27T14:08:17.643",
            "DaysUntilStockBalance": 0,
            "NonSellable": false,
            "InTransfer": false,
            "CommittedOnOrderEntry": false,
            "InStock": true,
            "IsUsed": false,
            "VendorName": "Brightpoint",
            "VendorPartNumber": "DANKIT"
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
}
```





```xml
<Table>
  <Record>
    <StoreID>1</StoreID>
    <StoreTypeName>Retail Store</StoreTypeName>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <GlobalProductID>781</GlobalProductID>
    <ProductIdentifier>ACPHRI000170</ProductIdentifier>
    <ProductName>Blackberry 9650 Bold  VZW</ProductName>
    <SerialNumber>123000000000000</SerialNumber>
    <SerializedCOS>11919371.73</SerializedCOS>
    <DateReceived>2016-07-27T14:08:17.643</DateReceived>
    <DateReceivedAtStore>2016-07-27T14:08:17.643</DateReceivedAtStore>
    <DaysUntilStockBalance>0</DaysUntilStockBalance>
    <NonSellable>false</NonSellable>
    <InTransfer>false</InTransfer>
    <CommittedOnOrderEntry>false</CommittedOnOrderEntry>
    <InStock>true</InStock>
    <IsUsed>false</IsUsed>
    <VendorName>Brightpoint</VendorName>
    <VendorPartNumber>DANKIT</VendorPartNumber>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <StoreID>1</StoreID>
    <StoreTypeName>Retail Store</StoreTypeName>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <GlobalProductID>781</GlobalProductID>
    <ProductIdentifier>ACPHRI000170</ProductIdentifier>
    <ProductName>Blackberry 9650 Bold  VZW</ProductName>
    <SerialNumber>123000000000000</SerialNumber>
    <SerializedCOS>11919371.73</SerializedCOS>
    <DateReceived>2016-07-27T14:08:17.643</DateReceived>
    <DateReceivedAtStore>2016-07-27T14:08:17.643</DateReceivedAtStore>
    <DaysUntilStockBalance>0</DaysUntilStockBalance>
    <NonSellable>false</NonSellable>
    <InTransfer>false</InTransfer>
    <CommittedOnOrderEntry>false</CommittedOnOrderEntry>
    <InStock>true</InStock>
    <IsUsed>false</IsUsed>
    <VendorName>Brightpoint</VendorName>
    <VendorPartNumber>DANKIT</VendorPartNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
StoreID,StoreTypeName,StoreName,DistrictName,RegionName,ChannelName,GlobalProductID,ProductIdentifier,ProductName,SerialNumber,SerializedCOS,DateReceived,DateReceivedAtStore,DaysUntilStockBalance,NonSellable,InTransfer,CommittedOnOrderEntry,InStock,IsUsed,VendorName,VendorPartNumber
1,Retail Store,84 West,Valley Area District,Region A,Regina Channel,781,ACPHRI000170,Blackberry 9650 Bold  VZW,123000000000000,11919371.73,2016-07-27T14:08:17.643,2016-07-27T14:08:17.643,0,false,false,false,true,false,Brightpoint,DANKIT
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Auto Ordering Report

For more information see {{support_AutoOrderingReport}}.



> Definition

```
GET /reports/AutoOrderingReport?Search={Search}&OrderBy={OrderBy}&VendorID={VendorID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&CategoryNumber={CategoryNumber}&ProductsToShow={ProductsToShow}&StoreTypeID={StoreTypeID}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/AutoOrderingReport?Search=ByCategory&OrderBy=Priority&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&ProductsToShow=1&StoreTypeID=-1&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/AutoOrderingReport?Search=ByCategory&OrderBy=Priority&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&ProductsToShow=1&StoreTypeID=-1&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheAutoOrderingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/AutoOrderingReport?Search=ByCategory&OrderBy=Priority&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&ProductsToShow=1&StoreTypeID=-1&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAutoOrderingReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/AutoOrderingReport?Search=ByCategory&OrderBy=Priority&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&ProductsToShow=1&StoreTypeID=-1&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/AutoOrderingReport?Search=ByCategory&OrderBy=Priority&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&ProductsToShow=1&StoreTypeID=-1&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>Search</code> (<strong>Required</strong>)  - Acceptable valus include ByCategory (use CategoryNumber) or ByProductSKU</li>
    <li><code>OrderBy</code> (<strong>Required</strong>)  - Acceptable values include Priority or LowestCost</li>
    <li><code>VendorID</code> (<strong>Required</strong>)  - Identifier for a Vendor in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-vendors-in-rq">Getting a List of Vendors in RQ</a>. Use -1 for all Vendors</li>
    <li><code>ProductsToShow</code> (<strong>Required</strong>)  - Acceptable values include 1 (Shortages), 2 (Overages), 3 (Shortages + Overages), 4 (All Products) or 5 (All Products with Min/Max)</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>StoreTypeID</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#storetype'>StoreType</a>. Use -1 to specify All Types. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-store-types'>Getting Store Types</a></li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[autoorderingreportdata](#AutoOrderingReportData)]











> Example Response



 
```python
[
    {
        "GlobalProductID": 9918,
        "ProductIdentifier": "AAATAP000093",
        "CategoryNumber": "1010271011",
        "StoreTypeName": "Retail Store",
        "CategoryPath": "Activations",
        "CategoryName": "Equipment",
        "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
        "StoreID": 1,
        "StoreName": "84 West",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "Cost": 629,
        "VendorID": 21,
        "VendorPartNumber": "",
        "VendorName": "Offwire",
        "Priority": 1,
        "VendorNumber": "",
        "MinQty": 1,
        "MaxQty": 10,
        "QtyInStock": 1,
        "NonSellableQuantity": 1,
        "QtyTransferIn": 2,
        "QtyTransferOut": 3,
        "QtyOnRMA": 4,
        "QtyOnLoan": 1,
        "QtyCommittedOnOrderEntry": 2,
        "QtyOnOrder": 0,
        "QtyOnBackOrder": 1,
        "IsUsedQty": 5,
        "DoNotOrder": 1
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "GlobalProductID": 9918,
            "ProductIdentifier": "AAATAP000093",
            "CategoryNumber": "1010271011",
            "StoreTypeName": "Retail Store",
            "CategoryPath": "Activations",
            "CategoryName": "Equipment",
            "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
            "StoreID": 1,
            "StoreName": "84 West",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "Cost": 629,
            "VendorID": 21,
            "VendorPartNumber": "",
            "VendorName": "Offwire",
            "Priority": 1,
            "VendorNumber": "",
            "MinQty": 1,
            "MaxQty": 10,
            "QtyInStock": 1,
            "NonSellableQuantity": 1,
            "QtyTransferIn": 2,
            "QtyTransferOut": 3,
            "QtyOnRMA": 4,
            "QtyOnLoan": 1,
            "QtyCommittedOnOrderEntry": 2,
            "QtyOnOrder": 0,
            "QtyOnBackOrder": 1,
            "IsUsedQty": 5,
            "DoNotOrder": 1
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
}
```





```xml
<Table>
  <Record>
    <GlobalProductID>9918</GlobalProductID>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <CategoryNumber>1010271011</CategoryNumber>
    <StoreTypeName>Retail Store</StoreTypeName>
    <CategoryPath>Activations</CategoryPath>
    <CategoryName>Equipment</CategoryName>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <StoreID>1</StoreID>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <Cost>629</Cost>
    <VendorID>21</VendorID>
    <VendorPartNumber></VendorPartNumber>
    <VendorName>Offwire</VendorName>
    <Priority>1</Priority>
    <VendorNumber></VendorNumber>
    <MinQty>1</MinQty>
    <MaxQty>10</MaxQty>
    <QtyInStock>1</QtyInStock>
    <NonSellableQuantity>1</NonSellableQuantity>
    <QtyTransferIn>2</QtyTransferIn>
    <QtyTransferOut>3</QtyTransferOut>
    <QtyOnRMA>4</QtyOnRMA>
    <QtyOnLoan>1</QtyOnLoan>
    <QtyCommittedOnOrderEntry>2</QtyCommittedOnOrderEntry>
    <QtyOnOrder>0</QtyOnOrder>
    <QtyOnBackOrder>1</QtyOnBackOrder>
    <IsUsedQty>5</IsUsedQty>
    <DoNotOrder>1</DoNotOrder>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <GlobalProductID>9918</GlobalProductID>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <CategoryNumber>1010271011</CategoryNumber>
    <StoreTypeName>Retail Store</StoreTypeName>
    <CategoryPath>Activations</CategoryPath>
    <CategoryName>Equipment</CategoryName>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <StoreID>1</StoreID>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <Cost>629</Cost>
    <VendorID>21</VendorID>
    <VendorPartNumber></VendorPartNumber>
    <VendorName>Offwire</VendorName>
    <Priority>1</Priority>
    <VendorNumber></VendorNumber>
    <MinQty>1</MinQty>
    <MaxQty>10</MaxQty>
    <QtyInStock>1</QtyInStock>
    <NonSellableQuantity>1</NonSellableQuantity>
    <QtyTransferIn>2</QtyTransferIn>
    <QtyTransferOut>3</QtyTransferOut>
    <QtyOnRMA>4</QtyOnRMA>
    <QtyOnLoan>1</QtyOnLoan>
    <QtyCommittedOnOrderEntry>2</QtyCommittedOnOrderEntry>
    <QtyOnOrder>0</QtyOnOrder>
    <QtyOnBackOrder>1</QtyOnBackOrder>
    <IsUsedQty>5</IsUsedQty>
    <DoNotOrder>1</DoNotOrder>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
GlobalProductID,ProductIdentifier,CategoryNumber,StoreTypeName,CategoryPath,CategoryName,ProductName,StoreID,StoreName,DistrictName,RegionName,ChannelName,Cost,VendorID,VendorPartNumber,VendorName,Priority,VendorNumber,MinQty,MaxQty,QtyInStock,NonSellableQuantity,QtyTransferIn,QtyTransferOut,QtyOnRMA,QtyOnLoan,QtyCommittedOnOrderEntry,QtyOnOrder,QtyOnBackOrder,IsUsedQty,DoNotOrder
9918,AAATAP000093,1010271011,Retail Store,Activations,Equipment,Apple iPhone 6 Plus 16GB Space Gray - AT&T,1,84 West,Valley Area District,Region A,Regina Channel,629,21,,Offwire,1,,1,10,1,1,2,3,4,1,2,0,1,5,1
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Back Order Listing Report

For more information see {{support_BackOrderListingReport}}.



> Definition

```
GET /reports/backorderlistingreport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&VendorID={VendorID}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/backorderlistingreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&VendorID=-1&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/backorderlistingreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&VendorID=-1&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheBackOrderListingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/backorderlistingreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&VendorID=-1&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheBackOrderListingReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/backorderlistingreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&VendorID=-1&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/backorderlistingreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&VendorID=-1&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>VendorID</code> (Optional)  - Identifier for a Vendor in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-vendors-in-rq">Getting a List of Vendors in RQ</a>. Use -1 for all Vendors</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[backorderlistingreportdata](#BackOrderListingReportData)]











> Example Response



 
```python
[
    {
        "PurchaseOrderID": 17386,
        "PurchaseOrderIDByStore": "84WEAPO1059",
        "GlobalProductID": 2815,
        "ProductIdentifier": "KLERNO000015",
        "QtyOrdered": 28,
        "QtyReceived": 0,
        "ReferenceNumber": "",
        "QtyOnBackOrder": 28,
        "DateCommitted": "2015-07-16T09:08:39.11",
        "EstimatedArrivalDate": "2015-07-06T00:00:00",
        "ProductName": "Red Bell Case",
        "StoreName": "84 West",
        "EmployeeName": "iQmetrix Employee",
        "VendorName": "Offwire",
        "VendorPartNumber": "HFW5123",
        "VendorNumber": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "PurchaseOrderID": 17386,
            "PurchaseOrderIDByStore": "84WEAPO1059",
            "GlobalProductID": 2815,
            "ProductIdentifier": "KLERNO000015",
            "QtyOrdered": 28,
            "QtyReceived": 0,
            "ReferenceNumber": "",
            "QtyOnBackOrder": 28,
            "DateCommitted": "2015-07-16T09:08:39.11",
            "EstimatedArrivalDate": "2015-07-06T00:00:00",
            "ProductName": "Red Bell Case",
            "StoreName": "84 West",
            "EmployeeName": "iQmetrix Employee",
            "VendorName": "Offwire",
            "VendorPartNumber": "HFW5123",
            "VendorNumber": ""
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
}
```





```xml
<Table>
  <Record>
    <PurchaseOrderID>17386</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1059</PurchaseOrderIDByStore>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>KLERNO000015</ProductIdentifier>
    <QtyOrdered>28</QtyOrdered>
    <QtyReceived>0</QtyReceived>
    <ReferenceNumber></ReferenceNumber>
    <QtyOnBackOrder>28</QtyOnBackOrder>
    <DateCommitted>2015-07-16T09:08:39.11</DateCommitted>
    <EstimatedArrivalDate>2015-07-06T00:00:00</EstimatedArrivalDate>
    <ProductName>Red Bell Case</ProductName>
    <StoreName>84 West</StoreName>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <VendorName>Offwire</VendorName>
    <VendorPartNumber>HFW5123</VendorPartNumber>
    <VendorNumber></VendorNumber>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <PurchaseOrderID>17386</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1059</PurchaseOrderIDByStore>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>KLERNO000015</ProductIdentifier>
    <QtyOrdered>28</QtyOrdered>
    <QtyReceived>0</QtyReceived>
    <ReferenceNumber></ReferenceNumber>
    <QtyOnBackOrder>28</QtyOnBackOrder>
    <DateCommitted>2015-07-16T09:08:39.11</DateCommitted>
    <EstimatedArrivalDate>2015-07-06T00:00:00</EstimatedArrivalDate>
    <ProductName>Red Bell Case</ProductName>
    <StoreName>84 West</StoreName>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <VendorName>Offwire</VendorName>
    <VendorPartNumber>HFW5123</VendorPartNumber>
    <VendorNumber></VendorNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
PurchaseOrderID,PurchaseOrderIDByStore,GlobalProductID,ProductIdentifier,QtyOrdered,QtyReceived,ReferenceNumber,QtyOnBackOrder,DateCommitted,EstimatedArrivalDate,ProductName,StoreName,EmployeeName,VendorName,VendorPartNumber,VendorNumber
17386,84WEAPO1059,2815,KLERNO000015,28,0,,28,2015-07-16T09:08:39.11,2015-07-06T00:00:00,Red Bell Case,84 West,iQmetrix Employee,Offwire,HFW5123,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Count Sheet History Report

For more information see {{support_CountSheetHistoryReport}}.



> Definition

```
GET /reports/countsheethistoryreport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ProductIdentifier={ProductIdentifier}&SerialNumber={SerialNumber}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/countsheethistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&SerialNumber=866988333292854&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/countsheethistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&SerialNumber=866988333292854&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheCountSheetHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/countsheethistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&SerialNumber=866988333292854&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheCountSheetHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/countsheethistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&SerialNumber=866988333292854&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/countsheethistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&SerialNumber=866988333292854&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>ProductIdentifier</code> (Optional)  - Product SKU</li>
    <li><code>SerialNumber</code> (Optional)  - Serial number</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[countsheethistoryreportdata](#CountSheetHistoryReportData)]











> Example Response



 
```python
[
    {
        "CountSheetID": 675,
        "CountSheetIDByStore": "84WEACS100",
        "DateCreated": "2015-07-21T09:17:43.13",
        "CategoryPath": "Wrapsol",
        "EmployeeName1": "iQmetrix Employee",
        "EmployeeName2": "iQmetrix Employee",
        "StoreName": "84 West",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "OriginalCountSheetID": -1,
        "OriginalCountSheetIDByStore": "",
        "DateStarted": "2015-07-21T09:17:00",
        "DateCommitted": "2015-07-21T09:26:40.45",
        "DateCompleted": "2015-07-22T011:30:40.36",
        "DateModified": "2015-07-21T09:17:43.147",
        "Comments": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "CountSheetID": 675,
            "CountSheetIDByStore": "84WEACS100",
            "DateCreated": "2015-07-21T09:17:43.13",
            "CategoryPath": "Wrapsol",
            "EmployeeName1": "iQmetrix Employee",
            "EmployeeName2": "iQmetrix Employee",
            "StoreName": "84 West",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "OriginalCountSheetID": -1,
            "OriginalCountSheetIDByStore": "",
            "DateStarted": "2015-07-21T09:17:00",
            "DateCommitted": "2015-07-21T09:26:40.45",
            "DateCompleted": "2015-07-22T011:30:40.36",
            "DateModified": "2015-07-21T09:17:43.147",
            "Comments": ""
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
}
```





```xml
<Table>
  <Record>
    <CountSheetID>675</CountSheetID>
    <CountSheetIDByStore>84WEACS100</CountSheetIDByStore>
    <DateCreated>2015-07-21T09:17:43.13</DateCreated>
    <CategoryPath>Wrapsol</CategoryPath>
    <EmployeeName1>iQmetrix Employee</EmployeeName1>
    <EmployeeName2>iQmetrix Employee</EmployeeName2>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <OriginalCountSheetID>-1</OriginalCountSheetID>
    <OriginalCountSheetIDByStore></OriginalCountSheetIDByStore>
    <DateStarted>2015-07-21T09:17:00</DateStarted>
    <DateCommitted>2015-07-21T09:26:40.45</DateCommitted>
    <DateCompleted>2015-07-22T011:30:40.36</DateCompleted>
    <DateModified>2015-07-21T09:17:43.147</DateModified>
    <Comments></Comments>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <CountSheetID>675</CountSheetID>
    <CountSheetIDByStore>84WEACS100</CountSheetIDByStore>
    <DateCreated>2015-07-21T09:17:43.13</DateCreated>
    <CategoryPath>Wrapsol</CategoryPath>
    <EmployeeName1>iQmetrix Employee</EmployeeName1>
    <EmployeeName2>iQmetrix Employee</EmployeeName2>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <OriginalCountSheetID>-1</OriginalCountSheetID>
    <OriginalCountSheetIDByStore></OriginalCountSheetIDByStore>
    <DateStarted>2015-07-21T09:17:00</DateStarted>
    <DateCommitted>2015-07-21T09:26:40.45</DateCommitted>
    <DateCompleted>2015-07-22T011:30:40.36</DateCompleted>
    <DateModified>2015-07-21T09:17:43.147</DateModified>
    <Comments></Comments>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
CountSheetID,CountSheetIDByStore,DateCreated,CategoryPath,EmployeeName1,EmployeeName2,StoreName,DistrictName,RegionName,ChannelName,OriginalCountSheetID,OriginalCountSheetIDByStore,DateStarted,DateCommitted,DateCompleted,DateModified,Comments
675,84WEACS100,2015-07-21T09:17:43.13,Wrapsol,iQmetrix Employee,iQmetrix Employee,84 West,Valley Area District,Region A,Regina Channel,-1,,2015-07-21T09:17:00,2015-07-21T09:26:40.45,2015-07-22T011:30:40.36,2015-07-21T09:17:43.147,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Completed RMAs Report

For more information see {{support_CompletedRMAsReport}}.

Note that this report has multiple responses, depending on the ReportType specified.

| ReportType | Response |
|:------------|:---------|
| RMAs | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Inventory-Reports/#completedrmasreportdata'>CompletedRMAsReportData</a> |
| RMADetail | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Inventory-Reports/#completedrmasreportrmadetaildata'>CompletedRMAsReportRMADetailData</a> |
| Products | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Inventory-Reports/#completedrmasproductreportdata'>CompletedRMAsProductReportData</a> |



> Definition

```
GET /reports/CompletedRMAsReport?ReportType={ReportType}&StockBalanceID={StockBalanceID}&SearchMethod={SearchMethod}&SearchCriteria={SearchCriteria}&StoreIDs={StoreIDs}&SBState={SBState}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/CompletedRMAsReport?ReportType=RMAs&StockBalanceID=78&SearchMethod=3&SearchCriteria=-1&StoreIDs=1&SBState=4&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/CompletedRMAsReport?ReportType=RMAs&StockBalanceID=78&SearchMethod=3&SearchCriteria=-1&StoreIDs=1&SBState=4&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheCompletedRmasReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/CompletedRMAsReport?ReportType=RMAs&StockBalanceID=78&SearchMethod=3&SearchCriteria=-1&StoreIDs=1&SBState=4&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheCompletedRmasReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/CompletedRMAsReport?ReportType=RMAs&StockBalanceID=78&SearchMethod=3&SearchCriteria=-1&StoreIDs=1&SBState=4&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/CompletedRMAsReport?ReportType=RMAs&StockBalanceID=78&SearchMethod=3&SearchCriteria=-1&StoreIDs=1&SBState=4&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>ReportType</code> (<strong>Required</strong>)  - Acceptable values include RMAs (CompletedRMAsReportData), RMADetail (CompletedRMAsReportRMADetailData) or Products (CompletedRMAsProductReportData)</li>
    <li><code>StockBalanceID</code> (Optional)  - Only used, and required, if ReportType is RMADetail or Products. Identifier for a RMA in RQ</li>
    <li><code>SearchMethod</code> (Optional)  - Only used, and required, if ReportType is RMAs. This property determines what SearchCriteria searches. Acceptable values include 1 (StoreID), 2 (VendorID), 3 (StoreID + VendorID), 4 (RMANumber), 5 (StockBalanceIDByStore), or 6 (DateCommitted)</li>
    <li><code>SearchCriteria</code> (Optional)  - Only used, and required, if ReportType is RMAs. Acceptable values can include an appropriate... StoreID (SearchMethod 1), VendorID (SearchMethod 2), StoreID + VendorID (SearchMethod 3), RMANumber (SearchMethod 4), StockBalanceIDByStore (SearchMethod 5), or DateCommitted (SearchMethod 6)</li>
    <li><code>StoreIDs</code> (Optional)  - Only used, and required, if ReportType is RMADetail or Products. Identifier for a store in RQ</li>
    <li><code>SBState</code> (Optional)  - Only used, and required, if ReportType is RMADetail or Products. State of the RMA. Acceptable values include... 1 (NotCommitted), 2 (CommittedButNotShipped), 3 (CommittedAndShippedButNotComplete) or 4 (Complete)</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[completedrmasreportdata](#CompletedRMAsReportData)]











> Example Response



 
```python
[
    {
        "StockBalanceID": 1,
        "StockBalanceIDByStore": "84WEASB1",
        "RMANumber": "112482",
        "StoreName": "84 West",
        "VendorName": "Reliance",
        "DateCommitted": "2011-03-02T17:10:11.78",
        "CustomerName": "N/A",
        "TotalOnRMA": 460
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "StockBalanceID": 1,
            "StockBalanceIDByStore": "84WEASB1",
            "RMANumber": "112482",
            "StoreName": "84 West",
            "VendorName": "Reliance",
            "DateCommitted": "2011-03-02T17:10:11.78",
            "CustomerName": "N/A",
            "TotalOnRMA": 460
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
}
```





```xml
<Table>
  <Record>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <RMANumber>112482</RMANumber>
    <StoreName>84 West</StoreName>
    <VendorName>Reliance</VendorName>
    <DateCommitted>2011-03-02T17:10:11.78</DateCommitted>
    <CustomerName>N/A</CustomerName>
    <TotalOnRMA>460</TotalOnRMA>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <RMANumber>112482</RMANumber>
    <StoreName>84 West</StoreName>
    <VendorName>Reliance</VendorName>
    <DateCommitted>2011-03-02T17:10:11.78</DateCommitted>
    <CustomerName>N/A</CustomerName>
    <TotalOnRMA>460</TotalOnRMA>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
StockBalanceID,StockBalanceIDByStore,RMANumber,StoreName,VendorName,DateCommitted,CustomerName,TotalOnRMA
1,84WEASB1,112482,84 West,Reliance,2011-03-02T17:10:11.78,N/A,460
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Consignment History Report

For more information see {{support_ConsignmentHistoryReport}}.



> Definition

```
GET /reports/consignmenthistoryreport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/consignmenthistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/consignmenthistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheConsignmentHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/consignmenthistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheConsignmentHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/consignmenthistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/consignmenthistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[consignmenthistoryreportdata](#ConsignmentHistoryReportData)]











> Example Response



 
```python
[
    {
        "LoanInvoiceID": 18,
        "LoanInvoiceIDByStore": "84WEALI1",
        "LoanType": 1,
        "StoreName": "84 West",
        "EmployeeName": "iQmetrix Employee",
        "Comments": "",
        "BorrowerName": "John Lacquey Pinestraw Inc",
        "DateCommitted": "2015-07-15T08:39:36.18",
        "LoanCompleted": true,
        "DateCompleted": "2015-07-15T11:00:04.86",
        "CompletedEmployeeName": "iQmetrix Employee",
        "DateCreated": "2015-07-15T08:39:36.18",
        "TotalOnLoan": 0,
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "DistrictName": "Valley Area District"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "LoanInvoiceID": 18,
            "LoanInvoiceIDByStore": "84WEALI1",
            "LoanType": 1,
            "StoreName": "84 West",
            "EmployeeName": "iQmetrix Employee",
            "Comments": "",
            "BorrowerName": "John Lacquey Pinestraw Inc",
            "DateCommitted": "2015-07-15T08:39:36.18",
            "LoanCompleted": true,
            "DateCompleted": "2015-07-15T11:00:04.86",
            "CompletedEmployeeName": "iQmetrix Employee",
            "DateCreated": "2015-07-15T08:39:36.18",
            "TotalOnLoan": 0,
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "DistrictName": "Valley Area District"
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
}
```





```xml
<Table>
  <Record>
    <LoanInvoiceID>18</LoanInvoiceID>
    <LoanInvoiceIDByStore>84WEALI1</LoanInvoiceIDByStore>
    <LoanType>1</LoanType>
    <StoreName>84 West</StoreName>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <Comments></Comments>
    <BorrowerName>John Lacquey Pinestraw Inc</BorrowerName>
    <DateCommitted>2015-07-15T08:39:36.18</DateCommitted>
    <LoanCompleted>true</LoanCompleted>
    <DateCompleted>2015-07-15T11:00:04.86</DateCompleted>
    <CompletedEmployeeName>iQmetrix Employee</CompletedEmployeeName>
    <DateCreated>2015-07-15T08:39:36.18</DateCreated>
    <TotalOnLoan>0</TotalOnLoan>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <DistrictName>Valley Area District</DistrictName>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <LoanInvoiceID>18</LoanInvoiceID>
    <LoanInvoiceIDByStore>84WEALI1</LoanInvoiceIDByStore>
    <LoanType>1</LoanType>
    <StoreName>84 West</StoreName>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <Comments></Comments>
    <BorrowerName>John Lacquey Pinestraw Inc</BorrowerName>
    <DateCommitted>2015-07-15T08:39:36.18</DateCommitted>
    <LoanCompleted>true</LoanCompleted>
    <DateCompleted>2015-07-15T11:00:04.86</DateCompleted>
    <CompletedEmployeeName>iQmetrix Employee</CompletedEmployeeName>
    <DateCreated>2015-07-15T08:39:36.18</DateCreated>
    <TotalOnLoan>0</TotalOnLoan>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <DistrictName>Valley Area District</DistrictName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
LoanInvoiceID,LoanInvoiceIDByStore,LoanType,StoreName,EmployeeName,Comments,BorrowerName,DateCommitted,LoanCompleted,DateCompleted,CompletedEmployeeName,DateCreated,TotalOnLoan,RegionName,ChannelName,DistrictName
18,84WEALI1,1,84 West,iQmetrix Employee,,John Lacquey Pinestraw Inc,2015-07-15T08:39:36.18,true,2015-07-15T11:00:04.86,iQmetrix Employee,2015-07-15T08:39:36.18,0,Region A,Regina Channel,Valley Area District
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Discontinued Inventory Report

For more information see {{support_DiscontinuedInventoryReport}}.



> Definition

```
GET /reports/discontinuedinventoryreport?CategoryNumber={CategoryNumber}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/discontinuedinventoryreport?CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/discontinuedinventoryreport?CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheDiscontinuedInventoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/discontinuedinventoryreport?CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheDiscontinuedInventoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/discontinuedinventoryreport?CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/discontinuedinventoryreport?CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[discontinuedinventoryreportdata](#DiscontinuedInventoryReportData)]











> Example Response



 
```python
[
    {
        "GlobalProductID": 2815,
        "ProductIdentifier": "ASCLMO000001",
        "SpecialProductID": 0,
        "ProductName": "iPhone 5s 32GB - Gold",
        "EmployeeID": 2384,
        "DiscontinuedDate": "2014-02-13T00:00:00",
        "DiscontinuedEmployeeID": 250,
        "InStock": 12,
        "QuantityInNonSellable": 1,
        "QuantityInTransfer": 2,
        "QuantityOnRMA": 1,
        "QuantityOnOrder": 0,
        "QuantityOnBackOrder": 1,
        "QuantityOnLoan": 3,
        "QuantityCommitted": 2,
        "DiscontinuedEmployeeName": "iQmetrix Employee"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "GlobalProductID": 2815,
            "ProductIdentifier": "ASCLMO000001",
            "SpecialProductID": 0,
            "ProductName": "iPhone 5s 32GB - Gold",
            "EmployeeID": 2384,
            "DiscontinuedDate": "2014-02-13T00:00:00",
            "DiscontinuedEmployeeID": 250,
            "InStock": 12,
            "QuantityInNonSellable": 1,
            "QuantityInTransfer": 2,
            "QuantityOnRMA": 1,
            "QuantityOnOrder": 0,
            "QuantityOnBackOrder": 1,
            "QuantityOnLoan": 3,
            "QuantityCommitted": 2,
            "DiscontinuedEmployeeName": "iQmetrix Employee"
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
}
```





```xml
<Table>
  <Record>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>ASCLMO000001</ProductIdentifier>
    <SpecialProductID>0</SpecialProductID>
    <ProductName>iPhone 5s 32GB - Gold</ProductName>
    <EmployeeID>2384</EmployeeID>
    <DiscontinuedDate>2014-02-13T00:00:00</DiscontinuedDate>
    <DiscontinuedEmployeeID>250</DiscontinuedEmployeeID>
    <InStock>12</InStock>
    <QuantityInNonSellable>1</QuantityInNonSellable>
    <QuantityInTransfer>2</QuantityInTransfer>
    <QuantityOnRMA>1</QuantityOnRMA>
    <QuantityOnOrder>0</QuantityOnOrder>
    <QuantityOnBackOrder>1</QuantityOnBackOrder>
    <QuantityOnLoan>3</QuantityOnLoan>
    <QuantityCommitted>2</QuantityCommitted>
    <DiscontinuedEmployeeName>iQmetrix Employee</DiscontinuedEmployeeName>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>ASCLMO000001</ProductIdentifier>
    <SpecialProductID>0</SpecialProductID>
    <ProductName>iPhone 5s 32GB - Gold</ProductName>
    <EmployeeID>2384</EmployeeID>
    <DiscontinuedDate>2014-02-13T00:00:00</DiscontinuedDate>
    <DiscontinuedEmployeeID>250</DiscontinuedEmployeeID>
    <InStock>12</InStock>
    <QuantityInNonSellable>1</QuantityInNonSellable>
    <QuantityInTransfer>2</QuantityInTransfer>
    <QuantityOnRMA>1</QuantityOnRMA>
    <QuantityOnOrder>0</QuantityOnOrder>
    <QuantityOnBackOrder>1</QuantityOnBackOrder>
    <QuantityOnLoan>3</QuantityOnLoan>
    <QuantityCommitted>2</QuantityCommitted>
    <DiscontinuedEmployeeName>iQmetrix Employee</DiscontinuedEmployeeName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
GlobalProductID,ProductIdentifier,SpecialProductID,ProductName,EmployeeID,DiscontinuedDate,DiscontinuedEmployeeID,InStock,QuantityInNonSellable,QuantityInTransfer,QuantityOnRMA,QuantityOnOrder,QuantityOnBackOrder,QuantityOnLoan,QuantityCommitted,DiscontinuedEmployeeName
2815,ASCLMO000001,0,iPhone 5s 32GB - Gold,2384,2014-02-13T00:00:00,250,12,1,2,1,0,1,3,2,iQmetrix Employee
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Inventory Availability Summary Report

For more information see {{support_InventoryAvailabilitySummaryReport}}.



> Definition

```
GET /reports/inventoryavailabilitysummaryreport?ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&SearchType={SearchType}&ProductIdentifier={ProductIdentifier}&CategoryNumber={CategoryNumber}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/inventoryavailabilitysummaryreport?ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SearchType=1&ProductIdentifier=ASCLMO000001&CategoryNumber=10&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/inventoryavailabilitysummaryreport?ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SearchType=1&ProductIdentifier=ASCLMO000001&CategoryNumber=10&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheInventoryAvailabilitySummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/inventoryavailabilitysummaryreport?ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SearchType=1&ProductIdentifier=ASCLMO000001&CategoryNumber=10&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheInventoryAvailabilitySummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/inventoryavailabilitysummaryreport?ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SearchType=1&ProductIdentifier=ASCLMO000001&CategoryNumber=10&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/inventoryavailabilitysummaryreport?ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SearchType=1&ProductIdentifier=ASCLMO000001&CategoryNumber=10&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>SearchType</code> (Optional)  - Acceptable values include 1 to summarize by Category (use CategoryNumber parameter) or 2 to summarize by Product (use ProductIdentifier parameter)</li>
    <li><code>ProductIdentifier</code> (Optional)  - Product SKU</li>
    <li><code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. Use -1 for All Categories. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[inventoryavailabilitysummaryreportdata](#InventoryAvailabilitySummaryReportData)]











> Example Response



 
```python
[
    {
        "ChannelID": "3a5ab3b9-df8b-412b-fffa-6b59bcaaaa94",
        "ChannelName": "English Channel",
        "RegionID": 4,
        "RegionName": "London",
        "DistrictID": 72,
        "DistrictName": "Westminster",
        "StoreID": 6679,
        "StoreName": "100: My Network LLC - Anchorage",
        "GlobalProductID": 2815,
        "ProductIdentifier": "AAATAP000093",
        "ProductName": "Apple iPhone 6 Plus 16GB Space Gray",
        "QtyInStock": 59,
        "QtyOnOrder": 1,
        "QtyOnBackOrder": 2,
        "QtyInNonSellable": 0,
        "QtyTransferIn": 2,
        "QtyTransferOut": 1,
        "QtyOnRMA": 3,
        "QtyOnLoan": 2,
        "QtyCommittedOnOrderEntry": 1,
        "UnitCost": 699,
        "NoSale": false,
        "DoNotOrder": false,
        "SpecialOrder": false,
        "DateEOL": "",
        "WriteOff": false
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ChannelID": "3a5ab3b9-df8b-412b-fffa-6b59bcaaaa94",
            "ChannelName": "English Channel",
            "RegionID": 4,
            "RegionName": "London",
            "DistrictID": 72,
            "DistrictName": "Westminster",
            "StoreID": 6679,
            "StoreName": "100: My Network LLC - Anchorage",
            "GlobalProductID": 2815,
            "ProductIdentifier": "AAATAP000093",
            "ProductName": "Apple iPhone 6 Plus 16GB Space Gray",
            "QtyInStock": 59,
            "QtyOnOrder": 1,
            "QtyOnBackOrder": 2,
            "QtyInNonSellable": 0,
            "QtyTransferIn": 2,
            "QtyTransferOut": 1,
            "QtyOnRMA": 3,
            "QtyOnLoan": 2,
            "QtyCommittedOnOrderEntry": 1,
            "UnitCost": 699,
            "NoSale": false,
            "DoNotOrder": false,
            "SpecialOrder": false,
            "DateEOL": "",
            "WriteOff": false
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
}
```





```xml
<Table>
  <Record>
    <ChannelID>3a5ab3b9-df8b-412b-fffa-6b59bcaaaa94</ChannelID>
    <ChannelName>English Channel</ChannelName>
    <RegionID>4</RegionID>
    <RegionName>London</RegionName>
    <DistrictID>72</DistrictID>
    <DistrictName>Westminster</DistrictName>
    <StoreID>6679</StoreID>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray</ProductName>
    <QtyInStock>59</QtyInStock>
    <QtyOnOrder>1</QtyOnOrder>
    <QtyOnBackOrder>2</QtyOnBackOrder>
    <QtyInNonSellable>0</QtyInNonSellable>
    <QtyTransferIn>2</QtyTransferIn>
    <QtyTransferOut>1</QtyTransferOut>
    <QtyOnRMA>3</QtyOnRMA>
    <QtyOnLoan>2</QtyOnLoan>
    <QtyCommittedOnOrderEntry>1</QtyCommittedOnOrderEntry>
    <UnitCost>699</UnitCost>
    <NoSale>false</NoSale>
    <DoNotOrder>false</DoNotOrder>
    <SpecialOrder>false</SpecialOrder>
    <DateEOL></DateEOL>
    <WriteOff>false</WriteOff>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ChannelID>3a5ab3b9-df8b-412b-fffa-6b59bcaaaa94</ChannelID>
    <ChannelName>English Channel</ChannelName>
    <RegionID>4</RegionID>
    <RegionName>London</RegionName>
    <DistrictID>72</DistrictID>
    <DistrictName>Westminster</DistrictName>
    <StoreID>6679</StoreID>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray</ProductName>
    <QtyInStock>59</QtyInStock>
    <QtyOnOrder>1</QtyOnOrder>
    <QtyOnBackOrder>2</QtyOnBackOrder>
    <QtyInNonSellable>0</QtyInNonSellable>
    <QtyTransferIn>2</QtyTransferIn>
    <QtyTransferOut>1</QtyTransferOut>
    <QtyOnRMA>3</QtyOnRMA>
    <QtyOnLoan>2</QtyOnLoan>
    <QtyCommittedOnOrderEntry>1</QtyCommittedOnOrderEntry>
    <UnitCost>699</UnitCost>
    <NoSale>false</NoSale>
    <DoNotOrder>false</DoNotOrder>
    <SpecialOrder>false</SpecialOrder>
    <DateEOL></DateEOL>
    <WriteOff>false</WriteOff>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ChannelID,ChannelName,RegionID,RegionName,DistrictID,DistrictName,StoreID,StoreName,GlobalProductID,ProductIdentifier,ProductName,QtyInStock,QtyOnOrder,QtyOnBackOrder,QtyInNonSellable,QtyTransferIn,QtyTransferOut,QtyOnRMA,QtyOnLoan,QtyCommittedOnOrderEntry,UnitCost,NoSale,DoNotOrder,SpecialOrder,DateEOL,WriteOff
3a5ab3b9-df8b-412b-fffa-6b59bcaaaa94,English Channel,4,London,72,Westminster,6679,100: My Network LLC - Anchorage,2815,AAATAP000093,Apple iPhone 6 Plus 16GB Space Gray,59,1,2,0,2,1,3,2,1,699,false,false,false,,false
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Inventory Listing Report

<a name="inventory-reports"></a>For more information, see {{support_InventoryListingReport}}.      



> Definition

```
GET /reports/inventorylistingreport?CategoryNumber={CategoryNumber}&BinStatus={BinStatus}&QtyStatus={QtyStatus}&BlindInventory={BlindInventory}&DateAsOf={DateAsOf}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheInventoryListingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheInventoryListingReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>BinStatus</code> (<strong>Required</strong>)  - See <a href="#binstatus">BinStatus</a> for a list of acceptable values</li>
    <li><code>QtyStatus</code> (<strong>Required</strong>)  - Acceptable values include 1 for negative quantities, 2 for positive quantities, 3 for zero quantities and 4 for all quantities</li>
    <li><code>BlindInventory</code> (<strong>Required</strong>)  - A flag to indicate if the report will include product quantities (0) or only product details (1)</li>
    <li><code>DateAsOf</code> (<strong>Required</strong>)  - Date at which the report will be run. NOTE the inventory will be listed as of 11:59 PM / 2359 for the date chosen</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[inventorylistingreportdata](#InventoryListingReportData)]











> Example Response



 
```python
[
    {
        "BarCode": "",
        "BinStatus": "String_InStock",
        "CategoryPath": "Equipment",
        "ChannelName": "English Channel",
        "DateEOL": "null",
        "DiscontinuedDate": "null",
        "DistrictName": "Westminster",
        "DoNotOrder": false,
        "IsUsed": false,
        "ManufacturerPartNumber": "",
        "NoSale": false,
        "ProductIdentifier": "AAATAP000093",
        "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
        "Quantity": 1,
        "RefundPeriodLength": null,
        "RegionName": "London",
        "SerialNumber": "2342342341",
        "SpecialOrder": false,
        "StoreName": "100: My Network LLC - Anchorage",
        "StoreTypeName": "Costco",
        "TotalCost": 699,
        "UnitCost": 699,
        "VendorName": "Offwire",
        "VendorPartNumber": "",
        "WarehouseLocation": "",
        "WriteOff": false
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "BarCode": "",
            "BinStatus": "String_InStock",
            "CategoryPath": "Equipment",
            "ChannelName": "English Channel",
            "DateEOL": "null",
            "DiscontinuedDate": "null",
            "DistrictName": "Westminster",
            "DoNotOrder": false,
            "IsUsed": false,
            "ManufacturerPartNumber": "",
            "NoSale": false,
            "ProductIdentifier": "AAATAP000093",
            "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
            "Quantity": 1,
            "RefundPeriodLength": null,
            "RegionName": "London",
            "SerialNumber": "2342342341",
            "SpecialOrder": false,
            "StoreName": "100: My Network LLC - Anchorage",
            "StoreTypeName": "Costco",
            "TotalCost": 699,
            "UnitCost": 699,
            "VendorName": "Offwire",
            "VendorPartNumber": "",
            "WarehouseLocation": "",
            "WriteOff": false
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
}
```





```xml
<Table>
  <Record>
    <BarCode></BarCode>
    <BinStatus>String_InStock</BinStatus>
    <CategoryPath>Equipment</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <DateEOL>null</DateEOL>
    <DiscontinuedDate>null</DiscontinuedDate>
    <DistrictName>Westminster</DistrictName>
    <DoNotOrder>false</DoNotOrder>
    <IsUsed>false</IsUsed>
    <ManufacturerPartNumber></ManufacturerPartNumber>
    <NoSale>false</NoSale>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <Quantity>1</Quantity>
    <RefundPeriodLength>null</RefundPeriodLength>
    <RegionName>London</RegionName>
    <SerialNumber>2342342341</SerialNumber>
    <SpecialOrder>false</SpecialOrder>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <StoreTypeName>Costco</StoreTypeName>
    <TotalCost>699</TotalCost>
    <UnitCost>699</UnitCost>
    <VendorName>Offwire</VendorName>
    <VendorPartNumber></VendorPartNumber>
    <WarehouseLocation></WarehouseLocation>
    <WriteOff>false</WriteOff>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <BarCode></BarCode>
    <BinStatus>String_InStock</BinStatus>
    <CategoryPath>Equipment</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <DateEOL>null</DateEOL>
    <DiscontinuedDate>null</DiscontinuedDate>
    <DistrictName>Westminster</DistrictName>
    <DoNotOrder>false</DoNotOrder>
    <IsUsed>false</IsUsed>
    <ManufacturerPartNumber></ManufacturerPartNumber>
    <NoSale>false</NoSale>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <Quantity>1</Quantity>
    <RefundPeriodLength>null</RefundPeriodLength>
    <RegionName>London</RegionName>
    <SerialNumber>2342342341</SerialNumber>
    <SpecialOrder>false</SpecialOrder>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <StoreTypeName>Costco</StoreTypeName>
    <TotalCost>699</TotalCost>
    <UnitCost>699</UnitCost>
    <VendorName>Offwire</VendorName>
    <VendorPartNumber></VendorPartNumber>
    <WarehouseLocation></WarehouseLocation>
    <WriteOff>false</WriteOff>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
BarCode,BinStatus,CategoryPath,ChannelName,DateEOL,DiscontinuedDate,DistrictName,DoNotOrder,IsUsed,ManufacturerPartNumber,NoSale,ProductIdentifier,ProductName,Quantity,RefundPeriodLength,RegionName,SerialNumber,SpecialOrder,StoreName,StoreTypeName,TotalCost,UnitCost,VendorName,VendorPartNumber,WarehouseLocation,WriteOff
,String_InStock,Equipment,English Channel,null,null,Westminster,false,false,,false,AAATAP000093,Apple iPhone 6 Plus 16GB Space Gray - AT&T,1,null,London,2342342341,false,100: My Network LLC - Anchorage,Costco,699,699,Offwire,,,false
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Inventory Removal History Report

For more information see {{support_InventoryRemovalHistoryReport}}.



> Definition

```
GET /reports/inventoryremovalhistoryreport?StoreID={StoreID}&SearchMethod={SearchMethod}&StartDate={StartDate}&StopDate={StopDate}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/inventoryremovalhistoryreport?StoreID=1&SearchMethod=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/inventoryremovalhistoryreport?StoreID=1&SearchMethod=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheInventoryRemovalHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/inventoryremovalhistoryreport?StoreID=1&SearchMethod=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheInventoryRemovalHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/inventoryremovalhistoryreport?StoreID=1&SearchMethod=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/inventoryremovalhistoryreport?StoreID=1&SearchMethod=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StoreID</code> (<strong>Required</strong>)  - Identifier for a store in RQ</li>
    <li><code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for All Products, 2 for Regular Products, 3 for Vendor Rebate Products, 4 for Non-Stocked Products or 7 for Gift Cards</li>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[inventoryremovalhistoryreportdata](#InventoryRemovalHistoryReportData)]











> Example Response



 
```python
[
    {
        "GlobalProductID": 2815,
        "ProductType": 4,
        "ProductIdentifier": "ACVZAP000574",
        "ProductName": "iPhone 5s 32GB - Gold",
        "DateDeleted": "2015-01-05T12:03:20.03",
        "Employee_Name": "iQmetrix Employee"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "GlobalProductID": 2815,
            "ProductType": 4,
            "ProductIdentifier": "ACVZAP000574",
            "ProductName": "iPhone 5s 32GB - Gold",
            "DateDeleted": "2015-01-05T12:03:20.03",
            "Employee_Name": "iQmetrix Employee"
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
}
```





```xml
<Table>
  <Record>
    <GlobalProductID>2815</GlobalProductID>
    <ProductType>4</ProductType>
    <ProductIdentifier>ACVZAP000574</ProductIdentifier>
    <ProductName>iPhone 5s 32GB - Gold</ProductName>
    <DateDeleted>2015-01-05T12:03:20.03</DateDeleted>
    <Employee_Name>iQmetrix Employee</Employee_Name>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <GlobalProductID>2815</GlobalProductID>
    <ProductType>4</ProductType>
    <ProductIdentifier>ACVZAP000574</ProductIdentifier>
    <ProductName>iPhone 5s 32GB - Gold</ProductName>
    <DateDeleted>2015-01-05T12:03:20.03</DateDeleted>
    <Employee_Name>iQmetrix Employee</Employee_Name>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
GlobalProductID,ProductType,ProductIdentifier,ProductName,DateDeleted,Employee_Name
2815,4,ACVZAP000574,iPhone 5s 32GB - Gold,2015-01-05T12:03:20.03,iQmetrix Employee
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Inventory Totals by Location Report

For more information see {{support_InventoryTotalsbyLocationReport}}.



> Definition

```
GET /reports/inventorytotalsbylocationreport?StoreTypeID={StoreTypeID}&CategoryNumber={CategoryNumber}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/inventorytotalsbylocationreport?StoreTypeID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/inventorytotalsbylocationreport?StoreTypeID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheInventoryTotalsByLocationReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/inventorytotalsbylocationreport?StoreTypeID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheInventoryTotalsByLocationReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/inventorytotalsbylocationreport?StoreTypeID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/inventorytotalsbylocationreport?StoreTypeID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StoreTypeID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#storetype'>StoreType</a>. Use -1 to specify All Types. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-store-types'>Getting Store Types</a></li>
    <li><code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[inventorytotalsbylocationreportdata](#InventoryTotalsByLocationReportData)]











> Example Response



 
```python
[
    {
        "StoreID": 1,
        "StoreName": "84 West",
        "StoreTypeName": "Retail Store",
        "Enabled": 1,
        "InStock": 7,
        "OnRMA": 5,
        "TransferIn": 6,
        "TransferOut": 4,
        "OnLoan": 1,
        "InNonSellable": 2,
        "Total": 25
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "StoreID": 1,
            "StoreName": "84 West",
            "StoreTypeName": "Retail Store",
            "Enabled": 1,
            "InStock": 7,
            "OnRMA": 5,
            "TransferIn": 6,
            "TransferOut": 4,
            "OnLoan": 1,
            "InNonSellable": 2,
            "Total": 25
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
}
```





```xml
<Table>
  <Record>
    <StoreID>1</StoreID>
    <StoreName>84 West</StoreName>
    <StoreTypeName>Retail Store</StoreTypeName>
    <Enabled>1</Enabled>
    <InStock>7</InStock>
    <OnRMA>5</OnRMA>
    <TransferIn>6</TransferIn>
    <TransferOut>4</TransferOut>
    <OnLoan>1</OnLoan>
    <InNonSellable>2</InNonSellable>
    <Total>25</Total>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <StoreID>1</StoreID>
    <StoreName>84 West</StoreName>
    <StoreTypeName>Retail Store</StoreTypeName>
    <Enabled>1</Enabled>
    <InStock>7</InStock>
    <OnRMA>5</OnRMA>
    <TransferIn>6</TransferIn>
    <TransferOut>4</TransferOut>
    <OnLoan>1</OnLoan>
    <InNonSellable>2</InNonSellable>
    <Total>25</Total>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
StoreID,StoreName,StoreTypeName,Enabled,InStock,OnRMA,TransferIn,TransferOut,OnLoan,InNonSellable,Total
1,84 West,Retail Store,1,7,5,6,4,1,2,25
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Non Sellable History Report

For more information see {{support_Non-SellableHistoryReport}}.



> Definition

```
GET /reports/nonsellablehistoryreport?StartDate={StartDate}&StopDate={StopDate}&CategoryNumber={CategoryNumber}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/nonsellablehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/nonsellablehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheNonSellableHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/nonsellablehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheNonSellableHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/nonsellablehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/nonsellablehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>ProductIdentifier</code> (Optional)  - Product SKU</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[nonsellablehistoryreportdata](#NonSellableHistoryReportData)]











> Example Response



 
```python
[
    {
        "DateCreated": "2016-01-04T13:40:43.267",
        "StoreID": 1,
        "StoreName": "84 West",
        "SaleInvoiceID": 512,
        "NonSellableAdjustmentID": "68a397e9-18e7-070d-9c70-da103de98c1c",
        "StockBalanceID": 0,
        "InvoiceIDByStore": "84WEANA5",
        "GlobalProductID": 2815,
        "ProductIdentifier": "ACVZCB000363",
        "ProductName": "Casio Ravine 2",
        "SerialNumber": "355256020008965",
        "Quantity": 1,
        "EmployeeID1": 253,
        "First_Name": "iQmetrix",
        "Last_Name": "Employee",
        "Employee_Name": "iQmetrix Employee",
        "ToInStock": "0",
        "ToNonSellable": "2016-01-04T13:40:43.267",
        "ToUsed": 0,
        "NonSellableComments": "",
        "NonSellableReasonCode": "ed10636b-3b32-36d6-243d-4f4ce4a01290",
        "TransactionType": 2
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "DateCreated": "2016-01-04T13:40:43.267",
            "StoreID": 1,
            "StoreName": "84 West",
            "SaleInvoiceID": 512,
            "NonSellableAdjustmentID": "68a397e9-18e7-070d-9c70-da103de98c1c",
            "StockBalanceID": 0,
            "InvoiceIDByStore": "84WEANA5",
            "GlobalProductID": 2815,
            "ProductIdentifier": "ACVZCB000363",
            "ProductName": "Casio Ravine 2",
            "SerialNumber": "355256020008965",
            "Quantity": 1,
            "EmployeeID1": 253,
            "First_Name": "iQmetrix",
            "Last_Name": "Employee",
            "Employee_Name": "iQmetrix Employee",
            "ToInStock": "0",
            "ToNonSellable": "2016-01-04T13:40:43.267",
            "ToUsed": 0,
            "NonSellableComments": "",
            "NonSellableReasonCode": "ed10636b-3b32-36d6-243d-4f4ce4a01290",
            "TransactionType": 2
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
}
```





```xml
<Table>
  <Record>
    <DateCreated>2016-01-04T13:40:43.267</DateCreated>
    <StoreID>1</StoreID>
    <StoreName>84 West</StoreName>
    <SaleInvoiceID>512</SaleInvoiceID>
    <NonSellableAdjustmentID>68a397e9-18e7-070d-9c70-da103de98c1c</NonSellableAdjustmentID>
    <StockBalanceID>0</StockBalanceID>
    <InvoiceIDByStore>84WEANA5</InvoiceIDByStore>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>ACVZCB000363</ProductIdentifier>
    <ProductName>Casio Ravine 2</ProductName>
    <SerialNumber>355256020008965</SerialNumber>
    <Quantity>1</Quantity>
    <EmployeeID1>253</EmployeeID1>
    <First_Name>iQmetrix</First_Name>
    <Last_Name>Employee</Last_Name>
    <Employee_Name>iQmetrix Employee</Employee_Name>
    <ToInStock>0</ToInStock>
    <ToNonSellable>2016-01-04T13:40:43.267</ToNonSellable>
    <ToUsed>0</ToUsed>
    <NonSellableComments></NonSellableComments>
    <NonSellableReasonCode>ed10636b-3b32-36d6-243d-4f4ce4a01290</NonSellableReasonCode>
    <TransactionType>2</TransactionType>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <DateCreated>2016-01-04T13:40:43.267</DateCreated>
    <StoreID>1</StoreID>
    <StoreName>84 West</StoreName>
    <SaleInvoiceID>512</SaleInvoiceID>
    <NonSellableAdjustmentID>68a397e9-18e7-070d-9c70-da103de98c1c</NonSellableAdjustmentID>
    <StockBalanceID>0</StockBalanceID>
    <InvoiceIDByStore>84WEANA5</InvoiceIDByStore>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>ACVZCB000363</ProductIdentifier>
    <ProductName>Casio Ravine 2</ProductName>
    <SerialNumber>355256020008965</SerialNumber>
    <Quantity>1</Quantity>
    <EmployeeID1>253</EmployeeID1>
    <First_Name>iQmetrix</First_Name>
    <Last_Name>Employee</Last_Name>
    <Employee_Name>iQmetrix Employee</Employee_Name>
    <ToInStock>0</ToInStock>
    <ToNonSellable>2016-01-04T13:40:43.267</ToNonSellable>
    <ToUsed>0</ToUsed>
    <NonSellableComments></NonSellableComments>
    <NonSellableReasonCode>ed10636b-3b32-36d6-243d-4f4ce4a01290</NonSellableReasonCode>
    <TransactionType>2</TransactionType>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
DateCreated,StoreID,StoreName,SaleInvoiceID,NonSellableAdjustmentID,StockBalanceID,InvoiceIDByStore,GlobalProductID,ProductIdentifier,ProductName,SerialNumber,Quantity,EmployeeID1,First_Name,Last_Name,Employee_Name,ToInStock,ToNonSellable,ToUsed,NonSellableComments,NonSellableReasonCode,TransactionType
2016-01-04T13:40:43.267,1,84 West,512,68a397e9-18e7-070d-9c70-da103de98c1c,0,84WEANA5,2815,ACVZCB000363,Casio Ravine 2,355256020008965,1,253,iQmetrix,Employee,iQmetrix Employee,0,2016-01-04T13:40:43.267,0,,ed10636b-3b32-36d6-243d-4f4ce4a01290,2
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Over Receiving Inventory Report

For more information see {{support_OverReceivingInventoryReport}}.



> Definition

```
GET /reports/overreceivinginventoryreport?StartDate={StartDate}StopDate={StopDate}&PurchaseOrderID={PurchaseOrderID}&PurchaseOrderIDByStore={PurchaseOrderIDByStore}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/overreceivinginventoryreport?StartDate=1970-01-01T08:00:00.000ZStopDate=2016-01-01T08:00:00.000Z&PurchaseOrderID=-1&PurchaseOrderIDByStore=84WEAPO1151&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/overreceivinginventoryreport?StartDate=1970-01-01T08:00:00.000ZStopDate=2016-01-01T08:00:00.000Z&PurchaseOrderID=-1&PurchaseOrderIDByStore=84WEAPO1151&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheOverReceivingInventoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/overreceivinginventoryreport?StartDate=1970-01-01T08:00:00.000ZStopDate=2016-01-01T08:00:00.000Z&PurchaseOrderID=-1&PurchaseOrderIDByStore=84WEAPO1151&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheOverReceivingInventoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/overreceivinginventoryreport?StartDate=1970-01-01T08:00:00.000ZStopDate=2016-01-01T08:00:00.000Z&PurchaseOrderID=-1&PurchaseOrderIDByStore=84WEAPO1151&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/overreceivinginventoryreport?StartDate=1970-01-01T08:00:00.000ZStopDate=2016-01-01T08:00:00.000Z&PurchaseOrderID=-1&PurchaseOrderIDByStore=84WEAPO1151&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>PurchaseOrderID</code> (<strong>Required</strong>)  - To search all purchase orders, use -1 and omit PurchaseOrderIDByStore</li>
    <li><code>PurchaseOrderIDByStore</code> (Optional)  - Identifier for a purchase order in RQ. For all purchase orders, omit this property and use PurchaseOrderID</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[overreceivinginventoryreportdata](#OverReceivingInventoryReportData)]











> Example Response



 
```python
[
    {
        "StoreName": "84 West",
        "PurchaseOrderID": 18378,
        "PurchaseOrderIDByStore": "84WEAPO1151",
        "GlobalProductID": 6364,
        "ProductSKU": "KLDSVC000077",
        "ProductName": "Nokia 3285/5100/6100 Belt Clip - OEM",
        "QtyOrdered": 1,
        "QtyReceived": 12,
        "QtyVariance": 11,
        "UnitCost": 0,
        "Value": 0,
        "EmployeeName": "iQmetrix Employee"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "StoreName": "84 West",
            "PurchaseOrderID": 18378,
            "PurchaseOrderIDByStore": "84WEAPO1151",
            "GlobalProductID": 6364,
            "ProductSKU": "KLDSVC000077",
            "ProductName": "Nokia 3285/5100/6100 Belt Clip - OEM",
            "QtyOrdered": 1,
            "QtyReceived": 12,
            "QtyVariance": 11,
            "UnitCost": 0,
            "Value": 0,
            "EmployeeName": "iQmetrix Employee"
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
}
```





```xml
<Table>
  <Record>
    <StoreName>84 West</StoreName>
    <PurchaseOrderID>18378</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1151</PurchaseOrderIDByStore>
    <GlobalProductID>6364</GlobalProductID>
    <ProductSKU>KLDSVC000077</ProductSKU>
    <ProductName>Nokia 3285/5100/6100 Belt Clip - OEM</ProductName>
    <QtyOrdered>1</QtyOrdered>
    <QtyReceived>12</QtyReceived>
    <QtyVariance>11</QtyVariance>
    <UnitCost>0</UnitCost>
    <Value>0</Value>
    <EmployeeName>iQmetrix Employee</EmployeeName>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <StoreName>84 West</StoreName>
    <PurchaseOrderID>18378</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1151</PurchaseOrderIDByStore>
    <GlobalProductID>6364</GlobalProductID>
    <ProductSKU>KLDSVC000077</ProductSKU>
    <ProductName>Nokia 3285/5100/6100 Belt Clip - OEM</ProductName>
    <QtyOrdered>1</QtyOrdered>
    <QtyReceived>12</QtyReceived>
    <QtyVariance>11</QtyVariance>
    <UnitCost>0</UnitCost>
    <Value>0</Value>
    <EmployeeName>iQmetrix Employee</EmployeeName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
StoreName,PurchaseOrderID,PurchaseOrderIDByStore,GlobalProductID,ProductSKU,ProductName,QtyOrdered,QtyReceived,QtyVariance,UnitCost,Value,EmployeeName
84 West,18378,84WEAPO1151,6364,KLDSVC000077,Nokia 3285/5100/6100 Belt Clip - OEM,1,12,11,0,0,iQmetrix Employee
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Products on Consignment Report

For more information see {{support_ProductsOnConsignmentReport}}.



> Definition

```
GET /reports/productsonconsignmentreport?StartDate={StartDate}&StopDate={StopDate}&StoreID={StoreID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&PurchaseOrderIDByStore={PurchaseOrderIDByStore}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/productsonconsignmentreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreID=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&PurchaseOrderIDByStore=84WEAPO1151&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/productsonconsignmentreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreID=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&PurchaseOrderIDByStore=84WEAPO1151&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheProductsOnConsignmentReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/productsonconsignmentreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreID=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&PurchaseOrderIDByStore=84WEAPO1151&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheProductsOnConsignmentReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/productsonconsignmentreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreID=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&PurchaseOrderIDByStore=84WEAPO1151&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/productsonconsignmentreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreID=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&PurchaseOrderIDByStore=84WEAPO1151&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>StoreID</code> (<strong>Required</strong>)  - Identifier for a store in RQ</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>PurchaseOrderIDByStore</code> (Optional)  - Identifier for a purchase order in RQ. For all purchase orders, omit this property and use PurchaseOrderID</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[productsonconsignmentreportdata](#ProductsOnConsignmentReportData)]











> Example Response



 
```python
[
    {
        "LoanInvoiceID": 49,
        "LoanInvoiceIDByStore": "84WEALI12",
        "LoanType": 3,
        "BorrowerName": "84 West",
        "ProductIdentifier": "ACVZAP000422",
        "ProductName": "iPad 3 16 GB White",
        "SerialNumber": "333331234567891",
        "Quantity": 1,
        "DateCommitted": "2016-05-12T13:18:01.013",
        "DateDue": "",
        "DaysOverDue": 0,
        "UnitCost": 595,
        "ExtendedUnitCost": 595,
        "VendorName": "Dymaxx",
        "VendorSKU": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "LoanInvoiceID": 49,
            "LoanInvoiceIDByStore": "84WEALI12",
            "LoanType": 3,
            "BorrowerName": "84 West",
            "ProductIdentifier": "ACVZAP000422",
            "ProductName": "iPad 3 16 GB White",
            "SerialNumber": "333331234567891",
            "Quantity": 1,
            "DateCommitted": "2016-05-12T13:18:01.013",
            "DateDue": "",
            "DaysOverDue": 0,
            "UnitCost": 595,
            "ExtendedUnitCost": 595,
            "VendorName": "Dymaxx",
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
}
```





```xml
<Table>
  <Record>
    <LoanInvoiceID>49</LoanInvoiceID>
    <LoanInvoiceIDByStore>84WEALI12</LoanInvoiceIDByStore>
    <LoanType>3</LoanType>
    <BorrowerName>84 West</BorrowerName>
    <ProductIdentifier>ACVZAP000422</ProductIdentifier>
    <ProductName>iPad 3 16 GB White</ProductName>
    <SerialNumber>333331234567891</SerialNumber>
    <Quantity>1</Quantity>
    <DateCommitted>2016-05-12T13:18:01.013</DateCommitted>
    <DateDue></DateDue>
    <DaysOverDue>0</DaysOverDue>
    <UnitCost>595</UnitCost>
    <ExtendedUnitCost>595</ExtendedUnitCost>
    <VendorName>Dymaxx</VendorName>
    <VendorSKU></VendorSKU>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <LoanInvoiceID>49</LoanInvoiceID>
    <LoanInvoiceIDByStore>84WEALI12</LoanInvoiceIDByStore>
    <LoanType>3</LoanType>
    <BorrowerName>84 West</BorrowerName>
    <ProductIdentifier>ACVZAP000422</ProductIdentifier>
    <ProductName>iPad 3 16 GB White</ProductName>
    <SerialNumber>333331234567891</SerialNumber>
    <Quantity>1</Quantity>
    <DateCommitted>2016-05-12T13:18:01.013</DateCommitted>
    <DateDue></DateDue>
    <DaysOverDue>0</DaysOverDue>
    <UnitCost>595</UnitCost>
    <ExtendedUnitCost>595</ExtendedUnitCost>
    <VendorName>Dymaxx</VendorName>
    <VendorSKU></VendorSKU>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
LoanInvoiceID,LoanInvoiceIDByStore,LoanType,BorrowerName,ProductIdentifier,ProductName,SerialNumber,Quantity,DateCommitted,DateDue,DaysOverDue,UnitCost,ExtendedUnitCost,VendorName,VendorSKU
49,84WEALI12,3,84 West,ACVZAP000422,iPad 3 16 GB White,333331234567891,1,2016-05-12T13:18:01.013,,0,595,595,Dymaxx,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Purchase Order History Report

For more information see {{support_PurchaseOrderHistoryReport}}. 



> Definition

```
GET /reports/purchasehistoryreport?StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&Filter={Filter}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&VendorID={VendorID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/purchasehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&Filter=1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/purchasehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&Filter=1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingThePurchaseOrderHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/purchasehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&Filter=1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePurchaseOrderHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/purchasehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&Filter=1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/purchasehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=1&Filter=1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 to search by Category (use CategoryNumber), 2 to search by Product (use ProductIdentifier) or 3 to search by Vendor (use VendorID)</li>
    <li><code>Filter</code> (Optional)  - Acceptable values include 1 to All Purchase Orders or 2 to include only Ordered Purchase Orders</li>
    <li><code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>ProductIdentifier</code> (Optional)  - Product SKU</li>
    <li><code>VendorID</code> (Optional)  - Identifier for a Vendor in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-vendors-in-rq">Getting a List of Vendors in RQ</a>. Use -1 for all Vendors</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[purchasehistoryreportdata](#PurchaseHistoryReportData)]











> Example Response



 
```python
[
    {
        "GlobalProductID": 2815,
        "ProductIdentifier": "ASLCUN000002",
        "ProductName": "Universal Leather Pouch",
        "Ordered": 4,
        "Received": 0,
        "UnitCost": 1.19
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "GlobalProductID": 2815,
            "ProductIdentifier": "ASLCUN000002",
            "ProductName": "Universal Leather Pouch",
            "Ordered": 4,
            "Received": 0,
            "UnitCost": 1.19
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
}
```





```xml
<Table>
  <Record>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>ASLCUN000002</ProductIdentifier>
    <ProductName>Universal Leather Pouch</ProductName>
    <Ordered>4</Ordered>
    <Received>0</Received>
    <UnitCost>1.19</UnitCost>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <GlobalProductID>2815</GlobalProductID>
    <ProductIdentifier>ASLCUN000002</ProductIdentifier>
    <ProductName>Universal Leather Pouch</ProductName>
    <Ordered>4</Ordered>
    <Received>0</Received>
    <UnitCost>1.19</UnitCost>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
GlobalProductID,ProductIdentifier,ProductName,Ordered,Received,UnitCost
2815,ASLCUN000002,Universal Leather Pouch,4,0,1.19
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Purchase Order Amendment Report

For more information see {{support_PurchaseOrderAmendmentReport}}.



> Definition

```
GET /reports/PurchaseOrderAmendmentReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&PONumber={PONumber}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/PurchaseOrderAmendmentReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&PONumber=WETM2PO325&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/PurchaseOrderAmendmentReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&PONumber=WETM2PO325&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingThePurchaseOrderAmendmentReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/PurchaseOrderAmendmentReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&PONumber=WETM2PO325&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePurchaseOrderAmendmentReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/PurchaseOrderAmendmentReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&PONumber=WETM2PO325&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/PurchaseOrderAmendmentReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&PONumber=WETM2PO325&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>PONumber</code> (Optional)  - Identifier for a purchase order in RQ</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[purchaseorderamendmentreportdata](#PurchaseOrderAmendmentReportData)]











> Example Response



 
```python
[
    {
        "AmendmentID": 1,
        "PurchaseOrderID": 8035,
        "PurchaseOrderIDByStore": "WETM2PO325",
        "Location": "Corporate Office",
        "ReceiveAt": "Cornwall",
        "DateEdited": "2011-12-29T17:09:00",
        "EmployeeID": 4,
        "EmployeeName": "iQmetrix Employee",
        "ProductIdentifier": "ACVZSA000297",
        "ProductName": "Samsung U660 Convoy 2",
        "ActionType": 0,
        "QtyVariance": 1,
        "CostVariance": 0,
        "OrderingComments": "285647",
        "ReceivingComments": "",
        "VendorNumber": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "AmendmentID": 1,
            "PurchaseOrderID": 8035,
            "PurchaseOrderIDByStore": "WETM2PO325",
            "Location": "Corporate Office",
            "ReceiveAt": "Cornwall",
            "DateEdited": "2011-12-29T17:09:00",
            "EmployeeID": 4,
            "EmployeeName": "iQmetrix Employee",
            "ProductIdentifier": "ACVZSA000297",
            "ProductName": "Samsung U660 Convoy 2",
            "ActionType": 0,
            "QtyVariance": 1,
            "CostVariance": 0,
            "OrderingComments": "285647",
            "ReceivingComments": "",
            "VendorNumber": ""
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
}
```





```xml
<Table>
  <Record>
    <AmendmentID>1</AmendmentID>
    <PurchaseOrderID>8035</PurchaseOrderID>
    <PurchaseOrderIDByStore>WETM2PO325</PurchaseOrderIDByStore>
    <Location>Corporate Office</Location>
    <ReceiveAt>Cornwall</ReceiveAt>
    <DateEdited>2011-12-29T17:09:00</DateEdited>
    <EmployeeID>4</EmployeeID>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <ProductIdentifier>ACVZSA000297</ProductIdentifier>
    <ProductName>Samsung U660 Convoy 2</ProductName>
    <ActionType>0</ActionType>
    <QtyVariance>1</QtyVariance>
    <CostVariance>0</CostVariance>
    <OrderingComments>285647</OrderingComments>
    <ReceivingComments></ReceivingComments>
    <VendorNumber></VendorNumber>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <AmendmentID>1</AmendmentID>
    <PurchaseOrderID>8035</PurchaseOrderID>
    <PurchaseOrderIDByStore>WETM2PO325</PurchaseOrderIDByStore>
    <Location>Corporate Office</Location>
    <ReceiveAt>Cornwall</ReceiveAt>
    <DateEdited>2011-12-29T17:09:00</DateEdited>
    <EmployeeID>4</EmployeeID>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <ProductIdentifier>ACVZSA000297</ProductIdentifier>
    <ProductName>Samsung U660 Convoy 2</ProductName>
    <ActionType>0</ActionType>
    <QtyVariance>1</QtyVariance>
    <CostVariance>0</CostVariance>
    <OrderingComments>285647</OrderingComments>
    <ReceivingComments></ReceivingComments>
    <VendorNumber></VendorNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
AmendmentID,PurchaseOrderID,PurchaseOrderIDByStore,Location,ReceiveAt,DateEdited,EmployeeID,EmployeeName,ProductIdentifier,ProductName,ActionType,QtyVariance,CostVariance,OrderingComments,ReceivingComments,VendorNumber
1,8035,WETM2PO325,Corporate Office,Cornwall,2011-12-29T17:09:00,4,iQmetrix Employee,ACVZSA000297,Samsung U660 Convoy 2,0,1,0,285647,,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Receiving Invoice History By Product Report

For more information see {{support_ReceivingInvoiceHistoryReport}}.



> Definition

```
GET /reports/ReceivingInvoiceHistoryReport_ByProduct?StartDate={StartDate}&StopDate={StopDate}&VendorID={VendorID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&CategoryNumber={CategoryNumber}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/ReceivingInvoiceHistoryReport_ByProduct?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByProduct?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheReceivingInvoiceHistoryByProductReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByProduct?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheReceivingInvoiceHistoryByProductReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByProduct?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByProduct?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>VendorID</code> (<strong>Required</strong>)  - Identifier for a Vendor in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-vendors-in-rq">Getting a List of Vendors in RQ</a>. Use -1 for all Vendors</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[receivinginvoicehistoryreportbyproductdata](#ReceivingInvoiceHistoryReportByProductData)]











> Example Response



 
```python
[
    {
        "ReceivingID": 16912,
        "ReceivingIDByStore": "84WEARE1044",
        "PurchaseOrderID": 18339,
        "PurchaseOrderIDByStore": "84WEAPO1141",
        "ReferenceNumber": "",
        "DateReceived": "2016-01-19T08:54:52.26",
        "ProductIdentifier": "ASMIMO000026",
        "VendorSKU": "Mot A956 Droid 2 Global",
        "ProductName": "Mot Blue Droid 2 Global",
        "SerialNumber": "43211234567890",
        "Quantity": 1,
        "UnitCost": 300,
        "TotalCost": 300,
        "Reconciled": false,
        "ReconciledDate": "",
        "Correction": false,
        "ReasonCode": "",
        "VendorName": "Dymaxx",
        "OrderingComments": "",
        "ReceivingComments": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ReceivingID": 16912,
            "ReceivingIDByStore": "84WEARE1044",
            "PurchaseOrderID": 18339,
            "PurchaseOrderIDByStore": "84WEAPO1141",
            "ReferenceNumber": "",
            "DateReceived": "2016-01-19T08:54:52.26",
            "ProductIdentifier": "ASMIMO000026",
            "VendorSKU": "Mot A956 Droid 2 Global",
            "ProductName": "Mot Blue Droid 2 Global",
            "SerialNumber": "43211234567890",
            "Quantity": 1,
            "UnitCost": 300,
            "TotalCost": 300,
            "Reconciled": false,
            "ReconciledDate": "",
            "Correction": false,
            "ReasonCode": "",
            "VendorName": "Dymaxx",
            "OrderingComments": "",
            "ReceivingComments": ""
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
}
```





```xml
<Table>
  <Record>
    <ReceivingID>16912</ReceivingID>
    <ReceivingIDByStore>84WEARE1044</ReceivingIDByStore>
    <PurchaseOrderID>18339</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1141</PurchaseOrderIDByStore>
    <ReferenceNumber></ReferenceNumber>
    <DateReceived>2016-01-19T08:54:52.26</DateReceived>
    <ProductIdentifier>ASMIMO000026</ProductIdentifier>
    <VendorSKU>Mot A956 Droid 2 Global</VendorSKU>
    <ProductName>Mot Blue Droid 2 Global</ProductName>
    <SerialNumber>43211234567890</SerialNumber>
    <Quantity>1</Quantity>
    <UnitCost>300</UnitCost>
    <TotalCost>300</TotalCost>
    <Reconciled>false</Reconciled>
    <ReconciledDate></ReconciledDate>
    <Correction>false</Correction>
    <ReasonCode></ReasonCode>
    <VendorName>Dymaxx</VendorName>
    <OrderingComments></OrderingComments>
    <ReceivingComments></ReceivingComments>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ReceivingID>16912</ReceivingID>
    <ReceivingIDByStore>84WEARE1044</ReceivingIDByStore>
    <PurchaseOrderID>18339</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1141</PurchaseOrderIDByStore>
    <ReferenceNumber></ReferenceNumber>
    <DateReceived>2016-01-19T08:54:52.26</DateReceived>
    <ProductIdentifier>ASMIMO000026</ProductIdentifier>
    <VendorSKU>Mot A956 Droid 2 Global</VendorSKU>
    <ProductName>Mot Blue Droid 2 Global</ProductName>
    <SerialNumber>43211234567890</SerialNumber>
    <Quantity>1</Quantity>
    <UnitCost>300</UnitCost>
    <TotalCost>300</TotalCost>
    <Reconciled>false</Reconciled>
    <ReconciledDate></ReconciledDate>
    <Correction>false</Correction>
    <ReasonCode></ReasonCode>
    <VendorName>Dymaxx</VendorName>
    <OrderingComments></OrderingComments>
    <ReceivingComments></ReceivingComments>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ReceivingID,ReceivingIDByStore,PurchaseOrderID,PurchaseOrderIDByStore,ReferenceNumber,DateReceived,ProductIdentifier,VendorSKU,ProductName,SerialNumber,Quantity,UnitCost,TotalCost,Reconciled,ReconciledDate,Correction,ReasonCode,VendorName,OrderingComments,ReceivingComments
16912,84WEARE1044,18339,84WEAPO1141,,2016-01-19T08:54:52.26,ASMIMO000026,Mot A956 Droid 2 Global,Mot Blue Droid 2 Global,43211234567890,1,300,300,false,,false,,Dymaxx,,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Receiving Invoice History By Invoice Report

For more information see {{support_ReceivingInvoiceHistoryReport}}.



> Definition

```
GET /reports/ReceivingInvoiceHistoryReport_ByInvoice?StartDate={StartDate}&StopDate={StopDate}&VendorID={VendorID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&CategoryNumber={CategoryNumber}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/ReceivingInvoiceHistoryReport_ByInvoice?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByInvoice?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheReceivingInvoiceHistoryByInvoiceReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByInvoice?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheReceivingInvoiceHistoryByInvoiceReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByInvoice?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/ReceivingInvoiceHistoryReport_ByInvoice?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>VendorID</code> (<strong>Required</strong>)  - Identifier for a Vendor in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-vendors-in-rq">Getting a List of Vendors in RQ</a>. Use -1 for all Vendors</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[receivinginvoicehistoryreportbyinvoicedata](#ReceivingInvoiceHistoryReportByInvoiceData)]











> Example Response



 
```python
[
    {
        "ReceivingID": 16912,
        "ReceivingIDByStore": "84WEARE1044",
        "PurchaseOrderID": 18339,
        "PurchaseOrderIDByStore": "84WEAPO1141",
        "ReferenceNumber": "",
        "DateReceived": "2016-01-19T08:54:52.26",
        "ReconciliationComments": "",
        "StoreName": "84 West",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel",
        "EmployeeName": "iQmetrix Employee",
        "VendorName": "Dymaxx",
        "VendorInvoiceNumber": "1231564",
        "Posted": false,
        "Paid": false,
        "Flagged": false,
        "ProductTotal": 300,
        "Tax1Name": "",
        "Tax1Amount": 0,
        "Tax2Name": "",
        "Tax2Amount": 0,
        "Shipping": 0,
        "TotalInvoice": 300,
        "OrderingComments": "",
        "ReceivingComments": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ReceivingID": 16912,
            "ReceivingIDByStore": "84WEARE1044",
            "PurchaseOrderID": 18339,
            "PurchaseOrderIDByStore": "84WEAPO1141",
            "ReferenceNumber": "",
            "DateReceived": "2016-01-19T08:54:52.26",
            "ReconciliationComments": "",
            "StoreName": "84 West",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel",
            "EmployeeName": "iQmetrix Employee",
            "VendorName": "Dymaxx",
            "VendorInvoiceNumber": "1231564",
            "Posted": false,
            "Paid": false,
            "Flagged": false,
            "ProductTotal": 300,
            "Tax1Name": "",
            "Tax1Amount": 0,
            "Tax2Name": "",
            "Tax2Amount": 0,
            "Shipping": 0,
            "TotalInvoice": 300,
            "OrderingComments": "",
            "ReceivingComments": ""
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
}
```





```xml
<Table>
  <Record>
    <ReceivingID>16912</ReceivingID>
    <ReceivingIDByStore>84WEARE1044</ReceivingIDByStore>
    <PurchaseOrderID>18339</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1141</PurchaseOrderIDByStore>
    <ReferenceNumber></ReferenceNumber>
    <DateReceived>2016-01-19T08:54:52.26</DateReceived>
    <ReconciliationComments></ReconciliationComments>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <VendorName>Dymaxx</VendorName>
    <VendorInvoiceNumber>1231564</VendorInvoiceNumber>
    <Posted>false</Posted>
    <Paid>false</Paid>
    <Flagged>false</Flagged>
    <ProductTotal>300</ProductTotal>
    <Tax1Name></Tax1Name>
    <Tax1Amount>0</Tax1Amount>
    <Tax2Name></Tax2Name>
    <Tax2Amount>0</Tax2Amount>
    <Shipping>0</Shipping>
    <TotalInvoice>300</TotalInvoice>
    <OrderingComments></OrderingComments>
    <ReceivingComments></ReceivingComments>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ReceivingID>16912</ReceivingID>
    <ReceivingIDByStore>84WEARE1044</ReceivingIDByStore>
    <PurchaseOrderID>18339</PurchaseOrderID>
    <PurchaseOrderIDByStore>84WEAPO1141</PurchaseOrderIDByStore>
    <ReferenceNumber></ReferenceNumber>
    <DateReceived>2016-01-19T08:54:52.26</DateReceived>
    <ReconciliationComments></ReconciliationComments>
    <StoreName>84 West</StoreName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <VendorName>Dymaxx</VendorName>
    <VendorInvoiceNumber>1231564</VendorInvoiceNumber>
    <Posted>false</Posted>
    <Paid>false</Paid>
    <Flagged>false</Flagged>
    <ProductTotal>300</ProductTotal>
    <Tax1Name></Tax1Name>
    <Tax1Amount>0</Tax1Amount>
    <Tax2Name></Tax2Name>
    <Tax2Amount>0</Tax2Amount>
    <Shipping>0</Shipping>
    <TotalInvoice>300</TotalInvoice>
    <OrderingComments></OrderingComments>
    <ReceivingComments></ReceivingComments>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ReceivingID,ReceivingIDByStore,PurchaseOrderID,PurchaseOrderIDByStore,ReferenceNumber,DateReceived,ReconciliationComments,StoreName,DistrictName,RegionName,ChannelName,EmployeeName,VendorName,VendorInvoiceNumber,Posted,Paid,Flagged,ProductTotal,Tax1Name,Tax1Amount,Tax2Name,Tax2Amount,Shipping,TotalInvoice,OrderingComments,ReceivingComments
16912,84WEARE1044,18339,84WEAPO1141,,2016-01-19T08:54:52.26,,84 West,Valley Area District,Region A,Regina Channel,iQmetrix Employee,Dymaxx,1231564,false,false,false,300,,0,,0,0,300,,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the RMA History Invoice Report

For more information, see {{support_RMAHistoryReport}}.



> Definition

```
GET /reports/rmahistoryinvoicereport?StartDate={StartDate}&StopDate={StopDate}&VendorID={VendorID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheRmaHistoryInvoiceReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheRmaHistoryInvoiceReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>VendorID</code> (<strong>Required</strong>)  - Identifier for a Vendor in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-vendors-in-rq">Getting a List of Vendors in RQ</a>. Use -1 for all Vendors</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[rmahistoryinvoicereportdata](#RMAHistoryInvoiceReportData)]











> Example Response



 
```python
[
    {
        "ChannelName": "English Channel",
        "Comments": "Phone missing from package delivered on invoice #87742",
        "Committed": true,
        "Completed": true,
        "CreditInvoiceNumber": "",
        "CustomerID": -1,
        "CustomerName": "",
        "DateCommitted": "2011-03-02T17:10:11.78",
        "DateCreated": "2011-03-02T17:10:11.78",
        "DistrictName": "Valley Area District",
        "EmployeeName": "iQmetrix User",
        "ReceivingComments": "Received Credit on 2/22/11.",
        "RegionName": "Region A",
        "RMANumber": "112482",
        "ShippedAway": true,
        "ShippingCost": 8.5,
        "ShippingMethod": "Regular",
        "StockBalanceID": 1,
        "StockBalanceIDByStore": "84WEASB1",
        "StoreName": "84 West",
        "TotalCost": 460,
        "TotalCostCredited": 459,
        "VendorName": "Reliance",
        "WaybillNumber": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ChannelName": "English Channel",
            "Comments": "Phone missing from package delivered on invoice #87742",
            "Committed": true,
            "Completed": true,
            "CreditInvoiceNumber": "",
            "CustomerID": -1,
            "CustomerName": "",
            "DateCommitted": "2011-03-02T17:10:11.78",
            "DateCreated": "2011-03-02T17:10:11.78",
            "DistrictName": "Valley Area District",
            "EmployeeName": "iQmetrix User",
            "ReceivingComments": "Received Credit on 2/22/11.",
            "RegionName": "Region A",
            "RMANumber": "112482",
            "ShippedAway": true,
            "ShippingCost": 8.5,
            "ShippingMethod": "Regular",
            "StockBalanceID": 1,
            "StockBalanceIDByStore": "84WEASB1",
            "StoreName": "84 West",
            "TotalCost": 460,
            "TotalCostCredited": 459,
            "VendorName": "Reliance",
            "WaybillNumber": ""
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
}
```





```xml
<Table>
  <Record>
    <ChannelName>English Channel</ChannelName>
    <Comments>Phone missing from package delivered on invoice #87742</Comments>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <CreditInvoiceNumber></CreditInvoiceNumber>
    <CustomerID>-1</CustomerID>
    <CustomerName></CustomerName>
    <DateCommitted>2011-03-02T17:10:11.78</DateCommitted>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <ReceivingComments>Received Credit on 2/22/11.</ReceivingComments>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <ShippedAway>true</ShippedAway>
    <ShippingCost>8.5</ShippingCost>
    <ShippingMethod>Regular</ShippingMethod>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <VendorName>Reliance</VendorName>
    <WaybillNumber></WaybillNumber>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ChannelName>English Channel</ChannelName>
    <Comments>Phone missing from package delivered on invoice #87742</Comments>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <CreditInvoiceNumber></CreditInvoiceNumber>
    <CustomerID>-1</CustomerID>
    <CustomerName></CustomerName>
    <DateCommitted>2011-03-02T17:10:11.78</DateCommitted>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <ReceivingComments>Received Credit on 2/22/11.</ReceivingComments>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <ShippedAway>true</ShippedAway>
    <ShippingCost>8.5</ShippingCost>
    <ShippingMethod>Regular</ShippingMethod>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <VendorName>Reliance</VendorName>
    <WaybillNumber></WaybillNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ChannelName,Comments,Committed,Completed,CreditInvoiceNumber,CustomerID,CustomerName,DateCommitted,DateCreated,DistrictName,EmployeeName,ReceivingComments,RegionName,RMANumber,ShippedAway,ShippingCost,ShippingMethod,StockBalanceID,StockBalanceIDByStore,StoreName,TotalCost,TotalCostCredited,VendorName,WaybillNumber
English Channel,Phone missing from package delivered on invoice #87742,true,true,,-1,,2011-03-02T17:10:11.78,2011-03-02T17:10:11.78,Valley Area District,iQmetrix User,Received Credit on 2/22/11.,Region A,112482,true,8.5,Regular,1,84WEASB1,84 West,460,459,Reliance,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the RMA History Product Report

For more information, see {{support_RMAHistoryReport}}.      



> Definition

```
GET /reports/rmahistoryproductreport?StartDate={StartDate}&StopDate={StopDate}&VendorID={VendorID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheRmaHistoryProductReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheRmaHistoryProductReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>VendorID</code> (<strong>Required</strong>)  - Identifier for a Vendor in RQ. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-a-list-of-vendors-in-rq">Getting a List of Vendors in RQ</a>. Use -1 for all Vendors</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[rmahistoryproductreportdata](#RMAHistoryProductReportData)]











> Example Response



 
```python
[
    {
        "ActionTaken": 1,
        "ChannelName": "English Channel",
        "DateCreated": "2011-03-02T17:10:11.78",
        "DateReceived": "2011-03-02T17:18:44.913",
        "DateShipped": "2011-03-02T17:10:12.17",
        "DistrictName": "Valley Area District",
        "EmployeeName1": "iQmetrix User",
        "EmployeeName2": "iQmetrix User",
        "ProductIdentifier": "ACPHUT000163",
        "ProductName": "HTC Droid Incredible",
        "Quantity": 1,
        "RegionName": "Region A",
        "RMANumber": "112482",
        "SerialNumberAdded": "",
        "SerialNumberRemoved": "A1000017AB0E93",
        "StockBalanceID": 1,
        "StockBalanceIDByStore": "84WEASB1",
        "StoreName": "84 West",
        "TotalCost": 460,
        "TotalCostCredited": 459,
        "UnitCost": 460,
        "UnitCostCredited": 459,
        "VendorInvoiceNumber": "",
        "VendorName": "Reliance",
        "VendorPartNumber": ""
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ActionTaken": 1,
            "ChannelName": "English Channel",
            "DateCreated": "2011-03-02T17:10:11.78",
            "DateReceived": "2011-03-02T17:18:44.913",
            "DateShipped": "2011-03-02T17:10:12.17",
            "DistrictName": "Valley Area District",
            "EmployeeName1": "iQmetrix User",
            "EmployeeName2": "iQmetrix User",
            "ProductIdentifier": "ACPHUT000163",
            "ProductName": "HTC Droid Incredible",
            "Quantity": 1,
            "RegionName": "Region A",
            "RMANumber": "112482",
            "SerialNumberAdded": "",
            "SerialNumberRemoved": "A1000017AB0E93",
            "StockBalanceID": 1,
            "StockBalanceIDByStore": "84WEASB1",
            "StoreName": "84 West",
            "TotalCost": 460,
            "TotalCostCredited": 459,
            "UnitCost": 460,
            "UnitCostCredited": 459,
            "VendorInvoiceNumber": "",
            "VendorName": "Reliance",
            "VendorPartNumber": ""
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
}
```





```xml
<Table>
  <Record>
    <ActionTaken>1</ActionTaken>
    <ChannelName>English Channel</ChannelName>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DateReceived>2011-03-02T17:18:44.913</DateReceived>
    <DateShipped>2011-03-02T17:10:12.17</DateShipped>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <EmployeeName2>iQmetrix User</EmployeeName2>
    <ProductIdentifier>ACPHUT000163</ProductIdentifier>
    <ProductName>HTC Droid Incredible</ProductName>
    <Quantity>1</Quantity>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <SerialNumberAdded></SerialNumberAdded>
    <SerialNumberRemoved>A1000017AB0E93</SerialNumberRemoved>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <UnitCost>460</UnitCost>
    <UnitCostCredited>459</UnitCostCredited>
    <VendorInvoiceNumber></VendorInvoiceNumber>
    <VendorName>Reliance</VendorName>
    <VendorPartNumber></VendorPartNumber>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ActionTaken>1</ActionTaken>
    <ChannelName>English Channel</ChannelName>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DateReceived>2011-03-02T17:18:44.913</DateReceived>
    <DateShipped>2011-03-02T17:10:12.17</DateShipped>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <EmployeeName2>iQmetrix User</EmployeeName2>
    <ProductIdentifier>ACPHUT000163</ProductIdentifier>
    <ProductName>HTC Droid Incredible</ProductName>
    <Quantity>1</Quantity>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <SerialNumberAdded></SerialNumberAdded>
    <SerialNumberRemoved>A1000017AB0E93</SerialNumberRemoved>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <UnitCost>460</UnitCost>
    <UnitCostCredited>459</UnitCostCredited>
    <VendorInvoiceNumber></VendorInvoiceNumber>
    <VendorName>Reliance</VendorName>
    <VendorPartNumber></VendorPartNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ActionTaken,ChannelName,DateCreated,DateReceived,DateShipped,DistrictName,EmployeeName1,EmployeeName2,ProductIdentifier,ProductName,Quantity,RegionName,RMANumber,SerialNumberAdded,SerialNumberRemoved,StockBalanceID,StockBalanceIDByStore,StoreName,TotalCost,TotalCostCredited,UnitCost,UnitCostCredited,VendorInvoiceNumber,VendorName,VendorPartNumber
1,English Channel,2011-03-02T17:10:11.78,2011-03-02T17:18:44.913,2011-03-02T17:10:12.17,Valley Area District,iQmetrix User,iQmetrix User,ACPHUT000163,HTC Droid Incredible,1,Region A,112482,,A1000017AB0E93,1,84WEASB1,84 West,460,459,460,459,,Reliance,
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Stale Inventory Report

For more information see {{support_StaleInventoryReport}}.      



> Definition

```
GET /reports/StaleInventoryReport?StartDate={StartDate}&StopDate={StopDate}&QtyThreshold={QtyThreshold}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&CategoryNumber={CategoryNumber}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/StaleInventoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&QtyThreshold=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/StaleInventoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&QtyThreshold=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheStaleInventoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/StaleInventoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&QtyThreshold=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheStaleInventoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/StaleInventoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&QtyThreshold=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/StaleInventoryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&QtyThreshold=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&CategoryNumber=10&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>QtyThreshold</code> (<strong>Required</strong>)  - If a product's sales are less than or equal to the value within the selected date range it will appear in the report. Use -1 to show all inventory</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>CategoryNumber</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a></li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[staleinventoryreportdata](#StaleInventoryReportData)]











> Example Response



 
```python
[
    {
        "GlobalProductID": 9647,
        "SpecialProductID": 0,
        "ProductSKU": "KLERAP000191",
        "ProductName": "Products",
        "QtySold": 403,
        "DailyAvg": 1.1,
        "StockOut": -367,
        "QtyInStock": -403,
        "QtyOnOrder": 1,
        "QtyOnBackOrder": 2,
        "QtyInNonSellable": 0,
        "QtyTransferIn": 1,
        "QtyTransferOut": 3,
        "QtyOnRMA": 2,
        "QtyOnLoan": 2,
        "QtyCommittedOnOrderEntry": 0
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "GlobalProductID": 9647,
            "SpecialProductID": 0,
            "ProductSKU": "KLERAP000191",
            "ProductName": "Products",
            "QtySold": 403,
            "DailyAvg": 1.1,
            "StockOut": -367,
            "QtyInStock": -403,
            "QtyOnOrder": 1,
            "QtyOnBackOrder": 2,
            "QtyInNonSellable": 0,
            "QtyTransferIn": 1,
            "QtyTransferOut": 3,
            "QtyOnRMA": 2,
            "QtyOnLoan": 2,
            "QtyCommittedOnOrderEntry": 0
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
}
```





```xml
<Table>
  <Record>
    <GlobalProductID>9647</GlobalProductID>
    <SpecialProductID>0</SpecialProductID>
    <ProductSKU>KLERAP000191</ProductSKU>
    <ProductName>Products</ProductName>
    <QtySold>403</QtySold>
    <DailyAvg>1.1</DailyAvg>
    <StockOut>-367</StockOut>
    <QtyInStock>-403</QtyInStock>
    <QtyOnOrder>1</QtyOnOrder>
    <QtyOnBackOrder>2</QtyOnBackOrder>
    <QtyInNonSellable>0</QtyInNonSellable>
    <QtyTransferIn>1</QtyTransferIn>
    <QtyTransferOut>3</QtyTransferOut>
    <QtyOnRMA>2</QtyOnRMA>
    <QtyOnLoan>2</QtyOnLoan>
    <QtyCommittedOnOrderEntry>0</QtyCommittedOnOrderEntry>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <GlobalProductID>9647</GlobalProductID>
    <SpecialProductID>0</SpecialProductID>
    <ProductSKU>KLERAP000191</ProductSKU>
    <ProductName>Products</ProductName>
    <QtySold>403</QtySold>
    <DailyAvg>1.1</DailyAvg>
    <StockOut>-367</StockOut>
    <QtyInStock>-403</QtyInStock>
    <QtyOnOrder>1</QtyOnOrder>
    <QtyOnBackOrder>2</QtyOnBackOrder>
    <QtyInNonSellable>0</QtyInNonSellable>
    <QtyTransferIn>1</QtyTransferIn>
    <QtyTransferOut>3</QtyTransferOut>
    <QtyOnRMA>2</QtyOnRMA>
    <QtyOnLoan>2</QtyOnLoan>
    <QtyCommittedOnOrderEntry>0</QtyCommittedOnOrderEntry>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
GlobalProductID,SpecialProductID,ProductSKU,ProductName,QtySold,DailyAvg,StockOut,QtyInStock,QtyOnOrder,QtyOnBackOrder,QtyInNonSellable,QtyTransferIn,QtyTransferOut,QtyOnRMA,QtyOnLoan,QtyCommittedOnOrderEntry
9647,0,KLERAP000191,Products,403,1.1,-367,-403,1,2,0,1,3,2,2,0
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Transfer History Invoice Detail Report

For more information, see {{support_TransferHistoryReport}}.



> Definition

```
GET /reports/transferhistoryinvoicedetailreport?StartDate={StartDate}&StopDate={StopDate}&ShippedForWho={ShippedLocationTypeId}&ShippedForWhoIDs={ShippedRQCompanyTreeNodeIds}&ReceivedForWho={ReceivedLocationTypeId}&ReceivedForWhoIDs={ReceivedRQCompanyTreeNodeIds}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheTransferHistoryInvoiceDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheTransferHistoryInvoiceDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ShippedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer originated from. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a></li>
    <li><code>ShippedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer originated from. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a></li>
    <li><code>ReceivedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer was sent. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a></li>
    <li><code>ReceivedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer was sent. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a></li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[transferhistoryinvoicedetailreportdata](#TransferHistoryInvoiceDetailReportData)]











> Example Response



 
```python
[
    {
        "BillingStoreName": "100: My Network LLC - Anchorage",
        "CancelledByID": null,
        "CancelledByName": "null",
        "CancelledDate": "null",
        "Committed": true,
        "Completed": true,
        "DateCommitted": "2016-04-19T14:57:20.32",
        "DateRequested": "2016-04-19T14:57:20.32",
        "EstimatedArrivalDate": "2016-04-20T00:00:00",
        "ReceivingChannelName": "English Channel",
        "ReceivingComments": "",
        "ReceivingDistrictName": "Westminster",
        "ReceivingRegionName": "London",
        "ReceivingStoreName": "100: My Network LLC - Anchorage",
        "RequestingComments": "",
        "RequestingEmployeeName": "iQmetrix User",
        "ShippingChannelName": "English Channel",
        "ShippingComments": "",
        "ShippingCost": 0,
        "ShippingDistrictName": "Valley Area District",
        "ShippingMethod": "Regular",
        "ShippingRegionName": "Region A",
        "ShippingStoreName": "84 West",
        "TotalInvoice": 500,
        "TransferID": 4326,
        "TransferIDByStore": "77224TR1",
        "WaybillNumber": "53454354"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "BillingStoreName": "100: My Network LLC - Anchorage",
            "CancelledByID": null,
            "CancelledByName": "null",
            "CancelledDate": "null",
            "Committed": true,
            "Completed": true,
            "DateCommitted": "2016-04-19T14:57:20.32",
            "DateRequested": "2016-04-19T14:57:20.32",
            "EstimatedArrivalDate": "2016-04-20T00:00:00",
            "ReceivingChannelName": "English Channel",
            "ReceivingComments": "",
            "ReceivingDistrictName": "Westminster",
            "ReceivingRegionName": "London",
            "ReceivingStoreName": "100: My Network LLC - Anchorage",
            "RequestingComments": "",
            "RequestingEmployeeName": "iQmetrix User",
            "ShippingChannelName": "English Channel",
            "ShippingComments": "",
            "ShippingCost": 0,
            "ShippingDistrictName": "Valley Area District",
            "ShippingMethod": "Regular",
            "ShippingRegionName": "Region A",
            "ShippingStoreName": "84 West",
            "TotalInvoice": 500,
            "TransferID": 4326,
            "TransferIDByStore": "77224TR1",
            "WaybillNumber": "53454354"
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
}
```





```xml
<Table>
  <Record>
    <BillingStoreName>100: My Network LLC - Anchorage</BillingStoreName>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <DateCommitted>2016-04-19T14:57:20.32</DateCommitted>
    <DateRequested>2016-04-19T14:57:20.32</DateRequested>
    <EstimatedArrivalDate>2016-04-20T00:00:00</EstimatedArrivalDate>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingComments></ReceivingComments>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingComments></RequestingComments>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingComments></ShippingComments>
    <ShippingCost>0</ShippingCost>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingMethod>Regular</ShippingMethod>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalInvoice>500</TotalInvoice>
    <TransferID>4326</TransferID>
    <TransferIDByStore>77224TR1</TransferIDByStore>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <BillingStoreName>100: My Network LLC - Anchorage</BillingStoreName>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <DateCommitted>2016-04-19T14:57:20.32</DateCommitted>
    <DateRequested>2016-04-19T14:57:20.32</DateRequested>
    <EstimatedArrivalDate>2016-04-20T00:00:00</EstimatedArrivalDate>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingComments></ReceivingComments>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingComments></RequestingComments>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingComments></ShippingComments>
    <ShippingCost>0</ShippingCost>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingMethod>Regular</ShippingMethod>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalInvoice>500</TotalInvoice>
    <TransferID>4326</TransferID>
    <TransferIDByStore>77224TR1</TransferIDByStore>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
BillingStoreName,CancelledByID,CancelledByName,CancelledDate,Committed,Completed,DateCommitted,DateRequested,EstimatedArrivalDate,ReceivingChannelName,ReceivingComments,ReceivingDistrictName,ReceivingRegionName,ReceivingStoreName,RequestingComments,RequestingEmployeeName,ShippingChannelName,ShippingComments,ShippingCost,ShippingDistrictName,ShippingMethod,ShippingRegionName,ShippingStoreName,TotalInvoice,TransferID,TransferIDByStore,WaybillNumber
100: My Network LLC - Anchorage,null,null,null,true,true,2016-04-19T14:57:20.32,2016-04-19T14:57:20.32,2016-04-20T00:00:00,English Channel,,Westminster,London,100: My Network LLC - Anchorage,,iQmetrix User,English Channel,,0,Valley Area District,Regular,Region A,84 West,500,4326,77224TR1,53454354
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Transfer History Product Detail Report

For more information, see {{support_TransferHistoryReport}}.


> Definition

```
GET /reports/transferhistoryproductdetailreport?StartDate={StartDate}&StopDate={StopDate}&ShippedForWho={ShippedLocationTypeId}&ShippedForWhoIDs={ShippedRQCompanyTreeNodeIds}&ReceivedForWho={ReceivedLocationTypeId}&ReceivedForWhoIDs={ReceivedRQCompanyTreeNodeIds}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javscript
GET /reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip

```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheTransferHistoryProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheTransferHistoryProductDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>ShippedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer originated from. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a></li>
    <li><code>ShippedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer originated from. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a></li>
    <li><code>ReceivedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer was sent. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a></li>
    <li><code>ReceivedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer was sent. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a></li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[transferhistoryproductdetailreportdata](#TransferHistoryProductDetailReportData)]











> Example Response



 
```python
[
    {
        "CancelledByID": null,
        "CancelledByName": "null",
        "CancelledDate": "null",
        "CategoryPath": "Galaxies",
        "DateReceived": "2011-06-02T10:04:51.59",
        "DateShipped": "2011-06-02T09:41:08.027",
        "ProductIdentifier": "ASBORI000028",
        "ProductName": "BG Curve2 Posh PK",
        "Quantity": 1,
        "ReceivingChannelName": "English Channel",
        "ReceivingDistrictName": "Westminster",
        "ReceivingEmployeeName": "Courtney Noon",
        "ReceivingRegionName": "London",
        "ReceivingStoreName": "100: My Network LLC - Anchorage",
        "RequestingEmployeeName": "iQmetrix User",
        "SerialNumber": "",
        "ShippingChannelName": "English Channel",
        "ShippingDistrictName": "Valley Area District",
        "ShippingEmployeeName": "Courtney Noon",
        "ShippingRegionName": "Region A",
        "ShippingStoreName": "84 West",
        "TotalCost": 9.6705,
        "TransferID": 718,
        "TransferIDByStore": "WIREGTR73",
        "UnitCost": 9.6705,
        "VendorName": "LTD Wireless",
        "VendorPartNumber": "EEG675",
        "WaybillNumber": "53454354"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "CancelledByID": null,
            "CancelledByName": "null",
            "CancelledDate": "null",
            "CategoryPath": "Galaxies",
            "DateReceived": "2011-06-02T10:04:51.59",
            "DateShipped": "2011-06-02T09:41:08.027",
            "ProductIdentifier": "ASBORI000028",
            "ProductName": "BG Curve2 Posh PK",
            "Quantity": 1,
            "ReceivingChannelName": "English Channel",
            "ReceivingDistrictName": "Westminster",
            "ReceivingEmployeeName": "Courtney Noon",
            "ReceivingRegionName": "London",
            "ReceivingStoreName": "100: My Network LLC - Anchorage",
            "RequestingEmployeeName": "iQmetrix User",
            "SerialNumber": "",
            "ShippingChannelName": "English Channel",
            "ShippingDistrictName": "Valley Area District",
            "ShippingEmployeeName": "Courtney Noon",
            "ShippingRegionName": "Region A",
            "ShippingStoreName": "84 West",
            "TotalCost": 9.6705,
            "TransferID": 718,
            "TransferIDByStore": "WIREGTR73",
            "UnitCost": 9.6705,
            "VendorName": "LTD Wireless",
            "VendorPartNumber": "EEG675",
            "WaybillNumber": "53454354"
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
}
```





```xml
<Table>
  <Record>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <CategoryPath>Galaxies</CategoryPath>
    <DateReceived>2011-06-02T10:04:51.59</DateReceived>
    <DateShipped>2011-06-02T09:41:08.027</DateShipped>
    <ProductIdentifier>ASBORI000028</ProductIdentifier>
    <ProductName>BG Curve2 Posh PK</ProductName>
    <Quantity>1</Quantity>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingEmployeeName>Courtney Noon</ReceivingEmployeeName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <SerialNumber></SerialNumber>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingEmployeeName>Courtney Noon</ShippingEmployeeName>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalCost>9.6705</TotalCost>
    <TransferID>718</TransferID>
    <TransferIDByStore>WIREGTR73</TransferIDByStore>
    <UnitCost>9.6705</UnitCost>
    <VendorName>LTD Wireless</VendorName>
    <VendorPartNumber>EEG675</VendorPartNumber>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <CategoryPath>Galaxies</CategoryPath>
    <DateReceived>2011-06-02T10:04:51.59</DateReceived>
    <DateShipped>2011-06-02T09:41:08.027</DateShipped>
    <ProductIdentifier>ASBORI000028</ProductIdentifier>
    <ProductName>BG Curve2 Posh PK</ProductName>
    <Quantity>1</Quantity>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingEmployeeName>Courtney Noon</ReceivingEmployeeName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <SerialNumber></SerialNumber>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingEmployeeName>Courtney Noon</ShippingEmployeeName>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalCost>9.6705</TotalCost>
    <TransferID>718</TransferID>
    <TransferIDByStore>WIREGTR73</TransferIDByStore>
    <UnitCost>9.6705</UnitCost>
    <VendorName>LTD Wireless</VendorName>
    <VendorPartNumber>EEG675</VendorPartNumber>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
CancelledByID,CancelledByName,CancelledDate,CategoryPath,DateReceived,DateShipped,ProductIdentifier,ProductName,Quantity,ReceivingChannelName,ReceivingDistrictName,ReceivingEmployeeName,ReceivingRegionName,ReceivingStoreName,RequestingEmployeeName,SerialNumber,ShippingChannelName,ShippingDistrictName,ShippingEmployeeName,ShippingRegionName,ShippingStoreName,TotalCost,TransferID,TransferIDByStore,UnitCost,VendorName,VendorPartNumber,WaybillNumber
null,null,null,Galaxies,2011-06-02T10:04:51.59,2011-06-02T09:41:08.027,ASBORI000028,BG Curve2 Posh PK,1,English Channel,Westminster,Courtney Noon,London,100: My Network LLC - Anchorage,iQmetrix User,,English Channel,Valley Area District,Courtney Noon,Region A,84 West,9.6705,718,WIREGTR73,9.6705,LTD Wireless,EEG675,53454354
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```



 

#### Headers

This specifies the format of the data sent to the API.

##### For JSON:

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 
<br/>

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


    
    

    
    

    
    

    
    
# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure request body is formatted properly |
| `HTTP 401` | `Tokan is invalid` | Ensure Access Token is valid and has not expired |
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure URI is valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | See Message in response for more information |                 

    
