---
title: Everything

language_tabs:
  - javascript: HTTP
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---

# GETTING STARTED

iQmetrix APIs are simple but powerful HTTP interfaces that are inspired by the REST architectural style. These are the same APIs that our internal development teams use to build products.

We are passionate about creating a great [developer experience](http://www.iqmetrix.com/our-company) for you so please don't hesitate to contact our <a href="mailto:{{site.support_email}}?subject=API Feedback">API Support Team</a> with any feedback related to API design, usability, or features that you are interested to see.

## Overview and Onboarding

As part of the onboarding process, you will receive an onboarding package from the iQmetrix API team. 

This package provides you with credentials required to access iQmetrix APIs. 

If you need an onboarding package, contact {{contact_support}}. 

## Authentication

iQmetrix APIs use [OAuth2](http://oauth.net/2/) for authentication, and all requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTPS).

When using our APIs, your account must be [authenticated](/api/authentication/) by including an {{AccessToken_Glossary}} in the header of all API requests. Requests made over plain HTTP or without authentication will fail.

To learn more about authentication, see [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token).

## Environments

iQmetrix APIs are provisioned into environments that let you start developing and testing integrated solutions quickly and easily.

### Production

The **production** environment allows you to use your integrated solutions once deployed.

### Sandbox

The **sandbox** environment allows you to develop and test integrated solutions or try out new features of iQmetrix APIs without compromising data in your production environment. 

API calls in the Sandbox environment are free of charge and will not affect your billing.

Sandbox environments will be provisioned with tenant-specific test data.

## Rate Limiting

Requests to the iQmetrix APIs are limited to help to manage server load, ensuring that high API request volumes do not impact overall performance. 

They also help to protect from deliberate or accidental denial of service as a result of APIs being flooded with requests.

If you run into the `429 Too Many Requests` error, please contact {{contact_support}}

### Rate Limit Policies

All rate limits are applied **per service**, not aggregated across all services. 

There are three rate limit policies that are applied to the APIs.

**Authenticated Limit**

The Authenticated Limit policy determines how many **Authenticated Requests** can be made during the Rate Limit Window.

Authenticated Requests are made to iQmetrix APIs that require authentication, and include an {{AccessToken_Glossary}} in the HTTP Header.

To determine the limit, make an Authenticated Request to an iQmetrix API, then check the `X-RateLimit-Limit` HTTP Header of the response. 

**Anonymous Limit**

The Anonymous Limit policy determines how many **Anonymous Requests** can be made during the Rate Limit Window.

Anonymous Requests are made to iQmetrix APIs that do not require authentication.

To determine the limit, make an Anonymous Request to an iQmetrix API, then check the `X-RateLimit-Limit` HTTP Header of the response. 

### Rate Limit Window

The Rate Limit Window policy determines when the current rate limit will be reset.

To determine the limit, make a request to an iQmetrix API, then check the `X-RateLimit-Reset` HTTP Header of the response. 

### HTTP Headers

All responses from the iQmetrix API's have the following headers, which provide information about how many requests are remaining.

| Header Name | Description |
|:------------|:------------|
| X-RateLimit-Limit | The maximum number of requests allowed in the current rate limit window |
| X-RateLimit-Remaining | The number of requests remaining in the current rate limit window | 
| X-RateLimit-Reset | The time when the rate limit window will reset in UTC |
| X-RateLimit-ResetSeconds | The number of seconds until the rate limit resets | 

### Checking a Rate Limit

To determine the **Authenticated** Rate Limit for an API, make an authenticated request to the API and check the HTTP headers in the response.

In the example below, a request is made to the [Customers](/api/crm/) API with a valid {{AccessToken_Glossary}} in the `Authorization` header.

##### Example Request

    GET https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    X-RateLimit-Limit: 1000
    X-RateLimit-Remaining: 999
    X-RateLimit-Reset: 2016-02-25T13:00:00.0000000Z
    X-RateLimit-ResetSeconds: 59
    {
        ...
    }

Looking at the HTTP headers in the response, we can determine:

* Our rate limit window ends in **59 seconds** or at precisely **2016-02-25T13:00:00.0000000Z** UTC
* In the next **59 seconds** we can make **999** more requests
* In **59 seconds**, or at **2016-02-25T13:00:00.0000000Z** UTC, the counter will reset and we will be able to make another **1000 requests**

### Exceeding Rate Limit

If the rate limit is exceeded, the response will be `429 Too Many Requests` and the service will not be able to make further requests until the quota resets.

###### Example

    HTTP/1.1 429 Too Many Requests
    Content-Type: text/plain
    X-RateLimit-Limit: 1000
    X-RateLimit-Remaining: 0
    X-RateLimit-Reset: 2015-04-16T17:46:00.0000000Z
    X-RateLimit-ResetSeconds: 59
      
    rate limit exceeded


## Supported Response Formats

Most iQmetrix APIs support the `json` and `hal+json` response formats depending on the type of request. Documentation for each individual API will explicitly state which response formats are supported.

When sending an API request, you can select the format to return by defining the value in the HTTP Accept header, using the syntax `Accept: {ResponseFormat}`.

#### Example

    Accept: application/json

## Testing and Debugging

iQmetrix uses <a href="https://www.getpostman.com/" target="_blank">Postman</a> when developing, testing, and debugging our APIs. Postman also gives you the ability to import and export collections to manage API requests and environment variables when debugging APIs.

To learn more about installing Postman and its various features, see <a href="https://www.getpostman.com/docs/" target="_blank">Postman Documentation</a>.

From an iQmetrix perspective, each **collection** represents a set of methods for an endpoint or guide. All collections use the Sandbox {{Environment}}.

The Postman collections that are available on our developer portal are organized by API or guide. The environment variable values (e.g. {CompanyId} ) would be provided from other sources, such as from your onboarding package.

The iQmetrix API collections below are in RAML format, instead of JSON. Postman supports RAML as a format for collections. For more information on importing RAML folders into Postman, see <a href="https://www.getpostman.com/docs/importing_folders" target="_blank">Postman - Importing Folders</a>.

<br />
**Table 1**: API Collections

| Topic | Endpoint | Collection |
|:------|:---------|:-----------|
| General | Catalog | [Catalog](/postman/catalog.raml) |
| General | Company Tree | [Company Tree](/postman/company-tree.raml) |
| General | Customers | [Customers](/postman/crm.raml) |
| Dropship | Cost Feed | [Cost Feed](/postman/cost-feed.raml) |
| Dropship | Product Feed | [Product Feed](/postman/product-feed.raml) |
| Dropship | Product Subscription | [Product Subscription](/postman/product-subscription.raml) |
| Dropship | Shipping Aggregator | [Shipping Aggregator](/postman/saccs.raml) |
| Dropship | Shipping Options | [Shipping Options](/postman/shipping-options.raml) |
| Dropship | Supplier Availability | [Supplier Availability](/postman/supplier-availability.raml) |
| Dropship | Supplier Orders | TBD |
| General | Entities | [Entities](/postman/entity-store.raml) |
| General | General Ledger | [General Ledger](/postman/general-ledger.raml) |
| General | Inventory Availability | [Inventory Availability](/postman/availability.raml) |
| General | Orders | [Orders](/postman/orders.raml) |
| Partners | Partner Reporting | [Partner Reporting](/postman/partner-reporting.raml) |
| Partners | Partner Relationships | [Partner Relationships](/postman/partner-relationships.raml) |
| General | Pricing | [Pricing](/postman/pricing.raml) |
| Product Library | Classification Tree | [Classification Tree](/postman/classification-tree.raml) |
| Product Library | Field Definitions | [Field Definitions](/postman/field-definitions.raml) |
| Product Library | Products | [Products](/postman/product-library.raml) |
| Product Library | Product Structure | [Product Structure](/postman/product-structure.raml) |
| General | Reference | [Reference](/postman/reference.raml) |
| RQ | Carrier Integration | [Carrier Integration](/postman/carrier-integration.raml) |
| RQ | CMI | [CMI](/postman/cmi.raml) |
| RQ | Commissions | [Commissions](/postman/commissions.raml) |
| RQ | Electronic Product Catalog (EPC) | [EPC](/postman/epc.raml) |
| RQ | Punch Clock | [Punch Clock](/postman/punch-clock.raml) |
| RQ | RQ Data Connect | [RQ Data Connect](/postman/rq-data-connect.raml) |
| RQ | RQ Data Connect Bridge | [RQ Data Connect Bridge](/postman/rq-data-connect-bridge.raml) |
| General | Security Roles | [Security Roles](/postman/security-roles.raml) |
| General | User Manager | [User Manager](/postman/user-manager.raml) |

**Table 2**: Guide Collections

| Endpoint | Collection |
|:---------|:-----------|
| Creating an In Store Order | [Collection](https://www.getpostman.com/collections/6ba6ff2041a2371aab72) |
| Dropship Test Order Guide | [Order Collection](/files/create-test-order.zip) |
| eCommerce Integration Guide | [Collection](https://www.getpostman.com/collections/56da645f71e8ce4121f0) |
| Endless Aisle Integration Guide | [Collection](https://www.getpostman.com/collections/1285b8fd9bfc44cc73ef)

## Versioning and Changelog

The API version is shown in the endpoint's URL (e.g. /v1). Newer API versions will be highlighted in their respective API reference documentation. 

Should there be a breaking change to an existing API, iQmetrix will trigger a release of a newer version and notify stakeholders. Please take note that not all API versions will be backward compatible.

# CONTENT MANAGEMENT

## Catalog



### Overview

Retailers can select products from the {{ProductLibrary_Concept}} to create a **Retailer Catalog**, a collection of products that can be sold.

#### Product Slug

A **slug** is a generated identifier for a Product within the Product Library, determined using its {{ProductStructure_Concept}} and the following formula:

```
M{ProductDocumentId}-V{VariationId}-E{EntityId}-R{Region}
```

* ProductDocumentId - Identifier for a {{ProductDocument}}
* VariationId - Identifier for a {{Variation}}
* EntityId - Identifier for a {{Company}} or {{Carrier}} associated with a Revision, as described in [Creating a Revision](/api/product-structure/#creating-a-revision)
* Region - Must contain 2 or 4 characters, either a Country Code, or Country Code plus a State Code, as described in [Creating a Revision](/api/product-structure/#creating-a-revision)

##### Example

    M1-V2-E3-RCABC

Using the slug in the example above, we can determine the following:

* The identifier for the {{ProductDocument}} for this Product is **1**
* This Revision was made from a Variation, as there is a **V** present
* The Company or Carrier that owns this Revision has an Id of `3`
* This Revision is specific to British Columbia (`BC`), Canada (`CA`)


### Endpoints


* Sandbox: <a href="https://catalogsdemo.iqmetrix.net/v1">https://catalogsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://catalogs.iqmetrix.net/v1">https://catalogs.iqmetrix.net/v1</a>




### Catalog Items


<h4 id='getting-all-catalog-items' class='clickable-header top-level-header'>Getting All Catalog Items</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-catalog-items" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-catalog-items" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-catalog-items" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-catalog-items" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-catalog-items" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-catalog-items" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-catalog-items"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-catalog-items">
<pre id="http-code-getting-all-catalog-items"><code class="language-http">GET /Companies(14146)/Catalog/Items
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-catalog-items">
<pre id="curl-code-getting-all-catalog-items"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-catalog-items">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-catalog-items"><code class="language-csharp">static IRestResponse GettingAllCatalogItems()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-catalog-items">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-catalog-items"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCatalogItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-catalog-items">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-catalog-items"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>IsArchived</code> (Boolean) </li><li><code>DateAddedUtc</code> (Datetime) </li><li><code>DateUpdatedUtc</code> (Datetime) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li><li><code>SourceIds</code> (Array) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CatalogSku": "21Z8F4AQ",
        "IsArchived": false,
        "DateAddedUtc": "2016-08-09T20:12:05.987",
        "DateUpdatedUtc": "2016-08-09T20:12:05.99",
        "RmsId": "1",
        "Slug": "M1248-V1"
    }
]</pre>

<h4 id='adding-a-catalog-item-from-product-library' class='clickable-header top-level-header'>Adding a Catalog Item from Product Library</h4>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Catalog/Items/
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Slug</code> (<strong>Required</strong>) - Unique identifier for a Product in Product Library</li><li><code>RmsId</code> (Optional) - Identifier for the CatalogItem in an external inventory system</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-a-catalog-item-from-product-library" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-adding-a-catalog-item-from-product-library" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-adding-a-catalog-item-from-product-library" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-a-catalog-item-from-product-library" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-a-catalog-item-from-product-library" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-adding-a-catalog-item-from-product-library" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-adding-a-catalog-item-from-product-library"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-a-catalog-item-from-product-library">
<pre id="http-code-adding-a-catalog-item-from-product-library"><code class="language-http">POST /Companies(14146)/Catalog/Items/
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Slug": "M1248-V1",
    "RmsId": "1"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-adding-a-catalog-item-from-product-library">
<pre id="curl-code-adding-a-catalog-item-from-product-library"><code class="language-http">curl -X POST "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Slug": "M1248-V1",
    "RmsId": "1"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-a-catalog-item-from-product-library">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-adding-a-catalog-item-from-product-library"><code class="language-csharp">static IRestResponse AddingACatalogItemFromProductLibrary()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Slug\":\"M1248-V1\",\"RmsId\":\"1\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-a-catalog-item-from-product-library">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-adding-a-catalog-item-from-product-library"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingACatalogItemFromProductLibrary() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Slug\":\"M1248-V1\",\"RmsId\":\"1\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-a-catalog-item-from-product-library">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-adding-a-catalog-item-from-product-library"><code class="language-ruby">require 'rest-client'

body = "{\"Slug\":\"M1248-V1\",\"RmsId\":\"1\"}";

response = RestClient.post 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>IsArchived</code> (Boolean) </li><li><code>DateAddedUtc</code> (Datetime) </li><li><code>DateUpdatedUtc</code> (Datetime) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li><li><code>SourceIds</code> (Array) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CatalogSku": "21Z8F4AQ",
    "IsArchived": false,
    "DateAddedUtc": "2016-08-09T20:12:05.987",
    "DateUpdatedUtc": "2016-08-09T20:12:05.99",
    "RmsId": "1",
    "Slug": "M1248-V1"
}
</pre>


### Extended Attributes

<h4 id='getting-extended-attributes-for-a-catalog-item' class='clickable-header top-level-header'>Getting Extended Attributes for a Catalog Item</h4>

Extended attributes are unvalidated extra properties that can be put on a CatalogItem. They consist of a unique string key and a string value with a max-length of 250 characters.


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/attributes
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-extended-attributes-for-a-catalog-item" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-extended-attributes-for-a-catalog-item" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-extended-attributes-for-a-catalog-item" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-extended-attributes-for-a-catalog-item" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-extended-attributes-for-a-catalog-item" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-extended-attributes-for-a-catalog-item" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-extended-attributes-for-a-catalog-item"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-extended-attributes-for-a-catalog-item">
<pre id="http-code-getting-extended-attributes-for-a-catalog-item"><code class="language-http">GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-extended-attributes-for-a-catalog-item">
<pre id="curl-code-getting-extended-attributes-for-a-catalog-item"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-extended-attributes-for-a-catalog-item">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-extended-attributes-for-a-catalog-item"><code class="language-csharp">static IRestResponse GettingExtendedAttributesForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-extended-attributes-for-a-catalog-item">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-extended-attributes-for-a-catalog-item"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingExtendedAttributesForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-extended-attributes-for-a-catalog-item">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-extended-attributes-for-a-catalog-item"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#attribute'>Attribute</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Name": "Country of Manufacture",
        "Value": "China"
    }
]</pre>

<h4 id='adding-or-updating-extended-attributes-for-a-catalog-item' class='clickable-header top-level-header'>Adding or Updating Extended Attributes for a Catalog Item</h4>

This request returns <strong>all</strong> Attributes for a Catalog Item, not just ones that were added or updated.

It is possible to upsert multiple attributes in a single call.

If an attribute with the given name already exists, it will be overwritten with the new value. Otherwise, it will be added to the CatalogItem.


<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Catalog/Items({CatalogItemId})/attributes
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (Optional) - Defaults to an empty string</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-or-updating-extended-attributes-for-a-catalog-item" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-adding-or-updating-extended-attributes-for-a-catalog-item" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-adding-or-updating-extended-attributes-for-a-catalog-item" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-or-updating-extended-attributes-for-a-catalog-item" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-or-updating-extended-attributes-for-a-catalog-item" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-adding-or-updating-extended-attributes-for-a-catalog-item" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-adding-or-updating-extended-attributes-for-a-catalog-item"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-or-updating-extended-attributes-for-a-catalog-item">
<pre id="http-code-adding-or-updating-extended-attributes-for-a-catalog-item"><code class="language-http">PUT /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">[
    {
        "Name": "Country of Manufacture",
        "Value": "China"
    }
]</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-adding-or-updating-extended-attributes-for-a-catalog-item">
<pre id="curl-code-adding-or-updating-extended-attributes-for-a-catalog-item"><code class="language-http">curl -X PUT "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '[
    {
        "Name": "Country of Manufacture",
        "Value": "China"
    }
]'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-or-updating-extended-attributes-for-a-catalog-item">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-adding-or-updating-extended-attributes-for-a-catalog-item"><code class="language-csharp">static IRestResponse AddingOrUpdatingExtendedAttributesForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "[{\"Name\":\"Country of Manufacture\",\"Value\":\"China\"}]", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-or-updating-extended-attributes-for-a-catalog-item">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-adding-or-updating-extended-attributes-for-a-catalog-item"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingOrUpdatingExtendedAttributesForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("[{\"Name\":\"Country of Manufacture\",\"Value\":\"China\"}]");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-or-updating-extended-attributes-for-a-catalog-item">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-adding-or-updating-extended-attributes-for-a-catalog-item"><code class="language-ruby">require 'rest-client'

