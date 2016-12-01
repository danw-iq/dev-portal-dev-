---
title:  Company Tree
permalink: /api/company-tree/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

A Company Tree is a representation of how a Company is structured and is used to: 

* Organize Locations
* Manage nuances within iQmetrix APIs, which can be passed down hierarchically 
* Structure reporting
* Manage security access

To learn more about Company Trees, see {{CompanyTree_Concept}}.

### Company Relationships

A Company <a href='http://developers.iqmetrix.com/api/company-tree/#relationship'>Relationship</a> describes the interaction between a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> and a Manufacturer, Supplier, Partner, Company Tree Node, etc.

Depending on the type of Relationship, the identifier for each Entity may appear in the `Source` or `Destination` field.

See the table below for a list of legal relationships and where the identifier of each entity will be placed in the resource.

| Name | Description | Source | Destination |
|:-----|:------------|:-------|:------------|
| Company-Group | A Group in the first level of a Company Tree for the Company | Company | Group |
| Company-Location | A Location in the first level of a Company Tree for the Company | Company | Location |
| Company-Division | A Division in the first level of a Company Tree for the Company | Company | Division |
| Company-Supplier | Supplier for the Company | Supplier | Company |
| Company-Carrier | Carrier for the Company | Carrier | Company |
| Company-Partner | Partner for the Company | Partner | Company |



# Endpoints


* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>



# Resources


## Company

