---
title:  Billing Reports
permalink: /api/Billing-Reports/
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



## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net/private/">https://rqdataconnectdemo.iqmetrix.net/private/</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net/private/">https://rqdataconnect.iqmetrix.net/private/</a>

## Resources

## SaleInvoice

```json
{
	"CustomerId": "13699",
	"InvoiceId": "1",
	"PaymentTypeId": "3",
	"AccountsReceivableId": "68",
	"AccountsReceivableName": "TTL10AR1",
	"InvoiceName": "TARGEIN1",
	"CustomerName": "KENTEL corp",
	"DatabaseName": "KENTE",
	"TotalAmount": "38.14",
	"TotalPaid": "50",
	"CreatedDate": "2010-07-03T11:07:19.59",
	"OriginalId": "1"
}
```

| Name | Description |
|:-----|:------------|
| CustomerId (`INT`) | Identifier for a customer | 
| InvoiceId (`INT`) | Identifier for this invoice | 
| PaymentTypeId (`INT`) | Identifier for a Payment Type | 
| AccountsReceivableId (`INT`) |  | 
| AccountsReceivableName (`VARCHAR(14)`) |  | 
| InvoiceName (`VARCHAR(14)`) | Invoice name | 
| CustomerName (`VARCHAR(50)`) | Customer name | 
| DatabaseName (`VARCHAR(25)`) | Database name | 
| TotalAmount (`MONEY`) | Total amount | 
| TotalPaid (`MONEY`) | Total paid | 
| CreatedDate (`DateTime`) | Created date | 
| OriginalId (`INT`) | Identifier of the original invoice | 


## EnabledRecurringInvoiceData

```json
{
	"CustomerId": "124059",
	"AccountsReceivableId": "68",
	"AccountsReceivableName": "TTL10AR1",
	"StartDate": "2014-12-16T00:00:00",
	"StopDate": "",
	"RecurringInvoiceId": "8",
	"RecurringInvoiceName": "ML101RI1",
	"ProductId": "5002",
	"Quantity": "1",
	"Price": "100",
	"Sku": "ASBANS000070",
	"Description": "NSP"
}
```

| Name | Description |
|:-----|:------------|
| CustomerId (`INT`) | Identifier for a customer | 
| AccountsReceivableId (`INT`) |  | 
| AccountsReceivableName (`VARCHAR(14)`) |  | 
| StartDate (`DateTime`) | Start date | 
| StopDate (`DateTime`) | End date | 
| RecurringInvoiceId (`INT`) | Identifier for the recurring invoice | 
| RecurringInvoiceName (`VARCHAR(14)`) | Recurring invoice name | 
| ProductId (`INT`) | Product Id | 
| Quantity (`INT`) | Quantity | 
| Price (`MONEY`) | Price | 
| Sku (`VARCHAR(12)`) | SKU | 
| Description (`NVARCHAR(MAX)`) | Description | 



## SaleInvoicesByProductFilterData

```json
{
	"CustomerId": "2922",
	"SaleInvoiceId": "2",
	"Quantity": "1",
	"Price": "49.99",
	"AccountsReceivableId": "5",
	"AccountsReceivableName": "",
	"Year": "2011",
	"Month": "1",
	"OriginalId": "0",
	"RefundCodeId": "159c193f-1904-deaa-2fed-a318b17f2b70",
	"SaleInvoiceName": "84WEAIN1",
	"CustomerName": "KENTEL corp",
	"DatabaseName": "KENTE"
}
```

| Name | Description |
|:-----|:------------|
| CustomerId (`INT`) | Identifier for a customer | 
| SaleInvoiceId (`INT`) | Identifier for the sale invoice | 
| Quantity (`INT`) | Quantity | 
| Price (`MONEY`) | Price | 
| AccountsReceivableId (`INT`) |  | 
| AccountsReceivableName (`VARCHAR(14)`) |  | 
| Year (`INT`) | Year (full) | 
| Month (`INT`) | Month as an integer | 
| OriginalId (`INT`) | Original invoice id | 
| RefundCodeId (`UNIQUEIDENTIFIER`) | Identifier for a refund code | 
| SaleInvoiceName (`VARCHAR(14)`) | Sale invoice name | 
| CustomerName (`VARCHAR(50)`) | Customer name | 
| DatabaseName (`VARCHAR(25)`) | Database name | 


## SummaryOfSaaSProductData

```json
{
	"CustomerID": "85161",
	"LocationCount": "0",
	"WorkstationCount": "0",
	"RqMobileCount": "0"
}
```

| Name | Description |
|:-----|:------------|
| CustomerID (`INT`) | Identifier for a customer | 
| LocationCount (`INT`) | Number of locations | 
| WorkstationCount (`INT`) | Number of workstations | 
| RqMobileCount (`INT`) | Number of RQ Mobile devices | 


## InvoicesWithMatchingEpinIDData

```json
{
	"InvoiceID": "84WEAIN16524",
	"ProductSKU": "INEPNS000001",
	"SaleInvoiceID": "130511",
	"Priority": "1",
	"PinTypeID": "21",
	"PinCode": "9875564858978",
	"SerialNumber": "987465328",
	"Amount": "50",
	"CostToCustomer": "50"
}
```

