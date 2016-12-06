---
title:  RQ Data Connect
permalink: /api/RQ-Data-Connect/
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

Reports are organized by category, for a complete list of reports in RQ Data Connect, see [Report List](/rq-data-connect/report-list).

<hr/>
<div id='reports-display'>
  <div class='row text-center'>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Customer-Reports'>
          <h4>Customer Reports</h4>
          <div class="rdc-sprite rdccustomers"></div>
        </a> 
      </span>
    </span>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Commission-Reports'>
          <h4>Commission Reports</h4>
          <div class="rdc-sprite rdccommission"></div>
        </a>
      </span>
    </span>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Employee-Reports'>
          <h4>Employee Reports</h4>
          <div class="rdc-sprite rdcemployees"></div>
        </a>
      </span>
    </span>
  </div>
  <div class='row text-center'>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Sales-Reports'>
          <h4>Sales Reports</h4>
          <div class="rdc-sprite rdcsales"></div>
        </a>
      </span>
    </span>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Inventory-Reports'>
          <h4>Inventory Reports</h4>
          <div class="rdc-sprite rdcinventory"></div>
        </a>
      </span>
    </span>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Finance-Reports'>
          <h4>Finance Reports</h4>
          <div class="rdc-sprite rdcfinance"></div>
        </a>
      </span>
    </span>
  </div>
  <div class='row text-center'>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Performance-Metrix-Reports'>
          <h4>Performance Metrix Reports</h4>
          <div class="rdc-sprite rdcperformance-metrix"></div>
        </a>
      </span>
    </span>  
    <span class='col-md-4'>
      <span class='col-md-12'>
        <!--<a href='/api/RQ-Data-Connect-Dashboard-Reports'>-->
          <h4>Dashboard Reports</h4>
          <div class="rdc-sprite rdcdashboard"></div>
        <!--</a>-->
      </span>
    </span>
    <span class='col-md-4'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Utilities-Reports'>
          <h4>Utilities</h4>
          <div class="rdc-sprite rdctools"></div>
        </a>
      </span>
    </span> 
  </div>
  <div class='row text-center'>
    <span class='col-md-12'>
      <span class='col-md-12'>
        <a href='/api/RQ-Data-Connect-Import'>
          <h4>Import</h4>
          <div class="rdc-sprite rdcimport"></div>
        </a>
      </span>
    </span>  
  </div>        
</div>
<hr/>


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources




## CategoryNumber

```json
{
	"ID": "1010271216",
	"Description": "Rate Plans"
}
```

| Name | Description |
|:-----|:------------|
| ID (`String`) | Category Identifier | 
| Description (`String`) | Category name | 



## RQCompanyTreeNode

```json
{
	"ID": "0",
	"Description": "KENTEL Corp",
	"EntityID": "14146"
}
```

| Name | Description |
|:-----|:------------|
| ID (`INT`) | Identifier | 
| Description (`VARCHAR(255)`) | Description | 
| EntityID (`INT`) | Identifier for the appropriate <a href='http://developers.iqmetrix.com/api/company-tree/#companytreenode'>CompanyTreeNode</a> | 



## ReasonCode

A ReasonCode allows an employee to provide a reason for an action, such as a ChargeBack. For example, Point of Sale Error.

```json
{
	"ID": "1",
	"Description": "Write Off"
}
```

| Name | Description |
|:-----|:------------|
| ID (`String`) | Identifier | 
| Description (`String`) | Reason | 






## LocationType

```json
{
	"Type": "Channel"
}
```

| Name | Description |
|:-----|:------------|
| Type (`VARCHAR(8)`) | Name of a Location type in RQ | 


## Group

```json
{
	"GroupID": "4",
	"GroupName": "100% (35% GP)"
}
```

| Name | Description |
|:-----|:------------|
| GroupID (`INT`) | Identifier | 
| GroupName (`VARCHAR(50)`) | Name | 


## Coupon

```json
{
	"CouponID": "1144",
	"CouponName": "TEST2"
}
```

| Name | Description |
|:-----|:------------|
| CouponID (`INT`) | Identifier | 
| CouponName (`NVARCHAR(MAX)`) | Name | 


## StoreType

```json
{
	"Type": "3",
	"StoreTypeName": "Kiosk"
}
```

| Name | Description |
|:-----|:------------|
| Type (`INT`) | Identifier | 
| StoreTypeName (`NVARCHAR(MAX)`) | Name | 




## VendorID

```json
{
	"VendorID": "1",
	"VendorName": "A.C.P"
}
```

| Name | Description |
|:-----|:------------|
| VendorID (`INT`) | Identifier | 
| VendorName (`NVARCHAR(MAX)`) | Name | 


## ProductType

