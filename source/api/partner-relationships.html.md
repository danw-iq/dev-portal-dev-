---
title:  Partner Relationships
permalink: /api/partner-relationships/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview


The Partner Relationships API allows a Partner to retrieve a list of Companies they have a relationship with.

A <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> to Partner Relationship is formed when a Company engages a Partner service.



# Endpoints


* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>



# Resources


## Relationship

```json
{
	"CompanyId": "14146",
	"CompanyName": "Kentel Corp",
	"CreatedUtc": "2015-01-14T11:22:50.568Z",
	"RelationshipId": "123"
}
```

| Name | Description |
|:-----|:------------|
| CompanyId (`Integer`) | Identifier for a Company | 
| CompanyName (`String`) | Company Name | 
| CreatedUtc (`DateTime`) | Date and time the Relationship was created, in UTC | 
| RelationshipId (`Integer`) | Unique Identifier | 





# Requests



## <span class='get'>GET</span> Company Relationships for a Partner

This request can be used by Partners to get a list of Companies they have established a Relationship with in the iQmetrix ecosystem.

> Definition

```
GET /Partners({PartnerId})/Relationships/Companies?$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Partners(36)/Relationships/Companies?$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Partners(36)/Relationships/Companies?$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingCompanyRelationshipsForAPartner()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Partners(36)/Relationships/Companies?$skip=1&$top=10");
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

public static CloseableHttpResponse GettingCompanyRelationshipsForAPartner() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Partners(36)/Relationships/Companies?$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Partners(36)/Relationships/Companies?$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>PartnerId</code> (<strong>Required</strong>)  - Identifier for the Partner</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip, defaults to 0</li>
    <li><code>Top</code> (Optional)  - Number of records to take, defaults to 20</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    },
    "_links": {
        "prev": "null",
        "self": "/v1/Partners(36)/Relationships/Companies?$skip=0&$top=10",
        "next": "null"
    },
    "items": [
        {
            "CompanyId": 14146,
            "CompanyName": "Kentel Corp",
            "CreatedUtc": "2015-01-14T11:22:50.568Z",
            "RelationshipId": 123
        }
    ]
}
```



 <ul><li><code>_metadata</code> (Object) </li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 20</li></ul><li><code>_links</code> (Object) </li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results. If the request was made without $top or $skip, these will be filled in with the values that were used.</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>items</code> (Array[[partner-relationships](/api/relationship/#Relationship)]) </li><ul><li><code>CompanyId</code> (Integer) </li><li><code>CompanyName</code> (String) </li><li><code>CreatedUtc</code> (Datetime) </li><li><code>RelationshipId</code> (Integer) </li></ul></ul>



# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Entity Not Found` | Ensure the PartnerId specified in the URI is valid |


# Pagination

The Partner Relationship API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 20 if no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "prev": null,
            "self": "/v1/Entities(1)/Partners(36)/Relationships/Companies?$skip=0&$top=5",
            "next": "/v1/Entities(1)/Partners(36)/Relationships/Companies?$skip=5&$top=5"
        },
        "_metadata": {
            "count": 15,
            "skip": 0,
            "top": 5
        }
    }

In the example above, the `_links` section is included in the data returned from an API call to <a href="#getting-company-relationships-for-a-partner">Getting Company Relationships for a Partner</a>, where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.