| Name | Description |
|:-----|:------------|
| InvoiceID (`VARCHAR(14)`) | Identifier for an invoice | 
| ProductSKU (`VARCHAR(12)`) | Product SKU | 
| SaleInvoiceID (`INT`) | Identifier for an invoice | 
| Priority (`INT`) | Priority | 
| PinTypeID (`INT`) | Identifier for a pin type | 
| PinCode (`VARCHAR(30)`) | EPIN pin code | 
| SerialNumber (`VARCHAR(100)`) | Serial number | 
| Amount (`MONEY`) | Amount | 
| CostToCustomer (`MONEY`) | Customer cost | 



## InvoicesPaidToAccountData

```json
{
	"CustomerId": "54514",
	"SaleInvoiceId": "1891",
	"ProductId": "1355",
	"Quantity": "1",
	"Price": "79.99",
	"Sku": "ASMIRI000016",
	"Description": "Blackberry Curve 3 Grey"
}
```

| Name | Description |
|:-----|:------------|
| CustomerId (`INT`) | Identifier for a customer | 
| SaleInvoiceId (`INT`) |  | 
| ProductId (`INT`) | Identifier for a product | 
| Quantity (`INT`) | Quantity | 
| Price (`MONEY`) | Price | 
| Sku (`VARCHAR(12)`) | SKU | 
| Description (`NVARCHAR(MAX)`) | Description | 


## GlobalProduct

```json
{
	"GlobalProductID": "1",
	"ProductIdentifier": "ASCLMO000001",
	"ProductName": "CLA Mot V262/265 Platinum_TestCLA"
}
```

| Name | Description |
|:-----|:------------|
| GlobalProductID (`INT`) | Identifier for a <a href='http://developers.iqmetrix.com/api/Billing-Reports/#globalproduct'>GlobalProduct</a> | 
| ProductIdentifier (`VARCHAR(12)`) | Product identifier | 
| ProductName (`NVARCHAR(MAX)`) | Product name | 






## Requests



<h3 id='get-sale-invoices-by-ids' class='clickable-header top-level-header'>Get Sale Invoices By IDs</h3>



<h4>Request</h4>

<pre>
GET /billing/GetSaleInvoicesByIDS?CompanyID={CompanyID}&SaleInvoiceIds={SaleInvoiceIds}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>SaleInvoiceIds</code> (<strong>Required</strong>)  - Comma seperated list of identifiers for invoices
    </li>
    
    <li>
        <code>Auth</code> (<strong>Required</strong>)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (<strong>Required</strong>)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-get-sale-invoices-by-ids" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-get-sale-invoices-by-ids" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-get-sale-invoices-by-ids" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-get-sale-invoices-by-ids" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-get-sale-invoices-by-ids" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-get-sale-invoices-by-ids" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-get-sale-invoices-by-ids"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-get-sale-invoices-by-ids">
<pre id="http-code-get-sale-invoices-by-ids"><code class="language-http">GET /billing/GetSaleInvoicesByIDS?CompanyID=22573&SaleInvoiceIds=1,2,3
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-get-sale-invoices-by-ids">
<pre id="curl-code-get-sale-invoices-by-ids"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByIDS?CompanyID=22573&SaleInvoiceIds=1,2,3" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-get-sale-invoices-by-ids">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-get-sale-invoices-by-ids"><code class="language-csharp">static IRestResponse GetSaleInvoicesByIds()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByIDS?CompanyID=22573&SaleInvoiceIds=1,2,3");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-get-sale-invoices-by-ids">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-get-sale-invoices-by-ids"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GetSaleInvoicesByIds() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByIDS?CompanyID=22573&SaleInvoiceIds=1,2,3");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-get-sale-invoices-by-ids">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-get-sale-invoices-by-ids"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByIDS?CompanyID=22573&SaleInvoiceIds=1,2,3', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[saleinvoice](#SaleInvoice)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-get-sale-invoices-by-ids" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-get-sale-invoices-by-ids" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-get-sale-invoices-by-ids" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-get-sale-invoices-by-ids" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-get-sale-invoices-by-ids" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-get-sale-invoices-by-ids" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-get-sale-invoices-by-ids">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CustomerId": 13699,
        "InvoiceId": 1,
        "PaymentTypeId": 3,
        "AccountsReceivableId": 68,
        "AccountsReceivableName": "TTL10AR1",
        "InvoiceName": "TARGEIN1",
        "CustomerName": "KENTEL corp",
        "DatabaseName": "KENTE",
        "TotalAmount": 38.14,
        "TotalPaid": 50,
        "CreatedDate": "2010-07-03T11:07:19.59",
        "OriginalId": 1
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-get-sale-invoices-by-ids">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CustomerId": 13699,
            "InvoiceId": 1,
            "PaymentTypeId": 3,
            "AccountsReceivableId": 68,
            "AccountsReceivableName": "TTL10AR1",
            "InvoiceName": "TARGEIN1",
            "CustomerName": "KENTEL corp",
            "DatabaseName": "KENTE",
            "TotalAmount": 38.14,
            "TotalPaid": 50,
            "CreatedDate": "2010-07-03T11:07:19.59",
            "OriginalId": 1
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-get-sale-invoices-by-ids">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>13699</CustomerId>
    <InvoiceId>1</InvoiceId>
    <PaymentTypeId>3</PaymentTypeId>
    <AccountsReceivableId>68</AccountsReceivableId>
    <AccountsReceivableName>TTL10AR1</AccountsReceivableName>
    <InvoiceName>TARGEIN1</InvoiceName>
    <CustomerName>KENTEL corp</CustomerName>
    <DatabaseName>KENTE</DatabaseName>
    <TotalAmount>38.14</TotalAmount>
    <TotalPaid>50</TotalPaid>
    <CreatedDate>2010-07-03T11:07:19.59</CreatedDate>
    <OriginalId>1</OriginalId>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-get-sale-invoices-by-ids">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>13699</CustomerId>
    <InvoiceId>1</InvoiceId>
    <PaymentTypeId>3</PaymentTypeId>
    <AccountsReceivableId>68</AccountsReceivableId>
    <AccountsReceivableName>TTL10AR1</AccountsReceivableName>
    <InvoiceName>TARGEIN1</InvoiceName>
    <CustomerName>KENTEL corp</CustomerName>
    <DatabaseName>KENTE</DatabaseName>
    <TotalAmount>38.14</TotalAmount>
    <TotalPaid>50</TotalPaid>
    <CreatedDate>2010-07-03T11:07:19.59</CreatedDate>
    <OriginalId>1</OriginalId>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-get-sale-invoices-by-ids">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CustomerId,InvoiceId,PaymentTypeId,AccountsReceivableId,AccountsReceivableName,InvoiceName,CustomerName,DatabaseName,TotalAmount,TotalPaid,CreatedDate,OriginalId
