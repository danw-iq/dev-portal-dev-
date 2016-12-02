---
title:  Reference
permalink: /api/reference/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The Reference API allows you to easily access a list of supported Countries, States, TimeZones and Currencies.



# Endpoints


* Sandbox: <a href="https://referencedemo.iqmetrix.net/v1">https://referencedemo.iqmetrix.net/v1</a>
* Production: <a href="https://reference.iqmetrix.net/v1">https://reference.iqmetrix.net/v1</a>



# Resources


## Country

```json
{
	"Id": "1",
	"Code": "CA",
	"Name": "Canada",
	"Version": "1",
	"States": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Code (`String`) | Country Code. Uses the ISO 3166-1 alpha-2 standard | 
| Name (`String`) | Country name | 
| Version (`Integer`) | Latest version number | 
| States (`Array[[reference](/api/state/#State)]`) | States/Provinces | 
| *Alpha3Code (`String`)* | *Reserved for future use* | |

## State

```json
{
	"Name": "Alberta",
	"Code": "AB"
}
```

| Name | Description |
|:-----|:------------|
| Name (`String`) | Country name | 
| Code (`String`) | State/Province Code. Based off the ISO 3166-2 standard | 
| *Id (`Integer`)* | *Reserved for future use* | |
| *Alpha3Code (`String`)* | *Reserved for future use* | |
| *CountryCode (`String`)* | *Reserved for future use* | |

## TimeZone

```json
{
	"Id": "Alaskan Standard Time",
	"Name": "(UTC-09:00) Alaska",
	"SupportsDaylightSavingTime": "true"
}
```

| Name | Description |
|:-----|:------------|
| Id (`String`) | Identifier | 
| Name (`String`) | Name | 
| SupportsDaylightSavingTime (`Boolean`) | A flag to indicate if this TimeZone observes Daylight Savings Time | 

## Currency

To represent a Currency symbol in unicode, use the format <code>&#(Code);</code>, for USD this would be <code>&#36;</code> which is displayed as &#36; 

```json
{
	"Id": "106",
	"Name": "United States Dollar",
	"Code": "USD",
	"Symbol": "36",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Currency Name | 
| Code (`String`) | Identifier for the Currency | 
| Symbol (`Array[integer]`) | Unicode decimal value for symbols associated with this currency | 
| Version (`Integer`) | Latest version number | 
| *LanguageNameMap (`String`)* | *Reserved for future use* | |





# Requests



## <span class='get'>GET</span> All Countries



> Definition

```
GET /Countries
```

> Example Request

```javascript
GET /Countries
Accept: application/json
```


```shell
curl -X GET "https://referencedemo.iqmetrix.net/v1/Countries" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllCountries()
{
    var client = new RestClient("https://referencedemo.iqmetrix.net/v1/Countries");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCountries() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://referencedemo.iqmetrix.net/v1/Countries");
     
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://referencedemo.iqmetrix.net/v1/Countries', {
     :'Accept' => 'application/json',
    } 

puts response
```





### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 1,
        "Code": "CA",
        "Name": "Canada",
        "Version": 1,
        "States": [
            {
                "Name": "Alberta",
                "Code": "AB"
            }
        ]
    }
]
```



 Array[[country](#Country)]



## <span class='get'>GET</span> All Time Zones



> Definition

```
GET /TimeZones
```

> Example Request

```javascript
GET /TimeZones
Accept: application/json
```


```shell
curl -X GET "https://referencedemo.iqmetrix.net/v1/TimeZones" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllTimeZones()
{
    var client = new RestClient("https://referencedemo.iqmetrix.net/v1/TimeZones");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllTimeZones() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://referencedemo.iqmetrix.net/v1/TimeZones");
     
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://referencedemo.iqmetrix.net/v1/TimeZones', {
     :'Accept' => 'application/json',
    } 

puts response
```





### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": "Alaskan Standard Time",
        "Name": "(UTC-09:00) Alaska",
        "SupportsDaylightSavingTime": true
    }
]
```



 Array[[timezone](#TimeZone)]



## <span class='get'>GET</span> All Currencies

Currency resources are returned in ascending alphabetical order by Code.

> Definition

```
GET /Currencies
```

> Example Request

```javascript
GET /Currencies
Accept: application/json
```


```shell
curl -X GET "https://referencedemo.iqmetrix.net/v1/Currencies" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllCurrencies()
{
    var client = new RestClient("https://referencedemo.iqmetrix.net/v1/Currencies");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCurrencies() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://referencedemo.iqmetrix.net/v1/Currencies");
     
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://referencedemo.iqmetrix.net/v1/Currencies', {
     :'Accept' => 'application/json',
    } 

puts response
```





### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 106,
        "Name": "United States Dollar",
        "Code": "USD",
        "Symbol": [
            36
        ],
        "Version": 1
    }
]
```



 Array[[currency](#Currency)]


