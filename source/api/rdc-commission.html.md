---
title:  RQ Data Connect Commission Reports
permalink: /api/RQ-Data-Connect-Commission-Reports/
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

## VendorRebateHistoryReportData

```json
{
	"ActivationAssociationNumber": "2",
	"ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
	"Adjusted": "No",
	"AssociationNumber": "3",
	"CarrierPrice": "0",
	"ChannelName": "English Channel",
	"ChargeBack": "No",
	"Collected": "null",
	"Comments": "",
	"Comments2": "null",
	"ContractNumber": "123456789",
	"CustomerID1": "130834",
	"CustomerName1": "Bob Jones",
	"DateCreated": "2016-01-04T14:33:15.737",
	"DateReconciled": "null",
	"DistrictName": "District B2",
	"EmployeeID": "0",
	"EmployeeID1": "218",
	"EmployeeName": "",
	"EmployeeName1": "iQmetrix User",
	"ExtraField": "1234567890",
	"Flagged": "No",
	"GlobalProductID": "812",
	"InvoiceComments": "",
	"InvoicedAt": "Regina Store",
	"InvoicedAt_StoreID": "1",
	"InvoicedBy": "Regina Store",
	"InvoicedBy_StoreID": "1",
	"InvoiceIDByStore": "HJKIIIN2",
	"InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
	"JournalNumber": "",
	"OriginalSaleDate": "null",
	"OriginalSaleInvoiceID": "null",
	"OriginalSaleInvoiceIDByStore": "null",
	"PartialCB": "0",
	"PortNumber": "",
	"Postal_code": "56789",
	"ProductIdentifier": "ACVZRB000001",
	"ProductName": "Verizon New Act_EquipmentRebate",
	"ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
	"Quantity": "1",
	"RatePlan": "Act $9.99 to $20.98",
	"RatePlan2": "",
	"Reconciled": "No",
	"RegionID": "9",
	"RegionName": "Region B",
	"RelatedCost": "404",
	"RelatedPrice": "69.99",
	"RelatedProduct": "Samsung Galaxy S4",
	"RelatedProductSerialNumbers": "ACVZCB0026",
	"RelatedProductSKU": "ACVZCB000244",
	"SaleInvoiceID": "126526",
	"SerialNumber": "123000000000000",
	"SocCode": "123000000000000",
	"SocCode2": "",
	"SpecialIdentifier": "1",
	"SpecialIdentifier1": "",
	"TermCode": "",
	"TotalPrice": "0",
	"UnitPrice": "0",
	"VendorAccountName": "Verizon 2",
	"VendorName": "Verizon",
	"VendorNumber": "",
	"VendorSKU": ""
}
```

