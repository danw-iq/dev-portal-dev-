---
title: Vendor Managed Inventory Guide
search: true
---

# Overview

This guide is intended to walk you through the process of creating a Purchase Order and Purchase Order Shipment Notice in RQ using the [Vendor Managed Inventory (VMI)](/api/vmi) API.

The VMI API allows vendors to run product inventory reports and create purchase orders for companies running RQ.

RetailiQ is the legacy retail management system produced by iQmetrix. It has been replaced by RQ. In this document, RetailiQ and RQ are used synonymously.

**Figure 1:** VMI flow

<img class="popUpImage" title="Purchase Order in RQ" src="http://developers.iqmetrix.com/images/vmi/flow.png"/> 

## Who Is This Guide For?

You may be interested in this guide if you are a **Vendor** or **Supplier** interested in becoming a VMI partner.

## Postman Example

iQmetrix uses <a href="http://www.getpostman.com" target="_blank">Postman</a> when <a href="/api/#testing-and-debugging">testing and debugging</a> our APIs.

For Chrome or Mac users, click the button below to import the collection directly into Postman.

Alternatively, you can download the collection by clicking <a href="https://www.getpostman.com/collections/efefcdc5a004dc4e6064">here</a>.

## Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact <a href ="mailto:apisupport@iqmetrix.com?subject=Support">API Support</a>.

## Architecture

The VMI API is implemented as a web service using standard Simple Object Access Protocol (SOAP) to send XML messages between vendor and iQmetrix.

This allows the API to be platform and programming language independent. 

Communication is done using **SSL** on the standard port **443** in order to secure data transfers.

## Environment

iQmetrix provides you with two environments, **Sandbox** and **Production**.

**Table 1:** VMI Environments and WSDL locations

