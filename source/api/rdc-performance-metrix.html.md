---
title:  RQ Data Connect Performance Metrix Reports
permalink: /api/RQ-Data-Connect-Performance-Metrix-Reports/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby
  - python: JSON
  - json-doc: JsonDataTable
  - xml: XML
  - html: XmlDataTable
  - coffeescript: CSV
  - c: Excel

search: true

noPopUp: true
---




# Overview


RQ Data Connect allows you to retrieve report data from your RQ database (v4.23 and up).

To get started, see [RQ Data Connect Guide](/guides/rq-data-connect/).

#### Note

For reports that provide optional URI parameters for filtering at different levels (ForWho/ForWhoIDs/LocationType/LocationTypeIDs), omitting these values will run the report at the default company level.

### Authentication

RQ Data Connect and Bridge support many different methods of authentication, see {{AuthenticationOptions}}.

Note that for all reports the {{AccessToken_Glossary}} should be mapped to an employee in RQ.

### Report List

For a complete list of reports in RQ Data Connect, see [Report List](/rq-data-connect/report-list).


# Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

# Resources

## GraphedPerformanceMetrixReportData

```json
{
	"ID": "6",
	"Name": "51247 Test_update",
	"AttachmentRate": "1249 : 2",
	"AttachmentRateTarget": "0 : 0",
	"DisplayFormat": "2",
	"IsAttachmentRate": "true",
	"Margin": "null",
	"MarginTarget": "null",
	"Priority": "-1",
	"Profit": "null",
	"ProfitTarget": "null",
	"Quantity": "null",
	"QuantityTarget": "null",
	"Sales": "null",
	"SalesTarget": "null"
}
```

| Name | Description |
|:-----|:------------|
| ID (`INT`) | Identifier for a performance metrix group in RQ | 
| Name (`NVARCHAR(MAX)`) | Name of a performance metrix group in RQ | 
| AttachmentRate (`VARCHAR(23)`) | Comparison of Performance Groups for the Attachment Rate displayed as a ratio | 
| AttachmentRateTarget (`VARCHAR(23)`) | Attachment rate target | 
| DisplayFormat (`INT`) | 1: Ratio Format, 2: Percentage Format | 
| IsAttachmentRate (`BIT`) | A flag to indicate if performance group is an attachment rate | 
| Margin (`MONEY`) | Margin on sales in this performance group | 
| MarginTarget (`MONEY`) | Margin target | 
| Priority (`INT`) | Priority | 
| Profit (`MONEY`) | Net profit amount of sales in this performance group | 
| ProfitTarget (`MONEY`) | Profit target | 
| Quantity (`INT`) | Net count of SKUs sold in this performance group | 
| QuantityTarget (`INT`) | Quantity target | 
| Sales (`MONEY`) | Net dollar amount of sales in this performance group | 
| SalesTarget (`MONEY`) | Sales target | 


## GraphedPerformanceMetrixBreakdownReportData

```json
{
	"ID": "1",
	"Name": "84 West",
	"GroupInvoiceCount": "839",
	"IsAttachmentRate": "false",
	"Margin": "-1691.5747",
	"MarginTarget": "0",
	"Profit": "-45860859.08",
	"ProfitTarget": "0",
	"Quantity": "530",
	"QuantityTarget": "0",
	"Sales": "27111.34",
	"SalesTarget": "0",
	"TotalInvoiceCount": "2772"
}
```

| Name | Description |
|:-----|:------------|
| ID (`INT`) | Internal idenfier in RQ | 
| Name (`NVARCHAR(MAX)`) | Name of company, region, division, location or employee depending on ByWho URL parameter | 
| GroupInvoiceCount (`INT`) | This number represents the size of the section of pie graph | 
| IsAttachmentRate (`BIT`) | A flag to indicate if performance group is an attachment rate | 
| Margin (`MONEY`) | Margin | 
| MarginTarget (`DECIMAL`) | Margin target | 
| Profit (`MONEY`) | Profit | 
| ProfitTarget (`MONEY`) | Profit target | 
| Quantity (`INT`) | Quantity | 
| QuantityTarget (`INT`) | Quantity target | 
| Sales (`MONEY`) | Total sales | 
| SalesTarget (`MONEY`) | Sales target | 
| TotalInvoiceCount (`INT`) | This number represents the total size of the graph  | 


## PerformanceMetrixReportData

```json
{
	"ID": "4",
	"Name": "Attachment Ratio",
	"Priority1": "-1",
	"SearchDateQuantity": "0",
	"SearchDateSales": "0",
	"SearchDateProfit": "0",
	"SearchDateMargin": "0",
	"SearchDateAttachmentRate": "9 : 0",
	"Quantity": "0",
	"Sales": "0",
	"Profit": "0",
	"Margin": "0",
	"QuantityPercentOfTarget": "0",
	"SalesPercentOfTarget": "0",
	"ProfitPercentOfTarget": "0",
	"MarginPercentOfTarget": "0",
	"QuantityTrending": "0",
	"SalesTrending": "0",
	"ProfitTrending": "0",
	"MarginTrending": "0",
	"QuantityTrendingPercentOfTarget": "0",
	"SalesTrendingPercentOfTarget": "0",
	"ProfitTrendingPercentOfTarget": "0",
	"MarginTrendingPercentOfTarget": "0",
	"QuantityTarget": "0",
	"SalesTarget": "0",
	"ProfitTarget": "0",
	"MarginTarget": "0",
	"AttachmentRateTarget": "0 : 0",
	"IsAttachmentRate": "true",
	"DisplayFormat": "2",
	"AttachmentRate": "114 : 0"
}
```

