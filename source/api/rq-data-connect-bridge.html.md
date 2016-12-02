---
title:  RQ Data Connect Bridge
permalink: /api/RQ-Data-Connect-Bridge/
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


RQ Data Connect Bridge is intended to be an alternative to database replication, and allows you to retrieve tables from your RQ database.

For examples of how RQ Data Connect Bridge can be used, see [Extended Examples](#extended-examples).

#### Authentication

RQ Data Connect Bridge supports many different methods of authentication, see {{AuthenticationOptions}}.     


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

## TableColumn

Each table in the latest version of RQ will have a TableColumn resource for each of its columns

```json
{
	"TableName": "iQclerk_ARPaymentInvoicesAndPayments",
	"Column_Name": "ReferenceNumber",
	"Length": "30",
	"ORDINAL_POSITION": "8",
	"Type": "varchar"
}
```

| Name | Description |
|:-----|:------------|
| TableName (`String`) | Name of the table | 
| Column_Name (`String`) | Name of the column | 
| Length (`Integer`) | Maximum acceptable input size, where applicable | 
| ORDINAL_POSITION (`Integer`) | Position of the column in the table | 
| Type (`String`) | Database type | 


## Delta

A resource representing changes to a table in the latest version of RQ.

```json
{
	"DeltaCount": "68",
	"DeltaTimeSec": "28704556",
	"Table": "CarrierIntegrationCustomerHandsets"
}
```

| Name | Description |
|:-----|:------------|
| DeltaCount (`Integer`) | Number of rows that have changes | 
| DeltaTimeSec (`Integer`) |  | 
| Table (`String`) | Name of a table in the latest version of RQ | 







## Requests



<h3 id='getting-table-schemas-in-latest-rq' class='clickable-header top-level-header'>Getting Table Schemas in Latest RQ</h3>

This request will return a list of the columns in each table in the latest version of RQ.  


<h4>Request</h4>

<pre>
GET /bridge/current/schema?Auth={Auth}&Response={Response}
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
    <li class="active"><a href="#http-getting-table-schemas-in-latest-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-table-schemas-in-latest-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-table-schemas-in-latest-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-table-schemas-in-latest-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-table-schemas-in-latest-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-table-schemas-in-latest-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-table-schemas-in-latest-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-table-schemas-in-latest-rq">
<pre id="http-code-getting-table-schemas-in-latest-rq"><code class="language-http">GET /bridge/current/schema
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-table-schemas-in-latest-rq">
<pre id="curl-code-getting-table-schemas-in-latest-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-table-schemas-in-latest-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-table-schemas-in-latest-rq"><code class="language-csharp">static IRestResponse GettingTableSchemasInLatestRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-table-schemas-in-latest-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-table-schemas-in-latest-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTableSchemasInLatestRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-table-schemas-in-latest-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-table-schemas-in-latest-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[tablecolumn](#TableColumn)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-table-schemas-in-latest-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-table-schemas-in-latest-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-table-schemas-in-latest-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-table-schemas-in-latest-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-table-schemas-in-latest-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-table-schemas-in-latest-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-table-schemas-in-latest-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "TableName": "iQclerk_ARPaymentInvoicesAndPayments",
        "Column_Name": "ReferenceNumber",
        "Length": 30,
        "ORDINAL_POSITION": 8,
        "Type": "varchar"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-table-schemas-in-latest-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "TableName": "iQclerk_ARPaymentInvoicesAndPayments",
            "Column_Name": "ReferenceNumber",
            "Length": 30,
            "ORDINAL_POSITION": 8,
            "Type": "varchar"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-table-schemas-in-latest-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <TableName>iQclerk_ARPaymentInvoicesAndPayments</TableName>
    <Column_Name>ReferenceNumber</Column_Name>
    <Length>30</Length>
    <ORDINAL_POSITION>8</ORDINAL_POSITION>
    <Type>varchar</Type>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-table-schemas-in-latest-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <TableName>iQclerk_ARPaymentInvoicesAndPayments</TableName>
    <Column_Name>ReferenceNumber</Column_Name>
    <Length>30</Length>
    <ORDINAL_POSITION>8</ORDINAL_POSITION>
    <Type>varchar</Type>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-table-schemas-in-latest-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>TableName,Column_Name,Length,ORDINAL_POSITION,Type
iQclerk_ARPaymentInvoicesAndPayments,ReferenceNumber,30,8,varchar</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-table-schemas-in-latest-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-rows-from-a-table-in-rq' class='clickable-header top-level-header'>Getting Rows from a Table in RQ</h3>

This request will return the contents of a table in the latest version of RQ. The response to this request will match the appropriate table schema defined in [Getting Table Schemas in Latest RQ](#getting-table-schemas-in-latest-rq).

<h4>Request</h4>

<pre>
GET /bridge/current/data?Table={TableName}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>TableName</code> (<strong>Required</strong>)  - Name of a Table in RQ, for a complete list see <a href="#getting-schema-for-the-latest-version-of-rq">Getting Schema for the Latest Version of RQ</a>
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
    <li class="active"><a href="#http-getting-rows-from-a-table-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-rows-from-a-table-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-rows-from-a-table-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-rows-from-a-table-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-rows-from-a-table-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-rows-from-a-table-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-rows-from-a-table-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-rows-from-a-table-in-rq">
<pre id="http-code-getting-rows-from-a-table-in-rq"><code class="language-http">GET /bridge/current/data?Table=CarrierIntegrationCustomerHandsets
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-rows-from-a-table-in-rq">
<pre id="curl-code-getting-rows-from-a-table-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-rows-from-a-table-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-rows-from-a-table-in-rq"><code class="language-csharp">static IRestResponse GettingRowsFromATableInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-rows-from-a-table-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-rows-from-a-table-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingRowsFromATableInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-rows-from-a-table-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-rows-from-a-table-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-rows-from-a-table-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-rows-from-a-table-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-rows-from-a-table-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-rows-from-a-table-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-rows-from-a-table-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-rows-from-a-table-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-rows-from-a-table-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CarrierCustomerHandsetID": "7f1b91e2-9692-4efe-923b-7bc90720ccb8",
        "CarrierCustomerID": "62c24270-503a-4de4-9d75-416c92a748d7",
        "SaleInvoiceID": -1,
        "StoreID": 3,
        "PhoneMake": "null",
        "PhoneModel": "Unknown Device",
        "ESN": "",
        "IMEI": "354493046773064",
        "CustomTelephoneNumber": "8186368202",
        "BAN": "null",
        "SIM": "89014103254674079938",
        "MDN": "null",
        "ActivationDate": "2014-10-01T15:00:12.05",
        "ExpiryDate": "2014-10-01T15:00:12.05",
        "RateORServicePlanName": "null",
        "RateORServicePlanDescription": "null",
        "RateORServicePlanInclusions": "null",
        "RateORServicePlanSOC": "FN2NM0A60",
        "RateORServicePlanTerm": "null",
        "RateORServicePlanFeatures": "null",
        "RateORServicePlanContractTerm": "2",
        "SalesRepName": "null",
        "DealerName": "HJG6E",
        "BillingCycle": "null",
        "BillingCycleDate": 17,
        "DepositAmount": 0,
        "BillingCode": "",
        "IsActivatedIQ": 0,
        "RateORServicePlan2SOC": "null",
        "RateORServicePlan2Description": "null",
        "DealerCode": "null",
        "CompanyCode": "null",
        "PortInNumber": "null",
        "DepositIndicator": "No Deposit",
        "FlowType": "null",
        "ActivationTermType": "null",
        "IsBYOD": null,
        "Priority": null,
        "CarrierServiceResource": "null",
        "RowThumbprint": "1c1103c2-db83-4df9-a86d-1b649bf304ee",
        "RowInserted": "2014-10-01T15:00:12.05",
        "RowUpdated": "2014-10-01T15:00:12.05",
        "Operation": "Inserted"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-rows-from-a-table-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CarrierCustomerHandsetID": "7f1b91e2-9692-4efe-923b-7bc90720ccb8",
            "CarrierCustomerID": "62c24270-503a-4de4-9d75-416c92a748d7",
            "SaleInvoiceID": -1,
            "StoreID": 3,
            "PhoneMake": "null",
            "PhoneModel": "Unknown Device",
            "ESN": "",
            "IMEI": "354493046773064",
            "CustomTelephoneNumber": "8186368202",
            "BAN": "null",
            "SIM": "89014103254674079938",
            "MDN": "null",
            "ActivationDate": "2014-10-01T15:00:12.05",
            "ExpiryDate": "2014-10-01T15:00:12.05",
            "RateORServicePlanName": "null",
            "RateORServicePlanDescription": "null",
            "RateORServicePlanInclusions": "null",
            "RateORServicePlanSOC": "FN2NM0A60",
            "RateORServicePlanTerm": "null",
            "RateORServicePlanFeatures": "null",
            "RateORServicePlanContractTerm": "2",
            "SalesRepName": "null",
            "DealerName": "HJG6E",
            "BillingCycle": "null",
            "BillingCycleDate": 17,
            "DepositAmount": 0,
            "BillingCode": "",
            "IsActivatedIQ": 0,
            "RateORServicePlan2SOC": "null",
            "RateORServicePlan2Description": "null",
            "DealerCode": "null",
            "CompanyCode": "null",
            "PortInNumber": "null",
            "DepositIndicator": "No Deposit",
            "FlowType": "null",
            "ActivationTermType": "null",
            "IsBYOD": null,
            "Priority": null,
            "CarrierServiceResource": "null",
            "RowThumbprint": "1c1103c2-db83-4df9-a86d-1b649bf304ee",
            "RowInserted": "2014-10-01T15:00:12.05",
            "RowUpdated": "2014-10-01T15:00:12.05",
            "Operation": "Inserted"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-rows-from-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CarrierCustomerHandsetID>7f1b91e2-9692-4efe-923b-7bc90720ccb8</CarrierCustomerHandsetID>
    <CarrierCustomerID>62c24270-503a-4de4-9d75-416c92a748d7</CarrierCustomerID>
    <SaleInvoiceID>-1</SaleInvoiceID>
    <StoreID>3</StoreID>
    <PhoneMake>null</PhoneMake>
    <PhoneModel>Unknown Device</PhoneModel>
    <ESN></ESN>
    <IMEI>354493046773064</IMEI>
    <CustomTelephoneNumber>8186368202</CustomTelephoneNumber>
    <BAN>null</BAN>
    <SIM>89014103254674079938</SIM>
    <MDN>null</MDN>
    <ActivationDate>2014-10-01T15:00:12.05</ActivationDate>
    <ExpiryDate>2014-10-01T15:00:12.05</ExpiryDate>
    <RateORServicePlanName>null</RateORServicePlanName>
    <RateORServicePlanDescription>null</RateORServicePlanDescription>
    <RateORServicePlanInclusions>null</RateORServicePlanInclusions>
    <RateORServicePlanSOC>FN2NM0A60</RateORServicePlanSOC>
    <RateORServicePlanTerm>null</RateORServicePlanTerm>
    <RateORServicePlanFeatures>null</RateORServicePlanFeatures>
    <RateORServicePlanContractTerm>2</RateORServicePlanContractTerm>
    <SalesRepName>null</SalesRepName>
    <DealerName>HJG6E</DealerName>
    <BillingCycle>null</BillingCycle>
    <BillingCycleDate>17</BillingCycleDate>
    <DepositAmount>0.00</DepositAmount>
    <BillingCode></BillingCode>
    <IsActivatedIQ>0</IsActivatedIQ>
    <RateORServicePlan2SOC>null</RateORServicePlan2SOC>
    <RateORServicePlan2Description>null</RateORServicePlan2Description>
    <DealerCode>null</DealerCode>
    <CompanyCode>null</CompanyCode>
    <PortInNumber>null</PortInNumber>
    <DepositIndicator>No Deposit</DepositIndicator>
    <FlowType>null</FlowType>
    <ActivationTermType>null</ActivationTermType>
    <IsBYOD>null</IsBYOD>
    <Priority>null</Priority>
    <CarrierServiceResource>null</CarrierServiceResource>
    <RowThumbprint>1c1103c2-db83-4df9-a86d-1b649bf304ee</RowThumbprint>
    <RowInserted>2014-10-01T15:00:12.05</RowInserted>
    <RowUpdated>2014-10-01T15:00:12.05</RowUpdated>
    <Operation>Inserted</Operation>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-rows-from-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CarrierCustomerHandsetID>7f1b91e2-9692-4efe-923b-7bc90720ccb8</CarrierCustomerHandsetID>
    <CarrierCustomerID>62c24270-503a-4de4-9d75-416c92a748d7</CarrierCustomerID>
    <SaleInvoiceID>-1</SaleInvoiceID>
    <StoreID>3</StoreID>
    <PhoneMake>null</PhoneMake>
    <PhoneModel>Unknown Device</PhoneModel>
    <ESN></ESN>
    <IMEI>354493046773064</IMEI>
    <CustomTelephoneNumber>8186368202</CustomTelephoneNumber>
    <BAN>null</BAN>
    <SIM>89014103254674079938</SIM>
    <MDN>null</MDN>
    <ActivationDate>2014-10-01T15:00:12.05</ActivationDate>
    <ExpiryDate>2014-10-01T15:00:12.05</ExpiryDate>
    <RateORServicePlanName>null</RateORServicePlanName>
    <RateORServicePlanDescription>null</RateORServicePlanDescription>
    <RateORServicePlanInclusions>null</RateORServicePlanInclusions>
    <RateORServicePlanSOC>FN2NM0A60</RateORServicePlanSOC>
    <RateORServicePlanTerm>null</RateORServicePlanTerm>
    <RateORServicePlanFeatures>null</RateORServicePlanFeatures>
    <RateORServicePlanContractTerm>2</RateORServicePlanContractTerm>
    <SalesRepName>null</SalesRepName>
    <DealerName>HJG6E</DealerName>
    <BillingCycle>null</BillingCycle>
    <BillingCycleDate>17</BillingCycleDate>
    <DepositAmount>0.00</DepositAmount>
    <BillingCode></BillingCode>
    <IsActivatedIQ>0</IsActivatedIQ>
    <RateORServicePlan2SOC>null</RateORServicePlan2SOC>
    <RateORServicePlan2Description>null</RateORServicePlan2Description>
    <DealerCode>null</DealerCode>
    <CompanyCode>null</CompanyCode>
    <PortInNumber>null</PortInNumber>
    <DepositIndicator>No Deposit</DepositIndicator>
    <FlowType>null</FlowType>
    <ActivationTermType>null</ActivationTermType>
    <IsBYOD>null</IsBYOD>
    <Priority>null</Priority>
    <CarrierServiceResource>null</CarrierServiceResource>
    <RowThumbprint>1c1103c2-db83-4df9-a86d-1b649bf304ee</RowThumbprint>
    <RowInserted>2014-10-01T15:00:12.05</RowInserted>
    <RowUpdated>2014-10-01T15:00:12.05</RowUpdated>
    <Operation>Inserted</Operation>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-rows-from-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CarrierCustomerHandsetID,CarrierCustomerID,SaleInvoiceID,StoreID,PhoneMake,PhoneModel,ESN,IMEI,CustomTelephoneNumber,BAN,SIM,MDN,ActivationDate,ExpiryDate,RateORServicePlanName,RateORServicePlanDescription,RateORServicePlanInclusions,RateORServicePlanSOC,RateORServicePlanTerm,RateORServicePlanFeatures,RateORServicePlanContractTerm,SalesRepName,DealerName,BillingCycle,BillingCycleDate,DepositAmount,BillingCode,IsActivatedIQ,RateORServicePlan2SOC,RateORServicePlan2Description,DealerCode,CompanyCode,PortInNumber,DepositIndicator,FlowType,ActivationTermType,IsBYOD,Priority,CarrierServiceResource,RowThumbprint,RowInserted,RowUpdated,Operation
7f1b91e2-9692-4efe-923b-7bc90720ccb8,62c24270-503a-4de4-9d75-416c92a748d7,-1,3,null,Unknown Device,,354493046773064,8186368202,null,89014103254674079938,null,2014-10-01T15:00:12.05,2014-10-01T15:00:12.05,null,null,null,FN2NM0A60,null,null,2,null,HJG6E,null,17,0.00,,0,null,null,null,null,null,No Deposit,null,null,null,null,null,1c1103c2-db83-4df9-a86d-1b649bf304ee,2014-10-01T15:00:12.05,2014-10-01T15:00:12.05,Inserted</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-rows-from-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-changes-to-a-table-in-rq' class='clickable-header top-level-header'>Getting Changes to a Table in RQ</h3>

This request will return a summary of the changes or "deltas" in a table in the latest version of RQ since a specified date.

<h4>Request</h4>

<pre>
GET /bridge/current/delta?Table={TableName}&RowDateTime={RowDateTime}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>TableName</code> (<strong>Required</strong>)  - Name of a Table in RQ, for a complete list see <a href="#getting-schema-for-the-latest-version-of-rq">Getting Schema for the Latest Version of RQ</a>
    </li>
    
    <li>
        <code>RowDateTime</code> (<strong>Required</strong>)  - Changes since this date will be returned in the response
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
    <li class="active"><a href="#http-getting-changes-to-a-table-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-changes-to-a-table-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-changes-to-a-table-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-changes-to-a-table-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-changes-to-a-table-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-changes-to-a-table-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-changes-to-a-table-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-changes-to-a-table-in-rq">
<pre id="http-code-getting-changes-to-a-table-in-rq"><code class="language-http">GET /bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-changes-to-a-table-in-rq">
<pre id="curl-code-getting-changes-to-a-table-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-changes-to-a-table-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-changes-to-a-table-in-rq"><code class="language-csharp">static IRestResponse GettingChangesToATableInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-changes-to-a-table-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-changes-to-a-table-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingChangesToATableInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-changes-to-a-table-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-changes-to-a-table-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[delta](#Delta)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-changes-to-a-table-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-changes-to-a-table-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-changes-to-a-table-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-changes-to-a-table-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-changes-to-a-table-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-changes-to-a-table-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-changes-to-a-table-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "DeltaCount": 68,
        "DeltaTimeSec": 28704556,
        "Table": "CarrierIntegrationCustomerHandsets"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-changes-to-a-table-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "DeltaCount": 68,
            "DeltaTimeSec": 28704556,
            "Table": "CarrierIntegrationCustomerHandsets"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-changes-to-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DeltaCount>68</DeltaCount>
    <DeltaTimeSec>28704556</DeltaTimeSec>
    <Table>CarrierIntegrationCustomerHandsets</Table>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-changes-to-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DeltaCount>68</DeltaCount>
    <DeltaTimeSec>28704556</DeltaTimeSec>
    <Table>CarrierIntegrationCustomerHandsets</Table>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-changes-to-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>DeltaCount,DeltaTimeSec,Table
68,28704556,CarrierIntegrationCustomerHandsets</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-changes-to-a-table-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


    
    

    
    

    
<h2 id="extended-examples" class="clickable-header top-level-header">Extended Examples</h2>


These examples are intended to illustrate some suggested uses of RQ Data Connect Bridge.

### Data Replication

In this example, we will get a list of time off requests made since January 1st, 2016, which are stored in the table iQplanner_HR_RequestedTimeOff.

First we must see if there is any data using [Getting Changes to a Table in RQ](#getting-changes-to-a-table-in-rq). This will return a list of "Deltas" or changes to the table since a specified date.

##### Example Request

```
GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=iQplanner_HR_RequestedTimeOff&RowDateTime=2016-01-01T00:00:00.000Z
Authorization: Bearer (Access Token)
```

##### Example Response

```
[
  {
    "Table": "iQplanner_HR_RequestedTimeOff",
    "DeltaCount": 26,
    "DeltaTimeSec": 10844356
  }
]
```

From the response we can see there have been changes to 26 rows in the iQplanner_HR_RequestedTimeOff table since January 1st, 2016.

Next we must ensure the application we are building knows what the iQplanner_HR_RequestedTimeOff table looks like.

This data can be obtained using the [Getting Table Schemas in Latest RQ](#getting-table-schemas-in-latest-rq).

##### Example Request

```
GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema
Authorization: Bearer (Access Token)
```

##### Example Response

```
[
  ...,
  {
    "TableName": "iQplanner_HR_RequestedTimeOff",
    "Column_Name": "RequestID",
    "Type": "int",
    "Length": null,
    "ORDINAL_POSITION": 1
  },
  {
    "TableName": "iQplanner_HR_RequestedTimeOff",
    "Column_Name": "EmployeeID",
    "Type": "int",
    "Length": null,
    "ORDINAL_POSITION": 2
  },
  ...
]
```

From the response we can see the format of the data that will be returned in the next request, using [Getting Rows from a Table in RQ](#getting-rows-from-a-table-in-rq)

##### Example Request

```
GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=iQplanner_HR_RequestedTimeOff
Authorization: Bearer (Access Token)
```

##### Example Response

```
[
  {
    "RequestID": 39,
    "EmployeeID": 31,
    "DateFrom": "2011-11-05T08:30:00",
    "DateTo": "2011-11-05T17:30:00",
    "Type": 1,
    "Status": 1,
    "Notes": "Dentist",
    "ApprovedByID": 8,
    "ManagerNotes": "",
    "Paid": false,
    "PaidNotes": "",
    "TimeZoneID": 5,
    "SubmitDate": "2011-08-31T08:06:57.09",
    "RequestedByID": null,
    "DaysRequested": null,
    "RowThumbprint": "ac5a4ffa-3a4c-4424-9d88-4743517b8549",
    "RowInserted": "2011-08-31T08:06:57.09",
    "RowUpdated": null,
    "Operation": "Inserted"
  },
  ...
]
``` 

    
    

    
    
<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure request body is formatted properly |
| `HTTP 401` | `Token is invalid` | Ensure Access Token is valid and has not expired | 
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure URI is valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | See Message in response for more information |
  

    
