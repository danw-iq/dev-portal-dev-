---
title:  Customers
permalink: /api/crm/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The Customer Relationship Management (CRM) API gives you a full suite of options to create, modify, or delete customers and customer information, such as address and contact method.



# Endpoints


* Sandbox: <a href="https://crmdemo.iqmetrix.net/v1">https://crmdemo.iqmetrix.net/v1</a>
* Production: <a href="https://crm.iqmetrix.net/v1">https://crm.iqmetrix.net/v1</a>



# Resources


## Customer

A Customer is a person or organization that buys goods or services from a store or business.

```json
{
	"Id": "659c2a38-d083-4421-9330-46d779702f85",
	"PrimaryName": "Princess",
	"MiddleName": "Ella",
	"FamilyName": "Jasmine",
	"AlternateName": "Jas",
	"CustomerType": "Company",
	"CustomerTypeId": "3",
	"DateOfBirth": "1952-07-23T12:00:00.000",
	"Disabled": "true",
	"DoNotContact": "true",
	"Notes": "Interested in iPhone 6",
	"Title": "Ms",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| PrimaryName (`String`) | First name of a given person or the full name of the business, division, organization, etc | 
| MiddleName (`String`) | Middle name. Could also be referred to as Additional name | 
| FamilyName (`String`) | Family name. In the U.S., the last name of a Person | 
| AlternateName (`String`) | Alias or preferred name | 
| CustomerType (`String`) | Name of the [CustomerType](#customertype) | 
| CustomerTypeId (`Integer`) | See [CustomerType](#customertype) for a list of acceptable values | 
| DateOfBirth (`DateTime`) | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | 
| Disabled (`Boolean`) | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | 
| DoNotContact (`Boolean`) | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | 
| Notes (`String`) | Any notes related to this Customer | 
| Title (`String`) | Title | 
| Version (`Integer`) | Latest revision number | 

## Address

An Address represents a valid address somewhere on the planet.

```json
{
	"Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
	"CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
	"AddressType": "Home",
	"AddressTypeId": "2",
	"AttentionTo": "Princess",
	"Country": "Canada",
	"CountryCode": "CA",
	"Default": "false",
	"DoNotContact": "true",
	"Email": "Jas@princess.ca",
	"Locality": "Mountain View",
	"Notes": "Moved as of April 15 2015",
	"Phone": "(555) 555-5555",
	"PostalCode": "94043",
	"PostOfficeBoxNumber": "P.O. Box 1022",
	"State": "Alberta",
	"StateCode": "AB",
	"StreetAddress1": "1600 Amphitheatre Pkwy",
	"StreetAddress2": "Suite 500",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| CustomerId (`GUID`) | Unique identifier for the [Customer](#customer) | 
| AddressType (`String`) | Name of the [AddressType](#addresstype) | 
| AddressTypeId (`Integer`) | See [AddressType](#addresstype) for a list of acceptable values | 
| AttentionTo (`String`) | Attention To (Attn:) | 
| Country (`String`) | The Country. This value is system-generated and read-only | 
| CountryCode (`String`) | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | 
| Default (`Boolean`) | A flag to indicate if this address is the default address for the customer | 
| DoNotContact (`Boolean`) | A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true | 
| Email (`String`) | Email | 
| Locality (`String`) | City, Town, Hamlet | 
| Notes (`String`) | Notes related to this Address | 
| Phone (`String`) | Phone number | 
| PostalCode (`String`) | The postal code/zip code | 
| PostOfficeBoxNumber (`String`) | The post office box number for PO box addresses | 
| State (`String`) | The State/Province | 
| StateCode (`String`) | Code for the State in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | 
| StreetAddress1 (`String`) | The street address | 
| StreetAddress2 (`String`) | The street address | 
| Version (`Integer`) | Latest revision number | 

## ContactMethod

A Contact Method is a method of contacting a Customer.

```json
{
	"Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
	"CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
	"ContactMethodCategory": "Email",
	"ContactMethodCategoryId": "3",
	"ContactMethodType": "Work phone",
	"ContactMethodTypeId": "5",
	"Default": "true",
	"DoNotContact": "true",
	"Notes": "After 6pm",
	"Value": "(306) 222-3333",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| CustomerId (`GUID`) | Unique identifier for the [Customer](#customer) | 
| ContactMethodCategory (`String`) | Name of the [ContactMethodCategory](#contactmethodcategory) | 
| ContactMethodCategoryId (`Integer`) | See [ContactMethodCategory](#contactmethodcategory) for a list of acceptable values | 
| ContactMethodType (`String`) | Name of the [ContactMethodType](#contactmethodtype) | 
| ContactMethodTypeId (`Integer`) | See [ContactMethodType](#contactmethodtype) for a list of acceptable values | 
| Default (`Boolean`) | A flag to indicate if this is the default ContactMethod for the Customer | 
| DoNotContact (`Boolean`) | A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true | 
| Notes (`String`) | Notes related to this ContactMethod | 
| Value (`String`) | The value representing this ContactMethod | 
| Version (`Integer`) | Latest revision number | 

## CustomerExtension

A CustomerExtension resource is used for adding custom properties to a Customer.

```json
{
	"Id": "74b87ece-5f70-454d-9991-7952127146b0",
	"CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
	"ExtensionType": "ExternalCustomerId",
	"ExtensionTypeId": "2",
	"Value": "66432",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| CustomerId (`GUID`) | Unique identifier for the [Customer](#customer) | 
| ExtensionType (`String`) | Name of the <a href='#customerextensiontype'>CustomerExtensionType</a> | 
| ExtensionTypeId (`Integer`) | Identifier for the <a href='#customerextensiontype'>CustomerExtensionType</a> | 
| Value (`String`) | Value | 
| Version (`Integer`) | Latest revision number | 

## CustomerExtensionType

CustomerExtensionType resources are created by iQmetrix and are used to provide custom properties for the CustomerExtension resource.

```json
{
	"Id": "1",
	"Name": "CorrelationId",
	"Data Type": "Integer"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Name | 
| Data Type (`String`) | Data type | 

## CustomerFull

CustomerFull is an extension on the Customer resource.

```json
{
	"Id": "659c2a38-d083-4421-9330-46d779702f85",
	"PrimaryName": "Princess",
	"MiddleName": "Ella",
	"FamilyName": "Jasmine",
	"Addresses": "undefined",
	"AlternateName": "Jas",
	"ContactMethods": "undefined",
	"CustomerExtensions": "undefined",
	"CustomerType": "Company",
	"CustomerTypeId": "3",
	"DateOfBirth": "1952-07-23T12:00:00.000",
	"Disabled": "true",
	"DoNotContact": "true",
	"MemberOf": "",
	"Notes": "Interested in iPhone 6",
	"RelatedCustomers": "",
	"Title": "Ms",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| PrimaryName (`String`) | First name of a given person or the full name of the business, division, organization, etc | 
| MiddleName (`String`) | Middle name. Could also be referred to as Additional name | 
| FamilyName (`String`) | Family name. In the U.S., the last name of a Person | 
| Addresses (`Array[[crm](/api/address/#Address)]`) | A collection of Addresses | 
| AlternateName (`String`) | Alias or preferred name | 
| ContactMethods (`Array[[crm](/api/contactmethod/#ContactMethod)]`) | A collection of ContactMethods | 
| CustomerExtensions (`Array[[crm](/api/customerextension/#CustomerExtension)]`) | A collection of CustomerExtensions | 
| CustomerType (`String`) | Name of the [CustomerType](#customertype) | 
| CustomerTypeId (`Integer`) | See [CustomerType](#customertype) for a list of acceptable values | 
| DateOfBirth (`DateTime`) | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | 
| Disabled (`Boolean`) | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | 
| DoNotContact (`Boolean`) | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | 
| MemberOf (`Array[object]`) | A collection of Customers that the Customer is a MemberOf (parent relation) | 
| Notes (`String`) | Any notes related to this Customer | 
| RelatedCustomers (`Array[object]`) | A collection of Customers related to the Customer (child relation) | 
| Title (`String`) | Title | 
| Version (`Integer`) | Latest revision number | 

## CustomerSearch

CustomerSearch is used to search for CustomerFull resources based on a Criteria. A CustomerSearch resource is an extension on the CustomerFull resource.

```json
{
	"Criteria": "bob",
	"Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
	"PrimaryName": "Robert",
	"MiddleName": "Lee",
	"FamilyName": "Smith",
	"Addresses": "undefined",
	"AlternateName": "Bob",
	"ContactMethods": "undefined",
	"CustomerExtensions": "undefined",
	"CustomerType": "Company",
	"CustomerTypeId": "3",
	"DateOfBirth": "1952-07-23T12:00:00.000",
	"Disabled": "true",
	"DoNotContact": "true",
	"MemberOf": "",
	"Notes": "Interested in iPhone 6",
	"RelatedCustomers": "",
	"Title": "Mr",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Criteria (`String`) | The criteria used to seach for the Customer | 
| Id (`GUID`) | Unique identifier | 
| PrimaryName (`String`) | First name of a given person or the full name of the business, division, organization, etc | 
| MiddleName (`String`) | Middle name. Could also be referred to as Additional name | 
| FamilyName (`String`) | Family name. In the U.S., the last name of a Person | 
| Addresses (`Array[[crm](/api/address/#Address)]`) | A collection of Addresses | 
| AlternateName (`String`) | Alias or preferred name | 
| ContactMethods (`Array[[crm](/api/contactmethod/#ContactMethod)]`) | A collection of ContactMethods | 
| CustomerExtensions (`Array[[crm](/api/customerextension/#CustomerExtension)]`) | A collection of CustomerExtensions | 
| CustomerType (`String`) | Name of the [CustomerType](#customertype) | 
| CustomerTypeId (`Integer`) | See [CustomerType](#customertype) for a list of acceptable values | 
| DateOfBirth (`DateTime`) | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | 
| Disabled (`Boolean`) | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | 
| DoNotContact (`Boolean`) | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | 
| MemberOf (`Array[object]`) | A collection of Customers that the Customer is a MemberOf (parent relation) | 
| Notes (`String`) | Any notes related to this Customer | 
| RelatedCustomers (`Array[object]`) | A collection of Customers related to the Customer (child relation) | 
| Title (`String`) | Title | 
| Version (`Integer`) | Latest revision number | 



## Enumerations
 
### AddressType
 
| Id | Name | Description |
|:---|:-----|:------------|
| 1 | None | Customer did not provide an Address |
| 2 | Home | Customer's Home Address |
| 3 | Shipping | Address to be Shipped to |
| 4 | Office | Customer's Work (Office) Address |
| 5 | Other | Other |

### ContactMethodCategory
 
| Id | Name |
|:---|:-----|
| 1 | Phone |
| 2 | Email |
| 3 | Other |

### ContactMethodType
 
| Category | Contact Method | Id |
|:---------|:---------------|:---|
| Dropship | Facebook | 15 |
| Dropship | LinkedIn | 16 |
| Dropship | Other | 17 |
| Dropship | Skype | 13 |
| Dropship | Twitter | 14 |
| Dropship | Website | 12 |
| Email | Home | 9 |
| Email | Other | 11 |
| Email | Work | 10 |
| Phone | Company | 4 |
| Phone | Home | 1 |
| Phone | Home Fax | 6 |
| Phone | Mobile | 3 |
| Phone | Other | 8 |
| Phone | Pager | 5 |
| Phone | Work | 2 |
| Phone | Work Fax | 7 |
 
### CustomerType
 
| Id | Name |
|:---|:-----|
| 1 | None |
| 2 | Person |
| 3 | Company |


# Requests



## <span class='get'>GET</span> All Customers



> Definition

```
GET /Companies({CompanyId})/Customers?$skip={Skip}&top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/Customers?$skip=1&top=10
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$skip=1&top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse GettingAllCustomers()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$skip=1&top=10");
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

public static CloseableHttpResponse GettingAllCustomers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$skip=1&top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$skip=1&top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
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

```
HTTP 200 Content-Type: application/hal+json
```

```json
{
    "_links": {
        "prev": null,
        "self": {
            "href": "Companies(14146)/Customers?$skip=0&$top=1",
            "templated": false
        },
        "next": null
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
                        "templated": false
                    },
                    "iq:CustomerFull": {
                        "href": "Companies(14146)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
                        "templated": false
                    },
                    "iq:Address": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses",
                        "templated": false
                    },
                    "iq:ContactMethod": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods",
                        "templated": false
                    },
                    "iq:CustomerExtension": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/CustomerExtensions",
                        "templated": false
                    },
                    "iq:RelatedCustomer": {},
                    "iq:MemberOf": {}
                },
                "_embedded": {},
                "Id": "659c2a38-d083-4421-9330-46d779702f85",
                "PrimaryName": "Princess",
                "MiddleName": "Ella",
                "FamilyName": "Jasmine",
                "AlternateName": "Jas",
                "CustomerType": "Company",
                "CustomerTypeId": 3,
                "DateOfBirth": "1952-07-23T12:00:00.000",
                "Disabled": true,
                "DoNotContact": true,
                "Notes": "Interested in iPhone 6",
                "Title": "Ms",
                "Version": 1
            }
        ]
    }
}
```







## <span class='post'>POST</span> a Customer



> Definition

```
POST /Companies({CompanyId})/Customers
```

> Example Request

```javascript
POST /Companies(14146)/Customers
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms"
}'
```

```csharp
static IRestResponse CreatingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers', body, {
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

<ul><li><code>CustomerTypeId</code> (<strong>Required</strong>) </li><li><code>PrimaryName</code> (Optional) </li><li><code>MiddleName</code> (Optional) </li><li><code>FamilyName</code> (Optional) </li><li><code>AlternateName</code> (Optional) </li><li><code>DateOfBirth</code> (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)</li><li><code>Disabled</code> (Optional) - Defaults to false</li><li><code>DoNotContact</code> (Optional) - Defaults to true</li><li><code>Notes</code> (Optional) </li><li><code>Title</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}
```



 [customer](#Customer)



## <span class='get'>GET</span> a Customer



> Definition

```
GET /Companies({CompanyId})/Customers({CustomerId})
```

> Example Request

```javascript
GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
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

public static CloseableHttpResponse GettingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}
```



 [customer](#Customer)



## <span class='put'>PUT</span> a Customer



> Definition

```
PUT /Companies({CompanyId})/Customers({CustomerId})
```

> Example Request

```javascript
PUT /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}'
```

```csharp
static IRestResponse UpdatingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"659c2a38-d083-4421-9330-46d779702f85\",\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerType\":\"Company\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\",\"Version\":1}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"659c2a38-d083-4421-9330-46d779702f85\",\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerType\":\"Company\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\",\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":\"659c2a38-d083-4421-9330-46d779702f85\",\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerType\":\"Company\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\",\"Version\":1}";

response = RestClient.put 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
</ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>CustomerTypeId</code> (<strong>Required</strong>) </li><li><code>PrimaryName</code> (Optional) </li><li><code>MiddleName</code> (Optional) </li><li><code>FamilyName</code> (Optional) </li><li><code>AlternateName</code> (Optional) </li><li><code>DateOfBirth</code> (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)</li><li><code>Disabled</code> (Optional) - Defaults to false</li><li><code>DoNotContact</code> (Optional) - Defaults to true</li><li><code>Notes</code> (Optional) </li><li><code>Title</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}
```



 [customer](#Customer)



## <span class='delete'>DELETE</span> a Customer



> Definition

```
DELETE /Companies({CompanyId})/Customers({CustomerId})
```

> Example Request

```javascript
DELETE /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DeletingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
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

public static CloseableHttpResponse DeletingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```






## <span class='get'>GET</span> All Addresses for a Customer



> Definition

```
GET /Companies({CompanyId})/Customers({CustomerId})/Addresses?$skip={Skip}&top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses?$skip=1&top=10
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses?$skip=1&top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse GettingAllAddressesForACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses?$skip=1&top=10");
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

public static CloseableHttpResponse GettingAllAddressesForACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses?$skip=1&top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses?$skip=1&top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> being updated</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/hal+json
```

```json
{
    "_links": {
        "prev": null,
        "self": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd",
            "templated": false
        },
        "next": null
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd",
                        "templated": false
                    },
                    "iq:Customer": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
                        "templated": false
                    },
                    "iq:CustomerFull": {
                        "href": "Companies(14146)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "AddressType": "Home",
                "AddressTypeId": 2,
                "AttentionTo": "Princess",
                "Country": "Canada",
                "CountryCode": "CA",
                "Default": false,
                "DoNotContact": true,
                "Email": "Jas@princess.ca",
                "Locality": "Mountain View",
                "Notes": "Moved as of April 15 2015",
                "Phone": "(555) 555-5555",
                "PostalCode": "94043",
                "PostOfficeBoxNumber": "P.O. Box 1022",
                "State": "Alberta",
                "StateCode": "AB",
                "StreetAddress1": "1600 Amphitheatre Pkwy",
                "StreetAddress2": "Suite 500",
                "Version": 1
            }
        ]
    }
}
```







## <span class='post'>POST</span> a Customer Address



> Definition

```
POST /Companies({CompanyId})/Customers({CustomerId})/Addresses
```

> Example Request

```javascript
POST /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500"
}'
```

```csharp
static IRestResponse AddingACustomerAddress()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse AddingACustomerAddress() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> being updated</li>
</ul>



