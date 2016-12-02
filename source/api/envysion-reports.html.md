---
title:  Envysion Reports
permalink: /api/Envysion-Reports/
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


To get started, see [RQ Data Connect Guide](/guides/rq-data-connect/).

#### Authentication

This API supports many different methods of authentication, see {{AuthenticationOptions}}.     


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

## Category

```json
{
	"CategoryNumber": "10101012",
	"Category": "Financing",
	"CategoryPath": ">> Activations >> Financing"
}
```

| Name | Description |
|:-----|:------------|
| CategoryNumber (`NVARCHAR (100)`) | Identifier for the Category | 
| Category (`NVARCHAR (MAX)`) | Category Name | 
| CategoryPath (`NVARCHAR (MAX)`) | Category | 


## Store

```json
{
	"StoreID": "1",
	"City": "Phoenix",
	"Address": "27617 Commerce Center Dr",
	"StoreName": "Altera Kiosk"
}
```

| Name | Description |
|:-----|:------------|
| StoreID (`Integer`) | Identifier for a Store in RQ | 
| City (`String`) | City | 
| Address (`String`) | Address | 
| StoreName (`String`) | Store name | 


## CashIn

```json
{
	"amount": "0",
	"cash_in_id": "6882",
	"comment": "",
	"employee_id": "4",
	"employee_id_2": "4",
	"employee_name": "John Tester",
	"employee_name_2": "John Tester",
	"in_date": "2009-10-27T09:35:30.767",
	"store_id": "1",
	"terminal_id": "0"
}
```

| Name | Description |
|:-----|:------------|
| amount (`MONEY`) | Cash in amount | 
| cash_in_id (`INTEGER`) | Internal identifier in RQ | 
| comment (`VARCHAR(2000)`) | Comment | 
| employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| employee_id_2 (`INTEGER`) | Identifier for an employee in RQ | 
| employee_name (`VARCHAR(MAX)`) | Name of employee who performed cash in | 
| employee_name_2 (`VARCHAR(MAX)`) | Name of employee who verified cash in | 
| in_date (`DateTime`) | Cash in date | 
| store_id (`INTEGER`) | Identifier for a store in RQ | 
| terminal_id (`INTEGER`) | Identifier for a terminal in RQ | 


## CashOut

```json
{
	"amount": "332478",
	"cash_out_id": "104253",
	"comment": "b",
	"employee_id": "2863",
	"employee_id_2": "2863",
	"employee_name": "iQmetrix Employee",
	"employee_name_2": "iQmetrix Employee",
	"out_date": "2011-04-13T11:35:23.32",
	"store_id": "1",
	"terminal_id": "0"
}
```

| Name | Description |
|:-----|:------------|
| amount (`MONEY`) | Cash out amount | 
| cash_out_id (`INTEGER`) | Internal identifier in RQ | 
| comment (`VARCHAR(5000)`) | Comment | 
| employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| employee_id_2 (`INTEGER`) | Identifier for an employee in RQ | 
| employee_name (`VARCHAR(MAX)`) | Name of employee who performed cash out | 
| employee_name_2 (`VARCHAR(MAX)`) | Name of employee who verified cash out | 
| out_date (`DateTime`) | Cash out date | 
| store_id (`INTEGER`) | Identifier for a store in RQ | 
| terminal_id (`INTEGER`) | Identifier for a terminal in RQ | 


## OriginalSalesInvoice

```json
{
	"invoice_id": "1265314",
	"orig_date": "2013-04-09T08:23:51.93",
	"orig_employee_id": "45",
	"orig_employee_name": "iQmetrix Employee",
	"orig_invoice_id": "1265312",
	"orig_receipt": "00001IN1805",
	"orig_store_id": "1",
	"orig_terminal_id": "0",
	"orig_workstation": "null",
	"store_id": "1"
}
```

| Name | Description |
|:-----|:------------|
| invoice_id (`INTEGER`) | Internal identifier in RQ | 
| orig_date (`DateTime`) | Invoice date | 
| orig_employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| orig_employee_name (`VARCHAR(MAX)`) | Name of employee on invoice | 
| orig_invoice_id (`INTEGER`) | Identifier of invoice in RQ | 
| orig_receipt (`VARCHAR(14)`) | Receipt number | 
| orig_store_id (`INTEGER`) | Identifier for a store in RQ | 
| orig_terminal_id (`INTEGER`) | Identifier for a terminal in RQ | 
| orig_workstation (`VARCHAR(50)`) | Workstation | 
| store_id (`INTEGER`) | Identifier for a store in RQ | 


## PunchClockEntry

```json
{
	"employee_id": "2",
	"employee_name": "iQmetrix Employee",
	"employee_verified": "true",
	"in_comment": "",
	"manager_verified": "false",
	"out_comment": "Auto-Punch Out",
	"punch_id": "7341",
	"statue": "1",
	"store_id": "1",
	"time_in": "2010-01-04T08:00:00",
	"time_out": "2010-01-04T12:33:00"
}
```

| Name | Description |
|:-----|:------------|
| employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| employee_name (`NVARCHAR (MAX)`) | Name of employee on punch | 
| employee_verified (`BIT`) | A flag to indicate employee verification of punch | 
| in_comment (`VARCHAR(100)`) | Comment for punch in | 
| manager_verified (`BIT`) | A flag to indicate manager verification of punch | 
| out_comment (`VARCHAR(100)`) | Comment for punch out | 
| punch_id (`INTEGER`) | Internal identifier for punch in RQ | 
| statue (`TINYINT`) | Standard = 1, Edited = 1, Added = 2, Deleted = 3 | 
| store_id (`INTEGER`) | Identifier for a store in RQ | 
| time_in (`DateTime`) | Punch in time | 
| time_out (`DateTime`) | Punch out time | 


