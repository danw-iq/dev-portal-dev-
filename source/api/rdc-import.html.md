---
title:  RQ Data Connect Import
permalink: /api/RQ-Data-Connect-Import/
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

## TrafficCount

```json
{
	"TrafficCountID": "656",
	"StartDate": "2016-11-09T10:00:00",
	"EndDate": "2016-11-09T11:00:00",
	"TrafficCount": "20",
	"StoreID": "1",
	"GLCode": "84WEA"
}
```

| Name | Description |
|:-----|:------------|
| TrafficCountID (`INT`) | Identifier | 
| StartDate (`DateTime`) | Start date | 
| EndDate (`DateTime`) | End date | 
| TrafficCount (`INT`) | Traffic count | 
| StoreID (`INT`) | Identifier for a store in RQ | 
| GLCode (`VARCHAR(100)`) | General Ledger code. For more information about G/L, {{support_GLAccountSetup}}. | 






## Requests



<h3 id='importing-traffic-count-data-into-rq' class='clickable-header top-level-header'>Importing Traffic Count Data into RQ</h3>

This request allows you to import and update Traffic Count Data into RQ. 

For more information, see {{support_TrafficCountDashboard}}.

<h4>Request</h4>

<pre>
POST /Import/TrafficCount?StoreID={StoreID}&StartDate={StartDate}&StopDate={StopDate}&TrafficCount={TrafficCount}&TrafficCountID={TrafficCountID}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StoreID</code> (<strong>Required</strong>)  - Identifier for a store in RQ
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Start date for traffic count data
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - End date for traffic count data
    </li>
    
    <li>
        <code>TrafficCount</code> (<strong>Required</strong>)  - Traffic count
    </li>
    
    <li>
        <code>TrafficCountID</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect-Import/#trafficcount'>TrafficCount</a>. Provide this value to update a specific traffic count row in the database
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
    <li class="active"><a href="#http-importing-traffic-count-data-into-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-importing-traffic-count-data-into-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-importing-traffic-count-data-into-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-importing-traffic-count-data-into-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-importing-traffic-count-data-into-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-importing-traffic-count-data-into-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-importing-traffic-count-data-into-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-importing-traffic-count-data-into-rq">
<pre id="http-code-importing-traffic-count-data-into-rq"><code class="language-http">POST /Import/TrafficCount?StoreID=1&StartDate=2016-11-09T18:00:00.000Z&StopDate=2016-11-09T19:00:00.000Z&TrafficCount=20&TrafficCountID=645
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-importing-traffic-count-data-into-rq">
<pre id="curl-code-importing-traffic-count-data-into-rq"><code class="language-http">curl -X POST "https://rqdataconnectdemo.iqmetrix.net/Import/TrafficCount?StoreID=1&StartDate=2016-11-09T18:00:00.000Z&StopDate=2016-11-09T19:00:00.000Z&TrafficCount=20&TrafficCountID=645"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-importing-traffic-count-data-into-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-importing-traffic-count-data-into-rq"><code class="language-csharp">static IRestResponse ImportingTrafficCountDataIntoRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/Import/TrafficCount?StoreID=1&StartDate=2016-11-09T18:00:00.000Z&StopDate=2016-11-09T19:00:00.000Z&TrafficCount=20&TrafficCountID=645");
    var request = new RestRequest(Method.POST);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-importing-traffic-count-data-into-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-importing-traffic-count-data-into-rq"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ImportingTrafficCountDataIntoRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://rqdataconnectdemo.iqmetrix.net/Import/TrafficCount?StoreID=1&StartDate=2016-11-09T18:00:00.000Z&StopDate=2016-11-09T19:00:00.000Z&TrafficCount=20&TrafficCountID=645");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-importing-traffic-count-data-into-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-importing-traffic-count-data-into-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://rqdataconnectdemo.iqmetrix.net/Import/TrafficCount?StoreID=1&StartDate=2016-11-09T18:00:00.000Z&StopDate=2016-11-09T19:00:00.000Z&TrafficCount=20&TrafficCountID=645', body, {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[trafficcount](#TrafficCount)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-importing-traffic-count-data-into-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-importing-traffic-count-data-into-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-importing-traffic-count-data-into-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-importing-traffic-count-data-into-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-importing-traffic-count-data-into-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-importing-traffic-count-data-into-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-importing-traffic-count-data-into-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "TrafficCountID": 656,
        "StartDate": "2016-11-09T10:00:00",
        "EndDate": "2016-11-09T11:00:00",
        "TrafficCount": 20,
        "StoreID": 1,
        "GLCode": "84WEA"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-importing-traffic-count-data-into-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "TrafficCountID": 656,
            "StartDate": "2016-11-09T10:00:00",
            "EndDate": "2016-11-09T11:00:00",
            "TrafficCount": 20,
            "StoreID": 1,
            "GLCode": "84WEA"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-importing-traffic-count-data-into-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <TrafficCountID>656</TrafficCountID>
    <StartDate>2016-11-09T10:00:00</StartDate>
    <EndDate>2016-11-09T11:00:00</EndDate>
    <TrafficCount>20</TrafficCount>
    <StoreID>1</StoreID>
    <GLCode>84WEA</GLCode>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-importing-traffic-count-data-into-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <TrafficCountID>656</TrafficCountID>
    <StartDate>2016-11-09T10:00:00</StartDate>
    <EndDate>2016-11-09T11:00:00</EndDate>
    <TrafficCount>20</TrafficCount>
    <StoreID>1</StoreID>
    <GLCode>84WEA</GLCode>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-importing-traffic-count-data-into-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>TrafficCountID,StartDate,EndDate,TrafficCount,StoreID,GLCode
656,2016-11-09T10:00:00,2016-11-09T11:00:00,20,1,84WEA</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-importing-traffic-count-data-into-rq">
            
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

    
