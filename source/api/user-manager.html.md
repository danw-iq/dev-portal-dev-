---
title:  User Manager
permalink: /api/user-manager/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The User Manager API allows you to manage [User](#users) accounts for your <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>.

To learn more about User Manager, see {{UserManager_Concept}}.



# Endpoints


* Sandbox: <a href="https://usermanagerdemo.iqmetrix.net/v1">https://usermanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://usermanager.iqmetrix.net/v1">https://usermanager.iqmetrix.net/v1</a>



# Resources


## User

A User represents an account that can be used to perform actions on your data within iQmetrix APIs.

```json
{
	"Id": "2576",
	"FirstName": "John",
	"LastName": "Bates",
	"UserName": "johnb@kentel.com",
	"Address": "undefined",
	"ClientUserId": "132",
	"Email": "johnb@kentel.com",
	"IsActive": "true",
	"JobTitle": "Sales Clerk",
	"ParentEntityId": "1",
	"PhoneNumbers": "undefined",
	"Picture": "",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| FirstName (`String`) | First name | 
| LastName (`String`) | Last name | 
| UserName (`String`) | Name to be used to identify this User, must be unique | 
| Address (`[user-manager](/api/address/#Address)`) | Address | 
| ClientUserId (`String`) | Identifier for the User in an external system | 
| Email (`String`) | Email for the User. Must be unique. A notification will be sent to this address when a User is created. | 
| IsActive (`Boolean`) | Flag to indicate if the Users login is enabled, false if it is disabled | 
| JobTitle (`String`) | Job title | 
| ParentEntityId (`Integer`) | Identifier for the Company to which this User belongs | 
| PhoneNumbers (`Array[[user-manager](/api/phonenumber/#PhoneNumber)]`) | Phone numbers | 
| Picture (`Object`) | A reference to an Asset that is a photo of the User | 
| Version (`Integer`) | Latest revision number | 
| *Attributes (`Object`)* | *Reserved for future use* | |
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *Profiles (`Array`)* | *This is a legacy property that should not be used* | |

## Address

```json
{
	"AddressLine1": "1432 Merry View Road",
	"AddressLine2": "",
	"City": "Big Windy",
	"StateCode": "ON",
	"CountryCode": "CA",
	"Zip": "A1A2B2"
}
```

| Name | Description |
|:-----|:------------|
| AddressLine1 (`String`) |  | 
| AddressLine2 (`String`) |  | 
| City (`String`) |  | 
| StateCode (`String`) | Code for the State in which this address resides. Based off the ISO 3166-2 standard | 
| CountryCode (`String`) | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of accptable Countries, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | 
| Zip (`String`) | Zip or Postal Code | 

## PhoneNumber

```json
{
	"Number": "6135550127",
	"Extension": "5532",
	"Type": "Work"
}
```

| Name | Description |
|:-----|:------------|
| Number (`String`) | Must be at least 7 characters | 
| Extension (`String`) | Extension | 
| Type (`String`) | Type of phone number | 

## LockReason

A **LockReason** allows you to provide a reason when [Locking a User](/api/user-manager/#locking-a-user). Examples of reasons might include: 

* Incomplete paperwork on a sale 
 * Equipment transfer Incomplete inventory count 
 * Incomplete cash safe

```json
{
	"Id": "14",
	"Name": "PaperworkNotDone",
	"Description": "Your account has been locked because the paperwork hasn't been done. Please contact your supervisor."
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Lock reason name | 
| Description (`String`) | Text that will appear to User when locked out | 





# Requests



## Importing an Existing User

{{important}}
This request <strong>will not send an email</strong> to the User
{{end}}
{{note}}
If no password is supplied, the User will not be able to log in, obtain a token or reset their password. Users created this way will <strong>not get a password</strong> and are <strong>not forced to change their password</strong> when logging in for the first time.
{{end}}
This request allows existing Users to be imported from another system. 


> Definition

```
POST /Users/importExisting
```

> Example Request

```javascript
POST /Users/importExisting
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "UserName": "johnb@kentel",
    "Password": "samplepassword",
    "Email": "johnb@kentel.com",
    "FirstName": "John",
    "LastName": "Bates",
    "ParentEntityId": 1,
    "ClientUserId": "132",
    "JobTitle": "Sales Clerk",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ]
}'
```

```csharp
static IRestResponse ImportingAnExistingUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"UserName\":\"johnb@kentel\",\"Password\":\"samplepassword\",\"Email\":\"johnb@kentel.com\",\"FirstName\":\"John\",\"LastName\":\"Bates\",\"ParentEntityId\":1,\"ClientUserId\":\"132\",\"JobTitle\":\"Sales Clerk\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse ImportingAnExistingUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"UserName\":\"johnb@kentel\",\"Password\":\"samplepassword\",\"Email\":\"johnb@kentel.com\",\"FirstName\":\"John\",\"LastName\":\"Bates\",\"ParentEntityId\":1,\"ClientUserId\":\"132\",\"JobTitle\":\"Sales Clerk\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"UserName\":\"johnb@kentel\",\"Password\":\"samplepassword\",\"Email\":\"johnb@kentel.com\",\"FirstName\":\"John\",\"LastName\":\"Bates\",\"ParentEntityId\":1,\"ClientUserId\":\"132\",\"JobTitle\":\"Sales Clerk\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}]}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```





#### Request Parameters

<ul><li><code>UserName</code> (<strong>Required</strong>) - The name used to identify this User. Must be unique. <strong>RQ Limitation</strong>: To import this User to RQ, ensure username follows the format <code>{Name}@{DatabaseName}</code></li><li><code>ParentEntityId</code> (<strong>Required</strong>) - Identifier for the Company to which this User belongs</li><li><code>Password</code> (Optional) - The User's password. If supplied, it must be a nonempty string</li><li><code>Email</code> (Optional) - The User's email address. Must be unique</li><li><code>FirstName</code> (Optional) </li><li><code>LastName</code> (Optional) </li><li><code>ClientUserId</code> (Optional) - Identifier for the User in an external system</li><li><code>JobTitle</code> (Optional) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) - Must be at least 7 characters</li><li><code>Extension</code> (Optional) - If provided, Number must also be provided</li><li><code>Type</code> (Optional) - Required if Number is provided. <strong>RQ Limitation:</strong> To import into RQ, value must be one of <strong>Home, Cell, Work</strong></li></ul></ul>