```json
{
	"ProductTypeID": "0",
	"ProductType": "Regular Global Product"
}
```

| Name | Description |
|:-----|:------------|
| ProductTypeID (`INT`) | Identifier | 
| ProductType (`VARCHAR(30)`) | Name | 


## NonSellableReasonCode

```json
{
	"ReasonCode": "c5473733-e030-83cf-7a9f-4e95a3c27efa",
	"ReasonCodeDescription": "Scratched"
}
```

| Name | Description |
|:-----|:------------|
| ReasonCode (`UNIQUEIDENTIFIER`) | Identifier | 
| ReasonCodeDescription (`NVARCHAR(MAX)`) | Reason code | 






## Requests



<h3 id='getting-session-information' class='clickable-header top-level-header'>Getting Session Information</h3>

This request allows you to retrieve information about a Basic access token


<h4>Request</h4>

<pre>
GET /session?Auth={Auth}
</pre>




<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Auth</code> (<strong>Required</strong>)  - Basic access token received from the request <a href='#basic-authentication-with-platform-credentials'>Basic Authentication with Platform Credentials</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-session-information" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-session-information" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-session-information" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-session-information" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-session-information" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-session-information" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-session-information"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-session-information">
<pre id="http-code-getting-session-information"><code class="language-http">GET /session?Auth=vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-session-information">
<pre id="curl-code-getting-session-information"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/session?Auth=vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-session-information">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-session-information"><code class="language-csharp">static IRestResponse GettingSessionInformation()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/session?Auth=vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-session-information">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-session-information"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSessionInformation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/session?Auth=vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-session-information">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-session-information"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/session?Auth=vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw' 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>access_token</code> (Guid) - {{AccessToken_Glossary}}</li><li><code>isValid</code> (Boolean) - A flag to indicate if the token is valid</li><li><code>ParentEntityId</code> (Integer) - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a> belongs to</li><li><code>RQEmployeeId</code> (Integer) - Identifier for the employee in RQ associated with this session</li></ul></p>           
    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-session-information" data-toggle="tab">application/json</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-session-information">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">{
    "access_token": "b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz",
    "isValid": true,
    "ParentEntityId": 21090,
    "RQEmployeeId": 3494
}</code></pre>      
            
        </div>
                
</div>
        
    


<h3 id='basic-authentication-with-platform-credentials' class='clickable-header top-level-header'>Basic Authentication with Platform Credentials</h3>

This request allows you to use Platform credentials to obtain an {{AccessToken_Glossary}}.

In the Authorization header, place the base 64 encoded form of your username and password prefixed by the word `Basic`.

For examples, see <a href="/guides/rq-data-connect/#basic-authentication">Basic Authentication</a>

Note that as long as your username and password do not change, the Basic token generated from your username and password will remain the same.


<h4>Request</h4>

<pre>
GET /session
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw</code> (<strong>Required</strong>)</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-basic-authentication-with-platform-credentials" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-basic-authentication-with-platform-credentials" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-basic-authentication-with-platform-credentials" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-basic-authentication-with-platform-credentials" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-basic-authentication-with-platform-credentials" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-basic-authentication-with-platform-credentials" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-basic-authentication-with-platform-credentials"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-basic-authentication-with-platform-credentials">
<pre id="http-code-basic-authentication-with-platform-credentials"><code class="language-http">GET /session
Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-basic-authentication-with-platform-credentials">
<pre id="curl-code-basic-authentication-with-platform-credentials"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/session" -H "Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-basic-authentication-with-platform-credentials">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-basic-authentication-with-platform-credentials"><code class="language-csharp">static IRestResponse BasicAuthenticationWithPlatformCredentials()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/session");
    var request = new RestRequest(Method.GET);
    
    request.AddHeader("Authorization", "Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-basic-authentication-with-platform-credentials">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-basic-authentication-with-platform-credentials"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse BasicAuthenticationWithPlatformCredentials() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/session");
    
    request.addHeader("Authorization", "Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-basic-authentication-with-platform-credentials">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-basic-authentication-with-platform-credentials"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/session', {
     :'Authorization' => 'Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw',
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>access_token</code> (Guid) - {{AccessToken_Glossary}}, this value can be used in the Authorization header</li><li><code>isValid</code> (Boolean) - A flag to indicate if the token is valid</li><li><code>ParentEntityId</code> (Integer) - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a> belongs to</li><li><code>RQEmployeeId</code> (Integer) - Identifier for the employee in RQ associated with the token</li><li><code>basic_token</code> (String) - Basic token that can be used as the Auth URL Parameter for reports</li><li><code>PreferredEndpoint</code> (String) - A URL that represents the version of RQ Data Connect that is closest to your RQ database. Use this URL for best performance</li></ul></p>           
    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-basic-authentication-with-platform-credentials" data-toggle="tab">application/json</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-basic-authentication-with-platform-credentials">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">{
    "access_token": "b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz",
    "isValid": true,
    "ParentEntityId": 21090,
    "RQEmployeeId": 3494,
    "basic_token": "vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw",
    "PreferredEndpoint": "https://rqdataconnect18.iqmetrix.net"
}</code></pre>      
            
        </div>
                