13699,1,3,68,TTL10AR1,TARGEIN1,KENTEL corp,KENTE,38.14,50,2010-07-03T11:07:19.59,1</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-get-sale-invoices-by-ids">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-traffic-counts' class='clickable-header top-level-header'>Getting Traffic Counts</h3>



<h4>Request</h4>

<pre>
GET /billing/GetTrafficCounts?CompanyID={CompanyID}&StartDate={StartDate}&StopDate={StopDate}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>Auth</code> (<strong>Required</strong>)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (<strong>Required</strong>)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-traffic-counts" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-traffic-counts" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-traffic-counts" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-traffic-counts" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-traffic-counts" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-traffic-counts" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-traffic-counts"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-traffic-counts">
<pre id="http-code-getting-traffic-counts"><code class="language-http">GET /billing/GetTrafficCounts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-traffic-counts">
<pre id="curl-code-getting-traffic-counts"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetTrafficCounts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-traffic-counts">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-traffic-counts"><code class="language-csharp">static IRestResponse GettingTrafficCounts()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetTrafficCounts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-traffic-counts">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-traffic-counts"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTrafficCounts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetTrafficCounts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-traffic-counts">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-traffic-counts"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetTrafficCounts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>storeid</code> (INT) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-traffic-counts" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-traffic-counts" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-traffic-counts" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-traffic-counts" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-traffic-counts" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-traffic-counts" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-traffic-counts">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "storeid": 1
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-traffic-counts">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "storeid": 1
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-traffic-counts">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <storeid>1</storeid>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-traffic-counts">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <storeid>1</storeid>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-traffic-counts">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>storeid
1</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-traffic-counts">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-invoices-with-matching-epins-ids' class='clickable-header top-level-header'>Getting Invoices With Matching Epins IDs</h3>



<h4>Request</h4>

<pre>
GET /billing/GetInvoicesWithMatchingEpinIDS?CompanyID={CompanyID}&IDs={IDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>IDs</code> (<strong>Required</strong>)  - Comma seperated list of identifiers for invoices
    </li>
    
    <li>
        <code>Auth</code> (<strong>Required</strong>)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (<strong>Required</strong>)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-invoices-with-matching-epins-ids" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-invoices-with-matching-epins-ids" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-invoices-with-matching-epins-ids" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-invoices-with-matching-epins-ids" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-invoices-with-matching-epins-ids" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-invoices-with-matching-epins-ids" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-invoices-with-matching-epins-ids"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-invoices-with-matching-epins-ids">
<pre id="http-code-getting-invoices-with-matching-epins-ids"><code class="language-http">GET /billing/GetInvoicesWithMatchingEpinIDS?CompanyID=22573&IDs=84WEAIN16524
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-invoices-with-matching-epins-ids">
<pre id="curl-code-getting-invoices-with-matching-epins-ids"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithMatchingEpinIDS?CompanyID=22573&IDs=84WEAIN16524" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-invoices-with-matching-epins-ids">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-invoices-with-matching-epins-ids"><code class="language-csharp">static IRestResponse GettingInvoicesWithMatchingEpinsIds()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithMatchingEpinIDS?CompanyID=22573&IDs=84WEAIN16524");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-invoices-with-matching-epins-ids">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-invoices-with-matching-epins-ids"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingInvoicesWithMatchingEpinsIds() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithMatchingEpinIDS?CompanyID=22573&IDs=84WEAIN16524");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-invoices-with-matching-epins-ids">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-invoices-with-matching-epins-ids"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithMatchingEpinIDS?CompanyID=22573&IDs=84WEAIN16524', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[invoiceswithmatchingepiniddata](#InvoicesWithMatchingEpinIDData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-invoices-with-matching-epins-ids" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-invoices-with-matching-epins-ids" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-invoices-with-matching-epins-ids" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-invoices-with-matching-epins-ids" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-invoices-with-matching-epins-ids" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-invoices-with-matching-epins-ids" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-invoices-with-matching-epins-ids">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "InvoiceID": "84WEAIN16524",
        "ProductSKU": "INEPNS000001",
        "SaleInvoiceID": 130511,
        "Priority": 1,
        "PinTypeID": 21,
        "PinCode": "9875564858978",
        "SerialNumber": "987465328",
        "Amount": 50,
        "CostToCustomer": 50
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-invoices-with-matching-epins-ids">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "InvoiceID": "84WEAIN16524",
            "ProductSKU": "INEPNS000001",
            "SaleInvoiceID": 130511,
            "Priority": 1,
            "PinTypeID": 21,
            "PinCode": "9875564858978",
            "SerialNumber": "987465328",
            "Amount": 50,
            "CostToCustomer": 50
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-invoices-with-matching-epins-ids">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceID>84WEAIN16524</InvoiceID>
    <ProductSKU>INEPNS000001</ProductSKU>
    <SaleInvoiceID>130511</SaleInvoiceID>
    <Priority>1</Priority>
    <PinTypeID>21</PinTypeID>
    <PinCode>9875564858978</PinCode>
    <SerialNumber>987465328</SerialNumber>
    <Amount>50</Amount>
    <CostToCustomer>50</CostToCustomer>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-invoices-with-matching-epins-ids">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceID>84WEAIN16524</InvoiceID>
    <ProductSKU>INEPNS000001</ProductSKU>
    <SaleInvoiceID>130511</SaleInvoiceID>
    <Priority>1</Priority>
    <PinTypeID>21</PinTypeID>
    <PinCode>9875564858978</PinCode>
    <SerialNumber>987465328</SerialNumber>
    <Amount>50</Amount>
    <CostToCustomer>50</CostToCustomer>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-invoices-with-matching-epins-ids">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>InvoiceID,ProductSKU,SaleInvoiceID,Priority,PinTypeID,PinCode,SerialNumber,Amount,CostToCustomer
