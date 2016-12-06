---
title: API Reference
permalink: /api/

---
<!-- {% include linkrefs.html %} -->

# Overview

iQmetrix APIs are simple but powerful HTTP interfaces that are inspired by the REST architectural style. These are the same APIs that our internal development teams use to build products.

We are passionate about creating a great [developer experience](http://www.iqmetrix.com/our-company) for you so please don't hesitate to contact our <a href="mailto:{{site.support_email}}?subject=API Feedback">API Support Team</a> with any feedback related to API design, usability, or features that you are interested to see.

# Onboarding Package

As part of the onboarding process, you will receive an onboarding package from the iQmetrix API team. 

This package provides you with credentials required to access iQmetrix APIs. 

If you need an onboarding package, contact {{contact_support}}. 

# Authentication

iQmetrix APIs use [OAuth2](http://oauth.net/2/) for authentication, and all requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTPS).

When using our APIs, your account must be [authenticated](/api/authentication/) by including an {{AccessToken_Glossary}} in the header of all API requests. Requests made over plain HTTP or without authentication will fail.

To learn more about authentication, see [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token).

# Environments

iQmetrix APIs are provisioned into environments that let you start developing and testing integrated solutions quickly and easily.

## Production

The **production** environment allows you to use your integrated solutions once deployed.

## Sandbox

The **sandbox** environment allows you to develop and test integrated solutions or try out new features of iQmetrix APIs without compromising data in your production environment. 

API calls in the Sandbox environment are free of charge and will not affect your billing.

Sandbox environments will be provisioned with tenant-specific test data.

# Rate Limiting

Requests to the iQmetrix APIs are limited to help to manage server load, ensuring that high API request volumes do not impact overall performance. 

They also help to protect from deliberate or accidental denial of service as a result of APIs being flooded with requests.

If you run into the `429 Too Many Requests` error, please contact {{contact_support}}

## Rate Limit Policies

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

## Rate Limit Window

The Rate Limit Window policy determines when the current rate limit will be reset.

To determine the limit, make a request to an iQmetrix API, then check the `X-RateLimit-Reset` HTTP Header of the response. 

## HTTP Headers

All responses from the iQmetrix API's have the following headers, which provide information about how many requests are remaining.

| Header Name | Description |
|:------------|:------------|
| X-RateLimit-Limit | The maximum number of requests allowed in the current rate limit window |
| X-RateLimit-Remaining | The number of requests remaining in the current rate limit window | 
| X-RateLimit-Reset | The time when the rate limit window will reset in UTC |
| X-RateLimit-ResetSeconds | The number of seconds until the rate limit resets | 

## Checking a Rate Limit


> Example Request

```
GET https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers
Authorization: Bearer (Access Token)
Accept: application/json
```

> Example Response

```
HTTP 200 Content-Type: application/json
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 2016-02-25T13:00:00.0000000Z
X-RateLimit-ResetSeconds: 59
{
    ...
}
```

To determine the **Authenticated** Rate Limit for an API, make an authenticated request to the API and check the HTTP headers in the response.

In the example below, a request is made to the [Customers](/api/crm/) API with a valid {{AccessToken_Glossary}} in the `Authorization` header.


Looking at the HTTP headers in the response, we can determine:

* Our rate limit window ends in **59 seconds** or at precisely **2016-02-25T13:00:00.0000000Z** UTC
* In the next **59 seconds** we can make **999** more requests
* In **59 seconds**, or at **2016-02-25T13:00:00.0000000Z** UTC, the counter will reset and we will be able to make another **1000 requests**

## Exceeding Rate Limit

> Example

```
HTTP/1.1 429 Too Many Requests
Content-Type: text/plain
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 2015-04-16T17:46:00.0000000Z
X-RateLimit-ResetSeconds: 59
  
rate limit exceeded
```

If the rate limit is exceeded, the response will be `429 Too Many Requests` and the service will not be able to make further requests until the quota resets.


# Supported Response Formats

> Example

```
Accept: application/json
```

Most iQmetrix APIs support the `json` and `hal+json` response formats depending on the type of request. Documentation for each individual API will explicitly state which response formats are supported.

When sending an API request, you can select the format to return by defining the value in the HTTP Accept header, using the syntax `Accept: {ResponseFormat}`.


# Testing and Debugging

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

# Versioning

The API version is shown in the endpoint's URL (e.g. /v1). Newer API versions will be highlighted in their respective API reference documentation. 

Should there be a breaking change to an existing API, iQmetrix will trigger a release of a newer version and notify stakeholders. Please take note that not all API versions will be backward compatible.