| Name | Description |
|:-----|:------------|
| ID (`INT`) | Internal identifier in RQ | 
| Name (`NVARCHAR(MAX)`) | Group - name of the group | 
| Priority1 (`INT`) | Internal value in RQ | 
| SearchDateQuantity (`MONEY`) | Quantity to Date - numeric and displays to nearest integer | 
| SearchDateSales (`MONEY`) | Sales to Date ($) - amount in dollars for sales to date | 
| SearchDateProfit (`MONEY`) | Profit to Date - numeric and displays to nearest integer | 
| SearchDateMargin (`DECIMAL`) | Margin to Date - numeric and displays to nearest integer | 
| SearchDateAttachmentRate (`VARCHAR(23)`) | Margin % of Target - percentage and displays Margin to date / target | 
| Quantity (`MONEY`) | Quantity Today - numeric and displays to nearest integer for today | 
| Sales (`MONEY`) | Today - numeric and displays to nearest integer for today | 
| Profit (`MONEY`) | Profit Today - numeric and displays to nearest integer for today | 
| Margin (`DECIMAL`) | Margin Today - numeric and displays to nearest integer for today | 
| QuantityPercentOfTarget (`DECIMAL`) | Quantity % of Target - percentage and displays Quantity to date / target | 
| SalesPercentOfTarget (`DECIMAL`) | Sales % of Target - percentage and displays sales to date / target | 
| ProfitPercentOfTarget (`DECIMAL`) | Profit % of Target - percentage and displays Profit to date / target | 
| MarginPercentOfTarget (`DECIMAL`) | Margin % of Target - percentage and displays Margin to date / target | 
| QuantityTrending (`DECIMAL`) | Trending - numeric and displays to nearest integer. Formula is as follows: (Quantity To Date / (Date - beginning of period + 1)) * # of days in the period. | 
| SalesTrending (`DECIMAL`) | Trending - numeric and displays to nearest integer. Formula is as follows: (Sales To Date / (Date - beginning of period + 1)) * # of days in the period. | 
| ProfitTrending (`DECIMAL`) | Trending - numeric and displays to nearest integer. Formula is as follows: (Profit To Date / (Date - beginning of period + 1)) * # of days in the period. | 
| MarginTrending (`DECIMAL`) | Trending - numeric and displays to nearest integer. Formula is as follows: (Margin To Date / (Date - beginning of period + 1)) * # of days in the period. | 
| QuantityTrendingPercentOfTarget (`DECIMAL`) | Quantity % of Target - percentage and displays Quantity to date / target | 
| SalesTrendingPercentOfTarget (`DECIMAL`) | Trending % of Target - percentage and displays trending / target | 
| ProfitTrendingPercentOfTarget (`DECIMAL`) | Trending % of Target - percentage and displays trending / target | 
| MarginTrendingPercentOfTarget (`DECIMAL`) | Trending % of Target - percentage and displays trending / target | 
| QuantityTarget (`INT`) | Target - numeric and displays the target set in the Performance Targets Setup | 
| SalesTarget (`MONEY`) | Target - numeric and displays the target set in the Performance Targets Setup | 
| ProfitTarget (`MONEY`) | Target - numeric and displays the target set in the Performance Targets Setup | 
| MarginTarget (`DECIMAL`) | Target - numeric and displays the target set in the Performance Targets Setup | 
| AttachmentRateTarget (`VARCHAR(23)`) | Target - numeric and displays the target set in the Performance Targets Setup | 
| IsAttachmentRate (`BIT`) | Internal value in RQ | 
| DisplayFormat (`INT`) | Internal value in RQ | 
| AttachmentRate (`VARCHAR(23)`) | Rate - as calculated by the AR (PG1 divided by PG2) | 


## PerformanceMetrixSummaryReportData

```json
{
	"GroupID": "5",
	"GroupName": "Accessories & Devices",
	"Priority": "-1",
	"Quantity": "1",
	"Sales": "0",
	"Profit": "0",
	"Margin": "0",
	"Enabled": "1",
	"IsAttachmentRate": "true",
	"DisplayFormat": "2",
	"AttachmentRate": "114 : 0"
}
```

