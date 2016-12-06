---
title:  SellPro Reports
permalink: /api/SellPro-Reports/
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

## EmployeeListReportData

```json
{
	"Address": "127 starlight lane",
	"Cellular_Number": "5555555555",
	"City": "Fargo",
	"DefaultLocation": "null",
	"DefaultZoneForWho": "null",
	"Email": "sams@kentel.com",
	"EmailAddress": "sams@kentel.com",
	"Employee_Name": "Sam Smith",
	"ID_Number": "59",
	"IsPartTime": "false",
	"Last_Name": "Smith",
	"LastHireDate": "2015-07-03T22:31:05.403",
	"Location": "100: My Network LLC - Anchorage",
	"PersonalEmail": "sam@yopmail.com",
	"Postal_Code": "90123",
	"Province": "ND",
	"RoleDescription": "Sales Representative",
	"ScheduledTerminationDate": "2015-11-22T08:00:00.000",
	"SMS_Number": "5555555555@yopmail.com",
	"SpecialIdentifier": "912345987654321",
	"StartDate": "2010-11-22T10:06:35.133",
	"Status": "Enabled",
	"TerminationDate": "2015-11-22T08:00:25.345",
	"Title": "Wireless Consultant",
	"Username": "Sam.Smith",
	"Work_Number": "5555555555"
}
```

| Name | Description |
|:-----|:------------|
| Address (`VARCHAR(50)`) | Address - employee's address | 
| Cellular_Number (`NVARCHAR(MAX)`) | Cell Phone # - employee's cell phone number | 
| City (`VARCHAR(50)`) | City - employee's city | 
| DefaultLocation (`INT`) | Primary Location - primary location if one has been assigned. DefaultLocation and DefaultZoneForWho are used to determine this value | 
| DefaultZoneForWho (`TINYINT`) | Primary Location - primary location if one has been assigned. DefaultLocation and DefaultZoneForWho are used to determine this value | 
| Email (`VARCHAR(50)`) | Email Address - employee's work email address | 
| EmailAddress (`VARCHAR(50)`) | Email  | 
| Employee_Name (`VARCHAR(51)`) | Employee - name of the employee as entered on their employee profile | 
| ID_Number (`INT`) | Internal identifier for employee in RQ | 
| IsPartTime (`BIT`) | Part Time - indicates if an employee is Part Time | 
| Last_Name (`VARCHAR(25)`) | Employee last name | 
| LastHireDate (`VARCHAR(50)`) | Hire Date - day and date the employee was hired | 
| Location (`VARCHAR(51)`) | Location - Only present if Unique is not -1. Every location the employee is assigned to | 
| PersonalEmail (`VARCHAR(50)`) | Personal Email - employee's personal email address | 
| Postal_Code (`VARCHAR(15)`) | Zip/Postal Code - zip code (USA) or postal code (Canada) | 
| Province (`VARCHAR(50)`) | Province - employee's province or state | 
| RoleDescription (`NVARCHAR(MAX)`) | Security Role - security role assigned to this employee | 
| ScheduledTerminationDate (`DateTime`) | Scheduled termination date | 
| SMS_Number (`VARCHAR(50)`) | SMS # - employee's text number | 
| SpecialIdentifier (`VARCHAR(25)`) | ID # - ID number assigned when hired | 
| StartDate (`DateTime`) | Start Date | 
| Status (`VARCHAR(8)`) | Status - shows if the employee is enabled or disabled if Any Status is selected | 
| TerminationDate (`DateTime`) | Termination Date - date of termination (date the employee was disabled) | 
| Title (`VARCHAR(50)`) | Title - title assigned to this employee | 
| Username (`VARCHAR(25)`) | Username - username of the employee as entered on their employee profile | 
| Work_Number (`DateTime`) | Work Phone # - employee's work number | 


## LocationMasterListReportData

