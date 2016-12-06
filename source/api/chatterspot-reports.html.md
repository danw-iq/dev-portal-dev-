---
title:  Chatterspot Reports
permalink: /api/Chatterspot-Reports/
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


To get started, see [RQ Data Connect Guide](/guides/rq-data-connect/).

#### Note

For reports that provide optional URI parameters for filtering at different levels (ForWho/ForWhoIDs/LocationType/LocationTypeIDs), omitting these values will run the report at the default company level.

#### Authentication

This API supports many different methods of authentication, see {{AuthenticationOptions}}.   


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

## Relationship

```json
{
	"CompanyID": "14682",
	"CompanyName": "KENTEL"
}
```

| Name | Description |
|:-----|:------------|
| CompanyID (`INTEGER`) | Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> | 
| CompanyName (`VARCHAR(50)`) | Company name | 


## GenerateMarketingReportData

```json
{
	"Customer Address": "3811 Smith Street",
	"Customer NAME": "John Tester",
	"Customer Zip Code": "75219",
	"Email": "johnb@test.com",
	"Employee Name": "IQMETRIX USER",
	"External Store ID": "2356",
	"GlobalProductID": "92",
	"Gross Profit": "19.99",
	"Id_number": "1421",
	"IMEI": "6783584733",
	"Member Number": "5103830",
	"MobileNumber": "6783584733",
	"Product Cost": "0",
	"Quantity": "1",
	"RQ Employee ID": "138",
	"RQ Invoice": "FAIVGIN569",
	"RQ Product Description": "IDEN -TELENAV: UNLIMITED ROUTES $10 -- NEED DATA ACCESS PLAN",
	"RQ SKU": "CANXRB000072",
	"Selling Price": "19.99",
	"Transaction Date": "2016-02-04T14:38:43.753"
}
```

| Name | Description |
|:-----|:------------|
| Customer Address (`VARCHAR(50)`) | Customer address | 
| Customer NAME (`VARCHAR(101)`) | Customer name | 
| Customer Zip Code (`VARCHAR(15)`) | Customer zip code | 
| Email (`VARCHAR(200)`) | Customer email | 
| Employee Name (`VARCHAR(51)`) | Employee name | 
| External Store ID (`VARCHAR(255)`) | Identifier for a location in an external system | 
| GlobalProductID (`INTEGER`) | Identifier for a Product in RQ | 
| Gross Profit (`MONEY`) | Gross profit | 
| Id_number (`INTEGER`) | Identifier for customer in RQ | 
| IMEI (`VARCHAR(100)`) | IMEI | 
| Member Number (`VARCHAR(50)`) | Customer member number | 
| MobileNumber (`VARCHAR(200)`) | Customer mobile number | 
| Product Cost (`MONEY`) | Product cost | 
| Quantity (`INTEGER`) | Quantity | 
| RQ Employee ID (`INTEGER`) | Identifier for an employee in RQ | 
| RQ Invoice (`VARCHAR(14)`) | Identifier for an invoice in RQ | 
| RQ Product Description (`NVARCHAR(MAX)`) | Description for a product in RQ | 
| RQ SKU (`VARCHAR(12)`) | Product SKU in RQ | 
| Selling Price (`MONEY`) | Selling price | 
| Transaction Date (`DateTime`) | Transaction date | 


## ProductDetailReportData