| Name | Description |
|:-----|:------------|
| GroupID (`INT`) | Internal identifier in RQ | 
| GroupName (`NVARCHAR(MAX)`) | Group Name - name of the performance group | 
| Priority (`INT`) | Internal value in RQ | 
| Quantity (`INT`) | Quantity - net count of SKUs sold in this group for the search criteria | 
| Sales (`MONEY`) | Sales - net dollar amount of sales in this group for the search criteria | 
| Profit (`MONEY`) | Profit - net profit amount of sales in this group for the search criteria | 
| Margin (`DECIMAL`) | Margin - margin on the sales in this group for the search criteria | 
| Enabled (`INT`) | Internal value in RQ | 
| IsAttachmentRate (`BIT`) | Internal value in RQ | 
| DisplayFormat (`INT`) | Internal value in RQ | 
| AttachmentRate (`VARCHAR(23)`) | Rate - as calculated by the AR (PG1 divided by PG2) | 






# Requests



## <span class='get'>GET</span> the Graphed Performance Metrix Report

For more information, see {{support_GraphedPerformanceMetrixReport}}.



> Definition

```
GET /reports/graphedperformancemetricsreport_performancemetrix?PeriodID={PeriodID}&StartDate={StartDate}&StopDate={StopDate}&HideRebates={HideRebates}&ForWho={ForWho}&ForWhoID={ForWhoID}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javascript
GET /reports/graphedperformancemetricsreport_performancemetrix?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_performancemetrix?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheGraphedPerformanceMetrixReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_performancemetrix?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheGraphedPerformanceMetrixReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_performancemetrix?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'


response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_performancemetrix?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>PeriodID</code> (<strong>Required</strong>)  - Identifier for a Period in RQ, or -1 if a StartDate and StopDate will be used</li>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin. If PeriodID is -1, this value will be ignored</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end. If PeriodID is -1, this value will be ignored</li>
    <li><code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoID</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[graphedperformancemetrixreportdata](#GraphedPerformanceMetrixReportData)]











> Example Response



 
```python
[
    {
        "ID": 6,
        "Name": "51247 Test_update",
        "AttachmentRate": "1249 : 2",
        "AttachmentRateTarget": "0 : 0",
        "DisplayFormat": 2,
        "IsAttachmentRate": true,
        "Margin": null,
        "MarginTarget": null,
        "Priority": -1,
        "Profit": null,
        "ProfitTarget": null,
        "Quantity": null,
        "QuantityTarget": null,
        "Sales": null,
        "SalesTarget": null
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ID": 6,
            "Name": "51247 Test_update",
            "AttachmentRate": "1249 : 2",
            "AttachmentRateTarget": "0 : 0",
            "DisplayFormat": 2,
            "IsAttachmentRate": true,
            "Margin": null,
            "MarginTarget": null,
            "Priority": -1,
            "Profit": null,
            "ProfitTarget": null,
            "Quantity": null,
            "QuantityTarget": null,
            "Sales": null,
            "SalesTarget": null
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
}
```





```xml
<Table>
  <Record>
    <ID>6</ID>
    <Name>51247 Test_update</Name>
    <AttachmentRate>1249 : 2</AttachmentRate>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <DisplayFormat>2</DisplayFormat>
    <IsAttachmentRate>true</IsAttachmentRate>
    <Margin>null</Margin>
    <MarginTarget>null</MarginTarget>
    <Priority>-1</Priority>
    <Profit>null</Profit>
    <ProfitTarget>null</ProfitTarget>
    <Quantity>null</Quantity>
    <QuantityTarget>null</QuantityTarget>
    <Sales>null</Sales>
    <SalesTarget>null</SalesTarget>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ID>6</ID>
    <Name>51247 Test_update</Name>
    <AttachmentRate>1249 : 2</AttachmentRate>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <DisplayFormat>2</DisplayFormat>
    <IsAttachmentRate>true</IsAttachmentRate>
    <Margin>null</Margin>
    <MarginTarget>null</MarginTarget>
    <Priority>-1</Priority>
    <Profit>null</Profit>
    <ProfitTarget>null</ProfitTarget>
    <Quantity>null</Quantity>
    <QuantityTarget>null</QuantityTarget>
    <Sales>null</Sales>
    <SalesTarget>null</SalesTarget>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ID,Name,AttachmentRate,AttachmentRateTarget,DisplayFormat,IsAttachmentRate,Margin,MarginTarget,Priority,Profit,ProfitTarget,Quantity,QuantityTarget,Sales,SalesTarget
6,51247 Test_update,1249 : 2,0 : 0,2,true,null,null,-1,null,null,null,null,null,null
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```





#### Headers

This specifies the format of the data sent to the API.


##### For JSON

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Graphed Performance Metrix Breakdown Report

For more information, see {{support_GraphedPerformanceMetrixReport}}.



> Definition

```
GET /reports/graphedperformancemetricsreport_breakdown?PeriodID={PeriodID}&StartDate={StartDate}&StopDate={StopDate}&HideRebates={HideRebates}&PerformanceGroupID={PerformanceGroupID}&TopN={TopN}&TopCriteria={TopCriteria}&ByWho={ByWho}&ForWho={ForWho}&ForWhoID={ForWhoID}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javascript
GET /reports/graphedperformancemetricsreport_breakdown?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_breakdown?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingTheGraphedPerformanceMetrixBreakdownReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_breakdown?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheGraphedPerformanceMetrixBreakdownReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_breakdown?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'


response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/graphedperformancemetricsreport_breakdown?PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoID=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>PeriodID</code> (<strong>Required</strong>)  - Identifier for a Period in RQ, or -1 if a StartDate and StopDate will be used</li>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin. If PeriodID is -1, this value will be ignored</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end. If PeriodID is -1, this value will be ignored</li>
    <li><code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)</li>
    <li><code>PerformanceGroupID</code> (<strong>Required</strong>)  - Identifier for a Performance Group in RQ</li>
    <li><code>TopN</code> (<strong>Required</strong>)  - Gets the top X entries for the report, ordered by the value in TopCriteria. Use -1 to return all results</li>
    <li><code>TopCriteria</code> (<strong>Required</strong>)  - Acceptable values include Quantity, Sales, Profit, Margin and Rate</li>
    <li><code>ByWho</code> (<strong>Required</strong>)  - This value will aggregate the report data at the Company (1), Region (2), Division (3), Location (4) or Employee (5) level</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoID</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[graphedperformancemetrixbreakdownreportdata](#GraphedPerformanceMetrixBreakdownReportData)]











> Example Response



 
```python
[
    {
        "ID": 1,
        "Name": "84 West",
        "GroupInvoiceCount": 839,
        "IsAttachmentRate": false,
        "Margin": -1691.5747,
        "MarginTarget": 0,
        "Profit": -45860859.08,
        "ProfitTarget": 0,
        "Quantity": 530,
        "QuantityTarget": 0,
        "Sales": 27111.34,
        "SalesTarget": 0,
        "TotalInvoiceCount": 2772
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ID": 1,
            "Name": "84 West",
            "GroupInvoiceCount": 839,
            "IsAttachmentRate": false,
            "Margin": -1691.5747,
            "MarginTarget": 0,
            "Profit": -45860859.08,
            "ProfitTarget": 0,
            "Quantity": 530,
            "QuantityTarget": 0,
            "Sales": 27111.34,
            "SalesTarget": 0,
            "TotalInvoiceCount": 2772
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
}
```





```xml
<Table>
  <Record>
    <ID>1</ID>
    <Name>84 West</Name>
    <GroupInvoiceCount>839</GroupInvoiceCount>
    <IsAttachmentRate>false</IsAttachmentRate>
    <Margin>-1691.5747</Margin>
    <MarginTarget>0</MarginTarget>
    <Profit>-45860859.08</Profit>
    <ProfitTarget>0</ProfitTarget>
    <Quantity>530</Quantity>
    <QuantityTarget>0</QuantityTarget>
    <Sales>27111.34</Sales>
    <SalesTarget>0</SalesTarget>
    <TotalInvoiceCount>2772</TotalInvoiceCount>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ID>1</ID>
    <Name>84 West</Name>
    <GroupInvoiceCount>839</GroupInvoiceCount>
    <IsAttachmentRate>false</IsAttachmentRate>
    <Margin>-1691.5747</Margin>
    <MarginTarget>0</MarginTarget>
    <Profit>-45860859.08</Profit>
    <ProfitTarget>0</ProfitTarget>
    <Quantity>530</Quantity>
    <QuantityTarget>0</QuantityTarget>
    <Sales>27111.34</Sales>
    <SalesTarget>0</SalesTarget>
    <TotalInvoiceCount>2772</TotalInvoiceCount>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ID,Name,GroupInvoiceCount,IsAttachmentRate,Margin,MarginTarget,Profit,ProfitTarget,Quantity,QuantityTarget,Sales,SalesTarget,TotalInvoiceCount
1,84 West,839,false,-1691.5747,0,-45860859.08,0,530,0,27111.34,0,2772
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```





#### Headers

This specifies the format of the data sent to the API.


##### For JSON

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Performance Metrix Report

For more information see {{support_PerformanceMetrixReport}}.



> Definition

```
GET /reports/PerformanceMetrixReport?DateAsOf={DateAsOf}&HideRebates={HideRebates}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javascript
GET /reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingThePerformanceMetrixReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePerformanceMetrixReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'


response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&HideRebates=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>DateAsOf</code> (<strong>Required</strong>)  - Date at which to run report</li>
    <li><code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[performancemetrixreportdata](#PerformanceMetrixReportData)]











> Example Response



 
```python
[
    {
        "ID": 4,
        "Name": "Attachment Ratio",
        "Priority1": -1,
        "SearchDateQuantity": 0,
        "SearchDateSales": 0,
        "SearchDateProfit": 0,
        "SearchDateMargin": 0,
        "SearchDateAttachmentRate": "9 : 0",
        "Quantity": 0,
        "Sales": 0,
        "Profit": 0,
        "Margin": 0,
        "QuantityPercentOfTarget": 0,
        "SalesPercentOfTarget": 0,
        "ProfitPercentOfTarget": 0,
        "MarginPercentOfTarget": 0,
        "QuantityTrending": 0,
        "SalesTrending": 0,
        "ProfitTrending": 0,
        "MarginTrending": 0,
        "QuantityTrendingPercentOfTarget": 0,
        "SalesTrendingPercentOfTarget": 0,
        "ProfitTrendingPercentOfTarget": 0,
        "MarginTrendingPercentOfTarget": 0,
        "QuantityTarget": 0,
        "SalesTarget": 0,
        "ProfitTarget": 0,
        "MarginTarget": 0,
        "AttachmentRateTarget": "0 : 0",
        "IsAttachmentRate": true,
        "DisplayFormat": 2,
        "AttachmentRate": "114 : 0"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ID": 4,
            "Name": "Attachment Ratio",
            "Priority1": -1,
            "SearchDateQuantity": 0,
            "SearchDateSales": 0,
            "SearchDateProfit": 0,
            "SearchDateMargin": 0,
            "SearchDateAttachmentRate": "9 : 0",
            "Quantity": 0,
            "Sales": 0,
            "Profit": 0,
            "Margin": 0,
            "QuantityPercentOfTarget": 0,
            "SalesPercentOfTarget": 0,
            "ProfitPercentOfTarget": 0,
            "MarginPercentOfTarget": 0,
            "QuantityTrending": 0,
            "SalesTrending": 0,
            "ProfitTrending": 0,
            "MarginTrending": 0,
            "QuantityTrendingPercentOfTarget": 0,
            "SalesTrendingPercentOfTarget": 0,
            "ProfitTrendingPercentOfTarget": 0,
            "MarginTrendingPercentOfTarget": 0,
            "QuantityTarget": 0,
            "SalesTarget": 0,
            "ProfitTarget": 0,
            "MarginTarget": 0,
            "AttachmentRateTarget": "0 : 0",
            "IsAttachmentRate": true,
            "DisplayFormat": 2,
            "AttachmentRate": "114 : 0"
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
}
```





```xml
<Table>
  <Record>
    <ID>4</ID>
    <Name>Attachment Ratio</Name>
    <Priority1>-1</Priority1>
    <SearchDateQuantity>0</SearchDateQuantity>
    <SearchDateSales>0</SearchDateSales>
    <SearchDateProfit>0</SearchDateProfit>
    <SearchDateMargin>0</SearchDateMargin>
    <SearchDateAttachmentRate>9 : 0</SearchDateAttachmentRate>
    <Quantity>0</Quantity>
    <Sales>0</Sales>
    <Profit>0</Profit>
    <Margin>0</Margin>
    <QuantityPercentOfTarget>0</QuantityPercentOfTarget>
    <SalesPercentOfTarget>0</SalesPercentOfTarget>
    <ProfitPercentOfTarget>0</ProfitPercentOfTarget>
    <MarginPercentOfTarget>0</MarginPercentOfTarget>
    <QuantityTrending>0</QuantityTrending>
    <SalesTrending>0</SalesTrending>
    <ProfitTrending>0</ProfitTrending>
    <MarginTrending>0</MarginTrending>
    <QuantityTrendingPercentOfTarget>0</QuantityTrendingPercentOfTarget>
    <SalesTrendingPercentOfTarget>0</SalesTrendingPercentOfTarget>
    <ProfitTrendingPercentOfTarget>0</ProfitTrendingPercentOfTarget>
    <MarginTrendingPercentOfTarget>0</MarginTrendingPercentOfTarget>
    <QuantityTarget>0</QuantityTarget>
    <SalesTarget>0</SalesTarget>
    <ProfitTarget>0</ProfitTarget>
    <MarginTarget>0</MarginTarget>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <IsAttachmentRate>true</IsAttachmentRate>
    <DisplayFormat>2</DisplayFormat>
    <AttachmentRate>114 : 0</AttachmentRate>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ID>4</ID>
    <Name>Attachment Ratio</Name>
    <Priority1>-1</Priority1>
    <SearchDateQuantity>0</SearchDateQuantity>
    <SearchDateSales>0</SearchDateSales>
    <SearchDateProfit>0</SearchDateProfit>
    <SearchDateMargin>0</SearchDateMargin>
    <SearchDateAttachmentRate>9 : 0</SearchDateAttachmentRate>
    <Quantity>0</Quantity>
    <Sales>0</Sales>
    <Profit>0</Profit>
    <Margin>0</Margin>
    <QuantityPercentOfTarget>0</QuantityPercentOfTarget>
    <SalesPercentOfTarget>0</SalesPercentOfTarget>
    <ProfitPercentOfTarget>0</ProfitPercentOfTarget>
    <MarginPercentOfTarget>0</MarginPercentOfTarget>
    <QuantityTrending>0</QuantityTrending>
    <SalesTrending>0</SalesTrending>
    <ProfitTrending>0</ProfitTrending>
    <MarginTrending>0</MarginTrending>
    <QuantityTrendingPercentOfTarget>0</QuantityTrendingPercentOfTarget>
    <SalesTrendingPercentOfTarget>0</SalesTrendingPercentOfTarget>
    <ProfitTrendingPercentOfTarget>0</ProfitTrendingPercentOfTarget>
    <MarginTrendingPercentOfTarget>0</MarginTrendingPercentOfTarget>
    <QuantityTarget>0</QuantityTarget>
    <SalesTarget>0</SalesTarget>
    <ProfitTarget>0</ProfitTarget>
    <MarginTarget>0</MarginTarget>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <IsAttachmentRate>true</IsAttachmentRate>
    <DisplayFormat>2</DisplayFormat>
    <AttachmentRate>114 : 0</AttachmentRate>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ID,Name,Priority1,SearchDateQuantity,SearchDateSales,SearchDateProfit,SearchDateMargin,SearchDateAttachmentRate,Quantity,Sales,Profit,Margin,QuantityPercentOfTarget,SalesPercentOfTarget,ProfitPercentOfTarget,MarginPercentOfTarget,QuantityTrending,SalesTrending,ProfitTrending,MarginTrending,QuantityTrendingPercentOfTarget,SalesTrendingPercentOfTarget,ProfitTrendingPercentOfTarget,MarginTrendingPercentOfTarget,QuantityTarget,SalesTarget,ProfitTarget,MarginTarget,AttachmentRateTarget,IsAttachmentRate,DisplayFormat,AttachmentRate
4,Attachment Ratio,-1,0,0,0,0,9 : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 : 0,true,2,114 : 0
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```





#### Headers

This specifies the format of the data sent to the API.


##### For JSON

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Performance Group Report

For more information see {{support_PerformanceGroupReport}}.



> Definition

```
GET /reports/PerformanceMetrixReport?DateAsOf={DateAsOf}&PerformanceGroupID={PerformanceGroupID}&TopN={TopN}&TopCriteria={TopCriteria}&ByWho={ByWho}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javascript
GET /reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingThePerformanceGroupReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePerformanceGroupReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'


response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixReport?DateAsOf=2016-01-01T08:00:00.000Z&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>DateAsOf</code> (<strong>Required</strong>)  - Date at which to run report</li>
    <li><code>PerformanceGroupID</code> (<strong>Required</strong>)  - Identifier for a Performance Group in RQ</li>
    <li><code>TopN</code> (<strong>Required</strong>)  - Gets the top X entries for the report, ordered by the value in TopCriteria. Use -1 to return all results</li>
    <li><code>TopCriteria</code> (<strong>Required</strong>)  - Acceptable values include Quantity, Sales, Profit, Margin and Rate</li>
    <li><code>ByWho</code> (<strong>Required</strong>)  - This value will aggregate the report data at the Company (1), Region (2), Division (3), Location (4) or Employee (5) level</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[performancemetrixreportdata](#PerformanceMetrixReportData)]











> Example Response



 
```python
[
    {
        "ID": 4,
        "Name": "Attachment Ratio",
        "Priority1": -1,
        "SearchDateQuantity": 0,
        "SearchDateSales": 0,
        "SearchDateProfit": 0,
        "SearchDateMargin": 0,
        "SearchDateAttachmentRate": "9 : 0",
        "Quantity": 0,
        "Sales": 0,
        "Profit": 0,
        "Margin": 0,
        "QuantityPercentOfTarget": 0,
        "SalesPercentOfTarget": 0,
        "ProfitPercentOfTarget": 0,
        "MarginPercentOfTarget": 0,
        "QuantityTrending": 0,
        "SalesTrending": 0,
        "ProfitTrending": 0,
        "MarginTrending": 0,
        "QuantityTrendingPercentOfTarget": 0,
        "SalesTrendingPercentOfTarget": 0,
        "ProfitTrendingPercentOfTarget": 0,
        "MarginTrendingPercentOfTarget": 0,
        "QuantityTarget": 0,
        "SalesTarget": 0,
        "ProfitTarget": 0,
        "MarginTarget": 0,
        "AttachmentRateTarget": "0 : 0",
        "IsAttachmentRate": true,
        "DisplayFormat": 2,
        "AttachmentRate": "114 : 0"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "ID": 4,
            "Name": "Attachment Ratio",
            "Priority1": -1,
            "SearchDateQuantity": 0,
            "SearchDateSales": 0,
            "SearchDateProfit": 0,
            "SearchDateMargin": 0,
            "SearchDateAttachmentRate": "9 : 0",
            "Quantity": 0,
            "Sales": 0,
            "Profit": 0,
            "Margin": 0,
            "QuantityPercentOfTarget": 0,
            "SalesPercentOfTarget": 0,
            "ProfitPercentOfTarget": 0,
            "MarginPercentOfTarget": 0,
            "QuantityTrending": 0,
            "SalesTrending": 0,
            "ProfitTrending": 0,
            "MarginTrending": 0,
            "QuantityTrendingPercentOfTarget": 0,
            "SalesTrendingPercentOfTarget": 0,
            "ProfitTrendingPercentOfTarget": 0,
            "MarginTrendingPercentOfTarget": 0,
            "QuantityTarget": 0,
            "SalesTarget": 0,
            "ProfitTarget": 0,
            "MarginTarget": 0,
            "AttachmentRateTarget": "0 : 0",
            "IsAttachmentRate": true,
            "DisplayFormat": 2,
            "AttachmentRate": "114 : 0"
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
}
```





```xml
<Table>
  <Record>
    <ID>4</ID>
    <Name>Attachment Ratio</Name>
    <Priority1>-1</Priority1>
    <SearchDateQuantity>0</SearchDateQuantity>
    <SearchDateSales>0</SearchDateSales>
    <SearchDateProfit>0</SearchDateProfit>
    <SearchDateMargin>0</SearchDateMargin>
    <SearchDateAttachmentRate>9 : 0</SearchDateAttachmentRate>
    <Quantity>0</Quantity>
    <Sales>0</Sales>
    <Profit>0</Profit>
    <Margin>0</Margin>
    <QuantityPercentOfTarget>0</QuantityPercentOfTarget>
    <SalesPercentOfTarget>0</SalesPercentOfTarget>
    <ProfitPercentOfTarget>0</ProfitPercentOfTarget>
    <MarginPercentOfTarget>0</MarginPercentOfTarget>
    <QuantityTrending>0</QuantityTrending>
    <SalesTrending>0</SalesTrending>
    <ProfitTrending>0</ProfitTrending>
    <MarginTrending>0</MarginTrending>
    <QuantityTrendingPercentOfTarget>0</QuantityTrendingPercentOfTarget>
    <SalesTrendingPercentOfTarget>0</SalesTrendingPercentOfTarget>
    <ProfitTrendingPercentOfTarget>0</ProfitTrendingPercentOfTarget>
    <MarginTrendingPercentOfTarget>0</MarginTrendingPercentOfTarget>
    <QuantityTarget>0</QuantityTarget>
    <SalesTarget>0</SalesTarget>
    <ProfitTarget>0</ProfitTarget>
    <MarginTarget>0</MarginTarget>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <IsAttachmentRate>true</IsAttachmentRate>
    <DisplayFormat>2</DisplayFormat>
    <AttachmentRate>114 : 0</AttachmentRate>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <ID>4</ID>
    <Name>Attachment Ratio</Name>
    <Priority1>-1</Priority1>
    <SearchDateQuantity>0</SearchDateQuantity>
    <SearchDateSales>0</SearchDateSales>
    <SearchDateProfit>0</SearchDateProfit>
    <SearchDateMargin>0</SearchDateMargin>
    <SearchDateAttachmentRate>9 : 0</SearchDateAttachmentRate>
    <Quantity>0</Quantity>
    <Sales>0</Sales>
    <Profit>0</Profit>
    <Margin>0</Margin>
    <QuantityPercentOfTarget>0</QuantityPercentOfTarget>
    <SalesPercentOfTarget>0</SalesPercentOfTarget>
    <ProfitPercentOfTarget>0</ProfitPercentOfTarget>
    <MarginPercentOfTarget>0</MarginPercentOfTarget>
    <QuantityTrending>0</QuantityTrending>
    <SalesTrending>0</SalesTrending>
    <ProfitTrending>0</ProfitTrending>
    <MarginTrending>0</MarginTrending>
    <QuantityTrendingPercentOfTarget>0</QuantityTrendingPercentOfTarget>
    <SalesTrendingPercentOfTarget>0</SalesTrendingPercentOfTarget>
    <ProfitTrendingPercentOfTarget>0</ProfitTrendingPercentOfTarget>
    <MarginTrendingPercentOfTarget>0</MarginTrendingPercentOfTarget>
    <QuantityTarget>0</QuantityTarget>
    <SalesTarget>0</SalesTarget>
    <ProfitTarget>0</ProfitTarget>
    <MarginTarget>0</MarginTarget>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <IsAttachmentRate>true</IsAttachmentRate>
    <DisplayFormat>2</DisplayFormat>
    <AttachmentRate>114 : 0</AttachmentRate>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
ID,Name,Priority1,SearchDateQuantity,SearchDateSales,SearchDateProfit,SearchDateMargin,SearchDateAttachmentRate,Quantity,Sales,Profit,Margin,QuantityPercentOfTarget,SalesPercentOfTarget,ProfitPercentOfTarget,MarginPercentOfTarget,QuantityTrending,SalesTrending,ProfitTrending,MarginTrending,QuantityTrendingPercentOfTarget,SalesTrendingPercentOfTarget,ProfitTrendingPercentOfTarget,MarginTrendingPercentOfTarget,QuantityTarget,SalesTarget,ProfitTarget,MarginTarget,AttachmentRateTarget,IsAttachmentRate,DisplayFormat,AttachmentRate
4,Attachment Ratio,-1,0,0,0,0,9 : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 : 0,true,2,114 : 0
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```





#### Headers

This specifies the format of the data sent to the API.


##### For JSON

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


## <span class='get'>GET</span> the Performance Metrix Summary Report

For more information see {{support_PerformanceMetrixSummaryReport}}.



> Definition

```
GET /reports/PerformanceMetrixSummaryReport?StartDate={StartDate}&StopDate={StopDate}&HideRebates={HideRebates}&ReportType={ReportType}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
```

> Example Request

```javascript
GET /reports/PerformanceMetrixSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ReportType=Group&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
Authorization: Bearer (Access Token)
Accept-Encoding: gzip
```


```shell
curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ReportType=Group&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us" -H "Authorization: Bearer (Access Token)" -H "Accept-Encoding: gzip"
```

```csharp
static IRestResponse GettingThePerformanceMetrixSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ReportType=Group&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept-Encoding", "gzip"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePerformanceMetrixSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ReportType=Group&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept-Encoding", "gzip"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'


response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/PerformanceMetrixSummaryReport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&HideRebates=-1&ReportType=Group&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept-Encoding' => 'gzip',
    } 

puts response
```



```python
This format not available
```

```json-doc
This format not available
```

```xml
This format not available
```

```html
This format not available
```

```coffeescript
This format not available
```

```c
This format not available
```


#### URI Parameters

<ul>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin</li>
    <li><code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end</li>
    <li><code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)</li>
    <li><code>ReportType</code> (<strong>Required</strong>)  - Acceptable values include Group, Location and Employee</li>
    <li><code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored</li>
    <li><code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1</li>
    <li><code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored</li>
    <li><code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored</li>
    <li><code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a></li>
    <li><code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li>
    <li><code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}</li>
</ul>



### Response Parameters



Array[[performancemetrixsummaryreportdata](#PerformanceMetrixSummaryReportData)]











> Example Response



 
```python
[
    {
        "GroupID": 5,
        "GroupName": "Accessories & Devices",
        "Priority": -1,
        "Quantity": 1,
        "Sales": 0,
        "Profit": 0,
        "Margin": 0,
        "Enabled": 1,
        "IsAttachmentRate": true,
        "DisplayFormat": 2,
        "AttachmentRate": "114 : 0"
    }
]
```




 
```json-doc
{
    "Records": [
        {
            "GroupID": 5,
            "GroupName": "Accessories & Devices",
            "Priority": -1,
            "Quantity": 1,
            "Sales": 0,
            "Profit": 0,
            "Margin": 0,
            "Enabled": 1,
            "IsAttachmentRate": true,
            "DisplayFormat": 2,
            "AttachmentRate": "114 : 0"
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
}
```





```xml
<Table>
  <Record>
    <GroupID>5</GroupID>
    <GroupName>Accessories & Devices</GroupName>
    <Priority>-1</Priority>
    <Quantity>1</Quantity>
    <Sales>0</Sales>
    <Profit>0</Profit>
    <Margin>0</Margin>
    <Enabled>1</Enabled>
    <IsAttachmentRate>true</IsAttachmentRate>
    <DisplayFormat>2</DisplayFormat>
    <AttachmentRate>114 : 0</AttachmentRate>
  </Record>
</Table>
```





```html
<Table>
  <Record>
    <GroupID>5</GroupID>
    <GroupName>Accessories & Devices</GroupName>
    <Priority>-1</Priority>
    <Quantity>1</Quantity>
    <Sales>0</Sales>
    <Profit>0</Profit>
    <Margin>0</Margin>
    <Enabled>1</Enabled>
    <IsAttachmentRate>true</IsAttachmentRate>
    <DisplayFormat>2</DisplayFormat>
    <AttachmentRate>114 : 0</AttachmentRate>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table>
```





```coffeescript
GroupID,GroupName,Priority,Quantity,Sales,Profit,Margin,Enabled,IsAttachmentRate,DisplayFormat,AttachmentRate
5,Accessories & Devices,-1,1,0,0,0,1,true,2,114 : 0
```





```c
content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file
```





#### Headers

This specifies the format of the data sent to the API.


##### For JSON

`Content-Type: application/json`

This is the default result obtained by omitting the `Auth` URI parameter.


`Content-Type: application/JsonDataTable`

This is the default result obtained by omitting the URI parameter `Auth=JsonDataTable`. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.


##### For XML

`Content-Type: text/xml`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. 

`Content-Type: text/XmlDataTable`

This result is obtained by using the URL parameter `Auth=XmlDataTable`. This response type appends to the bottom of the request a summary of information about each column in the report.


##### For CSV

`Content-Type: text/csv`

This result is obtained by using the URL parameter `Auth=Csv`.
<br/>

`Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

This result is obtained by using the URL parameter `Auth=Excel`.

    

    


    
    

    
    

    
    
# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure request body is formatted properly |
| `HTTP 401` | `Tokan is invalid` | Ensure Access Token is valid and has not expired |
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure URI is valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | See Message in response for more information |            

    
