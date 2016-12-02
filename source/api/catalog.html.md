---
title:  Catalog
permalink: /api/catalog/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

Retailers can select products from the {{ProductLibrary_Concept}} to create a **Retailer Catalog**, a collection of products that can be sold.

### Product Slug

A **slug** is a generated identifier for a Product within the Product Library, determined using its {{ProductStructure_Concept}} and the following formula:

```
M{ProductDocumentId}-V{VariationId}-E{EntityId}-R{Region}
```

* ProductDocumentId - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a>
* VariationId - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#variation'>Variation</a>
* EntityId - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> or <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a> associated with a Revision, as described in [Creating a Revision](/api/product-structure/#creating-a-revision)
* Region - Must contain 2 or 4 characters, either a Country Code, or Country Code plus a State Code, as described in [Creating a Revision](/api/product-structure/#creating-a-revision)

##### Example

    M1-V2-E3-RCABC

Using the slug in the example above, we can determine the following:

* The identifier for the <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a> for this Product is **1**
* This Revision was made from a Variation, as there is a **V** present
* The Company or Carrier that owns this Revision has an Id of `3`
* This Revision is specific to British Columbia (`BC`), Canada (`CA`)



# Endpoints


* Sandbox: <a href="https://catalogsdemo.iqmetrix.net/v1">https://catalogsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://catalogs.iqmetrix.net/v1">https://catalogs.iqmetrix.net/v1</a>



# Resources


## CatalogItem

Archived CatalogItem resources can still be updated and retrieved individually, but are excluded from search results

```json
{
	"CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
	"CatalogSku": "21Z8F4AQ",
	"DateAddedUtc": "2016-08-09T20:12:05.987",
	"DateUpdatedUtc": "2016-08-09T20:12:05.99",
	"IsArchived": "false",
	"RmsId": "1",
	"Slug": "M1248-V1",
	"ExtendedAttributes": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| CatalogItemId (`GUID`) | Unique identifier | 
| CatalogSku (`String`) | SKU | 
| DateAddedUtc (`DateTime`) | Date this Product was added to the catalog, in UTC | 
| DateUpdatedUtc (`DateTime`) | Date this Product was last updated, in UTC | 
| IsArchived (`Boolean`) | A flag to indicate if this CatalogItem is Archived. When archived, this CatalogItem is excluded from search results | 
| RmsId (`String`) | Identifier for the CatalogItem in an external inventory system | 
| Slug (`String`) | Unique identifier for a [Product](#product) | 
| ExtendedAttributes (`Array[[catalog](/api/attribute/#Attribute)]`) | Attributes | 
| *SourceIds (`GUID`)* | *Reserved for future use* | |
| *BatchTracking (`Boolean`)* | *Reserved for future use* | |
| *MeasurementType (`String`)* | *Reserved for future use* | |

## Attribute

Extended attributes are unvalidated extra properties that can be put on a CatalogItem.

```json
{
	"Name": "Country of Manufacture",
	"Value": "China"
}
```

| Name | Description |
|:-----|:------------|
| Name (`String(250)`) | Attribute name | 
| Value (`String(250)`) | Attribute value | 

## CatalogSearchResult

A CatalogSearchResult resource is used to return information about Product resources that match a given criteria, defined in the request.

```json
{
	"Items": [
		{
		"Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
	"CanonicalClassification": [
		{
		"Id": "4",
	"Name": "Smartphones",
	"ParentCategories": [
		{
		"Id": "2",
	"Name": "Devices",
	"CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
	"CatalogSku": "21Z8F4AQ",
	"ClassificationTreeId": "1",
	"ColorDefinition": [
		{
		"Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
	"Name": "Black Sapphire",
	"ColorTags": [
		{
		"Id": "1",
	"Name": "Black",
	"ColorCode": "#303232",
	"Swatch": "undefined",
	"CompanyId": "14146",
	"DateAddedUtc": "2011-10-14T12:00:00.000",
	"HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
	"Identifiers": "undefined",
	"IsLinkedToCuratedProduct": "true",
	"IsDropShippable": "true",
	"IsMasterProduct": "false",
	"Manufacturer": [
		{
		"Id": "13149",
	"Name": "OtterBox",
	"Msrp": [
		{
		"Amount": "100",
	"CurrencyCode": "USD",
	"ProductVersion": "1",
	"ShortDescription": "Next is Now",
	"Slug": "M1248-V1",
	"VariationId": "1",
	"Vendors": [
		{
		"Id": "14107",
	"Name": "NOZAMA Inc.",
	"Facets": [
		{
		"ClassificationAndCategories": [
		{
		"Count": "1",
	"Item": "4",
	"Manufacturers": "undefined",
	"Vendors": "undefined",
	"MetaData": [
		{
		"Page": "1",
	"PageSize": "20",
	"TotalResults": "5"
}
```

| Name | Description |
|:-----|:------------|
| Items (`Array[object]`) | Products matching the search criteria | 
| Items.Name (`String`) | Name | 
| Items.CanonicalClassification (`object`) | ClassificationTree details | 
| Items.CanonicalClassification.Id (`Integer`) | Identifier for the [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | 
| Items.CanonicalClassification.Name (`String`) | Name of the Classification/Category | 
| Items.CanonicalClassification.ParentCategories (`Array[object]`) | List of Parent Categories | 
| Items.CanonicalClassification.ParentCategories.Id (`Integer`) | Identifier | 
| Items.CanonicalClassification.ParentCategories.Name (`String`) | Name | 
| Items.CatalogItemId (`GUID`) | Unique identifier for the CatalogItem | 
| Items.CatalogSku (`String`) | SKU | 
| Items.ClassificationTreeId (`Integer`) | Identifier for the [ClassificationTree](/api/classification-tree/#classificationtree) | 
| Items.ColorDefinition (`object`) | Information about the color of the Product | 
| Items.ColorDefinition.Id (`GUID`) | Unique identifier | 
| Items.ColorDefinition.Name (`String`) | Name | 
| Items.ColorDefinition.ColorTags (`Array[object]`) | Color information | 
| Items.ColorDefinition.ColorTags.Id (`Integer`) | Identifier | 
| Items.ColorDefinition.ColorTags.Name (`String`) | Name | 
| Items.ColorDefinition.ColorTags.ColorCode (`String`) | A valid Hex code representing this color | 
| Items.ColorDefinition.Swatch (`[catalog](/api/swatch/#Swatch)`) | An icon to display on a screen next to a color showing the actual color of the product. Can be provided as an image Asset or hex code | 
| Items.CompanyId (`Integer`) | Identifier for the Company | 
| Items.DateAddedUtc (`DateTime`) | Date this Product was added to the catalog, in UTC | 
| Items.HeroShotId (`GUID`) | [Hero Shot](/api/glossary/#hero-shot) identifier | 
| Items.Identifiers (`Array[[catalog](/api/identifier/#Identifier)]`) | Identifiers | 
| Items.IsLinkedToCuratedProduct (`Boolean`) | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | 
| Items.IsDropShippable (`Boolean`) | A flag to indicate if this Product can be shipped. This value is a best guess and should not be used for tracking dropshippable products | 
| Items.IsMasterProduct (`Boolean`) | A flag to indicate if this is a Master Product | 
| Items.Manufacturer (`object`) | [Manufacturer](/api/entity-store/#manufacturer) information for the Product | 
| Items.Manufacturer.Id (`Integer`) | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | 
| Items.Manufacturer.Name (`String`) | Name of the [Manufacturer](/api/entity-store/#manufacturer) | 
| Items.Msrp (`object`) | Manufacturer suggested retail price information for the Product | 
| Items.Msrp.Amount (`Decimal`) | Manufacturers suggested retail price | 
| Items.Msrp.CurrencyCode (`String`) | Currency. For a list of acceptable values, see <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> | 
| Items.ProductVersion (`Integer`) | Latest revision number | 
| Items.ShortDescription (`String`) | Short Description | 
| Items.Slug (`String`) | URL friendly identifier for the Product | 
| Items.VariationId (`Integer`) | Identifier for the [Variation](/concepts/product-structure/#Variations) this Product represents | 
| Items.Vendors (`Array[object]`) | Vendors for the Product | 
| Items.Vendors.Id (`Integer`) | Identifier for the [Supplier](/api/entity-store/#supplier) | 
| Items.Vendors.Name (`String`) | Name of the [Supplier](/api/entity-store/#supplier) | 
| Facets (`object`) | Summary of Manufacturer and Vendor information for the Items | 
| Facets.ClassificationAndCategories (`Array[object]`) | Count of Classification and Categories in results | 
| Facets.ClassificationAndCategories.Count (`Integer`) | Number of items in the response with the Classification or Category specified in Item | 
| Facets.ClassificationAndCategories.Item (`Integer`) | Identifier of a Classification or Category | 
| Facets.Manufacturers (`Array[[catalog](/api/manufacturer/#Manufacturer)]`) | Manufacturer information for the Items | 
| Facets.Vendors (`Array[[catalog](/api/manufacturer/#Manufacturer)]`) | Vendor information for the Items | 
| MetaData (`object`) | Data representing pagination details | 
| MetaData.Page (`Integer`) | Page of Items to be included in the resource | 
| MetaData.PageSize (`Integer`) | Number of Items included in the resource | 
| MetaData.TotalResults (`Integer`) | Number of Items matching the search criteria | 

## Product

```json
{
	"Id": "M1248-V1",
	"Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
	"Assets": "undefined",
	"CanonicalClassification": "undefined",
	"ColorDefinition": "undefined",
	"DateAddedUtc": "2016-08-09T20:12:05.987",
	"DateUpdatedUtc": "2016-08-09T20:12:05.99",
	"Entity": [
		{
		"Id": "14146",
	"Name": "Kentel Corp",
	"ExtendedAttributes": "undefined",
	"HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
	"HeroShotUri": "https://imagehost/images/44f60963-5515-44bc-9509-71aef6463580",
	"IsArchived": "false",
	"IsLinkedToCuratedProduct": "true",
	"IsSaleable": "true",
	"LongDescription": "The world’s first dual-edge display was born from a need to create something new...",
	"Manufacturer": [
		{
		"Id": "13149",
	"Name": "OtterBox",
	"ManufacturerSkus": "undefined",
	"MasterProductId": "1248",
	"MSRP": [
		{
		"Amount": "100",
	"CurrencyCode": "USD",
	"Owner": [
		{
		"Id": "14146",
	"Name": "Kentel Corp",
	"Region": "undefined",
	"ReleaseDate": "2011-10-14T12:00:00.000",
	"RmsId": "1",
	"ShortDescription": "Next is Now",
	"Specifications": [
		{
		"Name": "Color",
	"Fields": "undefined",
	"UpcCodes": [
		{
		"Value": "874688002478/16W",
	"Description": "UPC",
	"Entity": "2",
	"VariationId": "1",
	"VariationInfo": "undefined",
	"VendorSkus": "undefined",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`String`) | Identifier | 
| Name (`String`) | Name | 
| Assets (`Array[[catalog](/api/asset/#Asset)]`) | Asset information | 
| CanonicalClassification (`[catalog](/api/canonicalclassification/#CanonicalClassification)`) | ClassificationTree details | 
| ColorDefinition (`[catalog](/api/colordefinition/#ColorDefinition)`) | Information about the color of the Product | 
| DateAddedUtc (`DateTime`) | Date this Product was added to the catalog, in UTC | 
| DateUpdatedUtc (`DateTime`) | Date this Product was last updated, in UTC | 
| Entity (`object`) | Entity information, used for Entity revisions | 
| Entity.Id (`Integer`) | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | 
| Entity.Name (`String`) | Entity name | 
| ExtendedAttributes (`Array[[catalog](/api/attribute/#Attribute)]`) | Attributes | 
| HeroShotId (`GUID`) | [Hero Shot](/api/glossary/#hero-shot) identifier | 
| HeroShotUri (`String`) | URI to a Hero Shot Asset | 
| IsArchived (`Boolean`) | A flag to indicate if this Product is archived | 
| IsLinkedToCuratedProduct (`Boolean`) | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | 
| IsSaleable (`Boolean`) | A flag to indicate if this product can be sold | 
| LongDescription (`String`) | Long Description | 
| Manufacturer (`object`) | [Manufacturer](/api/entity-store/#manufacturer) information for the Product | 
| Manufacturer.Id (`Integer`) | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | 
| Manufacturer.Name (`String`) | Name of the [Manufacturer](/api/entity-store/#manufacturer) | 
| ManufacturerSkus (`Array[[catalog](/api/sku/#Sku)]`) | Manufacturer SKUs | 
| MasterProductId (`Integer`) | Identifier for the [Master Product](/api/product-structure/#masterproduct) | 
| MSRP (`object`) | Manufacturers suggested retail price information | 
| MSRP.Amount (`Decimal`) | Manufacturers suggested retail price | 
| MSRP.CurrencyCode (`String`) | Currency. For a list of acceptable values, see <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> | 
| Owner (`object`) | Owner information used to designate if this is a public product (null) or private (not-null) | 
| Owner.Id (`Integer`) | For private products, Identifier of the Company that owns this Product | 
| Owner.Name (`String`) | For private products, Name of the Company that owns this Product | 
| Region (`[catalog](/api/region/#Region)`) | Region information, for Regional Carrier Revisions | 
| ReleaseDate (`DateTime`) | Release Date, in UTC | 
| RmsId (`String`) |  | 
| ShortDescription (`String`) | Short Description | 
| Specifications (`Array[object]`) | Details such as color, dimension, etc | 
| Specifications.Name (`String`) | Name | 
| Specifications.Fields (`[catalog](/api/field/#Field)`) | Group of ProductFields | 
| UpcCodes (`Array[object]`) | UPC codes | 
| UpcCodes.Value (`String`) | Name | 
| UpcCodes.Description (`String`) | Description | 
| UpcCodes.Entity (`Integer`) | Identifier of an Entity associated with this UPC code | 
| VariationId (`Integer`) | Identifier for the Variation | 
| VariationInfo (`Array[[catalog](/api/variationinformation/#VariationInformation)]`) | [Variation](/concepts/product-structure/#variations) information for the Product | 
| VendorSkus (`Array[[catalog](/api/sku/#Sku)]`) | Vendor SKUs | 
| Version (`Integer`) | Latest revision number | 

## CanonicalClassification

```json
{
	"Id": "4",
	"Name": "Smartphones",
	"ParentCategories": [
		{
		"Id": "2",
	"Name": "Devices",
	"TreeId": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier for the [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | 
| Name (`String`) | Name of the Classification/Category | 
| ParentCategories (`Array[object]`) | List of Parent Categories | 
| ParentCategories.Id (`Integer`) | Identifier | 
| ParentCategories.Name (`String`) | Name | 
| TreeId (`Integer`) | Identifier for the <a href='http://developers.iqmetrix.com/api/classification-tree/#classificationtree'>ClassificationTree</a> | 

## ColorDefinition

A ColorDefinition allows you to define the available Colors for a Product

```json
{
	"Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
	"Name": "Black Sapphire",
	"ColorTagIds": "1",
	"ColorTags": [
		{
		"Id": "1",
	"Name": "Black",
	"ColorCode": "#303232",
	"Swatch": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| Name (`String`) | Name | 
| ColorTagIds (`Array`) | List of [ColorTag](/api/product-structure/#colortag) Identifiers | 
| ColorTags (`Array[object]`) | Color information | 
| ColorTags.Id (`Integer`) | Identifier | 
| ColorTags.Name (`String`) | Name | 
| ColorTags.ColorCode (`String`) | A valid Hex code representing this color | 
| Swatch (`[catalog](/api/swatch/#Swatch)`) | An icon to display on a screen next to a color showing the actual color of the product. Can be provided as an image Asset or hex code | 

## Swatch

```json
{
	"Type": "ColorCode",
	"AssetId": "null",
	"ColorCode": "#C0C8D0"
}
```

| Name | Description |
|:-----|:------------|
| Type (`String`) | Acceptable values are Asset, ColorCodes or Empty | 
| AssetId (`GUID`) | If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored | 
| ColorCode (`String`) | If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored | 

## Asset

```json
{
	"Id": "732130d2-b673-461c-812b-f2b614d6076e",
	"Name": "iqmetrix.jpg",
	"Uri": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
	"Type": "Image",
	"IsHidden": "true"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| Name (`String`) | File name | 
| Uri (`String`) | URL that points to an actual file where the digital asset is stored | 
| Type (`String`) | Type of asset | 
| IsHidden (`Boolean`) | A flag to indicate that this Asset exists on the product but should not be seen on a UI | 

## Sku

```json
{
	"Value": "JBLPULSEBLKAM",
	"Description": "",
	"Entity": [
		{
		"Id": "14146",
	"Name": "Kentel Corp"
}
```

| Name | Description |
|:-----|:------------|
| Value (`String`) | Value | 
| Description (`String`) | Description | 
| Entity (`object`) | Identifier for an Entity this SKU is associated with | 
| Entity.Id (`Integer`) | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | 
| Entity.Name (`String`) | Entity name | 

## Region

```json
{
	"CountryCode": "CA",
	"CountryName": "Canada",
	"StateCode": "AB",
	"StateName": "British Columbia"
}
```

| Name | Description |
|:-----|:------------|
| CountryCode (`String`) | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | 
| CountryName (`String`) | Country name | 
| StateCode (`String`) | Code for the State in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | 
| StateName (`String`) | State name | 

## VariationInformation

```json
{
	"VariationId": "1",
	"Slug": "M1248-V1",
	"Fields": [
		{
		"FieldId": "1",
	"Name": "Product Name",
	"Value": "true"
}
```

| Name | Description |
|:-----|:------------|
| VariationId (`Integer`) | Identifier for a Variation | 
| Slug (`String`) | Identifier for the Variation | 
| Fields (`Array[object]`) | Fields which describe how the Variation differs from its parent | 
| Fields.FieldId (`Integer`) | Identifier for a [FieldDefinition](/api/field-definitions/#fielddefinition) | 
| Fields.Name (`String`) | Name | 
| Fields.Value (`String`) | Value to be used for this Field | 

## Identifier

```json
{
	"Sku": "EM-JE040-RA",
	"SkuType": "ManufacturerSku",
	"Entity": [
		{
		"Id": "14146",
	"Name": "Kentel Corp",
	"Description": "Manufacturer SKU"
}
```

| Name | Description |
|:-----|:------------|
| Sku (`String`) | Sku | 
| SkuType (`String`) | A string to indicate the type of Entity this Identifier is for. Acceptable values are: ManufacturerSku, VendorSku or UPC | 
| Entity (`object`) | Entity information for this Identifier | 
| Entity.Id (`Integer`) | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | 
| Entity.Name (`String`) | Entity name | 
| Description (`String`) | Description | 





# Requests



## <span class='get'>GET</span> All Catalog Items



> Definition

```
GET /Companies({CompanyId})/Catalog/Items
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Items
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllCatalogItems()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items");
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

public static CloseableHttpResponse GettingAllCatalogItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items', {
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
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CatalogSku": "21Z8F4AQ",
        "IsArchived": false,
        "DateAddedUtc": "2016-08-09T20:12:05.987",
        "DateUpdatedUtc": "2016-08-09T20:12:05.99",
        "RmsId": "1",
        "Slug": "M1248-V1",
        "ExtendedAttributes": [
            {
                "Name": "Country of Manufacture",
                "Value": "China"
            }
        ]
    }
]
```



 <ul><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>IsArchived</code> (Boolean) </li><li><code>DateAddedUtc</code> (Datetime) </li><li><code>DateUpdatedUtc</code> (Datetime) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li><li><code>ExtendedAttributes</code> (Array[[catalog](/api/attribute/#Attribute)]) </li><ul><li><code>Name</code> (String) </li><li><code>Value</code> (String) - Defaults to an empty string</li></ul><li><code>SourceIds</code> (Array) </li><li><code>BatchTracking</code> (Boolean) </li><li><code>MeasurementType</code> (String) </li></ul>



## <span class='post'>POST</span> a Catalog Item from Product Library



> Definition

```
POST /Companies({CompanyId})/Catalog/Items/
```

> Example Request

```javascript
POST /Companies(14146)/Catalog/Items/
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Slug": "M1248-V1",
    "RmsId": "1"
}'
```

```csharp
static IRestResponse AddingACatalogItemFromProductLibrary()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Slug\":\"M1248-V1\",\"RmsId\":\"1\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse AddingACatalogItemFromProductLibrary() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Slug\":\"M1248-V1\",\"RmsId\":\"1\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Slug\":\"M1248-V1\",\"RmsId\":\"1\"}";

response = RestClient.post 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/', body, {
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

<ul><li><code>Slug</code> (<strong>Required</strong>) - Unique identifier for a Product in Product Library</li><li><code>RmsId</code> (Optional) - Identifier for the CatalogItem in an external inventory system</li></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CatalogSku": "21Z8F4AQ",
    "IsArchived": false,
    "DateAddedUtc": "2016-08-09T20:12:05.987",
    "DateUpdatedUtc": "2016-08-09T20:12:05.99",
    "RmsId": "1",
    "Slug": "M1248-V1",
    "ExtendedAttributes": [
        {
            "Name": "Country of Manufacture",
            "Value": "China"
        }
    ]
}
```



 <ul><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>IsArchived</code> (Boolean) </li><li><code>DateAddedUtc</code> (Datetime) </li><li><code>DateUpdatedUtc</code> (Datetime) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li><li><code>ExtendedAttributes</code> (Array[[catalog](/api/attribute/#Attribute)]) </li><ul><li><code>Name</code> (String) </li><li><code>Value</code> (String) - Defaults to an empty string</li></ul><li><code>SourceIds</code> (Array) </li><li><code>BatchTracking</code> (Boolean) </li><li><code>MeasurementType</code> (String) </li></ul>



## <span class='get'>GET</span> Catalog Items By Subscription List



> Definition

```
GET /Companies({CompanyId})/Catalog/Items(SourceId={SubscriptionListId})
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Items(SourceId=43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(SourceId=43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingCatalogItemsBySubscriptionList()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(SourceId=43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
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

public static CloseableHttpResponse GettingCatalogItemsBySubscriptionList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(SourceId=43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(SourceId=43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>SubscriptionListId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/product-subscription/#subscription'>Subscription</a> List</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Items": [
        {
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "21Z8F4AQ",
            "DateAddedUtc": "2016-08-09T20:12:05.987",
            "DateUpdatedUtc": "2016-08-09T20:12:05.99",
            "IsArchived": false,
            "RmsId": "1",
            "Slug": "M1248-V1",
            "ExtendedAttributes": [
                {
                    "Name": "Country of Manufacture",
                    "Value": "China"
                }
            ]
        }
    ]
}
```



 <ul><li><code>Items</code> (Array[[catalog](/api/catalogitem/#CatalogItem)]) </li><ul><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>DateAddedUtc</code> (Datetime) </li><li><code>DateUpdatedUtc</code> (Datetime) </li><li><code>IsArchived</code> (Boolean) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li><li><code>ExtendedAttributes</code> (Array[[catalog](/api/attribute/#Attribute)]) </li><ul><li><code>Name</code> (String) </li><li><code>Value</code> (String) - Defaults to an empty string</li></ul><li><code>SourceIds</code> (Array) </li><li><code>BatchTracking</code> (Boolean) </li><li><code>MeasurementType</code> (String) </li></ul></ul>



## <span class='get'>GET</span> Extended Attributes for a Catalog Item

Extended attributes are unvalidated extra properties that can be put on a CatalogItem. They consist of a unique string key and a string value with a max-length of 250 characters.


> Definition

```
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/attributes
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingExtendedAttributesForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
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

public static CloseableHttpResponse GettingExtendedAttributesForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Name": "Country of Manufacture",
        "Value": "China"
    }
]
```



 Array[[attribute](#Attribute)]



## <span class='post'>POST</span> or <span class='put'>PUT</span> Extended Attributes for a Catalog Item

This request returns <strong>all</strong> Attributes for a Catalog Item, not just ones that were added or updated.

It is possible to upsert multiple attributes in a single call.

If an attribute with the given name already exists, it will be overwritten with the new value. Otherwise, it will be added to the CatalogItem.


> Definition

```
PUT /Companies({CompanyId})/Catalog/Items({CatalogItemId})/attributes
```

> Example Request

```javascript
PUT /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '[
    {
        "Name": "Country of Manufacture",
        "Value": "China"
    }
]'
```

```csharp
static IRestResponse AddingOrUpdatingExtendedAttributesForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "[{\"Name\":\"Country of Manufacture\",\"Value\":\"China\"}]", ParameterType.RequestBody);

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

public static CloseableHttpResponse AddingOrUpdatingExtendedAttributesForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("[{\"Name\":\"Country of Manufacture\",\"Value\":\"China\"}]");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "[{\"Name\":\"Country of Manufacture\",\"Value\":\"China\"}]";

response = RestClient.put 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (Optional) - Defaults to an empty string</li></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Name": "Country of Manufacture",
        "Value": "China"
    }
]
```



 Array[[attribute](#Attribute)]



## <span class='delete'>DELETE</span> Extended Attributes from a Catalog Item

This request allows you to remove extended attributes from a Catalog Item. The request body is an array of strings, where each string is the name of an attribute to be removed.

Request is idempotent. Deleting an attribute that doesn't exist on a catalog item is a no-op. 


> Definition

```
DELETE /Companies({CompanyId})/Catalog/Items({CatalogItemId})/attributes
```

> Example Request

```javascript
DELETE /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X DELETE "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '[
  "Cases Per Layer"
]
'
```

```csharp
static IRestResponse RemovingExtendedAttributesFromACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "[\"Cases Per Layer\"]", ParameterType.RequestBody);

    return client.Execute(request);
}
```


```java

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
}
```

```ruby
require 'rest-client'

body = "[\"Cases Per Layer\"]

response = RestClient.delete 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/attributes', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



### Response Parameters



> Example Response

<pre>HTTP 204</pre>



## <span class='get'>GET</span> Product Details



> Definition

```
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/ProductDetails
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductDetails()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails");
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

public static CloseableHttpResponse GettingProductDetails() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
}
```



 [product](#Product)



## <span class='get'>GET</span> Many Product Details At Once

This request returns a dictionary of CatalogItemIds and Product Details for the CatalogItem.

This request will return HTTP 400 if less than 1 or more than 500 product details are requested at one time.

If a requested CatalogItemId is not found, it will be omitted from the response.


> Definition

```
POST /Companies({CompanyId})/Catalog/Items/ProductDetails/Bulk
```

> Example Request

```javascript
POST /Companies(14146)/Catalog/Items/ProductDetails/Bulk
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "CatalogItemIds" : [
    "21ac987c-d55a-482a-9450-402976a71563",
    "402976a7-482a-d55a-1563-21ac987c9450"
  ]
}
'
```

```csharp
static IRestResponse GettingManyProductDetailsAtOnce()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CatalogItemIds\":[\"21ac987c-d55a-482a-9450-402976a71563\",\"402976a7-482a-d55a-1563-21ac987c9450\"]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse GettingManyProductDetailsAtOnce() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CatalogItemIds\":[\"21ac987c-d55a-482a-9450-402976a71563\",\"402976a7-482a-d55a-1563-21ac987c9450\"]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CatalogItemIds\":[\"21ac987c-d55a-482a-9450-402976a71563\",\"402976a7-482a-d55a-1563-21ac987c9450\"]}

response = RestClient.post 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ProductDetails/Bulk', body, {
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

<ul><li><code>CatalogItemIds</code> (<strong>Required</strong>) - Array of <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a> identifiers</li></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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

```



 <ul><li><code>CatalogItems</code> (Array) - JSON object/Dictionary</li><ul><li><code>{CatalogItemId}</code> ([catalog](/api/product/#Product)) </li></ul></ul>



## <span class='get'>GET</span> Compatible Products for a Catalog Item



> Definition

```
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Compatible
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingCompatibleProductsForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible");
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

public static CloseableHttpResponse GettingCompatibleProductsForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Items": [
        {
            "Name": "JBL Pulse",
            "Slug": "M45",
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "CatalogSku": "F4VPWWTG",
            "HeroShotId": "8402481f-da22-4081-900b-dbcf9c27490d",
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "ShortDescription": "Next is Now",
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
            }
        }
    ],
    "Facets": [
        {
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
        }
    ]
}
```



 <ul><li><code>Items</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>HeroShotId</code> (Guid) </li><li><code>Manufacturer</code> (Object) </li><ul><li><code>Id</code> (Integer) - Identifier for a <a href='http://developers.iqmetrix.com/api/entity-store/#manufacturer'>Manufacturer</a></li><li><code>Name</code> (String) </li></ul><li><code>ShortDescription</code> (String) </li><li><code>CanonicalClassification</code> ([catalog](/api/canonicalclassification/#CanonicalClassification)) </li><ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>ParentCategories</code> (Array) </li><ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li></ul><li><code>TreeId</code> (Integer) </li></ul></ul><li><code>Facets</code> (Array) </li><ul><li><code>ClassificationAndCategories</code> (Array) </li><ul><li><code>Count</code> (Integer) </li><li><code>Item</code> (Integer) </li></ul><li><code>Manufacturers</code> (Array) </li><ul><li><code>Count</code> (Integer) </li><li><code>Item</code> (Object) </li><ul><li><code>Id</code> (Integer) - Identifier for a <a href='http://developers.iqmetrix.com/api/entity-store/#manufacturer'>Manufacturer</a></li><li><code>Name</code> (String) </li></ul></ul><li><code>Vendors</code> (Array) </li><ul><li><code>Count</code> (Integer) </li><li><code>Item</code> (Object) </li><ul><li><code>Id</code> (Integer) - Identifier for a <a href='http://developers.iqmetrix.com/api/entity-store/#manufacturer'>Manufacturer</a></li><li><code>Name</code> (String) </li></ul></ul></ul></ul>



## <span class='get'>GET</span> Variations for a Catalog Item

For more information about Variations, see <a href='/concepts/product-structure/#variations'>Variations</a>


> Definition

```
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Variations
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingVariationsForACatalogItem()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations");
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

public static CloseableHttpResponse GettingVariationsForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the <a href='http://developers.iqmetrix.com/api/catalog/#catalogitem'>CatalogItem</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
}
```



 <ul><li><code>Items</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>Revisions</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li></ul></ul></ul>



## <span class='get'>GET</span> Products by Vendor SKU



> Definition

```
GET /Companies({CompanyId})/Catalog/Items/ByVendorSku?vendorsku={VendorSku}&vendorid={VendorId}
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductsByVendorSku()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217");
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

public static CloseableHttpResponse GettingProductsByVendorSku() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>VendorSku</code> (<strong>Required</strong>)  - Vendor SKU to search for</li>
    <li><code>VendorId</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/epc/#vendor'>Vendor</a> to search for</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
            "Slug": "M1248-V1",
            "ExtendedAttributes": [
                {
                    "Name": "Country of Manufacture",
                    "Value": "China"
                }
            ]
        }
    ]
}
```



 <ul><li><code>Sku</code> (String) </li><li><code>VendorId</code> (Integer) </li><li><code>Items</code> (Array) </li><ul><li><code>CatalogItemId</code> (Guid) </li><li><code>CatalogSku</code> (String) </li><li><code>IsArchived</code> (Boolean) </li><li><code>DateAddedUtc</code> (Datetime) </li><li><code>DateUpdatedUtc</code> (Datetime) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li><li><code>ExtendedAttributes</code> (Array[[catalog](/api/attribute/#Attribute)]) </li><ul><li><code>Name</code> (String) </li><li><code>Value</code> (String) - Defaults to an empty string</li></ul><li><code>SourceIds</code> (Array) </li><li><code>BatchTracking</code> (Boolean) </li><li><code>MeasurementType</code> (String) </li></ul></ul>



## <span class='get'>GET</span> Products by Category or Classification



> Definition

```
GET /Companies({CompanyId})/Catalog/Search?CategoryOrClassificationId={CategoryOrClassificationId}&Page={Page}&PageSize={PageSize}
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductsByCategoryOrClassification()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10");
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

public static CloseableHttpResponse GettingProductsByCategoryOrClassification() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CategoryOrClassificationId</code> (Optional)  - Identifier for the <a href='http://developers.iqmetrix.com/api/classification-tree/#category'>Category</a> or <a href='http://developers.iqmetrix.com/api/classification-tree/#classification'>Classification</a></li>
    <li><code>Page</code> (Optional)  - Page to display, if not specified defaults to 1</li>
    <li><code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
```



 [catalogsearchresult](#CatalogSearchResult)



## <span class='get'>GET</span> Products by Manufacturer



> Definition

```
GET /Companies({CompanyId})/Catalog/Search?ManufacturerIds={ManufacturerIds}&Page={Page}&PageSize={PageSize}
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductsByManufacturer()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10");
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

public static CloseableHttpResponse GettingProductsByManufacturer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>ManufacturerIds</code> (Optional)  - Array of integers representing identifiers for <a href='http://developers.iqmetrix.com/api/entity-store/#manufacturer'>Manufacturers</a></li>
    <li><code>Page</code> (Optional)  - Page to display, if not specified defaults to 1</li>
    <li><code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
```



 [catalogsearchresult](#CatalogSearchResult)



## <span class='get'>GET</span> Products by Supplier



> Definition

```
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&Page={Page}&PageSize={PageSize}
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductsBySupplier()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10");
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

public static CloseableHttpResponse GettingProductsBySupplier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>VendorIds</code> (Optional)  - List of comma seperated integers representing Supplier identifiers</li>
    <li><code>Page</code> (Optional)  - Page to display, if not specified defaults to 1</li>
    <li><code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
```



 [catalogsearchresult](#CatalogSearchResult)



## <span class='get'>GET</span> Products Available for Shipping



> Definition

```
GET /Companies({CompanyId})/Catalog/Search?IsDropshippable={IsDropShippable}&Page={Page}&PageSize={PageSize}
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingProductsAvailableForShipping()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10");
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

public static CloseableHttpResponse GettingProductsAvailableForShipping() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>IsDropShippable</code> (Optional)  - True to display products available for shipping, false to display products not available for shipping. This value is a best guess and should not be used for tracking dropshippable products</li>
    <li><code>Page</code> (Optional)  - Page to display, if not specified defaults to 1</li>
    <li><code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
```



 [catalogsearchresult](#CatalogSearchResult)



## Searching For Products

{{note}}
SearchTerms specified in the URI are compared against the following Product fields: <code>Name</code>, <code>Manufacturer.Name</code>, <code>ManufacturerSkus</code>, <code>UpcCodes</code> and <code>VendorSkus</code> and may return *partial* results.
{{end}}    


> Definition

```
GET /Companies({CompanyId})/Catalog/Search?SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&Page={Page}&PageSize={PageSize}
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse SearchingForProducts()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10");
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

public static CloseableHttpResponse SearchingForProducts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>SearchTerms</code> (Optional)  - Search terms</li>
    <li><code>OrderBy</code> (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified</li>
    <li><code>OrderDir</code> (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified</li>
    <li><code>Page</code> (Optional)  - Page to display, if not specified defaults to 1</li>
    <li><code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
```



 [catalogsearchresult](#CatalogSearchResult)



## Combining Search Filters

Search filters can be combined to narrow down results. The example below illustrates a search request using every possible filter.

> Definition

```
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&ManufacturerIds={ManufacturerIds}&IsDropshippable={IsDropShippable}&CategoryOrClassificationId={CategoryOrClassificationId}&ClassificationTreeId={ClassificationTreeId}&SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&IsLinkedToCuratedProduct={IsLinkedToCuratedProduct}&ColorTagIds={ColorTagIds}&Page={Page}&PageSize={PageSize}
```

> Example Request

```javascript
GET /Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse CombiningSearchFilters()
{
    var client = new RestClient("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10");
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

public static CloseableHttpResponse CombiningSearchFilters() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&IsLinkedToCuratedProduct=false&ColorTagIds=1&Page=1&PageSize=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>VendorIds</code> (Optional)  - List of comma seperated integers representing identifiers for <a href='http://developers.iqmetrix.com/api/epc/#vendor'>Vendors</a></li>
    <li><code>ManufacturerIds</code> (Optional)  - Array of integers representing identifiers for <a href='http://developers.iqmetrix.com/api/entity-store/#manufacturer'>Manufacturers</a></li>
    <li><code>IsDropShippable</code> (Optional)  - True to display products available for shipping, false to display products not available for shipping. This value is a best guess and should not be used for tracking dropshippable products</li>
    <li><code>CategoryOrClassificationId</code> (Optional)  - Identifier for the <a href='http://developers.iqmetrix.com/api/classification-tree/#category'>Category</a> or <a href='http://developers.iqmetrix.com/api/classification-tree/#classification'>Classification</a></li>
    <li><code>ClassificationTreeId</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/classification-tree/#classificationtree'>ClassificationTree</a> to search within. If CategoryOrClassificationId is provided, this value is ignored</li>
    <li><code>SearchTerms</code> (Optional)  - Search terms</li>
    <li><code>OrderBy</code> (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified</li>
    <li><code>OrderDir</code> (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified</li>
    <li><code>IsLinkedToCuratedProduct</code> (Optional)  - A flag to indicate if the search should be restricted to Private Products</li>
    <li><code>ColorTagIds</code> (Optional)  - Array of integers representing identifiers for <a href='http://developers.iqmetrix.com/api/product-structure/#colortag'>ColorTags</a></li>
    <li><code>Page</code> (Optional)  - Page to display, if not specified defaults to 1</li>
    <li><code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
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
```



 [catalogsearchresult](#CatalogSearchResult)



# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Cannot add product to catalog` | Ensure {{Slug_Glossary}} is valid |
| `HTTP 404` | `Catalog Item not found` | Ensure CatalogItem GUID is valid and the CatalogItem exists |