84WEAIN16524,INEPNS000001,130511,1,21,9875564858978,987465328,50,50</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-invoices-with-matching-epins-ids">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-summary-of-saas-products' class='clickable-header top-level-header'>Getting Summary of SaaS Products</h3>



<h4>Request</h4>

<pre>
GET /billing/GetSummaryOfSaaSProducts?CompanyID={CompanyID}&StartDate={StartDate}&StopDate={StopDate}&CustomerIDS={CustomerIDS}&LocationGlobalProductIDs={LocationGlobalProductIDs}&WorkstationsGlobalProductIDs={WorkstationsGlobalProductIDs}&RQMobileGlobalProductIDs={RQMobileGlobalProductIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>CustomerIDS</code> (<strong>Required</strong>)  - Comma seperated list of identifiers for customers
    </li>
    
    <li>
        <code>LocationGlobalProductIDs</code> (<strong>Required</strong>)  - Comma seperated list of identifiers for RQ location line items
    </li>
    
    <li>
        <code>WorkstationsGlobalProductIDs</code> (<strong>Required</strong>)  - Comma seperated list of identifiers for RQ workstation line items
    </li>
    
    <li>
        <code>RQMobileGlobalProductIDs</code> (<strong>Required</strong>)  - Comma seperated list of identifiers for RQ mobile line items
    </li>
    
    <li>
        <code>Auth</code> (<strong>Required</strong>)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (<strong>Required</strong>)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-summary-of-saas-products" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-summary-of-saas-products" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-summary-of-saas-products" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-summary-of-saas-products" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-summary-of-saas-products" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-summary-of-saas-products" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-summary-of-saas-products"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-summary-of-saas-products">
<pre id="http-code-getting-summary-of-saas-products"><code class="language-http">GET /billing/GetSummaryOfSaaSProducts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CustomerIDS=85161,119121,113548&LocationGlobalProductIDs=760,764&WorkstationsGlobalProductIDs=938,1456&RQMobileGlobalProductIDs=1721
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-summary-of-saas-products">
<pre id="curl-code-getting-summary-of-saas-products"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSummaryOfSaaSProducts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CustomerIDS=85161,119121,113548&LocationGlobalProductIDs=760,764&WorkstationsGlobalProductIDs=938,1456&RQMobileGlobalProductIDs=1721" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-summary-of-saas-products">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-summary-of-saas-products"><code class="language-csharp">static IRestResponse GettingSummaryOfSaasProducts()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSummaryOfSaaSProducts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CustomerIDS=85161,119121,113548&LocationGlobalProductIDs=760,764&WorkstationsGlobalProductIDs=938,1456&RQMobileGlobalProductIDs=1721");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-summary-of-saas-products">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-summary-of-saas-products"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSummaryOfSaasProducts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSummaryOfSaaSProducts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CustomerIDS=85161,119121,113548&LocationGlobalProductIDs=760,764&WorkstationsGlobalProductIDs=938,1456&RQMobileGlobalProductIDs=1721");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-summary-of-saas-products">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-summary-of-saas-products"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSummaryOfSaaSProducts?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&CustomerIDS=85161,119121,113548&LocationGlobalProductIDs=760,764&WorkstationsGlobalProductIDs=938,1456&RQMobileGlobalProductIDs=1721', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[summaryofsaasproductdata](#SummaryOfSaaSProductData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-summary-of-saas-products" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-summary-of-saas-products" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-summary-of-saas-products" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-summary-of-saas-products" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-summary-of-saas-products" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-summary-of-saas-products" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-summary-of-saas-products">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CustomerID": 85161,
        "LocationCount": 0,
        "WorkstationCount": 0,
        "RqMobileCount": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-summary-of-saas-products">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CustomerID": 85161,
            "LocationCount": 0,
            "WorkstationCount": 0,
            "RqMobileCount": 0
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-summary-of-saas-products">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerID>85161</CustomerID>
    <LocationCount>0</LocationCount>
    <WorkstationCount>0</WorkstationCount>
    <RqMobileCount>0</RqMobileCount>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-summary-of-saas-products">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerID>85161</CustomerID>
    <LocationCount>0</LocationCount>
    <WorkstationCount>0</WorkstationCount>
    <RqMobileCount>0</RqMobileCount>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-summary-of-saas-products">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CustomerID,LocationCount,WorkstationCount,RqMobileCount