### Response Parameters



> Example Response

```json
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}
```



 [user](#User)



## <span class='get'>GET</span> a User



> Definition

```
GET /Users({UserId})
```

> Example Request

```javascript
GET /Users(2576)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
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

public static CloseableHttpResponse GettingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}
```



 [user](#User)



## <span class='put'>PUT</span> a User

{{important}}All fields that were populated in a User prior to this request must be provided in the body of the <code>PUT</code> request.{{end}}{{tip}}To add an Asset to a User, first <a href="{{"/assets/#creating-an-asset" | prepend: site.api_baseurl}}">Create an Asset</a>, then use this request to associate the Asset with a User.{{end}}


> Definition

```
PUT /Users({UserId})
```

> Example Request

```javascript
PUT /Users(2576)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}'
```

```csharp
static IRestResponse UpdatingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":2576,\"FirstName\":\"John\",\"LastName\":\"Bates\",\"UserName\":\"johnb@kentel.com\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"ClientUserId\":\"132\",\"Email\":\"johnb@kentel.com\",\"IsActive\":true,\"JobTitle\":\"Sales Clerk\",\"ParentEntityId\":1,\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Picture\":{},\"Version\":1}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":2576,\"FirstName\":\"John\",\"LastName\":\"Bates\",\"UserName\":\"johnb@kentel.com\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"ClientUserId\":\"132\",\"Email\":\"johnb@kentel.com\",\"IsActive\":true,\"JobTitle\":\"Sales Clerk\",\"ParentEntityId\":1,\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Picture\":{},\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":2576,\"FirstName\":\"John\",\"LastName\":\"Bates\",\"UserName\":\"johnb@kentel.com\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"ClientUserId\":\"132\",\"Email\":\"johnb@kentel.com\",\"IsActive\":true,\"JobTitle\":\"Sales Clerk\",\"ParentEntityId\":1,\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Picture\":{},\"Version\":1}";

response = RestClient.put 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



#### Request Parameters

<ul><li><code>FirstName</code> (<strong>Required</strong>) </li><li><code>LastName</code> (<strong>Required</strong>) </li><li><code>UserName</code> (<strong>Required</strong>) - The name used to identify this User. Must be unique</li><li><code>ParentEntityId</code> (<strong>Required</strong>) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>ClientUserId</code> (Optional) </li><li><code>Email</code> (Optional) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>JobTitle</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) - Must be at least 7 characters</li><li><code>Extension</code> (Optional) - If provided, Number must also be provided</li><li><code>Type</code> (Optional) - Required if Number is provided. <strong>RQ Limitation:</strong> To import into RQ, value must be one of <strong>Home, Cell, Work</strong></li></ul><li><code>Picture</code> (Optional) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Optional) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}
```



 [user](#User)



## Disabling a User

{{note}}
Disabling a User does <b>NOT</b> free up their email address or username to be used to create another User. To free up an email address or username, you must instead <a href="#updating-a-user">update</a> the email or username of the original User to something else.
{{end}}


> Definition

```
DELETE /Users({UserId})
```

> Example Request

```javascript
DELETE /Users(2576)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DisablingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
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

public static CloseableHttpResponse DisablingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": false,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 2
}

```



 [user](#User)



## <span class='get'>GET</span> All Users for a Company

This request will only return Users where `IsActive` is set to `true`.


> Definition

```
GET /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Entities(14146)/Users?$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllUsersForACompany()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10");
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

public static CloseableHttpResponse GettingAllUsersForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "_links": {
        "prev": "null",
        "self": "/v1/entities(14146)/users?$skip=0&$top=30",
        "next": "null"
    },
    "_metadata": {
        "count": 1,
        "skip": 0,
        "top": 30
    },
    "items": [
        {
            "Id": 2576,
            "FirstName": "John",
            "LastName": "Bates",
            "UserName": "johnb@kentel.com",
            "Address": {
                "AddressLine1": "1432 Merry View Road",
                "AddressLine2": "",
                "City": "Big Windy",
                "StateCode": "ON",
                "CountryCode": "CA",
                "Zip": "A1A2B2"
            },
            "ClientUserId": "132",
            "Email": "johnb@kentel.com",
            "IsActive": true,
            "JobTitle": "Sales Clerk",
            "ParentEntityId": 1,
            "PhoneNumbers": [
                {
                    "Number": "6135550127",
                    "Extension": "5532",
                    "Type": "Work"
                }
            ],
            "Picture": {},
            "Version": 1
        }
    ]
}
```



 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[[user-manager](/api/user/#User)]) </li><ul><li><code>Id</code> (Integer) </li><li><code>FirstName</code> (String) </li><li><code>LastName</code> (String) </li><li><code>UserName</code> (String) - The name used to identify this User. Must be unique</li><li><code>Address</code> ([user-manager](/api/address/#Address)) </li><ul><li><code>AddressLine1</code> (String) </li><li><code>AddressLine2</code> (String) </li><li><code>City</code> (String) </li><li><code>StateCode</code> (String) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (String) </li><li><code>Zip</code> (String) </li></ul><li><code>ClientUserId</code> (String) </li><li><code>Email</code> (String) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>IsActive</code> (Boolean) </li><li><code>JobTitle</code> (String) </li><li><code>ParentEntityId</code> (Integer) </li><li><code>PhoneNumbers</code> (Array[[user-manager](/api/phonenumber/#PhoneNumber)]) </li><ul><li><code>Number</code> (String) - Must be at least 7 characters</li><li><code>Extension</code> (String) - If provided, Number must also be provided</li><li><code>Type</code> (String) - Required if Number is provided. <strong>RQ Limitation:</strong> To import into RQ, value must be one of <strong>Home, Cell, Work</strong></li></ul><li><code>Picture</code> (Object) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Integer) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li><li><code>Attributes</code> (Object) </li><li><code>CorrelationId</code> (String) </li><li><code>Profiles</code> (Array) </li></ul></ul>



## Searching for Users

This request will only return Users where `IsActive` is set to `true`.


> Definition

```
GET /Entities({CompanyId})/Users/Search?terms={Terms}&$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse SearchingForUsers()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10");
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

public static CloseableHttpResponse SearchingForUsers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>Terms</code> (<strong>Required</strong>)  - List of terms, multiple terms are separated by an encoded whitespace (+). User properties must contain/start with the term to be returned. Search terms are not case sensitive.</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "_links": {
        "prev": "null",
        "self": "/v1/entities(14146)/users?$skip=0&$top=30",
        "next": "null"
    },
    "_metadata": {
        "count": 1,
        "skip": 0,
        "top": 30
    },
    "items": [
        {
            "Id": 2576,
            "FirstName": "John",
            "LastName": "Bates",
            "UserName": "johnb@kentel.com",
            "Address": {
                "AddressLine1": "1432 Merry View Road",
                "AddressLine2": "",
                "City": "Big Windy",
                "StateCode": "ON",
                "CountryCode": "CA",
                "Zip": "A1A2B2"
            },
            "ClientUserId": "132",
            "Email": "johnb@kentel.com",
            "IsActive": true,
            "JobTitle": "Sales Clerk",
            "ParentEntityId": 1,
            "PhoneNumbers": [
                {
                    "Number": "6135550127",
                    "Extension": "5532",
                    "Type": "Work"
                }
            ],
            "Picture": {},
            "Version": 1
        }
    ]
}
```



 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[[user-manager](/api/user/#User)]) </li><ul><li><code>Id</code> (Integer) </li><li><code>FirstName</code> (String) </li><li><code>LastName</code> (String) </li><li><code>UserName</code> (String) - The name used to identify this User. Must be unique</li><li><code>Address</code> ([user-manager](/api/address/#Address)) </li><ul><li><code>AddressLine1</code> (String) </li><li><code>AddressLine2</code> (String) </li><li><code>City</code> (String) </li><li><code>StateCode</code> (String) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (String) </li><li><code>Zip</code> (String) </li></ul><li><code>ClientUserId</code> (String) </li><li><code>Email</code> (String) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>IsActive</code> (Boolean) </li><li><code>JobTitle</code> (String) </li><li><code>ParentEntityId</code> (Integer) </li><li><code>PhoneNumbers</code> (Array[[user-manager](/api/phonenumber/#PhoneNumber)]) </li><ul><li><code>Number</code> (String) - Must be at least 7 characters</li><li><code>Extension</code> (String) - If provided, Number must also be provided</li><li><code>Type</code> (String) - Required if Number is provided. <strong>RQ Limitation:</strong> To import into RQ, value must be one of <strong>Home, Cell, Work</strong></li></ul><li><code>Picture</code> (Object) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Integer) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li><li><code>Attributes</code> (Object) </li><li><code>CorrelationId</code> (String) </li><li><code>Profiles</code> (Array) </li></ul></ul>



## Assigning a User to a Location

{{note}}
Users can be assigned to multiple locations
{{end}}


> Definition

```
PUT /Users({UserId})/Locations({LocationId})
```

> Example Request

```javascript
PUT /Users(2576)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

```csharp
static IRestResponse AssigningAUserToALocation()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

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

public static CloseableHttpResponse AssigningAUserToALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.put 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
    <li><code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 204 Content-Type: application/json
```






## Unassigning a User from a Location



> Definition

```
DELETE /Users({UserId})/Locations({LocationId})
```

> Example Request

```javascript
DELETE /Users(2576)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse UnassigningAUserFromALocation()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UnassigningAUserFromALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
    <li><code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 204 Content-Type: application/json
```






## <span class='get'>GET</span> Assigned Locations for a User



> Definition

```
GET /Users({UserId})/Locations
```

> Example Request

```javascript
GET /Users(2576)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAssignedLocationsForAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations");
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

public static CloseableHttpResponse GettingAssignedLocationsForAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "UserId": 2576,
    "LocationIDs": [
        14202
    ]
}
```



 <ul><li><code>UserId</code> (Integer) </li><li><code>LocationIDs</code> (Array) - Location Ids for <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Locations</a> assigned to the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li></ul>



## <span class='get'>GET</span> Users by ClientUserId



> Definition

```
GET /Entities({CompanyId})/Users?$filter=ClientUserId eq '{ClientUserId}'&$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingUsersByClientuserid()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10");
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

public static CloseableHttpResponse GettingUsersByClientuserid() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>ClientUserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a> in an external system</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 2576,
        "FirstName": "John",
        "LastName": "Bates",
        "UserName": "johnb@kentel.com",
        "Address": {
            "AddressLine1": "1432 Merry View Road",
            "AddressLine2": "",
            "City": "Big Windy",
            "StateCode": "ON",
            "CountryCode": "CA",
            "Zip": "A1A2B2"
        },
        "ClientUserId": "132",
        "Email": "johnb@kentel.com",
        "IsActive": true,
        "JobTitle": "Sales Clerk",
        "ParentEntityId": 1,
        "PhoneNumbers": [
            {
                "Number": "6135550127",
                "Extension": "5532",
                "Type": "Work"
            }
        ],
        "Picture": {},
        "Version": 1
    }
]
```



 Array[[user](#User)]



## Locking a User

<ul>
  <li>Users can be locked due to events such as exceeding the maximum failed login attempts</li>
  <li>Once locked, a User will not be able to log in or obtain an access token until they are unlocked</li>
  <li>To determine if a User is locked, see <a href="#getting-the-lock-status-of-a-user">Getting the Lock Status of a User</a></li>
  <li>To unlock a User, see <a href="#unlocking-a-user">Unlocking a User</a></li>
</ul>


> Definition

```
POST /Users({UserId})/Lock
```

> Example Request

```javascript
POST /Users(2576)/Lock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "LockReasonId": 14
}
'
```

```csharp
static IRestResponse LockingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"LockReasonId\":14}", ParameterType.RequestBody);

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

public static CloseableHttpResponse LockingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"LockReasonId\":14}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"LockReasonId\":14}

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



#### Request Parameters

<ul><li><code>LockReasonId</code> (Optional) - Identifier for a <a href='http://developers.iqmetrix.com/api/user-manager/#lockreason'>LockReason</a></li></ul>

### Response Parameters



> Example Response

```json
HTTP 204 Content-Type: application/json
```






## <span class='get'>GET</span> the Lock Status of a User

This request will return `true` if the User is currently Locked, and `false` if the User is unlocked. 


> Definition

```
GET /Users({UserId})/Unlock
```

> Example Request

```javascript
GET /Users(2576)/Unlock
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingTheLockStatusOfAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
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

public static CloseableHttpResponse GettingTheLockStatusOfAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "CanUnlockUser": true,
    "LockReasonId": 14
}
```



 <ul><li><code>CanUnlockUser</code> (Boolean) </li><li><code>LockReasonId</code> (Integer) - Identifier for a <a href='http://developers.iqmetrix.com/api/user-manager/#lockreason'>LockReason</a></li></ul>



## Unlocking a User

<ul>
  <li>A User can be unlocked if their account is locked and their parent Entity is not using third-party authentication</li>
  <li>Once a User is unlocked, they will be allowed to log into the system with their old credentials, as well as obtain an access token</li>
  <li>To determine if a User is locked, see <a href="#getting-the-lock-status-of-a-user">Getting the Lock Status of a User</a></li>
  <li>To lock a User, see <a href="#locking-a-user">Locking a User</a></li>
</ul>


> Definition

```
POST /Users({UserId})/Unlock
```

> Example Request

```javascript
POST /Users(2576)/Unlock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

```csharp
static IRestResponse UnlockingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

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

public static CloseableHttpResponse UnlockingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 204 Content-Type: application/json
```






## Enabling a User



> Definition

```
POST /Users({UserId})/Enable
```

> Example Request

```javascript
POST /Users(2576)/Enable
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

```csharp
static IRestResponse EnablingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

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

public static CloseableHttpResponse EnablingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}
```



 [user](#User)



## Setting a Temporary Password

This request will set a User's password to the provided value and mark it as temporary, forcing the User to change it on first login. 
{{important}}The temporary password must be a <strong>non-empty</strong> string and <strong>at least 6 characters long</strong>{{end}}


> Definition

```
POST /Users({UserId})/TemporaryPassword
```

> Example Request

```javascript
POST /Users(2576)/TemporaryPassword
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Password": "newpa55word"
}'
```

```csharp
static IRestResponse SettingATemporaryPassword()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Password\":\"newpa55word\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse SettingATemporaryPassword() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Password\":\"newpa55word\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Password\":\"newpa55word\"}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



#### Request Parameters

<ul><li><code>Password</code> (<strong>Required</strong>) </li></ul>

### Response Parameters



> Example Response

```json
HTTP 204 Content-Type: application/json
```






## <span class='get'>GET</span> all Lock Reasons



> Definition

```
GET /Entities({CompanyId})/lockReasons
```

> Example Request

```javascript
GET /Entities(14146)/lockReasons
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllLockReasons()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons");
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

public static CloseableHttpResponse GettingAllLockReasons() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 14,
        "Name": "PaperworkNotDone",
        "Description": "Your account has been locked because the paperwork hasn't been done. Please contact your supervisor."
    }
]
```



 Array[[lockreason](#LockReason)]



## <span class='post'>POST</span> a Lock Reason



> Definition

```
POST /Entities({CompanyId})/lockReasons
```

> Example Request

```javascript
POST /Entities(14146)/lockReasons
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "PaperworkNotDone",
    "Description": "Your account has been locked because the paperwork hasn't been done. Please contact your supervisor."
}'
```

```csharp
static IRestResponse CreatingALockReason()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"PaperworkNotDone\",\"Description\":\"Your account has been locked because the paperwork hasn't been done. Please contact your supervisor.\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingALockReason() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"PaperworkNotDone\",\"Description\":\"Your account has been locked because the paperwork hasn't been done. Please contact your supervisor.\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Name\":\"PaperworkNotDone\",\"Description\":\"Your account has been locked because the paperwork hasn't been done. Please contact your supervisor.\"}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
</ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) - Must be unique within the organization</li><li><code>Description</code> (<strong>Required</strong>) - Human readable description</li></ul>

