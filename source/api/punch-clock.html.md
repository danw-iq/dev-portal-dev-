---
title:  Punch Clock
permalink: /api/punch-clock/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The Punch Clock API allows you to retrieve Punch Clock entries from your RQ database. 



# Endpoints


* Sandbox: <a href="https://punchclockdemo.iqmetrix.net/v1">https://punchclockdemo.iqmetrix.net/v1</a>
* Production: <a href="https://punchclock.iqmetrix.net/v1">https://punchclock.iqmetrix.net/v1</a>



# Resources


## PunchEntry

An instance of a clock punch for an employee at a location, with a punch-in time and (optionally) a punch-out time.

```json
{
	"Id": "1953",
	"CreatedDateUtc": "2015-09-23T15:41:59.403",
	"EmployeeVerified": "false",
	"EmployeeSpecialId": "1002",
	"LastUpdateDateUtc": "2015-09-23T15:55:09.927",
	"LocationCode": "CWW",
	"LocationId": "14202",
	"ManagerVerified": "false",
	"PunchInComments": "IN - FingerPrint/HomeConsole",
	"PunchOutComments": "OUT - HomeConsole",
	"TimeInAtStore": "2015-09-23T09:41:52.653",
	"TimeOutAtStore": "2015-09-23T09:55:03.973",
	"UserId": "2576",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique Identifier | 
| CreatedDateUtc (`DateTime`) | Created date and time, in UTC | 
| EmployeeVerified (`Boolean`) | A flag to indicate if the employee has verified the PunchEntry | 
| EmployeeSpecialId (`String`) | Special identifier for Employee in RQ | 
| LastUpdateDateUtc (`DateTime`) | Time of the last update, in UTC | 
| LocationCode (`String(100)`) | An identifier for the Location in an external system | 
| LocationId (`Integer`) | Identifier for the [Location](/api/company-tree/#location) | 
| ManagerVerified (`Boolean`) | A flag to indicate if the manager has verified the PunchEntry | 
| PunchInComments (`String(100)`) | Punch in comments | 
| PunchOutComments (`String(100)`) | Punch out comments | 
| TimeInAtStore (`DateTime`) | Punch in time (local time at store), in UTC | 
| TimeOutAtStore (`DateTime`) | Punch out time (local time at store), in UTC | 
| UserId (`Integer`) | Identifier for a [User](/api/user-manager/#user) | 
| Version (`Integer`) | Latest revision number | 
| *RQPunchId (`Integer`)* | *Reserved for internal use* | |





# Requests



## <span class='get'>GET</span> All Punch Entries

By default, the sorting order of the response to this request will be **descending** order by `LastUpdateDateUtc`.

{{note}}
Don't forget <code>$filter=</code> in the request!
{{end}}  

> Definition

```
GET /Companies({CompanyId})/PunchEntries?$filter=LastUpdateDateUtc ge datetime'{StartDate}' and LastUpdateDateUtc le datetime'{EndDate}'&$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse GettingAllPunchEntries()
{
    var client = new RestClient("https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/hal+json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllPunchEntries() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>StartDate</code> (Optional)  - Date at which to begin search request, in UTC</li>
    <li><code>EndDate</code> (Optional)  - Date at which to end search request, in UTC</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/hal+json
```

```json
{
    "_links": {
        "prev": null,
        "self": {
            "href": "v1/Companies(14146)/PunchEntries?$filter=ransactionDateUTC ge datetime'2015-01-01T00:00:00.000' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000'&$skip=0&$top=10",
            "templated": false
        },
        "next": null
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "v1/Companies(14146)/PunchEntries(15)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": 1953,
                "CreatedDateUtc": "2015-09-23T15:41:59.403",
                "EmployeeVerified": false,
                "EmployeeSpecialId": 1002,
                "LastUpdateDateUtc": "2015-09-23T15:55:09.927",
                "LocationCode": "CWW",
                "LocationId": 14202,
                "ManagerVerified": false,
                "PunchInComments": "IN - FingerPrint/HomeConsole",
                "PunchOutComments": "OUT - HomeConsole",
                "TimeInAtStore": "2015-09-23T09:41:52.653",
                "TimeOutAtStore": "2015-09-23T09:55:03.973",
                "UserId": 2576,
                "Version": 1
            }
        ]
    }
}
```







# Pagination

The Punch Clock API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of `$skip` and `$top` query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 50 if a `$skip` value but no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

```csharp
{
    "_links": {
        "prev": null,
        "self": "v1/Companies(14146)/PunchEntries?$skip=0&$top=5",
        "next": "v1/Companies(14146)/PunchEntries?$skip=5&$top=5"
    },
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    }
}
```

In the example above, the `_links` section is included in the data returned from an API call to [Getting All Punch Entries](#getting-all-punch-entries), where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.

