---
title:  Customized Reports
permalink: /api/Customized-Reports/
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

## SalesExtendedDetailReportData

```json
{
	"ChannelName": "English Channel",
	"Cost": "14.5",
	"CustomerID": "85259",
	"CustomerName": "John Tester",
	"DateCreated": "2016-06-07T16:17:36.643",
	"EmployeeID": "3302",
	"EmployeeName": "iQmetrix Employee",
	"InvoiceNumber": "77123IN1",
	"LineID": "1",
	"Price": "29.99",
	"ProductSKU": "ASLCAP000089",
	"Quantity": "1",
	"RQPriority": "1",
	"SerialNumber": "2222222",
	"StoreID": "6680",
	"StoreName": "100: Pair Up Wireless LLC - Garland"
}
```

| Name | Description |
|:-----|:------------|
| ChannelName (`NVARCHAR(MAX)`) | Name of a Channel in RQ | 
| Cost (`MONEY`) | Cost | 
| CustomerID (`INTEGER`) | Identifier of a customer in RQ | 
| CustomerName (`VARCHAR(101)`) | Name of a customer in RQ | 
| DateCreated (`DateTime`) | Sale date | 
| EmployeeID (`INTEGER`) | Identifier of an employee in RQ | 
| EmployeeName (`VARCHAR(51)`) | Name of an employee in RQ | 
| InvoiceNumber (`VARCHAR(14)`) | Invoice number | 
| LineID (`BIGINT`) |  | 
| Price (`MONEY`) | Price | 
| ProductSKU (`VARCHAR(32)`) | Product SKU | 
| Quantity (`INTEGER`) | Quantity | 
| RQPriority (`INTEGER`) |  | 
| SerialNumber (`VARCHAR (100) `) | Serial number | 
| StoreID (`INTEGER`) | Identifier for a store in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Name of a store in RQ | 


## SecurityAuditReportPivotData

This resource will include every security role in your RQ database.

```json
{
	"ModuleName": "A/R: A/R Master List",
	"SecurityRoleName": "No Access"
}
```

| Name | Description |
|:-----|:------------|
| ModuleName (`VARCHAR(MAX)`) | Name of a security module in RQ | 
| SecurityRoleName (`VARCHAR(MAX)`) | Access for the given security role for this security module | 


## SecurityAuditReportData

```json
{
	"RoleDescription": "Administrator",
	"ModuleName": "Inventory: Starting Inventory Count Import",
	"SecurityLevel": "Full Access"
}
```

| Name | Description |
|:-----|:------------|
| RoleDescription (`NVARCHAR(MAX)`) | Name of a role in RQ | 
| ModuleName (`VARCHAR(MAX)`) | Name of a security module in RQ | 
| SecurityLevel (`VARCHAR(MAX)`) | Security level for the module (ModuleName) for a security role (RoleDescription) | 






## Requests



<h3 id='sales-extended-detail-report' class='clickable-header top-level-header'>Sales Extended Detail Report</h3>



<h4>Request</h4>