</div>
        
    


<h3 id='getting-employees' class='clickable-header top-level-header'>Getting Employees</h3>



<h4>Request</h4>

<pre>
GET /lists/employees
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-employees" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-employees" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-employees" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-employees" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-employees" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-employees" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-employees"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-employees">
<pre id="http-code-getting-employees"><code class="language-http">GET /lists/employees
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-employees">
<pre id="curl-code-getting-employees"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/employees"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-employees">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-employees"><code class="language-csharp">static IRestResponse GettingEmployees()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/employees");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-employees">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-employees"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingEmployees() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/employees");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-employees">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-employees"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/employees', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>EmployeeID</code> (INT) </li><li><code>EmployeeEntityID</code> (INT) </li><li><code>Name</code> (VARCHAR(51)) </li><li><code>First_Name</code> (VARCHAR(25)) </li><li><code>Last_Name</code> (VARCHAR(25)) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-employees" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-employees" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-employees" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-employees" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-employees" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-employees" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-employees">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "EmployeeID": 22,
        "EmployeeEntityID": 44567,
        "Name": "Jim Bob",
        "First_Name": "Jim",
        "Last_Name": "Bob"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-employees">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "EmployeeID": 22,
            "EmployeeEntityID": 44567,
            "Name": "Jim Bob",
            "First_Name": "Jim",
            "Last_Name": "Bob"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-employees">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EmployeeID>22</EmployeeID>
    <EmployeeEntityID>44567</EmployeeEntityID>
    <Name>Jim Bob</Name>
    <First_Name>Jim</First_Name>
    <Last_Name>Bob</Last_Name>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-employees">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EmployeeID>22</EmployeeID>
    <EmployeeEntityID>44567</EmployeeEntityID>
    <Name>Jim Bob</Name>
    <First_Name>Jim</First_Name>
    <Last_Name>Bob</Last_Name>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-employees">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>EmployeeID,EmployeeEntityID,Name,First_Name,Last_Name
22,44567,Jim Bob,Jim,Bob</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-employees">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-category-numbers' class='clickable-header top-level-header'>Getting Category Numbers</h3>



<h4>Request</h4>

<pre>
GET /lists/categorynumber
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-category-numbers" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-category-numbers" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-category-numbers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-category-numbers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-category-numbers" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-category-numbers" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-category-numbers"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-category-numbers">
<pre id="http-code-getting-category-numbers"><code class="language-http">GET /lists/categorynumber
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-category-numbers">
<pre id="curl-code-getting-category-numbers"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-category-numbers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-category-numbers"><code class="language-csharp">static IRestResponse GettingCategoryNumbers()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-category-numbers">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-category-numbers"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCategoryNumbers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-category-numbers">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-category-numbers"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[categorynumber](#CategoryNumber)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-category-numbers" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-category-numbers" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-category-numbers" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-category-numbers" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-category-numbers" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-category-numbers" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-category-numbers">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": "1010271216",
        "Description": "Rate Plans"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-category-numbers">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": "1010271216",
            "Description": "Rate Plans"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-category-numbers">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1010271216</ID>
    <Description>Rate Plans</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-category-numbers">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1010271216</ID>
    <Description>Rate Plans</Description>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-category-numbers">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Description
1010271216,Rate Plans</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-category-numbers">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-language-codes' class='clickable-header top-level-header'>Getting Language Codes</h3>



<h4>Request</h4>

<pre>
GET /lists/languages
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-language-codes" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-language-codes" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-language-codes" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-language-codes" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-language-codes" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-language-codes" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-language-codes"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-language-codes">
<pre id="http-code-getting-language-codes"><code class="language-http">GET /lists/languages
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-language-codes">
<pre id="curl-code-getting-language-codes"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/languages"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-language-codes">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-language-codes"><code class="language-csharp">static IRestResponse GettingLanguageCodes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/languages");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-language-codes">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-language-codes"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingLanguageCodes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/languages");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-language-codes">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-language-codes"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/languages', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>ID</code> (String) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-language-codes" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-language-codes" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-language-codes" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-language-codes" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-language-codes" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-language-codes" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-language-codes">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": "en-us"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-language-codes">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": "en-us"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-language-codes">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>en-us</ID>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-language-codes">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>en-us</ID>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-language-codes">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID
en-us</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-language-codes">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-products-in-rq' class='clickable-header top-level-header'>Getting Products in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/productidentifier
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-products-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-products-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-products-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-products-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-products-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-products-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-products-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-products-in-rq">
<pre id="http-code-getting-products-in-rq"><code class="language-http">GET /lists/productidentifier
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-products-in-rq">
<pre id="curl-code-getting-products-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-products-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-products-in-rq"><code class="language-csharp">static IRestResponse GettingProductsInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-products-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-products-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductsInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-products-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-products-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>ID</code> (String) </li><li><code>Description</code> (String) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-products-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-products-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-products-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-products-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-products-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-products-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-products-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": "ASCLMO000001",
        "Description": "HC Samsung U340"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-products-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": "ASCLMO000001",
            "Description": "HC Samsung U340"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-products-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>ASCLMO000001</ID>
    <Description>HC Samsung U340</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-products-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>ASCLMO000001</ID>
    <Description>HC Samsung U340</Description>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-products-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Description