body = "[{\"Name\":\"Country of Manufacture\",\"Value\":\"China\"}]";

response = RestClient.put 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#attribute'>Attribute</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Name": "Country of Manufacture",
        "Value": "China"
    }
]</pre>

<h4 id='removing-extended-attributes-from-a-catalog-item' class='clickable-header top-level-header'>Removing Extended Attributes from a Catalog Item</h4>

This request allows you to remove extended attributes from a Catalog Item. The request body is an array of strings, where each string is the name of an attribute to be removed.

Request is idempotent. Deleting an attribute that doesn't exist on a catalog item is a no-op. 


<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Catalog/Items({CatalogItemId})/attributes
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-removing-extended-attributes-from-a-catalog-item" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-removing-extended-attributes-from-a-catalog-item" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-removing-extended-attributes-from-a-catalog-item" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-removing-extended-attributes-from-a-catalog-item" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-removing-extended-attributes-from-a-catalog-item" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-removing-extended-attributes-from-a-catalog-item" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-removing-extended-attributes-from-a-catalog-item"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-removing-extended-attributes-from-a-catalog-item">
<pre id="http-code-removing-extended-attributes-from-a-catalog-item"><code class="language-http">DELETE /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">[
  "Cases Per Layer"
]
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-removing-extended-attributes-from-a-catalog-item">
<pre id="curl-code-removing-extended-attributes-from-a-catalog-item"><code class="language-http">curl -X DELETE "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '[
  "Cases Per Layer"
]
'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-removing-extended-attributes-from-a-catalog-item">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-removing-extended-attributes-from-a-catalog-item"><code class="language-csharp">static IRestResponse RemovingExtendedAttributesFromACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "[\"Cases Per Layer\"]", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-removing-extended-attributes-from-a-catalog-item">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-removing-extended-attributes-from-a-catalog-item"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RemovingExtendedAttributesFromACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("[\"Cases Per Layer\"]");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-removing-extended-attributes-from-a-catalog-item">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-removing-extended-attributes-from-a-catalog-item"><code class="language-ruby">require 'rest-client'

body = "[\"Cases Per Layer\"]

response = RestClient.delete 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>HTTP 204</pre>


### Products

<h4 id='getting-product-details' class='clickable-header top-level-header'>Getting Product Details</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/ProductDetails
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-product-details" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-product-details" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-product-details" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-product-details" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-product-details" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-product-details" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-product-details"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-product-details">
<pre id="http-code-getting-product-details"><code class="language-http">GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-product-details">
<pre id="curl-code-getting-product-details"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-product-details">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-product-details"><code class="language-csharp">static IRestResponse GettingProductDetails()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-product-details">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-product-details"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductDetails() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-product-details">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-product-details"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#product'>Product</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "M1248-V1",
    "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
    "Assets": [
        {
            "Id": "732130d2-b673-461c-812b-f2b614d6076e",
            "Name": "iqmetrix.jpg",
            "Uri": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
            "Type": "Image",
            "IsHidden": true
        }
    ],
    "CanonicalClassification": {
        "Id": 4,
        "Name": "Smartphones",
        "ParentCategories": [
            {
                "Id": 2,
                "Name": "Devices"
            }
        ],
        "TreeId": 1
    },
    "ColorDefinition": {
        "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "Name": "Black Sapphire",
        "ColorTagIds": [
            1
        ],
        "ColorTags": [
            {
                "Id": 1,
                "Name": "Black",
                "ColorCode": "#303232"
            }
        ],
        "Swatch": {
            "Type": "ColorCode",
            "AssetId": "null",
            "ColorCode": "#C0C8D0"
        }
    },
    "DateAddedUtc": "2016-08-09T20:12:05.987",
    "DateUpdatedUtc": "2016-08-09T20:12:05.99",
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "ExtendedAttributes": [
        {
            "Name": "Country of Manufacture",
            "Value": "China"
        }
    ],
    "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
    "HeroShotUri": "https://imagehost/images/44f60963-5515-44bc-9509-71aef6463580",
    "IsArchived": false,
    "IsLinkedToCuratedProduct": true,
    "IsSaleable": true,
    "LongDescription": "The world’s first dual-edge display was born from a need to create something new...",
    "Manufacturer": {
        "Id": 13149,
        "Name": "OtterBox"
    },
    "ManufacturerSkus": [
        {
            "Value": "JBLPULSEBLKAM",
            "Description": "",
            "Entity": {
                "Id": 14146,
                "Name": "Kentel Corp"
            }
        }
    ],
    "MasterProductId": 1248,
    "MSRP": {
        "Amount": 100,
        "CurrencyCode": "USD"
    },
    "Owner": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "Region": {
        "CountryCode": "CA",
        "CountryName": "Canada",
        "StateCode": "AB",
        "StateName": "British Columbia"
    },
    "ReleaseDate": "2011-10-14T12:00:00.000",
    "RmsId": "1",
    "ShortDescription": "Next is Now",
    "Specifications": [
        {
            "Name": "Color",
            "Fields": [
                {
                    "Id": 54,
                    "Name": "Height",
                    "DisplayName": "Height",
                    "StringId": "Height",
                    "Type": "Float",
                    "Unit": "inches",
                    "Value": "6.08"
                }
            ]
        }
    ],
    "UpcCodes": [
        {
            "Value": "874688002478/16W",
            "Description": "UPC",
            "Entity": 2
        }
    ],
    "VariationId": 1,
    "VariationInfo": [
        {
            "VariationId": 1,
            "Slug": "M1248-V1",
            "Fields": [
                {
                    "FieldId": 1,
                    "Name": "Product Name",
                    "Value": "true"
                }
            ]
        }
    ],
    "VendorSkus": [
        {
            "Value": "JBLPULSEBLKAM",
            "Description": "",
            "Entity": {
                "Id": 14146,
                "Name": "Kentel Corp"
            }
        }
    ],
    "Version": 1
}</pre>