#### Request Parameters

<ul><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>AddressTypeId</code> (<strong>Required</strong>) - Required if Addresses is not null</li><li><code>CountryCode</code> (<strong>Required</strong>) - Required if StateCode is provided</li><li><code>StateCode</code> (<strong>Required</strong>) </li><li><code>AttentionTo</code> (Optional) </li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Phone</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}
```



 [address](#Address)



## <span class='get'>GET</span> a Customer Address



> Definition

```
GET /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
```

> Example Request

```javascript
GET /Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingACustomerAddress()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
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

public static CloseableHttpResponse GettingACustomerAddress() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company</li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
    <li><code>AddressId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#address'>Address</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}
```



 [address](#Address)



## <span class='put'>PUT</span> a Customer Address



> Definition

```
PUT /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
```

> Example Request

```javascript
PUT /Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}'
```

```csharp
static IRestResponse UpdatingACustomerAddress()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressType\":\"Home\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"Country\":\"Canada\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"State\":\"Alberta\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\",\"Version\":1}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingACustomerAddress() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressType\":\"Home\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"Country\":\"Canada\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"State\":\"Alberta\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\",\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressType\":\"Home\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"Country\":\"Canada\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"State\":\"Alberta\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\",\"Version\":1}";

response = RestClient.put 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company</li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
    <li><code>AddressId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#address'>Address</a></li>
</ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>AddressTypeId</code> (<strong>Required</strong>) - Required if Addresses is not null</li><li><code>CountryCode</code> (<strong>Required</strong>) - Required if StateCode is provided</li><li><code>StateCode</code> (<strong>Required</strong>) </li><li><code>AttentionTo</code> (Optional) </li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Phone</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}
```



 [address](#Address)



## <span class='delete'>DELETE</span> an Address from a Customer



> Definition

```
DELETE /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
```

> Example Request

```javascript
DELETE /Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse RemovingAnAddressFromACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
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

public static CloseableHttpResponse RemovingAnAddressFromACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company</li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
    <li><code>AddressId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#address'>Address</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```






## <span class='get'>GET</span> all Customer Extension Types



> Definition

```
GET /Companies({CompanyId})/CustomerExtensionTypes
```

> Example Request

```javascript
GET /Companies(14146)/CustomerExtensionTypes
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerExtensionTypes" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllCustomerExtensionTypes()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerExtensionTypes");
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

public static CloseableHttpResponse GettingAllCustomerExtensionTypes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerExtensionTypes");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerExtensionTypes', {
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

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 1,
        "Name": "CorrelationId",
        "Data Type": "Integer"
    }
]
```



 Array[[customerextensiontype](#CustomerExtensionType)]



## <span class='post'>POST</span> a Customer Extension



> Definition

```
POST /Companies({CompanyId})/Customers({CustomerId})/CustomerExtensions
```

> Example Request

```javascript
POST /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ExtensionTypeId": 2,
    "Value": "66432"
}'
```

```csharp
static IRestResponse CreatingACustomerExtension()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingACustomerExtension() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
</ul>



#### Request Parameters

<ul><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>ExtensionTypeId</code> (<strong>Required</strong>) - Identifier for a <a href='#customerextensiontype'>CustomerExtensionType</a>. See <a href='#getting-all-customer-extension-types'>Getting All Customer Extension Types</a></li><li><code>Value</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "74b87ece-5f70-454d-9991-7952127146b0",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ExtensionType": "ExternalCustomerId",
    "ExtensionTypeId": 2,
    "Value": "66432",
    "Version": 1
}
```



 [customerextension](#CustomerExtension)



## <span class='get'>GET</span> a Customer Extension



> Definition

```
GET /Companies({CompanyId})/Customers({CustomerId})/CustomerExtensions({CustomerExtensionId})
```

> Example Request

```javascript
GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingACustomerExtension()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)");
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

public static CloseableHttpResponse GettingACustomerExtension() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
    <li><code>CustomerExtensionId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customerextension'>CustomerExtension</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "74b87ece-5f70-454d-9991-7952127146b0",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ExtensionType": "ExternalCustomerId",
    "ExtensionTypeId": 2,
    "Value": "66432",
    "Version": 1
}
```



 [customerextension](#CustomerExtension)



## <span class='put'>PUT</span> a Customer Extension



> Definition

```
PUT /Companies({CompanyId})/Customers({CustomerId})/CustomerExtensions({CustomerExtensionId})
```

> Example Request

```javascript
PUT /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "74b87ece-5f70-454d-9991-7952127146b0",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ExtensionType": "ExternalCustomerId",
    "ExtensionTypeId": 2,
    "Value": "66432",
    "Version": 1
}'
```

```csharp
static IRestResponse UpdatingACustomerExtension()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"74b87ece-5f70-454d-9991-7952127146b0\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionType\":\"ExternalCustomerId\",\"ExtensionTypeId\":2,\"Value\":\"66432\",\"Version\":1}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingACustomerExtension() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"74b87ece-5f70-454d-9991-7952127146b0\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionType\":\"ExternalCustomerId\",\"ExtensionTypeId\":2,\"Value\":\"66432\",\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":\"74b87ece-5f70-454d-9991-7952127146b0\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionType\":\"ExternalCustomerId\",\"ExtensionTypeId\":2,\"Value\":\"66432\",\"Version\":1}";

response = RestClient.put 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
    <li><code>CustomerExtensionId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customerextension'>CustomerExtension</a></li>
</ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>ExtensionTypeId</code> (<strong>Required</strong>) - Identifier for a <a href='#customerextensiontype'>CustomerExtensionType</a>. See <a href='#getting-all-customer-extension-types'>Getting All Customer Extension Types</a></li><li><code>Value</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "74b87ece-5f70-454d-9991-7952127146b0",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ExtensionType": "ExternalCustomerId",
    "ExtensionTypeId": 2,
    "Value": "66432",
    "Version": 1
}
```



 [customerextension](#CustomerExtension)



## <span class='delete'>DELETE</span> a Customer Extension



> Definition

```
DELETE /Companies({CompanyId})/Customers({CustomerId})/CustomerExtensions({CustomerExtensionId})
```

> Example Request

```javascript
DELETE /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DeletingACustomerExtension()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)");
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

public static CloseableHttpResponse DeletingACustomerExtension() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/CustomerExtensions(1)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
    <li><code>CustomerExtensionId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customerextension'>CustomerExtension</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```






## <span class='post'>POST</span> a Full Customer



> Definition

```
POST /Companies({CompanyId})/CustomerFull
```

> Example Request

```javascript
POST /Companies(14146)/CustomerFull
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "Addresses": [
        {
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "AddressTypeId": 2,
            "AttentionTo": "Princess",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Jas@princess.ca",
            "Locality": "Mountain View",
            "Notes": "Moved as of April 15 2015",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        }
    ],
    "AlternateName": "Jas",
    "ContactMethods": [
        {
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ContactMethodCategoryId": 3,
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333"
        }
    ],
    "CustomerExtensions": [
        {
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ExtensionTypeId": 2,
            "Value": "66432"
        }
    ],
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Ms"
}'
```

```csharp
static IRestResponse CreatingAFullCustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"Addresses\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}],\"AlternateName\":\"Jas\",\"ContactMethods\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}],\"CustomerExtensions\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}],\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"MemberOf\":[],\"Notes\":\"Interested in iPhone 6\",\"RelatedCustomers\":[],\"Title\":\"Ms\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingAFullCustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"Addresses\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}],\"AlternateName\":\"Jas\",\"ContactMethods\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}],\"CustomerExtensions\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}],\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"MemberOf\":[],\"Notes\":\"Interested in iPhone 6\",\"RelatedCustomers\":[],\"Title\":\"Ms\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"Addresses\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}],\"AlternateName\":\"Jas\",\"ContactMethods\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}],\"CustomerExtensions\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}],\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"MemberOf\":[],\"Notes\":\"Interested in iPhone 6\",\"RelatedCustomers\":[],\"Title\":\"Ms\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull', body, {
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

<ul><li><code>CustomerTypeId</code> (<strong>Required</strong>) </li><li><code>PrimaryName</code> (Optional) </li><li><code>MiddleName</code> (Optional) </li><li><code>FamilyName</code> (Optional) </li><li><code>Addresses</code> (Optional) </li><ul><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>AddressTypeId</code> (<strong>Required</strong>) - Required if Addresses is not null</li><li><code>CountryCode</code> (<strong>Required</strong>) - Required if StateCode is provided</li><li><code>StateCode</code> (<strong>Required</strong>) </li><li><code>AttentionTo</code> (Optional) </li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Phone</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li></ul><li><code>AlternateName</code> (Optional) </li><li><code>ContactMethods</code> (Optional) </li><ul><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>ContactMethodCategoryId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>ContactMethodTypeId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul><li><code>CustomerExtensions</code> (Optional) </li><ul><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>ExtensionTypeId</code> (<strong>Required</strong>) - Identifier for a <a href='#customerextensiontype'>CustomerExtensionType</a>. See <a href='#getting-all-customer-extension-types'>Getting All Customer Extension Types</a></li><li><code>Value</code> (Optional) </li></ul><li><code>DateOfBirth</code> (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)</li><li><code>Disabled</code> (Optional) - Defaults to false</li><li><code>DoNotContact</code> (Optional) - Defaults to true</li><li><code>MemberOf</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>RelatedCustomers</code> (Optional) </li><li><code>Title</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "Addresses": [
        {
            "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "AddressType": "Home",
            "AddressTypeId": 2,
            "AttentionTo": "Princess",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Jas@princess.ca",
            "Locality": "Mountain View",
            "Notes": "Moved as of April 15 2015",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "Alberta",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Jas",
    "ContactMethods": [
        {
            "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "74b87ece-5f70-454d-9991-7952127146b0",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 2,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Ms",
    "Version": 1
}
```



 [customerfull](#CustomerFull)



## <span class='get'>GET</span> a Full Customer



> Definition

```
GET /Companies({CompanyId})/CustomerFull({CustomerId})
```

> Example Request

```javascript
GET /Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAFullCustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
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

public static CloseableHttpResponse GettingAFullCustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "Addresses": [
        {
            "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "AddressType": "Home",
            "AddressTypeId": 2,
            "AttentionTo": "Princess",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Jas@princess.ca",
            "Locality": "Mountain View",
            "Notes": "Moved as of April 15 2015",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "Alberta",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Jas",
    "ContactMethods": [
        {
            "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "74b87ece-5f70-454d-9991-7952127146b0",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 2,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Ms",
    "Version": 1
}
```



 [customerfull](#CustomerFull)



## <span class='delete'>DELETE</span> a Full Customer



> Definition

```
DELETE /Companies({CompanyId})/CustomerFull({CustomerId})
```

> Example Request

```javascript
DELETE /Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse DeletingAFullCustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
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

public static CloseableHttpResponse DeletingAFullCustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```






## <span class='get'>GET</span> All Contact Methods for a Customer



> Definition

```
GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods?$skip={Skip}&top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods?$skip=1&top=10
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods?$skip=1&top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse GettingAllContactMethodsForACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods?$skip=1&top=10");
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

public static CloseableHttpResponse GettingAllContactMethodsForACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods?$skip=1&top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods?$skip=1&top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> being updated</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/hal+json
```

```json
{
    "_links": {
        "prev": null,
        "self": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods(b25dd8b2-a24d-4107-8fbe-9c7b21e18137)",
            "templated": false
        },
        "next": null
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods(b25dd8b2-a24d-4107-8fbe-9c7b21e18137)",
                        "templated": false
                    },
                    "iq:Customer": {
                        "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
                        "templated": false
                    },
                    "iq:CustomerFull": {
                        "href": "Companies(14146)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "ContactMethodCategory": "Email",
                "ContactMethodCategoryId": 3,
                "ContactMethodType": "Work phone",
                "ContactMethodTypeId": 5,
                "Default": true,
                "DoNotContact": true,
                "Notes": "After 6pm",
                "Value": "(306) 222-3333",
                "Version": 1
            }
        ]
    }
}
```







## <span class='post'>POST</span> a Customer Contact Method



> Definition

```
POST /Companies({CompanyId})/Customers({CustomerId})/ContactMethods
```

> Example Request

```javascript
POST /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategoryId": 3,
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333"
}'
```

```csharp
static IRestResponse AddingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse AddingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> being updated</li>
</ul>



#### Request Parameters

<ul><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>ContactMethodCategoryId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>ContactMethodTypeId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}
```



 [contactmethod](#ContactMethod)



## <span class='get'>GET</span> a Customer Contact Method



> Definition

```
GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId})
```

> Example Request

```javascript
GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)");
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

public static CloseableHttpResponse GettingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> being updated</li>
    <li><code>ContactMethodId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#contactmethod'>ContactMethod</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}
```



 [contactmethod](#ContactMethod)



## <span class='put'>PUT</span> a Customer Contact Method



> Definition

```
PUT /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId})
```

> Example Request

```javascript
PUT /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}'
```

```csharp
static IRestResponse UpdatingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"b25dd8b2-a24d-4107-8fbe-9c7b21e18137\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategory\":\"Email\",\"ContactMethodCategoryId\":3,\"ContactMethodType\":\"Work phone\",\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\",\"Version\":1}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"b25dd8b2-a24d-4107-8fbe-9c7b21e18137\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategory\":\"Email\",\"ContactMethodCategoryId\":3,\"ContactMethodType\":\"Work phone\",\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\",\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":\"b25dd8b2-a24d-4107-8fbe-9c7b21e18137\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategory\":\"Email\",\"ContactMethodCategoryId\":3,\"ContactMethodType\":\"Work phone\",\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\",\"Version\":1}";

response = RestClient.put 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> being updated</li>
    <li><code>ContactMethodId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#contactmethod'>ContactMethod</a></li>
</ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>CustomerId</code> (<strong>Required</strong>) </li><li><code>ContactMethodCategoryId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>ContactMethodTypeId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}
```



 [contactmethod](#ContactMethod)



## <span class='delete'>DELETE</span> a Customer Contact Method



> Definition

```
DELETE /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId})
```

> Example Request

```javascript
DELETE /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)
Authorization: Bearer (Access Token)
```


```shell
curl -X DELETE "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)" -H "Authorization: Bearer (Access Token)"
```

```csharp
static IRestResponse RemovingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)");
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

public static CloseableHttpResponse RemovingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> being updated</li>
    <li><code>ContactMethodId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/crm/#contactmethod'>ContactMethod</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```






## Searching for Customers

{{note}}
This request returns Customer resources and is case <strong>sensitive</strong>. For a similar case <strong>insensitive</strong> search that returns CustomerFull resources, see <a href='#customer-search'>Customer Search</a> 
{{end}}


> Definition

```
GET /Companies({CompanyId})/Customers?$filter={FilterQuery}$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse SearchingForCustomers()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10");
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

public static CloseableHttpResponse SearchingForCustomers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>FilterQuery</code> (Optional)  - Filter on customers</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": "659c2a38-d083-4421-9330-46d779702f85",
        "PrimaryName": "Princess",
        "MiddleName": "Ella",
        "FamilyName": "Jasmine",
        "AlternateName": "Jas",
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Ms",
        "Version": 1
    }
]
```



 Array[[customer](#Customer)]



## Customer Search


{{note}}
This request returns CustomerFull resources and is case <strong>insensitive</strong>. For a similar case <strong>sensitive</strong> search that returns Customer resources, see <a href='#searching-for-customers'>Searching for Customers</a> 
{{end}}

<a href="#customersearch">CustomerSearch</a> resources use a special property, <code>criteria</code>.

Criteria searches all of the searchable properties for the given value and returns the resource if it is found.

This search is <strong>NOT</strong> case sensitive.

<h3> Filterable Properties</h3>

The Criteria filter will search the properties below for the given value.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Resource</th>
      <th style="text-align:left">Property</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td style="text-align:left"><a href="#contactmethod">ContactMethod</a></td>
      <td style="text-align:left">Value</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">PrimaryName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">MiddleName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">FamilyName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">AlternateName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customerextension">CustomerExtension</a></td>
      <td style="text-align:left">Value</td>
    </tr>
  </tbody>
</table>


> Definition

```
GET /Companies({CompanyId})/CustomerSearch?$filter={FilterQuery}
```

> Example Request

```javascript
GET /Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse CustomerSearch()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'");
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

public static CloseableHttpResponse CustomerSearch() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>FilterQuery</code> (Optional)  - The filter to apply, "Criteria" is required</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Criteria": "bob",
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "Addresses": [
            {
                "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "AddressType": "Home",
                "AddressTypeId": 2,
                "AttentionTo": "Princess",
                "Country": "Canada",
                "CountryCode": "CA",
                "Default": false,
                "DoNotContact": true,
                "Email": "Jas@princess.ca",
                "Locality": "Mountain View",
                "Notes": "Moved as of April 15 2015",
                "Phone": "(555) 555-5555",
                "PostalCode": "94043",
                "PostOfficeBoxNumber": "P.O. Box 1022",
                "State": "Alberta",
                "StateCode": "AB",
                "StreetAddress1": "1600 Amphitheatre Pkwy",
                "StreetAddress2": "Suite 500",
                "Version": 1
            }
        ],
        "AlternateName": "Bob",
        "ContactMethods": [
            {
                "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "ContactMethodCategory": "Email",
                "ContactMethodCategoryId": 3,
                "ContactMethodType": "Work phone",
                "ContactMethodTypeId": 5,
                "Default": true,
                "DoNotContact": true,
                "Notes": "After 6pm",
                "Value": "(306) 222-3333",
                "Version": 1
            }
        ],
        "CustomerExtensions": [
            {
                "Id": "74b87ece-5f70-454d-9991-7952127146b0",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "ExtensionType": "ExternalCustomerId",
                "ExtensionTypeId": 2,
                "Value": "66432",
                "Version": 1
            }
        ],
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "MemberOf": [],
        "Notes": "Interested in iPhone 6",
        "RelatedCustomers": [],
        "Title": "Mr",
        "Version": 1
    }
]
```



 Array[[customersearch](#CustomerSearch)]



# Searching

The Customers API supports searching of <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> and [CustomerSearch](#customersearch) resources through the use of filters.

The `$filter` query parameter is used for specifying filtering criteria.

The type of filters available depend on the Data Type of the property being filtered on.

## Available Filters

See the table below for available filters and the syntax of using each filter.

| Keyword | Filter Description | Data Type | Examples |
|:--------|:-------------------|:----------|:---------|
| `eq` | Property is equal to value | Integer, Boolean, String, Date | `ContactMethod eq 1` <br/> `DoNotContact eq true`  <br/> `Criteria eq 'Bob'` <br/> `DateOfBirth eq DateTime'1990-01-01'`|
| `gt` | Property is greater than value(s) | Integer, Date | `ContactMethod gt 1` <br/> `DateOfBirth gt DateTime'1990-01-01'` <br/> `Criteria gt DateTime'2015-01-01'`|
| `lt` | Property is less than value(s) | Integer, Date | `ContactMethod lt 3` <br/> `DateOfBirth lt DateTime'1990-01-01'` <br/> `Criteria lt DateTime'2015-01-01'`|
| `ge` | Property is greater than or equal to value(s) | Integer, Date |  `ContactMethod ge 1` <br/> `DateOfBirth ge DateTime'1990-01-01'` <br/> `Criteria ge DateTime'2015-01-01'`|
| `le`| Property is less than or equal to value(s) | Integer, Date |  `ContactMethod le 1` <br/> `DateOfBirth le DateTime'1990-01-01'` <br/> `Criteria le DateTime'2015-01-01'`|
| `substringof` | Property contains value | String | `substringof('bob', PrimaryName)` <br/> `substringof('bob', Criteria)` |

### Combining Filters

Filters can be combined using the keyword `and` as shown below.

###### Example

    PrimaryName eq 'John' and DateOfBirth gt DateTime'1990-01-01'

### Case Sensitivity

Filters on <a href='http://developers.iqmetrix.com/api/crm/#customer'>Customer</a> resources are **case sensitive**.

Filters on [CustomerSearch](#customersearch) resources are **NOT** case sensitive.

To filter without case sensitivity, you can apply 'tolower' to a resource property.

###### Example

    GET /Companies(14146)/Customers?$filter=substringof('bob', tolower(PrimaryName))


# Pagination

The Customers API supports pagination of collections for some resources.

Requests to resources that support pagination include the `Accept: application/hal+json` HTTP header under the Headers section.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items in the collection to skip, defaults to 0 if no value is provided.

`$top` denotes the number of items to take, defaults to 50 if no value is provided.

The maximum value of 100 will be used if the value provided is outside the acceptable range [0-100].

### Navigation Links

Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

```csharp
{
    "_links": {
        "self": {
          "href": "Companies(14146)/Customers?$skip=10&$top=10",
          "templated": false
        },
        "next": {
          "href": "Companies(14146)/Customers?$skip=20&$top=10",
          "templated": false
        },
        "prev": {
          "href": "Companies(14146)/Customers?$skip=0&$top=10",
          "templated": false
        }
    },
    "_embedded": {
        "self": [ ]
    }
}
```

In the example above, the `_links` section is included in the data returned from an API request to get Customers, where `$skip=10` and `$top=10`.

The `self`.`href` value is the encoded version of the API request that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.


# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Not Found` | Ensure the CustomerID is correct |        