### Response Parameters



> Example Response

```json
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": 14,
    "Name": "PaperworkNotDone",
    "Description": "Your account has been locked because the paperwork hasn't been done. Please contact your supervisor."
}
```



 [lockreason](#LockReason)



## <span class='get'>GET</span> a Lock Reason



> Definition

```
GET /Entities({CompanyId})/lockReasons({LockReasonId})
```

> Example Request

```javascript
GET /Entities(14146)/lockReasons(1)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingALockReason()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)");
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

public static CloseableHttpResponse GettingALockReason() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LockReasonId</code> (<strong>Required</strong>)  - Identifier of a <a href='http://developers.iqmetrix.com/api/user-manager/#lockreason'>LockReason</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 14,
    "Name": "PaperworkNotDone",
    "Description": "Your account has been locked because the paperwork hasn't been done. Please contact your supervisor."
}
```



 [lockreason](#LockReason)



## <span class='put'>PUT</span> a Lock Reason



> Definition

```
PUT /Entities({CompanyId})/lockReasons({LockReasonId})
```

> Example Request

```javascript
PUT /Entities(14146)/lockReasons(1)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 14,
    "Name": "PaperworkNotDone",
    "Description": "Your account has been locked because the paperwork hasn't been done. Please contact your supervisor."
}'
```

```csharp
static IRestResponse UpdatingALockReason()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":14,\"Name\":\"PaperworkNotDone\",\"Description\":\"Your account has been locked because the paperwork hasn't been done. Please contact your supervisor.\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingALockReason() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":14,\"Name\":\"PaperworkNotDone\",\"Description\":\"Your account has been locked because the paperwork hasn't been done. Please contact your supervisor.\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":14,\"Name\":\"PaperworkNotDone\",\"Description\":\"Your account has been locked because the paperwork hasn't been done. Please contact your supervisor.\"}";

response = RestClient.put 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LockReasonId</code> (<strong>Required</strong>)  - Identifier of a <a href='http://developers.iqmetrix.com/api/user-manager/#lockreason'>LockReason</a></li>
</ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) - Must be unique within the organization</li><li><code>Description</code> (<strong>Required</strong>) - Human readable description</li></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 14,
    "Name": "PaperworkNotDone",
    "Description": "Your account has been locked because the paperwork hasn't been done. Please contact your supervisor."
}
```



 [lockreason](#LockReason)



## <span class='delete'>DELETE</span> a Lock Reason



> Definition

```
DELETE /Entities({CompanyId})/lockReasons({LockReasonId})
```

> Example Request

```javascript
DELETE /Entities(14146)/lockReasons(1)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DeletingALockReason()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)");
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

public static CloseableHttpResponse DeletingALockReason() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/lockReasons(1)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LockReasonId</code> (<strong>Required</strong>)  - Identifier of a <a href='http://developers.iqmetrix.com/api/user-manager/#lockreason'>LockReason</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```






# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `The temporary password must be at least 6 characters long` | Ensure the provided password is at least 6 characters long and not an empty string |
| `HTTP 400` | `Bad Request` | Ensure all of the required fields are provided and formatted accurately, for more details see error message |
| `HTTP 400` | `No search terms provided` | Ensure search terms are provided in URI |
| `HTTP 400` | `Query string parameter '$top'`<br/>`should be within 1 to 100 range but was {x}` | Ensure `$skip` is in the range [0-100] |
| `HTTP 400` | `Query string parameter '$skip'`<br/>`should be non-negative but was -1` | Ensure `$top` is non-negative |
| `HTTP 404` | `User not found` | Ensure UserId is valid |
| `HTTP 404` | `Entity not found` | Ensure LocationId is valid |
| `HTTP 409` | `Username and email already exist` | Ensure the email chosen does not already belong to a User. <br/> If the email address belongs to a disabled User, change the email for the disabled User before creating a new User with the original email |
| `HTTP 409` | `User version mismatch` | Ensure the Version value provided in the request data matches the Version for the User in the database |


# Pagination

The User Manager API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 30 if no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

```csharp
{
    "_links": {
        "prev": null,
        "self": "/v1/Entities(14146)/Users?$skip=0&$top=5",
        "next": "/v1/Entities(14146)/Users?$skip=5&$top=5"
    },
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    }
}
```
In the example above, the `_links` section is included in the data returned from an API call to <a href="#getting-all-users-for-a-company">Getting All Users for a Company</a>, where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.