| Name | Description |
|:-----|:------------|
| ActivationAssociationNumber (`INT`) | Every product that is part of the same activation from the Phone Activation Wizard will have the same ActivationAssociationNumber. | 
| ActivationRowID (`UNIQUEIDENTIFIER`) | Identifier in RQ | 
| Adjusted (`VARCHAR(3)`) | Adjusted - indicates if the rebate was adjusted | 
| AssociationNumber (`SMALLINT`) | When adding products with PAW all associated products from the sale have the same association number tied together, this value increments based on how many sales are made on that order | 
| CarrierPrice (`MONEY`) | Carrier Price - value or revenue that a carrier assigns this feature | 
| ChannelName (`VARCHAR(100)`) | Channel - channel for the rows location | 
| ChargeBack (`DateTime`) | Charge Back - Yes or No column for if it is a Charge Back or not | 
| Collected (`MONEY`) | Collected - amount received from the carrier | 
| Comments (`VARCHAR(500)`) | Comments - any comments that were added as part of the reconciliation process | 
| Comments2 (`VARCHAR(500)`) | Comments2 - any comments that were added as part of the reconciliation process | 
| ContractNumber (`VARCHAR(50)`) | Contract # - number of the contract, recorded at the time of sale | 
| CustomerID1 (`INT`) | Customer Identifier - customer identifier as entered on the customers profile | 
| CustomerName1 (`VARCHAR(101)`) | Customer - name of the customer as entered on their profile | 
| DateCreated (`DateTime`) | Sold On - date and time the invoice was tendered | 
| DateReconciled (`DateTime`) | Reconciled On - date and time the rebate was reconciled | 
| DistrictName (`VARCHAR(100)`) | District - district for the rows location | 
| EmployeeID (`INT`) | Internal identifier for an employee in RQ, see EmployeeName | 
| EmployeeID1 (`INT`) | Internal identifier for an employee in RQ, see EmployeeName1 | 
| EmployeeName (`VARCHAR(51)`) | Reconciled By - name of the employee logged in when the rebate was reconciled | 
| EmployeeName1 (`VARCHAR(51)`) | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | 
| ExtraField (`VARCHAR(30)`) | Extra Field - an optional field | 
| Flagged (`VARCHAR(3)`) | Flagged - flagged in the Vendor Rebate Reconciliation screen | 
| GlobalProductID (`INT`) | Identifier for a Product in RQ | 
| InvoiceComments (`VARCHAR(50)`) | Comments | 
| InvoicedAt (`VARCHAR(100)`) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | 
| InvoicedAt_StoreID (`INT`) | Internal identifier for a store in RQ | 
| InvoicedBy (`VARCHAR(100)`) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | 
| InvoicedBy_StoreID (`INT`) | Internal identifier for a store in RQ | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice # - invoice number assigned by RQ | 
| InvoiceRowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| JournalNumber (`VARCHAR(20)`) | Journal # - vendor account journal on which the rebate was reconciled | 
| OriginalSaleDate (`DateTime`) | Original Sales Date - date of the original sale | 
| OriginalSaleInvoiceID (`INT`) | Internal identifier in RQ | 
| OriginalSaleInvoiceIDByStore (`VARCHAR(14)`) | Original Invoice - invoice number of the original transaction | 
| PartialCB (`MONEY`) | Partial CB - amount the carrier is charging back | 
| PortNumber (`VARCHAR(30)`) | Port Number - if entered in transaction | 
| Postal_code (`VARCHAR(15)`) | Zip/Postal Code - zip code (USA) or postal code (Canada) | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`VARCHAR(100)`) | Product Name - description of the product as it appears in the inventory | 
| ProductRowID (`UNIQUEIDENTIFIER`) | Internal identifier in RQ | 
| Quantity (`INT`) | Qty - total quantity of this product SKU on the invoice | 
| RatePlan (`VARCHAR(100)`) | Rate Plan - name of the rate plan | 
| RatePlan2 (`VARCHAR(100)`) | Rate Plan 2 - second rate plan if necessary | 
| Reconciled (`VARCHAR(3)`) | Reconciled - has been marked as reconciled in the Vendor Rebate Reconciliation screen | 
| RegionID (`INT`) | Identifier for a region in RQ | 
| RegionName (`VARCHAR(100)`) | Region - region for the rows location | 
| RelatedCost (`MONEY`) | Related Cost - purchase cost for the product associated with this rebate | 
| RelatedPrice (`MONEY`) | Related Price - price the customer paid for the product related to this rebate | 
| RelatedProduct (`VARCHAR(100)`) | Related Product - product associated with this rebate | 
| RelatedProductSerialNumbers (`VARCHAR(1000)`) | Related SN - serial number associated with this rebate, if any | 
| RelatedProductSKU (`VARCHAR(12)`) | Related SKU - product SKU of the product associated with this rebate | 
| SaleInvoiceID (`INT`) | Internal identifier in RQ | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - tracking number associated with this entry | 
| SocCode (`VARCHAR(50)`) | SOC Code - SOC Code if one was used | 
| SocCode2 (`VARCHAR(50)`) | SOC Code2 - Second SOC Code if used | 
| SpecialIdentifier (`VARCHAR(25)`) | Sales Person ID - ID number assigned to this sales person and recorded on the Admin tab of their Employee Profile | 
| SpecialIdentifier1 (`VARCHAR (25)`) | Internal identifier in RQ | 
| TermCode (`VARCHAR(200)`) | Term Code - [may not show in your database] indicates new activation, upgrade, etc. | 
| TotalPrice (`MONEY`) | Total Rebate - total value of the rebate on this invoice calculated as Qty X Unit Rebate | 
| UnitPrice (`MONEY`) | Unit Rebate - dollar value of this rebate | 
| VendorAccountName (`VARCHAR(100)`) | Vendor Account Name - vendor account for this rebate | 
| VendorName (`NVARCHAR(MAX)`) | Vendor name in RQ | 
| VendorNumber (`NVARCHAR(3)`) | Vendor # - vendor account number entered for Vendor # By Location [if used] | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU | 


## PartialChargeBackHistoryReportData

```json
{
	"CarrierPrice": "0",
	"ChargeBack": "-1",
	"ChargeBackID": "25",
	"ChargeBackIDByStore": "REDSTCB10",
	"DateAdjusted": "2016-05-10T00:00:00",
	"DateCreated": "2016-05-10T08:18:57.377",
	"EmployeeName": "iQmetrix User",
	"InvoiceDate": "2016-03-16T00:00:00",
	"InvoiceIDByStore": "REDSTIN916",
	"ProductIdentifier": "ASBORB000098",
	"ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
	"Quantity": "1",
	"SaleInvoiceID": "127354",
	"SerialNumber": "123",
	"TotalPrice": "699",
	"UnitPrice": "700",
	"VendorName": "",
	"VendorSKU": ""
}
```

| Name | Description |
|:-----|:------------|
| CarrierPrice (`DECIMAL`) | Carrier Price - value or revenue that a carrier assigns this feature | 
| ChargeBack (`MONEY`) | Charge Back - amount the carrier is charging back | 
| ChargeBackID (`INT`) | RQ identifier for a Charge Back | 
| ChargeBackIDByStore (`VARCHAR (30)`) | Charge Back # - charge back invoice number assigned by RQ | 
| DateAdjusted (`DateTime`) | Applied Date - date the charge back was applied | 
| DateCreated (`DateTime`) | Charge Back Date - date the charge back took effect | 
| EmployeeName (`VARCHAR (51)`) | Charged Back By - name of the employee logged into RQ when the Charge Back was done | 
| InvoiceDate (`DateTime`) | Invoice Date - date of the original sale invoice | 
| InvoiceIDByStore (`VARCHAR (14)`) | Invoice # - invoice number assigned by RQ | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU - the RQ generated SKU | 
| ProductName (`NVARCHAR (MAX)`) | Product Name - description of the product as it appears in the inventory | 
| Quantity (`INT`) | Qty - total count of particular charged back SKUs on the charge back invoice | 
| SaleInvoiceID (`INT`) | Identifier for an invoice in RQ | 
| SerialNumber (`VARCHAR (100)`) | Tracking # - the tracking number associated with this entry, most frequently the customers mobile number | 
| TotalPrice (`MONEY`) | Total Rebate - original rebate less the return amount | 
| UnitPrice (`MONEY`) | Unit Rebate - reconciled amount, either the actual original amount or the adjusted from reconciliation amount | 
| VendorName (`NVARCHAR(MAX)`) | Name for a vendor in RQ | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU | 