```json
{
	"Id": "14146",
	"Name": "Kentel Corp",
	"Description": "Wireless accessories provider with store locations all across the globe.",
	"Roles":
		"Name": "Company",
	"ClientEntityId": "123",
	"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
	"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
	"Attributes": "",
	"Logo": "undefined",
	"Relationships": "undefined",
	"SortName": "kentel corp",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Name (`String(250)`) | Name | 
| Description (`String(255)`) | Description | 
| Roles (`Array[object]`) | The value must be Company | 
| Roles.Name (`String`) | Name | 
| ClientEntityId (`String`) | Identifier in an external system | 
| CreatedUtc (`DateTime`) | Created date in UTC | 
| LastModifiedUtc (`DateTime`) | Last modified date in UTC | 
| Attributes (`Object`) | Set of key-value pairs that contain extra data | 
| Logo (`<a href='/api/company-tree/#asset'>Asset</a>`) | A reference to an [Asset](/api/assets/#asset) | 
| Relationships (`Array[<a href='/api/company-tree/#relationship'>Relationship</a>]`) | See [Company Relationships](#company-relationships) | 
| SortName (`String`) | A string used for sorting | 
| Version (`Integer`) | Latest revision number | 
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *Role (`String`)* | *Reserved for internal use* | |
| *TypeId (`Integer`)* | *Reserved for future use* | |
## Relationship

```json
{
	"Id": "6267",
	"Source": "14146",
	"Destination": "14147",
	"CreatedUtc": "2015-11-20T18:22:10.931Z",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier for the relationship | 
| Source (`Integer`) | Identifier for a {{Vendor}}, <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a> or {{Partner}} or <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> | 
| Destination (`Integer`) | Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#group'>Group</a>, <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a>, <a href='http://developers.iqmetrix.com/api/company-tree/#division'>Division</a> or <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> | 
| CreatedUtc (`DateTime`) | Date the relationship was formed, in UTC | 
| Version (`Integer`) | Latest revision number | 
| *Definition (`Integer`)* | *Reserved for internal use* | |
## Asset

```json
{
	"Id": "d22291d9-db1d-45e2-ab60-32ac9c145323",
	"Name": "globe-rocket.jpg",
	"Height": "341",
	"Href": "https://amsdemostorage.blob.core.windows.net/assets/d22291d9-db1d-45e2-ab60-32ac9c145323.jpg",
	"Md5Checksum": "d2d0b491ad3eecd9d8c3dabb0610197d",
	"MimeType": "image/jpeg",
	"Width": "450"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| Name (`String`) | File name | 
| Height (`Integer`) | Height in pixels | 
| Href (`String`) | URL that points to an actual file where the digital asset is stored | 
| Md5Checksum (`String`) | String that can be used for upload integrity checks or comparing two assets | 
| MimeType (`String`) | Mime type | 
| Width (`Integer`) | Width in pixels | 
## CompanyTree

Your Company Tree is a hierarchial representation of how your Company is structured, including the root Company, Groups, Divisions and Locations.

To learn more about Company Trees, see {{CompanyTree_Concept}}.

```json
{
	"Id": "14146",
	"Name": "Kentel Corp",
	"Description": "Wireless accessories provider with store locations all across the globe.",
	"Role": "Company",
	"Nodes": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Company identifier | 
| Name (`String(250)`) | Company name | 
| Description (`String(255)`) | Description | 
| Role (`String`) | Role | 
| Nodes (`Array[<a href='/api/company-tree/#companytreenode'>CompanyTreeNode</a>]`) | The Company Tree hierarchy made up of Nodes | 
## CompanyTreeNode

CompanyTreeNodes are used to represent hierarchy in a Company Tree. A Node can represent a <a href='http://developers.iqmetrix.com/api/company-tree/#group'>Group</a>, <a href='http://developers.iqmetrix.com/api/company-tree/#division'>Division</a>, <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a> or device.

```json
{
	"Id": "14159",
	"Name": "T-hut Wireless",
	"Description": "Division of Kiosks",
	"Role": "Division",
	"Nodes": ""
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String(250)`) | Name | 
| Description (`String(255)`) | Description | 
| Role (`String`) | Role, possible values include: Company, Group, Division and Location | 
| Nodes (`Array[object]`) | Children | 
## Location

A **Location** is a physical or virtual presence that may hold inventory or process transactions.

```json
{
	"Id": "14202",
	"Name": "Dufferin Mall",
	"Description": "This Location is used to clear out discounted inventory",
	"Roles":
		"Name": "Location",
	"CreatedUTC": "2015-02-26T00:03:01.372Z",
	"LastModifiedUTC": "2015-02-27T00:03:06.392Z",
	"Area": "undefined",
	"Address": "undefined",
	"Attributes": "undefined",
	"ClientEntityId": "123",
	"Contacts": "undefined",
	"Geography":
		"Longitude": "-104.612034",
	"Latitude": "50.443559",
	"Relationships": "",
	"SortName": "dufferin mall",
	"StoreHours": "undefined",
	"StorePhoneNumbers":
		"Description": "Main Line",
	"Number": "5555555555",
	"Extension": "1234",
	"TimeZone":
		"Id": "Alaskan Standard Time",
	"DaylightSavingTimeEnabled": "true",
	"Version": "13"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Name (`String(250)`) | Name | 
| Description (`String(255)`) | Description | 
| Roles (`Array[object]`) | The Role of this Location, the value must be Location | 
| Roles.Name (`String`) | Name | 
| CreatedUTC (`DateTime`) | Created date in UTC | 
| LastModifiedUTC (`DateTime`) | Last modified date in UTC | 
| Area (`<a href='/api/company-tree/#area'>Area</a>`) | Measurement of floor space | 
| Address (`<a href='/api/company-tree/#address'>Address</a>`) | Address | 
| Attributes (`Object`) | Set of key-value pairs that contain extra data | 
| ClientEntityId (`String`) | Identifier in an external system | 
| Contacts (`Array[<a href='/api/company-tree/#contact'>Contact</a>]`) | Contact information | 
| Geography (`object`) | Geographic coordinates of this Location | 
| Geography.Longitude (`Decimal`) | Longitude, must be between -180 and 180 | 
| Geography.Latitude (`Decimal`) | Latitude, must be between -90 and 90 | 
| Relationships (`Array[object]`) | Relationship information, such as the parent node in the Company Tree | 
| SortName (`String`) | A string used for sorting | 
| StoreHours (`<a href='/api/company-tree/#storehours'>StoreHours</a>`) | Store hours for this Location | 
| StorePhoneNumbers (`Array[object]`) | Phone numbers | 
| StorePhoneNumbers.Description (`String`) | Description | 
| StorePhoneNumbers.Number (`String`) | Phone number | 
| StorePhoneNumbers.Extension (`String`) | Extension | 
| TimeZone (`object`) | Timezone information for the Location | 
| Id (`String`) | Identifier. For a list of acceptable values, see <a href='/api/reference/#getting-all-time-zones'>Getting All Time Zones</a> | 
| DaylightSavingTimeEnabled (`Boolean`) | A flag to indicate if the Time Zone observes Daylight Savings Time | 
| Version (`Integer`) | Latest revision number | 
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *LocationType (`String`)* | *Reserved for future use* | |
| *LocationSubType (`String`)* | *Reserved for future use* | |
| *Logo (`Object`)* | *Reserved for internal use* | |
| *Role (`String`)* | *Reserved for internal use* | |
| *TypeId (`Integer`)* | *Reserved for future use* | |
## Division

Division, as well as Groups, serve as generic buckets clients can use to organize the company tree. Divisions could be used to represent sub-brand or sub-company of a main company.

To learn more about Divisions, see {{Division_Concept}}.

```json
{
	"Id": "14159",
	"Name": "T-hut Wireless",
	"Description": "Division of Kiosks",
	"Roles":
		"Name": "Division",
	"ClientEntityId": "187",
	"CreatedUTC": "2015-05-20T23:06:29.7700813Z",
	"LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
	"Attributes": "undefined",
	"Logo": "undefined",
	"Relationships": "",
	"SortName": "t-hut wireless",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Name (`String(250)`) | Name | 
| Description (`String(255)`) | Description | 
| Roles (`Array[object]`) | The value must be Division | 
| Roles.Name (`String`) | Name | 
| ClientEntityId (`String`) | Identifier in an external system | 
| CreatedUTC (`DateTime`) | Created date in UTC | 
| LastModifiedUTC (`DateTime`) | Last modified date in UTC | 
| Attributes (`Object`) | Set of key-value pairs that contain extra data | 
| Logo (`<a href='/api/company-tree/#asset'>Asset</a>`) | A reference to an Asset | 
| Relationships (`Array[object]`) | Relationship information, such child Locations, Suppliers and Carriers | 
| SortName (`String`) | A string used for sorting | 
| Version (`Integer`) | Latest revision number | 
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *Role (`String`)* | *Reserved for internal use* | |
| *TypeId (`Integer`)* | *Reserved for future use* | |
## Group

Managerial or geographical groupings.

 To learn more about Groups, see {{Group_Concept}}.

```json
{
	"Id": "14166",
	"Name": "Toronto",
	"Description": "Group within Ontario",
	"Roles":
		"Name": "Group",
	"ClientEntityId": "187",
	"CreatedUTC": "2015-05-20T23:06:29.7700813Z",
	"LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
	"Attributes": "undefined",
	"Logo": "",
	"Relationships": "",
	"SortName": "toronto",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Name (`String(250)`) | Name | 
| Description (`String(255)`) | Description | 
| Roles (`Array[object]`) | The value must be Group | 
| Roles.Name (`String`) | Name | 
| ClientEntityId (`String`) | Identifier in an external system | 
| CreatedUTC (`DateTime`) | Created date in UTC | 
| LastModifiedUTC (`DateTime`) | Last modified date in UTC | 
| Attributes (`Object`) | Set of key-value pairs that contain extra data | 
| Logo (`<a href='/api/assets/#asset'>Asset</a>`) | A reference to an Asset | 
| Relationships (`Array[object]`) | Relationship information, such child Locations, Suppliers and Carriers | 
| SortName (`String`) | A string used for sorting | 
| Version (`Integer`) | Latest revision number | 
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *Role (`String`)* | *Reserved for internal use* | |
| *TypeId (`Integer`)* | *Reserved for future use* | |
## Address

A **Location** is a physical or virtual presence that may hold inventory or process transactions.

```json
{
	"AddressLine1": "4970 Hillside Avenue",
	"AddressLine2": "Apt 115",
	"City": "Edmonton",
	"StateCode": "ON",
	"StateName": "Ontario",
	"CountryCode": "CA",
	"CountryName": "Canada",
	"Zip": "P9H 9I4"
}
```

| Name | Description |
|:-----|:------------|
| AddressLine1 (`String`) | First line of Address | 
| AddressLine2 (`String`) | Second line of Address | 
| City (`String`) | City | 
| StateCode (`String`) | Code for the State in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | 
| StateName (`String`) | State/Province. Uses the ISO 3166-2 standard | 
| CountryCode (`String`) | Country Code. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | 
| CountryName (`String`) | Country | 
| Zip (`String`) | Zip or Postal Code | 
## Area

```json
{
	"Value": "1100",
	"Unit": "SqFt"
}
```

| Name | Description |
|:-----|:------------|
| Value (`Integer`) | Value of the Area | 
| Unit (`String`) | Unit used for the Value, acceptable values are SqFt and SqM | 
## TimeZone

```json
{
	"Id": "Alaskan Standard Time",
	"DaylightSavingTimeEnabled": "true"
}
```

| Name | Description |
|:-----|:------------|
| Id (`String`) | Identifier. For a list of acceptable values, see <a href='/api/reference/#getting-all-time-zones'>Getting All Time Zones</a> | 
| DaylightSavingTimeEnabled (`Boolean`) | A flag to indicate if the Time Zone observes Daylight Savings Time | 
## StoreHours

```json
{
	"Monday": "undefined",
	"Tuesday": "undefined",
	"Wednesday": "undefined",
	"Thursday": "undefined",
	"Friday": "undefined",
	"Saturday": "undefined",
	"Sunday": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Monday (`<a href='/api/company-tree/#weekday'>WeekDay</a>`) | Hours on Monday | 
| Tuesday (`<a href='/api/company-tree/#weekday'>WeekDay</a>`) | Hours on Tuesday | 
| Wednesday (`<a href='/api/company-tree/#weekday'>WeekDay</a>`) | Hours on Wednesday | 
| Thursday (`<a href='/api/company-tree/#weekday'>WeekDay</a>`) | Hours on Thursday | 
| Friday (`<a href='/api/company-tree/#weekday'>WeekDay</a>`) | Hours on Monday | 
| Saturday (`<a href='/api/company-tree/#weekday'>WeekDay</a>`) | Hours on Saturday | 
| Sunday (`<a href='/api/company-tree/#weekday'>WeekDay</a>`) | Hours on Sunday | 
## WeekDay

```json
{
	"Open":
		"Hour": "10",
	"Minute": "0",
	"Close":
		"Hour": "10",
	"Minute": "0"
}
```

| Name | Description |
|:-----|:------------|
| Open (`object`) | Open time | 
| Open.Hour (`Integer`) |  | 
| Open.Minute (`Integer`) |  | 
| Close (`object`) | Close time | 
| Close.Hour (`Integer`) |  | 
| Close.Minute (`Integer`) |  | 
## Contact

```json
{
	"Name": "John Smith",
	"Description": "Store Manager",
	"PhoneNumbers":
		"Description": "Main Line",
	"Number": "5555555555",
	"Extension": "1234"
}
```

| Name | Description |
|:-----|:------------|
| Name (`String`) | Name | 
| Description (`String`) | Description | 
| PhoneNumbers (`array`) | Phone numbers | 
| PhoneNumbers.Description (`String`) | Description | 
| PhoneNumbers.Number (`String`) | Phone number | 
| PhoneNumbers.Extension (`String`) | Extension | 




# Requests



## <span class='get'>GET</span> a Company



> Definition

```
GET /Companies({CompanyId})
```

> Example Request

```javascript
GET /Companies(14146)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingACompany()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
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

public static CloseableHttpResponse GettingACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    </ul>





### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
{
    "Id": 14146,
    "Name": "Kentel Corp",
    "Description": "Wireless accessories provider with store locations all across the globe.",
    "Roles": [
        {
            "Name": "Company"
        }
    ],
    "ClientEntityId": "123",
    "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "Id": "d22291d9-db1d-45e2-ab60-32ac9c145323",
        "Name": "globe-rocket.jpg",
        "Height": 341,
        "Href": "https://amsdemostorage.blob.core.windows.net/assets/d22291d9-db1d-45e2-ab60-32ac9c145323.jpg",
        "Md5Checksum": "d2d0b491ad3eecd9d8c3dabb0610197d",
        "MimeType": "image/jpeg",
        "Width": 450
    },
    "Relationships": [
        {
            "Id": 6267,
            "Source": 14146,
            "Destination": 14147,
            "CreatedUtc": "2015-11-20T18:22:10.931Z",
            "Version": 1
        }
    ],
    "SortName": "kentel corp",
    "Version": 1
}
```



 <a href='#company'>Company</a>



## <span class='get'>GET</span> a Company Tree



> Definition

```
GET /Companies({CompanyId})/Tree
```

> Example Request

```javascript
GET /Companies(14146)/Tree
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingACompanyTree()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
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

public static CloseableHttpResponse GettingACompanyTree() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    </ul>





### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
{
    "Id": 14146,
    "Name": "Kentel Corp",
    "Description": "Wireless accessories provider with store locations all across the globe.",
    "Role": "Company",
    "Nodes": [
        {
            "Id": 14159,
            "Name": "T-hut Wireless",
            "Description": "Division of Kiosks",
            "Role": "Division",
            "Nodes": []
        }
    ]
}
```



 <a href='#companytree'>CompanyTree</a>



## Creating a Location



> Definition

```
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations
```

> Example Request

```javascript
POST /Companies(14146)/Tree/Nodes(14159)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    }
}'
```

```csharp
static IRestResponse CreatingALocation()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true}}", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true}}";

response = RestClient.post 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of the parent for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a>
    </li>
    </ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Roles</code> (<strong>Required</strong>) - Must be `Location`</li><ul><li><code>Name</code> (<strong>Required</strong>) </li></ul><li><code>Description</code> (Optional) </li><li><code>Area</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Unit must also be provided</li><li><code>Unit</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Value must also be provided</li></ul><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StateName</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if�StateCode�is provided</li><li><code>CountryName</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Contacts</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul></ul><li><code>Geography</code> (Optional) </li><ul><li><code>Longitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Longitude must also be provided</li><li><code>Latitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Latitude must also be provided</li></ul><li><code>StoreHours</code> (Optional) </li><ul><li><code>Monday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Tuesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Wednesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Thursday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Friday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Saturday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Sunday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul></ul><li><code>StorePhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul><li><code>TimeZone</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>DaylightSavingTimeEnabled</code> (Optional) </li></ul></ul>



### Response Parameters



> Example Response

<pre>
HTTP 201 Content-Type: application/json
</pre>
```json
{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
```



 <a href='#location'>Location</a>



## <span class='put'>PUT</span> a Location

There are <strong>two</strong> different ways to update a location. 

<ul>
  <li>Option 1 - <code>PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})</code></li>
  <li>Option 2 - <code>PUT /Companies({CompanyId})/Locations({LocationId})</code></li>
</ul>

Option 1 requires knowing the <code>NodeId</code> of the parent of the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a>, but has <strong>stronger</strong> validation.


> Definition

```
PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})
```

> Example Request

```javascript
PUT /Companies(14146)/Tree/Nodes(14159)/Locations(14202)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}'
```

```csharp
static IRestResponse UpdatingALocation()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":14202,\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"CreatedUTC\":\"2015-02-26T00:03:01.372Z\",\"LastModifiedUTC\":\"2015-02-27T00:03:06.392Z\",\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"Relationships\":[],\"SortName\":\"dufferin mall\",\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true},\"Version\":13}", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":14202,\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"CreatedUTC\":\"2015-02-26T00:03:01.372Z\",\"LastModifiedUTC\":\"2015-02-27T00:03:06.392Z\",\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"Relationships\":[],\"SortName\":\"dufferin mall\",\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true},\"Version\":13}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":14202,\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"CreatedUTC\":\"2015-02-26T00:03:01.372Z\",\"LastModifiedUTC\":\"2015-02-27T00:03:06.392Z\",\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"Relationships\":[],\"SortName\":\"dufferin mall\",\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true},\"Version\":13}";

response = RestClient.put 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of the parent for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a>
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a>
    </li>
    </ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Roles</code> (<strong>Required</strong>) - Must be `Location`</li><ul><li><code>Name</code> (<strong>Required</strong>) </li></ul><li><code>Id</code> (<strong>Required</strong>) - Required for PUT requests</li><li><code>Description</code> (Optional) </li><li><code>Area</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Unit must also be provided</li><li><code>Unit</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Value must also be provided</li></ul><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StateName</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if�StateCode�is provided</li><li><code>CountryName</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Contacts</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul></ul><li><code>Geography</code> (Optional) </li><ul><li><code>Longitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Longitude must also be provided</li><li><code>Latitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Latitude must also be provided</li></ul><li><code>StoreHours</code> (Optional) </li><ul><li><code>Monday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Tuesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Wednesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Thursday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Friday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Saturday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Sunday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul></ul><li><code>StorePhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul><li><code>TimeZone</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>DaylightSavingTimeEnabled</code> (Optional) </li></ul><li><code>Version</code> (<strong>Required</strong>) </li></ul>



### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
```



 <a href='#location'>Location</a>



## <span class='get'>GET</span> a Location for a Company



> Definition

```
GET /Companies({CompanyId})/Locations({LocationId})
```

> Example Request

```javascript
GET /Companies(14146)/Locations(14202)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingALocationForACompany()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
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

public static CloseableHttpResponse GettingALocationForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a>
    </li>
    </ul>





### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
```



 <a href='#location'>Location</a>



## <span class='get'>GET</span> All Locations for a Company



> Definition

```
GET /Companies({CompanyId})/Locations
```

> Example Request

```javascript
GET /Companies(14146)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllLocationsForACompany()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
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

public static CloseableHttpResponse GettingAllLocationsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    </ul>





### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
[
    {
        "Id": 14202,
        "Name": "Dufferin Mall",
        "Description": "This Location is used to clear out discounted inventory",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "CreatedUTC": "2015-02-26T00:03:01.372Z",
        "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "4970 Hillside Avenue",
            "AddressLine2": "Apt 115",
            "City": "Edmonton",
            "StateCode": "ON",
            "StateName": "Ontario",
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "P9H 9I4"
        },
        "Attributes": {},
        "ClientEntityId": "123",
        "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
        ],
        "Geography": {
            "Longitude": -104.612034,
            "Latitude": 50.443559
        },
        "Relationships": [],
        "SortName": "dufferin mall",
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Tuesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Wednesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Thursday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Friday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Saturday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Sunday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            }
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true
        },
        "Version": 13
    }
]
```



 Array[<a href='#location'>Location</a>]



## Creating a Division

Divisions may be added to the root Company node, or to a Division or Group node. 

A Division cannot be created if one already exists at the same level with the same name. 

That is, you can have a Division and Group with the same name under the same parent or two Division with the same name in different parts of the tree, but you cannot have two Divisions with the same name and the same parent.


> Definition

```
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Divisions
```

> Example Request

```javascript
POST /Companies(14146)/Tree/Nodes(14159)/Divisions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "T-hut Wireless",
    "Description": "Division of Kiosks",
    "ClientEntityId": "187",
    "Attributes": {}
}'
```

```csharp
static IRestResponse CreatingADivision()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"T-hut Wireless\",\"Description\":\"Division of Kiosks\",\"ClientEntityId\":\"187\",\"Attributes\":{}}", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingADivision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"T-hut Wireless\",\"Description\":\"Division of Kiosks\",\"ClientEntityId\":\"187\",\"Attributes\":{}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Name\":\"T-hut Wireless\",\"Description\":\"Division of Kiosks\",\"ClientEntityId\":\"187\",\"Attributes\":{}}";