## PunchClockEntryRevision

```json
{
	"comment": "wrong location - entered correctly at corporate office",
	"employee": "Cathy Day",
	"employee_id": "107",
	"orig_time_in": "2010-01-04T06:12:52.79",
	"orig_time_out": "2010-01-04T15:06:36.677",
	"punch_id": "6276",
	"revised_by_employee": "Dayle Paulson",
	"revised_by_employee_id": "7",
	"revised_date": "2010-01-14T16:06:18.25",
	"revised_time_in": "null",
	"revised_time_out": "null",
	"revision_id": "1567",
	"revision_type": "3",
	"store_id": "1"
}
```

| Name | Description |
|:-----|:------------|
| comment (`VARCHAR(255)`) | Revision comment | 
| employee (`VARCHAR(MAX)`) | Employee on revision | 
| employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| orig_time_in (`DateTime`) | Original punch in time | 
| orig_time_out (`DateTime`) | Original punch out time | 
| punch_id (`INTEGER`) | Internal identifier for punch in RQ | 
| revised_by_employee (`VARCHAR(MAX)`) | Employee making revision | 
| revised_by_employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| revised_date (`DateTime`) | Date and time punch was revised | 
| revised_time_in (`DateTime`) | Revised punch in | 
| revised_time_out (`DateTime`) | Revised punch out | 
| revision_id (`INTEGER`) | Internal identifier in RQ | 
| revision_type (`TINYINT`) | Not Specified = 0, Edit = 1, Addition = 2, Deletion = 3 | 
| store_id (`INTEGER`) | Identifier for a store in RQ | 


## SaleInvoiceCoupon

```json
{
	"Amount": "3.5",
	"DateCreated": "2012-06-11T13:13:51.74",
	"Description": "Normal Coupon",
	"InvoiceIDByStore": "00001IN1001",
	"SaleInvoiceID": "1263859",
	"StoreID1": "1"
}
```

| Name | Description |
|:-----|:------------|
| Amount (`MONEY`) | Amount on coupon | 
| DateCreated (`DateTime`) | Date created | 
| Description (`NVARCHAR(MAX)`) | Description | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice  | 
| SaleInvoiceID (`INTEGER`) | Internal identifier in RQ | 
| StoreID1 (`INTEGER`) | Identifier for a store in RQ | 


## SaleInvoicePayment

```json
{
	"amount": "152.25",
	"change_amount": "0",
	"comments": "",
	"customer_id": "null",
	"customer_member_num": "null",
	"employee_id": "4",
	"employee_name": "John Tester",
	"employee_name_3": "John Tester",
	"invoice_id": "524371",
	"is_bill_payment": "0",
	"payment_type": "Cash",
	"receipt_number": "00001IN117",
	"store_id": "1",
	"terminal_id": "0",
	"trans_create_time": "2010-03-10T15:20:19.323",
	"trans_logged_time": "null",
	"workstation_name": "null"
}
```

| Name | Description |
|:-----|:------------|
| amount (`MONEY`) | Amount | 
| change_amount (`MONEY`) | Change given | 
| comments (`TEXT`) | Comments | 
| customer_id (`INTEGER`) | Identifier for a customer in RQ | 
| customer_member_num (`VARCHAR(30)`) | Customer member number in RQ | 
| employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| employee_name (`VARCHAR(MAX)`) | Name of employee in RQ | 
| employee_name_3 (`VARCHAR(MAX)`) | Name of employee in RQ | 
| invoice_id (`INTEGER`) | Internal identifier in RQ | 
| is_bill_payment (`BIT`) | A flag to indicate if this is a bill payment | 
| payment_type (`NVARCHAR(MAX)`) | Payment type | 
| receipt_number (`VARCHAR(14)`) | Receipt number | 
| store_id (`INTEGER`) | Identifier for a store in RQ | 
| terminal_id (`INTEGER`) | Identifier for a terminal in RQ | 
| trans_create_time (`DateTime`) | Transaction created time | 
| trans_logged_time (`DateTime`) | Transaction logged time | 
| workstation_name (`VARCHAR(50)`) | Workstation name | 


## SaleInvoiceProduct

```json
{
	"Activation": "0",
	"AssociationNumber": "1",
	"category_number": "10101126",
	"category_path": ">> Accessories >> Antennas",
	"cost": "6.96",
	"Discount": "0",
	"employee_id": "2892",
	"employee_name": "iQmetrix Employee",
	"invoice_id": "1267257",
	"item_logged_time": "2015-03-03T07:40:29.493",
	"list_price": "1",
	"override_amt": "0",
	"Priority": "1",
	"product_description": "ADAPTER CABLE USB727/760- Test",
	"product_id": "ASANUN000001",
	"product_type": "Regular Global Product",
	"quantity": "1",
	"receipt_number": "00416IN4417",
	"Return": "0",
	"sale_price": "1",
	"store_id": "221",
	"terminal_id": "0",
	"workstation_name": "TEMP-W530-W8"
}
```

