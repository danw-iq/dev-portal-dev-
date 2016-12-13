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

One of the most common Endless Aisle integration scenarios involves **creating** and **updating** Product content. 

The sections below will describe how to accomplish this using rules, [Product Library](http://developers.iqmetrix.com/concepts/product-library/#product-library) and your [Catalog](http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog).

# Creating a Product

The goal of the scenario is to create a Master Product in Endless Aisle. 

For this scenario, the Product will be a girls' black dress shoe manufactured by Rampage named "Caitlin Mary Jane Shoe - Youth".

Creating a new product in Endless Aisle involves:

1. [Classifying the Product](#step-1---classifying-the-product)
2. [Creating a Rule](#step-2---creating-a-rule)
3. (Optional) [Determining Product Manufacturer](#optional-step-3---determining-product-manufacturer)
4. [Getting Field Definitions](#step-4---getting-field-definitions)
5. [Uploading Assets](#step-5---uploading-assets)
6. (Optional) [Selecting Colors](#optional-step-6---selecting-colors)
7. (Optional) [Creating a Swatch](#optional-step-7---creating-a-swatch)
8. [Creating a Product Structure](#step-8---creating-a-product-structure)
9. [Adding the Product to your Catalog](#step-9---adding-the-product-to-your-catalog)

## Step 1 - Classifying the Product

For a Product to appear in Endless Aisle, it must have a Classification.

To get a list of Classifications, you can use [Getting a Classification Tree](/api/classification-tree/#getting-a-classification-tree).

The URI parameter `ClassificationTreeId` will be provided in your **onboarding package**. 

For this example you can use the Apparel & Accessories Classification Tree, which has an `Id` of `88`.

>
> Example Request
>

```
GET https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(88)
Authorization: Bearer (Access Token)
Accept: application/json
```

>
> Example Response
>

As the Product is a youth dress shoe, the most appropriate Classification from the response is **Dress**, with Id `166`.

```
HTTP 200 Content-Type: application/json
{
  "Id": 88,
  "Name": "Apparel & Accessories",
  "IsCanonical": false,
  "Description": "",
  "Owner": null,
  "Categories": [
    {
      "Id": 113,
      "Name": "Shoes",
      "Order": 2,
      "Categories": [
        {
          "Id": 114,
          "Name": "Kids",
          "Order": 1,
          "Categories": [
            {
              "Id": 116,
              "Name": "Girls",
              "Order": 2,
              "Categories": [
                {
                  "Id": 123,
                  "Name": "Youth",
                  "Order": 3,
                  "Categories": [],
                  "Classifications": [
                    {
                      "Id": 166,
                      "Name": "Dress",
                      "Order": 5,
                      "ProductTemplate": {
                        "Id": 19,
                        "Name": "Kid's Shoes"
                      }
                    },
                    ...
                  ]
                },
                ...
              ],
              "Classifications": []
            },
            ...
          ],
          "Classifications": []
        },
        ...
      ],
      "Classifications": []
    },
    ...
  ],
  "Classifications": [],
  "Version": 122
}
```

## Step 2 - Creating a Rule

Products can be added to an Endless Aisle display **manually** or **automatically** through rules.

**Manually** adding products must be done through [iQmetrix Hub](https://hub.iqmetrix.net/).

**Automatically** adding products involves creating **rules** in [iQmetrix Hub](https://hub.iqmetrix.net/) using Classification, Manufacturer or Availability.

Once these rules are set up, any products added to your Catalog matching the rule criteria will **automatically** be added to Endless Aisle in the configured category. 

>
> Example
>

To ensure the Product created in this guide is added to Endless Aisle, one rule you can use is:

**Figure 2**: Illustrates a rule in Endless Aisle

<img class="popUpImage" src="http://developers.iqmetrix.com/images/ea-rule-add.PNG" alt="Adding a Rule to Endless Aisle" />

Using this rule, any Product added to your Catalog with a **Classification** of **Shoes** will automatically be added to Endless Aisle, as well as any Product's with a Classification that is a child of Shoes. This includes the Dress Classification selected in Step 1.

## (Optional) Step 3 - Determining Product Manufacturer

Products in Product Library may have an associated Manufacturer.

To find the appropriate Manufacturer for the Product, you can use [Getting All Manufacturers](/api/entity-store/#getting-all-manufacturers).

 <div class='bs-callout alert-success'>
If you can't find a matching Manufacturer, contact <a href="mailto:apisupport@iqmetrix.com?subject=Support">API Support</a>
</div>

>
> Example Request
>

```
GET https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers
Authorization: Bearer (Access Token)
Accept: application/json
```

>
> Example Response
>

For this example, the Product is manufactured by the company Rampage. From the results, you can see the matching Manufacturer has an `Id` of `11706`.

```
HTTP 200 Content-Type: application/json
[
  {
    "Id": 11706,
    "Name": "Rampage",
    "Description": "",
    "Role": "Manufacturer",
    "SortName": "rampage",
    "Version": 1,
    "CreatedUtc": "2014-07-28T20:52:40.374Z",
    "LastModifiedUtc": "2014-07-28T20:52:40.374Z",
    "CorrelationId": null,
    "ClientEntityId": null,
    "TypeId": null,
    "Logo": null
  },
  ...
]
```

## Step 4 - Getting Field Definitions

Product properties such as name, short description, and material are defined using [FieldDefinitions](http://developers.iqmetrix.com/api/field-definitions/#fielddefinition).

To give the Product a name, you must find the appropriate [FieldDefinition](http://developers.iqmetrix.com/api/field-definitions/#fielddefinition) using [Getting All Field Definitions](http://developers.iqmetrix.com/api/field-definitions/#getting-all-field-definitions).

>
> Example Request
>

```
GET https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
```

>
> Example Response
>

From the result you can see the FieldDefinition for Product Name has an `Id` of `1`. 

```
HTTP 200 Content-Type: application/json
[
    {
        "Id": 1,
        "StringId": "Product Name",
        "InputType": "TestSingleLine",
        "IsRequired": true,
        "DisplayName": "Product Name",
        "Options": [ ]
    },
    {
      "Id": 2,
      "StringId": "Short Description",
      "InputType": "TextSingleLine",
      "IsRequired": false,
      "LanguageInvariantUnit": "",
      "DisplayName": "Short Description",
      "Unit": "",
      "Options": [],
      "LanguageInvariantName": "Short Description"
    },
    {
      "Id": 3,
      "StringId": "Band Material",
      "InputType": "TextSingleLine",
      "IsRequired": false,
      "LanguageInvariantUnit": "",
      "DisplayName": "Band Material",
      "Unit": "",
      "Options": [],
      "LanguageInvariantName": "Band Material"
    },    
    ...
]
```

## Step 5 - Uploading Assets

To ensure the Product has an image in Endless Aisle, you can upload an asset for the product using [Creating an Asset](/api/assets/#creating-an-asset).

For this example, you can upload the following image of the Product:

**Figure 3**: Illustrates a Product Detail View in Endless Aisle

<img class="popUpImage" src="http://developers.iqmetrix.com/images/MJYouth.jpg" alt="Mary Jane Youth Shoe" />

>
> Example Request
>

```
POST https://amsdemo.iqmetrix.net/assets
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: multipart/form-data
{
  "Filename": (File)
}
```

>
> Example Response
>

The `id` of the crated Asset, `afa0e6f2-52d5-4715-9fa5-e6249e4b61f1`, will be used in a later step.

```
HTTP 201 Content-Type: application/json
{
  "width": 300,
  "height": 300,
  "id": "afa0e6f2-52d5-4715-9fa5-e6249e4b61f1",
  "href": "https://amsdemostorage.blob.core.windows.net/assets/afa0e6f2-52d5-4715-9fa5-e6249e4b61f1.jpg",
  "md5Checksum": "80dcbb57175d09417ba3b19a6c0dacb6",
  "name": "MJYouth.jpg",
  "mimeType": "image/jpeg",
  "success": true
}
```

## (Optional) Step 6 - Selecting Colors

Color Tags are used for filtering and sorting products in Endless Aisle.

You can select a list of colors that match the product using [Getting All Color Tags](/api/product-structure/#getting-all-color-tags).

>
> Example Request
>

```
GET https://productlibrarydemo.iqmetrix.net/v1/ColorTags
Authorization: Bearer (Access Token)
Accept: application/json
```

>
> Example Response
>

As the product is primarily black, you can use the ColorTag with Id `1`. If the product had multiple colors, you could select multiple ColorTags. 

```
HTTP 200 Content-Type: application/json
{
  "ColorTags": [
    {
      "Id": 1,
      "Name": "Black",
      "ColorCode": "#303232"
    },
    {
      "Id": 2,
      "Name": "Blue",
      "ColorCode": "#3180BA"
    },
    {
      "Id": 3,
      "Name": "Brown",
      "ColorCode": "#673D11"
    },
    ...
  ]
}
```

## (Optional) Step 7 - Creating a Swatch

Swatches can be used to create an icon to display on a screen next to a color name showing the actual color of the product, as shown below.

**Figure 4**: Illustrates a Color Swatch in Endless Aisle

<img class="popUpImage" src="http://developers.iqmetrix.com/images/ea-color-swatch.PNG" alt="Endless Aisle Color Swatch" />

Swatches can be described using either a valid hex code or an Asset.

For simplicity, you can use the standard hex code for black, `#000000`. 

## Step 8 - Creating a Product Structure

Using the values gathered in the previous steps, you can create a MasterProduct with [Creating a Master Product](http://developers.iqmetrix.com/api/product-structure/#creating-a-master-product).

>
> Example Request
>

```
POST https://productlibrarydemo.iqmetrix.net/v1/ProductDocs
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Classification": {
    "TreeId": 88,
    "Id": 166
  },
  "ColorDefinitions": [
      {
        "Name": "Black",
        "ColorTagIds": [ 1 ],
        "Swatch": {
          "Type": "ColorCode",
          "ColorCode": "#000000"
        }    
      }
  ], 
  "Manufacturer": {
    "Id": 11706
  },
  "OwnerEntityId": 14146,
  "RootRevision": {
    "Assets": [
        {
            "Id": "afa0e6f2-52d5-4715-9fa5-e6249e4b61f1",
            "Name": "MJYouth.jpg",
            "MimeType": "image/jpeg"
        }
    ],  
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "Caitlin Mary Jane Shoe - Youth"
        }
    ]
  }
}
```

>
> Example Response
>

The `Id` value of the created Master Product, `1931`, will be used in the next step.

```
HTTP 201 Content-Type: application/json
{
  "Id": 1931,
  "RootRevision": {
    "Variations": [],
    "IsArchived": false,
    "FieldValues": [
      {
        "FieldDefinitionId": 1,
        "LanguageInvariantValue": "Caitlin Mary Jane Shoe - Youth"
      },
      ...
    ],
    "IdentifierGroups": [],
    "ColorDefinitionId": null
  },
  "Classification": {
    "TreeId": 88,
    "Id": 166,
    "Name": "Dress"
  },
  "Manufacturer": {
    "Id": 11706,
    "Name": "Rampage"
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
  "Owner": {
    "Id": 14146,
    "Name": "Kentel Corp"
  },
  "ColorDefinitions": [
    {
      "Id": "2ad59553-4d62-447e-8385-eb347159b36a",
      "Name": "Black",
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
        "AssetId": null,
        "ColorCode": "#000000"
      }
    }
  ],
  "CreatedUtc": "2016-04-05T18:58:05.911Z",
  "LastModifiedUtc": "2016-04-05T18:58:05.911Z",
  "Version": 1
}
```

## Step 9 - Adding the Product to your Catalog

To add the Master Product to Endless Aisle, it must first be added to your [Catalog](http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog).

To do this, you must determine the **Slug** of the Product using the [Product Slug Formula](/api/catalog/#product-slug). For a Master Product, this is simply `M{Id}`, or `M1931` for the Master Product created in Step 8.

Alternatively, you can search for the Product Slug using [Searching for Products by Identifier](/api/product-library/#searching-for-products-by-identifier).

>
> Example Request
>

```
POST https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Slug": "M1931"
}
```

>
> Example Response
>

```
HTTP 201 Content-Type: application/json
{
    "CatalogItemId": "bb54cb25-e1df-4710-9e05-c2473192cc99",
    "IsArchived": false,
    "DateAddedUtc": "2016-08-09T20:12:05.987",
    "DateUpdatedUtc": "2016-08-09T20:12:05.99",
    "RmsId": null,
    "Slug": "M1931"
}
```

# Updating a Product

The goal of the scenario is to update a Master Product in Endless Aisle. 

For this scenario, you will update the name of the Product that was created in [Creating a Product](#creating-a-product).

Updating a Product in Endless Aisle involves:

1. [Getting the Product Slug](#step-1---getting-the-product-slug)
2. [Determining the Product Type](#step-2---determining-the-product-type)
3. [Updating the Product](#step-3---updating-the-product)

## Step 1 - Getting the Product Slug

To update a Product, you must know the Product's Slug.

This value is not shown in Endless Aisle, so you will need to search your [Catalog](http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog) using [Searching for Products](/api/catalog/#searching-for-products). 

>
> Example Request
>

This request searches your Catalog for a Product using the search criteria "Caitlin". 

```
GET https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=Caitlin
Authorization: Bearer (Access Token)
Accept: application/json
```

>
> Example Response
>

From the response you can see the Product's Slug is `M1931`.

```
HTTP 200 Content-Type: application/json
{
  "Items": [
    {
      "Name": "Caitlin Mary Jane Shoe - Youth",
      "CanonicalClassification": {
        "Id": 88,
        "Name": "Appare; & Accessories",
        "ParentCategories": [
          {
            "Id": 166,
            "Name": "Dress"
          }
        ]
      },
      "ClassificationTreeId": 88,
      "ColorDefinition": null,
      "HeroShotId": null,
      "Msrp": null,
      "Manufacturer": null,
      "Vendors": [],
      "Slug": "M1931",
      "IsLinkedToCuratedProduct": false,
      "ProductVersion": 1,
      "IsDropShippable": false,
      "ShortDescription": "",
      "IsMasterProduct": true,
      "VariationId": null,
      "DateAddedUtc": "2016-04-19T16:09:56.69",
      "Identifiers": [],
      "CatalogItemId": "bb54cb25-e1df-4710-9e05-c2473192cc99",
      "CompanyId": 14146
    },
    ...
  ],
  "Facets": {
    "Manufacturers": [...],
    "Vendors": [...],
    "ClassificationAndCategories": [
      {
        "Count": 6,
        "Item": 416
      }
    ]
  },
  "MetaData": {
    "Page": 1,
    "PageSize": 20,
    "TotalResults": 10
  }
}
```

## Step 2 - Determining the Product Type

Before you can update the Product, you must determine if it is a Master Product, Variation or Revision.

With the Product Slug and the [Product Slug Formula](/api/catalog/#product-slug), you can determine which request to use to update the Product.

**Table 2:** Using Slug Format to Determine Product Type

| Slug Format | Type | Request |
|:------------|:-----|:--------|
| M{X} | Master Product | [Updating a Master Product](/api/product-structure/#updating-a-master-product) |
| M{X}-V{Y} | Variation | [Updating a Variation](/api/product-structure/#updating-a-variation) |
| M{X}-E{Y} or <br/> M{X}-E{Y}-R{Z} or<br/> M{X}-V{Y}-E{Z} or<br/> M{X}-V{Y}-E{Z}-R{A} | Revision | [Updating a Revision](/api/product-structure/#updating-a-revision) |

Using the table, you can see that the Product is a Master Product.

### Step 3 - Updating the Product

Using the values gathered in the previous steps, you can update the product using [Updating a Master Product](/api/product-structure/#updating-a-master-product).

>
> Example Request
>

```
PUT https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(1931)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "IsArchived": false,
    "FieldValues": [
      {
        "FieldDefinitionId": 1,
        "LanguageInvariantValue": "Caitlin Mary Jane Shoe"
      }
    ],
    "IdentifierGroups": [],
    "ColorDefinitionId": null
}
```

>
> Example Response
>

```
HTTP 204 Content-Type: application/json
```