85161,0,0,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-summary-of-saas-products">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-enabled-recurring-invoices' class='clickable-header top-level-header'>Getting Enabled Recurring Invoices</h3>



<h4>Request</h4>

<pre>
GET /billing/GetEnabledRecurringInvoices?CompanyID={CompanyID}&LanguageCode={LanguageCode}&StartDate={StartDate}&StopDate={StopDate}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
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
    <li class="active"><a href="#http-getting-enabled-recurring-invoices" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-enabled-recurring-invoices" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-enabled-recurring-invoices" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-enabled-recurring-invoices" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-enabled-recurring-invoices" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-enabled-recurring-invoices" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-enabled-recurring-invoices"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-enabled-recurring-invoices">
<pre id="http-code-getting-enabled-recurring-invoices"><code class="language-http">GET /billing/GetEnabledRecurringInvoices?CompanyID=22573&LanguageCode=en-us&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-enabled-recurring-invoices">
<pre id="curl-code-getting-enabled-recurring-invoices"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetEnabledRecurringInvoices?CompanyID=22573&LanguageCode=en-us&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-enabled-recurring-invoices">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-enabled-recurring-invoices"><code class="language-csharp">static IRestResponse GettingEnabledRecurringInvoices()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetEnabledRecurringInvoices?CompanyID=22573&LanguageCode=en-us&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-enabled-recurring-invoices">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-enabled-recurring-invoices"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingEnabledRecurringInvoices() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetEnabledRecurringInvoices?CompanyID=22573&LanguageCode=en-us&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-enabled-recurring-invoices">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-enabled-recurring-invoices"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetEnabledRecurringInvoices?CompanyID=22573&LanguageCode=en-us&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[enabledrecurringinvoicedata](#EnabledRecurringInvoiceData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-enabled-recurring-invoices" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-enabled-recurring-invoices" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-enabled-recurring-invoices" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-enabled-recurring-invoices" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-enabled-recurring-invoices" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-enabled-recurring-invoices" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-enabled-recurring-invoices">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CustomerId": 124059,
        "AccountsReceivableId": 68,
        "AccountsReceivableName": "TTL10AR1",
        "StartDate": "2014-12-16T00:00:00",
        "StopDate": "",
        "RecurringInvoiceId": 8,
        "RecurringInvoiceName": "ML101RI1",
        "ProductId": 5002,
        "Quantity": 1,
        "Price": 100,
        "Sku": "ASBANS000070",
        "Description": "NSP"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-enabled-recurring-invoices">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CustomerId": 124059,
            "AccountsReceivableId": 68,
            "AccountsReceivableName": "TTL10AR1",
            "StartDate": "2014-12-16T00:00:00",
            "StopDate": "",
            "RecurringInvoiceId": 8,
            "RecurringInvoiceName": "ML101RI1",
            "ProductId": 5002,
            "Quantity": 1,
            "Price": 100,
            "Sku": "ASBANS000070",
            "Description": "NSP"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-enabled-recurring-invoices">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>124059</CustomerId>
    <AccountsReceivableId>68</AccountsReceivableId>
    <AccountsReceivableName>TTL10AR1</AccountsReceivableName>
    <StartDate>2014-12-16T00:00:00</StartDate>
    <StopDate></StopDate>
    <RecurringInvoiceId>8</RecurringInvoiceId>
    <RecurringInvoiceName>ML101RI1</RecurringInvoiceName>
    <ProductId>5002</ProductId>
    <Quantity>1</Quantity>
    <Price>100</Price>
    <Sku>ASBANS000070</Sku>
    <Description>NSP</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-enabled-recurring-invoices">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>124059</CustomerId>
    <AccountsReceivableId>68</AccountsReceivableId>
    <AccountsReceivableName>TTL10AR1</AccountsReceivableName>
    <StartDate>2014-12-16T00:00:00</StartDate>
    <StopDate></StopDate>
    <RecurringInvoiceId>8</RecurringInvoiceId>
    <RecurringInvoiceName>ML101RI1</RecurringInvoiceName>
    <ProductId>5002</ProductId>
    <Quantity>1</Quantity>
    <Price>100</Price>
    <Sku>ASBANS000070</Sku>
    <Description>NSP</Description>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-enabled-recurring-invoices">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CustomerId,AccountsReceivableId,AccountsReceivableName,StartDate,StopDate,RecurringInvoiceId,RecurringInvoiceName,ProductId,Quantity,Price,Sku,Description
124059,68,TTL10AR1,2014-12-16T00:00:00,,8,ML101RI1,5002,1,100,ASBANS000070,NSP</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-enabled-recurring-invoices">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-invoices-with-unpaid-balances' class='clickable-header top-level-header'>Getting Invoices With Unpaid Balances</h3>



<h4>Request</h4>

<pre>
GET /billing/GetInvoicesWithUnpaidBalance?CompanyID={CompanyID}&StartDate={StartDate}&StopDate={StopDate}&PaymentTypeID={PaymentTypeID}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>PaymentTypeID</code> (<strong>Required</strong>)  - Identifier for a Payment Type
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
    <li class="active"><a href="#http-getting-invoices-with-unpaid-balances" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-invoices-with-unpaid-balances" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-invoices-with-unpaid-balances" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-invoices-with-unpaid-balances" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-invoices-with-unpaid-balances" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-invoices-with-unpaid-balances" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-invoices-with-unpaid-balances"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-invoices-with-unpaid-balances">
<pre id="http-code-getting-invoices-with-unpaid-balances"><code class="language-http">GET /billing/GetInvoicesWithUnpaidBalance?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&PaymentTypeID=1
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-invoices-with-unpaid-balances">
<pre id="curl-code-getting-invoices-with-unpaid-balances"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithUnpaidBalance?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&PaymentTypeID=1" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-invoices-with-unpaid-balances">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-invoices-with-unpaid-balances"><code class="language-csharp">static IRestResponse GettingInvoicesWithUnpaidBalances()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithUnpaidBalance?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&PaymentTypeID=1");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-invoices-with-unpaid-balances">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-invoices-with-unpaid-balances"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingInvoicesWithUnpaidBalances() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithUnpaidBalance?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&PaymentTypeID=1");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-invoices-with-unpaid-balances">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-invoices-with-unpaid-balances"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesWithUnpaidBalance?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&PaymentTypeID=1', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>InvoiceId</code> (INT) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-invoices-with-unpaid-balances" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-invoices-with-unpaid-balances" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-invoices-with-unpaid-balances" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-invoices-with-unpaid-balances" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-invoices-with-unpaid-balances" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-invoices-with-unpaid-balances" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-invoices-with-unpaid-balances">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "InvoiceId": 130313
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-invoices-with-unpaid-balances">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "InvoiceId": 130313
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-invoices-with-unpaid-balances">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceId>130313</InvoiceId>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-invoices-with-unpaid-balances">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceId>130313</InvoiceId>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-invoices-with-unpaid-balances">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>InvoiceId
130313</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-invoices-with-unpaid-balances">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-sale-invoices-by-product-filter' class='clickable-header top-level-header'>Getting Sale Invoices By Product Filter</h3>