ASCLMO000001,HC Samsung U340</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-products-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-reason-codes' class='clickable-header top-level-header'>Getting Reason Codes</h3>



<h4>Request</h4>

<pre>
GET /lists/reasoncode
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-reason-codes" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-reason-codes" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-reason-codes" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-reason-codes" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-reason-codes" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-reason-codes" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-reason-codes"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-reason-codes">
<pre id="http-code-getting-reason-codes"><code class="language-http">GET /lists/reasoncode
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-reason-codes">
<pre id="curl-code-getting-reason-codes"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-reason-codes">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-reason-codes"><code class="language-csharp">static IRestResponse GettingReasonCodes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-reason-codes">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-reason-codes"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingReasonCodes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-reason-codes">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-reason-codes"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[reasoncode](#ReasonCode)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-reason-codes" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-reason-codes" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-reason-codes" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-reason-codes" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-reason-codes" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-reason-codes" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-reason-codes">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": "1",
        "Description": "Write Off"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-reason-codes">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": "1",
            "Description": "Write Off"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-reason-codes">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Description>Write Off</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-reason-codes">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Description>Write Off</Description>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-reason-codes">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Description
1,Write Off</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-reason-codes">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-report-levels-in-rq' class='clickable-header top-level-header'>Getting Report Levels in RQ</h3>

This request will return a list of hierarchical levels in your company tree in RQ.

To learn more about Locations in RQ, see {{support_LocationSetup}}.


<h4>Request</h4>

<pre>
GET /lists/forwhoid
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-report-levels-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-report-levels-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-report-levels-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-report-levels-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-report-levels-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-report-levels-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-report-levels-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-report-levels-in-rq">
<pre id="http-code-getting-report-levels-in-rq"><code class="language-http">GET /lists/forwhoid
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-report-levels-in-rq">
<pre id="curl-code-getting-report-levels-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-report-levels-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-report-levels-in-rq"><code class="language-csharp">static IRestResponse GettingReportLevelsInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-report-levels-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-report-levels-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingReportLevelsInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-report-levels-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-report-levels-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>ID</code> (String) </li><li><code>Description</code> (String) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-report-levels-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-report-levels-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-report-levels-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-report-levels-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-report-levels-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-report-levels-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-report-levels-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": "1",
        "Description": "Company"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-report-levels-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": "1",
            "Description": "Company"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-report-levels-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Description>Company</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-report-levels-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Description>Company</Description>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-report-levels-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Description
1,Company</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-report-levels-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-nodes-by-location-type' class='clickable-header top-level-header'>Getting Nodes By Location Type</h3>

This request will return a list of locations in RQ a report can be restricted to.


<h4>Request</h4>

<pre>
GET /lists/forwhoids?ForWho={ForWho}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ForWho</code> (<strong>Required</strong>)  - Identifier for a level at which to perform the request. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-nodes-by-location-type" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-nodes-by-location-type" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-nodes-by-location-type" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-nodes-by-location-type" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-nodes-by-location-type" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-nodes-by-location-type" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-nodes-by-location-type"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-nodes-by-location-type">
<pre id="http-code-getting-nodes-by-location-type"><code class="language-http">GET /lists/forwhoids?ForWho=1
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-nodes-by-location-type">
<pre id="curl-code-getting-nodes-by-location-type"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-nodes-by-location-type">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-nodes-by-location-type"><code class="language-csharp">static IRestResponse GettingNodesByLocationType()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-nodes-by-location-type">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-nodes-by-location-type"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingNodesByLocationType() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-nodes-by-location-type">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-nodes-by-location-type"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>ID</code> (Integer) </li><li><code>Column1</code> (String) </li><li><code>EntityID</code> (Integer) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-nodes-by-location-type" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-nodes-by-location-type" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-nodes-by-location-type" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-nodes-by-location-type" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-nodes-by-location-type" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-nodes-by-location-type" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-nodes-by-location-type">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": 1,
        "Column1": "KENTEL Corp",
        "EntityID": 11432
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-nodes-by-location-type">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": 1,
            "Column1": "KENTEL Corp",
            "EntityID": 11432
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-nodes-by-location-type">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Column1>KENTEL Corp</Column1>
    <EntityID>11432</EntityID>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-nodes-by-location-type">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Column1>KENTEL Corp</Column1>
    <EntityID>11432</EntityID>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-nodes-by-location-type">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Column1,EntityID
1,KENTEL Corp,11432</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-nodes-by-location-type">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-a-list-of-manufacturers-in-rq' class='clickable-header top-level-header'>Getting a List of Manufacturers in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/manufactureid
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-manufacturers-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-manufacturers-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-manufacturers-in-rq">
<pre id="http-code-getting-a-list-of-manufacturers-in-rq"><code class="language-http">GET /lists/manufactureid
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-manufacturers-in-rq">
<pre id="curl-code-getting-a-list-of-manufacturers-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-manufacturers-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-manufacturers-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfManufacturersInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-manufacturers-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-manufacturers-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfManufacturersInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-manufacturers-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-manufacturers-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>ID</code> (String) </li><li><code>Description</code> (String) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-a-list-of-manufacturers-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": "9",
        "Description": "LG"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-a-list-of-manufacturers-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": "9",
            "Description": "LG"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-a-list-of-manufacturers-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>9</ID>
    <Description>LG</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-a-list-of-manufacturers-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>9</ID>
    <Description>LG</Description>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-a-list-of-manufacturers-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Description
9,LG</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-manufacturers-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-a-list-of-stores-in-rq' class='clickable-header top-level-header'>Getting A List of Stores in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/stores
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-list-of-stores-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-stores-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-stores-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-stores-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-stores-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-stores-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-stores-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-stores-in-rq">
<pre id="http-code-getting-a-list-of-stores-in-rq"><code class="language-http">GET /lists/stores
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-stores-in-rq">
<pre id="curl-code-getting-a-list-of-stores-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/stores"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-stores-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-stores-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfStoresInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/stores");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-stores-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-stores-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfStoresInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/stores");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-stores-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-stores-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/stores', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>StoreID</code> (Integer) </li><li><code>LocationEntityID</code> (Integer) </li><li><code>StoreName</code> (String) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-a-list-of-stores-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-a-list-of-stores-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-a-list-of-stores-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-a-list-of-stores-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-a-list-of-stores-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-stores-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-a-list-of-stores-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "StoreID": 1188,
        "LocationEntityID": 453,
        "StoreName": "Altera Kiosk"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-a-list-of-stores-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "StoreID": 1188,
            "LocationEntityID": 453,
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-a-list-of-stores-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1188</StoreID>
    <LocationEntityID>453</LocationEntityID>
    <StoreName>Altera Kiosk</StoreName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-a-list-of-stores-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1188</StoreID>
    <LocationEntityID>453</LocationEntityID>
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
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-a-list-of-stores-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>StoreID,LocationEntityID,StoreName
1188,453,Altera Kiosk</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-stores-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-a-list-of-coupons-in-rq' class='clickable-header top-level-header'>Getting a List of Coupons in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/CouponID?LanguageCode={LanguageCode}
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
    <li class="active"><a href="#http-getting-a-list-of-coupons-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-coupons-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-coupons-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-coupons-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-coupons-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-coupons-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-coupons-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-coupons-in-rq">