```json
{
	"Abbreviation": "LIT22",
	"Address": "4970 Hillside Avenue",
	"AddressVerified": "Not Verified",
	"AdjustDST": "false",
	"BankDetails": "CashSmart",
	"CashPolicy": "Single-Drawer",
	"ChannelName": "Alabama",
	"City": "Kansas",
	"Comment_on_OE": "false",
	"Country": "United States",
	"DepositTaken": "0",
	"Disabled": "1",
	"DistrictName": "Smithton",
	"EmailAddress": "abarea@kentel.com",
	"FaxNumber": "5555555555",
	"GeneralLocationNotes": "note",
	"GLCode": "-MILLH",
	"HideCustomerAddress": "false",
	"InsuranceAmount": "0",
	"InsuranceCompany": "Safefair",
	"LandlordName": "Jim Jones",
	"LandlordNotes": "sample note",
	"Latitude": "50.443559",
	"LeaseEndDate": "2014-12-24T00:00:00",
	"LeaseNotes": "note",
	"LeaseStartDate": "2014-11-26T00:00:00",
	"LocationCode": "500",
	"LocationEntityID": "48540",
	"Longitude": "-104.612034",
	"ManagerCommissionable": "false",
	"ManagerEmployeeID": "233",
	"MaxCashDrawer": "0",
	"OtherCharges": "0",
	"PAW_on_OE": "false",
	"Phone_on_OE": "true",
	"PhoneNumber": "4353424234",
	"PropertyTaxes": "0",
	"RegionName": "Abarea",
	"RelocationDate": "2016-02-26T00:00:00",
	"Rent": "0",
	"SaleInvoiceComment": "Sale Invoice Comments",
	"Serial_on_OE": "false",
	"SquareFootage": "0",
	"StaffLevel": "12",
	"StateProv": "AL",
	"StoreID": "1187",
	"StoreName": "Dufferin Mall",
	"StoreType": "Retail Store",
	"Taxes": "GOODS AND SERVICES TAX (GST)",
	"TimeZone": "(GMT-06:00) Saskatchewan",
	"UseLocationEmail": "false",
	"ZipPostal": "90210"
}
```