<h4>Request</h4>

<pre>
GET /billing/GetSaleInvoicesByProductFilter?CompanyID={CompanyID}&StartDate={StartDate}&StopDate={StopDate}&GlobalProductIds={GlobalProductIds}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>GlobalProductIds</code> (<strong>Required</strong>)  - Comma seperated list of identifiers for <a href='http://developers.iqmetrix.com/api/Billing-Reports/#globalproduct'>GlobalProducts</a>
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
    <li class="active"><a href="#http-getting-sale-invoices-by-product-filter" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoices-by-product-filter" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoices-by-product-filter" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoices-by-product-filter" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoices-by-product-filter" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoices-by-product-filter" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoices-by-product-filter"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoices-by-product-filter">
<pre id="http-code-getting-sale-invoices-by-product-filter"><code class="language-http">GET /billing/GetSaleInvoicesByProductFilter?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&GlobalProductIds=760,764,768,1808,1809,1810
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoices-by-product-filter">
<pre id="curl-code-getting-sale-invoices-by-product-filter"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByProductFilter?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&GlobalProductIds=760,764,768,1808,1809,1810" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoices-by-product-filter">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoices-by-product-filter"><code class="language-csharp">static IRestResponse GettingSaleInvoicesByProductFilter()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByProductFilter?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&GlobalProductIds=760,764,768,1808,1809,1810");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoices-by-product-filter">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoices-by-product-filter"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoicesByProductFilter() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByProductFilter?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&GlobalProductIds=760,764,768,1808,1809,1810");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoices-by-product-filter">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoices-by-product-filter"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetSaleInvoicesByProductFilter?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&GlobalProductIds=760,764,768,1808,1809,1810', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[saleinvoicesbyproductfilterdata](#SaleInvoicesByProductFilterData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoices-by-product-filter" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-sale-invoices-by-product-filter" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoices-by-product-filter" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-sale-invoices-by-product-filter" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoices-by-product-filter" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoices-by-product-filter" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoices-by-product-filter">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CustomerId": 2922,
        "SaleInvoiceId": 2,
        "Quantity": 1,
        "Price": 49.99,
        "AccountsReceivableId": 5,
        "AccountsReceivableName": "",
        "Year": 2011,
        "Month": 1,
        "OriginalId": 0,
        "RefundCodeId": "159c193f-1904-deaa-2fed-a318b17f2b70",
        "SaleInvoiceName": "84WEAIN1",
        "CustomerName": "KENTEL corp",
        "DatabaseName": "KENTE"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-sale-invoices-by-product-filter">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CustomerId": 2922,
            "SaleInvoiceId": 2,
            "Quantity": 1,
            "Price": 49.99,
            "AccountsReceivableId": 5,
            "AccountsReceivableName": "",
            "Year": 2011,
            "Month": 1,
            "OriginalId": 0,
            "RefundCodeId": "159c193f-1904-deaa-2fed-a318b17f2b70",
            "SaleInvoiceName": "84WEAIN1",
            "CustomerName": "KENTEL corp",
            "DatabaseName": "KENTE"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoices-by-product-filter">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>2922</CustomerId>
    <SaleInvoiceId>2</SaleInvoiceId>
    <Quantity>1</Quantity>
    <Price>49.99</Price>
    <AccountsReceivableId>5</AccountsReceivableId>
    <AccountsReceivableName></AccountsReceivableName>
    <Year>2011</Year>
    <Month>1</Month>
    <OriginalId>0</OriginalId>
    <RefundCodeId>159c193f-1904-deaa-2fed-a318b17f2b70</RefundCodeId>
    <SaleInvoiceName>84WEAIN1</SaleInvoiceName>
    <CustomerName>KENTEL corp</CustomerName>
    <DatabaseName>KENTE</DatabaseName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-sale-invoices-by-product-filter">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>2922</CustomerId>
    <SaleInvoiceId>2</SaleInvoiceId>
    <Quantity>1</Quantity>
    <Price>49.99</Price>
    <AccountsReceivableId>5</AccountsReceivableId>
    <AccountsReceivableName></AccountsReceivableName>
    <Year>2011</Year>
    <Month>1</Month>
    <OriginalId>0</OriginalId>
    <RefundCodeId>159c193f-1904-deaa-2fed-a318b17f2b70</RefundCodeId>
    <SaleInvoiceName>84WEAIN1</SaleInvoiceName>
    <CustomerName>KENTEL corp</CustomerName>
    <DatabaseName>KENTE</DatabaseName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoices-by-product-filter">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CustomerId,SaleInvoiceId,Quantity,Price,AccountsReceivableId,AccountsReceivableName,Year,Month,OriginalId,RefundCodeId,SaleInvoiceName,CustomerName,DatabaseName