<pre id="http-code-getting-a-list-of-coupons-in-rq"><code class="language-http">GET /lists/CouponID?LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-coupons-in-rq">
<pre id="curl-code-getting-a-list-of-coupons-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/CouponID?LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-coupons-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-coupons-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfCouponsInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/CouponID?LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-coupons-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-coupons-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfCouponsInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/CouponID?LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-coupons-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-coupons-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/CouponID?LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[coupon](#Coupon)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-a-list-of-coupons-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-a-list-of-coupons-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-a-list-of-coupons-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-a-list-of-coupons-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-a-list-of-coupons-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-coupons-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-a-list-of-coupons-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CouponID": 1144,
        "CouponName": "TEST2"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-a-list-of-coupons-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CouponID": 1144,
            "CouponName": "TEST2"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-a-list-of-coupons-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CouponID>1144</CouponID>
    <CouponName>TEST2</CouponName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-a-list-of-coupons-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CouponID>1144</CouponID>
    <CouponName>TEST2</CouponName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-a-list-of-coupons-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CouponID,CouponName
1144,TEST2</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-coupons-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-a-list-of-groups-in-rq' class='clickable-header top-level-header'>Getting a List of Groups in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/GroupID
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-list-of-groups-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-groups-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-groups-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-groups-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-groups-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-groups-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-groups-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-groups-in-rq">
<pre id="http-code-getting-a-list-of-groups-in-rq"><code class="language-http">GET /lists/GroupID
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-groups-in-rq">
<pre id="curl-code-getting-a-list-of-groups-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/GroupID"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-groups-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-groups-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfGroupsInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/GroupID");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-groups-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-groups-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfGroupsInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/GroupID");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-groups-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-groups-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/GroupID', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[group](#Group)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-a-list-of-groups-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-a-list-of-groups-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-a-list-of-groups-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-a-list-of-groups-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-a-list-of-groups-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-groups-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-a-list-of-groups-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "GroupID": 4,
        "GroupName": "100% (35% GP)"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-a-list-of-groups-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "GroupID": 4,
            "GroupName": "100% (35% GP)"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-a-list-of-groups-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GroupID>4</GroupID>
    <GroupName>100% (35% GP)</GroupName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-a-list-of-groups-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <GroupID>4</GroupID>
    <GroupName>100% (35% GP)</GroupName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-a-list-of-groups-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>GroupID,GroupName
