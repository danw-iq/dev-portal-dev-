---
title:  RQ Data Connect Finance Reports
permalink: /api/RQ-Data-Connect-Finance-Reports/
tags: []
keywords: 
audience: 
last_updated: 6-12-2016
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

## CashOutSummaryReportData

```json
{
	"CashOutID": "13775",
	"CashOutIDByStore": "84WEACA649",
	"StoreName": "84 West",
	"Reconciled": "No",
	"StartDate": "2012-08-20T18:18:52.023",
	"StopDate": "2015-02-24T13:40:33.21",
	"EmployeeName1": "iQmetrix Employee",
	"EmployeeUsername1": "iQmetrix.Employee",
	"EmployeeName2": "iQmetrix Employee",
	"EmployeeUsername2": "iQmetrix.Employee",
	"PaymentName": "Cash",
	"CreditCardPaymentType": "",
	"PaymentReconciled": "No",
	"Cashout": "",
	"Reconciliation": "",
	"DepositNumber": "100.00",
	"ActualTotal": "1884.1",
	"SystemTotal": "0",
	"Skim": "0",
	"Float": "0",
	"DifferenceTotal": "1884.1",
	"TransactionQuantity": "0",
	"CashAndCheque": "1884.1",
	"FloatRetained": "0",
	"DepositAmount": "1884.1",
	"CashInAmount": "0",
	"BankDetails": ""
}
```

| Name | Description |
|:-----|:------------|
| CashOutID (`INT`) | Internal identifier in RQ | 
| CashOutIDByStore (`VARCHAR(14)`) | Cashout # - number that the system generated for the cashout at the time it was created. To view the cashout simply click its underlined link | 
| StoreName (`NVARCHAR(MAX)`) | Name of the store | 
| Reconciled (`VARCHAR(3)`) | A flag to indicate if the cashout was reconciled | 
| StartDate (`DateTime`) | Started On - start time of this cashout's interval. If this is the first cashout for this location then the Started On Date will be N/A | 
| StopDate (`DateTime`) | Stopped On - stop time of this cashout's interval | 
| EmployeeName1 (`VARCHAR(51)`) | Employee 1 - name of the employee who was logged in when the cashout was done | 
| EmployeeUsername1 (`VARCHAR(51)`) | Username1 - username of the employee who was logged in when the cashout was done | 
| EmployeeName2 (`VARCHAR(51)`) | Employee 2 - name of the employee who verified the cashout was correct, this may be the same person as Employee 1 | 
| EmployeeUsername2 (`VARCHAR(51)`) | Username2 - the username of the employee who was logged in when the cashout was done | 
| PaymentName (`NVARCHAR(MAX)`) | Payment - payment type for the row's totals | 
| CreditCardPaymentType (`VARCHAR(20)`) | Credit card payment type | 
| PaymentReconciled (`VARCHAR(3)`) | Payment Reconciled - indicates whether the payment type has been reconciled or not | 
| Cashout (`VARCHAR(5000)`) | Cashout Comments - comments from the cashout | 
| Reconciliation (`VARCHAR(1000)`) | Reconciliation Comments - from the reconciliation if it has been done | 
| DepositNumber (`VARCHAR(50)`) | Deposit # - number for this particular deposit, e.g. bank deposit number | 
| ActualTotal (`MONEY`) | Your Total - total filled in by Employee 1 from the till totals for all transactions during the cashoutinterval for the row's payment type | 
| SystemTotal (`MONEY`) | System Total - overall total the software has recorded for all transactions during the cashout interval for the row's payment type. This includes all payments accepted for sales, bill pay and for customer account payments | 
| Skim (`MONEY`) | Internal value in RQ | 
| Float (`MONEY`) | Internal value in RQ | 
| DifferenceTotal (`MONEY`) | Difference - Your Total - System Total | 
| TransactionQuantity (`INT`) | Internal value in RQ | 
| CashAndCheque (`MONEY`) | Cash/check (cheque) - total for the cash and check payment types | 
| FloatRetained (`MONEY`) | Float Retained - dollar amount retained as a float | 
| DepositAmount (`MONEY`) | Deposit - actual deposit value for that cashout | 
| CashInAmount (`MONEY`) | Cashin - cashed in float amount | 
| BankDetails (`NVARCHAR(MAX)`) | Bank Details - states the bank associated to the cashout | 


## ChargeBackSummaryReportLocationData

```json
{
	"Quantity": "1",
	"StoreID": "6679",
	"StoreName": "100: My Network LLC - Anchorage",
	"TotalValue": "-100"
}
```

| Name | Description |
|:-----|:------------|
| Quantity (`INT`) | Qty | 
| StoreID (`INT`) | Internal identifier for a store in RQ | 
| StoreName (`NVARCHAR (MAX)`) | Location | 
| TotalValue (`MONEY`) | Total Value - dollar value of the charge backs | 


## ChargeBackSummaryReportCategoryData

```json
{
	"CategoryName": "Financing",
	"CategoryNumber": "10101012",
	"CategoryPath": "Activations",
	"Quantity": "1",
	"TotalValue": "-100"
}
```

| Name | Description |
|:-----|:------------|
| CategoryName (`NVARCHAR (MAX)`) | Category Name | 
| CategoryNumber (`NVARCHAR (100)`) | Internal identifier for a Category in RQ | 
| CategoryPath (`NVARCHAR (MAX)`) | Category | 
| Quantity (`INT`) | Qty | 
| TotalValue (`MONEY`) | Total Value - dollar value of the charge backs | 


## ChargeBackSummaryReportProductSummaryData

```json
{
	"GlobalProductID": "9809",
	"ProductIdentifier": "ACFNRB000008",
	"ProductName": "Vendor Rebate",
	"Quantity": "1",
	"TotalValue": "-100"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Internal identifier for a product in RQ | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU | 
| ProductName (`NVARCHAR (MAX)`) | Product Name | 
| Quantity (`INT`) | Qty | 
| TotalValue (`MONEY`) | Total Value - dollar value of the charge backs | 


## ChargeBackSummaryReportProductDetailData

```json
{
	"AssociationNumber": "7",
	"CarrierPrice": "0",
	"CategoryName": "10101012",
	"CategoryNumber": "Financing",
	"ChargeBackCode": "iQmetrix User",
	"ChargedBackByEmployee": "1",
	"ChargedBackByEmployeeID": "1",
	"Comments": "",
	"CustomerID": "null",
	"CustomerName": "No Customer",
	"DateChargedBack": "2016-05-20T07:57:42.417",
	"DateInvoiced": "2016-05-20T06:47:10.543",
	"FullChargeBackID": "322aa012-82dc-4373-a7d6-82faa2b4738b",
	"FullChargeBackIDByStore": "77224FC1",
	"GlobalProductID": "9809",
	"InvoicedByEmployee": "iQmetrix User",
	"InvoicedByEmployeeID": "1",
	"ProductIdentifier": "ACFNRB000008",
	"ProductName": "Vendor Rebate",
	"Quantity": "1",
	"RelatedProduct": "",
	"RelatedProductID": "0",
	"SaleInvoiceID": "129036",
	"SaleInvoiceIDByStore": "77224IN5",
	"SerialNumber": "1123123132",
	"TotalValue": "-100",
	"VendorName": "",
	"VendorSKU": ""
}
```

| Name | Description |
|:-----|:------------|
| AssociationNumber (`SMALLINT`) | When adding products with PAW all associated products from the sale have the same association number tied together, this value increments based on how many sales are made on that order | 
| CarrierPrice (`MONEY`) | Carrier Price - value or revenue assigned by the carrier | 
| CategoryName (`VARCHAR(100)`) | Category - inventory category to which the SKU belongs | 
| CategoryNumber (`VARCHAR(100)`) | Internal identifier for a Category in RQ | 
| ChargeBackCode (`VARCHAR(500)`) | Charge Back Code - specific code for this charge back | 
| ChargedBackByEmployee (`VARCHAR(160)`) | Tendered By - name of the employee logged into RQ when the invoice was tendered | 
| ChargedBackByEmployeeID (`INT`) | Identifier for an employee in RQ | 
| Comments (`NVARCHAR(MAX)`) | Comments - any comments associated with this charge back | 
| CustomerID (`INT`) | Internal identifier for a customer in RQ | 
| CustomerName (`VARCHAR(160)`) | Customer Name - name of the customer as entered on their profile | 
| DateChargedBack (`DateTime`) | Charged Back - date of the charge back | 
| DateInvoiced (`DateTime`) | Invoiced - date originally invoiced | 
| FullChargeBackID (`IDUNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| FullChargeBackIDByStore (`VARCHAR(30)`) | Charge Back # - invoice number for the charge back | 
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| InvoicedByEmployee (`VARCHAR(160)`) | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | 
| InvoicedByEmployeeID (`INT`) | Internal identifier for an Employee in RQ | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - SKU of the product charged back | 
| ProductName (`VARCHAR(100)`) | Product Name - description of the product charged back | 
| Quantity (`INT`) | Qty - total count of charge backs | 
| RelatedProduct (`VARCHAR(100)`) | Related Product - related product, if applicable | 
| RelatedProductID (`INT`) | Internal identifier for a product in RQ | 
| SaleInvoiceID (`INT`) | Internal identifier for an invoice in RQ | 
| SaleInvoiceIDByStore (`VARCHAR(30)`) | Invoice # - original invoice number | 
| SerialNumber (`VARCHAR(100)`) | Tracking Number - tracking number associated with the product charged back | 
| TotalValue (`MONEY`) | Total Value - dollar value of the charge backs | 
| VendorName (`NVARCHAR(MAX)`) | Name for a vendor in RQ | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU in RQ | 


