---
title: RQ Data Connect Guide
search: true
---

# Overview

The following document outlines common use cases for [RQ Data Connect](/concepts/rq-data-connect) and [RQ Data Connect Bridge](/concepts/rq-data-connect), which are collectively referred to as **RQ Data Connect/Bridge** in this guide.

## Who Is This Guide For? 

The intended audience for this guide is data analysts and business administrators interested in RQ Data Connect.

## Onboarding Package

Contact your account manager to get started using RQ Data Connect/Bridge. They will help guide you through the steps of obtaining access credentials (onboarding package) and will provide you with a support liaison.

## Authentication Options

See the table below to determine which method of authentication is best for you.

| If... | Then... |
|:------|:--------|
| You want to authenticate using a web browser | See [Browser Authentication](#browser-authentication)  |
| You want to authenticate using only a username and password | See [Basic Authentication](#basic-authentication) |
| You are using a program such as Excel that does not support headers | See [URL Parameter Authentication](#url-parameter-authentication) |
| The above options do not apply to you | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |

## Authentication Priority 

If multiple methods of authentication are provided, priority is resolved as follows:

1. Bearer Token
2. Basic Token
3. Auth URI Parameter

##### Example

| URI Parameters | Headers | Token Used |
|:---------------|:--------|:-----------|
| Auth=AAAA | Authorization: Bearer BBBB<br/> Authorization: Basic CCCC | BBBB |
| Auth=AAAA | Authorization: Basic CCCC | CCCC |
| Auth=AAAA | | AAAA |

### Browser Authentication

RQ Data Connect supports Basic Authentication without a token using a web browser. 

To use this method,

1. Determine the full URL of the request
2. Enter the URL into a web browser and press Enter 
3. Enter your username and password into the prompt that appears

It is important to note that this method will only work if there is NO TOKEN (header) on the request, otherwise the provided token will be used.

### Basic Authentication 

Basic Authentication allows you to authenticate using a username and password to create a **Basic Token** which will remain valid as long as your username and password do not change.

To generate a Basic Token, you can use the request <a href="/api/RQ-Data-Connect/#basic-authentication-with-platform-credentials">Basic Authentication with Platform Credentials</a>.

It is important to note that value of the `Authorization` header in this request is a **base 64 encoded** version of your username and password. This value is not URL safe and should not be used as a Basic Token for authentication.

>
> Example Request
>

```
GET https://rqdataconnectdemo.iqmetrix.net/session
Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
```

>
> Example Response
>

```
HTTP 200 Content-Type: application/json
```
```
{
    "access_token": "b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz",
    "isValid": true,
    "ParentEntityId": 21090,
    "RQEmployeeId": 3494,
    "basic_token": "vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw",
    "PreferredEndpoint": "https://rqdataconnect18.iqmetrix.net"
}
```

The `basic_token` is placed in the `Authorization` header of a request prefixed by the word `Basic`.

>
> Example
>

```
GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema
Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
```

### URL Parameter Authentication

URL Parameter Authentication allows you to authenticate without headers, such as when...

* Integrating with a system that does not support headers **or**
* Accessing a report through a basic URL is required

To authenticate using this method, you must first generate a **Basic Token**. This token will remain valid as long as your username and password do not change. See [Basic Authentication](#basic-authentication) for examples.

Once you have a Basic Token, it can be placed as a URL parameter in a request using the key `Auth`.

>
> Example
>

```
https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Auth=vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
```

## Compression Options

RQ Data Connect/Bridge supports the compression algorithms gzip and deflate in the `Accept-Encoding` header.

To learn more about Data Compression, see [Data Compression 101](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer?hl=en).

The examples below demonstrate how to use gzip or deflate compression when making a request.

>
> gzip example
>

```
GET https://rqdataconnectdemo.iqmetrix.net/session
Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
Accept-Encoding: gzip
```

>
> deflate example
>

```
GET https://rqdataconnectdemo.iqmetrix.net/session
Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
Accept-Encoding: deflate
```

## Response Options

RQ Data Connect/Bridge supports multiple response types using the `Response` URI parameter.

If no parameter is provided the default response type is JSON.

See the table below for a complete list of response types.

| Format | Response Type | Notes | Example URL | 
|:-------|:--------------|:------|:------------|
| JSON | application/json | Default response type | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema |
| JSON (DataTable) | application/json | Contains extra data about report columns | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=JsonDataTable |
| CSV | text/csv | Any commas in the response are surrounded by quotes (") | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=Csv |
| XML | text/xml | |  https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=Xml |
| XML (DataTable) | text/xml | Contains extra data about report columns | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=XmlDataTable |
| Excel File | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | Binary .xlsx File that does **not** support live refresh | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=Excel |

# Running a Report

This example will demonstrate how RQ Data Connect can be used to get the data that drives a report in RQ.

## Step 1 - Selecting a Report

See [Master List](/rq-data-connect/report-list) for a list of available requests in RQ Data Connect.

For this example we will retrieve the data for the Graphed Performance Metrix Report in RQ using the request [Getting the Graphed Performance Metrix Report](/api/RQ-Data-Connect/#getting-the-graphed-performance-metrix-report).

This example will use [Browser Authentication](#browser-authentication) for authentication, no compression and the default response type (json).

## (Optional) Step 2 - Setting a Report Level

Many reports allow you to optionally specify a company tree level at which to perform the report.

To set the report to a specific level, determine the available levels using [Getting Location Types](/api/rq-data-connect/#getting-location-types).

>
> Example Request
>

```
GET /lists/LocationType
```

>
> Example Response
> 

```
HTTP 200 Content-Type: application/json
```
```
[
    {
        "Type": "Company"
    },
    {
        "Type": "Region"
    },
    {
        "Type": "District"
    },
    {
        "Type": "Store"
    },
    {
        "Type": "Channel"
    }      
]
```

This example will run the report at the `Store` level.

## (Optional) Step 3 - Specifying Report Level

To run the report for all nodes at a level, such as All Locations or All Channels, `LocationTypeIDs` is set to `-1` or `*`.

To run the report for a subset of nodes at a level, such as one Location or one Region, `LocationTypeIDs` should be set to a comma separated list of identifiers.

A list of identifiers in a level can be retrieved using [Getting Location Ids](/api/RQ-Data-Connect/#getting-location-ids). The `LocationType` URI parameter is the value determined in Step 1.

>
> Example Request
>

```
GET /lists/LocationIDs?LocationType=Store
```

>
> Example Response
> 

```
HTTP 200 Content-Type: application/json
```
```
[
    {
        "ID": 6923,
        "Description": "Tampa",
        "EntityID": 453,
    },
    {
        "ID": 6924,
        "Description": "Fairweather",
        "EntityID": 454,
    },     
    {
        "ID": 6926,
        "Description": "Cornwall",
        "EntityID": 466,
    },             
    ...
]
```

This example will use IDs `6923` and `6924` to specify the report will be run for two stores.

## Step 4 - Determining URI Parameters

Each report has different URI parameters used to determine the contents of the report. 

For this example, the following URI parameters will be used.

| URI Parameter | Description | Example Value | 
|:--------------|:------------|:--------------|
| PeriodId | Identifier for a Period in RQ, or -1 if StartDate and StopDate are used | -1 | 
| StartDate | Date to start report | 1970-01-01T12:00:00.000Z |
| StopDate | Date to end report | 2016-01-01T12:00:00.000Z |
| HideRebates | A flag to indicate if rebates should be included in the report | -1 |

## Step 5 - Getting the Report

The values from Steps 1-4 can be combined to get the Performance Metrix Report using [Getting the Graphed Performance Metrix Report](/api/RQ-Data-Connect/#getting-the-graphed-performance-metrix-report).

>
> Example Request
>

```
GET /reports/graphedperformancemetricsreport_performancemetrix?LocationType=Store&LocationIDs=6923,6924&PeriodID=-1&StartDate=1970-01-01T12:00:00.000Z&StopDate=2016-01-01T12:00:00.000Z&HideRebates=-1&LanguageCode=en-us
```

>
> Example Response
>

```
HTTP 200 Content-Type: application/json
```
```
[
    {
        "ID": 6,
        "Name": "Accessories",
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
    },
    ...
]
```

# Importing into Excel

This section explains how you can import data from RQ Data Connect/Bridge directly into Excel (2016).

For this example, we will get the [Inventory Listing Report](/api/RQ-Data-Connect/#getting-the-inventory-listing-report) with the following parameters:

## Step 1 - Load From Web

First, open Excel and create a new workbook.

In the top bar, click on Data -> New Query -> From Other Sources -> From Web.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/load-from-web.png" alt="Load query" />

## Step 2 - Enter URL

Enter the Request URL into the URL box and click OK.

Ensure the Request URL includes `Response=Xml` so Excel can load the data. 

<div class='bs-callout alert-info'>Response=Excel is not used as it outputs a binary file</div>

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/from-web.png" alt="Enter URL" />

## Step 3 - Access Web Content

If this is the first time you are accessing the endpoint in Excel, a window will appear with authentication options.

Select Basic in the sidebar and enter your username and password, then click Connect.

To learn more about authentication methods, see [Authentication Options](http://developers.iqmetrix.com/guides/rq-data-connect/#authentication-options).

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/access-content.png" alt="Access Web Content" />

## Step 4 - Select Record

A navigator will appear and load tables into a list.

Select a record and click the Load button.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/navigator.png" alt="Select Record" />

## Step 5 - View Table

The record will be placed into a table in Excel, as shown below.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/results.png" alt="Results" />

# Using Postman

This example will demonstrate how to generate a Basic Token using the request <a href="/api/RQ-Data-Connect/#basic-authentication-with-platform-credentials">Basic Authentication with Platform Credentials</a> and [Postman](https://www.getpostman.com/).

## Step 1 - Import Collection

For Chrome or Mac users, click the button below to import the collection directly into Postman. Alternatively, you can <a href="https://www.getpostman.com/collections/3d08e8f94077a2a6b37d">download the collection</a>.

## Step 2 - Open Collection

Click on RQ Data Connect Guide, a collection in the sidebar.

If you do not see the collection, ensure the "Collection" tab is selected and not "History".

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/postman-collection.png" alt="Postman Collection" />

## Step 3 - Open Request

The collection will open showing a list of requests. Click on Basic Authentication to load the request

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/postman-collection-request.png" alt="Request in Postman" />      

## Step 4 - Change Environment Values

Click on the environment selector (drop down box in top right corner) and select "Manage Environments"

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/env-picker.png" alt="Environment Picker" />    

Click on "postmanEnv" in the list to bring up an edit screen

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/env-editor.png" alt="Environment Editor" />        

Modify the following values:

* en - [Environment](http://developers.iqmetrix.com/api/#environments) to access. For production/live, leave empty. For sandbox, use "demo"
* username - Username from your onboarding package
* password - Password from your onboarding package

Click Update to update the postman environment and then click X to close the editor

## Step 5 - Perform the Request

Click on the Send button to perform the request.
      
The Basic Token is listed in the response as <code>basic_token</code>

<img class="popUpImage" src="http://developers.iqmetrix.com/images/rq-data-connect/response.png" alt="Postman Response" />