| Name | Description | WSDL |
|:-----|:------------|:-----|
| Sandbox | Used for testing your API and end-to-end testing | [https://vmi7.iqmetrix.net/VMIService.asmx](https://vmi7.iqmetrix.net/VMIService.asmx) |
| Production | Used once development is complete | [https://vmi1.iqmetrix.net/VMIService.asmx](https://vmi1.iqmetrix.net/VMIService.asmx) |

For more information, see [Environments](http://developers.iqmetrix.com/api/#environments).

## Enable VMI for a Company

Each company for which Vendor Replenishment is being implemented needs to setup Vendor Replenishment for the particular vendor to grant the vendor access to company data.

In this guide the location **Chicago - Halsted** will be used with the vendor **Dans Supplies**.

For more information and instructions see <a href='https://support.iqmetrix.com/hc/en-us/articles/228838047-Settings-Inventory#Vendor_Replenishment_Setup'>Vendor Replenishment Setup</a>.

**Figure 2:** Chicago - Halsted enabled for Vendor Replenishment with Dans Supplies in RQ

<img class="popUpImage" title="Vendor Replenishment" src="http://developers.iqmetrix.com/images/vmi/vendor-replenish.png"/> 

# Steps

## Step 1 - Authentication

In order to make authorized requests to the VMI API, you need a username and password. 

Please contact <a href ="mailto:apisupport@iqmetrix.com?subject=VMI Credentials">API Support</a> for a username and password.

## Step 2 - Get List of Companies

To communicate with a company using RQ you must first determine its `CompanyID`.

The request <a href='/api/vmi/#getting-a-company-list'>Getting a Company List</a> can be used to get a list of VMI enabled companies. 

If the company is included in the response, record the `CompanyID` and skip ahead to [Step 5 - Get a Store List](#step-5---get-a-store-list). 

Otherwise, the company may need to be enabled. Continue to [Step 3 - Get Pending Companies](#step-3---get-pending-companies).

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=GetCompanyList
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetCompanyList xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
         </Vendor>
      </GetCompanyList>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username = "sampleusername";
vendor.Password = "samplepassword";

CompanyInformation[] companies = vmiService.GetCompanyList(vendor);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetCompanyListResponse xmlns="http://www.iqmetrix.com">
            <GetCompanyListResult>
                <CompanyInformation>
                    <CompanyID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</CompanyID>
                    <Name>DropshipTestDemo_DansSupplies</Name>
                </CompanyInformation>
            </GetCompanyListResult>
        </GetCompanyListResponse>
    </soap:Body>
</soap:Envelope>
```

From the response the CompanyID value <code>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</code> will be used in the following steps.

## Step 3 - Get Pending Companies

<a href='/api/vmi/#pending-companies'>Pending Companies</a> do not appear in the response for the request <a href='/api/vmi/#getting-a-company-list'>Getting a Company List</a>.

For a list of pending companies use the request <a href='/api/vmi/#getting-pending-companies'>Getting Pending Companies</a>.

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=GetCompanyList
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetPendingCompanies xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
         </Vendor>
      </GetPendingCompanies>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "sampleusername";
vendor.Password = "samplepassword";

CompanyInformation[] companies = vmiService.GetPendingCompanies(vendor);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetPendingCompaniesResponse xmlns="http://www.iqmetrix.com">
            <GetPendingCompaniesResult>
              <CompanyInformation>
                <CompanyID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</CompanyID>
                <Name>DropshipTestDemo_DansSupplies</Name>
              </CompanyInformation>     
            </GetPendingCompaniesResult>
        </GetPendingCompaniesResponse>
    </soap:Body>
</soap:Envelope>
```

From the response the CompanyID value <code>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</code> will be used in the following steps.

## Step 4 - Enable a Company

Enabling a company can be done using <a href='/api/vmi/#enabling-or-disabling-a-company'>Enabling or Disabling a Company</a>.

For this example the Cornwall West store will be enabled using the following parameters:

* ClientID value `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` from [Step 3](#step-3---get-pending-companies)

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=EnableCompany
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <EnableCompany xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <Client>
               <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
            </Client>
         </Vendor>
         <isEnabled>true</isEnabled>
      </EnableCompany>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = new Guid(c46ccb4d-2d44-4289-950a-b9cb51d58ac4);

vmiService.EnableCompany(vendor, true); //True to enable, false to disable
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <EnableCompanyResponse xmlns="http://www.iqmetrix.com" />
    </soap:Body>
</soap:Envelope>
```

## Step 5 - Get a Store List

To create a purchase order for a store, you must know its `StoreID`.

The request <a href='/api/vmi/#getting-a-store-list'>Getting a Store List</a> is used to get a list of all VMI enabled stores for a company.

For this example following parameters will be used:

* ClientID value `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` from [Step 2](#step-2---get-list-of-companies)

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=GetStoreList
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetStoreList xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <Client>
               <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
            </Client>
         </Vendor>
      </GetStoreList>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = new Guid(c46ccb4d-2d44-4289-950a-b9cb51d58ac4);

StoreInformation[] stores = vmiService.GetStoreList(vendor);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetStoreListResponse xmlns="http://www.iqmetrix.com">
            <GetStoreListResult>
                <StoreInformation>
                    <StoreID>25</StoreID>
                    <Name>Chicago- Halsted</Name>
                    <Region>First Region</Region>
                    <District>First District</District>
                    <Address />
                    <City>Orlando</City>
                    <ProvinceState>FL</ProvinceState>
                    <PostalZipCode>32801</PostalZipCode>
                    <Country>United States</Country>
                    <PhoneNumber />
                    <ShipToStoreID>7</ShipToStoreID>
                    <BillToStoreID>7</BillToStoreID>
                    <VendorAccountNumber>-</VendorAccountNumber>
                    <Abbreviation>FREDS</Abbreviation>
                </StoreInformation>
            </GetStoreListResult>
        </GetStoreListResponse>
    </soap:Body>
</soap:Envelope>
```

From the response the StoreID value <code>25</code> will be used in the following steps.

## (Optional) Step 6 - Get Company Tree 

Some reports allow you to specify a company tree level for filtering report data. To use these reports you must first determine the ID of the appropriate Channel, Region, District using the request <a href='/api/vmi/#getting-hierarchy-info'>Getting Hierarchy Info</a>.

If you wanted to run the Geographic Inventory Report for a specific Region, you would need to know the ID of that Region to provide to the report.

For this example the ID of the region with the name "First Region" will be determined.

* ClientID value `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` from [Step 2](#step-2---get-list-of-companies)

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=GetHierarchyInfo
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetHierarchyInfo xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <Client>
               <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
            </Client>
         </Vendor>
      </GetHierarchyInfo>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = new Guid(c46ccb4d-2d44-4289-950a-b9cb51d58ac4);

ProductInformation[] products = vmiService.GetHierarchyInfo(vendor);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetHierarchyInfoResponse xmlns="http://www.iqmetrix.com">
            <GetHierarchyInfoResult>
                <Channels>
                    <Channel>
                        <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
                        <ChannelName>First Channel</ChannelName>
                        <StoreCount>1</StoreCount>
                        <Regions>
                            <Region>
                                <RegionID>1</RegionID>
                                <RegionName>First Region</RegionName>
                                <StoreCount>1</StoreCount>
                                <Districts>
                                    <District>
                                        <DistrictID>1</DistrictID>
                                        <DistrictName>First District</DistrictName>
                                        <StoreCount>1</StoreCount>
                                        <Stores>
                                            <StoreInformation>
                                                <StoreID>25</StoreID>
                                                <Name>Chicago- Halsted</Name>
                                                <Address />
                                                <City>Orlando</City>
                                                <ProvinceState>FL</ProvinceState>
                                                <PostalZipCode>32801</PostalZipCode>
                                                <Country>United States</Country>
                                                <PhoneNumber />
                                                <ShipToStoreID>7</ShipToStoreID>
                                                <BillToStoreID>7</BillToStoreID>
                                                <VendorAccountNumber>-</VendorAccountNumber>
                                                <Abbreviation>FREDS</Abbreviation>
                                            </StoreInformation>
                                        </Stores>
                                    </District>
                                </Districts>
                            </Region>
                        </Regions>
                    </Channel>
                </Channels>
            </GetHierarchyInfoResult>
        </GetHierarchyInfoResponse>
    </soap:Body>
</soap:Envelope>
```

From the response the RegionID value <code>1</code> will be used in the following steps.

## Step 7 - Run a Report

To assist in determining which products need to be replenished the VMI API provides several reports (see **Table 2**).

**Table 2:** Descriptions of reports in the VMI API

| Name | Description |
|:-----|:------------|
| [Inventory Report](/api/vmi/#getting-the-inventory-report) | Inventory report for a particular store, including minimum and maximum inventory, quantity on hand, quantity sold within a particular date range, product SKU, etc. | 
| [Inventory Report by Vendor SKU](/api/vmi/#getting-the-inventory-report-by-vendor-sku) | Inventory Report for all stores at a level in the company tree by a specified Vendor SKU | 
| [Inventory Listing Report](/api/vmi/#getting-the-inventory-listing-report) | Detailed list of locations and on-hand products where you are set as the primary vendor for that product | 
| [Geographic Inventory Report](/api/vmi/#getting-the-geographic-inventory-report) | Inventory data for a geographical or logical grouping of locations | 
| [Adjustment Report](/api/vmi/#getting-the-adjustment-report) | List of inventory adjustments with quantity and reason codes within a date range | 
| [Product Sales Report](/api/vmi/#getting-the-product-sales-report) | Detailed sell through data for products where you are set as the primary vendor | 

For this example the **Inventory Listing Report** will be run for the "Chicago - Halsted" location using the following parameters:

* ClientID value `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` from [Step 2](#step-2---get-list-of-companiest)
* StoreID value `2` from [Step 5](#step-5---get-a-store-list)

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=GetInventoryReport
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetInventoryListingReport xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <Client>
               <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
               <StoreID>25</StoreID>
            </Client>
         </Vendor>
         <regionId>2</regionId>
      </GetInventoryListingReport>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = new Guid(c46ccb4d-2d44-4289-950a-b9cb51d58ac4);

ProductInformation[] products = vmiService.GetInventoryListingReport(vendor, 2);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
        <GetInventoryListingReportResponse xmlns="http://www.iqmetrix.com">
            <GetInventoryListingReportResult>
                <InventoryListingData>
                    <Location>Chicago - Halsted</Location>
                    <ProductSKU>ACCRTM000001</ProductSKU>
                    <Description>Samsung Galaxy S5 - Charcoal Black</Description>
                    <TrackingNumber>12345</TrackingNumber>
                    <Quantity>1</Quantity>
                    <VendorName>Dan's Supplies</VendorName>
                    <VendorSKU>SSGS5CB</VendorSKU>
                    <ManufacturerSKU />
                    <CategoryPath> &gt;&gt; Activations &gt;&gt; SamsungCR</CategoryPath>
                    <RegionName>First Region</RegionName>
                    <RegionID>1</RegionID>
                    <DistrictName>First District</DistrictName>
                    <DistrictID>1</DistrictID>
                    <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
                    <ChannelName>First Channel</ChannelName>
                </InventoryListingData>
                <InventoryListingData>
                    <Location>Chicago - Halsted</Location>
                    <ProductSKU>ACCRTM000001</ProductSKU>
                    <Description>Samsung Galaxy S5 - Charcoal Black</Description>
                    <TrackingNumber>4351233rt1re3rfggfds</TrackingNumber>
                    <Quantity>1</Quantity>
                    <VendorName>Dan's Supplies</VendorName>
                    <VendorSKU>SSGS5CB</VendorSKU>
                    <ManufacturerSKU />
                    <CategoryPath> &gt;&gt; Activations &gt;&gt; SamsungCR</CategoryPath>
                    <RegionName>First Region</RegionName>
                    <RegionID>1</RegionID>
                    <DistrictName>First District</DistrictName>
                    <DistrictID>1</DistrictID>
                    <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
                    <ChannelName>First Channel</ChannelName>
                </InventoryListingData>                
            </GetInventoryListingReportResult>
        </GetInventoryListingReportResponse>
   </soap:Body>
</soap:Envelope>
```

From the response the VendorSKU value <code>SSGS5CB</code> will be used in the following steps.

## (Optional) Step 8 - Get Inventory Information

For additional product and inventory information, VMI provides several inventory specific requests (See **Table 3**).

**Table 3:** Descriptions of inventory requests in the VMI API

| Name | Description |
|:-----|:------------|
| [Inventory List](/api/vmi/#getting-the-inventory-list) | List of products for which the vendor is set as the primary vendor in RQ | 
| [Updated Inventory List](/api/vmi/#getting-the-updated-inventory-list) | List of products added since the last time you called this request or Inventory List | 
| [Serial Numbers For a Product](/api/vmi/#getting-serial-numbers-for-a-product) | List of serial numbers for a product | 
| [Product Receiving Info](/api/vmi/#getting-product-receiving-info) | List of products received in a given date range | 
| [Transfer Counts](/api/vmi/#getting-transfer-counts) | Counts of items transfered between a given date range | 
| [Updating Product Quantities](/api/vmi/#updating-product-quantities) | Modify minimum and maxiumum quantity thresholds for a given product in a given store | 

For this example the Inventory List will be run for the Chicago - Halsted store using the following parameters:

* ClientID value `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` from [Step 2](#step-2---get-list-of-companiest)

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=GetInventoryList
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetInventoryList xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <Client>
               <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
            </Client>
         </Vendor>
      </GetInventoryList>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = new Guid(c46ccb4d-2d44-4289-950a-b9cb51d58ac4);

ProductInformation[] products = vmiService.GetInventoryList(vendor);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetInventoryListResponse xmlns="http://www.iqmetrix.com">
            <GetInventoryListResult>
                <ProductInformation>
                    <ProductID>00000000-0000-0000-0000-000000000000</ProductID>
                    <ProductSKU>ACCRTM000001</ProductSKU>
                    <VendorSKU>SSGS5CB</VendorSKU>
                    <ProductItemID>17</ProductItemID>
                    <CategoryPath> &gt;&gt; Activations &gt;&gt; SamsungCR</CategoryPath>
                    <MaximumLevel>-1</MaximumLevel>
                    <MinimumLevel>-1</MinimumLevel>
                    <ProductCost>100</ProductCost>
                    <QuantityInStock>-1</QuantityInStock>
                    <QuantityOnOrder>-1</QuantityOnOrder>
                    <QuantityOnUncommittedOrder>-1</QuantityOnUncommittedOrder>
                    <QuantityOnBackOrder>-1</QuantityOnBackOrder>
                    <QuantityInTransfer>-1</QuantityInTransfer>
                    <QuantityOnRMA>-1</QuantityOnRMA>
                    <QuantityOnLoan>-1</QuantityOnLoan>
                    <QuantityCommittedOnOrderEntry>-1</QuantityCommittedOnOrderEntry>
                    <QuantitySuggestedByVendor>-1</QuantitySuggestedByVendor>
                    <QuantitySold>-1</QuantitySold>
                    <GrossQuantitySold>-1</GrossQuantitySold>
                    <GrossQuantityReturned>-1</GrossQuantityReturned>
                    <QuantityOrdered>-1</QuantityOrdered>
                    <QuantityReceived>-1</QuantityReceived>
                    <ProductReceived>false</ProductReceived>
                    <Enabled>true</Enabled>
                    <MinMaxLocked>false</MinMaxLocked>
                    <DoNotOrder>false</DoNotOrder>
                    <DateEOL xsi:nil="true" />
                    <RetailPrice>0</RetailPrice>
                    <SalePrice xsi:nil="true" />
                    <SaleBegin xsi:nil="true" />
                    <SaleEnd xsi:nil="true" />
                    <ProductName>Samsung Galaxy S5 - Charcoal Black</ProductName>
                </ProductInformation>
            </GetInventoryListResult>
        </GetInventoryListResponse>
    </soap:Body>
</soap:Envelope>
```

## Step 9 - Create a Purchase Order

The request <a href='/api/vmi/#creating-a-purchase-order'>Creating a Purchase Order</a> allows you to create a purchase order for a particular store and a set of products. 

To create a purchase order, you must be listed as the primary vendor for a product in RQ <strong>and</strong> the company must be enabled in the VMI API

For this example the Purchase Order will have the following properties:

* ClientID value `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` from [Step 2](#step-2---get-list-of-companiest)
* StoreID, BillToStoreID and ShipToStoreID value `25` from [Step 5](#step-5---get-a-store-list)
* VendorSKU value `SSGS5CB` from [Step 7](#step-7---run-a-report)
* Unique vendor invoice number `123456723424389`

When created, the Purchase Order will appear in the Inventory section of RQ.

**Figure 3:** Purchase Order in RQ

<img class="popUpImage" title="Purchase Order in RQ" src="http://developers.iqmetrix.com/images/vmi/receipt.png"/> 

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=CreatePurchaseOrder
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <CreatePurchaseOrder xmlns="http://www.iqmetrix.com">
         <Vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <Client>
               <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
               <StoreID>25</StoreID>
            </Client>
         </Vendor>
         <PurchaseOrder>
            <PurchaseOrderData>
               <BillToStoreID>25</BillToStoreID>
               <EstimatedArrivalDate>01/01/2017</EstimatedArrivalDate>
               <ShipToStoreID>25</ShipToStoreID>
               <VendorInvoiceNumber>123456723424389</VendorInvoiceNumber>
            </PurchaseOrderData>
            <ProductsOrdered>
               <ProductInformation>
                  <QuantityOrdered>2</QuantityOrdered>
                  <VendorSKU>SSGS5CB</VendorSKU>
               </ProductInformation>
            </ProductsOrdered>
         </PurchaseOrder>
      </CreatePurchaseOrder>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = new Guid(c46ccb4d-2d44-4289-950a-b9cb51d58ac4);
vendor.Client.StoreID = 25;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = 25;
po.PurchaseOrderData.ShipToStoreID = 25;
po.PurchaseOrderData.VendorInvoiceNumber = "123456723424389";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].VendorSKU = "SSGS5CB";
po.ProductsOrdered[0].QuantityOrdered = 2;

PurchaseOrder poCreated = vmiService.CreatePurchaseOrder(vendor, po);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrderResponse xmlns="http://www.iqmetrix.com">
      <CreatePurchaseOrderResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>25</BillToStoreID>
          <BillToStoreName>Chicago - Halsted</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>01/01/2017 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>25</ShipToStoreID>
          <ShipToStoreName>Chicago - Halsted</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>123456723424389</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <VendorSKU>SSGS5CB</VendorSKU>
            <QuantityOrdered>2</QuantityOrdered>
            <CategoryPath> &gt;&gt; Smartphones</CategoryPath>
            <DateEOL xsi:nil="true" />
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantityReturned>1</GrossQuantityReturned>
            <GrossQuantitySold>8</GrossQuantitySold>
            <MinimumLevel>1</MinimumLevel>
            <MaximumLevel>10</MaximumLevel>
            <MinMaxLocked>true</MinMaxLocked>
            <ProductCost>499</ProductCost>
            <ProductID>00000000-0000-0000-0000-000000000000</ProductID>
            <ProductItemID>18</ProductItemID>
            <ProductName>Samsung Galaxy S4 64GB - Black Mist</ProductName>
            <ProductRecieved>false</ProductRecieved>
            <ProductSKU>ACCRTM000002</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>0</QuantityInStock>
            <QuantityInTransfer>0</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>0</QuantityOnLoan>
            <QuantityOnOrder>0</QuantityOnOrder>
            <QuantityOnRMA>0</QuantityOnRMA>
            <QuantityOnUncommittedOrder>0</QuantityOnUncommittedOrder>
            <QuantityReceived>-1</QuantityReceived>
            <QuantitySold>10</QuantitySold>
            <QuantitySuggestedByVendor>5</QuantitySuggestedByVendor>
            <RetailPrice>699.99</RetailPrice>
            <SaleBegin xsi:nil="true" />
            <SaleEnd xsi:nil="true" />
            <SalePrice xsi:nil="true" />
          </ProductInformation>
        </ProductsOrdered>
      </CreatePurchaseOrderResult>
    </CreatePurchaseOrderResponse>
  </soap:Body>
</soap:Envelope>
```

## (Optional) Step 10 - Create a Purchase Order Shipment Notice (ASN)

The request <a href='/api/vmi/#creating-a-purchase-order-shipment-notice'>Creating a Purchase Order Shipment Notice</a> allows you to create a shipment notice for an existing purchase order.

The shipment notice will be used when receiving purchase order products with serial numbers or SKUs.

Although multiple shipment notices can be created for a single purchase order, each shipment notice is for a single product.

For this example the Purchase Order Shipment Notice will have the following properties:

* ClientID value `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` from [Step 2](#step-2---get-list-of-companiest)
* VendorSKU value `SSGS5CB` from [Step 7](#step-7---run-a-report)
* Unique vendor invoice number `123456789`

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIService.asmx/?op=CreatePurchaseOrderShipmentNotice
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
     <CreatePurchaseOrderShipmentNotice 
          xmlns="http://www.iqmetrix.com">
          <vendor>
            <VendorID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</VendorID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <Client>
              <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
              <StoreID>25</StoreID>
            </Client>
          </vendor>
          <notice>
            <PurchaseOrderShipmentNotice>
              <Quantity>2</Quantity> 
              <VendorInvoiceNumber>123456789</VendorInvoiceNumber>
              <VendorSKU>SSGS5CB</VendorSKU>
            </PurchaseOrderShipmentNotice>
          </notice>
        </CreatePurchaseOrderShipmentNotice>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = new Guid(c46ccb4d-2d44-4289-950a-b9cb51d58ac4);
vendor.Client.StoreID = 25;

PurchaseOrderShipmentNotice sn = new PurchaseOrderShipmentNotice();

sn.VendorInvoiceNumber = 123456789;
sn.VendorSKU = "SSGS5CB";
sn.Quantity = 2;

PurchaseOrderShipmentNotice snReturn = vmiService.CreatePurchaseOrderShipmentNotice(vendor, new[] { sn });
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <CreatePurchaseOrderShipmentNoticeResponse xmlns="http://www.iqmetrix.com">
            <CreatePurchaseOrderShipmentNoticeResult>
                <PurchaseOrderShipmentNotice>
                    <ShipmentNumber>SHIP001</ShipmentNumber>
                    <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
                    <RQPurchaseOrderID>22073</RQPurchaseOrderID>
                    <VendorInvoiceNumber>123456789</VendorInvoiceNumber>
                    <ProductItemID>18</ProductItemID>
                    <Quantity>2</Quantity>
                    <VendorSKU>SSGS5CB</VendorSKU>
                    <SerialNumbers />
                </PurchaseOrderShipmentNotice>
            </CreatePurchaseOrderShipmentNoticeResult>
        </CreatePurchaseOrderShipmentNoticeResponse>
    </soap:Body>
</soap:Envelope>
```

# Next Steps

Now that you have created a Purchase Order and/or Purchase Order Shipment Notice, you may be interested in:

* [Canceling an Uncommitted Purchase Order](/api/vmi/#canceling-an-uncommitted-purchase-order)
* [Getting Committed Purchase Orders](/api/vmi/#getting-committed-purchase-orders)
* [Getting Completed Purchase Orders](/api/vmi/#getting-completed-purchase-orders)
* [Getting Purchase Order by Business Id](/api/vmi/#getting-purchase-order-by-business-id)
* [Getting Purchase Order By Reference Number](/api/vmi/#getting-purchase-order-by-reference-number)
* [Getting Purchase Orders by Status](/api/vmi/#getting-purchase-orders-by-status)
* [Getting Uncommitted Purchase Orders](/api/vmi/#getting-uncommitted-purchase-orders)
* [Getting Purchase Orders for a Store](/api/vmi/#getting-purchase-orders-for-a-store)
* [Getting Purchase Order Shipment Notices](/api/vmi/#getting-purchase-order-shipment-notices)

# Troubleshooting

If you encouter any errors while following this guide, see <a href="http://developers.iqmetrix.com/api/cmi/#errors">Errors</a>