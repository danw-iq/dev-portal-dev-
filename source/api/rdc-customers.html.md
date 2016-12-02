---
title:  RQ Data Connect Customer Reports
permalink: /api/RQ-Data-Connect-Customer-Reports/
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

## CustomerListReportData

```json
{
	"Address": "12 Hello St.",
	"Address2": "n/a",
	"BillingAccountNumber": "",
	"City": "Fargo",
	"ContactNumber": "5555555555",
	"ContactTypeName": "",
	"Country": "United States",
	"CustomerCompanyName": "KENTEL",
	"CustomerFirstName": "Carrie",
	"CustomerID": "2108754",
	"CustomerLastName": "Madison",
	"DateCreated": "2016-01-26T20:55:53.227",
	"DeclineToProvideEmail": "false",
	"Email": "carry@test.iq",
	"EmployeeName": "iQmetrix Employee",
	"EmployeeNameAssignedTo": "iQmetrix Employee",
	"IndustryTypeName": "",
	"MultiLevelPriceID": "1",
	"NumberOfActivations": "0",
	"PositionTypeName": "",
	"PostalCode": "90123",
	"Province": "ND",
	"TracPointMemberNumber": "C2981754hduw",
	"TypeOfCustomer": "3",
	"VIPCustomer": "0"
}
```

| Name | Description |
|:-----|:------------|
| Address (`VARCHAR(50)`) | Address - first line of the address | 
| Address2 (`VARCHAR(50)`) | Address 2 - second line of the address, if necessary | 
| BillingAccountNumber (`NVARCHAR(MAX)`) | BAN -  if your company uses BAN you will enter it in the Customer profile and it will show here | 
| City (`VARCHAR(50)`) | City - customer's city | 
| ContactNumber (`VARCHAR(200)`) | Contact # - the number that is selected on the customer's profile, it can be any of the number options there | 
| ContactTypeName (`NVARCHAR(MAX)`) | Contact Type - as defined in General Customer Setup and assigned in the Custom Fields section on the customer's profile | 
| Country (`VARCHAR(50)`) | Country - customer's country | 
| CustomerCompanyName (`VARCHAR(50)`) | Company Name - may be blank depending on the kind of customer | 
| CustomerFirstName (`VARCHAR(50)`) | First Name - may be blank depending on the kind of customer | 
| CustomerID (`INT`) | Identifier for a Customer in RQ | 
| CustomerLastName (`VARCHAR(50)`) | Last Name - may be blank depending on the kind of customer | 
| DateCreated (`DateTime`) | Created On - day and time the customer's profile was created | 
| DeclineToProvideEmail (`BIT`) | Decline Email - the option for customers to decline email | 
| Email (`VARCHAR(200)`) | Email - may be blank, if so, the context menu will not have the Email Customer option | 
| EmployeeName (`VARCHAR(51)`) | Created By - employee who created the profile | 
| EmployeeNameAssignedTo (`VARCHAR(51)`) | Assigned To - may be blank if the customer has not been assigned to an employee | 
| IndustryTypeName (`NVARCHAR(MAX)`) | Industry Type - as defined in General Customer Setup and assigned in the Custom Fields section on the customer's profile | 
| MultiLevelPriceID (`INT`) | Pricing Group - as defined in Multi-Level Pricing - Setup and assigned in the Discount Level field in the More Information section on the customer's profile | 
| NumberOfActivations (`INT`) | # of Activations - number of Activations the customer has completed as recorded in RQ | 
| PositionTypeName (`NVARCHAR(MAX)`) | Position Type - as defined in General Customer Setup and assigned in the Custom Fields section on the customer's profile | 
| PostalCode (`VARCHAR(15)`) | Zip/Postal Code - zip code (USA) or postal code (Canada) | 
| Province (`VARCHAR(50)`) | State/Province - customer's state or province | 
| TracPointMemberNumber (`VARCHAR(30)`) | Member # - this number is automatically generated when a new customer is created | 
| TypeOfCustomer (`INT`) | Type Of Customer - 0 for Company, or 3 for Individual | 
| VIPCustomer (`TINYINT`) | VIP Customer - will be checked if this is a VIP Customer  | 






## Requests



<h3 id='getting-the-customer-list-report' class='clickable-header top-level-header'>Getting the Customer List Report</h3>

For more information, see {{support_CustomerListReport}}.

<h4>Request</h4>

<pre>
GET /reports/customerlistreport?StartDate={StartDate}&StopDate={StopDate}&TypeOfCustomer={TypeOfCustomer}&FilterBy={FilterBy}&StoreIDLoggedIn={StoreIDLoggedIn}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
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
        <code>TypeOfCustomer</code> (<strong>Required</strong>)  - Acceptable values include -1 for all types, 0 for Company, 1 for Division, 2 for Group and 3 for Individual
    </li>
    
    <li>
        <code>FilterBy</code> (<strong>Required</strong>)  - Acceptable values include 0 for All Customers, 1 for First Activation and 2 for Sales
    </li>
    
    <li>
        <code>StoreIDLoggedIn</code> (<strong>Required</strong>)  - Identifier for a store in RQ. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-a-list-of-stores-in-rq'>Getting A List of Stores in RQ</a>
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
    <li class="active"><a href="#http-getting-the-customer-list-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-customer-list-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-customer-list-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-customer-list-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-customer-list-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-customer-list-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-customer-list-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-customer-list-report">