<h4 id='getting-many-product-details-at-once' class='clickable-header top-level-header'>Getting Many Product Details At Once</h4>

This request returns a dictionary of CatalogItemIds and Product Details for the CatalogItem.

This request will return HTTP 400 if less than 1 or more than 500 product details are requested at one time.

If a requested CatalogItemId is not found, it will be omitted from the response.


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Catalog/Items/ProductDetails/Bulk
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemIds</code> (<strong>Required</strong>) - Array of {{CatalogItem}} identifiers</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-many-product-details-at-once" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-many-product-details-at-once" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-many-product-details-at-once" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-many-product-details-at-once" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-many-product-details-at-once" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-many-product-details-at-once" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-many-product-details-at-once"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-many-product-details-at-once">
<pre id="http-code-getting-many-product-details-at-once"><code class="language-http">POST /Companies(14146)/Catalog/Items/ProductDetails/Bulk
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
  "CatalogItemIds" : [
    "21ac987c-d55a-482a-9450-402976a71563",
    "402976a7-482a-d55a-1563-21ac987c9450"
  ]
}
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-many-product-details-at-once">
<pre id="curl-code-getting-many-product-details-at-once"><code class="language-http">curl -X POST "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "CatalogItemIds" : [
    "21ac987c-d55a-482a-9450-402976a71563",
    "402976a7-482a-d55a-1563-21ac987c9450"
  ]
}
'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-many-product-details-at-once">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-many-product-details-at-once"><code class="language-csharp">static IRestResponse GettingManyProductDetailsAtOnce()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CatalogItemIds\":[\"21ac987c-d55a-482a-9450-402976a71563\",\"402976a7-482a-d55a-1563-21ac987c9450\"]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-many-product-details-at-once">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-many-product-details-at-once"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingManyProductDetailsAtOnce() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CatalogItemIds\":[\"21ac987c-d55a-482a-9450-402976a71563\",\"402976a7-482a-d55a-1563-21ac987c9450\"]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-many-product-details-at-once">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-many-product-details-at-once"><code class="language-ruby">require 'rest-client'

body = "{\"CatalogItemIds\":[\"21ac987c-d55a-482a-9450-402976a71563\",\"402976a7-482a-d55a-1563-21ac987c9450\"]}

response = RestClient.post 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>CatalogItems</code> (Array) - JSON object/Dictionary</li><ul><li><code>{CatalogItemId}</code> (<a href='/api/catalog/#product'>Product</a>) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "CatalogItems": {
        "21ac987c-d55a-482a-9450-402976a71563": {
            "Id": "M3-V1",
            "Name": "iPhone 4S 16GB White",
            "Assets": [],
            "CanonicalClassification": {
                "TreeId": 1,
                "Id": 5,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Cellular & Accessories"
                    }
                ]
            },
            "ColorDefinition": {
                "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
                "Name": "Black Sapphire",
                "ColorTagIds": [
                    1
                ],
                "ColorTags": [
                    {
                        "Id": 1,
                        "Name": "Black",
                        "ColorCode": "#303232"
                    }
                ],
                "Swatch": {
                    "Type": "ColorCode",
                    "AssetId": "null",
                    "ColorCode": "#C0C8D0"
                }
            },     
            "DateAddedUtc": "2016-08-09T20:12:05.987",
            "DateUpdatedUtc": "2016-08-09T20:12:05.99"                                   
            "Entity": null,
            "ExtendedAttributes": [
                {
                  "Name": "Country of Manufacture", 
                  "Value": "Indonesia"
                }
            ]
            "HeroShotId": null,
            "HeroShotUri": null,
            "IsLinkedToCuratedProduct": true,
            "IsSaleable": true,
            "LongDescription": "The iPhone 4S is a gradual step over the iPhone 4 improving the internals, but keeping the look and feel.",
            "Manufacturer": {
                "Id": 8793,
                "Name": "Apple"
            },
            "ManufacturerSkus": [
                {
                    "Value": "IPM-247-BL-16W",
                    "Description": "",
                    "Entity": null
                }
            ],
            "MasterProductId": 3,                          
            "MSRP": {
                "Amount": 790,
                "CurrencyCode": "USD"
            },
            "Owner": null,
            "Region": null,
            "ReleaseDate": null,
            "ShortDescription": "Better than iPhone 3G",
            "Specifications": [
                {
                    "Name": "Color",
                    "Fields": [
                        {
                            "Id": 10,
                            "StringId": "Color",
                            "DisplayName": "Color",
                            "Name": "Color",
                            "Value": "White",
                            "Type": "TextSingleLine",
                            "Unit": null
                        }
                    ]
                }
            ],
            "UpcCodes": [
                {
                    "Value": "874688002478/16W",
                    "Description": "",
                    "Entity": null
                }
            ],
            "VariationId": 1,
            "VariationInfo": [
                {
                    "VariationId": 1,
                    "Slug": "M3-V1",
                    "Fields": [
                        {
                            "FieldId": 1,
                            "Name": "Product Name",
                            "Value": "iPhone 4S 16GB White"
                        }
                    ]
                }
            ],                          
            "VendorSkus": [
                {
                    "Value": "403405_16W",
                    "Description": "",
                    "Entity": null
                }
            ],
            "Version": 17
        },
        "402976a7-482a-d55a-1563-21ac987c9450" : {
            ...
        }
    }
}
</pre>

<h4 id='getting-compatible-products-for-a-catalog-item' class='clickable-header top-level-header'>Getting Compatible Products for a Catalog Item</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Compatible
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-compatible-products-for-a-catalog-item" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-compatible-products-for-a-catalog-item" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-compatible-products-for-a-catalog-item" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-compatible-products-for-a-catalog-item" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-compatible-products-for-a-catalog-item" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-compatible-products-for-a-catalog-item" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-compatible-products-for-a-catalog-item"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-compatible-products-for-a-catalog-item">
<pre id="http-code-getting-compatible-products-for-a-catalog-item"><code class="language-http">GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-compatible-products-for-a-catalog-item">
<pre id="curl-code-getting-compatible-products-for-a-catalog-item"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-compatible-products-for-a-catalog-item">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-compatible-products-for-a-catalog-item"><code class="language-csharp">static IRestResponse GettingCompatibleProductsForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-compatible-products-for-a-catalog-item">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-compatible-products-for-a-catalog-item"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCompatibleProductsForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-compatible-products-for-a-catalog-item">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-compatible-products-for-a-catalog-item"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>Items</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>HeroShotId</code> (Guid) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "JBL Pulse",
            "Slug": "M45",
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "F4VPWWTG",
            "HeroShotId": "8402481f-da22-4081-900b-dbcf9c27490d"
        }
    ]
}</pre>

<h4 id='getting-variations-for-a-catalog-item' class='clickable-header top-level-header'>Getting Variations for a Catalog Item</h4>

For more information about Variations, see <a href='/concepts/product-structure/#variations'>Variations</a>


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Variations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-variations-for-a-catalog-item" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-variations-for-a-catalog-item" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-variations-for-a-catalog-item" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-variations-for-a-catalog-item" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-variations-for-a-catalog-item" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-variations-for-a-catalog-item" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-variations-for-a-catalog-item"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-variations-for-a-catalog-item">
<pre id="http-code-getting-variations-for-a-catalog-item"><code class="language-http">GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-variations-for-a-catalog-item">
<pre id="curl-code-getting-variations-for-a-catalog-item"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-variations-for-a-catalog-item">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-variations-for-a-catalog-item"><code class="language-csharp">static IRestResponse GettingVariationsForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-variations-for-a-catalog-item">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-variations-for-a-catalog-item"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingVariationsForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-variations-for-a-catalog-item">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-variations-for-a-catalog-item"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>Items</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>Revisions</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li></ul></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "JBL Pulse",
            "Slug": "M45",
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Revisions": [
                {
                    "Name": "Galaxy S6 edge+ 32GB - Black Sapphir",
                    "Slug": "M1248-V1-E38",
                    "CatalogItemId": "c8f9cd4f-6889-4791-88ea-df2ada72e4ee"
                }
            ]
        }
    ]
}</pre>

<h4 id='getting-products-by-vendor-sku' class='clickable-header top-level-header'>Getting Products by Vendor SKU</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items/ByVendorSku?vendorsku={VendorSku}&vendorid={VendorId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>VendorSku</code> (<strong>Required</strong>)  - Vendor SKU to search for
    </li>
    
    <li>
        <code>VendorId</code> (Optional)  - Identifier for a {{Vendor}} to search for
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-products-by-vendor-sku" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-products-by-vendor-sku" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-products-by-vendor-sku" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-products-by-vendor-sku" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-products-by-vendor-sku" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-products-by-vendor-sku" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-products-by-vendor-sku"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-products-by-vendor-sku">
<pre id="http-code-getting-products-by-vendor-sku"><code class="language-http">GET /Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-products-by-vendor-sku">
<pre id="curl-code-getting-products-by-vendor-sku"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-products-by-vendor-sku">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-products-by-vendor-sku"><code class="language-csharp">static IRestResponse GettingProductsByVendorSku()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-products-by-vendor-sku">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-products-by-vendor-sku"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductsByVendorSku() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-products-by-vendor-sku">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-products-by-vendor-sku"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>Sku</code> (String) </li><li><code>VendorId</code> (Integer) </li><li><code>Items</code> (Array) </li><ul><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>IsArchived</code> (Boolean) </li><li><code>DateAddedUtc</code> (Datetime) </li><li><code>DateUpdatedUtc</code> (Datetime) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li><li><code>SourceIds</code> (Array) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Sku": "408853",
    "VendorId": 1217,
    "Items": [
        {
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "IsArchived": false,
            "DateAddedUtc": "2016-08-09T20:12:05.987",
            "DateUpdatedUtc": "2016-08-09T20:12:05.99",
            "RmsId": "1",
            "Slug": "M1248-V1"
        }
    ]
}</pre>