| Name | Description |
|:-----|:------------|
| Activation (`INTEGER`) | A flag to indicate if this is an activated product | 
| AssociationNumber (`INTEGER`) | Association number in rq | 
| category_number (`VARCHAR(150)`) | Internal identifier for a Category in RQ | 
| category_path (`VARCHAR(150)`) | Category | 
| cost (`MONEY`) | Cost | 
| Discount (`MONEY`) | A flag to indicate if this is a discounted product | 
| employee_id (`INTEGER`) | Identifier for an employee in RQ | 
| employee_name (`VARCHAR(250)`) | Name of employee in RQ | 
| invoice_id (`INTEGER`) | Internal identifier in RQ | 
| item_logged_time (`DateTime`) | Time the product was added to the invoice | 
| list_price (`MONEY`) | List price | 
| override_amt (`MONEY`) | Override amount | 
| Priority (`INTEGER`) | A number representing the priority of the product on the invoice | 
| product_description (`NVARCHAR(MAX)`) | Description | 
| product_id (`VARCHAR(250)`) | Identifier for a product in RQ | 
| product_type (`VARCHAR(250)`) | Product type in RQ | 
| quantity (`INTEGER`) | Quantity | 
| receipt_number (`VARCHAR(50)`) | Receipt number in RQ | 
| Return (`INTEGER`) | A flag to indicate if this is a returned product | 
| sale_price (`MONEY`) | Sale price | 
| store_id (`INTEGER`) | Identifier for a store in RQ | 
| terminal_id (`INTEGER`) | Transaction logged time | 
| workstation_name (`VARCHAR(100)`) | Workstation name | 


## SaleInvoiceTax

```json
{
	"DateCreated": "2010-05-28T15:55:38.78",
	"InvoiceIDByStore": "00001IN193",
	"SaleInvoiceID": "812306",
	"StoreID1": "1",
	"Tax": "0"
}
```

| Name | Description |
|:-----|:------------|
| DateCreated (`DateTime`) | Created date | 
| InvoiceIDByStore (`VARCHAR(14)`) | Invoice number | 
| SaleInvoiceID (`INTEGER`) | Identifier for an invoice in RQ | 
| StoreID1 (`INTEGER`) | Identifier for a store in RQ | 
| Tax (`MONEY`) | Tax amount | 


## Relationship

```json
{
	"CompanyID": "22575",
	"CompanyName": "KENTEL"
}
```

| Name | Description |
|:-----|:------------|
| CompanyID (`INTEGER`) | Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> | 
| CompanyName (`VARCHAR(50)`) | Company name | 






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
        "CompanyID": 22575,
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
            "CompanyID": 22575,
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
    <CompanyID>22575</CompanyID>
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
    <CompanyID>22575</CompanyID>
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
22575,KENTEL</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-categories-for-a-company' class='clickable-header top-level-header'>Getting Categories for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/Categories?CompanyId={CompanyId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
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
    <li class="active"><a href="#http-getting-categories-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-categories-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-categories-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-categories-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-categories-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-categories-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-categories-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-categories-for-a-company">
