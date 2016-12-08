---
title: Customer Managed Inventory Guide
search: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>

# Overview

This guide is intended to walk you through the process of creating a Purchase Order (PO) and Purchase Order Shipment Notice (POSN) in RQ using the [Customer Managed Inventory (CMI)](/api/cmi) API.

The CMI API allows companies to create purchase orders for their own RQ database using an API.

**Figure 1:** CMI flow

<img class="popUpImage" title="Purchase Order in RQ" src="http://developers.iqmetrix.com/images/vmi/cmi-flow.png"/> 

## Who Is This Guide For?

You may be interested in this guide if your company uses **RQ** and you are interested in joining the CMI program.

## Postman Example

iQmetrix uses <a href="http://www.getpostman.com" target="_blank">Postman</a> when <a href="/api/#testing-and-debugging">testing and debugging</a> our APIs.

For Chrome or Mac users, click the button below to import the collection directly into Postman.

Alternatively, you can download the collection by clicking <a href="https://www.getpostman.com/collections/5a5b7229798b8e6c28af">here</a>.

## Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact <a href ="mailto:apisupport@iqmetrix.com?subject=Support">API Support</a>.

## Architecture

The CMI API is implemented as a web service using standard Simple Object Access Protocol (SOAP) to send XML messages between vendor and iQmetrix.

This allows the API to be platform and programming language independent. 

Communication is done using SSL on the standard port 443 in order to secure data transfers.

## Environment

iQmetrix provides you with two environments, **Sandbox** and **Production**. 

**Table 1:** CMI Environments and WSDL locations