<pre>
GET /customizedreports/SalesExtendedDetailReport?StartDate={StartDate}&StopDate={StopDate}&Auth={Auth}&Response={Response}
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
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-sales-extended-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-sales-extended-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-sales-extended-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-sales-extended-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-sales-extended-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-sales-extended-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-sales-extended-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-sales-extended-detail-report">
<pre id="http-code-sales-extended-detail-report"><code class="language-http">GET /customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-sales-extended-detail-report">
<pre id="curl-code-sales-extended-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-sales-extended-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-sales-extended-detail-report"><code class="language-csharp">static IRestResponse SalesExtendedDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-sales-extended-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-sales-extended-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SalesExtendedDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-sales-extended-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-sales-extended-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[salesextendeddetailreportdata](#SalesExtendedDetailReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-sales-extended-detail-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-sales-extended-detail-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-sales-extended-detail-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-sales-extended-detail-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-sales-extended-detail-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-sales-extended-detail-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-sales-extended-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ChannelName": "English Channel",
        "Cost": 14.5,
        "CustomerID": 85259,
        "CustomerName": "John Tester",
        "DateCreated": "2016-06-07T16:17:36.643",
        "EmployeeID": 3302,
        "EmployeeName": "iQmetrix Employee",
        "InvoiceNumber": "77123IN1",
        "LineID": 1,
        "Price": 29.99,
        "ProductSKU": "ASLCAP000089",
        "Quantity": 1,
        "RQPriority": 1,
        "SerialNumber": "2222222",
        "StoreID": 6680,
        "StoreName": "100: Pair Up Wireless LLC - Garland"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-sales-extended-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ChannelName": "English Channel",
            "Cost": 14.5,
            "CustomerID": 85259,
            "CustomerName": "John Tester",
            "DateCreated": "2016-06-07T16:17:36.643",
            "EmployeeID": 3302,
            "EmployeeName": "iQmetrix Employee",
            "InvoiceNumber": "77123IN1",
            "LineID": 1,
            "Price": 29.99,
            "ProductSKU": "ASLCAP000089",
            "Quantity": 1,
            "RQPriority": 1,
            "SerialNumber": "2222222",
            "StoreID": 6680,
            "StoreName": "100: Pair Up Wireless LLC - Garland"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-sales-extended-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ChannelName>English Channel</ChannelName>
    <Cost>14.5</Cost>
    <CustomerID>85259</CustomerID>
    <CustomerName>John Tester</CustomerName>
    <DateCreated>2016-06-07T16:17:36.643</DateCreated>
    <EmployeeID>3302</EmployeeID>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <InvoiceNumber>77123IN1</InvoiceNumber>
    <LineID>1</LineID>
    <Price>29.99</Price>
    <ProductSKU>ASLCAP000089</ProductSKU>
    <Quantity>1</Quantity>
    <RQPriority>1</RQPriority>
    <SerialNumber>2222222</SerialNumber>
    <StoreID>6680</StoreID>
    <StoreName>100: Pair Up Wireless LLC - Garland</StoreName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-sales-extended-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ChannelName>English Channel</ChannelName>
    <Cost>14.5</Cost>
    <CustomerID>85259</CustomerID>
    <CustomerName>John Tester</CustomerName>
    <DateCreated>2016-06-07T16:17:36.643</DateCreated>
    <EmployeeID>3302</EmployeeID>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <InvoiceNumber>77123IN1</InvoiceNumber>
    <LineID>1</LineID>
    <Price>29.99</Price>
    <ProductSKU>ASLCAP000089</ProductSKU>
    <Quantity>1</Quantity>
    <RQPriority>1</RQPriority>
    <SerialNumber>2222222</SerialNumber>
    <StoreID>6680</StoreID>
    <StoreName>100: Pair Up Wireless LLC - Garland</StoreName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-sales-extended-detail-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ChannelName,Cost,CustomerID,CustomerName,DateCreated,EmployeeID,EmployeeName,InvoiceNumber,LineID,Price,ProductSKU,Quantity,RQPriority,SerialNumber,StoreID,StoreName
English Channel,14.5,85259,John Tester,2016-06-07T16:17:36.643,3302,iQmetrix Employee,77123IN1,1,29.99,ASLCAP000089,1,1,2222222,6680,100: Pair Up Wireless LLC - Garland</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-sales-extended-detail-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-security-audit-report' class='clickable-header top-level-header'>Getting the Security Audit Report</h3>


This report allows you to see all security role, module and level combinations that have been configured in RQ.

For more information on configuring security in RQ, see [Setting Security Roles and Descriptions](https://support.iqmetrix.com/hc/en-us/articles/228837967-Settings-Security-Roles-and-Descriptions).

Note that this report has multiple responses, depending on the Pivot value specified. 

| Data | Pivot | Response |
|:-----|:------|:---------|
| A resource for each security module in RQ | true | <a href='http://developers.iqmetrix.com/api/Customized-Reports/#securityauditreportpivotdata'>SecurityAuditReportPivotData</a> |
| A resource for each security role/module combination in RQ | false | <a href='http://developers.iqmetrix.com/api/Customized-Reports/#securityauditreportdata'>SecurityAuditReportData</a> |

<h4>Request</h4>

<pre>
GET /customizedreports/SecurityAuditReport?Pivot={Pivot}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Pivot</code> (<strong>Required</strong>)  - Acceptable values include true to return <a href='http://developers.iqmetrix.com/api/Customized-Reports/#securityauditreportpivotdata'>SecurityAuditReportPivotData</a> or false to return <a href='http://developers.iqmetrix.com/api/Customized-Reports/#securityauditreportdata'>SecurityAuditReportData</a>
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
    <li class="active"><a href="#http-getting-the-security-audit-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-security-audit-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-security-audit-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-security-audit-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-security-audit-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-security-audit-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-security-audit-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-security-audit-report">
<pre id="http-code-getting-the-security-audit-report"><code class="language-http">GET /customizedreports/SecurityAuditReport?Pivot=false
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-security-audit-report">
<pre id="curl-code-getting-the-security-audit-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/customizedreports/SecurityAuditReport?Pivot=false"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-security-audit-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-security-audit-report"><code class="language-csharp">static IRestResponse GettingTheSecurityAuditReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/customizedreports/SecurityAuditReport?Pivot=false");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-security-audit-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-security-audit-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSecurityAuditReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/customizedreports/SecurityAuditReport?Pivot=false");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-security-audit-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-security-audit-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/customizedreports/SecurityAuditReport?Pivot=false', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[securityauditreportdata](#SecurityAuditReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-security-audit-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-security-audit-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-security-audit-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-security-audit-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-security-audit-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-security-audit-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-security-audit-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "RoleDescription": "Administrator",
        "ModuleName": "Inventory: Starting Inventory Count Import",
        "SecurityLevel": "Full Access"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-security-audit-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "RoleDescription": "Administrator",
            "ModuleName": "Inventory: Starting Inventory Count Import",
            "SecurityLevel": "Full Access"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-security-audit-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <RoleDescription>Administrator</RoleDescription>
    <ModuleName>Inventory: Starting Inventory Count Import</ModuleName>
    <SecurityLevel>Full Access</SecurityLevel>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-security-audit-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <RoleDescription>Administrator</RoleDescription>
    <ModuleName>Inventory: Starting Inventory Count Import</ModuleName>
    <SecurityLevel>Full Access</SecurityLevel>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-security-audit-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>RoleDescription,ModuleName,SecurityLevel
Administrator,Inventory: Starting Inventory Count Import,Full Access</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-security-audit-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


    
    

    
    
