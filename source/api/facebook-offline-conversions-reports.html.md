---
title:  Facebook Offline Conversions Reports
permalink: /api/Facebook-Offline-Conversions-Reports/
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


## MarketingReportData

```json
{
	"Email": "johntest@kentel.com",
	"Phone": "5555555555",
	"FirstName": "John",
	"LastName": "Test",
	"City": "Regina",
	"Province": "SK",
	"PostalCode": "H0H0H0",
	"Country": "Canada",
	"Category": "Activations,Smart Phones",
	"ProductLibraryID": "M5592-E12435",
	"UnitPrice": "250",
	"ListPrice": "299.99",
	"Quantity": "1",
	"ProductLibraryName": "Galaxy Gear Watch - Black",
	"ProductLibraryCanonicalName": "Smartphones"
}
```

| Name | Description |
|:-----|:------------|
| Email (`VARCHAR(200)`) | Email | 
| Phone (`VARCHAR(200)`) | Phone number | 
| FirstName (`VARCHAR(50)`) | First name | 
| LastName (`VARCHAR(50)`) | Last name | 
| City (`VARCHAR(50)`) | City | 
| Province (`VARCHAR(50)`) | Province/State | 
| PostalCode (`VARCHAR(15)`) | Postal/Zip code | 
| Country (`VARCHAR(50)`) | Country | 
| Category (`NVARCHAR(MAX)`) | Category in RQ | 
| ProductLibraryID (`VARCHAR(50)`) | Identifier for a <a href='http://developers.iqmetrix.com/api/catalog/#product'>Product</a> in Product Library | 
| UnitPrice (`MONEY`) | Unit price | 
| ListPrice (`MONEY`) | List price | 
| Quantity (`INT`) | Quantity | 
| ProductLibraryName (`NVARCHAR(MAX)`) | Name of the Product in Product Library | 
| ProductLibraryCanonicalName (`NVARCHAR(MAX)`) | Name of the Product's Classification in Product Library | 






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
        
    


<h3 id='get-marketing-report' class='clickable-header top-level-header'>Get Marketing Report</h3>



<h4>Request</h4>

<pre>
GET /partner/FacebookOfflineConversions/MarketingReport?CompanyID={CompanyID}&StartDate={StartDate}&StopDate={StopDate}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



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
    <li class="active"><a href="#http-get-marketing-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-get-marketing-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-get-marketing-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-get-marketing-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-get-marketing-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-get-marketing-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-get-marketing-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-get-marketing-report">
<pre id="http-code-get-marketing-report"><code class="language-http">GET /partner/FacebookOfflineConversions/MarketingReport?CompanyID=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-get-marketing-report">
<pre id="curl-code-get-marketing-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/FacebookOfflineConversions/MarketingReport?CompanyID=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-get-marketing-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-get-marketing-report"><code class="language-csharp">static IRestResponse GetMarketingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/FacebookOfflineConversions/MarketingReport?CompanyID=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-get-marketing-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-get-marketing-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GetMarketingReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/FacebookOfflineConversions/MarketingReport?CompanyID=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-get-marketing-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-get-marketing-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/FacebookOfflineConversions/MarketingReport?CompanyID=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[marketingreportdata](#MarketingReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-get-marketing-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-get-marketing-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-get-marketing-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-get-marketing-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-get-marketing-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-get-marketing-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-get-marketing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Email": "johntest@kentel.com",
        "Phone": "5555555555",
        "FirstName": "John",
        "LastName": "Test",
        "City": "Regina",
        "Province": "SK",
        "PostalCode": "H0H0H0",
        "Country": "Canada",
        "Category": "Activations,Smart Phones",
        "ProductLibraryID": "M5592-E12435",
        "UnitPrice": 250,
        "ListPrice": 299.99,
        "Quantity": 1,
        "ProductLibraryName": "Galaxy Gear Watch - Black",
        "ProductLibraryCanonicalName": "Smartphones"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-get-marketing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Email": "johntest@kentel.com",
            "Phone": "5555555555",
            "FirstName": "John",
            "LastName": "Test",
            "City": "Regina",
            "Province": "SK",
            "PostalCode": "H0H0H0",
            "Country": "Canada",
            "Category": "Activations,Smart Phones",
            "ProductLibraryID": "M5592-E12435",
            "UnitPrice": 250,
            "ListPrice": 299.99,
            "Quantity": 1,
            "ProductLibraryName": "Galaxy Gear Watch - Black",
            "ProductLibraryCanonicalName": "Smartphones"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-get-marketing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Email>johntest@kentel.com</Email>
    <Phone>5555555555</Phone>
    <FirstName>John</FirstName>
    <LastName>Test</LastName>
    <City>Regina</City>
    <Province>SK</Province>
    <PostalCode>H0H0H0</PostalCode>
    <Country>Canada</Country>
    <Category>Activations,Smart Phones</Category>
    <ProductLibraryID>M5592-E12435</ProductLibraryID>
    <UnitPrice>250</UnitPrice>
    <ListPrice>299.99</ListPrice>
    <Quantity>1</Quantity>
    <ProductLibraryName>Galaxy Gear Watch - Black</ProductLibraryName>
    <ProductLibraryCanonicalName>Smartphones</ProductLibraryCanonicalName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-get-marketing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Email>johntest@kentel.com</Email>
    <Phone>5555555555</Phone>
    <FirstName>John</FirstName>
    <LastName>Test</LastName>
    <City>Regina</City>
    <Province>SK</Province>
    <PostalCode>H0H0H0</PostalCode>
    <Country>Canada</Country>
    <Category>Activations,Smart Phones</Category>
    <ProductLibraryID>M5592-E12435</ProductLibraryID>
    <UnitPrice>250</UnitPrice>
    <ListPrice>299.99</ListPrice>
    <Quantity>1</Quantity>
    <ProductLibraryName>Galaxy Gear Watch - Black</ProductLibraryName>
    <ProductLibraryCanonicalName>Smartphones</ProductLibraryCanonicalName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-get-marketing-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Email,Phone,FirstName,LastName,City,Province,PostalCode,Country,Category,ProductLibraryID,UnitPrice,ListPrice,Quantity,ProductLibraryName,ProductLibraryCanonicalName
johntest@kentel.com,5555555555,John,Test,Regina,SK,H0H0H0,Canada,Activations,Smart Phones,M5592-E12435,250,299.99,1,Galaxy Gear Watch - Black,Smartphones</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-get-marketing-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


    
    

    
    