4,100% (35% GP)</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-groups-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-a-list-of-carriers-in-rq' class='clickable-header top-level-header'>Getting a List of Carriers in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/CarrierSIP?LanguageCode={LanguageCode}
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
    <li class="active"><a href="#http-getting-a-list-of-carriers-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-carriers-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-carriers-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-carriers-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-carriers-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-carriers-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-carriers-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-carriers-in-rq">
<pre id="http-code-getting-a-list-of-carriers-in-rq"><code class="language-http">GET /lists/CarrierSIP?LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-carriers-in-rq">
<pre id="curl-code-getting-a-list-of-carriers-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/CarrierSIP?LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-carriers-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-carriers-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfCarriersInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/CarrierSIP?LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-carriers-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-carriers-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfCarriersInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/CarrierSIP?LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-carriers-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-carriers-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/CarrierSIP?LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>CarrierID</code> (INT) </li><li><code>CarrierName</code> (VARCHAR(50)) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-a-list-of-carriers-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-a-list-of-carriers-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-a-list-of-carriers-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-a-list-of-carriers-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-a-list-of-carriers-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-carriers-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-a-list-of-carriers-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CarrierID": 10,
        "CarrierName": "Nextel"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-a-list-of-carriers-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CarrierID": 10,
            "CarrierName": "Nextel"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-a-list-of-carriers-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CarrierID>10</CarrierID>
    <CarrierName>Nextel</CarrierName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-a-list-of-carriers-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CarrierID>10</CarrierID>
    <CarrierName>Nextel</CarrierName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-a-list-of-carriers-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CarrierID,CarrierName
10,Nextel</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-carriers-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-financing-types' class='clickable-header top-level-header'>Getting Financing Types</h3>



<h4>Request</h4>

<pre>
GET /lists/FinancingID?LanguageCode={LanguageCode}
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
    <li class="active"><a href="#http-getting-financing-types" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-financing-types" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-financing-types" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-financing-types" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-financing-types" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-financing-types" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-financing-types"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-financing-types">
<pre id="http-code-getting-financing-types"><code class="language-http">GET /lists/FinancingID?LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-financing-types">
<pre id="curl-code-getting-financing-types"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/FinancingID?LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-financing-types">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-financing-types"><code class="language-csharp">static IRestResponse GettingFinancingTypes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/FinancingID?LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-financing-types">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-financing-types"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingFinancingTypes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/FinancingID?LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-financing-types">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-financing-types"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/FinancingID?LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>FinancingDetailID</code> (INT) </li><li><code>FinancingDetailName</code> (VARCHAR(50)) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-financing-types" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-financing-types" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-financing-types" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-financing-types" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-financing-types" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-financing-types" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-financing-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "FinancingDetailID": 19,
        "FinancingDetailName": "Import"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-financing-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "FinancingDetailID": 19,
            "FinancingDetailName": "Import"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-financing-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <FinancingDetailID>19</FinancingDetailID>
    <FinancingDetailName>Import</FinancingDetailName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-financing-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <FinancingDetailID>19</FinancingDetailID>
    <FinancingDetailName>Import</FinancingDetailName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-financing-types">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>FinancingDetailID,FinancingDetailName
19,Import</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-financing-types">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-store-types' class='clickable-header top-level-header'>Getting Store Types</h3>



<h4>Request</h4>

<pre>
GET /lists/StoreTypes?LanguageCode={LanguageCode}
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
    <li class="active"><a href="#http-getting-store-types" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-store-types" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-store-types" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-store-types" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-store-types" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-store-types" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-store-types"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-store-types">
