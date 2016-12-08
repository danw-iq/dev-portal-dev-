---
title: Endless Aisle Integration Guide
search: true
---

# Overview

The following document outlines APIs and requests in common integration scenarios between the iQmetrix Endless Aisle solution and external systems utilizing APIs.

## Postman Example

iQmetrix uses <a href="http://www.getpostman.com" target="_blank">Postman</a> when <a href="/api/#testing-and-debugging">testing and debugging</a> our APIs.

For Chrome or Mac users, click the button below to import the collection directly into Postman.

The Postman environment shared by all API references and guides can be found <a href="http://developers.iqmetrix.com/files/postmanEnv.postman_environment">here</a>.

Alternatively, you can download the collection by clicking <a href="https://www.getpostman.com/collections/1285b8fd9bfc44cc73ef">here</a>.

## Who Is This Guide For? 

The intended audience for this guide are developers who are integrating an external system with Endless Aisle, such as...

* eCommerce Solutions such as Magento
* Content Management Systems such as Joomla
* Inventory Management Systems such as Netsuite
* Point of Sale Systems such as Lightspeed

## Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact <a href="mailto:apisupport@iqmetrix.com?subject=Support">Support</a>.

## Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see [Environment](http://developers.iqmetrix.com/api/#environments).

The iQmetrix API supports `JSON` and `JSON + HAL`. See [Supported Response Formats](http://developers.iqmetrix.com/api/#supported-response-formats) for more information.

## Before You Begin

In order to make authorized requests to iQmetrix APIs, you need an [Access Token](http://developers.iqmetrix.com/glossary/#access-token).

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

>
> Example
>

```
Authorization: Bearer (Access Token)
```

## Integration Areas

This guide is organized by functional areas of an external system that you may wish to integrate with Endless Aisle.

Feel free to skip to any section you are interested in:

<style>
  table {
    min-width: 100%;
  }

  #page-selector .row {
    text-align: center;
  }
  #page-selector p {
    font-size: 14px;
    min-height: 38px;
  }
  #page-selector .selectedIcon a {
    cursor: default;
  }

  #page-selector .selectedIcon p {
    color: darkgrey;
    cursor: default;
  }

  #page-selector .selectedIcon .fa-3x {
    color: darkgrey;
    cursor: default;
  }

</style>

<a href="http://developers.iqmetrix.com/guides/ea-guide-overview/">
  <p>Overview</p>
  <i class="fa fa-home fa-3x"></i>
</a>
<a href="http://developers.iqmetrix.com/guides/ea-guide-corporate-hierarchy/">
  <p>Corporate Hierarchy</p>
  <i class="fa fa-map-marker fa-3x" style="font-size:2.7em;"></i>
</a>
<a href="http://developers.iqmetrix.com/guides/ea-guide-content/">
  <p>Content</p>
  <i class="fa fa-list-alt fa-3x"></i>
</a>    
<a href="http://developers.iqmetrix.com/guides/ea-guide-inventory/">
  <p>Inventory</p>
  <i class="fa fa-barcode fa-3x"></i>
</a>       
<a href="http://developers.iqmetrix.com/guides/ea-guide-orders/">
  <p>Orders</p>
  <i class="fa fa-file-text-o fa-3x" style="font-size:2.5em;"></i>
</a>   