## Requests



<h3 id='getting-the-partial-charge-back-history-report' class='clickable-header top-level-header'>Getting the Partial Charge Back History Report</h3>

For more information, see {{support_PartialChargeBackHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/partialchargebackhistoryreport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
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
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-partial-charge-back-history-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-partial-charge-back-history-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-partial-charge-back-history-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-partial-charge-back-history-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-partial-charge-back-history-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-partial-charge-back-history-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-partial-charge-back-history-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-partial-charge-back-history-report">
<pre id="http-code-getting-the-partial-charge-back-history-report"><code class="language-http">GET /reports/partialchargebackhistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-partial-charge-back-history-report">
<pre id="curl-code-getting-the-partial-charge-back-history-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-partial-charge-back-history-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-partial-charge-back-history-report"><code class="language-csharp">static IRestResponse GettingThePartialChargeBackHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-partial-charge-back-history-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-partial-charge-back-history-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePartialChargeBackHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-partial-charge-back-history-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-partial-charge-back-history-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[partialchargebackhistoryreportdata](#PartialChargeBackHistoryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-partial-charge-back-history-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-partial-charge-back-history-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-partial-charge-back-history-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-partial-charge-back-history-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-partial-charge-back-history-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-partial-charge-back-history-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-partial-charge-back-history-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CarrierPrice": 0,
        "ChargeBack": -1,
        "ChargeBackID": 25,
        "ChargeBackIDByStore": "REDSTCB10",
        "DateAdjusted": "2016-05-10T00:00:00",
        "DateCreated": "2016-05-10T08:18:57.377",
        "EmployeeName": "iQmetrix User",
        "InvoiceDate": "2016-03-16T00:00:00",
        "InvoiceIDByStore": "REDSTIN916",
        "ProductIdentifier": "ASBORB000098",
        "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
        "Quantity": 1,
        "SaleInvoiceID": 127354,
        "SerialNumber": "123",
        "TotalPrice": 699,
        "UnitPrice": 700,
        "VendorName": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-partial-charge-back-history-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CarrierPrice": 0,
            "ChargeBack": -1,
            "ChargeBackID": 25,
            "ChargeBackIDByStore": "REDSTCB10",
            "DateAdjusted": "2016-05-10T00:00:00",
            "DateCreated": "2016-05-10T08:18:57.377",
            "EmployeeName": "iQmetrix User",
            "InvoiceDate": "2016-03-16T00:00:00",
            "InvoiceIDByStore": "REDSTIN916",
            "ProductIdentifier": "ASBORB000098",
            "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
            "Quantity": 1,
            "SaleInvoiceID": 127354,
            "SerialNumber": "123",
            "TotalPrice": 699,
            "UnitPrice": 700,
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-partial-charge-back-history-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CarrierPrice>0</CarrierPrice>
    <ChargeBack>-1</ChargeBack>
    <ChargeBackID>25</ChargeBackID>
    <ChargeBackIDByStore>REDSTCB10</ChargeBackIDByStore>
    <DateAdjusted>2016-05-10T00:00:00</DateAdjusted>
    <DateCreated>2016-05-10T08:18:57.377</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <InvoiceDate>2016-03-16T00:00:00</InvoiceDate>
    <InvoiceIDByStore>REDSTIN916</InvoiceIDByStore>
    <ProductIdentifier>ASBORB000098</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <Quantity>1</Quantity>
    <SaleInvoiceID>127354</SaleInvoiceID>
    <SerialNumber>123</SerialNumber>
    <TotalPrice>699</TotalPrice>
    <UnitPrice>700</UnitPrice>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-partial-charge-back-history-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CarrierPrice>0</CarrierPrice>
    <ChargeBack>-1</ChargeBack>
    <ChargeBackID>25</ChargeBackID>
    <ChargeBackIDByStore>REDSTCB10</ChargeBackIDByStore>
    <DateAdjusted>2016-05-10T00:00:00</DateAdjusted>
    <DateCreated>2016-05-10T08:18:57.377</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <InvoiceDate>2016-03-16T00:00:00</InvoiceDate>
    <InvoiceIDByStore>REDSTIN916</InvoiceIDByStore>
    <ProductIdentifier>ASBORB000098</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <Quantity>1</Quantity>
    <SaleInvoiceID>127354</SaleInvoiceID>
    <SerialNumber>123</SerialNumber>
    <TotalPrice>699</TotalPrice>
    <UnitPrice>700</UnitPrice>
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
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-partial-charge-back-history-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CarrierPrice,ChargeBack,ChargeBackID,ChargeBackIDByStore,DateAdjusted,DateCreated,EmployeeName,InvoiceDate,InvoiceIDByStore,ProductIdentifier,ProductName,Quantity,SaleInvoiceID,SerialNumber,TotalPrice,UnitPrice,VendorName,VendorSKU
0,-1,25,REDSTCB10,2016-05-10T00:00:00,2016-05-10T08:18:57.377,iQmetrix User,2016-03-16T00:00:00,REDSTIN916,ASBORB000098,Apple iPhone 6 Plus 16GB Space Gray - AT&T,1,127354,123,699,700,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-partial-charge-back-history-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-vendor-rebate-history-report' class='clickable-header top-level-header'>Getting the Vendor Rebate History Report</h3>

For more information, see {{support_VendorRebateHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/vendorrebatehistoryreport?StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ApplyShowOnInvoice={ApplyShowOnInvoice}&ReconciledStatus={ReconciledStatus}&EmployeeIDOfReconcilers={EmployeeIDOfReconcilers}&VendorAccountID={VendorAccountID}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&SerialNumber={SerialNumber}&JournalNumber={JournalNumber}&Auth={Auth}&Response={Response}
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
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Vendor Account, 2 for Journal Number, 3 for Reconciled By, 4 for Category, 5 for Tracking Number and 6 for Product SKU
    </li>
    
    <li>
        <code>ApplyShowOnInvoice</code> (<strong>Required</strong>)  - This value should always be 0
    </li>
    
    <li>
        <code>ReconciledStatus</code> (<strong>Required</strong>)  - Acceptable values include 0 for Unreconciled, 1 for Reconciled and 2 for Any
    </li>
    
    <li>
        <code>EmployeeIDOfReconcilers</code> (<strong>Required</strong>)  - Identifier of an employee who reconciled the rebate. Use -1 for all employees
    </li>
    
    <li>
        <code>VendorAccountID</code> (<strong>Required</strong>)  - Identifier of a vendor account. Use -1 for all vendor accounts
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
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>JournalNumber</code> (Optional)  - Journal number
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
    <li class="active"><a href="#http-getting-the-vendor-rebate-history-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-vendor-rebate-history-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-vendor-rebate-history-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-vendor-rebate-history-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-vendor-rebate-history-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-vendor-rebate-history-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-vendor-rebate-history-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-vendor-rebate-history-report">
<pre id="http-code-getting-the-vendor-rebate-history-report"><code class="language-http">GET /reports/vendorrebatehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-vendor-rebate-history-report">
<pre id="curl-code-getting-the-vendor-rebate-history-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-vendor-rebate-history-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-vendor-rebate-history-report"><code class="language-csharp">static IRestResponse GettingTheVendorRebateHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-vendor-rebate-history-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-vendor-rebate-history-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheVendorRebateHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-vendor-rebate-history-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-vendor-rebate-history-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[vendorrebatehistoryreportdata](#VendorRebateHistoryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-vendor-rebate-history-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-vendor-rebate-history-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-vendor-rebate-history-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-vendor-rebate-history-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-vendor-rebate-history-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-vendor-rebate-history-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ActivationAssociationNumber": 2,
        "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
        "Adjusted": "No",
        "AssociationNumber": 3,
        "CarrierPrice": 0,
        "ChannelName": "English Channel",
        "ChargeBack": "No",
        "Collected": null,
        "Comments": "",
        "Comments2": "null",
        "ContractNumber": "123456789",
        "CustomerID1": 130834,
        "CustomerName1": "Bob Jones",
        "DateCreated": "2016-01-04T14:33:15.737",
        "DateReconciled": "null",
        "DistrictName": "District B2",
        "EmployeeID": 0,
        "EmployeeID1": 218,
        "EmployeeName": "",
        "EmployeeName1": "iQmetrix User",
        "ExtraField": "1234567890",
        "Flagged": "No",
        "GlobalProductID": 812,
        "InvoiceComments": "",
        "InvoicedAt": "Regina Store",
        "InvoicedAt_StoreID": 1,
        "InvoicedBy": "Regina Store",
        "InvoicedBy_StoreID": 1,
        "InvoiceIDByStore": "HJKIIIN2",
        "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
        "JournalNumber": "",
        "OriginalSaleDate": "null",
        "OriginalSaleInvoiceID": null,
        "OriginalSaleInvoiceIDByStore": "null",
        "PartialCB": 0,
        "PortNumber": "",
        "Postal_code": "56789",
        "ProductIdentifier": "ACVZRB000001",
        "ProductName": "Verizon New Act_EquipmentRebate",
        "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
        "Quantity": 1,
        "RatePlan": "Act $9.99 to $20.98",
        "RatePlan2": "",
        "Reconciled": "No",
        "RegionID": 9,
        "RegionName": "Region B",
        "RelatedCost": 404,
        "RelatedPrice": 69.99,
        "RelatedProduct": "Samsung Galaxy S4",
        "RelatedProductSerialNumbers": "ACVZCB0026",
        "RelatedProductSKU": "ACVZCB000244",
        "SaleInvoiceID": 126526,
        "SerialNumber": "123000000000000",
        "SocCode": "123000000000000",
        "SocCode2": "",
        "SpecialIdentifier": "1",
        "SpecialIdentifier1": "",
        "TermCode": "",
        "TotalPrice": 0,
        "UnitPrice": 0,
        "VendorAccountName": "Verizon 2",
        "VendorName": "Verizon",
        "VendorNumber": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-vendor-rebate-history-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ActivationAssociationNumber": 2,
            "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
            "Adjusted": "No",
            "AssociationNumber": 3,
            "CarrierPrice": 0,
            "ChannelName": "English Channel",
            "ChargeBack": "No",
            "Collected": null,
            "Comments": "",
            "Comments2": "null",
            "ContractNumber": "123456789",
            "CustomerID1": 130834,
            "CustomerName1": "Bob Jones",
            "DateCreated": "2016-01-04T14:33:15.737",
            "DateReconciled": "null",
            "DistrictName": "District B2",
            "EmployeeID": 0,
            "EmployeeID1": 218,
            "EmployeeName": "",
            "EmployeeName1": "iQmetrix User",
            "ExtraField": "1234567890",
            "Flagged": "No",
            "GlobalProductID": 812,
            "InvoiceComments": "",
            "InvoicedAt": "Regina Store",
            "InvoicedAt_StoreID": 1,
            "InvoicedBy": "Regina Store",
            "InvoicedBy_StoreID": 1,
            "InvoiceIDByStore": "HJKIIIN2",
            "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
            "JournalNumber": "",
            "OriginalSaleDate": "null",
            "OriginalSaleInvoiceID": null,
            "OriginalSaleInvoiceIDByStore": "null",
            "PartialCB": 0,
            "PortNumber": "",
            "Postal_code": "56789",
            "ProductIdentifier": "ACVZRB000001",
            "ProductName": "Verizon New Act_EquipmentRebate",
            "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
            "Quantity": 1,
            "RatePlan": "Act $9.99 to $20.98",
            "RatePlan2": "",
            "Reconciled": "No",
            "RegionID": 9,
            "RegionName": "Region B",
            "RelatedCost": 404,
            "RelatedPrice": 69.99,
            "RelatedProduct": "Samsung Galaxy S4",
            "RelatedProductSerialNumbers": "ACVZCB0026",
            "RelatedProductSKU": "ACVZCB000244",
            "SaleInvoiceID": 126526,
            "SerialNumber": "123000000000000",
            "SocCode": "123000000000000",
            "SocCode2": "",
            "SpecialIdentifier": "1",
            "SpecialIdentifier1": "",
            "TermCode": "",
            "TotalPrice": 0,
            "UnitPrice": 0,
            "VendorAccountName": "Verizon 2",
            "VendorName": "Verizon",
            "VendorNumber": "",
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-vendor-rebate-history-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-vendor-rebate-history-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
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
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-vendor-rebate-history-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ActivationAssociationNumber,ActivationRowID,Adjusted,AssociationNumber,CarrierPrice,ChannelName,ChargeBack,Collected,Comments,Comments2,ContractNumber,CustomerID1,CustomerName1,DateCreated,DateReconciled,DistrictName,EmployeeID,EmployeeID1,EmployeeName,EmployeeName1,ExtraField,Flagged,GlobalProductID,InvoiceComments,InvoicedAt,InvoicedAt_StoreID,InvoicedBy,InvoicedBy_StoreID,InvoiceIDByStore,InvoiceRowID,JournalNumber,OriginalSaleDate,OriginalSaleInvoiceID,OriginalSaleInvoiceIDByStore,PartialCB,PortNumber,Postal_code,ProductIdentifier,ProductName,ProductRowID,Quantity,RatePlan,RatePlan2,Reconciled,RegionID,RegionName,RelatedCost,RelatedPrice,RelatedProduct,RelatedProductSerialNumbers,RelatedProductSKU,SaleInvoiceID,SerialNumber,SocCode,SocCode2,SpecialIdentifier,SpecialIdentifier1,TermCode,TotalPrice,UnitPrice,VendorAccountName,VendorName,VendorNumber,VendorSKU
2,0d4652a7-a673-437a-817e-4641961ba3e6,No,3,0,English Channel,No,null,,null,123456789,130834,Bob Jones,2016-01-04T14:33:15.737,null,District B2,0,218,,iQmetrix User,1234567890,No,812,,Regina Store,1,Regina Store,1,HJKIIIN2,db8f28cf-5017-47f4-9ccf-b90cff32185d,,null,null,null,0,,56789,ACVZRB000001,Verizon New Act_EquipmentRebate,27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c,1,Act $9.99 to $20.98,,No,9,Region B,404,69.99,Samsung Galaxy S4,ACVZCB0026,ACVZCB000244,126526,123000000000000,123000000000000,,1,,,0,0,Verizon 2,Verizon,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-vendor-rebate-history-report-by-category-and-store' class='clickable-header top-level-header'>Getting the Vendor Rebate History Report By Category and Store</h3>

For more information, see {{support_VendorRebateHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/vendorrebatehistoryreport_bycategoryandstore?StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ApplyShowOnInvoice={ApplyShowOnInvoice}&ReconciledStatus={ReconciledStatus}&EmployeeIDOfReconcilers={EmployeeIDOfReconcilers}&VendorAccountID={VendorAccountID}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&SerialNumber={SerialNumber}&JournalNumber={JournalNumber}&Auth={Auth}&Response={Response}
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
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Vendor Account, 2 for Journal Number, 3 for Reconciled By, 4 for Category, 5 for Tracking Number and 6 for Product SKU
    </li>
    
    <li>
        <code>ApplyShowOnInvoice</code> (<strong>Required</strong>)  - This value should always be 0
    </li>
    
    <li>
        <code>ReconciledStatus</code> (<strong>Required</strong>)  - Acceptable values include 0 for Unreconciled, 1 for Reconciled and 2 for Any
    </li>
    
    <li>
        <code>EmployeeIDOfReconcilers</code> (<strong>Required</strong>)  - Identifier of an employee who reconciled the rebate. Use -1 for all employees
    </li>
    
    <li>
        <code>VendorAccountID</code> (<strong>Required</strong>)  - Identifier of a vendor account. Use -1 for all vendor accounts
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
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>JournalNumber</code> (Optional)  - Journal number
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
    <li class="active"><a href="#http-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-vendor-rebate-history-report-by-category-and-store" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-vendor-rebate-history-report-by-category-and-store"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-vendor-rebate-history-report-by-category-and-store">
<pre id="http-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-http">GET /reports/vendorrebatehistoryreport_bycategoryandstore?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-vendor-rebate-history-report-by-category-and-store">
<pre id="curl-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-vendor-rebate-history-report-by-category-and-store">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-csharp">static IRestResponse GettingTheVendorRebateHistoryReportByCategoryAndStore()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-vendor-rebate-history-report-by-category-and-store">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheVendorRebateHistoryReportByCategoryAndStore() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-vendor-rebate-history-report-by-category-and-store">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[vendorrebatehistoryreportdata](#VendorRebateHistoryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-vendor-rebate-history-report-by-category-and-store">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ActivationAssociationNumber": 2,
        "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
        "Adjusted": "No",
        "AssociationNumber": 3,
        "CarrierPrice": 0,
        "ChannelName": "English Channel",
        "ChargeBack": "No",
        "Collected": null,
        "Comments": "",
        "Comments2": "null",
        "ContractNumber": "123456789",
        "CustomerID1": 130834,
        "CustomerName1": "Bob Jones",
        "DateCreated": "2016-01-04T14:33:15.737",
        "DateReconciled": "null",
        "DistrictName": "District B2",
        "EmployeeID": 0,
        "EmployeeID1": 218,
        "EmployeeName": "",
        "EmployeeName1": "iQmetrix User",
        "ExtraField": "1234567890",
        "Flagged": "No",
        "GlobalProductID": 812,
        "InvoiceComments": "",
        "InvoicedAt": "Regina Store",
        "InvoicedAt_StoreID": 1,
        "InvoicedBy": "Regina Store",
        "InvoicedBy_StoreID": 1,
        "InvoiceIDByStore": "HJKIIIN2",
        "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
        "JournalNumber": "",
        "OriginalSaleDate": "null",
        "OriginalSaleInvoiceID": null,
        "OriginalSaleInvoiceIDByStore": "null",
        "PartialCB": 0,
        "PortNumber": "",
        "Postal_code": "56789",
        "ProductIdentifier": "ACVZRB000001",
        "ProductName": "Verizon New Act_EquipmentRebate",
        "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
        "Quantity": 1,
        "RatePlan": "Act $9.99 to $20.98",
        "RatePlan2": "",
        "Reconciled": "No",
        "RegionID": 9,
        "RegionName": "Region B",
        "RelatedCost": 404,
        "RelatedPrice": 69.99,
        "RelatedProduct": "Samsung Galaxy S4",
        "RelatedProductSerialNumbers": "ACVZCB0026",
        "RelatedProductSKU": "ACVZCB000244",
        "SaleInvoiceID": 126526,
        "SerialNumber": "123000000000000",
        "SocCode": "123000000000000",
        "SocCode2": "",
        "SpecialIdentifier": "1",
        "SpecialIdentifier1": "",
        "TermCode": "",
        "TotalPrice": 0,
        "UnitPrice": 0,
        "VendorAccountName": "Verizon 2",
        "VendorName": "Verizon",
        "VendorNumber": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-vendor-rebate-history-report-by-category-and-store">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ActivationAssociationNumber": 2,
            "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
            "Adjusted": "No",
            "AssociationNumber": 3,
            "CarrierPrice": 0,
            "ChannelName": "English Channel",
            "ChargeBack": "No",
            "Collected": null,
            "Comments": "",
            "Comments2": "null",
            "ContractNumber": "123456789",
            "CustomerID1": 130834,
            "CustomerName1": "Bob Jones",
            "DateCreated": "2016-01-04T14:33:15.737",
            "DateReconciled": "null",
            "DistrictName": "District B2",
            "EmployeeID": 0,
            "EmployeeID1": 218,
            "EmployeeName": "",
            "EmployeeName1": "iQmetrix User",
            "ExtraField": "1234567890",
            "Flagged": "No",
            "GlobalProductID": 812,
            "InvoiceComments": "",
            "InvoicedAt": "Regina Store",
            "InvoicedAt_StoreID": 1,
            "InvoicedBy": "Regina Store",
            "InvoicedBy_StoreID": 1,
            "InvoiceIDByStore": "HJKIIIN2",
            "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
            "JournalNumber": "",
            "OriginalSaleDate": "null",
            "OriginalSaleInvoiceID": null,
            "OriginalSaleInvoiceIDByStore": "null",
            "PartialCB": 0,
            "PortNumber": "",
            "Postal_code": "56789",
            "ProductIdentifier": "ACVZRB000001",
            "ProductName": "Verizon New Act_EquipmentRebate",
            "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
            "Quantity": 1,
            "RatePlan": "Act $9.99 to $20.98",
            "RatePlan2": "",
            "Reconciled": "No",
            "RegionID": 9,
            "RegionName": "Region B",
            "RelatedCost": 404,
            "RelatedPrice": 69.99,
            "RelatedProduct": "Samsung Galaxy S4",
            "RelatedProductSerialNumbers": "ACVZCB0026",
            "RelatedProductSKU": "ACVZCB000244",
            "SaleInvoiceID": 126526,
            "SerialNumber": "123000000000000",
            "SocCode": "123000000000000",
            "SocCode2": "",
            "SpecialIdentifier": "1",
            "SpecialIdentifier1": "",
            "TermCode": "",
            "TotalPrice": 0,
            "UnitPrice": 0,
            "VendorAccountName": "Verizon 2",
            "VendorName": "Verizon",
            "VendorNumber": "",
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-vendor-rebate-history-report-by-category-and-store">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-vendor-rebate-history-report-by-category-and-store">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
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
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-vendor-rebate-history-report-by-category-and-store">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ActivationAssociationNumber,ActivationRowID,Adjusted,AssociationNumber,CarrierPrice,ChannelName,ChargeBack,Collected,Comments,Comments2,ContractNumber,CustomerID1,CustomerName1,DateCreated,DateReconciled,DistrictName,EmployeeID,EmployeeID1,EmployeeName,EmployeeName1,ExtraField,Flagged,GlobalProductID,InvoiceComments,InvoicedAt,InvoicedAt_StoreID,InvoicedBy,InvoicedBy_StoreID,InvoiceIDByStore,InvoiceRowID,JournalNumber,OriginalSaleDate,OriginalSaleInvoiceID,OriginalSaleInvoiceIDByStore,PartialCB,PortNumber,Postal_code,ProductIdentifier,ProductName,ProductRowID,Quantity,RatePlan,RatePlan2,Reconciled,RegionID,RegionName,RelatedCost,RelatedPrice,RelatedProduct,RelatedProductSerialNumbers,RelatedProductSKU,SaleInvoiceID,SerialNumber,SocCode,SocCode2,SpecialIdentifier,SpecialIdentifier1,TermCode,TotalPrice,UnitPrice,VendorAccountName,VendorName,VendorNumber,VendorSKU
2,0d4652a7-a673-437a-817e-4641961ba3e6,No,3,0,English Channel,No,null,,null,123456789,130834,Bob Jones,2016-01-04T14:33:15.737,null,District B2,0,218,,iQmetrix User,1234567890,No,812,,Regina Store,1,Regina Store,1,HJKIIIN2,db8f28cf-5017-47f4-9ccf-b90cff32185d,,null,null,null,0,,56789,ACVZRB000001,Verizon New Act_EquipmentRebate,27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c,1,Act $9.99 to $20.98,,No,9,Region B,404,69.99,Samsung Galaxy S4,ACVZCB0026,ACVZCB000244,126526,123000000000000,123000000000000,,1,,,0,0,Verizon 2,Verizon,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report-by-category-and-store">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-vendor-rebate-history-report-by-category-and-employees' class='clickable-header top-level-header'>Getting the Vendor Rebate History Report By Category and Employees</h3>

For more information, see {{support_VendorRebateHistoryReport}}.

<h4>Request</h4>

<pre>
GET /reports/vendorrebatehistoryreport_bycategoryandemployees?StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ApplyShowOnInvoice={ApplyShowOnInvoice}&ReconciledStatus={ReconciledStatus}&EmployeeIDOfReconcilers={EmployeeIDOfReconcilers}&VendorAccountID={VendorAccountID}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&SerialNumber={SerialNumber}&JournalNumber={JournalNumber}&Auth={Auth}&Response={Response}
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
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Vendor Account, 2 for Journal Number, 3 for Reconciled By, 4 for Category, 5 for Tracking Number and 6 for Product SKU
    </li>
    
    <li>
        <code>ApplyShowOnInvoice</code> (<strong>Required</strong>)  - This value should always be 0
    </li>
    
    <li>
        <code>ReconciledStatus</code> (<strong>Required</strong>)  - Acceptable values include 0 for Unreconciled, 1 for Reconciled and 2 for Any
    </li>
    
    <li>
        <code>EmployeeIDOfReconcilers</code> (<strong>Required</strong>)  - Identifier of an employee who reconciled the rebate. Use -1 for all employees
    </li>
    
    <li>
        <code>VendorAccountID</code> (<strong>Required</strong>)  - Identifier of a vendor account. Use -1 for all vendor accounts
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
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>JournalNumber</code> (Optional)  - Journal number
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
    <li class="active"><a href="#http-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-vendor-rebate-history-report-by-category-and-employees" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-vendor-rebate-history-report-by-category-and-employees">
<pre id="http-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-http">GET /reports/vendorrebatehistoryreport_bycategoryandemployees?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-vendor-rebate-history-report-by-category-and-employees">
<pre id="curl-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-vendor-rebate-history-report-by-category-and-employees">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-csharp">static IRestResponse GettingTheVendorRebateHistoryReportByCategoryAndEmployees()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-vendor-rebate-history-report-by-category-and-employees">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheVendorRebateHistoryReportByCategoryAndEmployees() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-vendor-rebate-history-report-by-category-and-employees">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[vendorrebatehistoryreportdata](#VendorRebateHistoryReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-vendor-rebate-history-report-by-category-and-employees">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ActivationAssociationNumber": 2,
        "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
        "Adjusted": "No",
        "AssociationNumber": 3,
        "CarrierPrice": 0,
        "ChannelName": "English Channel",
        "ChargeBack": "No",
        "Collected": null,
        "Comments": "",
        "Comments2": "null",
        "ContractNumber": "123456789",
        "CustomerID1": 130834,
        "CustomerName1": "Bob Jones",
        "DateCreated": "2016-01-04T14:33:15.737",
        "DateReconciled": "null",
        "DistrictName": "District B2",
        "EmployeeID": 0,
        "EmployeeID1": 218,
        "EmployeeName": "",
        "EmployeeName1": "iQmetrix User",
        "ExtraField": "1234567890",
        "Flagged": "No",
        "GlobalProductID": 812,
        "InvoiceComments": "",
        "InvoicedAt": "Regina Store",
        "InvoicedAt_StoreID": 1,
        "InvoicedBy": "Regina Store",
        "InvoicedBy_StoreID": 1,
        "InvoiceIDByStore": "HJKIIIN2",
        "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
        "JournalNumber": "",
        "OriginalSaleDate": "null",
        "OriginalSaleInvoiceID": null,
        "OriginalSaleInvoiceIDByStore": "null",
        "PartialCB": 0,
        "PortNumber": "",
        "Postal_code": "56789",
        "ProductIdentifier": "ACVZRB000001",
        "ProductName": "Verizon New Act_EquipmentRebate",
        "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
        "Quantity": 1,
        "RatePlan": "Act $9.99 to $20.98",
        "RatePlan2": "",
        "Reconciled": "No",
        "RegionID": 9,
        "RegionName": "Region B",
        "RelatedCost": 404,
        "RelatedPrice": 69.99,
        "RelatedProduct": "Samsung Galaxy S4",
        "RelatedProductSerialNumbers": "ACVZCB0026",
        "RelatedProductSKU": "ACVZCB000244",
        "SaleInvoiceID": 126526,
        "SerialNumber": "123000000000000",
        "SocCode": "123000000000000",
        "SocCode2": "",
        "SpecialIdentifier": "1",
        "SpecialIdentifier1": "",
        "TermCode": "",
        "TotalPrice": 0,
        "UnitPrice": 0,
        "VendorAccountName": "Verizon 2",
        "VendorName": "Verizon",
        "VendorNumber": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-vendor-rebate-history-report-by-category-and-employees">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ActivationAssociationNumber": 2,
            "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
            "Adjusted": "No",
            "AssociationNumber": 3,
            "CarrierPrice": 0,
            "ChannelName": "English Channel",
            "ChargeBack": "No",
            "Collected": null,
            "Comments": "",
            "Comments2": "null",
            "ContractNumber": "123456789",
            "CustomerID1": 130834,
            "CustomerName1": "Bob Jones",
            "DateCreated": "2016-01-04T14:33:15.737",
            "DateReconciled": "null",
            "DistrictName": "District B2",
            "EmployeeID": 0,
            "EmployeeID1": 218,
            "EmployeeName": "",
            "EmployeeName1": "iQmetrix User",
            "ExtraField": "1234567890",
            "Flagged": "No",
            "GlobalProductID": 812,
            "InvoiceComments": "",
            "InvoicedAt": "Regina Store",
            "InvoicedAt_StoreID": 1,
            "InvoicedBy": "Regina Store",
            "InvoicedBy_StoreID": 1,
            "InvoiceIDByStore": "HJKIIIN2",
            "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
            "JournalNumber": "",
            "OriginalSaleDate": "null",
            "OriginalSaleInvoiceID": null,
            "OriginalSaleInvoiceIDByStore": "null",
            "PartialCB": 0,
            "PortNumber": "",
            "Postal_code": "56789",
            "ProductIdentifier": "ACVZRB000001",
            "ProductName": "Verizon New Act_EquipmentRebate",
            "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
            "Quantity": 1,
            "RatePlan": "Act $9.99 to $20.98",
            "RatePlan2": "",
            "Reconciled": "No",
            "RegionID": 9,
            "RegionName": "Region B",
            "RelatedCost": 404,
            "RelatedPrice": 69.99,
            "RelatedProduct": "Samsung Galaxy S4",
            "RelatedProductSerialNumbers": "ACVZCB0026",
            "RelatedProductSKU": "ACVZCB000244",
            "SaleInvoiceID": 126526,
            "SerialNumber": "123000000000000",
            "SocCode": "123000000000000",
            "SocCode2": "",
            "SpecialIdentifier": "1",
            "SpecialIdentifier1": "",
            "TermCode": "",
            "TotalPrice": 0,
            "UnitPrice": 0,
            "VendorAccountName": "Verizon 2",
            "VendorName": "Verizon",
            "VendorNumber": "",
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-vendor-rebate-history-report-by-category-and-employees">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-vendor-rebate-history-report-by-category-and-employees">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
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
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-vendor-rebate-history-report-by-category-and-employees">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ActivationAssociationNumber,ActivationRowID,Adjusted,AssociationNumber,CarrierPrice,ChannelName,ChargeBack,Collected,Comments,Comments2,ContractNumber,CustomerID1,CustomerName1,DateCreated,DateReconciled,DistrictName,EmployeeID,EmployeeID1,EmployeeName,EmployeeName1,ExtraField,Flagged,GlobalProductID,InvoiceComments,InvoicedAt,InvoicedAt_StoreID,InvoicedBy,InvoicedBy_StoreID,InvoiceIDByStore,InvoiceRowID,JournalNumber,OriginalSaleDate,OriginalSaleInvoiceID,OriginalSaleInvoiceIDByStore,PartialCB,PortNumber,Postal_code,ProductIdentifier,ProductName,ProductRowID,Quantity,RatePlan,RatePlan2,Reconciled,RegionID,RegionName,RelatedCost,RelatedPrice,RelatedProduct,RelatedProductSerialNumbers,RelatedProductSKU,SaleInvoiceID,SerialNumber,SocCode,SocCode2,SpecialIdentifier,SpecialIdentifier1,TermCode,TotalPrice,UnitPrice,VendorAccountName,VendorName,VendorNumber,VendorSKU
2,0d4652a7-a673-437a-817e-4641961ba3e6,No,3,0,English Channel,No,null,,null,123456789,130834,Bob Jones,2016-01-04T14:33:15.737,null,District B2,0,218,,iQmetrix User,1234567890,No,812,,Regina Store,1,Regina Store,1,HJKIIIN2,db8f28cf-5017-47f4-9ccf-b90cff32185d,,null,null,null,0,,56789,ACVZRB000001,Verizon New Act_EquipmentRebate,27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c,1,Act $9.99 to $20.98,,No,9,Region B,404,69.99,Samsung Galaxy S4,ACVZCB0026,ACVZCB000244,126526,123000000000000,123000000000000,,1,,,0,0,Verizon 2,Verizon,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report-by-category-and-employees">
            
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

    