<pre id="http-code-getting-the-customer-list-report"><code class="language-http">GET /reports/customerlistreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-customer-list-report">
<pre id="curl-code-getting-the-customer-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/customerlistreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-customer-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-customer-list-report"><code class="language-csharp">static IRestResponse GettingTheCustomerListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/customerlistreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-customer-list-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-customer-list-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheCustomerListReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/customerlistreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-customer-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-customer-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/customerlistreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[customerlistreportdata](#CustomerListReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-customer-list-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-customer-list-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-customer-list-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-customer-list-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-customer-list-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-customer-list-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-customer-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Address": "12 Hello St.",
        "Address2": "n/a",
        "BillingAccountNumber": "",
        "City": "Fargo",
        "ContactNumber": "5555555555",
        "ContactTypeName": "",
        "Country": "United States",
        "CustomerCompanyName": "KENTEL",
        "CustomerFirstName": "Carrie",
        "CustomerID": 2108754,
        "CustomerLastName": "Madison",
        "DateCreated": "2016-01-26T20:55:53.227",
        "DeclineToProvideEmail": false,
        "Email": "carry@test.iq",
        "EmployeeName": "iQmetrix Employee",
        "EmployeeNameAssignedTo": "iQmetrix Employee",
        "IndustryTypeName": "",
        "MultiLevelPriceID": 1,
        "NumberOfActivations": 0,
        "PositionTypeName": "",
        "PostalCode": "90123",
        "Province": "ND",
        "TracPointMemberNumber": "C2981754hduw",
        "TypeOfCustomer": 3,
        "VIPCustomer": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-customer-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Address": "12 Hello St.",
            "Address2": "n/a",
            "BillingAccountNumber": "",
            "City": "Fargo",
            "ContactNumber": "5555555555",
            "ContactTypeName": "",
            "Country": "United States",
            "CustomerCompanyName": "KENTEL",
            "CustomerFirstName": "Carrie",
            "CustomerID": 2108754,
            "CustomerLastName": "Madison",
            "DateCreated": "2016-01-26T20:55:53.227",
            "DeclineToProvideEmail": false,
            "Email": "carry@test.iq",
            "EmployeeName": "iQmetrix Employee",
            "EmployeeNameAssignedTo": "iQmetrix Employee",
            "IndustryTypeName": "",
            "MultiLevelPriceID": 1,
            "NumberOfActivations": 0,
            "PositionTypeName": "",
            "PostalCode": "90123",
            "Province": "ND",
            "TracPointMemberNumber": "C2981754hduw",
            "TypeOfCustomer": 3,
            "VIPCustomer": 0
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-customer-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Address>12 Hello St.</Address>
    <Address2>n/a</Address2>
    <BillingAccountNumber></BillingAccountNumber>
    <City>Fargo</City>
    <ContactNumber>5555555555</ContactNumber>
    <ContactTypeName></ContactTypeName>
    <Country>United States</Country>
    <CustomerCompanyName>KENTEL</CustomerCompanyName>
    <CustomerFirstName>Carrie</CustomerFirstName>
    <CustomerID>2108754</CustomerID>
    <CustomerLastName>Madison</CustomerLastName>
    <DateCreated>2016-01-26T20:55:53.227</DateCreated>
    <DeclineToProvideEmail>false</DeclineToProvideEmail>
    <Email>carry@test.iq</Email>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeNameAssignedTo>iQmetrix Employee</EmployeeNameAssignedTo>
    <IndustryTypeName></IndustryTypeName>
    <MultiLevelPriceID>1</MultiLevelPriceID>
    <NumberOfActivations>0</NumberOfActivations>
    <PositionTypeName></PositionTypeName>
    <PostalCode>90123</PostalCode>
    <Province>ND</Province>
    <TracPointMemberNumber>C2981754hduw</TracPointMemberNumber>
    <TypeOfCustomer>3</TypeOfCustomer>
    <VIPCustomer>0</VIPCustomer>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-customer-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Address>12 Hello St.</Address>
    <Address2>n/a</Address2>
    <BillingAccountNumber></BillingAccountNumber>
    <City>Fargo</City>
    <ContactNumber>5555555555</ContactNumber>
    <ContactTypeName></ContactTypeName>
    <Country>United States</Country>
    <CustomerCompanyName>KENTEL</CustomerCompanyName>
    <CustomerFirstName>Carrie</CustomerFirstName>
    <CustomerID>2108754</CustomerID>
    <CustomerLastName>Madison</CustomerLastName>
    <DateCreated>2016-01-26T20:55:53.227</DateCreated>
    <DeclineToProvideEmail>false</DeclineToProvideEmail>
    <Email>carry@test.iq</Email>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeNameAssignedTo>iQmetrix Employee</EmployeeNameAssignedTo>
    <IndustryTypeName></IndustryTypeName>
    <MultiLevelPriceID>1</MultiLevelPriceID>
    <NumberOfActivations>0</NumberOfActivations>
    <PositionTypeName></PositionTypeName>
    <PostalCode>90123</PostalCode>
    <Province>ND</Province>
    <TracPointMemberNumber>C2981754hduw</TracPointMemberNumber>
    <TypeOfCustomer>3</TypeOfCustomer>
    <VIPCustomer>0</VIPCustomer>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-customer-list-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Address,Address2,BillingAccountNumber,City,ContactNumber,ContactTypeName,Country,CustomerCompanyName,CustomerFirstName,CustomerID,CustomerLastName,DateCreated,DeclineToProvideEmail,Email,EmployeeName,EmployeeNameAssignedTo,IndustryTypeName,MultiLevelPriceID,NumberOfActivations,PositionTypeName,PostalCode,Province,TracPointMemberNumber,TypeOfCustomer,VIPCustomer
12 Hello St.,n/a,,Fargo,5555555555,,United States,KENTEL,Carrie,2108754,Madison,2016-01-26T20:55:53.227,false,carry@test.iq,iQmetrix Employee,iQmetrix Employee,,1,0,,90123,ND,C2981754hduw,3,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-customer-list-report">
            
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

    