| Name | Description |
|:-----|:------------|
| Abbreviation (`VARCHAR(5)`) | Abbreviation - this cannot be edited | 
| Address (`NVARCHAR(MAX)`) | Address - address assigned to location | 
| AddressVerified (`VARCHAR(12)`) | Address Verified - if the address can not be verified then you will have the option to edit the Latitude and Longitude to verify it | 
| AdjustDST (`BIT`) | Adjust DST - check if the location adjusts for daylight savings | 
| BankDetails (`NVARCHAR(MAX)`) | Bank Details - the Banks name for the location | 
| CashPolicy (`VARCHAR(13)`) | Cash Policy - states the cash policy (single/multi-drawer) | 
| ChannelName (`NVARCHAR(MAX)`) | Channel - channel the region is assigned to | 
| City (`VARCHAR(50)`) | City - city the location resides in | 
| Comment_on_OE (`BIT`) | Comment on OE - show product and location comments on sales order | 
| Country (`VARCHAR(50)`) | Country - country the location is located in | 
| DepositTaken (`MONEY`) | Deposit Taken - lists the deposit if applicable | 
| Disabled (`INT`) | Disable - indicates if the location is enabled or disabled | 
| DistrictName (`NVARCHAR(MAX)`) | District - district the location is assigned to | 
| EmailAddress (`VARCHAR(255)`) | Email Address - email address assigned to the location | 
| FaxNumber (`VARCHAR(10)`) | Fax # - Fax # listed under the location | 
| GeneralLocationNotes (`VARCHAR(255)`) | General Location Notes - notes specific to the location | 
| GLCode (`VARCHAR(100)`) | Code - coded associated to the location | 
| HideCustomerAddress (`BIT`) | Hide Customer Address - prevents the customers address from being seen on an invoice | 
| InsuranceAmount (`MONEY`) | Insurance - cost of Insurance | 
| InsuranceCompany (`NVARCHAR(MAX)`) | Insurance Company - name of the insurance company | 
| LandlordName (`NVARCHAR(MAX)`) | Landlord Name - name of the landlord | 
| LandlordNotes (`NVARCHAR(MAX)`) | Landlord Notes - notes specific to the landlord | 
| Latitude (`DECIMAL`) | Latitude - latitude location of the store | 
| LeaseEndDate (`DateTime`) | Lease End Date - the day the lease ends | 
| LeaseNotes (`NVARCHAR(MAX)`) | Lease Notes - notes specific to the lease | 
| LeaseStartDate (`DateTime`) | Lease Start Date - day the lease started | 
| LocationCode (`VARCHAR(100)`) | Location Code - code entered in the property details tab in the Location Setup | 
| LocationEntityID (`INT`) | Identifier of the store as a <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a> in Entity Store | 
| Longitude (`DECIMAL`) | Longitude - longitude location of the store | 
| ManagerCommissionable (`BIT`) | Manager Commissionable - indicates if the manager is commissionable. | 
| ManagerEmployeeID (`INT`) | Manager - manager assigned to the location | 
| MaxCashDrawer (`MONEY`) | Max Cash Drawer - maximum amount of cash allowed in a cash drawer | 
| OtherCharges (`MONEY`) | Other Charges - other charges associated to the location | 
| PAW_on_OE (`BIT`) | PAW on OE - launch PAW on sales orders | 
| Phone_on_OE (`BIT`) | Force phone number for entry on sales orders | 
| PhoneNumber (`VARCHAR(10)`) | Phone # - designated number for the location | 
| PropertyTaxes (`MONEY`) | Property Taxes - applicable property taxes | 
| RegionName (`NVARCHAR(MAX)`) | Region - region the district is assigned to | 
| RelocationDate (`DateTime`) | Relocation Date - lists the date of the relocation if applicable | 
| Rent (`MONEY`) | Rent - rent amount for the location | 
| SaleInvoiceComment (`NVARCHAR(MAX)`) | Sale Invoice Comment - locations sales invoice comment | 
| Serial_on_OE (`BIT`) | Serial # on OE - force serial # for entry on sales orders | 
| SquareFootage (`INT`) | Square Feet - approx square feet of the store | 
| StaffLevel (`DECIMAL`) | Staff Level - designated staffing level for the location | 
| StateProv (`NVARCHAR(3)`) | State/Prov - state or province the location is located in | 
| StoreID (`INT`) | Internal identifier for the store in RQ | 
| StoreName (`NVARCHAR(MAX)`) | Store Name - name of the store | 
| StoreType (`NVARCHAR(MAX)`) | Store Type - will state the store type | 
| Taxes (`NVARCHAR(MAX)`) | Taxes - taxes assigned to the location | 
| TimeZone (`VARCHAR(200)`) | Time Zone - time zone assigned to location | 
| UseLocationEmail (`BIT`) | Use Location for Email - use the location for the email contact | 
| ZipPostal (`VARCHAR(15)`) | Zip/Postal - zip/postal for the location | 


## Relationship