<h4 id='getting-products-by-category-or-classification' class='clickable-header top-level-header'>Getting Products by Category or Classification</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?CategoryOrClassificationId={CategoryOrClassificationId}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CategoryOrClassificationId</code> (Optional)  - Identifier for the {{Category}} or {{Classification}}
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-products-by-category-or-classification" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-products-by-category-or-classification" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-products-by-category-or-classification" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-products-by-category-or-classification" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-products-by-category-or-classification" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-products-by-category-or-classification" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-products-by-category-or-classification"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-products-by-category-or-classification">
<pre id="http-code-getting-products-by-category-or-classification"><code class="language-http">GET /Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-products-by-category-or-classification">
<pre id="curl-code-getting-products-by-category-or-classification"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-products-by-category-or-classification">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-products-by-category-or-classification"><code class="language-csharp">static IRestResponse GettingProductsByCategoryOrClassification()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-products-by-category-or-classification">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-products-by-category-or-classification"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductsByCategoryOrClassification() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-products-by-category-or-classification">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-products-by-category-or-classification"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "IsMasterProduct": false,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h4 id='getting-products-by-manufacturer' class='clickable-header top-level-header'>Getting Products by Manufacturer</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?ManufacturerIds={ManufacturerIds}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>ManufacturerIds</code> (Optional)  - Array of integers representing identifiers for {{Manufacturers}}
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-products-by-manufacturer" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-products-by-manufacturer" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-products-by-manufacturer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-products-by-manufacturer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-products-by-manufacturer" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-products-by-manufacturer" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-products-by-manufacturer"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-products-by-manufacturer">
<pre id="http-code-getting-products-by-manufacturer"><code class="language-http">GET /Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-products-by-manufacturer">
<pre id="curl-code-getting-products-by-manufacturer"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-products-by-manufacturer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-products-by-manufacturer"><code class="language-csharp">static IRestResponse GettingProductsByManufacturer()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-products-by-manufacturer">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-products-by-manufacturer"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductsByManufacturer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-products-by-manufacturer">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-products-by-manufacturer"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "IsMasterProduct": false,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h4 id='getting-products-by-supplier' class='clickable-header top-level-header'>Getting Products by Supplier</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>VendorIds</code> (Optional)  - List of comma seperated integers representing Supplier identifiers
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-products-by-supplier" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-products-by-supplier" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-products-by-supplier" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-products-by-supplier" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-products-by-supplier" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-products-by-supplier" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-products-by-supplier"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-products-by-supplier">
<pre id="http-code-getting-products-by-supplier"><code class="language-http">GET /Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-products-by-supplier">
<pre id="curl-code-getting-products-by-supplier"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-products-by-supplier">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-products-by-supplier"><code class="language-csharp">static IRestResponse GettingProductsBySupplier()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-products-by-supplier">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-products-by-supplier"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductsBySupplier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-products-by-supplier">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-products-by-supplier"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "IsMasterProduct": false,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h4 id='getting-products-available-for-shipping' class='clickable-header top-level-header'>Getting Products Available for Shipping</h4>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?IsDropshippable={IsDropShippable}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>IsDropShippable</code> (Optional)  - True to display products available for shipping, false to display products not available for shipping
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-products-available-for-shipping" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-products-available-for-shipping" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-products-available-for-shipping" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-products-available-for-shipping" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-products-available-for-shipping" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-products-available-for-shipping" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-products-available-for-shipping"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-products-available-for-shipping">
<pre id="http-code-getting-products-available-for-shipping"><code class="language-http">GET /Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-products-available-for-shipping">
<pre id="curl-code-getting-products-available-for-shipping"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-products-available-for-shipping">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-products-available-for-shipping"><code class="language-csharp">static IRestResponse GettingProductsAvailableForShipping()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-products-available-for-shipping">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-products-available-for-shipping"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductsAvailableForShipping() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-products-available-for-shipping">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-products-available-for-shipping"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "IsMasterProduct": false,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}
</pre>


### Resources


#### CatalogItem