```json
{
	"Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
	"AdjustedUnitPrice": "25",
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
	"GlobalProductID": "5179",
	"InvoicedAt": "100: My Network LLC - Anchorage",
	"InvoicedBy": "100: My Network LLC - Anchorage",
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
| GlobalProductID (`INT`) | Internal identifier in RQ | 
| InvoicedAt (`NVARCHAR(MAX)`) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | 
| InvoicedBy (`NVARCHAR(MAX)`) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | 
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
| SpecialProductID (`INT`) | Internal identifier in RQ | 
| StoreInStoreFlowIsEnabledForStore (`BIT`) | Internal identifier in RQ | 
| StoreInStoreGrossProfit (`MONEY`) | SIS Gross Profit - profit, calculated as Total Sales - Cost for a SIS location. | 
| StoreInStoreListPrice (`MONEY`) | SIS List Price - Price from the store-in-store setup of the product | 
| StoreInStorePrice (`MONEY`) | SIS Price - The default price when sold through the store-in-store flow | 
| StoreTypeName (`NVARCHAR(MAX)`) | Location Type - the location type the the transaction was performed at | 
| TenderedBy (`VARCHAR (51)`) | Tendered By - name of the employee logged into RQ when the invoice was tendered | 
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
| Amount (`MONEY `) | Amount | 
| GlobalProductID (`INT`) | Identifier of a Product in RQ | 
| Priority (`INT`) | Priority | 
| SaleInvoiceID (`INT`) | Identifier of a sale invoice in RQ | 
| SerialNumber (`VARCHAR (100) `) | Serial number | 
| TaxID (`VARCHAR`) | Tax identifier | 
| TaxName (`NVARCHAR(MAX)`) | Tax name | 






## Requests



<h3 id='getting-partner-relationships' class='clickable-header top-level-header'>Getting Partner Relationships</h3>



<h4>Request</h4>

<pre>
GET /partner/relationships?Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-partner-relationships" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-partner-relationships" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-partner-relationships" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-partner-relationships" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-partner-relationships" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-partner-relationships" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-partner-relationships"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-partner-relationships">
<pre id="http-code-getting-partner-relationships"><code class="language-http">GET /partner/relationships
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-partner-relationships">
<pre id="curl-code-getting-partner-relationships"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/relationships"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-partner-relationships">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-partner-relationships"><code class="language-csharp">static IRestResponse GettingPartnerRelationships()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/relationships");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-partner-relationships">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-partner-relationships"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPartnerRelationships() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/relationships");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-partner-relationships">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-partner-relationships"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/relationships', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[relationship](#Relationship)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-partner-relationships" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-partner-relationships" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-partner-relationships" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-partner-relationships" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-partner-relationships" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-partner-relationships">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CompanyID": 14682,
        "CompanyName": "KENTEL"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-partner-relationships">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CompanyID": 14682,
            "CompanyName": "KENTEL"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CompanyID>14682</CompanyID>
    <CompanyName>KENTEL</CompanyName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CompanyID>14682</CompanyID>
    <CompanyName>KENTEL</CompanyName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CompanyID,CompanyName
14682,KENTEL</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='generate-marketing-report' class='clickable-header top-level-header'>Generate Marketing Report</h3>



<h4>Request</h4>

<pre>
GET /partner/Chatterspot/GenerateMarketingReport?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&OverrideReportDefaultDate={OverrideReportDefaultDate}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>OverrideReportDefaultDate</code> (Optional) 
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
    <li class="active"><a href="#http-generate-marketing-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-generate-marketing-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-generate-marketing-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-generate-marketing-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-generate-marketing-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-generate-marketing-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-generate-marketing-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-generate-marketing-report">
<pre id="http-code-generate-marketing-report"><code class="language-http">GET /partner/Chatterspot/GenerateMarketingReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&OverrideReportDefaultDate=1970-01-01T08:00:00.000Z
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-generate-marketing-report">
<pre id="curl-code-generate-marketing-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/GenerateMarketingReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&OverrideReportDefaultDate=1970-01-01T08:00:00.000Z"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-generate-marketing-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-generate-marketing-report"><code class="language-csharp">static IRestResponse GenerateMarketingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/GenerateMarketingReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&OverrideReportDefaultDate=1970-01-01T08:00:00.000Z");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-generate-marketing-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-generate-marketing-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GenerateMarketingReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/GenerateMarketingReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&OverrideReportDefaultDate=1970-01-01T08:00:00.000Z");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-generate-marketing-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-generate-marketing-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/GenerateMarketingReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&OverrideReportDefaultDate=1970-01-01T08:00:00.000Z', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[generatemarketingreportdata](#GenerateMarketingReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-generate-marketing-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-generate-marketing-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-generate-marketing-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-generate-marketing-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-generate-marketing-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-generate-marketing-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-generate-marketing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Customer Address": "3811 Smith Street",
        "Customer NAME": "John Tester",
        "Customer Zip Code": "75219",
        "Email": "johnb@test.com",
        "Employee Name": "IQMETRIX USER",
        "External Store ID": "2356",
        "GlobalProductID": 92,
        "Gross Profit": 19.99,
        "Id_number": 1421,
        "IMEI": "6783584733",
        "Member Number": "5103830",
        "MobileNumber": "6783584733",
        "Product Cost": 0,
        "Quantity": 1,
        "RQ Employee ID": 138,
        "RQ Invoice": "FAIVGIN569",
        "RQ Product Description": "IDEN -TELENAV: UNLIMITED ROUTES $10 -- NEED DATA ACCESS PLAN",
        "RQ SKU": "CANXRB000072",
        "Selling Price": 19.99,
        "Transaction Date": "2016-02-04T14:38:43.753"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-generate-marketing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Customer Address": "3811 Smith Street",
            "Customer NAME": "John Tester",
            "Customer Zip Code": "75219",
            "Email": "johnb@test.com",
            "Employee Name": "IQMETRIX USER",
            "External Store ID": "2356",
            "GlobalProductID": 92,
            "Gross Profit": 19.99,
            "Id_number": 1421,
            "IMEI": "6783584733",
            "Member Number": "5103830",
            "MobileNumber": "6783584733",
            "Product Cost": 0,
            "Quantity": 1,
            "RQ Employee ID": 138,
            "RQ Invoice": "FAIVGIN569",
            "RQ Product Description": "IDEN -TELENAV: UNLIMITED ROUTES $10 -- NEED DATA ACCESS PLAN",
            "RQ SKU": "CANXRB000072",
            "Selling Price": 19.99,
            "Transaction Date": "2016-02-04T14:38:43.753"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-generate-marketing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Customer Address>3811 Smith Street</Customer Address>
    <Customer NAME>John Tester</Customer NAME>
    <Customer Zip Code>75219</Customer Zip Code>
    <Email>johnb@test.com</Email>
    <Employee Name>IQMETRIX USER</Employee Name>
    <External Store ID>2356</External Store ID>
    <GlobalProductID>92</GlobalProductID>
    <Gross Profit>19.99</Gross Profit>
    <Id_number>1421</Id_number>
    <IMEI>6783584733</IMEI>
    <Member Number>5103830</Member Number>
    <MobileNumber>6783584733</MobileNumber>
    <Product Cost>0</Product Cost>
    <Quantity>1</Quantity>
    <RQ Employee ID>138</RQ Employee ID>
    <RQ Invoice>FAIVGIN569</RQ Invoice>
    <RQ Product Description>IDEN -TELENAV: UNLIMITED ROUTES $10 -- NEED DATA ACCESS PLAN</RQ Product Description>
    <RQ SKU>CANXRB000072</RQ SKU>
    <Selling Price>19.99</Selling Price>
    <Transaction Date>2016-02-04T14:38:43.753</Transaction Date>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-generate-marketing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Customer Address>3811 Smith Street</Customer Address>
    <Customer NAME>John Tester</Customer NAME>
    <Customer Zip Code>75219</Customer Zip Code>
    <Email>johnb@test.com</Email>
    <Employee Name>IQMETRIX USER</Employee Name>
    <External Store ID>2356</External Store ID>
    <GlobalProductID>92</GlobalProductID>
    <Gross Profit>19.99</Gross Profit>
    <Id_number>1421</Id_number>
    <IMEI>6783584733</IMEI>
    <Member Number>5103830</Member Number>
    <MobileNumber>6783584733</MobileNumber>
    <Product Cost>0</Product Cost>
    <Quantity>1</Quantity>
    <RQ Employee ID>138</RQ Employee ID>
    <RQ Invoice>FAIVGIN569</RQ Invoice>
    <RQ Product Description>IDEN -TELENAV: UNLIMITED ROUTES $10 -- NEED DATA ACCESS PLAN</RQ Product Description>
    <RQ SKU>CANXRB000072</RQ SKU>
    <Selling Price>19.99</Selling Price>
    <Transaction Date>2016-02-04T14:38:43.753</Transaction Date>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-generate-marketing-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Customer Address,Customer NAME,Customer Zip Code,Email,Employee Name,External Store ID,GlobalProductID,Gross Profit,Id_number,IMEI,Member Number,MobileNumber,Product Cost,Quantity,RQ Employee ID,RQ Invoice,RQ Product Description,RQ SKU,Selling Price,Transaction Date
3811 Smith Street,John Tester,75219,johnb@test.com,IQMETRIX USER,2356,92,19.99,1421,6783584733,5103830,6783584733,0,1,138,FAIVGIN569,IDEN -TELENAV: UNLIMITED ROUTES $10 -- NEED DATA ACCESS PLAN,CANXRB000072,19.99,2016-02-04T14:38:43.753</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-generate-marketing-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-product-detail-report-for-a-company' class='clickable-header top-level-header'>Getting the Product Detail Report for a Company</h3>

For more information, see {{support_ProductDetailReport}}.

Note that this report has multiple responses, depending on the ReportPart specified.

| Report Part | Response |
|:------------|:---------|
| 1 | {{Chatterspot-Reports_ProductDetailReportData}} |
| 2 | {{Chatterspot-Reports_ProductDetailReportTaxDetailData}} |
| 3 | {{Chatterspot-Reports_ProductDetailReportTaxColumnData}} |

<h4>Request</h4>

<pre>
GET /partner/Chatterspot/ProductDetailReport?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&ReportPart={ReportPart}&ManufacturerID={ManufacturerID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ProductIdentifier={ProductIdentifier}&InvoiceIDByStore={InvoiceIDByStore}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
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
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ReportPart</code> (<strong>Required</strong>)  - Acceptable values include 1 to return the default report, 2 for the tax detail report and 3 for tax column data
    </li>
    
    <li>
        <code>ManufacturerID</code> (<strong>Required</strong>)  - Identifier for a Manufacture in RQ. Use -1 for all Manufacturers. For a complete list see <a href="#getting-a-list-of-manufacturers-in-rq">Getting a List of Manufacturers in RQ</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>InvoiceIDByStore</code> (Optional)  - Tracking number
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
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
    <li class="active"><a href="#http-getting-the-product-detail-report-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-product-detail-report-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-product-detail-report-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-product-detail-report-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-product-detail-report-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-product-detail-report-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-product-detail-report-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-product-detail-report-for-a-company">
<pre id="http-code-getting-the-product-detail-report-for-a-company"><code class="language-http">GET /partner/Chatterspot/ProductDetailReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-product-detail-report-for-a-company">
<pre id="curl-code-getting-the-product-detail-report-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/ProductDetailReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-product-detail-report-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-product-detail-report-for-a-company"><code class="language-csharp">static IRestResponse GettingTheProductDetailReportForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/ProductDetailReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-product-detail-report-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-product-detail-report-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheProductDetailReportForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/ProductDetailReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-product-detail-report-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-product-detail-report-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Chatterspot/ProductDetailReport?CompanyId=14682&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[productdetailreportdata](#ProductDetailReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-product-detail-report-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-product-detail-report-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-product-detail-report-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-product-detail-report-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-product-detail-report-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-detail-report-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-product-detail-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
        "AdjustedUnitPrice": 25,
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
        "GlobalProductID": 5179,
        "InvoicedAt": "100: My Network LLC - Anchorage",
        "InvoicedBy": "100: My Network LLC - Anchorage",
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
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-product-detail-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
            "AdjustedUnitPrice": 25,
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
            "GlobalProductID": 5179,
            "InvoicedAt": "100: My Network LLC - Anchorage",
            "InvoicedBy": "100: My Network LLC - Anchorage",
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-product-detail-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation_RowID>d3d65281-5201-4927-9bac-6f3a47ddf56b</Activation_RowID>
    <AdjustedUnitPrice>25</AdjustedUnitPrice>
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
    <GlobalProductID>5179</GlobalProductID>
    <InvoicedAt>100: My Network LLC - Anchorage</InvoicedAt>
    <InvoicedBy>100: My Network LLC - Anchorage</InvoicedBy>
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
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-product-detail-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation_RowID>d3d65281-5201-4927-9bac-6f3a47ddf56b</Activation_RowID>
    <AdjustedUnitPrice>25</AdjustedUnitPrice>
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
    <GlobalProductID>5179</GlobalProductID>
    <InvoicedAt>100: My Network LLC - Anchorage</InvoicedAt>
    <InvoicedBy>100: My Network LLC - Anchorage</InvoicedBy>
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
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-product-detail-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Activation_RowID,AdjustedUnitPrice,CarrierPrice,CategoryPath,ChannelName,Comments,ContractNumber,CustomerID,CustomerName,DateCreated,DistrictName,EmployeeName,GlobalProductID,InvoicedAt,InvoicedBy,InvoiceIDByStore,IsOrderServiceDropShipProduct,IsOrderServiceShippingProduct,ListPrice,OriginalUnitPrice,Priority,ProductCouponDiscount,ProductIdentifier,ProductName,Quantity,Refund,RegionName,RetailerCatalogID,SaleInvoice_RowID,SaleInvoiceID,SaleInvoiceProduct_RowID,SerialNumber,SoldAsUsed,SpecialProductID,StoreInStoreFlowIsEnabledForStore,StoreInStoreGrossProfit,StoreInStoreListPrice,StoreInStorePrice,StoreTypeName,TenderedBy,TotalCost,TotalDiscount,TotalPrice,UnitCost,UnitPrice,VendorName,VendorSKU
d3d65281-5201-4927-9bac-6f3a47ddf56b,25,null,>> Phones >> Galaxies,English Channel,,12345,131149,Bob Jones,2016-05-13T12:18:08.723,Westminster,iQmetrix User,5179,100: My Network LLC - Anchorage,100: My Network LLC - Anchorage,77224IN3,null,null,449.95,25,1,0,ASHCSA000120,Samsung Galaxy Rugby LTE,1,0,London,null,8c6537ae-75a5-4155-82b2-c8647ed05f3d,128962,0099b78f-ba02-4a91-afd4-2f7eb0fbbb06,1111111,false,0,false,null,null,null,Costco,iQmetrix User,0,424.95,25,0,25,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-detail-report-for-a-company">
            
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
| `HTTP 401` | `Token is invalid` | Ensure Access Token is valid and has not expired | 
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure URI is valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | See Message in response for more information |        

    
