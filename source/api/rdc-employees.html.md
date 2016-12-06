---
title:  RQ Data Connect Employee Reports
permalink: /api/RQ-Data-Connect-Employee-Reports/
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

For a complete list of reports in RQ Data Connect, see [Report List](/rq-data-connect/report-list).


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

## AutoPunchOutReportData

```json
{
	"EmployeeID": "250",
	"Abbreviation": "84WEA",
	"StoreName": "84 West",
	"FirstName": "iQmetrix",
	"LastName": "Employee",
	"PunchInTime": "2015-07-02T12:15:02.45",
	"PunchOutTime": "2015-07-10T13:49:47.457",
	"PunchInComments": ""
}
```

| Name | Description |
|:-----|:------------|
| EmployeeID (`INT`) | Internal identifier for an employee in RQ | 
| Abbreviation (`VARCHAR(5)`) | Abbreviation - abbreviation for the location | 
| StoreName (`NVARCHAR(MAX)`) | Location - location where the auto punch was performed | 
| FirstName (`VARCHAR(25)`) | First Name - first name of the employee | 
| LastName (`VARCHAR(25)`) | Last Name - last name of the employee | 
| PunchInTime (`DateTime`) | Punch In - date and time the employee punched in | 
| PunchOutTime (`DateTime`) | Punch Out - if there is a date and time it will be a revised value and it will be blank if the software auto punched out for the employee | 
| PunchInComments (`VARCHAR(100)`) | Punch In Comments - any employee comments | 


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


## TimeAndAttendanceReportData

```json
{
	"DoubleOTClockedMinutes": "0",
	"DoubleOTScheduleMinutes": "0",
	"EmployeeCompensationType": "3",
	"EmployeeGroup": "100% (35% GP)",
	"EmployeeID": "186",
	"EmployeeLastName": "Smith",
	"EmployeeName": "Brooke Smith",
	"EmployeeUsername": "Brooke.Smith",
	"IsPartTime": "0",
	"ManagerVerified": "0",
	"OTClockedMinutes": "0",
	"OTScheduleMinutes": "105",
	"PartTimeVacationEarned": "0",
	"PersonalUsedHours": "0",
	"PT_DoubleOTVacationEarned": "0",
	"PT_OTVacationEarned": "0",
	"SickUsedHours": "0",
	"SpecialIdentifier": "912345987654321",
	"SupervisorName": "Bob Roberts",
	"SupervisorUsername": "Bob.Roberts",
	"ThresholdConflict": "0",
	"Title": "Store Clerk",
	"TotalClockedMinutes": "0",
	"TotalScheduleMinutes": "105",
	"VacationUsedHours": "0"
}
```

| Name | Description |
|:-----|:------------|
| DoubleOTClockedMinutes (`INT`) | Double OT Clocked - total of double overtime hours calculated, calculated using decimal time rather than hours:minutes | 
| DoubleOTScheduleMinutes (`INT`) | Double OT Scheduled - total of double overtime hours scheduled, calculated using decimal time rather than hours:minutes | 
| EmployeeCompensationType (`VARCHAR(50)`) | Compensation - type of compensation for the employee | 
| EmployeeGroup (`VARCHAR(50)`) | Commission - type of commission for the employee | 
| EmployeeID (`INT`) | Identifier for an Employee in RQ | 
| EmployeeLastName (`VARCHAR(25)`) | Employee last name | 
| EmployeeName (`VARCHAR(51)`) | Employee - any employee who was scheduled to work or punched in within in the report's criteria | 
| EmployeeUsername (`VARCHAR(51)`) | Username - username of the employee who was scheduled to work or punched in within in the report's criteria | 
| IsPartTime (`VARCHAR(50)`) | Part Time - a check box indicating if an employee is Part Time | 
| ManagerVerified (`TINYINT`) | Internal flag used in RQ | 
| OTClockedMinutes (`INT`) | Overtime Clocked - total of overtime hours clocked, calculated using decimal time rather than hours:minutes | 
| OTScheduleMinutes (`INT`) | Overtime Scheduled - total of overtime hours scheduled, calculated using decimal time rather than hours:minutes | 
| PartTimeVacationEarned (`DECIMAL`) | PT Vacation Earned - total amount of part time vacation earned, calculated using decimal time rather than hours:minutes | 
| PersonalUsedHours (`DECIMAL`) | Personal Used - total amount of personal days used, calculated using decimal time rather than hours:minutes | 
| PT_DoubleOTVacationEarned (`DECIMAL`) | Double OT Vacation - total amount of Double OT vacation earned, calculated using decimal time rather than hours:minutes | 
| PT_OTVacationEarned (`DECIMAL`) | OT Vacation Earned - total amount of OT vacation earned, calculated using decimal time rather than hours:minutes | 
| SickUsedHours (`DECIMAL`) | Sick Used - total amount of sick time used, calculated using decimal time rather than hours:minutes | 
| SpecialIdentifier (`VARCHAR(25)`) | ID # - ID number assigned when hired | 
| SupervisorName (`VARCHAR(51)`) | Supervisor - name of the employee's supervisor | 
| SupervisorUsername (`VARCHAR(51)`) | Supervisor Username - username of the name of the employee's supervisor | 
| ThresholdConflict (`INT`) | A flag to indicate if the employee is working in multiple locations that have different work weeks or OT parameters, highlighted in red in the report | 
| Title (`VARCHAR(50)`) | Title - title assigned to this employee | 
| TotalClockedMinutes (`INT`) | Total Clocked - total of all hours clocked, calculated using decimal time rather than hours:minutes | 
| TotalScheduleMinutes (`INT`) | Total Scheduled - total of all hours scheduled, calculated using decimal time rather than hours:minutes | 
| VacationUsedHours (`DECIMAL`) | Vacation Used - total of amount of vacation used, calculated using decimal time rather than hours:minutes | 