## ChargeBackSummaryReportEmployeeData

```json
{
	"Commission": "0",
	"InvoicedByEmployee": "iQmetrix User",
	"InvoicedByEmployeeID": "1",
	"Quantity": "1",
	"TotalValue": "5"
}
```

| Name | Description |
|:-----|:------------|
| Commission (`MONEY`) | Commission | 
| InvoicedByEmployee (`VARCHAR (51)`) | Employee | 
| InvoicedByEmployeeID (`INT`) | Internal identifier for an Employee in RQ | 
| Quantity (`INT`) | Qty | 
| TotalValue (`MONEY`) | Total Value - dollar value of the charge backs | 


## ChargeBackSummaryReportHardwareCollectionData

```json
{
	"AssociationNumber": "7",
	"CommissionRebate1": "SaslTel New Activation",
	"CommissionRebate2": "",
	"CustomerID": "null",
	"CustomerName": "No Customer",
	"DateInvoiced": "2016-05-20T06:47:10.543",
	"EquipmentRebate": "",
	"HardwareRebateGlobalProductID": "1",
	"HardwareRebateSKU": "CPCCRB000104",
	"InvoicedByEmployee": "iQmetrix User",
	"InvoicedByEmployeeID": "1",
	"IsFullChargedBack1": "",
	"IsFullChargedBack2": "",
	"IsFullChargedBack3": "",
	"PhoneNumber": "",
	"Price": "99.99",
	"RatePlanRebate2GlobalProductID": "2",
	"RatePlanRebate2SKU": "",
	"RatePlanRebateGlobalProductID": "3",
	"RatePlanRebateSKU": "",
	"RelatedProduct": "",
	"RelatedProductID": "0",
	"SaleInvoiceID": "423",
	"SaleInvoiceIDByStore": "",
	"SerialNumber": "",
	"StoreID": "6679",
	"StoreName": "100: My Network LLC - Anchorage",
	"VendorName": "",
	"VendorSKU": ""
}
```

| Name | Description |
|:-----|:------------|
| AssociationNumber (`SMALLINT`) | When adding products with PAW all associated products from the sale have the same association number tied together, this value increments based on how many sales are made on that order | 
| CommissionRebate1 (`NVARCHAR(1000)`) | Commission Rebate 1 - name of the first commission rebate | 
| CommissionRebate2 (`NVARCHAR(1000)`) | Commission Rebate 2 - name of the second commission rebate | 
| CustomerID (`INT`) | Identifier for a customer in RQ | 
| CustomerName (`VARCHAR(160)`) | Customer Name - name of the customer as entered on their profile | 
| DateInvoiced (`DateTime`) | Tendered On - date tendered | 
| EquipmentRebate (`NVARCHAR(1000)`) | Equipment Rebate - name of the equipment rebate | 
| HardwareRebateGlobalProductID (`INT`) | Internal identifier for a product in RQ | 
| HardwareRebateSKU (`VARCHAR(12)`) | Equipment Rebate SKU - SKU of the equipment rebate | 
| InvoicedByEmployee (`VARCHAR(160)`) | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | 
| InvoicedByEmployeeID (`INT`) | Internal identifier for an employee in RQ | 
| IsFullChargedBack1 (`VARCHAR(10)`) | Charged Back - yes if charged back | 
| IsFullChargedBack2 (`VARCHAR(10)`) | Charged Back - yes if charged back | 
| IsFullChargedBack3 (`VARCHAR(10)`) | Charged Back - yes if charged back | 
| PhoneNumber (`VARCHAR(30)`) | Phone - Mobile number of the device | 
| Price (`MONEY`) | Price - actual invoiced price | 
| RatePlanRebate2GlobalProductID (`INT`) | Internal identifier in RQ | 
| RatePlanRebate2SKU (`VARCHAR(12)`) | Commission Rebate 2 SKU - SKU of the second commission rebate | 
| RatePlanRebateGlobalProductID (`INT`) | Internal identifier in RQ | 
| RatePlanRebateSKU (`VARCHAR(12)`) | Commission Rebate SKU - SKU of the first commission rebate | 
| RelatedProduct (`VARCHAR(100)`) | Related Product - product associated with this rebate | 
| RelatedProductID (`INT`) | Internal identifier in RQ | 
| SaleInvoiceID (`INT`) | Internal identifier in RQ | 
| SaleInvoiceIDByStore (`VARCHAR(30)`) | Invoice # - original invoice number | 
| SerialNumber (`VARCHAR(100)`) | Serial number | 
| StoreID (`INT`) | Collection Date - date collected | 
| StoreName (`VARCHAR(100)`) | Tendered At - location where tendered | 
| VendorName (`NVARCHAR(MAX)`) | Name for a vendor in RQ | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU | 


## OutstandingGiftCardsReportData

```json
{
	"SerialNumber": "7777085179051274",
	"DateSold": "2016-10-14T13:05:14.133",
	"CustomerName": "Bill Smith",
	"LastRedeemedGMT": "2016-10-14T19:30:37.063",
	"LastRedeemed": "2016-10-14T13:30:37.063",
	"RedeemedAt": "84 West",
	"RedeemedBy": "Bill Smith",
	"Balance": "77.52",
	"SaleInvoiceID": "634",
	"InvoiceIDByStore": "MIL44AH9",
	"ProductName": "iTunes 20",
	"ProductSKU": "ASBTHT000018",
	"InvoiceSerialMask": "6"
}
```