<pre id="http-code-getting-categories-for-a-company"><code class="language-http">GET /partner/Envysion/Categories?CompanyId=22575
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-categories-for-a-company">
<pre id="curl-code-getting-categories-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-categories-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-categories-for-a-company"><code class="language-csharp">static IRestResponse GettingCategoriesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-categories-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-categories-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCategoriesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-categories-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-categories-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[category](#Category)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-categories-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-categories-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-categories-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-categories-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-categories-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-categories-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-categories-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CategoryNumber": "10101012",
        "Category": "Financing",
        "CategoryPath": ">> Activations >> Financing"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-categories-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CategoryNumber": "10101012",
            "Category": "Financing",
            "CategoryPath": ">> Activations >> Financing"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-categories-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CategoryNumber>10101012</CategoryNumber>
    <Category>Financing</Category>
    <CategoryPath>>> Activations >> Financing</CategoryPath>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-categories-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CategoryNumber>10101012</CategoryNumber>
    <Category>Financing</Category>
    <CategoryPath>>> Activations >> Financing</CategoryPath>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-categories-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CategoryNumber,Category,CategoryPath
10101012,Financing,>> Activations >> Financing</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-categories-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-stores-for-a-company' class='clickable-header top-level-header'>Getting Stores for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/Stores?CompanyId={CompanyId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
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
    <li class="active"><a href="#http-getting-stores-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-stores-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-stores-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-stores-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-stores-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-stores-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-stores-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-stores-for-a-company">
<pre id="http-code-getting-stores-for-a-company"><code class="language-http">GET /partner/Envysion/Stores?CompanyId=22575
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-stores-for-a-company">
<pre id="curl-code-getting-stores-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-stores-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-stores-for-a-company"><code class="language-csharp">static IRestResponse GettingStoresForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-stores-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-stores-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingStoresForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-stores-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-stores-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[store](#Store)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-stores-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-stores-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-stores-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-stores-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-stores-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-stores-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-stores-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "StoreID": 1,
        "City": "Phoenix",
        "Address": "27617 Commerce Center Dr",
        "StoreName": "Altera Kiosk"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-stores-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "StoreID": 1,
            "City": "Phoenix",
            "Address": "27617 Commerce Center Dr",
            "StoreName": "Altera Kiosk"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-stores-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1</StoreID>
    <City>Phoenix</City>
    <Address>27617 Commerce Center Dr</Address>
    <StoreName>Altera Kiosk</StoreName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-stores-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1</StoreID>
    <City>Phoenix</City>
    <Address>27617 Commerce Center Dr</Address>
    <StoreName>Altera Kiosk</StoreName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-stores-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>StoreID,City,Address,StoreName
1,Phoenix,27617 Commerce Center Dr,Altera Kiosk</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-stores-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-cash-ins-for-a-company' class='clickable-header top-level-header'>Getting Cash Ins for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/CashIns?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-cash-ins-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-cash-ins-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-cash-ins-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-cash-ins-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-cash-ins-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-cash-ins-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-cash-ins-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-cash-ins-for-a-company">
<pre id="http-code-getting-cash-ins-for-a-company"><code class="language-http">GET /partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-cash-ins-for-a-company">
<pre id="curl-code-getting-cash-ins-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-cash-ins-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-cash-ins-for-a-company"><code class="language-csharp">static IRestResponse GettingCashInsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-cash-ins-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-cash-ins-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCashInsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-cash-ins-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-cash-ins-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[cashin](#CashIn)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-cash-ins-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-cash-ins-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-cash-ins-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-cash-ins-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-cash-ins-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-cash-ins-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-cash-ins-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "amount": 0,
        "cash_in_id": 6882,
        "comment": "",
        "employee_id": 4,
        "employee_id_2": 4,
        "employee_name": "John Tester",
        "employee_name_2": "John Tester",
        "in_date": "2009-10-27T09:35:30.767",
        "store_id": 1,
        "terminal_id": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-cash-ins-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "amount": 0,
            "cash_in_id": 6882,
            "comment": "",
            "employee_id": 4,
            "employee_id_2": 4,
            "employee_name": "John Tester",
            "employee_name_2": "John Tester",
            "in_date": "2009-10-27T09:35:30.767",
            "store_id": 1,
            "terminal_id": 0
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-cash-ins-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <amount>0</amount>
    <cash_in_id>6882</cash_in_id>
    <comment></comment>
    <employee_id>4</employee_id>
    <employee_id_2>4</employee_id_2>
    <employee_name>John Tester</employee_name>
    <employee_name_2>John Tester</employee_name_2>
    <in_date>2009-10-27T09:35:30.767</in_date>
    <store_id>1</store_id>
    <terminal_id>0</terminal_id>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-cash-ins-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <amount>0</amount>
    <cash_in_id>6882</cash_in_id>
    <comment></comment>
    <employee_id>4</employee_id>
    <employee_id_2>4</employee_id_2>
    <employee_name>John Tester</employee_name>
    <employee_name_2>John Tester</employee_name_2>
    <in_date>2009-10-27T09:35:30.767</in_date>
    <store_id>1</store_id>
    <terminal_id>0</terminal_id>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-cash-ins-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>amount,cash_in_id,comment,employee_id,employee_id_2,employee_name,employee_name_2,in_date,store_id,terminal_id
0,6882,,4,4,John Tester,John Tester,2009-10-27T09:35:30.767,1,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-cash-ins-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-cash-outs-for-a-company' class='clickable-header top-level-header'>Getting Cash Outs for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/CashOuts?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-cash-outs-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-cash-outs-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-cash-outs-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-cash-outs-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-cash-outs-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-cash-outs-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-cash-outs-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-cash-outs-for-a-company">
<pre id="http-code-getting-cash-outs-for-a-company"><code class="language-http">GET /partner/Envysion/CashOuts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-cash-outs-for-a-company">
<pre id="curl-code-getting-cash-outs-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashOuts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-cash-outs-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-cash-outs-for-a-company"><code class="language-csharp">static IRestResponse GettingCashOutsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashOuts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-cash-outs-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-cash-outs-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCashOutsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashOuts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-cash-outs-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-cash-outs-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashOuts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[cashout](#CashOut)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-cash-outs-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-cash-outs-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-cash-outs-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-cash-outs-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-cash-outs-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-cash-outs-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-cash-outs-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "amount": 332478,
        "cash_out_id": 104253,
        "comment": "b",
        "employee_id": 2863,
        "employee_id_2": 2863,
        "employee_name": "iQmetrix Employee",
        "employee_name_2": "iQmetrix Employee",
        "out_date": "2011-04-13T11:35:23.32",
        "store_id": 1,
        "terminal_id": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-cash-outs-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "amount": 332478,
            "cash_out_id": 104253,
            "comment": "b",
            "employee_id": 2863,
            "employee_id_2": 2863,
            "employee_name": "iQmetrix Employee",
            "employee_name_2": "iQmetrix Employee",
            "out_date": "2011-04-13T11:35:23.32",
            "store_id": 1,
            "terminal_id": 0
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-cash-outs-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <amount>332478</amount>
    <cash_out_id>104253</cash_out_id>
    <comment>b</comment>
    <employee_id>2863</employee_id>
    <employee_id_2>2863</employee_id_2>
    <employee_name>iQmetrix Employee</employee_name>
    <employee_name_2>iQmetrix Employee</employee_name_2>
    <out_date>2011-04-13T11:35:23.32</out_date>
    <store_id>1</store_id>
    <terminal_id>0</terminal_id>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-cash-outs-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <amount>332478</amount>
    <cash_out_id>104253</cash_out_id>
    <comment>b</comment>
    <employee_id>2863</employee_id>
    <employee_id_2>2863</employee_id_2>
    <employee_name>iQmetrix Employee</employee_name>
    <employee_name_2>iQmetrix Employee</employee_name_2>
    <out_date>2011-04-13T11:35:23.32</out_date>
    <store_id>1</store_id>
    <terminal_id>0</terminal_id>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-cash-outs-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>amount,cash_out_id,comment,employee_id,employee_id_2,employee_name,employee_name_2,out_date,store_id,terminal_id
332478,104253,b,2863,2863,iQmetrix Employee,iQmetrix Employee,2011-04-13T11:35:23.32,1,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-cash-outs-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-original-sales-invoices-for-a-company' class='clickable-header top-level-header'>Getting Original Sales Invoices for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/OriginalSaleInvoice?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-original-sales-invoices-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-original-sales-invoices-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-original-sales-invoices-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-original-sales-invoices-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-original-sales-invoices-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-original-sales-invoices-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-original-sales-invoices-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-original-sales-invoices-for-a-company">
<pre id="http-code-getting-original-sales-invoices-for-a-company"><code class="language-http">GET /partner/Envysion/OriginalSaleInvoice?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-original-sales-invoices-for-a-company">
<pre id="curl-code-getting-original-sales-invoices-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSaleInvoice?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-original-sales-invoices-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-original-sales-invoices-for-a-company"><code class="language-csharp">static IRestResponse GettingOriginalSalesInvoicesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSaleInvoice?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-original-sales-invoices-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-original-sales-invoices-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingOriginalSalesInvoicesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSaleInvoice?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-original-sales-invoices-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-original-sales-invoices-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSaleInvoice?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[originalsalesinvoice](#OriginalSalesInvoice)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-original-sales-invoices-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-original-sales-invoices-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-original-sales-invoices-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-original-sales-invoices-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-original-sales-invoices-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-original-sales-invoices-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-original-sales-invoices-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "invoice_id": 1265314,
        "orig_date": "2013-04-09T08:23:51.93",
        "orig_employee_id": 45,
        "orig_employee_name": "iQmetrix Employee",
        "orig_invoice_id": 1265312,
        "orig_receipt": "00001IN1805",
        "orig_store_id": 1,
        "orig_terminal_id": 0,
        "orig_workstation": "null",
        "store_id": 1
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-original-sales-invoices-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "invoice_id": 1265314,
            "orig_date": "2013-04-09T08:23:51.93",
            "orig_employee_id": 45,
            "orig_employee_name": "iQmetrix Employee",
            "orig_invoice_id": 1265312,
            "orig_receipt": "00001IN1805",
            "orig_store_id": 1,
            "orig_terminal_id": 0,
            "orig_workstation": "null",
            "store_id": 1
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-original-sales-invoices-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <invoice_id>1265314</invoice_id>
    <orig_date>2013-04-09T08:23:51.93</orig_date>
    <orig_employee_id>45</orig_employee_id>
    <orig_employee_name>iQmetrix Employee</orig_employee_name>
    <orig_invoice_id>1265312</orig_invoice_id>
    <orig_receipt>00001IN1805</orig_receipt>
    <orig_store_id>1</orig_store_id>
    <orig_terminal_id>0</orig_terminal_id>
    <orig_workstation>null</orig_workstation>
    <store_id>1</store_id>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-original-sales-invoices-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <invoice_id>1265314</invoice_id>
    <orig_date>2013-04-09T08:23:51.93</orig_date>
    <orig_employee_id>45</orig_employee_id>
    <orig_employee_name>iQmetrix Employee</orig_employee_name>
    <orig_invoice_id>1265312</orig_invoice_id>
    <orig_receipt>00001IN1805</orig_receipt>
    <orig_store_id>1</orig_store_id>
    <orig_terminal_id>0</orig_terminal_id>
    <orig_workstation>null</orig_workstation>
    <store_id>1</store_id>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-original-sales-invoices-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>invoice_id,orig_date,orig_employee_id,orig_employee_name,orig_invoice_id,orig_receipt,orig_store_id,orig_terminal_id,orig_workstation,store_id
1265314,2013-04-09T08:23:51.93,45,iQmetrix Employee,1265312,00001IN1805,1,0,null,1</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-original-sales-invoices-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-punch-clock-entries-for-a-company' class='clickable-header top-level-header'>Getting Punch Clock Entries for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/PunchClock?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-punch-clock-entries-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-punch-clock-entries-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-punch-clock-entries-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-punch-clock-entries-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-punch-clock-entries-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-punch-clock-entries-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-punch-clock-entries-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-punch-clock-entries-for-a-company">
<pre id="http-code-getting-punch-clock-entries-for-a-company"><code class="language-http">GET /partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-punch-clock-entries-for-a-company">
<pre id="curl-code-getting-punch-clock-entries-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-punch-clock-entries-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-punch-clock-entries-for-a-company"><code class="language-csharp">static IRestResponse GettingPunchClockEntriesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-punch-clock-entries-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-punch-clock-entries-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPunchClockEntriesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-punch-clock-entries-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-punch-clock-entries-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[punchclockentry](#PunchClockEntry)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-punch-clock-entries-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-punch-clock-entries-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-punch-clock-entries-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-punch-clock-entries-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-punch-clock-entries-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-punch-clock-entries-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "employee_id": 2,
        "employee_name": "iQmetrix Employee",
        "employee_verified": true,
        "in_comment": "",
        "manager_verified": false,
        "out_comment": "Auto-Punch Out",
        "punch_id": 7341,
        "statue": 1,
        "store_id": 1,
        "time_in": "2010-01-04T08:00:00",
        "time_out": "2010-01-04T12:33:00"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-punch-clock-entries-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "employee_id": 2,
            "employee_name": "iQmetrix Employee",
            "employee_verified": true,
            "in_comment": "",
            "manager_verified": false,
            "out_comment": "Auto-Punch Out",
            "punch_id": 7341,
            "statue": 1,
            "store_id": 1,
            "time_in": "2010-01-04T08:00:00",
            "time_out": "2010-01-04T12:33:00"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-punch-clock-entries-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <employee_id>2</employee_id>
    <employee_name>iQmetrix Employee</employee_name>
    <employee_verified>true</employee_verified>
    <in_comment></in_comment>
    <manager_verified>false</manager_verified>
    <out_comment>Auto-Punch Out</out_comment>
    <punch_id>7341</punch_id>
    <statue>1</statue>
    <store_id>1</store_id>
    <time_in>2010-01-04T08:00:00</time_in>
    <time_out>2010-01-04T12:33:00</time_out>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-punch-clock-entries-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <employee_id>2</employee_id>
    <employee_name>iQmetrix Employee</employee_name>
    <employee_verified>true</employee_verified>
    <in_comment></in_comment>
    <manager_verified>false</manager_verified>
    <out_comment>Auto-Punch Out</out_comment>
    <punch_id>7341</punch_id>
    <statue>1</statue>
    <store_id>1</store_id>
    <time_in>2010-01-04T08:00:00</time_in>
    <time_out>2010-01-04T12:33:00</time_out>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-punch-clock-entries-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>employee_id,employee_name,employee_verified,in_comment,manager_verified,out_comment,punch_id,statue,store_id,time_in,time_out
2,iQmetrix Employee,true,,false,Auto-Punch Out,7341,1,1,2010-01-04T08:00:00,2010-01-04T12:33:00</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-punch-clock-entries-revisions-for-a-company' class='clickable-header top-level-header'>Getting Punch Clock Entries Revisions for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/PunchClockRevisions?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-punch-clock-entries-revisions-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-punch-clock-entries-revisions-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-punch-clock-entries-revisions-for-a-company">
<pre id="http-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-http">GET /partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-punch-clock-entries-revisions-for-a-company">
<pre id="curl-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-punch-clock-entries-revisions-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-csharp">static IRestResponse GettingPunchClockEntriesRevisionsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-punch-clock-entries-revisions-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPunchClockEntriesRevisionsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-punch-clock-entries-revisions-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[punchclockentryrevision](#PunchClockEntryRevision)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-punch-clock-entries-revisions-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "comment": "wrong location - entered correctly at corporate office",
        "employee": "Cathy Day",
        "employee_id": 107,
        "orig_time_in": "2010-01-04T06:12:52.79",
        "orig_time_out": "2010-01-04T15:06:36.677",
        "punch_id": 6276,
        "revised_by_employee": "Dayle Paulson",
        "revised_by_employee_id": 7,
        "revised_date": "2010-01-14T16:06:18.25",
        "revised_time_in": "null",
        "revised_time_out": "null",
        "revision_id": 1567,
        "revision_type": 3,
        "store_id": 1
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-punch-clock-entries-revisions-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "comment": "wrong location - entered correctly at corporate office",
            "employee": "Cathy Day",
            "employee_id": 107,
            "orig_time_in": "2010-01-04T06:12:52.79",
            "orig_time_out": "2010-01-04T15:06:36.677",
            "punch_id": 6276,
            "revised_by_employee": "Dayle Paulson",
            "revised_by_employee_id": 7,
            "revised_date": "2010-01-14T16:06:18.25",
            "revised_time_in": "null",
            "revised_time_out": "null",
            "revision_id": 1567,
            "revision_type": 3,
            "store_id": 1
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-punch-clock-entries-revisions-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <comment>wrong location - entered correctly at corporate office</comment>
    <employee>Cathy Day</employee>
    <employee_id>107</employee_id>
    <orig_time_in>2010-01-04T06:12:52.79</orig_time_in>
    <orig_time_out>2010-01-04T15:06:36.677</orig_time_out>
    <punch_id>6276</punch_id>
    <revised_by_employee>Dayle Paulson</revised_by_employee>
    <revised_by_employee_id>7</revised_by_employee_id>
    <revised_date>2010-01-14T16:06:18.25</revised_date>
    <revised_time_in>null</revised_time_in>
    <revised_time_out>null</revised_time_out>
    <revision_id>1567</revision_id>
    <revision_type>3</revision_type>
    <store_id>1</store_id>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-punch-clock-entries-revisions-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <comment>wrong location - entered correctly at corporate office</comment>
    <employee>Cathy Day</employee>
    <employee_id>107</employee_id>
    <orig_time_in>2010-01-04T06:12:52.79</orig_time_in>
    <orig_time_out>2010-01-04T15:06:36.677</orig_time_out>
    <punch_id>6276</punch_id>
    <revised_by_employee>Dayle Paulson</revised_by_employee>
    <revised_by_employee_id>7</revised_by_employee_id>
    <revised_date>2010-01-14T16:06:18.25</revised_date>
    <revised_time_in>null</revised_time_in>
    <revised_time_out>null</revised_time_out>
    <revision_id>1567</revision_id>
    <revision_type>3</revision_type>
    <store_id>1</store_id>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-punch-clock-entries-revisions-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>comment,employee,employee_id,orig_time_in,orig_time_out,punch_id,revised_by_employee,revised_by_employee_id,revised_date,revised_time_in,revised_time_out,revision_id,revision_type,store_id
wrong location - entered correctly at corporate office,Cathy Day,107,2010-01-04T06:12:52.79,2010-01-04T15:06:36.677,6276,Dayle Paulson,7,2010-01-14T16:06:18.25,null,null,1567,3,1</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-revisions-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-sale-invoice-coupons-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Coupons for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoiceCoupons?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-coupons-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-coupons-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-coupons-for-a-company">
<pre id="http-code-getting-sale-invoice-coupons-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-coupons-for-a-company">
<pre id="curl-code-getting-sale-invoice-coupons-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-coupons-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-coupons-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoiceCouponsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-coupons-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-coupons-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoiceCouponsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-coupons-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-coupons-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[saleinvoicecoupon](#SaleInvoiceCoupon)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-coupons-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Amount": 3.5,
        "DateCreated": "2012-06-11T13:13:51.74",
        "Description": "Normal Coupon",
        "InvoiceIDByStore": "00001IN1001",
        "SaleInvoiceID": 1263859,
        "StoreID1": 1
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-sale-invoice-coupons-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Amount": 3.5,
            "DateCreated": "2012-06-11T13:13:51.74",
            "Description": "Normal Coupon",
            "InvoiceIDByStore": "00001IN1001",
            "SaleInvoiceID": 1263859,
            "StoreID1": 1
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-coupons-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Amount>3.5</Amount>
    <DateCreated>2012-06-11T13:13:51.74</DateCreated>
    <Description>Normal Coupon</Description>
    <InvoiceIDByStore>00001IN1001</InvoiceIDByStore>
    <SaleInvoiceID>1263859</SaleInvoiceID>
    <StoreID1>1</StoreID1>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-sale-invoice-coupons-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Amount>3.5</Amount>
    <DateCreated>2012-06-11T13:13:51.74</DateCreated>
    <Description>Normal Coupon</Description>
    <InvoiceIDByStore>00001IN1001</InvoiceIDByStore>
    <SaleInvoiceID>1263859</SaleInvoiceID>
    <StoreID1>1</StoreID1>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-coupons-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Amount,DateCreated,Description,InvoiceIDByStore,SaleInvoiceID,StoreID1
3.5,2012-06-11T13:13:51.74,Normal Coupon,00001IN1001,1263859,1</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-coupons-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-sale-invoice-payments-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Payments for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoicePayments?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-payments-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-payments-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-payments-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-payments-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-payments-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-payments-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-payments-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-payments-for-a-company">
<pre id="http-code-getting-sale-invoice-payments-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-payments-for-a-company">
<pre id="curl-code-getting-sale-invoice-payments-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-payments-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-payments-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoicePaymentsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-payments-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-payments-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoicePaymentsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-payments-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-payments-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[saleinvoicepayment](#SaleInvoicePayment)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-payments-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-sale-invoice-payments-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-payments-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-sale-invoice-payments-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-payments-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-payments-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-payments-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "amount": 152.25,
        "change_amount": 0,
        "comments": "",
        "customer_id": "null",
        "customer_member_num": "null",
        "employee_id": 4,
        "employee_name": "John Tester",
        "employee_name_3": "John Tester",
        "invoice_id": 524371,
        "is_bill_payment": 0,
        "payment_type": "Cash",
        "receipt_number": "00001IN117",
        "store_id": 1,
        "terminal_id": 0,
        "trans_create_time": "2010-03-10T15:20:19.323",
        "trans_logged_time": "null",
        "workstation_name": "null"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-sale-invoice-payments-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "amount": 152.25,
            "change_amount": 0,
            "comments": "",
            "customer_id": "null",
            "customer_member_num": "null",
            "employee_id": 4,
            "employee_name": "John Tester",
            "employee_name_3": "John Tester",
            "invoice_id": 524371,
            "is_bill_payment": 0,
            "payment_type": "Cash",
            "receipt_number": "00001IN117",
            "store_id": 1,
            "terminal_id": 0,
            "trans_create_time": "2010-03-10T15:20:19.323",
            "trans_logged_time": "null",
            "workstation_name": "null"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-payments-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <amount>152.25</amount>
    <change_amount>0</change_amount>
    <comments></comments>
    <customer_id>null</customer_id>
    <customer_member_num>null</customer_member_num>
    <employee_id>4</employee_id>
    <employee_name>John Tester</employee_name>
    <employee_name_3>John Tester</employee_name_3>
    <invoice_id>524371</invoice_id>
    <is_bill_payment>0</is_bill_payment>
    <payment_type>Cash</payment_type>
    <receipt_number>00001IN117</receipt_number>
    <store_id>1</store_id>
    <terminal_id>0</terminal_id>
    <trans_create_time>2010-03-10T15:20:19.323</trans_create_time>
    <trans_logged_time>null</trans_logged_time>
    <workstation_name>null</workstation_name>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-sale-invoice-payments-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <amount>152.25</amount>
    <change_amount>0</change_amount>
    <comments></comments>
    <customer_id>null</customer_id>
    <customer_member_num>null</customer_member_num>
    <employee_id>4</employee_id>
    <employee_name>John Tester</employee_name>
    <employee_name_3>John Tester</employee_name_3>
    <invoice_id>524371</invoice_id>
    <is_bill_payment>0</is_bill_payment>
    <payment_type>Cash</payment_type>
    <receipt_number>00001IN117</receipt_number>
    <store_id>1</store_id>
    <terminal_id>0</terminal_id>
    <trans_create_time>2010-03-10T15:20:19.323</trans_create_time>
    <trans_logged_time>null</trans_logged_time>
    <workstation_name>null</workstation_name>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-payments-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>amount,change_amount,comments,customer_id,customer_member_num,employee_id,employee_name,employee_name_3,invoice_id,is_bill_payment,payment_type,receipt_number,store_id,terminal_id,trans_create_time,trans_logged_time,workstation_name
152.25,0,,null,null,4,John Tester,John Tester,524371,0,Cash,00001IN117,1,0,2010-03-10T15:20:19.323,null,null</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-payments-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-sale-invoice-products-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Products for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoiceProducts?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-products-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-products-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-products-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-products-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-products-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-products-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-products-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-products-for-a-company">
<pre id="http-code-getting-sale-invoice-products-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-products-for-a-company">
<pre id="curl-code-getting-sale-invoice-products-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-products-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-products-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoiceProductsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-products-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-products-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoiceProductsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-products-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-products-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[saleinvoiceproduct](#SaleInvoiceProduct)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-products-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-sale-invoice-products-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-products-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-sale-invoice-products-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-products-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-products-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-products-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Activation": 0,
        "AssociationNumber": 1,
        "category_number": "10101126",
        "category_path": ">> Accessories >> Antennas",
        "cost": 6.96,
        "Discount": 0,
        "employee_id": 2892,
        "employee_name": "iQmetrix Employee",
        "invoice_id": 1267257,
        "item_logged_time": "2015-03-03T07:40:29.493",
        "list_price": 1,
        "override_amt": 0,
        "Priority": 1,
        "product_description": "ADAPTER CABLE USB727/760- Test",
        "product_id": "ASANUN000001",
        "product_type": "Regular Global Product",
        "quantity": 1,
        "receipt_number": "00416IN4417",
        "Return": 0,
        "sale_price": 1,
        "store_id": 221,
        "terminal_id": 0,
        "workstation_name": "TEMP-W530-W8"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-sale-invoice-products-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Activation": 0,
            "AssociationNumber": 1,
            "category_number": "10101126",
            "category_path": ">> Accessories >> Antennas",
            "cost": 6.96,
            "Discount": 0,
            "employee_id": 2892,
            "employee_name": "iQmetrix Employee",
            "invoice_id": 1267257,
            "item_logged_time": "2015-03-03T07:40:29.493",
            "list_price": 1,
            "override_amt": 0,
            "Priority": 1,
            "product_description": "ADAPTER CABLE USB727/760- Test",
            "product_id": "ASANUN000001",
            "product_type": "Regular Global Product",
            "quantity": 1,
            "receipt_number": "00416IN4417",
            "Return": 0,
            "sale_price": 1,
            "store_id": 221,
            "terminal_id": 0,
            "workstation_name": "TEMP-W530-W8"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-products-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation>0</Activation>
    <AssociationNumber>1</AssociationNumber>
    <category_number>10101126</category_number>
    <category_path>>> Accessories >> Antennas</category_path>
    <cost>6.96</cost>
    <Discount>0</Discount>
    <employee_id>2892</employee_id>
    <employee_name>iQmetrix Employee</employee_name>
    <invoice_id>1267257</invoice_id>
    <item_logged_time>2015-03-03T07:40:29.493</item_logged_time>
    <list_price>1</list_price>
    <override_amt>0</override_amt>
    <Priority>1</Priority>
    <product_description>ADAPTER CABLE USB727/760- Test</product_description>
    <product_id>ASANUN000001</product_id>
    <product_type>Regular Global Product</product_type>
    <quantity>1</quantity>
    <receipt_number>00416IN4417</receipt_number>
    <Return>0</Return>
    <sale_price>1</sale_price>
    <store_id>221</store_id>
    <terminal_id>0</terminal_id>
    <workstation_name>TEMP-W530-W8</workstation_name>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-sale-invoice-products-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation>0</Activation>
    <AssociationNumber>1</AssociationNumber>
    <category_number>10101126</category_number>
    <category_path>>> Accessories >> Antennas</category_path>
    <cost>6.96</cost>
    <Discount>0</Discount>
    <employee_id>2892</employee_id>
    <employee_name>iQmetrix Employee</employee_name>
    <invoice_id>1267257</invoice_id>
    <item_logged_time>2015-03-03T07:40:29.493</item_logged_time>
    <list_price>1</list_price>
    <override_amt>0</override_amt>
    <Priority>1</Priority>
    <product_description>ADAPTER CABLE USB727/760- Test</product_description>
    <product_id>ASANUN000001</product_id>
    <product_type>Regular Global Product</product_type>
    <quantity>1</quantity>
    <receipt_number>00416IN4417</receipt_number>
    <Return>0</Return>
    <sale_price>1</sale_price>
    <store_id>221</store_id>
    <terminal_id>0</terminal_id>
    <workstation_name>TEMP-W530-W8</workstation_name>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-products-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Activation,AssociationNumber,category_number,category_path,cost,Discount,employee_id,employee_name,invoice_id,item_logged_time,list_price,override_amt,Priority,product_description,product_id,product_type,quantity,receipt_number,Return,sale_price,store_id,terminal_id,workstation_name
0,1,10101126,>> Accessories >> Antennas,6.96,0,2892,iQmetrix Employee,1267257,2015-03-03T07:40:29.493,1,0,1,ADAPTER CABLE USB727/760- Test,ASANUN000001,Regular Global Product,1,00416IN4417,0,1,221,0,TEMP-W530-W8</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-products-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-sale-invoice-taxes-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Taxes for a Company</h3>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoiceTaxes?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (Optional)  - Identifier for a store in RQ
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-taxes-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-taxes-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-taxes-for-a-company">
<pre id="http-code-getting-sale-invoice-taxes-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-taxes-for-a-company">
<pre id="curl-code-getting-sale-invoice-taxes-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-taxes-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-taxes-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoiceTaxesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-taxes-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-taxes-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoiceTaxesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-taxes-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-taxes-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&StoreId=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[saleinvoicetax](#SaleInvoiceTax)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-taxes-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "DateCreated": "2010-05-28T15:55:38.78",
        "InvoiceIDByStore": "00001IN193",
        "SaleInvoiceID": 812306,
        "StoreID1": 1,
        "Tax": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-sale-invoice-taxes-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "DateCreated": "2010-05-28T15:55:38.78",
            "InvoiceIDByStore": "00001IN193",
            "SaleInvoiceID": 812306,
            "StoreID1": 1,
            "Tax": 0
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-taxes-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2010-05-28T15:55:38.78</DateCreated>
    <InvoiceIDByStore>00001IN193</InvoiceIDByStore>
    <SaleInvoiceID>812306</SaleInvoiceID>
    <StoreID1>1</StoreID1>
    <Tax>0</Tax>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-sale-invoice-taxes-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DateCreated>2010-05-28T15:55:38.78</DateCreated>
    <InvoiceIDByStore>00001IN193</InvoiceIDByStore>
    <SaleInvoiceID>812306</SaleInvoiceID>
    <StoreID1>1</StoreID1>
    <Tax>0</Tax>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-taxes-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>DateCreated,InvoiceIDByStore,SaleInvoiceID,StoreID1,Tax
2010-05-28T15:55:38.78,00001IN193,812306,1,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-taxes-for-a-company">
            
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

    
