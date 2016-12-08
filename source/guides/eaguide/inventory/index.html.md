---
title: Endless Aisle Integration Guide
search: true
---

<style>

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

# Overview

An Inventory integration will allow you to configure Product price and inventory availability in Endless Aisle.

**Figure 1**: Illustrates a Product Detail View in Endless Aisle

<img class="popUpImage" src="http://developers.iqmetrix.com/images/ea-product-detail.png" alt="Endless Aisle Product Detail" />

The table below lists where each component comes from and how to modify it, where possible:

**Table 1:** Source for each component of Figure 5

| Component | Source | Service | How to Modify |
|:----------|:-------|:--------|:--------------|
| Caitlin Mary Jane Shoe - Youth | [Product](/api/catalog/#product).Name | Product Library | See [Updating a Product](/guides/ea-guide-content#updating-a-product) |
| [Hero Shot](/api/glossary/#hero-shot) | [Product](/api/catalog/#product).HeroShot | Product Library | |
| $29.99 | [Pricing](/api/pricing/).OverridePrice **or** [Pricing](/api/pricing/).RegularPrice | Pricing | See [Pricing Rules](#pricing-rules) |
| IN STOCK | [Availability](/api/availability/#availability).Quantity | Availability | See [Availability Rules](#availability-rules) |
| Navy | [ColorDefinition](/api/catalog/#colordefinition).Name | Product Library | See [Updating a Product](/guides/ea-guide-content#updating-a-product) |

## Pricing Rules

Endless Aisle displays Product price using the request [Getting Product Pricing for a Retail Location](/api/pricing/#getting-product-pricing-for-a-retail-location) and the following rules:

1. If `PricingTermId` has value, get the PricingTerm and display term information
2. Or, if `OverridePrice` has value, display it 
3. Otherwise, display `RegularPrice`

Pricing can be updated in three different ways:

* [Creating a Sale Price](#creating-a-sale-price)
* [Updating Pricing at Location Level](#updating-pricing-at-location-level)
* [Updating Pricing at Company Level](#updating-pricing-at-company-level)

## Availability Rules

Endless Aisle displays the availability of a Product using the request [Getting Availability For a Catalog Item By Location](/api/availability/#getting-availability-for-a-catalog-item-for-a-location) and the following rules:

1. If `Quantity` is greater than 0, display **IN STOCK**
2. If `Quantity` is 0, display **OUT OF STOCK**

Availability can be updated using [Updating Availability](#updating-availability).

## Creating a Sale Price

Creating a sale price for a Product involves...

1. [Getting the Catalog Item Identifier](#step-1---getting-the-catalog-item-identifier)
2. [Getting the Location Identifier](#step-2---getting-the-location-identifier)
3. [Getting the Pricing Identifier](#step-3---getting-the-pricing-identifier)
4. [Creating the Sale Price](#step-4---creating-the-sale-price)


# Steps

## Step 1 - Getting the Catalog Item Identifier

Before you can create a sale price, you must know the Catalog Item Identifier associated with the Product.

This value is not shown in Endless Aisle, so you will need to search your [Catalog](http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog) using [Searching for Products](/api/catalog/#searching-for-products).

An example of this request is already provided in [Getting the Product Slug](/guides/ea-guide-content#step-1---getting-the-product-slug).

From the response you can see the Catalog Item Identifier of the Product is `bb54cb25-e1df-4710-9e05-c2473192cc99`.

### Step 2 - Getting the Location Identifier

Before you can create a sale price, you have get the Identifier for the Location of the sale.

We can use [Getting All Locations for a Company](/api/company-tree/#getting-all-locations-for-a-company) to look for a Location in Chicago called Atrium Mall.

>
> Example Request
>

```
GET https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
```

>
> Example Response
>

From the response you can see the Location Id is `14239`.

```
HTTP 200 Content-Type: application/json
[  
   {  
      "Id": 14213,
      "Name": "Avalon Mall",
      "Description": "",
      "Role": "Location",
      "LocationType": null,
      "LocationSubType": null,
      "Address": {  
         "AddressLine1": null,
         "AddressLine2": null,
         "City": "St. John's",
         "StateCode": "NL",
         "StateName": "Newfoundland and Labrador",
         "CountryCode": "CA",
         "CountryName": "Canada",
         "Zip": null
      },
      "Contacts": [...],
      "StorePhoneNumbers": [...],
      "Area": null,
      "StoreHours": {...},
      "Geography": null,
      "TimeZone": null,
      "Roles": [...],
      "SortName": "avalon mall",
      "Attributes": {...},
      "Relationships": [...],
      "CreatedUtc": "2015-11-20T19:10:30.445Z",
      "LastModifiedUtc": "2015-11-20T19:10:30.445Z",
      "CorrelationId": null,
      "ClientEntityId": null,
      "TypeId": null,
      "Logo": null,
      "Version": 1     
   },
   {  
      "Id": 14239,
      "Name": "Atrium Mall - Chicago",
      "Description": "",
      "Role": "Location",   
      "LocationType": null,
      "LocationSubType": null,
      "Address": {  
         "AddressLine1": "512 Broad Street",
         "AddressLine2": null,
         "City": "Chicago",
         "StateCode": "IL",
         "StateName": "Illinois",
         "CountryCode": "US",
         "CountryName": "United States",
         "Zip": null
      },
      "Contacts": [...],
      "StorePhoneNumbers": [...],
      "Area": null,
      "StoreHours": {...},
      "Geography": null,
      "TimeZone": null,
      "Roles": [...],
      "SortName": "atrium mall - chicago",
      "Attributes": {...},
      "Relationships": [...],
      "CreatedUtc": "2015-11-20T19:54:18.613Z",
      "LastModifiedUtc": "2016-04-19T19:12:29.19Z",
      "CorrelationId": null,
      "ClientEntityId": null,
      "TypeId": 95,
      "Logo": null,
      "Version": 1
   },   
   ...
]
```

### Step 3 - Getting the Pricing Identifier

To create a sale price, the Product must have an existing Pricing, which you can find using [Getting Product Pricing for a Retail Level](/api/pricing/#getting-product-pricing-for-a-retail-location), and the Identifiers from the previous two steps.

>
> Example Request
>

```
GET https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14239)/CatalogItems(bb54cb25-e1df-4710-9e05-c2473192cc99)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
```

>
> Example Response
>

From this response you can determine the Pricing Pricing Identifier is `16446`. 

If this request returned nothing, you would need to create a Pricing using either:

* [Creating or Updating Product Pricing at Company Level](/api/pricing/#creating-or-updating-product-pricing-at-company-level) or
* [Creating or Updating Product Pricing at Location Level](/api/pricing/#creating-or-updating-product-pricing-at-location-level)

```
HTTP 200 Content-Type: application/json
[
  {
      "Id": 16446,
      "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
      "CompanyId": 14146,
      "EntityId": 14239,
      "FloorPrice": 3.99,
      "IsDiscountable": false,
      "OriginalPrice": null,
      "OverridePrice": 3.99,
      "OverridePriceId": 512,
      "PricingTermId": 78,
      "RegularPrice": 10
  }
]
```

## Step 4 - Creating the Sale Price

Now that you have a Pricing Pricing Identifier, you can put the Product on sale. For this example a one week period in January and a sale price of 29.99 will be used.

>
> Example Request
>

```
POST https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16445)/SaleOverridePrices
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "IsDefault": false,
    "SalePrice": 29.99,
    "StartDateUTC": "2016-01-03T00:00:00",
    "StopDateUTC": "2016-01-09T00:00:00"
}
```

>
> Example Response
>

```
HTTP 201 Content-Type: application/json
{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": false,
    "PricingInformationId": 16445,
    "SalePrice": 29.99,
    "StartDateUTC": "2016-01-03T00:00:00",
    "StopDateUTC": "2016-01-09T00:00:00"
}
```

## Updating Pricing at Location Level

Updating the price of a Product for **one** Locations in the Company involves...

1. [Getting the Catalog Item Identifier](#step-1---getting-the-catalog-item-identifier-1)
2. [Getting the Location Identifier](#step-2---getting-the-location-identifier-1)
3. [Updating the Pricing](#step-3---updating-the-pricing)

### Step 1 - Getting the Catalog Item Identifier

Before you can update Pricing, you must know the Catalog Item Identifier associated with the Product.

This value is not shown in Endless Aisle, so you will need to search your [Catalog](http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog) using [Searching for Products](/api/catalog/#searching-for-products).

An example of this request is already provided in [Getting the Product Slug](/guides/ea-guide-content#step-1---getting-the-product-slug).

From the response you can see the `CatalogItemId` of the Product is `bb54cb25-e1df-4710-9e05-c2473192cc99`.

## Step 2 - Getting the Location Identifier

Before you can update a pricing for a Location, you must get its Identifier.

We can use [Getting All Locations for a Company](/api/company-tree/#getting-all-locations-for-a-company) to look for a Location in Chicago called Atrium Mall.

An example of this request is already provided in [Getting the Location Identifier](#step-2---getting-the-location-identifier).

From the response, you can see the `Id` of Atrium Mall is `14239`.

## Step 3 - Updating the Pricing

We can now update the Pricing using [Creating or Updating Product Pricing at Location Level](/api/pricing/#creating-or-updating-product-pricing-at-location-level).

Note that the `CompanyId` and `EntityId` are **different values**.

>
> Example Request
>

```
POST https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14239)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14239,
    "FloorPrice": 49.99,
    "IsDiscountable": false,
    "OriginalPrice": null,
    "PricingTermId": null,
    "RegularPrice": 39.99
}
```

>
> Example Response
>

```
HTTP 201 Content-Type: application/json
{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14239,
    "FloorPrice": 49.99,
    "IsDiscountable": false,
    "OriginalPrice": null,    
    "OverridePrice": null,
    "OverridePriceId": null,
    "PricingTermId": null,
    "RegularPrice": 39.99
}
```

## Updating Pricing at Company Level

Updating the price of a Product for **all** Locations in the Company involves...

1. [Getting the Catalog Item Identifier](#step-1---getting-the-catalog-item-identifier-1)
2. [Updating the Pricing](#step-2---updating-the-pricing)

### Step 1 - Getting the Catalog Item Identifier

Before you can update Pricing, you must know the Catalog Item Identifier associated with the Product.

This value is not shown in Endless Aisle, so you will need to search your [Catalog](http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog) using [Searching for Products](/api/catalog/#searching-for-products).

An example of this request is already provided in [Getting the Product Slug](/guides/ea-guide-content#step-1---getting-the-product-slug).

From the response you can see the `CatalogItemId` of the Product is `bb54cb25-e1df-4710-9e05-c2473192cc99`.

### Step 2 - Updating the Pricing

We can now update the Pricing using [Creating or Updating Product Pricing at Company Level](/api/pricing/#creating-or-updating-product-pricing-at-company-level).

Note that the `CompanyId` and `EntityId` are the **same value**.

>
> Example Request
>

```
POST https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14146,
    "FloorPrice": 49.99,
    "IsDiscountable": false,
    "OriginalPrice": null,    
    "PricingTermId": null,
    "RegularPrice": 39.99
}
```

>
> Example Response
>

```
HTTP 201 Content-Type: application/json
{
    "Id": 16445,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14146,
    "FloorPrice": 49.99,
    "IsDiscountable": false,
    "OriginalPrice": null,    
    "OverridePrice": 3.99,
    "OverridePriceId": null,
    "PricingTermId": null,
    "RegularPrice": 39.99
}
```

## Updating Availability 

Updating the inventory availability of a Product involves...

1. [Getting the Catalog Item Identifier](#step-1---getting-the-catalog-item-identifier-3)
2. [Getting the Location Identifier](#step-2---getting-the-location-identifier-2)
3. [Updating Availability](#step-3---updating-availability)

### Step 1 - Getting the Catalog Item Identifier

Before you can update availability, you must know the Catalog Item Identifier associated with the Product.

This value is not shown in Endless Aisle, so you will need to search your [Catalog](http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog) using [Searching for Products](/api/catalog/#searching-for-products).

An example of this request is already provided above om [Getting the Product Slug](/guides/ea-guide-content#step-1---getting-the-product-slug).

From the response you can see the Catalog Item Identifier of the Product is `bb54cb25-e1df-4710-9e05-c2473192cc99`.

### Step 2 - Getting the Location Identifier

Before you can update availability for a Location, you must get its Identifier.

We can use [Getting All Locations for a Company](/api/company-tree/#getting-all-locations-for-a-company) to look for a Location in Chicago called Atrium Mall.

An example of this request is already provided in [Getting the Location Identifier](#step-2---getting-the-location-identifier).

From the response, you can see the `Id` of Atrium Mall is `14239`.

### Step 3 - Updating Availability

Finally, you can update availability using [Configuring Availability](/api/availability/#configuring-availability) and the Identifiers from the previous steps.

>
> Example Request
>

```
POST https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "bb54cb25-e1df-4710-9e05-c2473192cc99",
    "EntityId": 14239,
    "Quantity": 1,
    "IsDropShippable": false,
    "IsSerialized": false
}
```

>
> Example Response
>

```
HTTP 201 Content-Type: application/json
{
    "Id": "bb54cb25-e1df-4710-9e05-c2473192cc99",
    "EntityId": 14239,
    "Quantity": 1,
    "IsDropShippable": false,
    "IsSerialized": false
}
```