Archived CatalogItem resources can still be updated and retrieved individually, but are excluded from search results

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CatalogItemId | GUID | Unique identifier | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| IsArchived | Boolean | A flag to indicate if this CatalogItem is Archived. When archived, this CatalogItem is excluded from search results | `false` |
| RmsId | String | Identifier for the CatalogItem in an external inventory system | `1` |
| Slug | String | Unique identifier for a [Product](#product) | `M1248-V1` |
| ExtendedAttributes | Array[<a href='/api/catalog/#attribute'>Attribute</a>] | Attributes |  |
| *SourceIds* | *GUID* | *Reserved for future use* | |


#### Attribute

Extended attributes are unvalidated extra properties that can be put on a CatalogItem.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String(250) | Attribute name | `Country of Manufacture` |
| Value | String(250) | Attribute value | `China` |


#### CatalogSearchResult

A CatalogSearchResult resource is used to return information about Product resources that match a given criteria, defined in the request.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Items | Array[object] | Products matching the search criteria |  |
| Items.Name | String | Name | `Galaxy S6 edge+ 32GB - Black Sapphire` |
| Items.CanonicalClassification | object | ClassificationTree details |  |
| Items.CanonicalClassification.Id | Integer | Identifier for the [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | `4` |
| Items.CanonicalClassification.Name | String | Name of the Classification/Category | `Smartphones` |
| Items.CanonicalClassification.ParentCategories | Array[object] | List of Parent Categories |  |
| Items.CanonicalClassification.ParentCategories.Id | Integer | Identifier | `2` |
| Items.CanonicalClassification.ParentCategories.Name | String | Name | `Devices` |
| Items.CatalogItemId | GUID | Unique identifier for the CatalogItem | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| Items.CatalogSku | String | SKU | `21Z8F4AQ` |
| Items.ClassificationTreeId | Integer | Identifier for the [ClassificationTree](/api/classification-tree/#classificationtree) | `1` |
| Items.ColorDefinition | object | Information about the color of the Product |  |
| Items.ColorDefinition.Id | GUID | Unique identifier | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| Items.ColorDefinition.Name | String | Name | `Black Sapphire` |
| Items.ColorDefinition.ColorTags | Array[object] | Color information |  |
| Items.ColorDefinition.ColorTags.Id | Integer | Identifier | `1` |
| Items.ColorDefinition.ColorTags.Name | String | Name | `Black` |
| Items.ColorDefinition.ColorTags.ColorCode | String | A valid Hex code representing this color | `#303232` |
| Items.ColorDefinition.Swatch | <a href='/api/catalog/#swatch'>Swatch</a> | An icon to display on a screen next to a color showing the actual color of the product. Can be provided as an image Asset or hex code |  |
| Items.CompanyId | Integer | Identifier for the Company | `14146` |
| Items.DateAddedUtc | DateTime | Date this Product was added to the catalog, in UTC | `2011-10-14T12:00:00.000` |
| Items.HeroShotId | GUID | [Hero Shot](/api/glossary/#hero-shot) identifier | `44f60963-5515-44bc-9509-71aef6463580` |
| Items.Identifiers | Array[<a href='/api/catalog/#identifier'>Identifier</a>] | Identifiers |  |
| Items.IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| Items.IsDropShippable | Boolean | A flag to indicate if this Product can be shipped | `true` |
| Items.IsMasterProduct | Boolean | A flag to indicate if this is a Master Product | `false` |
| Items.Manufacturer | object | [Manufacturer](/api/entity-store/#manufacturer) information for the Product |  |
| Items.Manufacturer.Id | Integer | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | `13149` |
| Items.Manufacturer.Name | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) | `OtterBox` |
| Items.Msrp | object | Manufacturer suggested retail price information for the Product |  |
| Items.Msrp.Amount | Decimal | Manufacturers suggested retail price | `100` |
| Items.Msrp.CurrencyCode | String | Currency. For a list of acceptable values, see <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> | `USD` |
| Items.ProductVersion | Integer | Latest revision number | `1` |
| Items.ShortDescription | String | Short Description | `Next is Now` |
| Items.Slug | String | URL friendly identifier for the Product | `M1248-V1` |
| Items.VariationId | Integer | Identifier for the [Variation](/concepts/product-structure/#Variations) this Product represents | `1` |
| Items.Vendors | Array[object] | Vendors for the Product |  |
| Items.Vendors.Id | Integer | Identifier for the [Supplier](/api/entity-store/#supplier) | `14107` |
| Items.Vendors.Name | String | Name of the [Supplier](/api/entity-store/#supplier) | `NOZAMA Inc.` |
| Facets | object | Summary of Manufacturer and Vendor information for the Items |  |
| Facets.ClassificationAndCategories | Array[object] | Count of Classification and Categories in results |  |
| Facets.ClassificationAndCategories.Count | Integer | Number of items in the response with the Classification or Category specified in Item | `1` |
| Facets.ClassificationAndCategories.Item | Integer | Identifier of a Classification or Category | `4` |
| Facets.Manufacturers | Array[<a href='/api/catalog/#manufacturer'>Manufacturer</a>] | Manufacturer information for the Items |  |
| Facets.Vendors | Array[<a href='/api/catalog/#manufacturer'>Manufacturer</a>] | Vendor information for the Items |  |
| MetaData | object | Data representing pagination details |  |
| MetaData.Page | Integer | Page of Items to be included in the resource | `1` |
| MetaData.PageSize | Integer | Number of Items included in the resource | `20` |
| MetaData.TotalResults | Integer | Number of Items matching the search criteria | `5` |














##### Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier | `M1248-V1` |
| Name | String | Name | `Galaxy S6 edge+ 32GB - Black Sapphire` |
| Assets | Array[<a href='/api/catalog/#asset'>Asset</a>] | Asset information |  |
| CanonicalClassification | <a href='/api/catalog/#canonicalclassification'>CanonicalClassification</a> | ClassificationTree details |  |
| ColorDefinition | <a href='/api/catalog/#colordefinition'>ColorDefinition</a> | Information about the color of the Product |  |
| DateAddedUtc | DateTime | Date this Product was added to the catalog, in UTC | `2016-08-09T20:12:05.987` |
| DateUpdatedUtc | DateTime | Date this Product was last updated, in UTC | `2016-08-09T20:12:05.99` |
| Entity | object | Entity information, used for Entity revisions |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| ExtendedAttributes | Array[<a href='/api/catalog/#attribute'>Attribute</a>] | Attributes |  |
| HeroShotId | GUID | [Hero Shot](/api/glossary/#hero-shot) identifier | `44f60963-5515-44bc-9509-71aef6463580` |
| HeroShotUri | String | URI to a Hero Shot Asset | `https://imagehost/images/44f60963-5515-44bc-9509-71aef6463580` |
| IsArchived | Boolean | A flag to indicate if this Product is archived | `false` |
| IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| IsSaleable | Boolean | A flag to indicate if this product can be sold | `true` |
| LongDescription | String | Long Description | `The world’s first dual-edge display was born from a need to create something new...` |
| Manufacturer | object | [Manufacturer](/api/entity-store/#manufacturer) information for the Product |  |
| Manufacturer.Id | Integer | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | `13149` |
| Manufacturer.Name | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) | `OtterBox` |
| ManufacturerSkus | Array[<a href='/api/catalog/#sku'>Sku</a>] | Manufacturer SKUs |  |
| MasterProductId | Integer | Identifier for the [Master Product](/api/product-structure/#masterproduct) | `1248` |
| MSRP | object | Manufacturers suggested retail price information |  |
| MSRP.Amount | Decimal | Manufacturers suggested retail price | `100` |
| MSRP.CurrencyCode | String | Currency. For a list of acceptable values, see <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> | `USD` |
| Owner | object | Owner information used to designate if this is a public product (null) or private (not-null) |  |
| Owner.Id | Integer | For private products, Identifier of the Company that owns this Product | `14146` |
| Owner.Name | String | For private products, Name of the Company that owns this Product | `Kentel Corp` |
| Region | <a href='/api/catalog/#region'>Region</a> | Region information, for Regional Carrier Revisions |  |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| RmsId | String |  | `1` |
| ShortDescription | String | Short Description | `Next is Now` |
| Specifications | Array[object] | Details such as color, dimension, etc |  |
| Specifications.Name | String | Name | `Color` |
| Specifications.Fields | <a href='/api/catalog/#field'>Field</a> | Group of ProductFields |  |
| UpcCodes | Array[object] | UPC codes |  |
| UpcCodes.Value | String | Name | `874688002478/16W` |
| UpcCodes.Description | String | Description | `UPC` |
| UpcCodes.Entity | Integer | Identifier of an Entity associated with this UPC code | `2` |
| VariationId | Integer | Identifier for the Variation | `1` |
| VariationInfo | Array[<a href='/api/catalog/#variationinformation'>VariationInformation</a>] | [Variation](/concepts/product-structure/#variations) information for the Product |  |
| VendorSkus | Array[<a href='/api/catalog/#sku'>Sku</a>] | Vendor SKUs |  |
| Version | Integer | Latest revision number | `1` |

#### CanonicalClassification

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier for the [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | `4` |
| Name | String | Name of the Classification/Category | `Smartphones` |
| ParentCategories | Array[object] | List of Parent Categories |  |
| ParentCategories.Id | Integer | Identifier | `2` |
| ParentCategories.Name | String | Name | `Devices` |
| TreeId | Integer | Identifier for the {{ClassificationTree}} | `1` |


#### ColorDefinition

A ColorDefinition allows you to define the available Colors for a Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| Name | String | Name | `Black Sapphire` |
| ColorTagIds | Array | List of [ColorTag](/api/product-structure/#colortag) Identifiers | `1` |
| ColorTags | Array[object] | Color information |  |
| ColorTags.Id | Integer | Identifier | `1` |
| ColorTags.Name | String | Name | `Black` |
| ColorTags.ColorCode | String | A valid Hex code representing this color | `#303232` |
| Swatch | <a href='/api/catalog/#swatch'>Swatch</a> | An icon to display on a screen next to a color showing the actual color of the product. Can be provided as an image Asset or hex code |  |



#### Swatch

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | Acceptable values are Asset, ColorCodes or Empty | `ColorCode` |
| AssetId | GUID | If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored | `null` |
| ColorCode | String | If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored | `#C0C8D0` |

#### Asset

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| Name | String | File name | `iqmetrix.jpg` |
| Uri | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Type | String | Type of asset | `Image` |
| IsHidden | Boolean | A flag to indicate that this Asset exists on the product but should not be seen on a UI | `true` |

#### Sku

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Value | String | Value | `JBLPULSEBLKAM` |
| Description | String | Description |  |
| Entity | object | Identifier for an Entity this SKU is associated with |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |

#### Region

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `CA` |
| CountryName | String | Country name | `Canada` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `AB` |
| StateName | String | State name | `British Columbia` |


#### VariationInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VariationId | Integer | Identifier for a Variation | `1` |
| Slug | String | Identifier for the Variation | `M1248-V1` |
| Fields | Array[object] | Fields which describe how the Variation differs from its parent |  |
| Fields.FieldId | Integer | Identifier for a [FieldDefinition](/api/field-definitions/#fielddefinition) | `1` |
| Fields.Name | String | Name | `Product Name` |
| Fields.Value | String | Value to be used for this Field | `true` |


#### Identifier


| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Sku | String | Sku | `EM-JE040-RA` |
| SkuType | String | A string to indicate the type of Entity this Identifier is for. Acceptable values are: ManufacturerSku, VendorSku or UPC | `ManufacturerSku` |
| Entity | object | Entity information for this Identifier |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| Description | String | Description | `Manufacturer SKU` |


### Search & Filter


<h4 id='searching-for-products' class='clickable-header top-level-header'>Searching For Products</h4>

{{note}}
SearchTerms specified in the URI are compared against the following Product fields: <code>Name</code>, <code>Manufacturer.Name</code>, <code>ManufacturerSkus</code>, <code>UpcCodes</code> and <code>VendorSkus</code> and may return *partial* results.
{{end}}    


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>SearchTerms</code> (Optional)  - Search terms
    </li>
    
    <li>
        <code>OrderBy</code> (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified
    </li>
    
    <li>
        <code>OrderDir</code> (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-searching-for-products" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-searching-for-products" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-searching-for-products" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-searching-for-products" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-searching-for-products" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-searching-for-products" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-searching-for-products"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-searching-for-products">
<pre id="http-code-searching-for-products"><code class="language-http">GET /Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-searching-for-products">
<pre id="curl-code-searching-for-products"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-searching-for-products">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-searching-for-products"><code class="language-csharp">static IRestResponse SearchingForProducts()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-searching-for-products">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-searching-for-products"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SearchingForProducts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-searching-for-products">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-searching-for-products"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "IsMasterProduct": false,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h4 id='combining-search-filters' class='clickable-header top-level-header'>Combining Search Filters</h4>

Search filters can be combined to narrow down results. The example below illustrates a search request using every possible filter.

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&ManufacturerIds={ManufacturerIds}&IsDropshippable={IsDropShippable}&CategoryOrClassificationId={CategoryOrClassificationId}&ClassificationTreeId={ClassificationTreeId}&SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&IsLinkedToCuratedProduct={IsLinkedToCuratedProduct}&ColorTagIds={ColorTagIds}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>VendorIds</code> (Optional)  - List of comma seperated integers representing identifiers for {{Vendors}}
    </li>
    
    <li>
        <code>ManufacturerIds</code> (Optional)  - Array of integers representing identifiers for {{Manufacturers}}
    </li>
    
    <li>
        <code>IsDropShippable</code> (Optional)  - True to display products available for shipping, false to display products not available for shipping
    </li>
    
    <li>
        <code>CategoryOrClassificationId</code> (Optional)  - Identifier for the {{Category}} or {{Classification}}
    </li>
    
    <li>
        <code>ClassificationTreeId</code> (Optional)  - Identifier for a {{ClassificationTree}} to search within. If CategoryOrClassificationId is provided, this value is ignored
    </li>
    
    <li>
        <code>SearchTerms</code> (Optional)  - Search terms
    </li>
    
    <li>
        <code>OrderBy</code> (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified
    </li>
    
    <li>
        <code>OrderDir</code> (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified
    </li>
    
    <li>
        <code>IsLinkedToCuratedProduct</code> (Optional)  - A flag to indicate if the search should be restricted to Private Products
    </li>
    
    <li>
        <code>ColorTagIds</code> (Optional)  - Array of integers representing identifiers for {{ColorTags}}
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-combining-search-filters" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-combining-search-filters" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-combining-search-filters" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-combining-search-filters" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-combining-search-filters" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-combining-search-filters" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-combining-search-filters"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-combining-search-filters">
<pre id="http-code-combining-search-filters"><code class="language-http">GET /Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-combining-search-filters">
<pre id="curl-code-combining-search-filters"><code class="language-http">curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-combining-search-filters">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-combining-search-filters"><code class="language-csharp">static IRestResponse CombiningSearchFilters()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-combining-search-filters">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-combining-search-filters"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CombiningSearchFilters() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-combining-search-filters">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-combining-search-filters"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "IsMasterProduct": false,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}
</pre>




### Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Cannot add product to catalog` | Ensure {{Slug_Glossary}} is valid |
| `HTTP 404` | `Catalog Item not found` | Ensure CatalogItem GUID is valid and the CatalogItem exists |


## Classification Tree



A **Classification Tree** is a hierarchical structure describing a taxonomy of {{Products}}. 

To learn more about Classification Trees, see {{ClassificationTree_Concept}}.


### Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>


<h3 id='getting-a-classification-tree' class='clickable-header top-level-header'>Getting a Classification Tree</h3>



<h4>Request</h4>

<pre>
GET /ClassificationTrees({ClassificationTreeId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ClassificationTreeId</code> (<strong>Required</strong>)  - Identifier for the {{ClassificationTree}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-classification-tree" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-classification-tree" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-classification-tree" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-classification-tree" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-classification-tree" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-classification-tree" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-classification-tree"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-classification-tree">
<pre id="http-code-getting-a-classification-tree"><code class="language-http">GET /ClassificationTrees(1)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-classification-tree">
<pre id="curl-code-getting-a-classification-tree"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-classification-tree">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-classification-tree"><code class="language-csharp">static IRestResponse GettingAClassificationTree()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-classification-tree">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-classification-tree"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAClassificationTree() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-classification-tree">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-classification-tree"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#classificationtree'>ClassificationTree</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1,
    "Name": "Cellular & Accessories",
    "Description": "Classification of products for wireless retail",
    "Categories": [
        {
            "Id": 2,
            "Name": "Devices",
            "Categories": [],
            "Classifications": [],
            "Order": 1
        }
    ],
    "Classifications": [
        {
            "Id": 4,
            "Name": "Smartphones",
            "Order": 1,
            "ProductTemplate": {
                "Id": 16,
                "Name": "Wireless Device"
            }
        }
    ],
    "Owner": {
        "Id": 1,
        "Name": "iQmetrix"
    },
    "Version": 41
}
</pre>


### Resources

#### Classification

Classifications are used to group Products together by similar features.
A Product can only have a single Classification.
For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of Smartphones.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `4` |
| Name | String | Name | `Smartphones` |
| Order | Integer | Sorting order | `1` |
| ProductTemplate | <a href='/api/classification-tree/#producttemplate'>ProductTemplate</a> |  |  |

#### ProductTemplate

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `16` |
| Name | String | Name | `Wireless Device` |

#### Category

A Category is a node in a Classification Tree that represents a logical grouping of related Classifications.
For example, 'iPhone' and 'Tablet' Classifications might both be children of a 'Device' Category.
There is a limit to 20 levels of depth for Categories.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `2` |
| Name | String | Name | `Devices` |
| Categories | Array[object] | Child Categories |  |
| Classifications | Array[object] | Child Classifications |  |
| Order | Integer | Sorting order | `1` |

#### ClassificationTree

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Name | String | Name | `Cellular & Accessories` |
| Description | String | Description | `Classification of products for wireless retail` |
| Categories | Array[<a href='/api/classification-tree/#category'>Category</a>] | Categories in the Tree |  |
| Classifications | Array[<a href='/api/classification-tree/#classification'>Classification</a>] | Classifications for the Tree |  |
| Owner | <a href='/api/classification-tree/#owner'>Owner</a> | Information about the [Company](/api/company-tree/#company) that owns this Tree |  |
| Version | Integer | Latest revision number | `41` |
| *IsCanonical* | *Boolean* | *Reserved for internal use* | |

#### Owner

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | [Company](/api/company-tree/#company) Identifier | `1` |
| Name | String | [Company](/api/company-tree/#company) Name | `iQmetrix` |


### Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Unable to find document id {x}` | Ensure ClassificationTreeId is correct |
| `HTTP 406` | `Locale not available` | This error occurs with some browser extensions such as Postman. To resolve, add the header `Accept-Language: en-US` |



## Field Definitions


A **Field Definition** defines both how {{Product}} specification details are displayed on a screen, such as a website, and how it is stored in the Product Library.

As an example, the following Field Definition describes how battery capacity for a product might be displayed.

```csharp
{
    "Id": 58,
    "StringId": "BatteryCapacity",
    "InputType": "Float",
    "IsRequired": false,
    "LanguageInvariantUnit": "mAh",
    "DisplayName": "Battery Capacity",
    "Unit": "mAh",
    "Options": []
}
```

Using this Field Definition, below is one possible way to display this information on a screen, such as on a "Product Detail" page for a product in an e-commerce site.

In this example, we are using an example value of 1800. 

```html
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="panel-title">Battery</div>
    </div>
    <table class="table">
        <tbody>
            <tr>
                <td class="name">Battery Capacity</td>
                <td class="value">1800 mAh</td>
            </tr>             
        </tbody>
    </table>
</div>
```

The result displayed on the page, with some styling, is shown below

<img src="{{ "/images/fielddefinition.png" | prepend: site.url }}" />


### Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>


### Getting Field Defintions

<h4 id='getting-all-field-definitions' class='clickable-header top-level-header'>Getting All Field Definitions</h4>



<h4>Request</h4>

<pre>
GET /FieldDefinitions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-field-definitions" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-field-definitions" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-field-definitions" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-field-definitions" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-field-definitions" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-field-definitions" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-field-definitions"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-field-definitions">
<pre id="http-code-getting-all-field-definitions"><code class="language-http">GET /FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-field-definitions">
<pre id="curl-code-getting-all-field-definitions"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-field-definitions">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-field-definitions"><code class="language-csharp">static IRestResponse GettingAllFieldDefinitions()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-field-definitions">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-field-definitions"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllFieldDefinitions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-field-definitions">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-field-definitions"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#fielddefinition'>FieldDefinition</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 1,
        "StringId": "Product Name",
        "InputType": "TestSingleLine",
        "IsRequired": true,
        "DisplayName": "Product Name",
        "Options": [
            {}
        ]
    }
]</pre>

<h4 id='getting-a-field-definition' class='clickable-header top-level-header'>Getting a Field Definition</h4>



<h4>Request</h4>

<pre>
GET /FieldDefinitions({FieldDefinitionId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>FieldDefinitionId</code> (<strong>Required</strong>)  - Identifier for the {{FieldDefinition}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-field-definition" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-field-definition" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-field-definition" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-field-definition" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-field-definition" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-field-definition" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-field-definition"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-field-definition">
<pre id="http-code-getting-a-field-definition"><code class="language-http">GET /FieldDefinitions(1)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-field-definition">
<pre id="curl-code-getting-a-field-definition"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-field-definition">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-field-definition"><code class="language-csharp">static IRestResponse GettingAFieldDefinition()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-field-definition">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-field-definition"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAFieldDefinition() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-field-definition">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-field-definition"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#fielddefinition'>FieldDefinition</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1,
    "StringId": "Product Name",
    "InputType": "TestSingleLine",
    "IsRequired": true,
    "DisplayName": "Product Name",
    "Options": [
        {}
    ]
}
</pre>



### Resources

#### FieldDefinition

{{note}} Use the <strong>StringId</strong> identifier instead of <strong>Id</strong>, as Id may change across Environments {{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| StringId | String | Consistent identifier across all [Environments](/#environments) | `Product Name` |
| InputType | String | Type of UI element this FieldDefinition uses, see [InputTypes](#inputypes) for a list of acceptable values | `TestSingleLine` |
| IsRequired | Boolean | A flag to indicate if the input represented by this FieldDefinition can be empty (false) or not (true) | `true` |
| LanguageInvariantUnit | String | Unit | `mm` |
| DisplayName | String | Value to be displayed in the UI | `Product Name` |
| Options | Array[object] | List of Options, only used when InputType is SingleSelect or MultiSelect |  |
| Options.Id | Integer | Identifier | `1` |
| Options.Value | String | Value | `Blue` |
| *LanguageInvariantName* | *String* | *This is a legacy property that should not be used* | |





### Enumerations

#### InputTypes

| Name |
|:-------|
| Currency | 
| Date | 
| Float | 
| Integer | 
| MultiSelect | 
| SingleSelect | 
| TextSingleLine | 
| TextMultipleLine | 
| YesNo | 



<h3 id="errors" class="clickable-header top-level-header">Errors</h3>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Document not found` | Ensure FieldDefinitionId is correct |



## Products


The {{ProductLibrary_Concept}} is a central hub that provides product content.

With this endpoint you can get details of a catalog product by [Slug](/api/catalog/#product-slug) or search for products by other identifiers.


### Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>


### Get Products


<h4 id='get-product-by-slug-id' class='clickable-header top-level-header'>Get Product by Slug ID</h4>

Returns information for a [Catalog Product](/api/catalog/#product) item.


<h4>Request</h4>

<pre>
GET /Products/{SlugId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SlugId</code> (<strong>Required</strong>)  - Identifier for the <a href="api/catalog/#product-slug">Product Slug</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-get-product-by-slug-id" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-get-product-by-slug-id" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-get-product-by-slug-id" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-get-product-by-slug-id" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-get-product-by-slug-id" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-get-product-by-slug-id" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-get-product-by-slug-id"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-get-product-by-slug-id">
<pre id="http-code-get-product-by-slug-id"><code class="language-http">GET /Products/M870-V7
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-get-product-by-slug-id">
<pre id="curl-code-get-product-by-slug-id"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-get-product-by-slug-id">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-get-product-by-slug-id"><code class="language-csharp">static IRestResponse GetProductBySlugId()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-get-product-by-slug-id">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-get-product-by-slug-id"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GetProductBySlugId() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-get-product-by-slug-id">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-get-product-by-slug-id"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
  "Id": "M1248-V1",
  "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
  "Assets": [
      {
          "Id": "732130d2-b673-461c-812b-f2b614d6076e",
          "Name": "iqmetrix.jpg",
          "Uri": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
          "Type": "Image",
          "IsHidden": true
      }
  ],
  "CanonicalClassification": {
      "Id": 4,
      "Name": "Smartphones",
      "ParentCategories": [
          {
              "Id": 2,
              "Name": "Devices"
          }
      ]
  },
  "Entity": {
      "Id": 14146,
      "Name": "Kentel Corp"
  },
  "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
  "HeroShotUri": "https://imagehost/images/44f60963-5515-44bc-9509-71aef6463580",
  "IsLinkedToCuratedProduct": true,
  "IsSaleable": true,
  "LongDescription": "The world’s first dual-edge display was born from a need to create something new...",
  "Manufacturer": {
      "Id": 13149,
      "Name": "OtterBox"
  },
  "ManufacturerSkus": [
      {
          "Value": "JBLPULSEBLKAM",
          "Description": "",
          "Entity": {
              "Id": 14146,
              "Name": "Kentel Corp"
          }
      }
  ],
  "MasterProductId": 1248,
  "MSRP": {
      "Amount": 100,
      "CurrencyCode": "USD"
  },
  "Owner": {
      "Id": 14146,
      "Name": "Kentel Corp"
  },
  "Region": {
      "CountryCode": "CA",
      "CountryName": "Canada",
      "StateCode": "AB",
      "StateName": "British Columbia"
  },
  "ReleaseDate": "2011-10-14T12:00:00.000",
  "ShortDescription": "Next is Now",
  "Specifications": [
      {
          "Name": "Color",
          "Fields": [
              {
                  "Id": 54,
                  "Name": "Height",
                  "DisplayName": "Height",
                  "StringId": "Height",
                  "Type": "Float",
                  "Unit": "inches",
                  "Value": "6.08"
              }
          ]
      }
  ],
  "UpcCodes": [
      {
          "Value": "874688002478/16W",
          "Description": "UPC",
          "Entity": 2
      }
  ],
  "VariationId": 1,
  "VariationInfo": [
      {
          "VariationId": 1,
          "Slug": "M1248-V1",
          "Fields": [
              {
                  "FieldId": 1,
                  "Name": "Product Name",
                  "Value": "true"
              }
          ]
      }
  ],
  "VendorSkus": [
      {
          "Value": "JBLPULSEBLKAM",
          "Description": "",
          "Entity": {
              "Id": 14146,
              "Name": "Kentel Corp"
          }
      }
  ],
  "Version": 1
}
</pre>


### Resources


### Search and Search Options

<h4 id='searching-for-products-by-identifier' class='clickable-header top-level-header'>Searching for Products by Identifier</h4>

`FindByIdentifier` can be used to search for {{Product}} resources by the following identifiers:
 
| Searchable Identifiers |
|:-----------------------|
| ManufacturerSKU |
| VendorSKU |
| UPC |
 
<h4>Search Format</h4>
 
Query parameters are used to specify search criteria using the following format:
 
```csharp
{OptionName}={OptionValue}
```

Multiple options are separated with a `&` symbol.
 
<h4>Available Options</h4>
 
See the table below for available options and the syntax of using each one. 
 
| Keyword | Description | Data Type | Examples |
|:--------|:------------|:----------|:---------|
| `value` | Search for the given SKU, this option is **required** | String | `value=336963`|
| `type` | Search for the given SKU where the given identifier type matches. If no value is provided, all identifiers will be searched | String, see [Searchable Identifiers](#searchable-identifiers) |  `value=336963&type=VendorSKU` <br/> `value=336963&type=ManufacturerSKU` <br/> `value=336963&type=UPC`|
| `entityId` | Search for the given SKU where the given entityId matches and the identifier type is VendorSKU or ManufacturerSKU | Integer | `value=336963&type=VendorSKU&entityId=13238` | 


<h4>Request</h4>

<pre>
GET /Products/FindByIdentifier?{Options}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Options</code> (<strong>Required</strong>)  - The options for the search
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-searching-for-products-by-identifier" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-searching-for-products-by-identifier" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-searching-for-products-by-identifier" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-searching-for-products-by-identifier" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-searching-for-products-by-identifier" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-searching-for-products-by-identifier" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-searching-for-products-by-identifier"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-searching-for-products-by-identifier">
<pre id="http-code-searching-for-products-by-identifier"><code class="language-http">GET /Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-searching-for-products-by-identifier">
<pre id="curl-code-searching-for-products-by-identifier"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-searching-for-products-by-identifier">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-searching-for-products-by-identifier"><code class="language-csharp">static IRestResponse SearchingForProductsByIdentifier()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-searching-for-products-by-identifier">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-searching-for-products-by-identifier"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SearchingForProductsByIdentifier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-searching-for-products-by-identifier">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-searching-for-products-by-identifier"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>Products</code> (Array) </li><ul><li><code>Slug</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Products": [
        {
            "Slug": "M551"
        }
    ]
}
</pre>


<h3 id="errors" class="clickable-header top-level-header">Errors</h3>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |




## Product Structure

The Product Structure API allows you to create Master Products, Variations and Revisions in Product Library which can then be added to your Catalog.  

To learn more about Master Products, Variations and Revisions see {{ProductStructure_Concept}}.

To learn more about Product Library and your Catalog, see {{ProductLibrary_Concept}}.


### Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>


### Master Products

<h4 id='creating-a-master-product' class='clickable-header top-level-header'>Creating a Master Product</h4>



<h4>Request</h4>

<pre>
POST /ProductDocs
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>






<h4>Request Parameters</h4>

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>TreeId</code> (<strong>Required</strong>) - Identifier for a {{ClassificationTree}}</li><li><code>Id</code> (<strong>Required</strong>) - Identifier for a {{Classification}} or {{Category}}</li></ul><li><code>OwnerEntityId</code> (<strong>Required</strong>) - Identifier of the <a href='/api/company-tree/#company'>Company</a> the Product will belong to</li><li><code>RootRevision</code> (<strong>Required</strong>) </li><ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Master Product</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Unique identifier for a {{ColorDefinition}}</li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul><li><code>ColorDefinitions</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTagIds</code> (Optional) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Optional) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (Optional) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul><li><code>Manufacturer</code> (Optional) </li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for a {{Manufacturer}}</li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-master-product" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-master-product" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-master-product" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-master-product" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-master-product" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-master-product" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-master-product"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-master-product">
<pre id="http-code-creating-a-master-product"><code class="language-http">POST /ProductDocs
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Classification": {
        "TreeId": 1,
        "Id": 4
    },
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "Manufacturer": {
        "Id": 13149
    },
    "OwnerEntityId": 14146,
    "RootRevision": {
        "Assets": [
            {
                "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
                "Name": "HeroShot",
                "MimeType": "image/jpeg",
                "IsHidden": false
            }
        ],
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 14146
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ]
    }
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-master-product">
<pre id="curl-code-creating-a-master-product"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Classification": {
        "TreeId": 1,
        "Id": 4
    },
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "Manufacturer": {
        "Id": 13149
    },
    "OwnerEntityId": 14146,
    "RootRevision": {
        "Assets": [
            {
                "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
                "Name": "HeroShot",
                "MimeType": "image/jpeg",
                "IsHidden": false
            }
        ],
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 14146
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ]
    }
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-master-product">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-master-product"><code class="language-csharp">static IRestResponse CreatingAMasterProduct()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"OwnerEntityId\":14146,\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-master-product">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-master-product"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAMasterProduct() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"OwnerEntityId\":14146,\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-master-product">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-master-product"><code class="language-ruby">require 'rest-client'

body = "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"OwnerEntityId\":14146,\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#productdocument'>ProductDocument</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 8,
    "Classification": {
        "TreeId": 1,
        "Id": 4,
        "Name": "Smartphones"
    },
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [ 1 ]
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": null,
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 13149,
        "Name": "OtterBox"
    },
    "Owner": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "RevisionGroups": [
        {
            "Order": 1,
            "VariationId": null,
            "GroupType": "Entity",
            "Revisions": []
        },
        {
            "Order": 0,
            "VariationId": null,
            "GroupType": "Region",
            "Revisions": []
        },
        {
            "Order": 2,
            "VariationId": null,
            "GroupType": "RegionAndEntity",
            "Revisions": []
        }
    ],
    "RootRevision": {
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 14146,
                            "Name": "Kentel Corp"
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ],
        "IsArchived": false
    },
    "Version": 1
}
</pre>

<h4 id='getting-a-product-hierarchy' class='clickable-header top-level-header'>Getting a Product Hierarchy</h4>

This request will get a Master Product and all child Variations and Revisions.


<h4>Request</h4>

<pre>
GET /ProductDocs({ProductDocumentId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-product-hierarchy" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-product-hierarchy" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-product-hierarchy" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-product-hierarchy" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-product-hierarchy" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-product-hierarchy" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-product-hierarchy"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-product-hierarchy">
<pre id="http-code-getting-a-product-hierarchy"><code class="language-http">GET /ProductDocs(8)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-product-hierarchy">
<pre id="curl-code-getting-a-product-hierarchy"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-product-hierarchy">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-product-hierarchy"><code class="language-csharp">static IRestResponse GettingAProductHierarchy()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-product-hierarchy">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-product-hierarchy"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAProductHierarchy() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-product-hierarchy">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-product-hierarchy"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#productdocument'>ProductDocument</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 8,
    "Classification": {
        "TreeId": 1,
        "Id": 4,
        "Name": "Smartphones"
    },
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 13149,
        "Name": "OtterBox"
    },
    "Owner": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "RevisionGroups": [
        {
            "GroupType": "Entity",
            "Order": 1,
            "Revisions": [
                {
                    "Id": 5,
                    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "FieldValues": [
                        {
                            "FieldDefinitionId": 1,
                            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
                        }
                    ],
                    "IdentifierGroups": [
                        {
                            "Type": "ManufacturerSKU",
                            "ForceOverride": false,
                            "Identifiers": [
                                {
                                    "Description": "Manufacturer sku",
                                    "Entity": {
                                        "Id": 14146,
                                        "Name": "Kentel Corp"
                                    },
                                    "Type": "ManufacturerSKU",
                                    "Value": "ManufacturerSKU"
                                }
                            ]
                        }
                    ],
                    "Regions": [
                        {
                            "CountryCode": "CA",
                            "CountryName": "Canada",
                            "StateCode": "AB",
                            "StateName": "British Columbia"
                        }
                    ]
                }
            ],
            "VariationId": 5
        }
    ],
    "RootRevision": {
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 14146,
                            "Name": "Kentel Corp"
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ],
        "IsArchived": false
    },
    "Version": 1
}</pre>

<h4 id='updating-a-master-product' class='clickable-header top-level-header'>Updating a Master Product</h4>

{{important}} This request cannot <strong>update</strong> existing Assets, only add new Assets{{end}}


<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Master Product</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Unique identifier for a {{ColorDefinition}}</li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-master-product" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-master-product" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-master-product" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-master-product" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-master-product" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-master-product" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-master-product"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-master-product">
<pre id="http-code-updating-a-master-product"><code class="language-http">PUT /ProductDocs(8)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-master-product">
<pre id="curl-code-updating-a-master-product"><code class="language-http">curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-master-product">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-master-product"><code class="language-csharp">static IRestResponse UpdatingAMasterProduct()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-master-product">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-master-product"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingAMasterProduct() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-master-product">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-master-product"><code class="language-ruby">require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

### Product Variations

<h4 id='creating-a-variation' class='clickable-header top-level-header'>Creating a Variation</h4>



<h4>Request</h4>

<pre>
POST /ProductDocs({ProductDocumentId})/Variations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Variation</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Identifier for a ColorDefinition. For a list of ColorDefinitions, see <a href='/api/product-structure/#getting-color-definitions-for-a-master-product'>Getting Color Definitions For a Master Product</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-variation" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-variation" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-variation" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-variation" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-variation" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-variation" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-variation"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-variation">
<pre id="http-code-creating-a-variation"><code class="language-http">POST /ProductDocs(8)/Variations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-variation">
<pre id="curl-code-creating-a-variation"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-variation">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-variation"><code class="language-csharp">static IRestResponse CreatingAVariation()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-variation">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-variation"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAVariation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-variation">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-variation"><code class="language-ruby">require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>VariationId</code> (Integer) - Identifier for a {{Variation}}</li></ul>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "VariationId": 8
}</pre>

<h4 id='updating-a-variation' class='clickable-header top-level-header'>Updating a Variation</h4>

{{important}} This request cannot <strong>update</strong> existing Assets, only add new Assets{{end}}


<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})/Variations?variationId={VariationId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    
    <li>
        <code>VariationId</code> (<strong>Required</strong>)  - Identifier of the {{Variation}}. To get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a>
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Variation</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Identifier for a ColorDefinition. For a list of ColorDefinitions, see <a href='/api/product-structure/#getting-color-definitions-for-a-master-product'>Getting Color Definitions For a Master Product</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-variation" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-variation" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-variation" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-variation" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-variation" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-variation" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-variation"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-variation">
<pre id="http-code-updating-a-variation"><code class="language-http">PUT /ProductDocs(8)/Variations?variationId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-variation">
<pre id="curl-code-updating-a-variation"><code class="language-http">curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-variation">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-variation"><code class="language-csharp">static IRestResponse UpdatingAVariation()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-variation">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-variation"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingAVariation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-variation">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-variation"><code class="language-ruby">require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

### Product Revisions

<h4 id='creating-a-revision' class='clickable-header top-level-header'>Creating a Revision</h4>

At least one of the following is required in the URI for this request: `VariationId`, `CountryCode`, `StateCode`, `EntityId`.


<h4>Request</h4>

<pre>
POST /ProductDocs({ProductDocumentId})/Revisions?variationId={VariationId}&countryCode={CountryCode}&stateCode={StateCode}&entityId={EntityId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    
    <li>
        <code>VariationId</code> (Optional)  - Identifier for a {{Variation}}, to get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a>
    </li>
    
    <li>
        <code>CountryCode</code> (Optional)  - Two letter country code for a Country. Uses the ISO 3166-1 alpha-2 standard
    </li>
    
    <li>
        <code>StateCode</code> (Optional)  - Two letter state code for a State or Province. Based off the ISO 3166-2 standard
    </li>
    
    <li>
        <code>EntityId</code> (Optional)  - Identifier for a {{Company}} or {{Carrier}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-revision" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-revision" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-revision" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-revision" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-revision" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-revision" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-revision"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-revision">
<pre id="http-code-creating-a-revision"><code class="language-http">POST /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-revision">
<pre id="curl-code-creating-a-revision"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-revision">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-revision"><code class="language-csharp">static IRestResponse CreatingARevision()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-revision">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-revision"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingARevision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-revision">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-revision"><code class="language-ruby">require 'rest-client'

body = "{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#revision'>Revision</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 5,
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ],
    "Regions": [
        {
            "CountryCode": "CA",
            "CountryName": "Canada",
            "StateCode": "AB",
            "StateName": "British Columbia"
        }
    ]
}</pre>

<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h4 id='updating-a-revision' class='clickable-header top-level-header'>Updating a Revision</h4>

To update an existing Revision, the same URI paramters that were used to create the Revision must be used. 


<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})/Revisions?variationId={VariationId}&countryCode={CountryCode}&stateCode={StateCode}&entityId={EntityId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    
    <li>
        <code>VariationId</code> (Optional)  - Identifier for a {{Variation}}, to get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a>
    </li>
    
    <li>
        <code>CountryCode</code> (Optional)  - Two letter country code for a Country. Uses the ISO 3166-1 alpha-2 standard
    </li>
    
    <li>
        <code>StateCode</code> (Optional)  - Two letter state code for a State or Province. Based off the ISO 3166-2 standard
    </li>
    
    <li>
        <code>EntityId</code> (Optional)  - Identifier for a {{Company}} or {{Carrier}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-revision" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-revision" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-revision" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-revision" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-revision" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-revision" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-revision"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-revision">
<pre id="http-code-updating-a-revision"><code class="language-http">PUT /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": 5,
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ],
    "Regions": [
        {
            "CountryCode": "CA",
            "CountryName": "Canada",
            "StateCode": "AB",
            "StateName": "British Columbia"
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-revision">
<pre id="curl-code-updating-a-revision"><code class="language-http">curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 5,
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ],
    "Regions": [
        {
            "CountryCode": "CA",
            "CountryName": "Canada",
            "StateCode": "AB",
            "StateName": "British Columbia"
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-revision">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-revision"><code class="language-csharp">static IRestResponse UpdatingARevision()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"StateCode\":\"AB\",\"StateName\":\"British Columbia\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-revision">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-revision"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingARevision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"StateCode\":\"AB\",\"StateName\":\"British Columbia\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-revision">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-revision"><code class="language-ruby">require 'rest-client'

body = "{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"StateCode\":\"AB\",\"StateName\":\"British Columbia\"}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

### Color Definitions and Tags

<h4 id='getting-color-definitions' class='clickable-header top-level-header'>Getting Color Definitions</h4>

This request can be used to get a <code>ColorDefinitionId</code> when creating a Variation or Revision.


<h4>Request</h4>

<pre>
GET /ProductDocs({ProductDocumentId})/ColorDefinitions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-color-definitions" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-color-definitions" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-color-definitions" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-color-definitions" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-color-definitions" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-color-definitions" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-color-definitions"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-color-definitions">
<pre id="http-code-getting-color-definitions"><code class="language-http">GET /ProductDocs(8)/ColorDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-color-definitions">
<pre id="curl-code-getting-color-definitions"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-color-definitions">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-color-definitions"><code class="language-csharp">static IRestResponse GettingColorDefinitions()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-color-definitions">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-color-definitions"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingColorDefinitions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-color-definitions">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-color-definitions"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#colordefinitions'>ColorDefinitions</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}</pre>

<h4 id='creating-a-color-definition' class='clickable-header top-level-header'>Creating a Color Definition</h4>

This request can be used to add additional ColorDefinitions to a Product once it has been created.


<h4>Request</h4>

<pre>
POST /ProductDocs({ProductDocumentId})/ColorDefinitions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>ColorDefinitions</code> (<strong>Required</strong>) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTagIds</code> (Optional) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Optional) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (Optional) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-color-definition" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-color-definition" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-color-definition" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-color-definition" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-color-definition" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-color-definition" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-color-definition"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-color-definition">
<pre id="http-code-creating-a-color-definition"><code class="language-http">POST /ProductDocs(8)/ColorDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-color-definition">
<pre id="curl-code-creating-a-color-definition"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-color-definition">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-color-definition"><code class="language-csharp">static IRestResponse CreatingAColorDefinition()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-color-definition">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-color-definition"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAColorDefinition() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-color-definition">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-color-definition"><code class="language-ruby">require 'rest-client'

body = "{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#colordefinitions'>ColorDefinitions</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}</pre>

<h4 id='getting-all-color-tags' class='clickable-header top-level-header'>Getting All Color Tags</h4>



<h4>Request</h4>

<pre>
GET /ColorTags
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-color-tags" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-color-tags" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-color-tags" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-color-tags" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-color-tags" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-color-tags" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-color-tags"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-color-tags">
<pre id="http-code-getting-all-color-tags"><code class="language-http">GET /ColorTags
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-color-tags">
<pre id="curl-code-getting-all-color-tags"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ColorTags" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-color-tags">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-color-tags"><code class="language-csharp">static IRestResponse GettingAllColorTags()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ColorTags");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-color-tags">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-color-tags"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllColorTags() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ColorTags");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-color-tags">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-color-tags"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ColorTags', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ColorTags</code> (Array) </li><ul><li><code>Id</code> (Integer) - Identifier of a {{ColorTag}}, see <a href='#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Name</code> (String) </li><li><code>ColorCode</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "ColorTags": [
        {
            "Id": 1,
            "Name": "Black",
            "ColorCode": "#303232"
        }
    ]
}
</pre>


### Resources

#### ProductDocument

A ProductDocument represents the [hierarchical structure](/concepts/product-structure/) of Products in Product Library.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `8` |
| Classification | object | [Classification](/api/classification-tree/#classification) information |  |
| Classification.TreeId | Integer | Identifier for a [ClassificationTree](/api/classification-tree/#classificationtree) | `1` |
| Classification.Id | Integer | Identifier for a [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | `4` |
| Classification.Name | String | Name | `Smartphones` |
| ColorDefinitions | Array[<a href='/api/catalog/#colordefinition'>ColorDefinition</a>] | List of [ColorDefinitions](/api/catalog/#colordefinition) |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-28T12:00:00.000Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-28T12:00:00.000Z` |
| Manufacturer | object | [Manufacturer](/api/entity-store/#manufacturer) information |  |
| Manufacturer.Id | Integer | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | `13149` |
| Manufacturer.Name | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) | `OtterBox` |
| Owner | object | Indicates if this Product is publicly accessible (null) or private (not null) |  |
| Owner.Id | Integer | For private products, Identifier of the Company that owns this Product | `14146` |
| Owner.Name | String | For private products, Name of the Company that owns this Product | `Kentel Corp` |
| RevisionGroups | Array[<a href='/api/product-structure/#revisiongroup'>RevisionGroup</a>] | Revisions |  |
| RootRevision | <a href='/api/product-structure/#masterproduct'>MasterProduct</a> | Master Product, root of the Product hierarchy |  |
| Version | Integer | The latest revision number | `1` |

#### Asset

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Identifier | `a130e8f0-ddb1-4034-a34a-53d3ac03d384` |
| Name | String | Name | `HeroShot` |
| MimeType | String | Type of image | `image/jpeg` |
| IsHidden | Boolean | A flag to indicate if this Asset is hidden, not to be used in Endless Aisle | `false` |


#### MasterProduct

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| FieldValues | Array[<a href='/api/product-structure/#fieldvalue'>FieldValue</a>] | List of FieldValues which represent the properties this Master Product has such as name, screen size, etc |  |
| IdentifierGroups | Array[<a href='/api/product-structure/#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if the MasterProduct is archived | `false` |
| Variations | Array[<a href='/api/product-structure/#variation'>Variation</a>] | Variations |  |

#### IdentifierGroup

An Identifier is a value that uniquely represents a product within a certain context. For example, a product sold by one vendor may have different SKU identifiers than the same product sold by another vendor. IdentifierGroups are used to group Identifiers by type.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | Acceptable values include: ManufacturerSKU, VendorSKU, UPC | `ManufacturerSKU` |
| ForceOverride | Boolean | A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a> | `false` |
| Identifiers | Array[object] | List of Identifiers of the given type |  |
| Description | String | Description | `Manufacturer sku` |
| Entity | object | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| Type | String | This value should match the Type property of the IdentifierGroup | `ManufacturerSKU` |
| Value | String | Value | `ManufacturerSKU` |

#### Identifier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String | Description | `Manufacturer sku` |
| Entity | object | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| Type | String | This value should match the Type property of the IdentifierGroup | `ManufacturerSKU` |
| Value | String | Value | `ManufacturerSKU` |

#### RevisionGroup

RevisionGroups are used to group Revisions by type and parent Variation. See [Extended Examples](#extended-examples)

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| GroupType | String | Revision type. See [GroupTypes](#grouptypes) for a list of acceptable values | `Entity` |
| Order | Integer | A value used for sorting Revisions | `1` |
| Revisions | Array[<a href='/api/product-structure/#revision'>Revision</a>] | List of Revisions in this category |  |
| VariationId | Integer | Identifier for the Variation, if this Revision was created off of a Variation | `5` |

#### Revision

To learn more about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `5` |
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| Entity | object | An identifier for an Entity this Revision was created for |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| FieldValues | Array[<a href='/api/product-structure/#fieldvalue'>FieldValue</a>] | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct |  |
| IdentifierGroups | Array[<a href='/api/product-structure/#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| Regions | Array[<a href='/api/catalog/#region'>Region</a>] | List of regions this Revision is applicable to |  |

#### Variation

To learn more about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| FieldValues | Array[<a href='/api/product-structure/#fieldvalue'>FieldValue</a>] | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct |  |
| IdentifierGroups | Array[<a href='/api/product-structure/#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if this Variation is archived. Archived Products are hidden from searches and can only be access directly. | `false` |

#### FieldValue

A FieldValue represents a product property and defines how Variations and Revisions differ from their parents. FieldValues are made up of a reference to a {{field-definition}} and a value. See [Extended Examples](#extended-examples).

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| FieldDefinitionId | Integer | Identifier for a [FieldDefinition](/api/field-definitions/#fielddefinition) | `1` |
| LanguageInvariantValue | String | Value | `iPhone 4S 16 GB Black` |


#### ColorTag

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `5` |
| Name | String | Name | `Green` |
| ColorCode | String | A valid Hex code representing this color | `#51B14D` |





#### ColorDefinitions

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColorDefinitions | Array[<a href='/api/catalog/#colordefinition'>ColorDefinition</a>] | List of [ColorDefinitions](/api/catalog/#colordefinition) |  |




### Enumerations

#### GroupType

| Name   | Description |
|:-------|:------------|
| Region | Variation is specific to a [Country](/api/reference/#country) or [State](/api/reference/#state) |
| Entity | Variation is specific to a [Company](/api/company-tree/#company) or [Carrier](/api/entity-store/#carrier) |
| RegionAndEntity | Varation is a combination of the above | 

#### SwatchType

| Name   | Description |
|:-------|:------------|
| Asset | Color is represented by an [Asset](/api/assets/#asset) |
| ColorCode | Color is represented by a Hex code |
| Empty | No swatch |


<h3 id="extended-examples" class="clickable-header top-level-header">Extended Examples</h3>

These examples are intended to illustrate some of the more complex concepts in the Product Structure API.

#### Revision Group

A [RevisionGroup](#revisiongroup) is how child Revisions of a given Master Product or Variation are represented in the API.

```csharp
{
    "VariationId": 3,
    "GroupType": "Entity",
    "Revisions": [
        {
            "Id": 4,
            "Entity": {
                "Id": 12372,
                "Name": "Jump.ca"
            },
            ...
        },
        {
            "Id": 3,
            "Entity": {
                "Id": 3335,
                "Name": "KENTEL"
            },
            ...
        }              
    ]
}
```

The example above is a snippet from a {{MasterProduct}} with two child Revisions.

`"GroupType": "Entity"` means that these Revisions are Entity Revisions, owned by a specific Entity, such as a Company or Carrier. 

In this case, the two Entities that own these Revisions are {{Company}} Entities, Jump.ca and KENTEL.

#### Field Values

A [FieldValue](#fieldvalue) pairs a {{FieldDefinition}} with a value that allows us to see how a child Variation or Revision differs from its parent.

```csharp
{
    "Revisions": [
        {
            "Id": 4,
            "FieldValues": [
                {
                    "FieldDefinitionId": 76,
                    "LanguageInvariantValue": "659.50 CAD"
                }
            ]
        },
        {
            "Id": 3,
            "FieldValues": [
                {
                    "FieldDefinitionId": 76,
                    "LanguageInvariantValue": "449.50 USD"
                }
            ]
        },              
    ]
}
```

The example above is a snippet from a {{MasterProduct}} with two child Revisions which have one FieldValue change each.

Using [Getting a Field Definition](/api/field-definitions/#getting-a-fielddefinition) we can determine that the FieldDefinition specified is MSRP.

Therefore, these Revisions differ from the MasterProduct by MSRP, one Revision has `659.50 CAD` and the other has `449.50 USD`.

#### Force Overide 

Products in Product Library can have an **inheritance** relationship between a parent (Master Product or Variation) and child (Variation or Revision).

Inheriting an [IdentifierGroup](#identifiergroup) allows a child to have an identicial set of [Identifiers](#identifier) as its parent.

IdentifierGroups can also be **synched**, allowing a child to automatically inherit any changes made to the inherited group.

Note that Identifiers can only be synced as a complete set, either all Identifiers of a specific type (Vendor, UPC, Manufacturer) are synced, or none are.

By forcing a child to override an IdentifierGroup, we prevent the sync and allow the child to have different Identifiers than its parent.

```csharp
{
  "Variations": [
    {
      "IdentifierGroups": [
        {
          "Type": "VendorSKU",
          "Identifiers": [
            {
              "Type": "VendorSKU",
              "Value": "V8341221L"
            }
          ],
          "ForceOverride": true
        },
        {    
          "Type": "ManufacturerSKU",
          "Identifiers": [
            {
              "Type": "ManufacturerSKU",
              "Value": "ME341LL/A"
            }
          ],
          "ForceOverride": false
        }
      ],
    },
  ],
  "IdentifierGroups": [
    {
      "Type": "VendorSKU",
      "Identifiers": [
        {
          "Type": "VendorSKU",
          "Value": "V8341221L"
        }
      ],
      "ForceOverride": true
    },
    {    
      "Type": "ManufacturerSKU",
      "Identifiers": [
        {
          "Type": "ManufacturerSKU",
          "Value": "545512G/A"
        }
      ],
      "ForceOverride": false
    }        
    ...
  ]
}
```

The example above is a summarized {{MasterProduct}} which includes one child {{Variation}}, one Vendor SKU (`V8341221L`) and one Manufacturer SKU (`545512G/A`).

With ForceOverride set to `true` for Vendor SKUs, we know that the child Variation has one and only one Vendor SKU - `V8341221L`.

However, Manufacturer SKU's have ForceOverride set to `false`, showing that the child Variation is not inheriting all of the parent Master Product's Manufacturer SKUs.

Looking at the Variation, there is a Manufacturer SKU with a value of `ME341LL/A` that is breaking inheritance.


<h3 id="errors" class="clickable-header top-level-header">Errors</h3>

| Error Code  | Description | How To Resolve |
|:------------|:------------|:---------------|
| `HTTP 400` | `Color Definition name cannot be empty` | Ensure ColorDefinition.Name is provided  |
| `HTTP 400` | `Product document must have a valid manufacturer: Entity with id {x} does not exist` | Ensure Manufacturer.Id is valid  |
| `HTTP 400` | `Must use valid ClassificationTree` | Ensure Classification.TreeId is valid  |
| `HTTP 400` | `Entity with id {x} does not exist` | Ensure the EntityId is valid |
| `HTTP 400` | `Product identifier '{x}SKU': Entity with id {y} does not exist` | Ensure Entity.Id values exist and are valid Entities |
| `HTTP 400` | `For every locale, Product Name must be different for every validation` | Ensure the Variation name used is unique for all Variations on the Master Product |
| `HTTP 404` | `Unable to find document id {x}` | Ensure FieldValues.FieldDefinitionId is valid  |
| `HTTP 404` | `Product document not found` | Ensure the Product Document exists and the ProductDocumentId is valid |



## Pricing

## Inventory Availability


# CORE

## Authentication

## Company Tree

## Entities

## Reference

## Security Roles

## User Manager


# CUSTOMER RELATIONSHIP MANAGEMENT (CRM)

## Customers

### Adding Customers

### Getting Customers

### Updating Customers

### Deleting Customers


## Addresses

### Adding Customers

### Getting Customers

### Updating Customers

### Deleting Customers


## Contact Methods

### Adding Customers

### Getting Customers

### Updating Customers

### Deleting Customers


## Resources

## Enumerations

## Search & Filter

## Pagination

## Errors



# DROPSHIP

## Orders

## Cost Feed

## Product Feed

## Product Subscription

## Shipping Aggregator

## Supplier Availability

## Shipping Options

## Supplier Orders


# PARTNERS

## Partner Relationships

## Partner Reporting


# POS

## General Ledger


# RQ

## Carrier Integration

## Customer Managed Inventory

## Commissions

## Electronic Product Catalog

## Punch Clock

## RQ Data Connect Bridge   

## RQ Data Connect

## Vendor Managed Inventory














