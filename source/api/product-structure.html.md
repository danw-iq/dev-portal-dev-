---
title:  Product Structure
permalink: /api/product-structure/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The Product Structure API allows you to create Master Products, Variations and Revisions in Product Library which can then be added to your Catalog.  

To learn more about Master Products, Variations and Revisions see {{ProductStructure_Concept}}.

To learn more about Product Library and your Catalog, see {{ProductLibrary_Concept}}.



# Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>



# Resources


## ProductDocument

A ProductDocument represents the [hierarchical structure](/concepts/product-structure/) of Products in Product Library.

```json
{
	"Id": "8",
	"Classification": [
		{
		"TreeId": "1",
	"Id": "4",
	"Name": "Smartphones",
	"ColorDefinitions": "undefined",
	"CreatedUtc": "2015-05-28T12:00:00.000Z",
	"LastModifiedUtc": "2015-05-28T12:00:00.000Z",
	"Manufacturer": [
		{
		"Id": "13149",
	"Name": "OtterBox",
	"Owner": [
		{
		"Id": "14146",
	"Name": "Kentel Corp",
	"RevisionGroups": "undefined",
	"RootRevision": "undefined",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Classification (`object`) | [Classification](/api/classification-tree/#classification) information | 
| Classification.TreeId (`Integer`) | Identifier for a [ClassificationTree](/api/classification-tree/#classificationtree) | 
| Classification.Id (`Integer`) | Identifier for a [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | 
| Classification.Name (`String`) | Name | 
| ColorDefinitions (`Array[[catalog](/api/colordefinition/#ColorDefinition)]`) | List of [ColorDefinitions](/api/catalog/#colordefinition) | 
| CreatedUtc (`DateTime`) | Created date in UTC | 
| LastModifiedUtc (`DateTime`) | Last modified date in UTC | 
| Manufacturer (`object`) | [Manufacturer](/api/entity-store/#manufacturer) information | 
| Manufacturer.Id (`Integer`) | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | 
| Manufacturer.Name (`String`) | Name of the [Manufacturer](/api/entity-store/#manufacturer) | 
| Owner (`object`) | Indicates if this Product is publicly accessible (null) or private (not null) | 
| Owner.Id (`Integer`) | For private products, Identifier of the Company that owns this Product | 
| Owner.Name (`String`) | For private products, Name of the Company that owns this Product | 
| RevisionGroups (`Array[[product-structure](/api/revisiongroup/#RevisionGroup)]`) | Revisions | 
| RootRevision (`[product-structure](/api/masterproduct/#MasterProduct)`) | Master Product, root of the Product hierarchy | 
| Version (`Integer`) | The latest revision number | 

## Asset

```json
{
	"Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
	"Name": "HeroShot",
	"MimeType": "image/jpeg",
	"IsHidden": "false"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Identifier | 
| Name (`String`) | Name | 
| MimeType (`String`) | Type of image | 
| IsHidden (`Boolean`) | A flag to indicate if this Asset is hidden, not to be used in Endless Aisle | 

## MasterProduct

```json
{
	"ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
	"FieldValues": "undefined",
	"IdentifierGroups": "undefined",
	"IsArchived": "false",
	"Variations": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| ColorDefinitionId (`String`) | Unique identifier for a ColorDefinition | 
| FieldValues (`Array[[product-structure](/api/fieldvalue/#FieldValue)]`) | List of FieldValues which represent the properties this Master Product has such as name, screen size, etc | 
| IdentifierGroups (`Array[[product-structure](/api/identifiergroup/#IdentifierGroup)]`) | List of IdentifierGroups | 
| IsArchived (`Boolean`) | A flag to indicate if the MasterProduct is archived | 
| Variations (`Array[[product-structure](/api/variation/#Variation)]`) | Variations | 

## IdentifierGroup

An Identifier is a value that uniquely represents a product within a certain context. For example, a product sold by one vendor may have different SKU identifiers than the same product sold by another vendor. IdentifierGroups are used to group Identifiers by type.

```json
{
	"Type": "ManufacturerSKU",
	"ForceOverride": "false",
	"Identifiers": [
		{
		"Description": "Manufacturer sku",
	"Entity": [
		{
		"Id": "14146",
	"Name": "Kentel Corp",
	"Type": "ManufacturerSKU",
	"Value": "ManufacturerSKU"
}
```

| Name | Description |
|:-----|:------------|
| Type (`String`) | Acceptable values include: ManufacturerSKU, VendorSKU, UPC | 
| ForceOverride (`Boolean`) | A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a> | 
| Identifiers (`Array[object]`) | List of Identifiers of the given type | 
| Description (`String`) | Description | 
| Entity (`object`) | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU | 
| Entity.Id (`Integer`) | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | 
| Entity.Name (`String`) | Entity name | 
| Type (`String`) | This value should match the Type property of the IdentifierGroup | 
| Value (`String`) | Value | 

## Identifier

```json
{
	"Description": "Manufacturer sku",
	"Entity": [
		{
		"Id": "14146",
	"Name": "Kentel Corp",
	"Type": "ManufacturerSKU",
	"Value": "ManufacturerSKU"
}
```

| Name | Description |
|:-----|:------------|
| Description (`String`) | Description | 
| Entity (`object`) | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU | 
| Entity.Id (`Integer`) | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | 
| Entity.Name (`String`) | Entity name | 
| Type (`String`) | This value should match the Type property of the IdentifierGroup | 
| Value (`String`) | Value | 

## RevisionGroup

RevisionGroups are used to group Revisions by type and parent Variation. See [Extended Examples](#extended-examples)

```json
{
	"GroupType": "Entity",
	"Order": "1",
	"Revisions": "undefined",
	"VariationId": "5"
}
```

| Name | Description |
|:-----|:------------|
| GroupType (`String`) | Revision type. See [GroupTypes](#grouptypes) for a list of acceptable values | 
| Order (`Integer`) | A value used for sorting Revisions | 
| Revisions (`Array[[product-structure](/api/revision/#Revision)]`) | List of Revisions in this category | 
| VariationId (`Integer`) | Identifier for the Variation, if this Revision was created off of a Variation | 

## Revision

To learn more about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}.

```json
{
	"Id": "5",
	"ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
	"Entity": [
		{
		"Id": "14146",
	"Name": "Kentel Corp",
	"FieldValues": "undefined",
	"IdentifierGroups": "undefined",
	"Regions": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| ColorDefinitionId (`String`) | Unique identifier for a ColorDefinition | 
| Entity (`object`) | An identifier for an Entity this Revision was created for | 
| Entity.Id (`Integer`) | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | 
| Entity.Name (`String`) | Entity name | 
| FieldValues (`Array[[product-structure](/api/fieldvalue/#FieldValue)]`) | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct | 
| IdentifierGroups (`Array[[product-structure](/api/identifiergroup/#IdentifierGroup)]`) | List of IdentifierGroups | 
| Regions (`Array[[catalog](/api/region/#Region)]`) | List of regions this Revision is applicable to | 

## Variation

To learn more about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}.

```json
{
	"ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
	"FieldValues": "undefined",
	"IdentifierGroups": "undefined",
	"IsArchived": "false"
}
```

| Name | Description |
|:-----|:------------|
| ColorDefinitionId (`String`) | Unique identifier for a ColorDefinition | 
| FieldValues (`Array[[product-structure](/api/fieldvalue/#FieldValue)]`) | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct | 
| IdentifierGroups (`Array[[product-structure](/api/identifiergroup/#IdentifierGroup)]`) | List of IdentifierGroups | 
| IsArchived (`Boolean`) | A flag to indicate if this Variation is archived. Archived Products are hidden from searches and can only be access directly. | 

## FieldValue

A FieldValue represents a product property and defines how Variations and Revisions differ from their parents. FieldValues are made up of a reference to a {{field-definition}} and a value. See [Extended Examples](#extended-examples).

```json
{
	"FieldDefinitionId": "1",
	"LanguageInvariantValue": "iPhone 4S 16 GB Black"
}
```

| Name | Description |
|:-----|:------------|
| FieldDefinitionId (`Integer`) | Identifier for a [FieldDefinition](/api/field-definitions/#fielddefinition) | 
| LanguageInvariantValue (`String`) | Value | 

## ColorTag

```json
{
	"Id": "5",
	"Name": "Green",
	"ColorCode": "#51B14D"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Name | 
| ColorCode (`String`) | A valid Hex code representing this color | 

## ColorDefinitions

```json
{
	"ColorDefinitions": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| ColorDefinitions (`Array[[catalog](/api/colordefinition/#ColorDefinition)]`) | List of [ColorDefinitions](/api/catalog/#colordefinition) | 




## Enumerations

### GroupType

| Name   | Description |
|:-------|:------------|
| Region | Variation is specific to a [Country](/api/reference/#country) or [State](/api/reference/#state) |
| Entity | Variation is specific to a [Company](/api/company-tree/#company) or [Carrier](/api/entity-store/#carrier) |
| RegionAndEntity | Varation is a combination of the above | 

### SwatchType

| Name   | Description |
|:-------|:------------|
| Asset | Color is represented by an [Asset](/api/assets/#asset) |
| ColorCode | Color is represented by a Hex code |
| Empty | No swatch |


# Requests



## <span class='post'>POST</span> a Master Product



> Definition

```
POST /ProductDocs
```

> Example Request

```javascript
POST /ProductDocs
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
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
}'
```

```csharp
static IRestResponse CreatingAMasterProduct()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"OwnerEntityId\":14146,\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingAMasterProduct() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"OwnerEntityId\":14146,\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"OwnerEntityId\":14146,\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```





#### Request Parameters

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>TreeId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/classification-tree/#classificationtree'>ClassificationTree</a></li><li><code>Id</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/classification-tree/#classification'>Classification</a> or <a href='http://developers.iqmetrix.com/api/classification-tree/#category'>Category</a></li></ul><li><code>OwnerEntityId</code> (<strong>Required</strong>) - Identifier of the <a href='/api/company-tree/#company'>Company</a> the Product will belong to</li><li><code>RootRevision</code> (<strong>Required</strong>) </li><ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/field-definitions/#fielddefinition'>FieldDefinition</a></li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image <a href='http://developers.iqmetrix.com/api/assets/#asset'>Assets</a> for the Master Product</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an <a href='http://developers.iqmetrix.com/api/assets/#asset'>Asset</a></li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Unique identifier for a <a href='http://developers.iqmetrix.com/api/catalog/#colordefinition'>ColorDefinition</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul><li><code>ColorDefinitions</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTagIds</code> (Optional) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Optional) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (Optional) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul><li><code>Manufacturer</code> (Optional) </li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/entity-store/#manufacturer'>Manufacturer</a></li></ul></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
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

```



 [productdocument](#ProductDocument)



## <span class='get'>GET</span> a Product Hierarchy

This request will get a Master Product and all child Variations and Revisions.


> Definition

```
GET /ProductDocs({ProductDocumentId})
```

> Example Request

```javascript
GET /ProductDocs(8)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAProductHierarchy()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
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

public static CloseableHttpResponse GettingAProductHierarchy() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
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
}
```



 [productdocument](#ProductDocument)



## <span class='put'>PUT</span> a Master Product

{{important}} This request cannot <strong>update</strong> existing Assets, only add new Assets{{end}}


> Definition

```
PUT /ProductDocs({ProductDocumentId})
```

> Example Request

```javascript
PUT /ProductDocs(8)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
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
}'
```

```csharp
static IRestResponse UpdatingAMasterProduct()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingAMasterProduct() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
</ul>



#### Request Parameters

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/field-definitions/#fielddefinition'>FieldDefinition</a></li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image <a href='http://developers.iqmetrix.com/api/assets/#asset'>Assets</a> for the Master Product</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an <a href='http://developers.iqmetrix.com/api/assets/#asset'>Asset</a></li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Unique identifier for a <a href='http://developers.iqmetrix.com/api/catalog/#colordefinition'>ColorDefinition</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 204 Content-Type: application/json
```






## <span class='post'>POST</span> a Variation



> Definition

```
POST /ProductDocs({ProductDocumentId})/Variations
```

> Example Request

```javascript
POST /ProductDocs(8)/Variations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
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
}'
```

```csharp
static IRestResponse CreatingAVariation()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingAVariation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
</ul>



#### Request Parameters

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/field-definitions/#fielddefinition'>FieldDefinition</a></li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image <a href='http://developers.iqmetrix.com/api/assets/#asset'>Assets</a> for the Variation</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an <a href='http://developers.iqmetrix.com/api/assets/#asset'>Asset</a></li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Identifier for a ColorDefinition. For a list of ColorDefinitions, see <a href='/api/product-structure/#getting-color-definitions-for-a-master-product'>Getting Color Definitions For a Master Product</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
{
    "VariationId": 8
}
```



 <ul><li><code>VariationId</code> (Integer) - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#variation'>Variation</a></li></ul>



## <span class='put'>PUT</span> a Variation

{{important}} This request cannot <strong>update</strong> existing Assets, only add new Assets{{end}}


> Definition

```
PUT /ProductDocs({ProductDocumentId})/Variations?variationId={VariationId}
```

> Example Request

```javascript
PUT /ProductDocs(8)/Variations?variationId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
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
}'
```

```csharp
static IRestResponse UpdatingAVariation()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingAVariation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
    <li><code>VariationId</code> (<strong>Required</strong>)  - Identifier of the <a href='http://developers.iqmetrix.com/api/product-structure/#variation'>Variation</a>. To get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a></li>
</ul>



#### Request Parameters

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/field-definitions/#fielddefinition'>FieldDefinition</a></li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image <a href='http://developers.iqmetrix.com/api/assets/#asset'>Assets</a> for the Variation</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an <a href='http://developers.iqmetrix.com/api/assets/#asset'>Asset</a></li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Identifier for a ColorDefinition. For a list of ColorDefinitions, see <a href='/api/product-structure/#getting-color-definitions-for-a-master-product'>Getting Color Definitions For a Master Product</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 204 Content-Type: application/json
```






## <span class='post'>POST</span> a Revision

At least one of the following is required in the URI for this request: `VariationId`, `CountryCode`, `StateCode`, `EntityId`.


> Definition

```
POST /ProductDocs({ProductDocumentId})/Revisions?variationId={VariationId}&countryCode={CountryCode}&stateCode={StateCode}&entityId={EntityId}
```

> Example Request

```javascript
POST /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
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
}'
```

```csharp
static IRestResponse CreatingARevision()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingARevision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
    <li><code>VariationId</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#variation'>Variation</a>, to get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a></li>
    <li><code>CountryCode</code> (Optional)  - Two letter country code for a Country. Uses the ISO 3166-1 alpha-2 standard</li>
    <li><code>StateCode</code> (Optional)  - Two letter state code for a State or Province. Based off the ISO 3166-2 standard</li>
    <li><code>EntityId</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> or <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
</ul>



#### Request Parameters

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/field-definitions/#fielddefinition'>FieldDefinition</a></li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 201 Content-Type: application/json
```

```json
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
```



 [revision](#Revision)



> Example Response

```
HTTP 204 Content-Type: application/json
```






## <span class='put'>PUT</span> a Revision

To update an existing Revision, the same URI paramters that were used to create the Revision must be used. 


> Definition

```
PUT /ProductDocs({ProductDocumentId})/Revisions?variationId={VariationId}&countryCode={CountryCode}&stateCode={StateCode}&entityId={EntityId}
```

> Example Request

```javascript
PUT /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
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
}'
```

```csharp
static IRestResponse UpdatingARevision()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"StateCode\":\"AB\",\"StateName\":\"British Columbia\"}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse UpdatingARevision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"StateCode\":\"AB\",\"StateName\":\"British Columbia\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"StateCode\":\"AB\",\"StateName\":\"British Columbia\"}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
    <li><code>VariationId</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#variation'>Variation</a>, to get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a></li>
    <li><code>CountryCode</code> (Optional)  - Two letter country code for a Country. Uses the ISO 3166-1 alpha-2 standard</li>
    <li><code>StateCode</code> (Optional)  - Two letter state code for a State or Province. Based off the ISO 3166-2 standard</li>
    <li><code>EntityId</code> (Optional)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> or <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
</ul>



#### Request Parameters

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/field-definitions/#fielddefinition'>FieldDefinition</a></li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 204 Content-Type: application/json
```






## <span class='get'>GET</span> Color Definitions

This request can be used to get a <code>ColorDefinitionId</code> when creating a Variation or Revision.


> Definition

```
GET /ProductDocs({ProductDocumentId})/ColorDefinitions
```

> Example Request

```javascript
GET /ProductDocs(8)/ColorDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingColorDefinitions()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
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

public static CloseableHttpResponse GettingColorDefinitions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
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
}
```



 [colordefinitions](#ColorDefinitions)



## <span class='post'>POST</span> a Color Definition

This request can be used to add additional ColorDefinitions to a Product once it has been created.


> Definition

```
POST /ProductDocs({ProductDocumentId})/ColorDefinitions
```

> Example Request

```javascript
POST /ProductDocs(8)/ColorDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
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
}'
```

```csharp
static IRestResponse CreatingAColorDefinition()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingAColorDefinition() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/product-structure/#productdocument'>ProductDocument</a></li>
</ul>



#### Request Parameters

<ul><li><code>ColorDefinitions</code> (<strong>Required</strong>) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTagIds</code> (Optional) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Optional) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (Optional) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
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
}
```



 [colordefinitions](#ColorDefinitions)



## <span class='get'>GET</span> All Color Tags



> Definition

```
GET /ColorTags
```

> Example Request

```javascript
GET /ColorTags
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ColorTags" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingAllColorTags()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ColorTags");
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

public static CloseableHttpResponse GettingAllColorTags() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ColorTags");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ColorTags', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```





### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "ColorTags": [
        {
            "Id": 1,
            "Name": "Black",
            "ColorCode": "#303232"
        }
    ]
}
```



 <ul><li><code>ColorTags</code> (Array) </li><ul><li><code>Id</code> (Integer) - Identifier of a <a href='http://developers.iqmetrix.com/api/product-structure/#colortag'>ColorTag</a>, see <a href='#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Name</code> (String) </li><li><code>ColorCode</code> (String) </li></ul></ul>



# Extended Examples

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

The example above is a snippet from a <a href='http://developers.iqmetrix.com/api/product-structure/#masterproduct'>MasterProduct</a> with two child Revisions.

`"GroupType": "Entity"` means that these Revisions are Entity Revisions, owned by a specific Entity, such as a Company or Carrier. 

In this case, the two Entities that own these Revisions are <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> Entities, Jump.ca and KENTEL.

#### Field Values

A [FieldValue](#fieldvalue) pairs a <a href='http://developers.iqmetrix.com/api/field-definitions/#fielddefinition'>FieldDefinition</a> with a value that allows us to see how a child Variation or Revision differs from its parent.

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

The example above is a snippet from a <a href='http://developers.iqmetrix.com/api/product-structure/#masterproduct'>MasterProduct</a> with two child Revisions which have one FieldValue change each.

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

The example above is a summarized <a href='http://developers.iqmetrix.com/api/product-structure/#masterproduct'>MasterProduct</a> which includes one child <a href='http://developers.iqmetrix.com/api/product-structure/#variation'>Variation</a>, one Vendor SKU (`V8341221L`) and one Manufacturer SKU (`545512G/A`).

With ForceOverride set to `true` for Vendor SKUs, we know that the child Variation has one and only one Vendor SKU - `V8341221L`.

However, Manufacturer SKU's have ForceOverride set to `false`, showing that the child Variation is not inheriting all of the parent Master Product's Manufacturer SKUs.

Looking at the Variation, there is a Manufacturer SKU with a value of `ME341LL/A` that is breaking inheritance.


# Errors

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