| Name | Description |
|:-----|:------------|
| SerialNumber (`VARCHAR(35)`) | Card Number - activation number for the gift card | 
| DateSold (`DateTime`) | Activated On - date the gift card was activated | 
| CustomerName (`VARCHAR(101)`) | Customer - name of the customer who purchased the gift card | 
| LastRedeemedGMT (`DateTime`) | Last Redeemed (GMT) - when the gift card was last redeemed, in GMT time | 
| LastRedeemed (`DateTime`) | Last Redeemed - when the gift card was last redeemed, local time | 
| RedeemedAt (`NVARCHAR(MAX)`) | Redeemed At - location where the card was redeemed | 
| RedeemedBy (`VARCHAR(151)`) | Redeemed By - name of the customer who redeemed the gift card | 
| Balance (`MONEY`) | Balance - remaining balance | 
| SaleInvoiceID (`INT`) | Internal identifier for an invoice in RQ | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice Number - invoice number with a link to the invoice | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - product description of the card | 
| ProductSKU (`VARCHAR(20)`) | Product SKU - product SKU assigned to the gift card | 
| InvoiceSerialMask (`INT`) | Amount of the SerialNumber to mask | 


## PaymentIntegrationTransactionReportData

```json
{
	"InvoiceID": "122337",
	"StoreInvoiceID": "84WEAIN5981",
	"CustomerName": "Alice Kim",
	"EmployeeName": "Sam Smith",
	"InvoiceTypeID": "1",
	"InvoiceType": "Invoice",
	"LocationEntityID": "14192",
	"AuthType": "Sale",
	"TransType": "Credit",
	"CardTypeID": "2",
	"CardType": "Visa",
	"Amount": "4",
	"EntryTypeID": "2",
	"EntryType": "Swiped",
	"MerchantNumber": "1111",
	"TerminalNumber": "90572837",
	"AuthDateUTC": "2015-01-28T16:31:58.877",
	"AuthorizationNumber": "ABS251",
	"CardholderName": "John Test",
	"CardBin": "545454",
	"LastFourDigits": "5454",
	"TransactionResult": "Approved",
	"ReversedVoided": "0",
	"ReversedVoidedReason": "Auto Void from Incomplete Invoice",
	"VoidedByEmployeeEntityID": "512",
	"VoidedDate": "2015-01-30T16:31:58.877"
}
```

| Name | Description |
|:-----|:------------|
| InvoiceID (`INT`) | Unique identifier for the invoice in RQ | 
| StoreInvoiceID (`VARCHAR(14)`) | Invoice identifier displayed to the user and on the printed invoice | 
| CustomerName (`VARCHAR(101)`) | Customer name | 
| EmployeeName (`VARCHAR(51)`) | Employee name | 
| InvoiceTypeID (`INT`) | Identifier for the InvoiceType, see InvoiceType property | 
| InvoiceType (`VARCHAR(15)`) | Name of the <a href='#invoicetype'>InvoiceType</a> | 
| LocationEntityID (`INT`) | Identifier of the store as a <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a> in Entity Store | 
| AuthType (`VARCHAR(4)`) | Indicates sale or refund | 
| TransType (`VARCHAR(8)`) | What type of transaction this is (Credit/Debit) | 
| CardTypeID (`INT`) | Identifier for the CardType. See CardType property | 
| CardType (`VARCHAR(50)`) | Name of the <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#cardtype'>CardType</a>. See <a href='#getting-card-types'>Getting Card Types</a> for a list of possible values | 
| Amount (`MONEY`) | Amount requested | 
| EntryTypeID (`INT`) | Identifier for the EntryType, see EntryType property | 
| EntryType (`VARCHAR(50)`) | Name of the <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#entrytype'>EntryType</a>. See <a href='#getting-entry-types'>Getting Entry Types</a> for a list of possible values | 
| MerchantNumber (`VARCHAR(50)`) | The Merchant Number / ID used in payment credentials for this transaction | 
| TerminalNumber (`VARCHAR(50)`) | The Terminal Number / ID used in payment credentials for this transaction | 
| AuthDateUTC (`DateTime`) | Date of Transaction in UTC | 
| AuthorizationNumber (`VARCHAR(10)`) | Authorization Number from Payment Processor | 
| CardholderName (`VARCHAR(100)`) | Name of Cardholder | 
| CardBin (`VARCHAR(6)`) | The payment cards Bank Identifiation Number (BIN) | 
| LastFourDigits (`VARCHAR(4)`) | Last four digits of card | 
| TransactionResult (`VARCHAR(110)`) | Indicated Approved or Declined | 
| ReversedVoided (`INT`) | A flag to indicate if the transaction was reversed/voided (1) or not (0) | 
| ReversedVoidedReason (`VARCHAR(150)`) | String explanation on why the original transaction was voided. Only appears on void transactions, not on the original sale transation | 
| VoidedByEmployeeEntityID (`NVARCHAR(50)`) | Identifier for a <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a> who voided this transaction | 
| VoidedDate (`DateTime`) | Date Transaction was voided in UTC | 


## TaxDetailsReportData

```json
{
	"DateCreated": "2015-12-31T12:35:07.05",
	"SaleInvoiceID": "166519",
	"InvoiceIDByStore": "MIL44AH9",
	"TenderedBy": "John Test",
	"TenderedAt": "Cornwall",
	"CustomerName": "Alice Smith",
	"Comments": "Return",
	"Invoiced": "-910.94",
	"Sales": "-910.94",
	"Cost": "-405.67",
	"Profit": "-505.27",
	"Adjusted": "No",
	"Taxable": "Yes",
	"Refund": "Yes",
	"VendorRebates": "0",
	"VendorRebatesTax": "0",
	"Coupons": "0",
	"CouponsTax": "0",
	"YourPriceTaxableSales": "-910.94",
	"ListPriceTaxableSales": "0",
	"GreaterOfTaxableSales": "-69.94",
	"FlatTaxableSales": "0",
	"NonTaxableSales": "0",
	"TaxCollected": "-59.79",
	"TaxExemptReasonCode": ""
}
```

| Name | Description |
|:-----|:------------|
| DateCreated (`DateTime`) | Invoice Date - date the invoice was tendered | 
| SaleInvoiceID (`INT`) | Internal identifier for an Invoice in RQ | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice #- invoice number assigned by RQ | 
| TenderedBy (`VARCHAR(51)`) | Invoiced By- name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | 
| TenderedAt (`NVARCHAR(MAX)`) | Invoiced At- name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | 
| CustomerName (`VARCHAR(151)`) | Customer Name - name of the customer as entered on their profile | 
| Comments (`NVARCHAR(MAX)`) | Invoice Comments - any comments on the invoice | 
| Invoiced (`MONEY`) | Total Invoiced - total dollar value of the invoice | 
| Sales (`MONEY`) | Total Sales - total dollar value of the sales on the invoice, usually the same as Total Invoiced except in the case of gift card sales | 
| Cost (`MONEY`) | Total Cost - total purchase cost for all product on the invoice | 
| Profit (`MONEY`) | Total GP - gross profit for the invoice | 
| Adjusted (`VARCHAR(32)`) | Adjusted - indicates if the invoice was adjusted | 
| Taxable (`VARCHAR(32)`) | Taxable - indicates if this line is taxable | 
| Refund (`VARCHAR(32)`) | Refund - indicates if this is a refund | 
| VendorRebates (`MONEY`) | Total Vendor Rebates - total vendor rebate dollar amount | 
| VendorRebatesTax (`MONEY`) | Tax On Vendor Rebates - dollar amount of tax on any vendor rebates | 
| Coupons (`MONEY`) | Total Coupons - total dollar amount of coupons | 
| CouponsTax (`MONEY`) | Tax On Coupons - total dollar amount of tax collected on coupons | 
| YourPriceTaxableSales (`MONEY`) | Full Your Price Taxable Amount - total your price taxable amount (based on the price the product was sold for) | 
| ListPriceTaxableSales (`MONEY`) | Full List Price Taxable Amount - total list price taxable amount (based on the original retail price rung up at the POS based on the inventory settings, prior to giving a discount) | 
| GreaterOfTaxableSales (`MONEY`) | Full Greater of Your Price And Cost Taxable Amount - based on (greater of the price the product sold for, or the cost of the product) | 
| FlatTaxableSales (`MONEY`) | Full Flat Taxable Amount - based on the price the product was sold for | 
| NonTaxableSales (`MONEY`) | Tax Exempt Amount - total tax exempt amount | 
| TaxCollected (`MONEY`) | Total Tax Paid Amount - total dollar amount of tax paid | 
| TaxExemptReasonCode (`VARCHAR(1)`) |  | 