| Name | Description | WSDL |
|:-----|:------------|:-----|
| Sandbox | Used for testing your API and end-to-end testing | [https://vmidemo.iqmetrix.net/VMIClientService.asmx](https://vmidemo.iqmetrix.net/VMIClientService.asmx) |
| Production | Used once development is complete | [https://vmi1.iqmetrix.net/VMIClientService.asmx](https://vmi1.iqmetrix.net/VMIClientService.asmx) |

For more information, see [Environments](http://developers.iqmetrix.com/api/#environments).

# Steps

## Step 1 - Authentication

In order to make authorized requests to the CMI API, you need credentials: a username, password, and the `CompanyID` for your company.

Please contact <a href ="mailto:apisupport@iqmetrix.com?subject=CMI Credentials">API Support</a> for credentials.

## Step 2 - Get Store List


>
> Example Request
>

```
POST https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetStoreList
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetStoreList xmlns="http://www.iqmetrix.com">
         <client>
            <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
         </client>
      </GetStoreList>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
CmiServiceSoapClient cmiService = new CMIServiceSoapClient();
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

StoreInformation[] stores = cmiService.GetStoreList(client);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetStoreListResponse xmlns="http://www.iqmetrix.com">
         <GetStoreListResult>
            <StoreInformation>
               <StoreID>36</StoreID>
               <Name>Cornwall West</Name>
               <Abbreviation>CWW</Abbreviation>
               <Address>2102 11th Ave</Address>
               <City>Regina</City>
               <Country>Canada</Country>
               <District>Regina</District>
               <PhoneNumber>5555555555</PhoneNumber>
               <PostalZipCode>S2S 2S2</PostalZipCode>
               <ProvinceState>Saskatchewan</ProvinceState>
               <Region>Regina</Region>
               <ShipToStoreID>-1</ShipToStoreID>
               <BillToStoreID>-1</BillToStoreID>
            </StoreInformation>
         </GetStoreListResult>
      </GetStoreListResponse>
   </soap:Body>
</soap:Envelope>
```

To create a purchase order for a store, you must know its `StoreID`.

The request <a href='/api/cmi/#getting-all-cmi-enabled-stores'>Getting a Store List</a> is used to get a list of all CMI enabled stores for a company.


<div class='bs-callout bs-callout-info'>
From the response the StoreID value <code>36</code> will be used in the following steps.
</div>

## Step 3 - Run a Report


>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIClientService.asmx/?op=GetProductSalesReport
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetProductSalesReport  xmlns="http://www.iqmetrix.com">
         <client>
            <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <StoreID>36</StoreID>
         </client>
         <storeId>36</storeId>
         <startDate>01/01/2016</startDate>
         <endDate>01/30/2016</endDate>
      </GetProductSalesReport>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
CmiServiceSoapClient cmiService = new CMIServiceSoapClient();
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = 36;

ProductSalesReportData[] productReport = cmiService.GetProductSalesReport(client, "01/01/2016", "01/30/2016", 36);
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>    
    <GetProductSalesReportResponse 
      xmlns="http://www.iqmetrix.com">
      <GetProductSalesReportResult>
        <ProductSalesReportData>
          <CategoryPath>Activation >> Dropship</CategoryPath>
          <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
          <ChannelName>First Channel</ChannelName>
          <Description></Description>
          <DistrictID>1</DistrictID>
          <DistrictName>First District</DistrictName>
          <InvoicedBy>iQmetrix User</InvoicedBy>
          <ListPrice>99.99</ListPrice>
          <ProductItemID>11142</ProductItemID>
          <ProductSKU>CECPSM000017</ProductSKU>
          <Quantity>1</Quantity>
          <Refund>false</Refund>
          <RegionID>1</RegionID>
          <RegionName>First Region</RegionName>
          <RqInvoiceIdByStore>BDP123</RqInvoiceIdByStore>
          <SoldOn>1/21/2016 4:58:24 PM</SoldOn>
          <StoreID>36</StoreID>
          <TrackingNumber>12345</TrackingNumber>
          <VendorSKU>WMGCMSSL12</VendorSKU>
        </ProductSalesReportData>
      </GetProductSalesReportResult>
    </GetProductSalesReportResponse>
  </soap:Body>
</soap:Envelope>
```

To assist in determining which products need to be replenished the CMI API provides a report to get detailed sell through data, <a href='/api/vmi/#getting-the-product-sales-report'>Product Sales Report</a>.

For this example the Product Sales Report will be run for the Cornwall West store for January 1-30th, 2016 using the following parameters:

* StoreID value `36` from [Step 2](#step-2---get-store-list)
* StartDate value `01/01/2016` for January 1st, 2016
* EndDate value `01/30/2016` for January 30th, 2016

<div class='bs-callout bs-callout-info'>
From the response the VendorSKU value <code>WMGCMSSL12</code> will be used in the following steps.
</div>

## (Optional) Step 4 - Get Inventory Information

>
> Example Request
>
    
```
POST https://vmirc.iqmetrix.net/VMIClientService.asmx/?op=GetReceivingInfo
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetReceivingInfo xmlns="http://www.iqmetrix.com">
         <client>
            <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <StoreID>36</StoreID>
         </client>
         <StartDate>01/01/2016</StartDate>
         <EndDate>01/30/2016</EndDate>
      </GetReceivingInfo>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
CmiServiceSoapClient cmiService = new CMIServiceSoapClient();
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

ReceivingInfo[] received = cmiService.GetReceivingInfo(client, "01/01/2016", "01/30/2016");
```

>
> Example Response
>

```
HTTP 200 Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <GetReceivingInfoResponse xmlns="http://www.iqmetrix.com">
         <GetReceivingInfoResult>
            <ReceivingInfo>
               <ProductItemID>12644</ProductItemID>
               <ProductName>96164 gift card</ProductName>
               <ShipToStoreID>1</ShipToStoreID>
               <ShipToStoreName>Cornwall Centre</ShipToStoreName>
               <RQPurchaseOrderNumber>CORNWPO3573</RQPurchaseOrderNumber>
               <VendorName>Apple</VendorName>
               <VendorSKU />
               <SerialNumber />
               <Quantity>100</Quantity>
               <DateReceived>7/22/2016 3:29:22 PM</DateReceived>
               <ProductCost>0</ProductCost>
               <RQReceivingNumber>CORNWRE6058</RQReceivingNumber>
            </ReceivingInfo>
         </GetReceivingInfoResult>
      </GetReceivingInfoResponse>
   </soap:Body>
</soap:Envelope>
```

If the report did not provide enough information to decide which products to replenish, the CMI API provides the request <a href='/api/cmi/#getting-receiving-info'>Getting Receiving Info</a> to get a list of products received in a given date range.


## Step 5 - Create a Purchase Order

>
> Example Request
>
    
```
POST https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=CreatePurchaseOrderShipmentNotice
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <CreatePurchaseOrder xmlns="http://www.iqmetrix.com">
         <client>
            <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <StoreID>36</StoreID>
         </client>
         <vendorId>96D20A50-65BB-42EE-B6D2-001CFBE8F848</vendorId>
         <PurchaseOrder>
            <PurchaseOrderData>
               <BillToStoreID>36</BillToStoreID>
               <EstimatedArrivalDate>01/01/2017</EstimatedArrivalDate>
               <ShipToStoreID>36</ShipToStoreID>
               <VendorInvoiceNumber>11412512</VendorInvoiceNumber>
            </PurchaseOrderData>
            <ProductsOrdered>
               <ProductInformation>
                  <VendorSKU>WMGCMSSL12</VendorSKU>
                  <QuantityOrdered>1</QuantityOrdered>
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
CmiServiceSoapClient cmiService = new CMIServiceSoapClient();
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = 36;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = 36;
po.PurchaseOrderData.ShipToStoreID = 36;
po.PurchaseOrderData.VendorInvoiceNumber = "11412512";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].VendorSKU = "WMGCMSSL12";
po.ProductsOrdered[0].QuantityOrdered = 1;

PurchaseOrder poCreated = cmiService.CreatePurchaseOrder(vendor, po);
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
                <PurchaseOrderID>28890f70-6fc9-4a9b-9458-410a8d08502d</PurchaseOrderID>
                <PurchaseOrderData>
                    <PurchaseOrderID>28890f70-6fc9-4a9b-9458-410a8d08502d</PurchaseOrderID>
                    <RetailiQPurchaseOrderID>22140</RetailiQPurchaseOrderID>
                    <RetailiQPurchaseOrderNumber>ANLOCPO6</RetailiQPurchaseOrderNumber>
                    <ShipToStoreID>36</ShipToStoreID>
                    <ShipToVendorAccountNumber />
                    <BillToStoreID>36</BillToStoreID>
                    <BillToVendorAccountNumber />
                    <OrderTotal>-1</OrderTotal>
                    <ShippingTotal>-1</ShippingTotal>
                    <VendorInvoiceNumber>11412512</VendorInvoiceNumber>
                    <EstimatedArrivalDate>01/01/2017</EstimatedArrivalDate>
                    <ShipToStoreName />
                    <BillToStoreName />
                    <VendorName />
                    <CreatedByVMI>true</CreatedByVMI>
                    <CreatedDate>10/14/2016 09:39:05</CreatedDate>
                    <IsDeleted>false</IsDeleted>
                </PurchaseOrderData>
                <ProductsOrdered>
                    <ProductInformation>
                        <ProductID>00000000-0000-0000-0000-000000000000</ProductID>
                        <VendorSKU>WMGCMSSL12</VendorSKU>
                        <ProductItemID>0</ProductItemID>
                        <MaximumLevel>-1</MaximumLevel>
                        <MinimumLevel>-1</MinimumLevel>
                        <ProductCost>90.01</ProductCost>
                        <QuantityInStock>-1</QuantityInStock>
                        <QuantityOnOrder>-1</QuantityOnOrder>
                        <QuantityOnUncommittedOrder>-1</QuantityOnUncommittedOrder>
                        <QuantityOnBackOrder>-1</QuantityOnBackOrder>
                        <QuantityInTransfer>-1</QuantityInTransfer>
                        <QuantityTransferIn>-1</QuantityTransferIn>
                        <QuantityTransferOut>-1</QuantityTransferOut>
                        <QuantityOnRMA>-1</QuantityOnRMA>
                        <QuantityOnLoan>-1</QuantityOnLoan>
                        <QuantityCommittedOnOrderEntry>-1</QuantityCommittedOnOrderEntry>
                        <QuantitySuggestedByVendor>-1</QuantitySuggestedByVendor>
                        <QuantitySold>-1</QuantitySold>
                        <GrossQuantitySold>-1</GrossQuantitySold>
                        <GrossQuantityReturned>-1</GrossQuantityReturned>
                        <QuantityOrdered>4</QuantityOrdered>
                        <QuantityReceived>-1</QuantityReceived>
                        <ProductReceived>false</ProductReceived>
                        <Enabled>false</Enabled>
                        <MinMaxLocked>false</MinMaxLocked>
                        <DoNotOrder>false</DoNotOrder>
                        <DateEOL xsi:nil="true" />
                        <RetailPrice>0</RetailPrice>
                        <SalePrice xsi:nil="true" />
                        <SaleBegin xsi:nil="true" />
                        <SaleEnd xsi:nil="true" />
                    </ProductInformation>
                </ProductsOrdered>
            </CreatePurchaseOrderResult>
        </CreatePurchaseOrderResponse>
    </soap:Body>
</soap:Envelope>
```

The request <a href='/api/cmi/#creating-a-purchase-order'>Creating a Purchase Order</a> allows you to create a purchase order for a particular store and a set of products. 

For this example the Purchase Order will have the following properties:

* BillToStoreID and ShipToStoreID value `36` from [Step 2](#step-2---get-store-list)
* VendorSKU value `WMGCMSSL12` from [Step 3](#step-3---run-a-report)
* Unique VendorInvoiceNumber value `11412512`

When created, the Purchase Order will appear in the Inventory section of RQ.

**Figure 1:** Purchase Order in RQ

<img class="popUpImage" title="Purchase Order in RQ" src="http://developers.iqmetrix.com/images/vmi/cmi-receipt.png"/> 

<div class='bs-callout bs-callout-info'>
From the response the PurchaseOrderID value <code>28890f70-6fc9-4a9b-9458-410a8d08502d</code> will be used in the following steps.
</div>

## (Optional) Step 6 - Create a Purchase Order Shipment Notice

>
> Example Request
>
    
```
POST https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=CreatePurchaseOrderShipmentNotice
Content-Type: text/xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <CreatePurchaseOrderShipmentNotice xmlns="http://www.iqmetrix.com">
         <client>
            <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
            <Username>sampleusername</Username>
            <Password>samplepassword</Password>
            <StoreID>36</StoreID>
         </client>
         <notice>
            <PurchaseOrderShipmentNotice>
               <PurchaseOrderID>a8a6b722-a04e-46bc-953b-ff16e5f6eb5e</PurchaseOrderID>
               <Quantity>1</Quantity>
               <VendorSKU>WMGCMSSL12</VendorSKU>
               <SerialNumbers>
                  <string>97000012</string>
               </SerialNumbers>
            </PurchaseOrderShipmentNotice>
         </notice>
      </CreatePurchaseOrderShipmentNotice>
   </soap:Body>
</soap:Envelope>
```

>
> Code Example Request
>

```java
CmiServiceSoapClient cmiService = new CMIServiceSoapClient();
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = 36;

PurchaseOrderShipmentNotice shipmentNotice = new PurchaseOrderShipmentNotice();
shipmentNotice.PurchaseOrderID = new GUID();
shipmentNotice.Quantity = 1;
shipmentNotice.VendorSKU = "WMGCMSSL12";
shipmentNotice.SerialNumber = {"97000012"};

PurchaseOrderShipmentNotice snReturn = cmiService.CreatePurchaseOrderShipmentNotice(client, new[] { shipmentNotice });
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
                    <ShipmentNumber>JUMHO22073-10</ShipmentNumber>
                    <PurchaseOrderID>00000000-0000-0000-0000-000000000000</PurchaseOrderID>
                    <RQPurchaseOrderID>22073</RQPurchaseOrderID>
                    <ProductItemID>11142</ProductItemID>
                    <Quantity>1</Quantity>
                    <SerialNumbers>
                        <string>97000012</string>
                    </SerialNumbers>
                </PurchaseOrderShipmentNotice>
            </CreatePurchaseOrderShipmentNoticeResult>
        </CreatePurchaseOrderShipmentNoticeResponse>
    </soap:Body>
</soap:Envelope>
```

The request <a href='/api/cmi/#creating-a-purchase-order-shipment-notice'>Creating a Purchase Order Shipment Notice</a> allows you to create a shipment notice for an existing purchase order with serial numbers.

For this example the Purchase Order Shipment Notice will have the following properties:

* StoreID value `36` from [Step 2](#step-2---get-store-list)
* PurchaseOrderID value `28890f70-6fc9-4a9b-9458-410a8d08502d` from [Step 5](#step-5---create-a-purchase-order)
* VendorSKU value `WMGCMSSL12` from [Step 3](#step-3---run-a-report)
* SerialNumber value `97000012` 

## Next Steps

Now that you have created a Purchase Order and/or Purchase Order Shipment Notice, you may be interested in:

* [Updating the Location for a Purchase Order](/api/cmi#updating-the-location-for-a-purchase-order)
* [Updating Comments for a Purchase Order](/api/cmi/#updating-comments-for-a-purchase-order)
* [Creating an Uncommitted Purchase Order](/api/cmi/#creating-an-uncommitted-purchase-order)
* [Getting Purchase Orders By Status](/api/cmi/#getting-purchase-orders-by-status)
* [Getting Purchase Orders By Reference Number](/api/cmi/#getting-purchase-orders-by-reference-number)
* [Getting Client Purchase Orders By Business Key](/api/cmi/#getting-client-purchase-orders-by-business-key)

## Troubleshooting

If you encouter any errors while following this guide, 

> See <a href="http://developers.iqmetrix.com/api/cmi/#errors">Errors</a>