## Requests



<h3 id='getting-the-auto-punch-out-report' class='clickable-header top-level-header'>Getting the Auto Punch Out Report</h3>

For more information see {{support_AutoPunchOutReport}}.


<h4>Request</h4>

<pre>
GET /reports/AutoPunchOutReport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
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
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
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
    <li class="active"><a href="#http-getting-the-auto-punch-out-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-auto-punch-out-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-auto-punch-out-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-auto-punch-out-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-auto-punch-out-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-auto-punch-out-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-auto-punch-out-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-auto-punch-out-report">
<pre id="http-code-getting-the-auto-punch-out-report"><code class="language-http">GET /reports/AutoPunchOutReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-auto-punch-out-report">
<pre id="curl-code-getting-the-auto-punch-out-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/AutoPunchOutReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-auto-punch-out-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-auto-punch-out-report"><code class="language-csharp">static IRestResponse GettingTheAutoPunchOutReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/AutoPunchOutReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-auto-punch-out-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-auto-punch-out-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAutoPunchOutReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/AutoPunchOutReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-auto-punch-out-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-auto-punch-out-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/AutoPunchOutReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[autopunchoutreportdata](#AutoPunchOutReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-auto-punch-out-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-auto-punch-out-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-auto-punch-out-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-auto-punch-out-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-auto-punch-out-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-auto-punch-out-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-auto-punch-out-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "EmployeeID": 250,
        "Abbreviation": "84WEA",
        "StoreName": "84 West",
        "FirstName": "iQmetrix",
        "LastName": "Employee",
        "PunchInTime": "2015-07-02T12:15:02.45",
        "PunchOutTime": "2015-07-10T13:49:47.457",
        "PunchInComments": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-auto-punch-out-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "EmployeeID": 250,
            "Abbreviation": "84WEA",
            "StoreName": "84 West",
            "FirstName": "iQmetrix",
            "LastName": "Employee",
            "PunchInTime": "2015-07-02T12:15:02.45",
            "PunchOutTime": "2015-07-10T13:49:47.457",
            "PunchInComments": ""
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-auto-punch-out-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EmployeeID>250</EmployeeID>
    <Abbreviation>84WEA</Abbreviation>
    <StoreName>84 West</StoreName>
    <FirstName>iQmetrix</FirstName>
    <LastName>Employee</LastName>
    <PunchInTime>2015-07-02T12:15:02.45</PunchInTime>
    <PunchOutTime>2015-07-10T13:49:47.457</PunchOutTime>
    <PunchInComments></PunchInComments>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-auto-punch-out-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <EmployeeID>250</EmployeeID>
    <Abbreviation>84WEA</Abbreviation>
    <StoreName>84 West</StoreName>
    <FirstName>iQmetrix</FirstName>
    <LastName>Employee</LastName>
    <PunchInTime>2015-07-02T12:15:02.45</PunchInTime>
    <PunchOutTime>2015-07-10T13:49:47.457</PunchOutTime>
    <PunchInComments></PunchInComments>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-auto-punch-out-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>EmployeeID,Abbreviation,StoreName,FirstName,LastName,PunchInTime,PunchOutTime,PunchInComments
250,84WEA,84 West,iQmetrix,Employee,2015-07-02T12:15:02.45,2015-07-10T13:49:47.457,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-auto-punch-out-report">
            
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
GET /reports/employeelistreport?Status={Status}&Unique={Unique}&GroupID={GroupID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
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
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
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
<pre id="http-code-getting-the-employee-list-report"><code class="language-http">GET /reports/employeelistreport?Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-employee-list-report">
<pre id="curl-code-getting-the-employee-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/employeelistreport?Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-employee-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-employee-list-report"><code class="language-csharp">static IRestResponse GettingTheEmployeeListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/employeelistreport?Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/employeelistreport?Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-employee-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-employee-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/employeelistreport?Status=1&Unique=false&GroupID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
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
        
    


<h3 id='getting-the-time-and-attendance-report' class='clickable-header top-level-header'>Getting the Time and Attendance Report</h3>

For more information, see {{support_TimeAndAttendanceReport}}.

<h4>Request</h4>

<pre>
GET /reports/timeandattendancereport?StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
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
    <li class="active"><a href="#http-getting-the-time-and-attendance-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-time-and-attendance-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-time-and-attendance-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-time-and-attendance-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-time-and-attendance-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-time-and-attendance-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-time-and-attendance-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-time-and-attendance-report">
<pre id="http-code-getting-the-time-and-attendance-report"><code class="language-http">GET /reports/timeandattendancereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-time-and-attendance-report">
<pre id="curl-code-getting-the-time-and-attendance-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/timeandattendancereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-time-and-attendance-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-time-and-attendance-report"><code class="language-csharp">static IRestResponse GettingTheTimeAndAttendanceReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/timeandattendancereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-time-and-attendance-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-time-and-attendance-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheTimeAndAttendanceReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/timeandattendancereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-time-and-attendance-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-time-and-attendance-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/timeandattendancereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[[timeandattendancereportdata](#TimeAndAttendanceReportData)]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-time-and-attendance-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-time-and-attendance-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-time-and-attendance-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-time-and-attendance-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-time-and-attendance-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-time-and-attendance-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-time-and-attendance-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "DoubleOTClockedMinutes": 0,
        "DoubleOTScheduleMinutes": 0,
        "EmployeeCompensationType": "3",
        "EmployeeGroup": "100% (35% GP)",
        "EmployeeID": 186,
        "EmployeeLastName": "Smith",
        "EmployeeName": "Brooke Smith",
        "EmployeeUsername": "Brooke.Smith",
        "IsPartTime": "0",
        "ManagerVerified": 0,
        "OTClockedMinutes": 0,
        "OTScheduleMinutes": 105,
        "PartTimeVacationEarned": 0,
        "PersonalUsedHours": 0,
        "PT_DoubleOTVacationEarned": 0,
        "PT_OTVacationEarned": 0,
        "SickUsedHours": 0,
        "SpecialIdentifier": "912345987654321",
        "SupervisorName": "Bob Roberts",
        "SupervisorUsername": "Bob.Roberts",
        "ThresholdConflict": 0,
        "Title": "Store Clerk",
        "TotalClockedMinutes": 0,
        "TotalScheduleMinutes": 105,
        "VacationUsedHours": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-time-and-attendance-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "DoubleOTClockedMinutes": 0,
            "DoubleOTScheduleMinutes": 0,
            "EmployeeCompensationType": "3",
            "EmployeeGroup": "100% (35% GP)",
            "EmployeeID": 186,
            "EmployeeLastName": "Smith",
            "EmployeeName": "Brooke Smith",
            "EmployeeUsername": "Brooke.Smith",
            "IsPartTime": "0",
            "ManagerVerified": 0,
            "OTClockedMinutes": 0,
            "OTScheduleMinutes": 105,
            "PartTimeVacationEarned": 0,
            "PersonalUsedHours": 0,
            "PT_DoubleOTVacationEarned": 0,
            "PT_OTVacationEarned": 0,
            "SickUsedHours": 0,
            "SpecialIdentifier": "912345987654321",
            "SupervisorName": "Bob Roberts",
            "SupervisorUsername": "Bob.Roberts",
            "ThresholdConflict": 0,
            "Title": "Store Clerk",
            "TotalClockedMinutes": 0,
            "TotalScheduleMinutes": 105,
            "VacationUsedHours": 0
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-time-and-attendance-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DoubleOTClockedMinutes>0</DoubleOTClockedMinutes>
    <DoubleOTScheduleMinutes>0</DoubleOTScheduleMinutes>
    <EmployeeCompensationType>3</EmployeeCompensationType>
    <EmployeeGroup>100% (35% GP)</EmployeeGroup>
    <EmployeeID>186</EmployeeID>
    <EmployeeLastName>Smith</EmployeeLastName>
    <EmployeeName>Brooke Smith</EmployeeName>
    <EmployeeUsername>Brooke.Smith</EmployeeUsername>
    <IsPartTime>0</IsPartTime>
    <ManagerVerified>0</ManagerVerified>
    <OTClockedMinutes>0</OTClockedMinutes>
    <OTScheduleMinutes>105</OTScheduleMinutes>
    <PartTimeVacationEarned>0</PartTimeVacationEarned>
    <PersonalUsedHours>0</PersonalUsedHours>
    <PT_DoubleOTVacationEarned>0</PT_DoubleOTVacationEarned>
    <PT_OTVacationEarned>0</PT_OTVacationEarned>
    <SickUsedHours>0</SickUsedHours>
    <SpecialIdentifier>912345987654321</SpecialIdentifier>
    <SupervisorName>Bob Roberts</SupervisorName>
    <SupervisorUsername>Bob.Roberts</SupervisorUsername>
    <ThresholdConflict>0</ThresholdConflict>
    <Title>Store Clerk</Title>
    <TotalClockedMinutes>0</TotalClockedMinutes>
    <TotalScheduleMinutes>105</TotalScheduleMinutes>
    <VacationUsedHours>0</VacationUsedHours>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-time-and-attendance-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <DoubleOTClockedMinutes>0</DoubleOTClockedMinutes>
    <DoubleOTScheduleMinutes>0</DoubleOTScheduleMinutes>
    <EmployeeCompensationType>3</EmployeeCompensationType>
    <EmployeeGroup>100% (35% GP)</EmployeeGroup>
    <EmployeeID>186</EmployeeID>
    <EmployeeLastName>Smith</EmployeeLastName>
    <EmployeeName>Brooke Smith</EmployeeName>
    <EmployeeUsername>Brooke.Smith</EmployeeUsername>
    <IsPartTime>0</IsPartTime>
    <ManagerVerified>0</ManagerVerified>
    <OTClockedMinutes>0</OTClockedMinutes>
    <OTScheduleMinutes>105</OTScheduleMinutes>
    <PartTimeVacationEarned>0</PartTimeVacationEarned>
    <PersonalUsedHours>0</PersonalUsedHours>
    <PT_DoubleOTVacationEarned>0</PT_DoubleOTVacationEarned>
    <PT_OTVacationEarned>0</PT_OTVacationEarned>
    <SickUsedHours>0</SickUsedHours>
    <SpecialIdentifier>912345987654321</SpecialIdentifier>
    <SupervisorName>Bob Roberts</SupervisorName>
    <SupervisorUsername>Bob.Roberts</SupervisorUsername>
    <ThresholdConflict>0</ThresholdConflict>
    <Title>Store Clerk</Title>
    <TotalClockedMinutes>0</TotalClockedMinutes>
    <TotalScheduleMinutes>105</TotalScheduleMinutes>
    <VacationUsedHours>0</VacationUsedHours>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-time-and-attendance-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>DoubleOTClockedMinutes,DoubleOTScheduleMinutes,EmployeeCompensationType,EmployeeGroup,EmployeeID,EmployeeLastName,EmployeeName,EmployeeUsername,IsPartTime,ManagerVerified,OTClockedMinutes,OTScheduleMinutes,PartTimeVacationEarned,PersonalUsedHours,PT_DoubleOTVacationEarned,PT_OTVacationEarned,SickUsedHours,SpecialIdentifier,SupervisorName,SupervisorUsername,ThresholdConflict,Title,TotalClockedMinutes,TotalScheduleMinutes,VacationUsedHours
0,0,3,100% (35% GP),186,Smith,Brooke Smith,Brooke.Smith,0,0,0,105,0,0,0,0,0,912345987654321,Bob Roberts,Bob.Roberts,0,Store Clerk,0,105,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-time-and-attendance-report">
            
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

    