## EntryType

```json
{
	"EntryTypeID": "1",
	"EntryTypeDescription": "Swiped",
	"Message": "Swiped"
}
```

| Name | Description |
|:-----|:------------|
| EntryTypeID (`INT`) | Identifier | 
| EntryTypeDescription (`VARCHAR(50)`) | Description | 
| Message (`NVARCHAR(MAX)`) | Message | 


## CardType

```json
{
	"CardTypeID": "2",
	"FullName": "Mastercard",
	"Mnemonic": "MC",
	"AccountNumberLength": "16",
	"CvvLength": "3"
}
```

| Name | Description |
|:-----|:------------|
| CardTypeID (`INT`) | Identifier | 
| FullName (`VARCHAR(50)`) | Full card name | 
| Mnemonic (`VARCHAR(2)`) | Card abbreviation | 
| AccountNumberLength (`INT`) | Length of account number | 
| CvvLength (`INT`) | Length of CVV number on card | 




## Enumerations

### InvoiceType

| Id | Name |
|:---|:-----|
| 1 | Invoice |
| 2 | Pay Off Account |
| 3 | Vendor Deposit |
| 4 | Sale Order |
| 5 | Bill Payment |  


## Requests



<h3 id='getting-the-cashout-summary-report' class='clickable-header top-level-header'>Getting the Cashout Summary Report</h3>

For more information see {{support_CashoutSummaryReport}}.      


<h4>Request</h4>

<pre>
GET /reports/CashOutSummaryReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
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
    <li class="active"><a href="#http-getting-the-cashout-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-cashout-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-cashout-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-cashout-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-cashout-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-cashout-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-cashout-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-cashout-summary-report">