<pre id="http-code-getting-store-types"><code class="language-http">GET /lists/StoreTypes?LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-store-types">
<pre id="curl-code-getting-store-types"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/StoreTypes?LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-store-types">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-store-types"><code class="language-csharp">static IRestResponse GettingStoreTypes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/StoreTypes?LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-store-types">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-store-types"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingStoreTypes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/StoreTypes?LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-store-types">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-store-types"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/StoreTypes?LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[storetype](#StoreType)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-store-types" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-store-types" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-store-types" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-store-types" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-store-types" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-store-types" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-store-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Type": 3,
        "StoreTypeName": "Kiosk"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-store-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Type": 3,
            "StoreTypeName": "Kiosk"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-store-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Type>3</Type>
    <StoreTypeName>Kiosk</StoreTypeName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-store-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Type>3</Type>
    <StoreTypeName>Kiosk</StoreTypeName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-store-types">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Type,StoreTypeName
3,Kiosk</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-store-types">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-location-types' class='clickable-header top-level-header'>Getting Location Types</h3>



<h4>Request</h4>

<pre>
GET /lists/LocationType
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-location-types" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-location-types" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-location-types" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-location-types" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-location-types" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-location-types" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-location-types"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-location-types">
<pre id="http-code-getting-location-types"><code class="language-http">GET /lists/LocationType
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-location-types">
<pre id="curl-code-getting-location-types"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/LocationType"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-location-types">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-location-types"><code class="language-csharp">static IRestResponse GettingLocationTypes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/LocationType");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-location-types">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-location-types"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingLocationTypes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/LocationType");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-location-types">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-location-types"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/LocationType', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[locationtype](#LocationType)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-location-types" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-location-types" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-location-types" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-location-types" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-location-types" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-location-types" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-location-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Type": "Channel"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-location-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Type": "Channel"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-location-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Type>Channel</Type>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-location-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Type>Channel</Type>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-location-types">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Type
Channel</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-location-types">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-location-ids' class='clickable-header top-level-header'>Getting Location Ids</h3>

This request allows you to get a list of identifiers for a specific LocationType within a company.

For example, `/lists/LocationIDs?LocationType=Region` will return a list of all Regions in the company including the RQ identifier and associated <a href='http://developers.iqmetrix.com/api/company-tree/#companytreenode'>CompanyTreeNode</a> identifier.      


<h4>Request</h4>

<pre>
GET /lists/LocationIDs?LocationType={LocationType}&LanguageCode={LanguageCode}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationType</code> (<strong>Required</strong>)  - For a complete list, see <a href='#getting-location-types'>Getting Location Types</a>
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-location-ids" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-location-ids" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-location-ids" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-location-ids" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-location-ids" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-location-ids" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-location-ids"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-location-ids">
<pre id="http-code-getting-location-ids"><code class="language-http">GET /lists/LocationIDs?LocationType=Company&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-location-ids">
<pre id="curl-code-getting-location-ids"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/LocationIDs?LocationType=Company&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-location-ids">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-location-ids"><code class="language-csharp">static IRestResponse GettingLocationIds()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/LocationIDs?LocationType=Company&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-location-ids">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-location-ids"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingLocationIds() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/LocationIDs?LocationType=Company&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-location-ids">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-location-ids"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/LocationIDs?LocationType=Company&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[rqcompanytreenode](#RQCompanyTreeNode)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-location-ids" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-location-ids" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-location-ids" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-location-ids" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-location-ids" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-location-ids" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-location-ids">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": 0,
        "Description": "KENTEL Corp",
        "EntityID": 14146
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-location-ids">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": 0,
            "Description": "KENTEL Corp",
            "EntityID": 14146
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-location-ids">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>0</ID>
    <Description>KENTEL Corp</Description>
    <EntityID>14146</EntityID>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-location-ids">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>0</ID>
    <Description>KENTEL Corp</Description>
    <EntityID>14146</EntityID>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-location-ids">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Description,EntityID
0,KENTEL Corp,14146</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-location-ids">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-a-list-of-vendors-in-rq' class='clickable-header top-level-header'>Getting a List of Vendors in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/VendorID?LanguageCode={LanguageCode}
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
    <li class="active"><a href="#http-getting-a-list-of-vendors-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-vendors-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-vendors-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-vendors-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-vendors-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-vendors-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-vendors-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-vendors-in-rq">
<pre id="http-code-getting-a-list-of-vendors-in-rq"><code class="language-http">GET /lists/VendorID?LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-vendors-in-rq">
<pre id="curl-code-getting-a-list-of-vendors-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/VendorID?LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-vendors-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-vendors-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfVendorsInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/VendorID?LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-vendors-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-vendors-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfVendorsInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/VendorID?LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-vendors-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-vendors-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/VendorID?LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[vendorid](#VendorID)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-a-list-of-vendors-in-rq" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-a-list-of-vendors-in-rq" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-a-list-of-vendors-in-rq" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-a-list-of-vendors-in-rq" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-a-list-of-vendors-in-rq" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-vendors-in-rq" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-a-list-of-vendors-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "VendorID": 1,
        "VendorName": "A.C.P"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-a-list-of-vendors-in-rq">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "VendorID": 1,
            "VendorName": "A.C.P"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-a-list-of-vendors-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <VendorID>1</VendorID>
    <VendorName>A.C.P</VendorName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-a-list-of-vendors-in-rq">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <VendorID>1</VendorID>
    <VendorName>A.C.P</VendorName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-a-list-of-vendors-in-rq">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>VendorID,VendorName
1,A.C.P</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-a-list-of-vendors-in-rq">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-product-types' class='clickable-header top-level-header'>Getting Product Types</h3>



<h4>Request</h4>

<pre>
GET /lists/ProductType
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-product-types" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-product-types" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-product-types" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-product-types" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-product-types" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-product-types" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-product-types"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-product-types">
<pre id="http-code-getting-product-types"><code class="language-http">GET /lists/ProductType
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-product-types">
<pre id="curl-code-getting-product-types"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/ProductType"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-product-types">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-product-types"><code class="language-csharp">static IRestResponse GettingProductTypes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/ProductType");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-product-types">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-product-types"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductTypes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/ProductType");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-product-types">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-product-types"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/ProductType', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[producttype](#ProductType)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-product-types" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-product-types" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-product-types" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-product-types" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-product-types" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-product-types" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-product-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ProductTypeID": 0,
        "ProductType": "Regular Global Product"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-product-types">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ProductTypeID": 0,
            "ProductType": "Regular Global Product"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-product-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ProductTypeID>0</ProductTypeID>
    <ProductType>Regular Global Product</ProductType>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-product-types">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ProductTypeID>0</ProductTypeID>
    <ProductType>Regular Global Product</ProductType>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-product-types">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ProductTypeID,ProductType