2922,2,1,49.99,5,,2011,1,0,159c193f-1904-deaa-2fed-a318b17f2b70,84WEAIN1,KENTEL corp,KENTE</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoices-by-product-filter">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-invoices-paid-to-account' class='clickable-header top-level-header'>Getting Invoices Paid To Account</h3>



<h4>Request</h4>

<pre>
GET /billing/GetInvoicesPaidToAccount?CompanyID={CompanyID}&StartDate={StartDate}&StopDate={StopDate}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
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
    <li class="active"><a href="#http-getting-invoices-paid-to-account" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-invoices-paid-to-account" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-invoices-paid-to-account" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-invoices-paid-to-account" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-invoices-paid-to-account" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-invoices-paid-to-account" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-invoices-paid-to-account"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-invoices-paid-to-account">
<pre id="http-code-getting-invoices-paid-to-account"><code class="language-http">GET /billing/GetInvoicesPaidToAccount?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-invoices-paid-to-account">
<pre id="curl-code-getting-invoices-paid-to-account"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesPaidToAccount?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-invoices-paid-to-account">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-invoices-paid-to-account"><code class="language-csharp">static IRestResponse GettingInvoicesPaidToAccount()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesPaidToAccount?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-invoices-paid-to-account">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-invoices-paid-to-account"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingInvoicesPaidToAccount() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesPaidToAccount?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-invoices-paid-to-account">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-invoices-paid-to-account"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetInvoicesPaidToAccount?CompanyID=22573&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[invoicespaidtoaccountdata](#InvoicesPaidToAccountData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-invoices-paid-to-account" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-invoices-paid-to-account" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-invoices-paid-to-account" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-invoices-paid-to-account" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-invoices-paid-to-account" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-invoices-paid-to-account" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-invoices-paid-to-account">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CustomerId": 54514,
        "SaleInvoiceId": 1891,
        "ProductId": 1355,
        "Quantity": 1,
        "Price": 79.99,
        "Sku": "ASMIRI000016",
        "Description": "Blackberry Curve 3 Grey"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-invoices-paid-to-account">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CustomerId": 54514,
            "SaleInvoiceId": 1891,
            "ProductId": 1355,
            "Quantity": 1,
            "Price": 79.99,
            "Sku": "ASMIRI000016",
            "Description": "Blackberry Curve 3 Grey"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-invoices-paid-to-account">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>54514</CustomerId>
    <SaleInvoiceId>1891</SaleInvoiceId>
    <ProductId>1355</ProductId>
    <Quantity>1</Quantity>
    <Price>79.99</Price>
    <Sku>ASMIRI000016</Sku>
    <Description>Blackberry Curve 3 Grey</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-invoices-paid-to-account">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CustomerId>54514</CustomerId>
    <SaleInvoiceId>1891</SaleInvoiceId>
    <ProductId>1355</ProductId>
    <Quantity>1</Quantity>
    <Price>79.99</Price>
    <Sku>ASMIRI000016</Sku>
    <Description>Blackberry Curve 3 Grey</Description>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-invoices-paid-to-account">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CustomerId,SaleInvoiceId,ProductId,Quantity,Price,Sku,Description
54514,1891,1355,1,79.99,ASMIRI000016,Blackberry Curve 3 Grey</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-invoices-paid-to-account">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-ar-payment-invoice' class='clickable-header top-level-header'>Getting AR Payment Invoice</h3>



<h4>Request</h4>

<pre>
GET /billing/GetARPaymentInvoice?CompanyID={CompanyID}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
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
    <li class="active"><a href="#http-getting-ar-payment-invoice" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-ar-payment-invoice" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-ar-payment-invoice" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-ar-payment-invoice" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-ar-payment-invoice" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-ar-payment-invoice" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-ar-payment-invoice"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-ar-payment-invoice">
<pre id="http-code-getting-ar-payment-invoice"><code class="language-http">GET /billing/GetARPaymentInvoice?CompanyID=22573
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-ar-payment-invoice">
<pre id="curl-code-getting-ar-payment-invoice"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetARPaymentInvoice?CompanyID=22573" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-ar-payment-invoice">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-ar-payment-invoice"><code class="language-csharp">static IRestResponse GettingArPaymentInvoice()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetARPaymentInvoice?CompanyID=22573");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-ar-payment-invoice">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-ar-payment-invoice"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingArPaymentInvoice() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetARPaymentInvoice?CompanyID=22573");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-ar-payment-invoice">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-ar-payment-invoice"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetARPaymentInvoice?CompanyID=22573', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[globalproduct](#GlobalProduct)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-ar-payment-invoice" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-ar-payment-invoice" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-ar-payment-invoice" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-ar-payment-invoice" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-ar-payment-invoice" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-ar-payment-invoice" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-ar-payment-invoice">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "GlobalProductID": 1,
        "ProductIdentifier": "ASCLMO000001",
        "ProductName": "CLA Mot V262/265 Platinum_TestCLA"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-ar-payment-invoice">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "GlobalProductID": 1,
            "ProductIdentifier": "ASCLMO000001",
            "ProductName": "CLA Mot V262/265 Platinum_TestCLA"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-ar-payment-invoice">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GlobalProductID>1</GlobalProductID>
    <ProductIdentifier>ASCLMO000001</ProductIdentifier>
    <ProductName>CLA Mot V262/265 Platinum_TestCLA</ProductName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-ar-payment-invoice">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GlobalProductID>1</GlobalProductID>
    <ProductIdentifier>ASCLMO000001</ProductIdentifier>
    <ProductName>CLA Mot V262/265 Platinum_TestCLA</ProductName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-ar-payment-invoice">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>GlobalProductID,ProductIdentifier,ProductName