response = RestClient.post 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node
    </li>
    </ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Attributes</code> (Optional) </li></ul>



### Response Parameters



> Example Response

<pre>
HTTP 201 Content-Type: application/json
</pre>
```json
{
    "Id": 14159,
    "Name": "T-hut Wireless",
    "Description": "Division of Kiosks",
    "Roles": [
        {
            "Name": "Division"
        }
    ],
    "ClientEntityId": "187",
    "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "Id": "d22291d9-db1d-45e2-ab60-32ac9c145323",
        "Name": "globe-rocket.jpg",
        "Height": 341,
        "Href": "https://amsdemostorage.blob.core.windows.net/assets/d22291d9-db1d-45e2-ab60-32ac9c145323.jpg",
        "Md5Checksum": "d2d0b491ad3eecd9d8c3dabb0610197d",
        "MimeType": "image/jpeg",
        "Width": 450
    },
    "Relationships": [],
    "SortName": "t-hut wireless",
    "Version": 1
}
```



 <a href='#division'>Division</a>



## Creating a Group

Groups may be added to the root Company node, or to a Division or Group node. 

A Group cannot be created if one already exists at the same level with the same name. 

That is, you can have a Division and Group with the same name under the same parent or two Groups with the same name in different parts of the tree, but you cannot have two Groups with the same name and the same parent.