```json
{
	"CompanyID": "14831",
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
        "CompanyID": 14831,
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
            "CompanyID": 14831,
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
    <CompanyID>14831</CompanyID>
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
    <CompanyID>14831</CompanyID>
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
14831,KENTEL</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-employee-list-report' class='clickable-header top-level-header'>Getting the Employee List Report</h3>

For more information, see {{support_EmployeeListReport}}.   


<h4>Request</h4>

<pre>
GET /partner/SellPro/employeelistreport?CompanyId={CompanyId}&Status={Status}&Unique={Unique}&GroupID={GroupID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>Status</code> (<strong>Required</strong>)  - Select employees with a status of Disabled (0), Enabled (1) or Any Status (2)
    </li>
    
    <li>
        <code>Unique</code> (<strong>Required</strong>)  - A flag to indicate if the "Master List" should be returned. If you choose to search by a district, region or the entire company, use a value of 1 for this paramter. A master list of employees, will display each employee once no matter how many locations they are assigned to
    </li>
    
    <li>
        <code>GroupID</code> (<strong>Required</strong>)  - Identifier for an Employee group in RQ. Use -1 for all groups
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
    <li class="active"><a href="#http-getting-the-employee-list-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-employee-list-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-employee-list-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-employee-list-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-employee-list-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-employee-list-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-employee-list-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-employee-list-report">
<pre id="http-code-getting-the-employee-list-report"><code class="language-http">GET /partner/SellPro/employeelistreport?CompanyId=14831&Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-employee-list-report">
<pre id="curl-code-getting-the-employee-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/employeelistreport?CompanyId=14831&Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-employee-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-employee-list-report"><code class="language-csharp">static IRestResponse GettingTheEmployeeListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/employeelistreport?CompanyId=14831&Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-employee-list-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-employee-list-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheEmployeeListReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/employeelistreport?CompanyId=14831&Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-employee-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-employee-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/employeelistreport?CompanyId=14831&Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[employeelistreportdata](#EmployeeListReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-employee-list-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-employee-list-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-employee-list-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-employee-list-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-employee-list-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-employee-list-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-employee-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Address": "127 starlight lane",
        "Cellular_Number": "5555555555",
        "City": "Fargo",
        "DefaultLocation": null,
        "DefaultZoneForWho": null,
        "Email": "sams@kentel.com",
        "EmailAddress": "sams@kentel.com",
        "Employee_Name": "Sam Smith",
        "ID_Number": 59,
        "IsPartTime": false,
        "Last_Name": "Smith",
        "LastHireDate": "2015-07-03T22:31:05.403",
        "Location": "100: My Network LLC - Anchorage",
        "PersonalEmail": "sam@yopmail.com",
        "Postal_Code": "90123",
        "Province": "ND",
        "RoleDescription": "Sales Representative",
        "ScheduledTerminationDate": "2015-11-22T08:00:00.000",
        "SMS_Number": "5555555555@yopmail.com",
        "SpecialIdentifier": "912345987654321",
        "StartDate": "2010-11-22T10:06:35.133",
        "Status": "Enabled",
        "TerminationDate": "2015-11-22T08:00:25.345",
        "Title": "Wireless Consultant",
        "Username": "Sam.Smith",
        "Work_Number": "5555555555"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-employee-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Address": "127 starlight lane",
            "Cellular_Number": "5555555555",
            "City": "Fargo",
            "DefaultLocation": null,
            "DefaultZoneForWho": null,
            "Email": "sams@kentel.com",
            "EmailAddress": "sams@kentel.com",
            "Employee_Name": "Sam Smith",
            "ID_Number": 59,
            "IsPartTime": false,
            "Last_Name": "Smith",
            "LastHireDate": "2015-07-03T22:31:05.403",
            "Location": "100: My Network LLC - Anchorage",
            "PersonalEmail": "sam@yopmail.com",
            "Postal_Code": "90123",
            "Province": "ND",
            "RoleDescription": "Sales Representative",
            "ScheduledTerminationDate": "2015-11-22T08:00:00.000",
            "SMS_Number": "5555555555@yopmail.com",
            "SpecialIdentifier": "912345987654321",
            "StartDate": "2010-11-22T10:06:35.133",
            "Status": "Enabled",
            "TerminationDate": "2015-11-22T08:00:25.345",
            "Title": "Wireless Consultant",
            "Username": "Sam.Smith",
            "Work_Number": "5555555555"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-employee-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Address>127 starlight lane</Address>
    <Cellular_Number>5555555555</Cellular_Number>
    <City>Fargo</City>
    <DefaultLocation>null</DefaultLocation>
    <DefaultZoneForWho>null</DefaultZoneForWho>
    <Email>sams@kentel.com</Email>
    <EmailAddress>sams@kentel.com</EmailAddress>
    <Employee_Name>Sam Smith</Employee_Name>
    <ID_Number>59</ID_Number>
    <IsPartTime>false</IsPartTime>
    <Last_Name>Smith</Last_Name>
    <LastHireDate>2015-07-03T22:31:05.403</LastHireDate>
    <Location>100: My Network LLC - Anchorage</Location>
    <PersonalEmail>sam@yopmail.com</PersonalEmail>
    <Postal_Code>90123</Postal_Code>
    <Province>ND</Province>
    <RoleDescription>Sales Representative</RoleDescription>
    <ScheduledTerminationDate>2015-11-22T08:00:00.000</ScheduledTerminationDate>
    <SMS_Number>5555555555@yopmail.com</SMS_Number>
    <SpecialIdentifier>912345987654321</SpecialIdentifier>
    <StartDate>2010-11-22T10:06:35.133</StartDate>
    <Status>Enabled</Status>
    <TerminationDate>2015-11-22T08:00:25.345</TerminationDate>
    <Title>Wireless Consultant</Title>
    <Username>Sam.Smith</Username>
    <Work_Number>5555555555</Work_Number>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-employee-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Address>127 starlight lane</Address>
    <Cellular_Number>5555555555</Cellular_Number>
    <City>Fargo</City>
    <DefaultLocation>null</DefaultLocation>
    <DefaultZoneForWho>null</DefaultZoneForWho>
    <Email>sams@kentel.com</Email>
    <EmailAddress>sams@kentel.com</EmailAddress>
    <Employee_Name>Sam Smith</Employee_Name>
    <ID_Number>59</ID_Number>
    <IsPartTime>false</IsPartTime>
    <Last_Name>Smith</Last_Name>
    <LastHireDate>2015-07-03T22:31:05.403</LastHireDate>
    <Location>100: My Network LLC - Anchorage</Location>
    <PersonalEmail>sam@yopmail.com</PersonalEmail>
    <Postal_Code>90123</Postal_Code>
    <Province>ND</Province>
    <RoleDescription>Sales Representative</RoleDescription>
    <ScheduledTerminationDate>2015-11-22T08:00:00.000</ScheduledTerminationDate>
    <SMS_Number>5555555555@yopmail.com</SMS_Number>
    <SpecialIdentifier>912345987654321</SpecialIdentifier>
    <StartDate>2010-11-22T10:06:35.133</StartDate>
    <Status>Enabled</Status>
    <TerminationDate>2015-11-22T08:00:25.345</TerminationDate>
    <Title>Wireless Consultant</Title>
    <Username>Sam.Smith</Username>
    <Work_Number>5555555555</Work_Number>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-employee-list-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Address,Cellular_Number,City,DefaultLocation,DefaultZoneForWho,Email,EmailAddress,Employee_Name,ID_Number,IsPartTime,Last_Name,LastHireDate,Location,PersonalEmail,Postal_Code,Province,RoleDescription,ScheduledTerminationDate,SMS_Number,SpecialIdentifier,StartDate,Status,TerminationDate,Title,Username,Work_Number
127 starlight lane,5555555555,Fargo,null,null,sams@kentel.com,sams@kentel.com,Sam Smith,59,false,Smith,2015-07-03T22:31:05.403,100: My Network LLC - Anchorage,sam@yopmail.com,90123,ND,Sales Representative,2015-11-22T08:00:00.000,5555555555@yopmail.com,912345987654321,2010-11-22T10:06:35.133,Enabled,2015-11-22T08:00:25.345,Wireless Consultant,Sam.Smith,5555555555</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-employee-list-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-location-master-list-report' class='clickable-header top-level-header'>Getting the Location Master List Report</h3>

For more information, see {{support_LocationMasterListReport}}.   

<h4>Request</h4>

<pre>
GET /partner/SellPro/locationmasterlistreport?CompanyId={CompanyId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
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
    <li class="active"><a href="#http-getting-the-location-master-list-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-location-master-list-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-location-master-list-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-location-master-list-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-location-master-list-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-location-master-list-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-location-master-list-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-location-master-list-report">
<pre id="http-code-getting-the-location-master-list-report"><code class="language-http">GET /partner/SellPro/locationmasterlistreport?CompanyId=14831
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-location-master-list-report">
<pre id="curl-code-getting-the-location-master-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/locationmasterlistreport?CompanyId=14831"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-location-master-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-location-master-list-report"><code class="language-csharp">static IRestResponse GettingTheLocationMasterListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/locationmasterlistreport?CompanyId=14831");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-location-master-list-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-location-master-list-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheLocationMasterListReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/locationmasterlistreport?CompanyId=14831");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-location-master-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-location-master-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/SellPro/locationmasterlistreport?CompanyId=14831', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[locationmasterlistreportdata](#LocationMasterListReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-location-master-list-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-location-master-list-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-location-master-list-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-location-master-list-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-location-master-list-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-location-master-list-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-location-master-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Abbreviation": "LIT22",
        "Address": "4970 Hillside Avenue",
        "AddressVerified": "Not Verified",
        "AdjustDST": false,
        "BankDetails": "CashSmart",
        "CashPolicy": "Single-Drawer",
        "ChannelName": "Alabama",
        "City": "Kansas",
        "Comment_on_OE": false,
        "Country": "United States",
        "DepositTaken": 0,
        "Disabled": 1,
        "DistrictName": "Smithton",
        "EmailAddress": "abarea@kentel.com",
        "FaxNumber": "5555555555",
        "GeneralLocationNotes": "note",
        "GLCode": "-MILLH",
        "HideCustomerAddress": false,
        "InsuranceAmount": 0,
        "InsuranceCompany": "Safefair",
        "LandlordName": "Jim Jones",
        "LandlordNotes": "sample note",
        "Latitude": 50.443559,
        "LeaseEndDate": "2014-12-24T00:00:00",
        "LeaseNotes": "note",
        "LeaseStartDate": "2014-11-26T00:00:00",
        "LocationCode": "500",
        "LocationEntityID": 48540,
        "Longitude": -104.612034,
        "ManagerCommissionable": false,
        "ManagerEmployeeID": 233,
        "MaxCashDrawer": 0,
        "OtherCharges": 0,
        "PAW_on_OE": false,
        "Phone_on_OE": true,
        "PhoneNumber": "4353424234",
        "PropertyTaxes": 0,
        "RegionName": "Abarea",
        "RelocationDate": "2016-02-26T00:00:00",
        "Rent": 0,
        "SaleInvoiceComment": "Sale Invoice Comments",
        "Serial_on_OE": false,
        "SquareFootage": 0,
        "StaffLevel": 12,
        "StateProv": "AL",
        "StoreID": 1187,
        "StoreName": "Dufferin Mall",
        "StoreType": "Retail Store",
        "Taxes": "GOODS AND SERVICES TAX (GST)",
        "TimeZone": "(GMT-06:00) Saskatchewan",
        "UseLocationEmail": false,
        "ZipPostal": "90210"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-location-master-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Abbreviation": "LIT22",
            "Address": "4970 Hillside Avenue",
            "AddressVerified": "Not Verified",
            "AdjustDST": false,
            "BankDetails": "CashSmart",
            "CashPolicy": "Single-Drawer",
            "ChannelName": "Alabama",
            "City": "Kansas",
            "Comment_on_OE": false,
            "Country": "United States",
            "DepositTaken": 0,
            "Disabled": 1,
            "DistrictName": "Smithton",
            "EmailAddress": "abarea@kentel.com",
            "FaxNumber": "5555555555",
            "GeneralLocationNotes": "note",
            "GLCode": "-MILLH",
            "HideCustomerAddress": false,
            "InsuranceAmount": 0,
            "InsuranceCompany": "Safefair",
            "LandlordName": "Jim Jones",
            "LandlordNotes": "sample note",
            "Latitude": 50.443559,
            "LeaseEndDate": "2014-12-24T00:00:00",
            "LeaseNotes": "note",
            "LeaseStartDate": "2014-11-26T00:00:00",
            "LocationCode": "500",
            "LocationEntityID": 48540,
            "Longitude": -104.612034,
            "ManagerCommissionable": false,
            "ManagerEmployeeID": 233,
            "MaxCashDrawer": 0,
            "OtherCharges": 0,
            "PAW_on_OE": false,
            "Phone_on_OE": true,
            "PhoneNumber": "4353424234",
            "PropertyTaxes": 0,
            "RegionName": "Abarea",
            "RelocationDate": "2016-02-26T00:00:00",
            "Rent": 0,
            "SaleInvoiceComment": "Sale Invoice Comments",
            "Serial_on_OE": false,
            "SquareFootage": 0,
            "StaffLevel": 12,
            "StateProv": "AL",
            "StoreID": 1187,
            "StoreName": "Dufferin Mall",
            "StoreType": "Retail Store",
            "Taxes": "GOODS AND SERVICES TAX (GST)",
            "TimeZone": "(GMT-06:00) Saskatchewan",
            "UseLocationEmail": false,
            "ZipPostal": "90210"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-location-master-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Abbreviation>LIT22</Abbreviation>
    <Address>4970 Hillside Avenue</Address>
    <AddressVerified>Not Verified</AddressVerified>
    <AdjustDST>false</AdjustDST>
    <BankDetails>CashSmart</BankDetails>
    <CashPolicy>Single-Drawer</CashPolicy>
    <ChannelName>Alabama</ChannelName>
    <City>Kansas</City>
    <Comment_on_OE>false</Comment_on_OE>
    <Country>United States</Country>
    <DepositTaken>0</DepositTaken>
    <Disabled>1</Disabled>
    <DistrictName>Smithton</DistrictName>
    <EmailAddress>abarea@kentel.com</EmailAddress>
    <FaxNumber>5555555555</FaxNumber>
    <GeneralLocationNotes>note</GeneralLocationNotes>
    <GLCode>-MILLH</GLCode>
    <HideCustomerAddress>false</HideCustomerAddress>
    <InsuranceAmount>0</InsuranceAmount>
    <InsuranceCompany>Safefair</InsuranceCompany>
    <LandlordName>Jim Jones</LandlordName>
    <LandlordNotes>sample note</LandlordNotes>
    <Latitude>50.443559</Latitude>
    <LeaseEndDate>2014-12-24T00:00:00</LeaseEndDate>
    <LeaseNotes>note</LeaseNotes>
    <LeaseStartDate>2014-11-26T00:00:00</LeaseStartDate>
    <LocationCode>500</LocationCode>
    <LocationEntityID>48540</LocationEntityID>
    <Longitude>-104.612034</Longitude>
    <ManagerCommissionable>false</ManagerCommissionable>
    <ManagerEmployeeID>233</ManagerEmployeeID>
    <MaxCashDrawer>0</MaxCashDrawer>
    <OtherCharges>0</OtherCharges>
    <PAW_on_OE>false</PAW_on_OE>
    <Phone_on_OE>true</Phone_on_OE>
    <PhoneNumber>4353424234</PhoneNumber>
    <PropertyTaxes>0</PropertyTaxes>
    <RegionName>Abarea</RegionName>
    <RelocationDate>2016-02-26T00:00:00</RelocationDate>
    <Rent>0</Rent>
    <SaleInvoiceComment>Sale Invoice Comments</SaleInvoiceComment>
    <Serial_on_OE>false</Serial_on_OE>
    <SquareFootage>0</SquareFootage>
    <StaffLevel>12</StaffLevel>
    <StateProv>AL</StateProv>
    <StoreID>1187</StoreID>
    <StoreName>Dufferin Mall</StoreName>
    <StoreType>Retail Store</StoreType>
    <Taxes>GOODS AND SERVICES TAX (GST)</Taxes>
    <TimeZone>(GMT-06:00) Saskatchewan</TimeZone>
    <UseLocationEmail>false</UseLocationEmail>
    <ZipPostal>90210</ZipPostal>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-location-master-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Abbreviation>LIT22</Abbreviation>
    <Address>4970 Hillside Avenue</Address>
    <AddressVerified>Not Verified</AddressVerified>
    <AdjustDST>false</AdjustDST>
    <BankDetails>CashSmart</BankDetails>
    <CashPolicy>Single-Drawer</CashPolicy>
    <ChannelName>Alabama</ChannelName>
    <City>Kansas</City>
    <Comment_on_OE>false</Comment_on_OE>
    <Country>United States</Country>
    <DepositTaken>0</DepositTaken>
    <Disabled>1</Disabled>
    <DistrictName>Smithton</DistrictName>
    <EmailAddress>abarea@kentel.com</EmailAddress>
    <FaxNumber>5555555555</FaxNumber>
    <GeneralLocationNotes>note</GeneralLocationNotes>
    <GLCode>-MILLH</GLCode>
    <HideCustomerAddress>false</HideCustomerAddress>
    <InsuranceAmount>0</InsuranceAmount>
    <InsuranceCompany>Safefair</InsuranceCompany>
    <LandlordName>Jim Jones</LandlordName>
    <LandlordNotes>sample note</LandlordNotes>
    <Latitude>50.443559</Latitude>
    <LeaseEndDate>2014-12-24T00:00:00</LeaseEndDate>
    <LeaseNotes>note</LeaseNotes>
    <LeaseStartDate>2014-11-26T00:00:00</LeaseStartDate>
    <LocationCode>500</LocationCode>
    <LocationEntityID>48540</LocationEntityID>
    <Longitude>-104.612034</Longitude>
    <ManagerCommissionable>false</ManagerCommissionable>
    <ManagerEmployeeID>233</ManagerEmployeeID>
    <MaxCashDrawer>0</MaxCashDrawer>
    <OtherCharges>0</OtherCharges>
    <PAW_on_OE>false</PAW_on_OE>
    <Phone_on_OE>true</Phone_on_OE>
    <PhoneNumber>4353424234</PhoneNumber>
    <PropertyTaxes>0</PropertyTaxes>
    <RegionName>Abarea</RegionName>
    <RelocationDate>2016-02-26T00:00:00</RelocationDate>
    <Rent>0</Rent>
    <SaleInvoiceComment>Sale Invoice Comments</SaleInvoiceComment>
    <Serial_on_OE>false</Serial_on_OE>
    <SquareFootage>0</SquareFootage>
    <StaffLevel>12</StaffLevel>
    <StateProv>AL</StateProv>
    <StoreID>1187</StoreID>
    <StoreName>Dufferin Mall</StoreName>
    <StoreType>Retail Store</StoreType>
    <Taxes>GOODS AND SERVICES TAX (GST)</Taxes>
    <TimeZone>(GMT-06:00) Saskatchewan</TimeZone>
    <UseLocationEmail>false</UseLocationEmail>
    <ZipPostal>90210</ZipPostal>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-location-master-list-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Abbreviation,Address,AddressVerified,AdjustDST,BankDetails,CashPolicy,ChannelName,City,Comment_on_OE,Country,DepositTaken,Disabled,DistrictName,EmailAddress,FaxNumber,GeneralLocationNotes,GLCode,HideCustomerAddress,InsuranceAmount,InsuranceCompany,LandlordName,LandlordNotes,Latitude,LeaseEndDate,LeaseNotes,LeaseStartDate,LocationCode,LocationEntityID,Longitude,ManagerCommissionable,ManagerEmployeeID,MaxCashDrawer,OtherCharges,PAW_on_OE,Phone_on_OE,PhoneNumber,PropertyTaxes,RegionName,RelocationDate,Rent,SaleInvoiceComment,Serial_on_OE,SquareFootage,StaffLevel,StateProv,StoreID,StoreName,StoreType,Taxes,TimeZone,UseLocationEmail,ZipPostal
LIT22,4970 Hillside Avenue,Not Verified,false,CashSmart,Single-Drawer,Alabama,Kansas,false,United States,0,1,Smithton,abarea@kentel.com,5555555555,note,-MILLH,false,0,Safefair,Jim Jones,sample note,50.443559,2014-12-24T00:00:00,note,2014-11-26T00:00:00,500,48540,-104.612034,false,233,0,0,false,true,4353424234,0,Abarea,2016-02-26T00:00:00,0,Sale Invoice Comments,false,0,12,AL,1187,Dufferin Mall,Retail Store,GOODS AND SERVICES TAX (GST),(GMT-06:00) Saskatchewan,false,90210</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-location-master-list-report">
            
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

    