1,ASCLMO000001,CLA Mot V262/265 Platinum_TestCLA</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-ar-payment-invoice">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='get-all-global-products' class='clickable-header top-level-header'>Get All Global Products</h3>



<h4>Request</h4>

<pre>
GET /billing/GetAllGlobalProducts?CompanyID={CompanyID}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (<strong>Required</strong>) - Bearer token used for authentication. For other methods of authentication, see</li><li><code>Accept-Encoding: gzip</code> (<strong>Required</strong>) - Compression algorithm. For other methods of compression, see</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyID</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
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
    <li class="active"><a href="#http-get-all-global-products" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-get-all-global-products" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-get-all-global-products" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-get-all-global-products" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-get-all-global-products" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-get-all-global-products" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-get-all-global-products"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-get-all-global-products">
<pre id="http-code-get-all-global-products"><code class="language-http">GET /billing/GetAllGlobalProducts?CompanyID=22573
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-get-all-global-products">
<pre id="curl-code-get-all-global-products"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/private//billing/GetAllGlobalProducts?CompanyID=22573" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-get-all-global-products">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-get-all-global-products"><code class="language-csharp">static IRestResponse GetAllGlobalProducts()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetAllGlobalProducts?CompanyID=22573");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Bearer (Access Token)");
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-get-all-global-products">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-get-all-global-products"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GetAllGlobalProducts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/private//billing/GetAllGlobalProducts?CompanyID=22573");
    
    request.addHeader("Authorization", "Bearer (Access Token)");
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-get-all-global-products">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-get-all-global-products"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/private//billing/GetAllGlobalProducts?CompanyID=22573', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[globalproduct](#GlobalProduct)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-get-all-global-products" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-get-all-global-products" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-get-all-global-products" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-get-all-global-products" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-get-all-global-products" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-get-all-global-products" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-get-all-global-products">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "GlobalProductID": 1,
        "ProductIdentifier": "ASCLMO000001",
        "ProductName": "CLA Mot V262/265 Platinum_TestCLA"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-get-all-global-products">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "GlobalProductID": 1,
            "ProductIdentifier": "ASCLMO000001",
            "ProductName": "CLA Mot V262/265 Platinum_TestCLA"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-get-all-global-products">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GlobalProductID>1</GlobalProductID>
    <ProductIdentifier>ASCLMO000001</ProductIdentifier>
    <ProductName>CLA Mot V262/265 Platinum_TestCLA</ProductName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-get-all-global-products">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GlobalProductID>1</GlobalProductID>
    <ProductIdentifier>ASCLMO000001</ProductIdentifier>
    <ProductName>CLA Mot V262/265 Platinum_TestCLA</ProductName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-get-all-global-products">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>GlobalProductID,ProductIdentifier,ProductName
1,ASCLMO000001,CLA Mot V262/265 Platinum_TestCLA</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-get-all-global-products">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    