> Definition

```
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Groups
```

> Example Request

```javascript
POST /Companies(14146)/Tree/Nodes(14159)/Groups
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "Toronto",
    "Description": "Group within Ontario",
    "ClientEntityId": "187",
    "Attributes": {}
}'
```

```csharp
static IRestResponse CreatingAGroup()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"Toronto\",\"Description\":\"Group within Ontario\",\"ClientEntityId\":\"187\",\"Attributes\":{}}", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAGroup() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"Toronto\",\"Description\":\"Group within Ontario\",\"ClientEntityId\":\"187\",\"Attributes\":{}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Name\":\"Toronto\",\"Description\":\"Group within Ontario\",\"ClientEntityId\":\"187\",\"Attributes\":{}}";

response = RestClient.post 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node
    </li>
    </ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Attributes</code> (Optional) </li></ul>



### Response Parameters



> Example Response

<pre>
HTTP 201 Content-Type: application/json
</pre>
```json
{
    "Id": 14166,
    "Name": "Toronto",
    "Description": "Group within Ontario",
    "Roles": [
        {
            "Name": "Group"
        }
    ],
    "ClientEntityId": "187",
    "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "id": "09fe1ee4-42b1-43a6-bd80-cd2bda21e90a",
        "name": "49ebd282-4161-4a9d-9b40-a5a20d144b6f.png",
        "height": 1024,
        "href": "https://amsdemo.iqmetrix.net/images/09fe1ee4-42b1-43a6-bd80-cd2bda21e90a.png",
        "md5Checksum": "1f88a2813737aa0019a63069586055ed",
        "mimeType": "image/png",
        "width": 502,
        "success": true
    },
    "Relationships": [],
    "SortName": "toronto",
    "Version": 1
}
```



 <a href='#group'>Group</a>



## Deleting a Group or Division

{{warning}}
This operation <strong>cannot be undone</strong>.
{{end}}

This request removes the Node referred to by NodeId from the Company Tree along with all of its children. 

Only Divisions and Groups can be deleted this way. 

If the Node or any of its children include Entities other than Groups or Divisions, the request will be rejected.


> Definition

```
DELETE /Companies({CompanyId})/Tree/Nodes({NodeId})
```

> Example Request

```javascript
DELETE /Companies(14146)/Tree/Nodes(14159)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DeletingAGroupOrDivision()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DeletingAGroupOrDivision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node to be deleted
    </li>
    </ul>





### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>





## Searching by ClientEntityId

This request allows you to search your Company Tree using the `ClientEntityId` field. 

This request returns an array of objects that summarize Entities matching the search criteria. 

The following resource types are considered 'Entities': <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, <a href='http://developers.iqmetrix.com/api/company-tree/#division'>Division</a>, <a href='http://developers.iqmetrix.com/api/company-tree/#group'>Group</a>, <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a>, device

> Definition

```
GET /Entities({CompanyId})/Nodes?$filter='{ClientEntityId}'
```

> Example Request

```javascript
GET /Entities(14146)/Nodes?$filter='187'
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter='187'" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse SearchingByCliententityid()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter='187'");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
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

public static CloseableHttpResponse SearchingByCliententityid() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter='187'");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter='187'', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>
    </li>
    
    <li>
        <code>ClientEntityId</code> (<strong>Required</strong>)  - The value to search for
    </li>
    </ul>





### Response Parameters



> Example Response

<pre>
HTTP 200 Content-Type: application/json
</pre>
```json
[
    {
        "Id": 14202,
        "Name": "Dufferin Mall",
        "Description": "This Location is used to clear out discounted inventory",
        "Role": "Location",
        "Path": [
            {
                "Id": 14202,
                "Name": "Dufferin Mall",
                "Description": "This Location is used to clear out discounted inventory",
                "Role": "Location"
            }
        ]
    }
]
```



 <ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>Description</code> (String) </li><li><code>Role</code> (String) </li><li><code>Path</code> (Array) </li><ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>Description</code> (String) </li><li><code>Role</code> (String) </li></ul></ul>



# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `New node {x} must be related to its parent role. `<br/>`Parent node {y} must be in same tree as Company {z}` | Ensure the NodeId is a valid CompanyTreeNode and is in the correct Company Tree |
| `HTTP 400` | `Invalid Canadian postal code. Should have valid `<br/>`letters and format A1A 1A1 where A is a letter and 1 is a digit.` | Ensure Postal/Zip Code is valid |
| `HTTP 400` | `Request Parameter Doesn't Match Expected Value` | Ensure all **Required** parameters are provided, see `Description` of Error for more details |
| `HTTP 400` | `Please move or delete attached locations`<br/>` before deleting this entity` | Ensure Node to be deleted does not have child Locations |
| `HTTP 400` | `'{x}' should not be empty.` | Ensure required parameters are included |
| `HTTP 400` | `'{x}' must be between 0 and {y} characters. `<br/>` You entered {z} characters.` | Ensure required parameters are within size limitations |
| `HTTP 400` | `'Latitude/Longitude' should not be empty` | Ensure both `Latitude` and `Longitude` are provided, or `Geography` is null |
| `HTTP 400` | `'Latitude' must be between -90 and 90.  `<br/>`You entered {x}` | Ensure `Latitude` is between -90 and 90 |
| `HTTP 400` | `'Longitude' must be between -180 and 180. `<br/>`You entered {x}` | Ensure `Longitude` is between -180 and 180 |
| `HTTP 404` | `Entity Not Found` | Ensure `CompanyId` and `LocationId``<br/>` are accurate and the Location belongs to the Company |
| `HTTP 409` | `Entity resource already modified by an`<br/>`  earlier request` | Ensure `Version` is included in request and the Version value provided in the request data matches the Version for the resource in the database  |
| `HTTP 409` | `An Entity already exists with the same name`<br/>` and role at this level.` | Ensure an instance of the resource you are trying to create does not already exist with the same name |    