0,Regular Global Product</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-product-types">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-non-sellable-reason-codes' class='clickable-header top-level-header'>Getting Non Sellable Reason Codes</h3>



<h4>Request</h4>

<pre>
GET /lists/NonSellableReasonCode?LanguageCode={LanguageCode}
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
    <li class="active"><a href="#http-getting-non-sellable-reason-codes" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-non-sellable-reason-codes" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-non-sellable-reason-codes" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-non-sellable-reason-codes" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-non-sellable-reason-codes" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-non-sellable-reason-codes" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-non-sellable-reason-codes"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-non-sellable-reason-codes">
<pre id="http-code-getting-non-sellable-reason-codes"><code class="language-http">GET /lists/NonSellableReasonCode?LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-non-sellable-reason-codes">
<pre id="curl-code-getting-non-sellable-reason-codes"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/NonSellableReasonCode?LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-non-sellable-reason-codes">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-non-sellable-reason-codes"><code class="language-csharp">static IRestResponse GettingNonSellableReasonCodes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/NonSellableReasonCode?LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-non-sellable-reason-codes">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-non-sellable-reason-codes"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingNonSellableReasonCodes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/NonSellableReasonCode?LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-non-sellable-reason-codes">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-non-sellable-reason-codes"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/NonSellableReasonCode?LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[nonsellablereasoncode](#NonSellableReasonCode)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-non-sellable-reason-codes" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-non-sellable-reason-codes" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-non-sellable-reason-codes" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-non-sellable-reason-codes" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-non-sellable-reason-codes" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-non-sellable-reason-codes" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-non-sellable-reason-codes">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ReasonCode": "c5473733-e030-83cf-7a9f-4e95a3c27efa",
        "ReasonCodeDescription": "Scratched"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-non-sellable-reason-codes">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ReasonCode": "c5473733-e030-83cf-7a9f-4e95a3c27efa",
            "ReasonCodeDescription": "Scratched"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-non-sellable-reason-codes">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ReasonCode>c5473733-e030-83cf-7a9f-4e95a3c27efa</ReasonCode>
    <ReasonCodeDescription>Scratched</ReasonCodeDescription>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-non-sellable-reason-codes">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ReasonCode>c5473733-e030-83cf-7a9f-4e95a3c27efa</ReasonCode>
    <ReasonCodeDescription>Scratched</ReasonCodeDescription>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-non-sellable-reason-codes">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ReasonCode,ReasonCodeDescription
c5473733-e030-83cf-7a9f-4e95a3c27efa,Scratched</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-non-sellable-reason-codes">
            
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

    