<pre id="http-code-getting-the-cashout-summary-report"><code class="language-http">GET /reports/CashOutSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-cashout-summary-report">
<pre id="curl-code-getting-the-cashout-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/CashOutSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-cashout-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-cashout-summary-report"><code class="language-csharp">static IRestResponse GettingTheCashoutSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/CashOutSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-cashout-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-cashout-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheCashoutSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/CashOutSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-cashout-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-cashout-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/CashOutSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[cashoutsummaryreportdata](#CashOutSummaryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-cashout-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-cashout-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-cashout-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-cashout-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-cashout-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-cashout-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-cashout-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CashOutID": 13775,
        "CashOutIDByStore": "84WEACA649",
        "StoreName": "84 West",
        "Reconciled": "No",
        "StartDate": "2012-08-20T18:18:52.023",
        "StopDate": "2015-02-24T13:40:33.21",
        "EmployeeName1": "iQmetrix Employee",
        "EmployeeUsername1": "iQmetrix.Employee",
        "EmployeeName2": "iQmetrix Employee",
        "EmployeeUsername2": "iQmetrix.Employee",
        "PaymentName": "Cash",
        "CreditCardPaymentType": "",
        "PaymentReconciled": "No",
        "Cashout": "",
        "Reconciliation": "",
        "DepositNumber": "100.00",
        "ActualTotal": 1884.1,
        "SystemTotal": 0,
        "Skim": 0,
        "Float": 0,
        "DifferenceTotal": 1884.1,
        "TransactionQuantity": 0,
        "CashAndCheque": 1884.1,
        "FloatRetained": 0,
        "DepositAmount": 1884.1,
        "CashInAmount": 0,
        "BankDetails": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-cashout-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CashOutID": 13775,
            "CashOutIDByStore": "84WEACA649",
            "StoreName": "84 West",
            "Reconciled": "No",
            "StartDate": "2012-08-20T18:18:52.023",
            "StopDate": "2015-02-24T13:40:33.21",
            "EmployeeName1": "iQmetrix Employee",
            "EmployeeUsername1": "iQmetrix.Employee",
            "EmployeeName2": "iQmetrix Employee",
            "EmployeeUsername2": "iQmetrix.Employee",
            "PaymentName": "Cash",
            "CreditCardPaymentType": "",
            "PaymentReconciled": "No",
            "Cashout": "",
            "Reconciliation": "",
            "DepositNumber": "100.00",
            "ActualTotal": 1884.1,
            "SystemTotal": 0,
            "Skim": 0,
            "Float": 0,
            "DifferenceTotal": 1884.1,
            "TransactionQuantity": 0,
            "CashAndCheque": 1884.1,
            "FloatRetained": 0,
            "DepositAmount": 1884.1,
            "CashInAmount": 0,
            "BankDetails": ""
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-cashout-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CashOutID>13775</CashOutID>
    <CashOutIDByStore>84WEACA649</CashOutIDByStore>
    <StoreName>84 West</StoreName>
    <Reconciled>No</Reconciled>
    <StartDate>2012-08-20T18:18:52.023</StartDate>
    <StopDate>2015-02-24T13:40:33.21</StopDate>
    <EmployeeName1>iQmetrix Employee</EmployeeName1>
    <EmployeeUsername1>iQmetrix.Employee</EmployeeUsername1>
    <EmployeeName2>iQmetrix Employee</EmployeeName2>
    <EmployeeUsername2>iQmetrix.Employee</EmployeeUsername2>
    <PaymentName>Cash</PaymentName>
    <CreditCardPaymentType></CreditCardPaymentType>
    <PaymentReconciled>No</PaymentReconciled>
    <Cashout></Cashout>
    <Reconciliation></Reconciliation>
    <DepositNumber>100.00</DepositNumber>
    <ActualTotal>1884.1</ActualTotal>
    <SystemTotal>0</SystemTotal>
    <Skim>0</Skim>
    <Float>0</Float>
    <DifferenceTotal>1884.1</DifferenceTotal>
    <TransactionQuantity>0</TransactionQuantity>
    <CashAndCheque>1884.1</CashAndCheque>
    <FloatRetained>0</FloatRetained>
    <DepositAmount>1884.1</DepositAmount>
    <CashInAmount>0</CashInAmount>
    <BankDetails></BankDetails>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-cashout-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CashOutID>13775</CashOutID>
    <CashOutIDByStore>84WEACA649</CashOutIDByStore>
    <StoreName>84 West</StoreName>
    <Reconciled>No</Reconciled>
    <StartDate>2012-08-20T18:18:52.023</StartDate>
    <StopDate>2015-02-24T13:40:33.21</StopDate>
    <EmployeeName1>iQmetrix Employee</EmployeeName1>
    <EmployeeUsername1>iQmetrix.Employee</EmployeeUsername1>
    <EmployeeName2>iQmetrix Employee</EmployeeName2>
    <EmployeeUsername2>iQmetrix.Employee</EmployeeUsername2>
    <PaymentName>Cash</PaymentName>
    <CreditCardPaymentType></CreditCardPaymentType>
    <PaymentReconciled>No</PaymentReconciled>
    <Cashout></Cashout>
    <Reconciliation></Reconciliation>
    <DepositNumber>100.00</DepositNumber>
    <ActualTotal>1884.1</ActualTotal>
    <SystemTotal>0</SystemTotal>
    <Skim>0</Skim>
    <Float>0</Float>
    <DifferenceTotal>1884.1</DifferenceTotal>
    <TransactionQuantity>0</TransactionQuantity>
    <CashAndCheque>1884.1</CashAndCheque>
    <FloatRetained>0</FloatRetained>
    <DepositAmount>1884.1</DepositAmount>
    <CashInAmount>0</CashInAmount>
    <BankDetails></BankDetails>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-cashout-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CashOutID,CashOutIDByStore,StoreName,Reconciled,StartDate,StopDate,EmployeeName1,EmployeeUsername1,EmployeeName2,EmployeeUsername2,PaymentName,CreditCardPaymentType,PaymentReconciled,Cashout,Reconciliation,DepositNumber,ActualTotal,SystemTotal,Skim,Float,DifferenceTotal,TransactionQuantity,CashAndCheque,FloatRetained,DepositAmount,CashInAmount,BankDetails
13775,84WEACA649,84 West,No,2012-08-20T18:18:52.023,2015-02-24T13:40:33.21,iQmetrix Employee,iQmetrix.Employee,iQmetrix Employee,iQmetrix.Employee,Cash,,No,,,100.00,1884.1,0,0,0,1884.1,0,1884.1,0,1884.1,0,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-cashout-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-charge-back-summary-report' class='clickable-header top-level-header'>Getting the Charge Back Summary Report</h3>

<a name="commission-reports"></a>For more information, see {{support_ChargeBackSummaryReport}}.

Note that this report has multiple responses, depending on the ReportPart specified.

| Report Part | Response |
|:------------|:---------|
| 1 | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#chargebacksummaryreportlocationdata'>ChargeBackSummaryReportLocationData</a> |
| 2 | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#chargebacksummaryreportcategorydata'>ChargeBackSummaryReportCategoryData</a> |
| 3 | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#chargebacksummaryreportproductsummarydata'>ChargeBackSummaryReportProductSummaryData</a> |
| 4 | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#chargebacksummaryreportproductdetaildata'>ChargeBackSummaryReportProductDetailData</a> |
| 5 | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#chargebacksummaryreportemployeedata'>ChargeBackSummaryReportEmployeeData</a> |
| 6 | <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Finance-Reports/#chargebacksummaryreporthardwarecollectiondata'>ChargeBackSummaryReportHardwareCollectionData</a> |


<h4>Request</h4>

<pre>
GET /reports/chargebacksummaryreport?SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&InvoiceStartDate={InvoiceStartDate}&InvoiceStopDate={InvoiceStopDate}&ChargeBackStartDate={ChargeBackStartDate}&ChargeBackStopDate={ChargeBackStopDate}&JournalIDs={JournalIDs}&QueryPart={QueryPart}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Category, 2 for Product or 3 for Journal Number
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>InvoiceStartDate</code> (<strong>Required</strong>)  - Filter report by invoices created after this date
    </li>
    
    <li>
        <code>InvoiceStopDate</code> (<strong>Required</strong>)  - Filter report by invoices created before this date
    </li>
    
    <li>
        <code>ChargeBackStartDate</code> (<strong>Required</strong>)  - Filter report by charge backs created after this date
    </li>
    
    <li>
        <code>ChargeBackStopDate</code> (<strong>Required</strong>)  - Filter report by charge backs created before this date
    </li>
    
    <li>
        <code>JournalIDs</code> (<strong>Required</strong>)  - Filter report by Journal. Use -1 for All Journals.
    </li>
    
    <li>
        <code>QueryPart</code> (<strong>Required</strong>)  - See report description for a list of acceptable values
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
    <li class="active"><a href="#http-getting-the-charge-back-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-charge-back-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-charge-back-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-charge-back-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-charge-back-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-charge-back-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-charge-back-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-charge-back-summary-report">
<pre id="http-code-getting-the-charge-back-summary-report"><code class="language-http">GET /reports/chargebacksummaryreport?SearchMethod=1&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-01-01T08:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-01-01T08:00:00.000Z&JournalIDs=-1&QueryPart=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-charge-back-summary-report">
<pre id="curl-code-getting-the-charge-back-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?SearchMethod=1&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-01-01T08:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-01-01T08:00:00.000Z&JournalIDs=-1&QueryPart=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-charge-back-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-charge-back-summary-report"><code class="language-csharp">static IRestResponse GettingTheChargeBackSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?SearchMethod=1&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-01-01T08:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-01-01T08:00:00.000Z&JournalIDs=-1&QueryPart=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-charge-back-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-charge-back-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheChargeBackSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?SearchMethod=1&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-01-01T08:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-01-01T08:00:00.000Z&JournalIDs=-1&QueryPart=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-charge-back-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-charge-back-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?SearchMethod=1&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-01-01T08:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-01-01T08:00:00.000Z&JournalIDs=-1&QueryPart=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[chargebacksummaryreportlocationdata](#ChargeBackSummaryReportLocationData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-charge-back-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-charge-back-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-charge-back-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-charge-back-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-charge-back-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-charge-back-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-charge-back-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Quantity": 1,
        "StoreID": 6679,
        "StoreName": "100: My Network LLC - Anchorage",
        "TotalValue": -100
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-charge-back-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Quantity": 1,
            "StoreID": 6679,
            "StoreName": "100: My Network LLC - Anchorage",
            "TotalValue": -100
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-charge-back-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Quantity>1</Quantity>
    <StoreID>6679</StoreID>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalValue>-100</TotalValue>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-charge-back-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Quantity>1</Quantity>
    <StoreID>6679</StoreID>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalValue>-100</TotalValue>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-charge-back-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Quantity,StoreID,StoreName,TotalValue
1,6679,100: My Network LLC - Anchorage,-100</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-charge-back-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-outstanding-gift-cards-report' class='clickable-header top-level-header'>Getting the Outstanding Gift Cards Report</h3>

For more information see {{support_OutstandingGiftCardsReport}}.


<h4>Request</h4>

<pre>
GET /reports/outstandinggiftcardsreport?DateAsOf={DateAsOf}&CardType={CardType}&CustomerID={CustomerID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>DateAsOf</code> (<strong>Required</strong>)  - Date at which to begin report
    </li>
    
    <li>
        <code>CustomerID</code> (<strong>Required</strong>)  - Identifier for a customer in RQ. Use -1 for All Customers. For a complete list, see the CustomerID property using the request <a href='/api/RQ-Data-Connect-Customer-Reports/#getting-the-customer-list-report'>Getting the Customer List Report</a>
    </li>
    
    <li>
        <code>CardType</code> (<strong>Required</strong>)  - Acceptable values include -1 for All, 1 for Fixed Pricing or 2 for Ranged Pricing
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
    <li class="active"><a href="#http-getting-the-outstanding-gift-cards-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-outstanding-gift-cards-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-outstanding-gift-cards-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-outstanding-gift-cards-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-outstanding-gift-cards-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-outstanding-gift-cards-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-outstanding-gift-cards-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-outstanding-gift-cards-report">
<pre id="http-code-getting-the-outstanding-gift-cards-report"><code class="language-http">GET /reports/outstandinggiftcardsreport?DateAsOf=2016-11-23T21:56:38.000Z&CardType=-1&CustomerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-outstanding-gift-cards-report">
<pre id="curl-code-getting-the-outstanding-gift-cards-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/outstandinggiftcardsreport?DateAsOf=2016-11-23T21:56:38.000Z&CardType=-1&CustomerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-outstanding-gift-cards-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-outstanding-gift-cards-report"><code class="language-csharp">static IRestResponse GettingTheOutstandingGiftCardsReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/outstandinggiftcardsreport?DateAsOf=2016-11-23T21:56:38.000Z&CardType=-1&CustomerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-outstanding-gift-cards-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-outstanding-gift-cards-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheOutstandingGiftCardsReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/outstandinggiftcardsreport?DateAsOf=2016-11-23T21:56:38.000Z&CardType=-1&CustomerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-outstanding-gift-cards-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-outstanding-gift-cards-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/outstandinggiftcardsreport?DateAsOf=2016-11-23T21:56:38.000Z&CardType=-1&CustomerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[outstandinggiftcardsreportdata](#OutstandingGiftCardsReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-outstanding-gift-cards-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-outstanding-gift-cards-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-outstanding-gift-cards-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-outstanding-gift-cards-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-outstanding-gift-cards-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-outstanding-gift-cards-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-outstanding-gift-cards-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "SerialNumber": "7777085179051274",
        "DateSold": "2016-10-14T13:05:14.133",
        "CustomerName": "Bill Smith",
        "LastRedeemedGMT": "2016-10-14T19:30:37.063",
        "LastRedeemed": "2016-10-14T13:30:37.063",
        "RedeemedAt": "84 West",
        "RedeemedBy": "Bill Smith",
        "Balance": 77.52,
        "SaleInvoiceID": 634,
        "InvoiceIDByStore": "MIL44AH9",
        "ProductName": "iTunes 20",
        "ProductSKU": "ASBTHT000018",
        "InvoiceSerialMask": 6
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-outstanding-gift-cards-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "SerialNumber": "7777085179051274",
            "DateSold": "2016-10-14T13:05:14.133",
            "CustomerName": "Bill Smith",
            "LastRedeemedGMT": "2016-10-14T19:30:37.063",
            "LastRedeemed": "2016-10-14T13:30:37.063",
            "RedeemedAt": "84 West",
            "RedeemedBy": "Bill Smith",
            "Balance": 77.52,
            "SaleInvoiceID": 634,
            "InvoiceIDByStore": "MIL44AH9",
            "ProductName": "iTunes 20",
            "ProductSKU": "ASBTHT000018",
            "InvoiceSerialMask": 6
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-outstanding-gift-cards-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SerialNumber>7777085179051274</SerialNumber>
    <DateSold>2016-10-14T13:05:14.133</DateSold>
    <CustomerName>Bill Smith</CustomerName>
    <LastRedeemedGMT>2016-10-14T19:30:37.063</LastRedeemedGMT>
    <LastRedeemed>2016-10-14T13:30:37.063</LastRedeemed>
    <RedeemedAt>84 West</RedeemedAt>
    <RedeemedBy>Bill Smith</RedeemedBy>
    <Balance>77.52</Balance>
    <SaleInvoiceID>634</SaleInvoiceID>
    <InvoiceIDByStore>MIL44AH9</InvoiceIDByStore>
    <ProductName>iTunes 20</ProductName>
    <ProductSKU>ASBTHT000018</ProductSKU>
    <InvoiceSerialMask>6</InvoiceSerialMask>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-outstanding-gift-cards-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <SerialNumber>7777085179051274</SerialNumber>
    <DateSold>2016-10-14T13:05:14.133</DateSold>
    <CustomerName>Bill Smith</CustomerName>
    <LastRedeemedGMT>2016-10-14T19:30:37.063</LastRedeemedGMT>
    <LastRedeemed>2016-10-14T13:30:37.063</LastRedeemed>
    <RedeemedAt>84 West</RedeemedAt>
    <RedeemedBy>Bill Smith</RedeemedBy>
    <Balance>77.52</Balance>
    <SaleInvoiceID>634</SaleInvoiceID>
    <InvoiceIDByStore>MIL44AH9</InvoiceIDByStore>
    <ProductName>iTunes 20</ProductName>
    <ProductSKU>ASBTHT000018</ProductSKU>
    <InvoiceSerialMask>6</InvoiceSerialMask>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-outstanding-gift-cards-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>SerialNumber,DateSold,CustomerName,LastRedeemedGMT,LastRedeemed,RedeemedAt,RedeemedBy,Balance,SaleInvoiceID,InvoiceIDByStore,ProductName,ProductSKU,InvoiceSerialMask
7777085179051274,2016-10-14T13:05:14.133,Bill Smith,2016-10-14T19:30:37.063,2016-10-14T13:30:37.063,84 West,Bill Smith,77.52,634,MIL44AH9,iTunes 20,ASBTHT000018,6</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-outstanding-gift-cards-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-payment-integration-transaction-report' class='clickable-header top-level-header'>Getting the Payment Integration Transaction Report</h3>



<h4>Request</h4>

<pre>
GET /reports/paymentintegrationtransactionbydatereport?StartDate={StartDate}&StopDate={StopDate}&LocationEntityIDs={LocationEntityIDs}&Auth={Auth}&Response={Response}
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
        <code>LocationEntityIDs</code> (Optional)  - Comma seperated list of identifiers for <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Locations</a> in Entity Store. To determine the LocationEntityId for a store in RQ, see <a href='/api/RQ-Data-Connect/#getting-a-list-of-stores-in-rq'>Getting A List of Stores in RQ</a>
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
    <li class="active"><a href="#http-getting-the-payment-integration-transaction-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-payment-integration-transaction-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-payment-integration-transaction-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-payment-integration-transaction-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-payment-integration-transaction-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-payment-integration-transaction-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-payment-integration-transaction-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-payment-integration-transaction-report">
<pre id="http-code-getting-the-payment-integration-transaction-report"><code class="language-http">GET /reports/paymentintegrationtransactionbydatereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&LocationEntityIDs=33484,33496,33490,33492
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-payment-integration-transaction-report">
<pre id="curl-code-getting-the-payment-integration-transaction-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/paymentintegrationtransactionbydatereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&LocationEntityIDs=33484,33496,33490,33492"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-payment-integration-transaction-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-payment-integration-transaction-report"><code class="language-csharp">static IRestResponse GettingThePaymentIntegrationTransactionReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/paymentintegrationtransactionbydatereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&LocationEntityIDs=33484,33496,33490,33492");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-payment-integration-transaction-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-payment-integration-transaction-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePaymentIntegrationTransactionReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/paymentintegrationtransactionbydatereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&LocationEntityIDs=33484,33496,33490,33492");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-payment-integration-transaction-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-payment-integration-transaction-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/paymentintegrationtransactionbydatereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&LocationEntityIDs=33484,33496,33490,33492', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[paymentintegrationtransactionreportdata](#PaymentIntegrationTransactionReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-payment-integration-transaction-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-payment-integration-transaction-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-payment-integration-transaction-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-payment-integration-transaction-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-payment-integration-transaction-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-payment-integration-transaction-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-payment-integration-transaction-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "InvoiceID": 122337,
        "StoreInvoiceID": "84WEAIN5981",
        "CustomerName": "Alice Kim",
        "EmployeeName": "Sam Smith",
        "InvoiceTypeID": 1,
        "InvoiceType": "Invoice",
        "LocationEntityID": 14192,
        "AuthType": "Sale",
        "TransType": "Credit",
        "CardTypeID": 2,
        "CardType": "Visa",
        "Amount": 4,
        "EntryTypeID": 2,
        "EntryType": "Swiped",
        "MerchantNumber": "1111",
        "TerminalNumber": "90572837",
        "AuthDateUTC": "2015-01-28T16:31:58.877",
        "AuthorizationNumber": "ABS251",
        "CardholderName": "John Test",
        "CardBin": "545454",
        "LastFourDigits": "5454",
        "TransactionResult": "Approved",
        "ReversedVoided": 0,
        "ReversedVoidedReason": "Auto Void from Incomplete Invoice",
        "VoidedByEmployeeEntityID": "512",
        "VoidedDate": "2015-01-30T16:31:58.877"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-payment-integration-transaction-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "InvoiceID": 122337,
            "StoreInvoiceID": "84WEAIN5981",
            "CustomerName": "Alice Kim",
            "EmployeeName": "Sam Smith",
            "InvoiceTypeID": 1,
            "InvoiceType": "Invoice",
            "LocationEntityID": 14192,
            "AuthType": "Sale",
            "TransType": "Credit",
            "CardTypeID": 2,
            "CardType": "Visa",
            "Amount": 4,
            "EntryTypeID": 2,
            "EntryType": "Swiped",
            "MerchantNumber": "1111",
            "TerminalNumber": "90572837",
            "AuthDateUTC": "2015-01-28T16:31:58.877",
            "AuthorizationNumber": "ABS251",
            "CardholderName": "John Test",
            "CardBin": "545454",
            "LastFourDigits": "5454",
            "TransactionResult": "Approved",
            "ReversedVoided": 0,
            "ReversedVoidedReason": "Auto Void from Incomplete Invoice",
            "VoidedByEmployeeEntityID": "512",
            "VoidedDate": "2015-01-30T16:31:58.877"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-payment-integration-transaction-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceID>122337</InvoiceID>
    <StoreInvoiceID>84WEAIN5981</StoreInvoiceID>
    <CustomerName>Alice Kim</CustomerName>
    <EmployeeName>Sam Smith</EmployeeName>
    <InvoiceTypeID>1</InvoiceTypeID>
    <InvoiceType>Invoice</InvoiceType>
    <LocationEntityID>14192</LocationEntityID>
    <AuthType>Sale</AuthType>
    <TransType>Credit</TransType>
    <CardTypeID>2</CardTypeID>
    <CardType>Visa</CardType>
    <Amount>4</Amount>
    <EntryTypeID>2</EntryTypeID>
    <EntryType>Swiped</EntryType>
    <MerchantNumber>1111</MerchantNumber>
    <TerminalNumber>90572837</TerminalNumber>
    <AuthDateUTC>2015-01-28T16:31:58.877</AuthDateUTC>
    <AuthorizationNumber>ABS251</AuthorizationNumber>
    <CardholderName>John Test</CardholderName>
    <CardBin>545454</CardBin>
    <LastFourDigits>5454</LastFourDigits>
    <TransactionResult>Approved</TransactionResult>
    <ReversedVoided>0</ReversedVoided>
    <ReversedVoidedReason>Auto Void from Incomplete Invoice</ReversedVoidedReason>
    <VoidedByEmployeeEntityID>512</VoidedByEmployeeEntityID>
    <VoidedDate>2015-01-30T16:31:58.877</VoidedDate>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-payment-integration-transaction-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceID>122337</InvoiceID>
    <StoreInvoiceID>84WEAIN5981</StoreInvoiceID>
    <CustomerName>Alice Kim</CustomerName>
    <EmployeeName>Sam Smith</EmployeeName>
    <InvoiceTypeID>1</InvoiceTypeID>
    <InvoiceType>Invoice</InvoiceType>
    <LocationEntityID>14192</LocationEntityID>
    <AuthType>Sale</AuthType>
    <TransType>Credit</TransType>
    <CardTypeID>2</CardTypeID>
    <CardType>Visa</CardType>
    <Amount>4</Amount>
    <EntryTypeID>2</EntryTypeID>
    <EntryType>Swiped</EntryType>
    <MerchantNumber>1111</MerchantNumber>
    <TerminalNumber>90572837</TerminalNumber>
    <AuthDateUTC>2015-01-28T16:31:58.877</AuthDateUTC>
    <AuthorizationNumber>ABS251</AuthorizationNumber>
    <CardholderName>John Test</CardholderName>
    <CardBin>545454</CardBin>
    <LastFourDigits>5454</LastFourDigits>
    <TransactionResult>Approved</TransactionResult>
    <ReversedVoided>0</ReversedVoided>
    <ReversedVoidedReason>Auto Void from Incomplete Invoice</ReversedVoidedReason>
    <VoidedByEmployeeEntityID>512</VoidedByEmployeeEntityID>
    <VoidedDate>2015-01-30T16:31:58.877</VoidedDate>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-payment-integration-transaction-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>InvoiceID,StoreInvoiceID,CustomerName,EmployeeName,InvoiceTypeID,InvoiceType,LocationEntityID,AuthType,TransType,CardTypeID,CardType,Amount,EntryTypeID,EntryType,MerchantNumber,TerminalNumber,AuthDateUTC,AuthorizationNumber,CardholderName,CardBin,LastFourDigits,TransactionResult,ReversedVoided,ReversedVoidedReason,VoidedByEmployeeEntityID,VoidedDate
122337,84WEAIN5981,Alice Kim,Sam Smith,1,Invoice,14192,Sale,Credit,2,Visa,4,2,Swiped,1111,90572837,2015-01-28T16:31:58.877,ABS251,John Test,545454,5454,Approved,0,Auto Void from Incomplete Invoice,512,2015-01-30T16:31:58.877</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-payment-integration-transaction-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-tax-details-report' class='clickable-header top-level-header'>Getting the Tax Details Report</h3>

For more information, see {{support_TaxDetailsReport}}.


<h4>Request</h4>

<pre>
GET /reports/taxdetailsreport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}
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
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-tax-details-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-tax-details-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-tax-details-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-tax-details-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-tax-details-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-tax-details-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-tax-details-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-tax-details-report">
<pre id="http-code-getting-the-tax-details-report"><code class="language-http">GET /reports/taxdetailsreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-tax-details-report">
<pre id="curl-code-getting-the-tax-details-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/taxdetailsreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-tax-details-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-tax-details-report"><code class="language-csharp">static IRestResponse GettingTheTaxDetailsReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/taxdetailsreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-tax-details-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-tax-details-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheTaxDetailsReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/taxdetailsreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-tax-details-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-tax-details-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/taxdetailsreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[taxdetailsreportdata](#TaxDetailsReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-tax-details-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-tax-details-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-tax-details-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-tax-details-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-tax-details-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-tax-details-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-tax-details-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "DateCreated": "2015-12-31T12:35:07.05",
        "SaleInvoiceID": 166519,
        "InvoiceIDByStore": "MIL44AH9",
        "TenderedBy": "John Test",
        "TenderedAt": "Cornwall",
        "CustomerName": "Alice Smith",
        "Comments": "Return",
        "Invoiced": -910.94,
        "Sales": -910.94,
        "Cost": -405.67,
        "Profit": -505.27,
        "Adjusted": "No",
        "Taxable": "Yes",
        "Refund": "Yes",
        "VendorRebates": 0,
        "VendorRebatesTax": 0,
        "Coupons": 0,
        "CouponsTax": 0,
        "YourPriceTaxableSales": -910.94,
        "ListPriceTaxableSales": 0,
        "GreaterOfTaxableSales": -69.94,
        "FlatTaxableSales": 0,
        "NonTaxableSales": 0,
        "TaxCollected": -59.79,
        "TaxExemptReasonCode": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-tax-details-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "DateCreated": "2015-12-31T12:35:07.05",
            "SaleInvoiceID": 166519,
            "InvoiceIDByStore": "MIL44AH9",
            "TenderedBy": "John Test",
            "TenderedAt": "Cornwall",
            "CustomerName": "Alice Smith",
            "Comments": "Return",
            "Invoiced": -910.94,
            "Sales": -910.94,
            "Cost": -405.67,
            "Profit": -505.27,
            "Adjusted": "No",
            "Taxable": "Yes",
            "Refund": "Yes",
            "VendorRebates": 0,
            "VendorRebatesTax": 0,
            "Coupons": 0,
            "CouponsTax": 0,
            "YourPriceTaxableSales": -910.94,
            "ListPriceTaxableSales": 0,
            "GreaterOfTaxableSales": -69.94,
            "FlatTaxableSales": 0,
            "NonTaxableSales": 0,
            "TaxCollected": -59.79,
            "TaxExemptReasonCode": ""
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-tax-details-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2015-12-31T12:35:07.05</DateCreated>
    <SaleInvoiceID>166519</SaleInvoiceID>
    <InvoiceIDByStore>MIL44AH9</InvoiceIDByStore>
    <TenderedBy>John Test</TenderedBy>
    <TenderedAt>Cornwall</TenderedAt>
    <CustomerName>Alice Smith</CustomerName>
    <Comments>Return</Comments>
    <Invoiced>-910.94</Invoiced>
    <Sales>-910.94</Sales>
    <Cost>-405.67</Cost>
    <Profit>-505.27</Profit>
    <Adjusted>No</Adjusted>
    <Taxable>Yes</Taxable>
    <Refund>Yes</Refund>
    <VendorRebates>0</VendorRebates>
    <VendorRebatesTax>0</VendorRebatesTax>
    <Coupons>0</Coupons>
    <CouponsTax>0</CouponsTax>
    <YourPriceTaxableSales>-910.94</YourPriceTaxableSales>
    <ListPriceTaxableSales>0</ListPriceTaxableSales>
    <GreaterOfTaxableSales>-69.94</GreaterOfTaxableSales>
    <FlatTaxableSales>0</FlatTaxableSales>
    <NonTaxableSales>0</NonTaxableSales>
    <TaxCollected>-59.79</TaxCollected>
    <TaxExemptReasonCode></TaxExemptReasonCode>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-tax-details-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2015-12-31T12:35:07.05</DateCreated>
    <SaleInvoiceID>166519</SaleInvoiceID>
    <InvoiceIDByStore>MIL44AH9</InvoiceIDByStore>
    <TenderedBy>John Test</TenderedBy>
    <TenderedAt>Cornwall</TenderedAt>
    <CustomerName>Alice Smith</CustomerName>
    <Comments>Return</Comments>
    <Invoiced>-910.94</Invoiced>
    <Sales>-910.94</Sales>
    <Cost>-405.67</Cost>
    <Profit>-505.27</Profit>
    <Adjusted>No</Adjusted>
    <Taxable>Yes</Taxable>
    <Refund>Yes</Refund>
    <VendorRebates>0</VendorRebates>
    <VendorRebatesTax>0</VendorRebatesTax>
    <Coupons>0</Coupons>
    <CouponsTax>0</CouponsTax>
    <YourPriceTaxableSales>-910.94</YourPriceTaxableSales>
    <ListPriceTaxableSales>0</ListPriceTaxableSales>
    <GreaterOfTaxableSales>-69.94</GreaterOfTaxableSales>
    <FlatTaxableSales>0</FlatTaxableSales>
    <NonTaxableSales>0</NonTaxableSales>
    <TaxCollected>-59.79</TaxCollected>
    <TaxExemptReasonCode></TaxExemptReasonCode>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-tax-details-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>DateCreated,SaleInvoiceID,InvoiceIDByStore,TenderedBy,TenderedAt,CustomerName,Comments,Invoiced,Sales,Cost,Profit,Adjusted,Taxable,Refund,VendorRebates,VendorRebatesTax,Coupons,CouponsTax,YourPriceTaxableSales,ListPriceTaxableSales,GreaterOfTaxableSales,FlatTaxableSales,NonTaxableSales,TaxCollected,TaxExemptReasonCode
2015-12-31T12:35:07.05,166519,MIL44AH9,John Test,Cornwall,Alice Smith,Return,-910.94,-910.94,-405.67,-505.27,No,Yes,Yes,0,0,0,0,-910.94,0,-69.94,0,0,-59.79,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-tax-details-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-entry-types' class='clickable-header top-level-header'>Getting Entry Types</h3>



<h4>Request</h4>

<pre>
GET /lists/entrytypes?LanguageCode={LanguageCode}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-entry-types" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-entry-types" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-entry-types" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-entry-types" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-entry-types" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-entry-types" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-entry-types"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-entry-types">
<pre id="http-code-getting-entry-types"><code class="language-http">GET /lists/entrytypes?LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-entry-types">
<pre id="curl-code-getting-entry-types"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/entrytypes?LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-entry-types">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-entry-types"><code class="language-csharp">static IRestResponse GettingEntryTypes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/entrytypes?LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-entry-types">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-entry-types"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingEntryTypes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/entrytypes?LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-entry-types">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-entry-types"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/entrytypes?LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[entrytype](#EntryType)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-entry-types" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-entry-types" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-entry-types" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-entry-types" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-entry-types" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-entry-types" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-entry-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "EntryTypeID": 1,
        "EntryTypeDescription": "Swiped",
        "Message": "Swiped"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-entry-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "EntryTypeID": 1,
            "EntryTypeDescription": "Swiped",
            "Message": "Swiped"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-entry-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EntryTypeID>1</EntryTypeID>
    <EntryTypeDescription>Swiped</EntryTypeDescription>
    <Message>Swiped</Message>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-entry-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EntryTypeID>1</EntryTypeID>
    <EntryTypeDescription>Swiped</EntryTypeDescription>
    <Message>Swiped</Message>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-entry-types">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>EntryTypeID,EntryTypeDescription,Message
1,Swiped,Swiped</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-entry-types">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-card-types' class='clickable-header top-level-header'>Getting Card Types</h3>



<h4>Request</h4>

<pre>
GET /lists/cardtypes
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-card-types" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-card-types" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-card-types" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-card-types" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-card-types" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-card-types" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-card-types"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-card-types">
<pre id="http-code-getting-card-types"><code class="language-http">GET /lists/cardtypes
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-card-types">
<pre id="curl-code-getting-card-types"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/cardtypes"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-card-types">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-card-types"><code class="language-csharp">static IRestResponse GettingCardTypes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/cardtypes");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-card-types">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-card-types"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCardTypes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/cardtypes");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-card-types">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-card-types"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/cardtypes', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[cardtype](#CardType)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-card-types" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-card-types" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-card-types" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-card-types" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-card-types" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-card-types" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-card-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CardTypeID": 2,
        "FullName": "Mastercard",
        "Mnemonic": "MC",
        "AccountNumberLength": 16,
        "CvvLength": 3
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-card-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CardTypeID": 2,
            "FullName": "Mastercard",
            "Mnemonic": "MC",
            "AccountNumberLength": 16,
            "CvvLength": 3
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-card-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CardTypeID>2</CardTypeID>
    <FullName>Mastercard</FullName>
    <Mnemonic>MC</Mnemonic>
    <AccountNumberLength>16</AccountNumberLength>
    <CvvLength>3</CvvLength>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-card-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CardTypeID>2</CardTypeID>
    <FullName>Mastercard</FullName>
    <Mnemonic>MC</Mnemonic>
    <AccountNumberLength>16</AccountNumberLength>
    <CvvLength>3</CvvLength>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-card-types">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CardTypeID,FullName,Mnemonic,AccountNumberLength,CvvLength
2,Mastercard,MC,16,3</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-card-types">
            
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

    
