---
title:  Carrier Integration
permalink: /api/carrier-integration/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

There are a number of resources in the Carrier Integration API that have **carrier-specific** properties, or values without a defined use.

These properties should be populated with values meaningful to you, generally from an external system.

Below is a full list of these properties along with iQmetrix recommendation:

| Property | Recommendation |
|:---------|:---------------|
| ActivatedProduct.SOCCode | Carrier service offer code to identify a product |
| ActivationConfirmationDetails.RemoteActivationID | Identifier for a confirmed Activation in an external system |
| AdditionalFee.ReferenceNumber | Identifier for an AdditionalFee in an external system |
| AdditionalFee.SOCCode | Carrier service offer code to identify any additional fees, such as a recycling fee |
| AdditionalFee.Notes | Text that contains information to be stored with this AdditionalFee |
| CarrierActivationDetails.DealerName | Name of a Dealer associated with this Activation |
| CarrierActivationDetails.DealerCode | Dealer code for a Dealer for this Activation in an external system |
| CarrierActivationDetails.RemoteActivationID | Identifier for an Activation in an external system |
| CarrierActivationDetails.TrackingNumber | Tracking number for this Activation in an external system |
| CarrierActivationDetails.Notes | Text that contains information to be stored with this Activation |
| RatePlan.RatePlanId | Identifier for a RatePlan in an external system |
| RatePlan.SOCCode | Carrier service offer code to identify the rate plan |
| RatePlanFeature.RatePlanAddonId | Identifier for a RatePlanAddOn in an external system |
| RatePlanFeature.SOCCode | Carrier service offer code to identify additional features the Subscriber has selected |
| Subscriber.SubscriberId | Identifier for a Subscriber in an external system |
| Subscriber.Notes | Text that contains information to be stored with this Subscriber |
| Subscriber.AssociatedAccount.AccountId | Identifier for a Subscriber account in an external system |
| Subscriber.AssociatedAccount.TrackingNumber | Tracking number for a Subscriber account in an external system |
| Subscriber.AssociatedAccount.Notes | Notes about the Subscriber account |
| VendorRebate.ReferenceNumber | Identifier for a VendorRebate in an external system |
| VendorRebate.SOCCode | Carrier service offer code to identify a vendor rebate |
| VendorRebate.Notes | Text that contains information to be stored with this VendorRebate |



# Endpoints


* Sandbox: <a href="https://carrierservicesdemo.iqmetrix.net/v2">https://carrierservicesdemo.iqmetrix.net/v2</a>
* Production: <a href="https://carrierservices.iqmetrix.net/v2">https://carrierservices.iqmetrix.net/v2</a>



# Resources


## Activation

An <strong>Activation</strong> contains IDs necessary to identify an activation, and all the activation details.

```json
{
	"Id": "6=1115550123",
	"CarrierActivationDetails": "undefined",
	"CarrierId": "41",
	"CompanyId": "1234",
	"LocationId": "5678"
}
```

| Name | Description |
|:-----|:------------|
| Id (`String`) | Identifier | 
| CarrierActivationDetails (`[carrier-integration](/api/carrieractivationdetails/#CarrierActivationDetails)`) | The details of this Activation | 
| CarrierId (`Integer`) | Identifier of the carrier for this request. This is not an entity ID; it is specific to the Carrier Integration Service | 
| CompanyId (`Integer`) | Identifier of the [Company](/api/company-tree/#company) making this request | 
| LocationId (`Integer`) | Identifier of the [Location](/api/company-tree/#location) making this request | 

## CarrierActivationDetails

A <strong>CarrierActivationDetails</strong> contains all of the customer, product, and rate plan information necessary to process an activation.

```json
{
	"ActivationId": "354",
	"ActivationDate": "2015-06-19T05:44:39.7163989Z",
	"ActivatedProduct": "undefined",
	"ActivationState": "Pending",
	"ActivationTermCode": "EarlyUpgrade",
	"ActivationType": "NewActivation",
	"AdditionalFees": "undefined",
	"ContractLengthInMonths": "24",
	"ContractNumberIsAccountNumber": "false",
	"DealerName": "IAPR",
	"DealerCode": "IAPR",
	"Deposit": "undefined",
	"Notes": "Notes go here!",
	"OrderNumber": "ORD1234",
	"RatePlans": "undefined",
	"RemoteActivationID": "3023997373",
	"Subscriber": "undefined",
	"TrackingNumber": "3023997373"
}
```

| Name | Description |
|:-----|:------------|
| ActivationId (`Integer`) | System-generated identifier | 
| ActivationDate (`DateTime`) | Date the [Activation](#activation) occurred (in UTC). This value is system generated and immutable | 
| ActivatedProduct (`[carrier-integration](/api/activatedproduct/#ActivatedProduct)`) | The Product that is being activated | 
| ActivationState (`String`) | State of the [Activation](#activation). See [ActivationState](#activationstate) for a list of acceptable values | 
| ActivationTermCode (`String(64)`) | Type of term for the contract. Possible values vary by carrier | 
| ActivationType (`String`) | The type of this [Activation](#activation), such as a new [Activation](#activation) or an upgrade. See [ActivationType](#activationtype) for a list of acceptable values | 
| AdditionalFees (`Array[[carrier-integration](/api/additionalfee/#AdditionalFee)]`) | Any fees applicable, not including the deposit fee or tab. For example, recycling fee | 
| ContractLengthInMonths (`Integer`) | Number of months the [Activation](#activation) has been contracted for. ContractTerm in RQ. For a list of acceptable values, see [ContractTerms](#contractterms) | 
| ContractNumberIsAccountNumber (`Boolean`) | A flag to indicate if the contract number of the [Activation](#activation) can be represented by the account number. IsAccountNumberLocked in RQ | 
| DealerName (`String`) | Carrier-specific dealer name | 
| DealerCode (`String(64)`) | Carrier-specific dealer code | 
| Deposit (`[carrier-integration](/api/additionalfee/#AdditionalFee)`) | Security deposit the Subscriber is required to pay | 
| Notes (`String(256)`) | Free form text with any additional notes related to the [Activation](#activation) | 
| OrderNumber (`String(64)`) | Carrier-specific identifier for the order this activation is associated with. Activations may have the same order number if they were part of a multi-line activation in the carrier system | 
| RatePlans (`Array[[carrier-integration](/api/rateplan/#RatePlan)]`) | The Rate Plan(s) that are applied to the [Activation](#activation) | 
| RemoteActivationID (`String(64)`) | Carrier-specific identifier for the [Activation](#activation) | 
| Subscriber (`[carrier-integration](/api/subscriber/#Subscriber)`) | The Subscriber (customer) that the [Activation](#activation) is for | 
| TrackingNumber (`String(64)`) | Carrier-specific tracking number for this [Activation](#activation) | 
| *BillingCode (`String`)* | *Reserved for future use* | |
| *BillingCycle (`String`)* | *Reserved for future use* | |
| *BillingCycleDate (`String`)* | *Reserved for future use* | |
| *Commission (`Decimal`)* | *Reserved for future use* | |
| *CompanyCode (`String`)* | *Reserved for future use* | |
| *IsCommissionable (`Boolean`)* | *Reserved for future use* | |
| *OriginalIMEI (`String`)* | *Reserved for future use* | |
| *OriginalSIM (`String`)* | *Reserved for future use* | |
| *OriginalRatePlanCode (`String`)* | *Reserved for future use* | |
| *OriginalRatePlanMRC (`String`)* | *Reserved for future use* | |
| *SalesRepresentativeName (`String`)* | *Reserved for future use* | |
| *UpgradeCode (`String`)* | *Reserved for future use* | |
| *UpgradeSourceNumber (`String`)* | *Reserved for future use* | |

## Subscriber

 A <strong>Subscriber</strong> contains all of the customer information related to an activation. 

 <h4>RQ Limitations</h4> 
* Only 4 addresses will be accepted, the first 4 phone numbers will be assigned to Phone1, Phone2, Phone3, Phone4 in order.

```json
{
	"SubscriberId": "12121212121",
	"FirstName": "Joe",
	"LastName": "Smith",
	"Addresses": "undefined",
	"AssociatedAccount": "undefined",
	"BirthDate": "5/16/1980",
	"CompanyName": "",
	"Email": "subscriber@example.com",
	"IsIndividual": "true",
	"Notes": "24 Month Term",
	"PhoneNumbers": "undefined",
	"SSN": "6789",
	"TrackingNumber": "2121212121"
}
```

| Name | Description |
|:-----|:------------|
| SubscriberId (`String(64)`) | Carrier-specific identifier for the Subscriber | 
| FirstName (`String(64)`) | If IsIndividual is true, the first name of the Subscriber | 
| LastName (`String(64)`) | If IsIndividual is true, the last name of the Subscriber | 
| Addresses (`Array[[carrier-integration](/api/address/#Address)]`) | List of addresses for the Subscriber | 
| AssociatedAccount (`[carrier-integration](/api/account/#Account)`) | The account associated with this Subscriber | 
| BirthDate (`DateTime`) | Date of birth in MM/DD/YYYY format | 
| CompanyName (`String(64)`) | If the Subscriber is a business, the name of the business | 
| Email (`String(64)`) | Email address | 
| IsIndividual (`Boolean`) | A flag to indicate if the Subscriber is an individual (true) or a  business (false) | 
| Notes (`String(128)`) | Notes | 
| PhoneNumbers (`Array[[carrier-integration](/api/phonenumber/#PhoneNumber)]`) | List of phone numbers | 
| SSN (`String(4)`) | Last 4 digits of a SSN | 
| TrackingNumber (`String(64)`) | Carrier-specific tracking number | 
| *SecondName (`String`)* | *Reserved for future use* | |
| *PreferredLanguage (`String`)* | *Reserved for future use* | |

## Account

```json
{
	"AccountId": "343434343",
	"Notes": "",
	"TrackingNumber": "5656565656"
}
```

| Name | Description |
|:-----|:------------|
| AccountId (`String(64)`) | Carrier-specific identifier for the associated account | 
| Notes (`String`) | Custom notes related to the associated account | 
| TrackingNumber (`String`) | Carrier-specific tracking number for the associated account | 

## PhoneNumber

```json
{
	"Type": "Home",
	"Value": "1234561234"
}
```

| Name | Description |
|:-----|:------------|
| Type (`String`) | The type of phone number. See [PhoneNumberType](#phonenumbertype) for the list of acceptable values | 
| Value (`String(32)`) | Phone number | 

## Address

<h4>RQ Limitations</h4> 

* A maximum of 1 work Address (type set to `Commercial`) will be accepted

* A maximum of 2 additional Addresses (excluding Work address) will be accepted

```json
{
	"AddressLine1": "123 Main Street",
	"AddressLine2": "Apt 200",
	"City": "Dover",
	"Country": "USA",
	"County": "Fairfield",
	"POBox": "PO Box 123",
	"PostalCode": "19901",
	"Province": "DE",
	"SuiteNumber": "100",
	"Type": "Residential"
}
```

| Name | Description |
|:-----|:------------|
| AddressLine1 (`String(128)`) | Line 1 of the Address | 
| AddressLine2 (`String(128)`) | Line 2 of the Address | 
| City (`String(64)`) | City | 
| Country (`String(64)`) | Country | 
| County (`String(64)`) | County | 
| POBox (`String(64)`) | Post office box | 
| PostalCode (`String(32)`) | Postal code or zip code | 
| Province (`String(64)`) | Province or state | 
| SuiteNumber (`String(32)`) | Suite number | 
| Type (`String`) | The type of this Address. See [AddressType](#addresstype) for a list of acceptable values | 

## RatePlan

<h4>RQ Limitations</h4>

* A maximum of 2 Rate Plans will be accepted

```json
{
	"RatePlanId": "ABC1234",
	"Name": "Country-wide Unlimited",
	"ContractTerms": "Some terms",
	"Description": "The perfect plan for lots of calling!",
	"IncludedRatePlanFeatures": "undefined",
	"MonthlyRecurringCharges": "55",
	"RatePlanFeatureAddons": "undefined",
	"SOCCode": "ABC1234"
}
```

| Name | Description |
|:-----|:------------|
| RatePlanId (`String(64)`) | Carrier-specific identifier for the RatePlan | 
| Name (`String(64)`) | Name | 
| ContractTerms (`String(256)`) | Terms and conditions | 
| Description (`String(128)`) | Description. May be set to an empty string | 
| IncludedRatePlanFeatures (`Array[[carrier-integration](/api/rateplanfeature/#RatePlanFeature)]`) | Features are included with the RatePlan | 
| MonthlyRecurringCharges (`Decimal`) | Monthly cost | 
| RatePlanFeatureAddons (`Array[[carrier-integration](/api/rateplanfeature/#RatePlanFeature)]`) | Additional RatePlan features the Subscriber chose to pay for | 
| SOCCode (`String(64)`) | Carrier-specific SOC code | 
| *CommissionAmount (`Decimal`)* | *Reserved for future use* | |
| *IsSharedPlan (`Boolean`)* | *Reserved for future use* | |

## RatePlanFeature

```json
{
	"RatePlanAddonId": "XYZ5678",
	"Name": "TEXT100",
	"Description": "One hundred additional text messages.",
	"MonthlyRecurringCharges": "5",
	"SOCCode": "XYZ5678"
}
```

| Name | Description |
|:-----|:------------|
| RatePlanAddonId (`String(64)`) | Carrier-specific identifier for the RatePlanFeature | 
| Name (`String(64)`) | Name | 
| Description (`String(128)`) | Description | 
| MonthlyRecurringCharges (`Decimal`) | Monthly cost | 
| SOCCode (`String(64)`) | Carrier-specific SOC code | 
| *CommissionAmount (`Decimal`)* | *Reserved for future use* | |

## ActivatedProduct

```json
{
	"Description": "Samsung Galaxy S5",
	"ESN": "35854205829867",
	"IMEI": "351756051523999",
	"Make": "Samsung",
	"MobileDeviceNumber": "1115550123",
	"Model": "Galaxy S5",
	"Price": "499",
	"ProductId": "",
	"SerialNumber": "98769456321",
	"SIM": "89000000000000001234",
	"SKU": "DEF987",
	"SOCCode": "DEF987",
	"Tab": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Description (`String(128)`) | Description | 
| ESN (`String(32)`) | Electronic Serial Number. This is the first value used to search for a product in your inventory when importing a new activation | 
| IMEI (`String(32)`) | International Mobile Station Equipment Identity | 
| Make (`String(64)`) | Make | 
| MobileDeviceNumber (`String(32)`) | Phone number. Customer Telephone Number and MDN in RQ | 
| Model (`String(64)`) | Model | 
| Price (`Decimal`) | Price | 
| ProductId (`String(64)`) | Used to identify the product in other iQmetrix systems. May be set to an empty string | 
| SerialNumber (`String(64)`) | Serial number | 
| SIM (`String(32)`) | Subscriber identity module | 
| SKU (`String(64)`) | Stockkeeping Unit. This value is used when activating a customer-owned phone | 
| SOCCode (`String(64)`) | Carrier-specific SOC | 
| Tab (`[carrier-integration](/api/tab/#Tab)`) | A discount that is added to or subtracted from the Product's price | 
| *IsCarrierSupplied (`Boolean`)* | *Reserved for future use* | |
| *NumberPortedIn (`Boolean`)* | *Reserved for future use* | |

## Tab

```json
{
	"Amount": "50",
	"Commission": "undefined",
	"ReferenceNumber": "abc123"
}
```

| Name | Description |
|:-----|:------------|
| Amount (`Decimal`) | Amount | 
| Commission (`[carrier-integration](/api/vendorrebate/#VendorRebate)`) |  | 
| ReferenceNumber (`String`) | Carrier reference number, identifier in an external system | 

## AdditionalFee

```json
{
	"Name": "Roaming",
	"Description": "Roam like home",
	"Amount": "55",
	"Notes": "US",
	"Rebate": "undefined",
	"ReferenceNumber": "abc123",
	"SOCCode": "BB3221"
}
```

| Name | Description |
|:-----|:------------|
| Name (`String(64)`) | Name | 
| Description (`String(128)`) | Description | 
| Amount (`Decimal`) | Amount | 
| Notes (`String(512)`) | Notes | 
| Rebate (`[carrier-integration](/api/vendorrebate/#VendorRebate)`) |  | 
| ReferenceNumber (`String(64)`) | Carrier reference number, identifier in an external system | 
| SOCCode (`String(64)`) | Carrier-specific SOC code | 

## VendorRebate

```json
{
	"Name": "Promo",
	"Description": "FREE Roam Like Home",
	"Amount": "55",
	"Notes": "US",
	"ReferenceNumber": "abc123",
	"SOCCode": "AGG242"
}
```

| Name | Description |
|:-----|:------------|
| Name (`String(64)`) | Name | 
| Description (`String(128)`) | Description | 
| Amount (`Decimal`) | Amount | 
| Notes (`String(512)`) | Notes | 
| ReferenceNumber (`String(64)`) | Carrier reference number, identifier in an external system | 
| SOCCode (`String(64)`) | Carrier-specific SOC code | 

## ConfirmedActivation

A ConfirmedActivation resource represents a payment transaction that completed the activation of one or more phones.

```json
{
	"Id": "58",
	"ActivationConfirmationDetails": "undefined",
	"ConfirmationDateUTC": "2015-07-21T15:25:45.323",
	"InvoiceId": "INV0001",
	"InvoiceSubtotal": "53.38",
	"InvoiceTotal": "61.54",
	"LocationId": "1",
	"Taxes": "8.16"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Service-generated identifier for the activation confirmation | 
| ActivationConfirmationDetails (`Array[[carrier-integration](/api/activationdetails/#ActivationDetails)]`) | Contains details of each line that was confirmed as part of this transaction. Each line represents a single device that was activated as part of a ConfirmedActivation | 
| ConfirmationDateUTC (`DateTime`) | System generated time the activation confirmation occurred | 
| InvoiceId (`String`) | Identifier of the invoice that caused these activations to be confirmed | 
| InvoiceSubtotal (`Decimal`) | The subtotal amount from the invoice | 
| InvoiceTotal (`Decimal`) | The total amount from the invoice | 
| LocationId (`Integer`) | Identifier of the [Location](/api/company-tree/#location) where the transaction occurred | 
| Taxes (`Decimal`) | The taxes from the invoice | 

## ActivationDetails

```json
{
	"ActivationID": "153",
	"BAN": "681883059",
	"IMEI": "990000862471854",
	"OrderNumber": "ORD1234",
	"PhoneNumber": "3023997373",
	"RemoteActivationID": "3023997373"
}
```

| Name | Description |
|:-----|:------------|
| ActivationID (`Integer`) | Identifier of the activation that is being confirmed (see CarrierActivationDetails.ActivationId) | 
| BAN (`String`) | The billing account number of the account associated with this line | 
| IMEI (`String`) | The IMEI of the device that was activated | 
| OrderNumber (`String`) | The order number of the activation that is being confirmed (see CarrierActivationDetails.OrderNumber) | 
| PhoneNumber (`String`) | The phone number of the device that was activated | 
| RemoteActivationID (`String`) | Carrier-specific identifier for the activation that is being confirmed (see CarrierActivationDetails.RemoteActivationID) | 

## ConfigurationDetails

```json
{
	"Id": "41",
	"ClientID": "123",
	"CompanyWideSettingsResource": "undefined",
	"LocationSettingsResource": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) |  | 
| ClientID (`Integer`) |  | 
| CompanyWideSettingsResource (`[carrier-integration](/api/companywidesettingsresource/#CompanyWideSettingsResource)`) |  | 
| LocationSettingsResource (`[carrier-integration](/api/locationsettingsresource/#LocationSettingsResource)`) |  | 

## CompanyWideSettingsResource

```json
{
	"CompanyWideIntegrationSettings": [
		{
		"Id": "1",
	"Value": "True",
	"ValueOptions": "True",
	"MetaData": [
		{
		"ConfigurableSettings": [
		{
		"SettingId": "1",
	"SettingName": "YesNo",
	"InputType": "Enabled"
}
```

| Name | Description |
|:-----|:------------|
| CompanyWideIntegrationSettings (`Array[object]`) | Company wide integration settings | 
| CompanyWideIntegrationSettings.Id (`Integer`) | Identifier of a configurable setting | 
| CompanyWideIntegrationSettings.Value (`String`) | Value for the setting | 
| CompanyWideIntegrationSettings.ValueOptions (`Array[string]`) | Set of possible values this setting could be | 
| MetaData (`object`) |  | 
| MetaData.ConfigurableSettings (`Array[object]`) | Configurable settings | 
| MetaData.ConfigurableSettings.SettingId (`Integer`) | Identifier | 
| MetaData.ConfigurableSettings.SettingName (`String`) | Type of HTML element this setting represents | 
| MetaData.ConfigurableSettings.InputType (`String`) | Value of the setting | 

## LocationSettingsResource

```json
{
	"Locations": [
		{
		"LocationId": "5678",
	"IntegrationSettings": "undefined",
	"MetaData": [
		{
		"ConfigurableSettings": [
		{
		"SettingId": "1",
	"SettingName": "YesNo",
	"InputType": "Enabled"
}
```

| Name | Description |
|:-----|:------------|
| Locations (`Array[object]`) | List of Locations | 
| Locations.LocationId (`Integer`) |  | 
| Locations.IntegrationSettings (`Array[[carrier-integration](/api/companywideintegrationsetting/#CompanyWideIntegrationSetting)]`) |  | 
| MetaData (`object`) | List of configurable settings | 
| MetaData.ConfigurableSettings (`Array[object]`) | Configurable settings | 
| MetaData.ConfigurableSettings.SettingId (`Integer`) | Identifier | 
| MetaData.ConfigurableSettings.SettingName (`String`) | Type of HTML element this setting represents | 
| MetaData.ConfigurableSettings.InputType (`String`) | Value of the setting | 

## ActivationLookupField

```json
{
	"Id": "6",
	"FieldName": "North American Mobile Number",
	"InputType": "Text",
	"Prompt": "Please Enter Customer 10 Digit Mobile Number",
	"Value": "2562788972"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| FieldName (`String`) | Description of this field | 
| InputType (`String`) | Type of input this field requires | 
| Prompt (`String`) | Prompt for this field | 
| Value (`String`) | Value of the field, such as a phone number or ESN | 



## Enumerations

### ActivationState

| Name | Description |
|:-----|:------------|
| Completed | An Activation that has been paid for successfully |
| Pending | An Activation that has not yet had payment taken |

### ActivationType

| Name |
|:-----|
| NewActivation |
| NoContract |
| NotSet |
| Other |
| Prepaid |
| Upgrade |

### AddressType

| Name |
|:-----|
| Business |
| Residential |
| Commercial |

### ContractTerm

| Value | Term in RQ |
|:------|:-----------|
| 0 | No Term |
| 1 | Monthly |
| 12 | One Year |
| 24 | Two year | 
| 36 | Three Year |
| Other | Not Set |

### PhoneNumberType

| Name |
|:-----|
| Fax |
| Home |
| Mobile |
| Other |
| Pager |
| Work |


# Requests



## <span class='post'>POST</span> an Activation



> Definition

```
PUT /Companies({CompanyId})/Locations({LocationId})/Carriers({CarrierId})/Activations({ActivationId})
```

> Example Request

```javascript
PUT /Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X PUT "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "6=1115550123",
    "CarrierActivationDetails": {
        "ActivationId": 354,
        "ActivationDate": "2015-06-19T05:44:39.7163989Z",
        "ActivatedProduct": {
            "Description": "Samsung Galaxy S5",
            "ESN": "35854205829867",
            "IMEI": "351756051523999",
            "Make": "Samsung",
            "MobileDeviceNumber": "1115550123",
            "Model": "Galaxy S5",
            "Price": 499,
            "ProductId": "",
            "SerialNumber": "98769456321",
            "SIM": "89000000000000001234",
            "SKU": "DEF987",
            "SOCCode": "DEF987",
            "Tab": {
                "Amount": 50,
                "Commission": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123"
            }
        },
        "ActivationState": "Pending",
        "ActivationTermCode": "EarlyUpgrade",
        "ActivationType": "NewActivation",
        "AdditionalFees": [
            {
                "Name": "Roaming",
                "Description": "Roam like home",
                "Amount": 55,
                "Notes": "US",
                "Rebate": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123",
                "SOCCode": "BB3221"
            }
        ],
        "ContractLengthInMonths": 24,
        "ContractNumberIsAccountNumber": false,
        "DealerName": "IAPR",
        "DealerCode": "IAPR",
        "Deposit": {
            "Name": "Roaming",
            "Description": "Roam like home",
            "Amount": 55,
            "Notes": "US",
            "Rebate": {
                "Name": "Promo",
                "Description": "FREE Roam Like Home",
                "Amount": 55,
                "Notes": "US",
                "ReferenceNumber": "abc123",
                "SOCCode": "AGG242"
            },
            "ReferenceNumber": "abc123",
            "SOCCode": "BB3221"
        },
        "Notes": "Notes go here!",
        "OrderNumber": "ORD1234",
        "RatePlans": [
            {
                "RatePlanId": "ABC1234",
                "Name": "Country-wide Unlimited",
                "ContractTerms": "Some terms",
                "Description": "The perfect plan for lots of calling!",
                "IncludedRatePlanFeatures": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "MonthlyRecurringCharges": 55,
                "RatePlanFeatureAddons": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "SOCCode": "ABC1234"
            }
        ],
        "RemoteActivationID": "3023997373",
        "Subscriber": {
            "SubscriberId": "12121212121",
            "FirstName": "Joe",
            "LastName": "Smith",
            "Addresses": [
                {
                    "AddressLine1": "123 Main Street",
                    "AddressLine2": "Apt 200",
                    "City": "Dover",
                    "Country": "USA",
                    "County": "Fairfield",
                    "POBox": "PO Box 123",
                    "PostalCode": "19901",
                    "Province": "DE",
                    "SuiteNumber": "100",
                    "Type": "Residential"
                }
            ],
            "AssociatedAccount": {
                "AccountId": "343434343",
                "Notes": "",
                "TrackingNumber": "5656565656"
            },
            "BirthDate": "5/16/1980",
            "CompanyName": "",
            "Email": "subscriber@example.com",
            "IsIndividual": true,
            "Notes": "24 Month Term",
            "PhoneNumbers": [
                {
                    "Type": "Home",
                    "Value": "1234561234"
                }
            ],
            "SSN": "6789",
            "TrackingNumber": "2121212121"
        },
        "TrackingNumber": "3023997373"
    },
    "CarrierId": 41,
    "CompanyId": 1234,
    "LocationId": 5678
}'
```

```csharp
static IRestResponse CreatingAnActivation()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"6=1115550123\",\"CarrierActivationDetails\":{\"ActivationId\":354,\"ActivationDate\":\"2015-06-19T05:44:39.7163989Z\",\"ActivatedProduct\":{\"Description\":\"Samsung Galaxy S5\",\"ESN\":\"35854205829867\",\"IMEI\":\"351756051523999\",\"Make\":\"Samsung\",\"MobileDeviceNumber\":\"1115550123\",\"Model\":\"Galaxy S5\",\"Price\":499,\"ProductId\":\"\",\"SerialNumber\":\"98769456321\",\"SIM\":\"89000000000000001234\",\"SKU\":\"DEF987\",\"SOCCode\":\"DEF987\",\"Tab\":{\"Amount\":50,\"Commission\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\"}},\"ActivationState\":\"Pending\",\"ActivationTermCode\":\"EarlyUpgrade\",\"ActivationType\":\"NewActivation\",\"AdditionalFees\":[{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"}],\"ContractLengthInMonths\":24,\"ContractNumberIsAccountNumber\":false,\"DealerName\":\"IAPR\",\"DealerCode\":\"IAPR\",\"Deposit\":{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"},\"Notes\":\"Notes go here!\",\"OrderNumber\":\"ORD1234\",\"RatePlans\":[{\"RatePlanId\":\"ABC1234\",\"Name\":\"Country-wide Unlimited\",\"ContractTerms\":\"Some terms\",\"Description\":\"The perfect plan for lots of calling!\",\"IncludedRatePlanFeatures\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"MonthlyRecurringCharges\":55,\"RatePlanFeatureAddons\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"SOCCode\":\"ABC1234\"}],\"RemoteActivationID\":\"3023997373\",\"Subscriber\":{\"SubscriberId\":\"12121212121\",\"FirstName\":\"Joe\",\"LastName\":\"Smith\",\"Addresses\":[{\"AddressLine1\":\"123 Main Street\",\"AddressLine2\":\"Apt 200\",\"City\":\"Dover\",\"Country\":\"USA\",\"County\":\"Fairfield\",\"POBox\":\"PO Box 123\",\"PostalCode\":\"19901\",\"Province\":\"DE\",\"SuiteNumber\":\"100\",\"Type\":\"Residential\"}],\"AssociatedAccount\":{\"AccountId\":\"343434343\",\"Notes\":\"\",\"TrackingNumber\":\"5656565656\"},\"BirthDate\":\"5/16/1980\",\"CompanyName\":\"\",\"Email\":\"subscriber@example.com\",\"IsIndividual\":true,\"Notes\":\"24 Month Term\",\"PhoneNumbers\":[{\"Type\":\"Home\",\"Value\":\"1234561234\"}],\"SSN\":\"6789\",\"TrackingNumber\":\"2121212121\"},\"TrackingNumber\":\"3023997373\"},\"CarrierId\":41,\"CompanyId\":1234,\"LocationId\":5678}", ParameterType.RequestBody);

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

public static CloseableHttpResponse CreatingAnActivation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"6=1115550123\",\"CarrierActivationDetails\":{\"ActivationId\":354,\"ActivationDate\":\"2015-06-19T05:44:39.7163989Z\",\"ActivatedProduct\":{\"Description\":\"Samsung Galaxy S5\",\"ESN\":\"35854205829867\",\"IMEI\":\"351756051523999\",\"Make\":\"Samsung\",\"MobileDeviceNumber\":\"1115550123\",\"Model\":\"Galaxy S5\",\"Price\":499,\"ProductId\":\"\",\"SerialNumber\":\"98769456321\",\"SIM\":\"89000000000000001234\",\"SKU\":\"DEF987\",\"SOCCode\":\"DEF987\",\"Tab\":{\"Amount\":50,\"Commission\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\"}},\"ActivationState\":\"Pending\",\"ActivationTermCode\":\"EarlyUpgrade\",\"ActivationType\":\"NewActivation\",\"AdditionalFees\":[{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"}],\"ContractLengthInMonths\":24,\"ContractNumberIsAccountNumber\":false,\"DealerName\":\"IAPR\",\"DealerCode\":\"IAPR\",\"Deposit\":{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"},\"Notes\":\"Notes go here!\",\"OrderNumber\":\"ORD1234\",\"RatePlans\":[{\"RatePlanId\":\"ABC1234\",\"Name\":\"Country-wide Unlimited\",\"ContractTerms\":\"Some terms\",\"Description\":\"The perfect plan for lots of calling!\",\"IncludedRatePlanFeatures\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"MonthlyRecurringCharges\":55,\"RatePlanFeatureAddons\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"SOCCode\":\"ABC1234\"}],\"RemoteActivationID\":\"3023997373\",\"Subscriber\":{\"SubscriberId\":\"12121212121\",\"FirstName\":\"Joe\",\"LastName\":\"Smith\",\"Addresses\":[{\"AddressLine1\":\"123 Main Street\",\"AddressLine2\":\"Apt 200\",\"City\":\"Dover\",\"Country\":\"USA\",\"County\":\"Fairfield\",\"POBox\":\"PO Box 123\",\"PostalCode\":\"19901\",\"Province\":\"DE\",\"SuiteNumber\":\"100\",\"Type\":\"Residential\"}],\"AssociatedAccount\":{\"AccountId\":\"343434343\",\"Notes\":\"\",\"TrackingNumber\":\"5656565656\"},\"BirthDate\":\"5/16/1980\",\"CompanyName\":\"\",\"Email\":\"subscriber@example.com\",\"IsIndividual\":true,\"Notes\":\"24 Month Term\",\"PhoneNumbers\":[{\"Type\":\"Home\",\"Value\":\"1234561234\"}],\"SSN\":\"6789\",\"TrackingNumber\":\"2121212121\"},\"TrackingNumber\":\"3023997373\"},\"CarrierId\":41,\"CompanyId\":1234,\"LocationId\":5678}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"Id\":\"6=1115550123\",\"CarrierActivationDetails\":{\"ActivationId\":354,\"ActivationDate\":\"2015-06-19T05:44:39.7163989Z\",\"ActivatedProduct\":{\"Description\":\"Samsung Galaxy S5\",\"ESN\":\"35854205829867\",\"IMEI\":\"351756051523999\",\"Make\":\"Samsung\",\"MobileDeviceNumber\":\"1115550123\",\"Model\":\"Galaxy S5\",\"Price\":499,\"ProductId\":\"\",\"SerialNumber\":\"98769456321\",\"SIM\":\"89000000000000001234\",\"SKU\":\"DEF987\",\"SOCCode\":\"DEF987\",\"Tab\":{\"Amount\":50,\"Commission\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\"}},\"ActivationState\":\"Pending\",\"ActivationTermCode\":\"EarlyUpgrade\",\"ActivationType\":\"NewActivation\",\"AdditionalFees\":[{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"}],\"ContractLengthInMonths\":24,\"ContractNumberIsAccountNumber\":false,\"DealerName\":\"IAPR\",\"DealerCode\":\"IAPR\",\"Deposit\":{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"},\"Notes\":\"Notes go here!\",\"OrderNumber\":\"ORD1234\",\"RatePlans\":[{\"RatePlanId\":\"ABC1234\",\"Name\":\"Country-wide Unlimited\",\"ContractTerms\":\"Some terms\",\"Description\":\"The perfect plan for lots of calling!\",\"IncludedRatePlanFeatures\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"MonthlyRecurringCharges\":55,\"RatePlanFeatureAddons\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"SOCCode\":\"ABC1234\"}],\"RemoteActivationID\":\"3023997373\",\"Subscriber\":{\"SubscriberId\":\"12121212121\",\"FirstName\":\"Joe\",\"LastName\":\"Smith\",\"Addresses\":[{\"AddressLine1\":\"123 Main Street\",\"AddressLine2\":\"Apt 200\",\"City\":\"Dover\",\"Country\":\"USA\",\"County\":\"Fairfield\",\"POBox\":\"PO Box 123\",\"PostalCode\":\"19901\",\"Province\":\"DE\",\"SuiteNumber\":\"100\",\"Type\":\"Residential\"}],\"AssociatedAccount\":{\"AccountId\":\"343434343\",\"Notes\":\"\",\"TrackingNumber\":\"5656565656\"},\"BirthDate\":\"5/16/1980\",\"CompanyName\":\"\",\"Email\":\"subscriber@example.com\",\"IsIndividual\":true,\"Notes\":\"24 Month Term\",\"PhoneNumbers\":[{\"Type\":\"Home\",\"Value\":\"1234561234\"}],\"SSN\":\"6789\",\"TrackingNumber\":\"2121212121\"},\"TrackingNumber\":\"3023997373\"},\"CarrierId\":41,\"CompanyId\":1234,\"LocationId\":5678}";

response = RestClient.put 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li>
    <li><code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
    <li><code>ActivationId</code> (<strong>Required</strong>)  - Activation lookup string, see <a href="#getting-an-activation">Getting an Activation</a></li>
</ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>CarrierActivationDetails</code> (<strong>Required</strong>) </li><ul><li><code>ActivatedProduct</code> (<strong>Required</strong>) </li><ul><li><code>ProductId</code> (<strong>Required</strong>) - May be set to an empty string</li><li><code>Description</code> (Optional) </li><li><code>ESN</code> (Optional) - This is the first value searched for when the Activation is imported into RQ</li><li><code>IMEI</code> (Optional) </li><li><code>Make</code> (Optional) </li><li><code>MobileDeviceNumber</code> (Optional) </li><li><code>Model</code> (Optional) </li><li><code>Price</code> (Optional) </li><li><code>SerialNumber</code> (Optional) </li><li><code>SIM</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>SOCCode</code> (Optional) </li><li><code>Tab</code> (Optional) </li><ul><li><code>Commission</code> (<strong>Required</strong>) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the VendorRebate in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li></ul><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the Tab in an external system</li><li><code>Amount</code> (Optional) </li></ul></ul><li><code>ActivationType</code> (<strong>Required</strong>) </li><li><code>RatePlans</code> (<strong>Required</strong>) </li><ul><li><code>Description</code> (<strong>Required</strong>) </li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>RatePlanId</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>ContractTerms</code> (Optional) </li><li><code>IncludedRatePlanFeatures</code> (Optional) </li><ul><li><code>Description</code> (<strong>Required</strong>) </li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>RatePlanAddonId</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>MonthlyRecurringCharges</code> (Optional) </li></ul><li><code>MonthlyRecurringCharges</code> (Optional) </li><li><code>RatePlanFeatureAddons</code> (Optional) </li><ul><li><code>Description</code> (<strong>Required</strong>) </li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>RatePlanAddonId</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>MonthlyRecurringCharges</code> (Optional) </li></ul></ul><li><code>Subscriber</code> (<strong>Required</strong>) </li><ul><li><code>FirstName</code> (<strong>Required</strong>) - Required if IsIndividual is set to true, otherwise must be omitted</li><li><code>LastName</code> (<strong>Required</strong>) - Required if IsIndividual is set to true, otherwise must be omitted</li><li><code>CompanyName</code> (<strong>Required</strong>) - Required if IsIndividual is set to false, otherwise must be omitted</li><li><code>SubscriberId</code> (Optional) </li><li><code>Addresses</code> (Optional) </li><ul><li><code>AddressLine1</code> (<strong>Required</strong>) </li><li><code>AddressLine2</code> (<strong>Required</strong>) </li><li><code>City</code> (<strong>Required</strong>) </li><li><code>Country</code> (<strong>Required</strong>) </li><li><code>PostalCode</code> (<strong>Required</strong>) </li><li><code>Province</code> (<strong>Required</strong>) </li><li><code>Type</code> (<strong>Required</strong>) </li><li><code>County</code> (Optional) </li><li><code>POBox</code> (Optional) </li><li><code>SuiteNumber</code> (Optional) </li></ul><li><code>AssociatedAccount</code> (Optional) </li><ul><li><code>AccountId</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>TrackingNumber</code> (Optional) </li></ul><li><code>BirthDate</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>IsIndividual</code> (Optional) - Defaults to false</li><li><code>Notes</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Type</code> (Optional) - Defaults to Home</li></ul><li><code>SSN</code> (Optional) </li><li><code>TrackingNumber</code> (Optional) </li></ul><li><code>ActivationId</code> (<strong>Required</strong>) </li><li><code>ActivationState</code> (<strong>Required</strong>) - Acceptable values are Pending or Completed. Defaults to Pending</li><li><code>ActivationTermCode</code> (Optional) </li><li><code>AdditionalFees</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the AdditionalFee in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Rebate</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the VendorRebate in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li></ul></ul><li><code>ContractLengthInMonths</code> (Optional) </li><li><code>ContractNumberIsAccountNumber</code> (Optional) </li><li><code>DealerName</code> (Optional) </li><li><code>DealerCode</code> (Optional) </li><li><code>Deposit</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the AdditionalFee in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Rebate</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the VendorRebate in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li></ul></ul><li><code>Notes</code> (Optional) </li><li><code>OrderNumber</code> (Optional) </li><li><code>RemoteActivationID</code> (Optional) </li><li><code>TrackingNumber</code> (Optional) </li></ul><li><code>CarrierId</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (<strong>Required</strong>) </li><li><code>LocationId</code> (<strong>Required</strong>) - Must match the LocationId provided in the URI</li></ul>

### Response Parameters



> Example Response

```json
HTTP 201 Content-Type: application/json
```

```json
{
    "Id": "6=1115550123",
    "CarrierActivationDetails": {
        "ActivationId": 354,
        "ActivationDate": "2015-06-19T05:44:39.7163989Z",
        "ActivatedProduct": {
            "Description": "Samsung Galaxy S5",
            "ESN": "35854205829867",
            "IMEI": "351756051523999",
            "Make": "Samsung",
            "MobileDeviceNumber": "1115550123",
            "Model": "Galaxy S5",
            "Price": 499,
            "ProductId": "",
            "SerialNumber": "98769456321",
            "SIM": "89000000000000001234",
            "SKU": "DEF987",
            "SOCCode": "DEF987",
            "Tab": {
                "Amount": 50,
                "Commission": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123"
            }
        },
        "ActivationState": "Pending",
        "ActivationTermCode": "EarlyUpgrade",
        "ActivationType": "NewActivation",
        "AdditionalFees": [
            {
                "Name": "Roaming",
                "Description": "Roam like home",
                "Amount": 55,
                "Notes": "US",
                "Rebate": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123",
                "SOCCode": "BB3221"
            }
        ],
        "ContractLengthInMonths": 24,
        "ContractNumberIsAccountNumber": false,
        "DealerName": "IAPR",
        "DealerCode": "IAPR",
        "Deposit": {
            "Name": "Roaming",
            "Description": "Roam like home",
            "Amount": 55,
            "Notes": "US",
            "Rebate": {
                "Name": "Promo",
                "Description": "FREE Roam Like Home",
                "Amount": 55,
                "Notes": "US",
                "ReferenceNumber": "abc123",
                "SOCCode": "AGG242"
            },
            "ReferenceNumber": "abc123",
            "SOCCode": "BB3221"
        },
        "Notes": "Notes go here!",
        "OrderNumber": "ORD1234",
        "RatePlans": [
            {
                "RatePlanId": "ABC1234",
                "Name": "Country-wide Unlimited",
                "ContractTerms": "Some terms",
                "Description": "The perfect plan for lots of calling!",
                "IncludedRatePlanFeatures": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "MonthlyRecurringCharges": 55,
                "RatePlanFeatureAddons": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "SOCCode": "ABC1234"
            }
        ],
        "RemoteActivationID": "3023997373",
        "Subscriber": {
            "SubscriberId": "12121212121",
            "FirstName": "Joe",
            "LastName": "Smith",
            "Addresses": [
                {
                    "AddressLine1": "123 Main Street",
                    "AddressLine2": "Apt 200",
                    "City": "Dover",
                    "Country": "USA",
                    "County": "Fairfield",
                    "POBox": "PO Box 123",
                    "PostalCode": "19901",
                    "Province": "DE",
                    "SuiteNumber": "100",
                    "Type": "Residential"
                }
            ],
            "AssociatedAccount": {
                "AccountId": "343434343",
                "Notes": "",
                "TrackingNumber": "5656565656"
            },
            "BirthDate": "5/16/1980",
            "CompanyName": "",
            "Email": "subscriber@example.com",
            "IsIndividual": true,
            "Notes": "24 Month Term",
            "PhoneNumbers": [
                {
                    "Type": "Home",
                    "Value": "1234561234"
                }
            ],
            "SSN": "6789",
            "TrackingNumber": "2121212121"
        },
        "TrackingNumber": "3023997373"
    },
    "CarrierId": 41,
    "CompanyId": 1234,
    "LocationId": 5678
}
```



 [activation](#Activation)



## <span class='get'>GET</span> an Activation

To retrieve an Activation, a string can be built based on fields from [Getting Activation Lookup Fields](#getting-activation-lookup-fields).

The format of the string is 

<pre>{fieldID}={value}[,{additionalFieldIds}={additionalValues}]</pre>

There must be at least one field id, value pair. Multiple field id, value pairs are separated by a comma.


> Definition

```
GET /Companies({CompanyId})/Locations({LocationId})/Carriers({CarrierId})/Activations({ActivationLookup})
```

> Example Request

```javascript
GET /Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X GET "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

```csharp
static IRestResponse GettingAnActivation()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAnActivation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>LocationId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li>
    <li><code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
    <li><code>ActivationLookup</code> (<strong>Required</strong>)  - Activation lookup string</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": "6=1115550123",
    "CarrierActivationDetails": {
        "ActivationId": 354,
        "ActivationDate": "2015-06-19T05:44:39.7163989Z",
        "ActivatedProduct": {
            "Description": "Samsung Galaxy S5",
            "ESN": "35854205829867",
            "IMEI": "351756051523999",
            "Make": "Samsung",
            "MobileDeviceNumber": "1115550123",
            "Model": "Galaxy S5",
            "Price": 499,
            "ProductId": "",
            "SerialNumber": "98769456321",
            "SIM": "89000000000000001234",
            "SKU": "DEF987",
            "SOCCode": "DEF987",
            "Tab": {
                "Amount": 50,
                "Commission": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123"
            }
        },
        "ActivationState": "Pending",
        "ActivationTermCode": "EarlyUpgrade",
        "ActivationType": "NewActivation",
        "AdditionalFees": [
            {
                "Name": "Roaming",
                "Description": "Roam like home",
                "Amount": 55,
                "Notes": "US",
                "Rebate": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123",
                "SOCCode": "BB3221"
            }
        ],
        "ContractLengthInMonths": 24,
        "ContractNumberIsAccountNumber": false,
        "DealerName": "IAPR",
        "DealerCode": "IAPR",
        "Deposit": {
            "Name": "Roaming",
            "Description": "Roam like home",
            "Amount": 55,
            "Notes": "US",
            "Rebate": {
                "Name": "Promo",
                "Description": "FREE Roam Like Home",
                "Amount": 55,
                "Notes": "US",
                "ReferenceNumber": "abc123",
                "SOCCode": "AGG242"
            },
            "ReferenceNumber": "abc123",
            "SOCCode": "BB3221"
        },
        "Notes": "Notes go here!",
        "OrderNumber": "ORD1234",
        "RatePlans": [
            {
                "RatePlanId": "ABC1234",
                "Name": "Country-wide Unlimited",
                "ContractTerms": "Some terms",
                "Description": "The perfect plan for lots of calling!",
                "IncludedRatePlanFeatures": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "MonthlyRecurringCharges": 55,
                "RatePlanFeatureAddons": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "SOCCode": "ABC1234"
            }
        ],
        "RemoteActivationID": "3023997373",
        "Subscriber": {
            "SubscriberId": "12121212121",
            "FirstName": "Joe",
            "LastName": "Smith",
            "Addresses": [
                {
                    "AddressLine1": "123 Main Street",
                    "AddressLine2": "Apt 200",
                    "City": "Dover",
                    "Country": "USA",
                    "County": "Fairfield",
                    "POBox": "PO Box 123",
                    "PostalCode": "19901",
                    "Province": "DE",
                    "SuiteNumber": "100",
                    "Type": "Residential"
                }
            ],
            "AssociatedAccount": {
                "AccountId": "343434343",
                "Notes": "",
                "TrackingNumber": "5656565656"
            },
            "BirthDate": "5/16/1980",
            "CompanyName": "",
            "Email": "subscriber@example.com",
            "IsIndividual": true,
            "Notes": "24 Month Term",
            "PhoneNumbers": [
                {
                    "Type": "Home",
                    "Value": "1234561234"
                }
            ],
            "SSN": "6789",
            "TrackingNumber": "2121212121"
        },
        "TrackingNumber": "3023997373"
    },
    "CarrierId": 41,
    "CompanyId": 1234,
    "LocationId": 5678
}
```



 [activation](#Activation)



## <span class='get'>GET</span> Activation Lookup Fields

This request returns a list of carrier-specific fields which are used in the URI for [Getting an Activation](#getting-an-activation).

> Definition

```
GET /Companies({CompanyId})/Carriers({CarrierId})/ActivationImportFields
```

> Example Request

```javascript
GET /Companies(123)/Carriers(41)/ActivationImportFields
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X GET "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ActivationImportFields" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

```csharp
static IRestResponse GettingActivationLookupFields()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ActivationImportFields");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingActivationLookupFields() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ActivationImportFields");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ActivationImportFields', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
[
    {
        "Id": 6,
        "FieldName": "North American Mobile Number",
        "InputType": "Text",
        "Prompt": "Please Enter Customer 10 Digit Mobile Number",
        "Value": "2562788972"
    }
]
```



 Array[[activationlookupfield](#ActivationLookupField)]



## <span class='get'>GET</span> Configurations By Company and Carrier



> Definition

```
GET /Companies({CompanyId})/Carriers({CarrierId})/Configurations
```

> Example Request

```javascript
GET /Companies(123)/Carriers(41)/Configurations
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingConfigurationsByCompanyAndCarrier()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations");
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

public static CloseableHttpResponse GettingConfigurationsByCompanyAndCarrier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
    "Id": 41,
    "ClientID": 123,
    "CompanyWideSettingsResource": {
        "CompanyWideIntegrationSettings": [
            {
                "Id": 1,
                "Value": "True",
                "ValueOptions": [
                    "True"
                ]
            }
        ],
        "MetaData": {
            "ConfigurableSettings": [
                {
                    "SettingId": 1,
                    "SettingName": "YesNo",
                    "InputType": "Enabled"
                }
            ]
        }
    },
    "LocationSettingsResource": {
        "Locations": [
            {
                "LocationId": 5678,
                "IntegrationSettings": [
                    {
                        "Id": 1,
                        "Value": "True",
                        "ValueOptions": [
                            "True"
                        ]
                    }
                ]
            }
        ],
        "MetaData": {
            "ConfigurableSettings": [
                {
                    "SettingId": 1,
                    "SettingName": "YesNo",
                    "InputType": "Enabled"
                }
            ]
        }
    }
}
```



 [configurationdetails](#ConfigurationDetails)



## Enabling a Carrier Integration for a Location



> Definition

```
POST /Companies({CompanyId})/Carriers({CarrierId})/Configurations
```

> Example Request

```javascript
POST /Companies(123)/Carriers(41)/Configurations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "CompanyWideSettingsResource": {
    "CompanyWideIntegrationSettings": [
      {
        "Id": 1,
        "Value": "True",
        "ValueOptions": null
      }
    ]
  },
  "LocationSettingsResource": {
    "Locations": [
      {
        "LocationID": 5678,
        "IntegrationSettings": [
          {
            "Id": 1,
            "Value": "True",
            "ValueOptions": null
          }
        ]
      }
    ]
  }
}
'
```

```csharp
static IRestResponse EnablingACarrierIntegrationForALocation()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CompanyWideSettingsResource\":{\"CompanyWideIntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]},\"LocationSettingsResource\":{\"Locations\":[{\"LocationID\":5678,\"IntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]}]}}", ParameterType.RequestBody);

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

public static CloseableHttpResponse EnablingACarrierIntegrationForALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CompanyWideSettingsResource\":{\"CompanyWideIntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]},\"LocationSettingsResource\":{\"Locations\":[{\"LocationID\":5678,\"IntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]}]}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CompanyWideSettingsResource\":{\"CompanyWideIntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]},\"LocationSettingsResource\":{\"Locations\":[{\"LocationID\":5678,\"IntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]}]}}

response = RestClient.post 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
</ul>



#### Request Parameters

<ul><li><code>CompanyWideSettingsResource</code> (<strong>Required</strong>) - Company wide configuration settings</li><ul><li><code>CompanyWideIntegrationSettings</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (<strong>Required</strong>) - For a list of settings see <code>MetaData</code> part of response to <a href='#getting-configurations-by-company-and-carrier'>Getting Configurations By Company and Carrier</a></li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>ValueOptions</code> (Optional) - Will be null or empty for settings that have no such restriction.</li></ul></ul><li><code>LocationSettingsResource</code> (<strong>Required</strong>) - Location specific configuration settings</li><ul><li><code>Locations</code> (<strong>Required</strong>) </li><ul><li><code>LocationId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li><li><code>IntegrationSettings</code> (<strong>Required</strong>) - Integration settings for the Location</li><ul><li><code>Id</code> (<strong>Required</strong>) - For a list of settings see <code>MetaData</code> part of response to <a href='#getting-configurations-by-company-and-carrier'>Getting Configurations By Company and Carrier</a></li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>ValueOptions</code> (Optional) - Will be null or empty for settings that have no such restriction.</li></ul></ul></ul></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
  "Id": 33,
  "ClientID": 123,
  "CompanyWideSettingsResource": {
    "CompanyWideIntegrationSettings": [
      {
        "Id": 1,
        "Value": "True",
        "ValueOptions": null
      }
    ],
    "MetaData": {
      "ConfigurableSettings": [
        {
          "SettingID": 1,
          "SettingName": "YesNo",
          "InputType": "Enabled"
        }
      ]
    }
  },
  "LocationSettingsResource": {
    "Locations": [
      {
        "LocationID": 5678,
        "IntegrationSettings": [
          {
            "Id": 1,
            "Value": "True",
            "ValueOptions": null
          }
        ]
      }
    ],
    "MetaData": {
      "ConfigurableSettings": [
        {
          "SettingID": 1,
          "SettingName": "Enabled",
          "InputType": null
        }
      ]
    }
  }
}

```



 [configurationdetails](#ConfigurationDetails)



## Disabling a Carrier Integration for a Location



> Definition

```
POST /Companies({CompanyId})/Carriers({CarrierId})/Configurations/
```

> Example Request

```javascript
POST /Companies(123)/Carriers(41)/Configurations/
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
```


```shell
curl -X POST "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations/" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "CompanyWideSettingsResource": {
    "CompanyWideIntegrationSettings": [
      {
        "Id": 1,
        "Value": "True",
        "ValueOptions": null
      }
    ]
  },
  "LocationSettingsResource": {
    "Locations": [
      {
        "LocationID": 5678,
        "IntegrationSettings": [
          {
            "Id": 1,
            "Value": "False",
            "ValueOptions": null
          }
        ]
      }
    ]
  }
}
'
```

```csharp
static IRestResponse DisablingACarrierIntegrationForALocation()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations/");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CompanyWideSettingsResource\":{\"CompanyWideIntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]},\"LocationSettingsResource\":{\"Locations\":[{\"LocationID\":5678,\"IntegrationSettings\":[{\"Id\":1,\"Value\":\"False\",\"ValueOptions\":null}]}]}}", ParameterType.RequestBody);

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

public static CloseableHttpResponse DisablingACarrierIntegrationForALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations/");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CompanyWideSettingsResource\":{\"CompanyWideIntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]},\"LocationSettingsResource\":{\"Locations\":[{\"LocationID\":5678,\"IntegrationSettings\":[{\"Id\":1,\"Value\":\"False\",\"ValueOptions\":null}]}]}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"CompanyWideSettingsResource\":{\"CompanyWideIntegrationSettings\":[{\"Id\":1,\"Value\":\"True\",\"ValueOptions\":null}]},\"LocationSettingsResource\":{\"Locations\":[{\"LocationID\":5678,\"IntegrationSettings\":[{\"Id\":1,\"Value\":\"False\",\"ValueOptions\":null}]}]}}

response = RestClient.post 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/Configurations/', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
</ul>



#### Request Parameters

<ul><li><code>CompanyWideSettingsResource</code> (<strong>Required</strong>) - Company wide configuration settings</li><ul><li><code>CompanyWideIntegrationSettings</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (<strong>Required</strong>) - For a list of settings see <code>MetaData</code> part of response to <a href='#getting-configurations-by-company-and-carrier'>Getting Configurations By Company and Carrier</a></li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>ValueOptions</code> (Optional) - Will be null or empty for settings that have no such restriction.</li></ul></ul><li><code>LocationSettingsResource</code> (<strong>Required</strong>) - Location specific configuration settings</li><ul><li><code>Locations</code> (<strong>Required</strong>) </li><ul><li><code>LocationId</code> (<strong>Required</strong>) - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a></li><li><code>IntegrationSettings</code> (<strong>Required</strong>) - Integration settings for the Location</li><ul><li><code>Id</code> (<strong>Required</strong>) - For a list of settings see <code>MetaData</code> part of response to <a href='#getting-configurations-by-company-and-carrier'>Getting Configurations By Company and Carrier</a></li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>ValueOptions</code> (Optional) - Will be null or empty for settings that have no such restriction.</li></ul></ul></ul></ul>

### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/json
```

```json
{
  "Id": 33,
  "ClientID": 123,
  "CompanyWideSettingsResource": {
    "CompanyWideIntegrationSettings": [
      {
        "Id": 1,
        "Value": "True",
        "ValueOptions": null
      }
    ],
    "MetaData": {
      "ConfigurableSettings": [
        {
          "SettingID": 1,
          "SettingName": "YesNo",
          "InputType": "Enabled"
        }
      ]
    }
  },
  "LocationSettingsResource": {
    "Locations": [
      {
        "LocationID": 4,
        "IntegrationSettings": [
          {
            "Id": 1,
            "Value": "False",
            "ValueOptions": null
          }
        ]
      }
    ],
    "MetaData": {
      "ConfigurableSettings": [
        {
          "SettingID": 1,
          "SettingName": "Enabled",
          "InputType": null
        }
      ]
    }
  }
}

```



 [configurationdetails](#ConfigurationDetails)



## <span class='get'>GET</span> Completed Activations

{{tip}} Don't forget to include /v2 in the request URL! {{end}}                    

> Definition

```
GET /Companies({CompanyId})/Carriers({CarrierId})/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'{ConfirmationDate}'&$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Companies(123)/Carriers(41)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T22:29:31.000Z'&$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T22:29:31.000Z'&$skip=0&$top=5" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse RetrievingCompletedActivations()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T22:29:31.000Z'&$skip=0&$top=5");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/hal+json"); 

    

    return client.Execute(request);
}
```


```java

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RetrievingCompletedActivations() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T22:29:31.000Z'&$skip=0&$top=5");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(41)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T22:29:31.000Z'&$skip=0&$top=5', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/entity-store/#carrier'>Carrier</a></li>
    <li><code>ConfirmationDate</code> (Optional)  - Limits returned records to ones that were created after the specified date</li>
    <li><code>Skip</code> (Optional)  - Number of records to skip before returning. See <a href="#pagiation">Pagination</a> for more details</li>
    <li><code>Top</code> (Optional)  - Maximum number of records return. See <a href="#pagiation">Pagination</a> for more details</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/hal+json
```

```json
{
    "_links": {
        "prev": "null",
        "self": {
            "href": "v2/Companies(123)/Carriers(41)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T15:29:31.091Z'&$skip=0&top=5",
            "templated": false
        },
        "next": "null"
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "v2/Companies(123)/Carriers(41)/ConfirmedActivations(58)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": 58,
                "ActivationConfirmationDetails": [
                    {
                        "ActivationID": 153,
                        "BAN": "681883059",
                        "IMEI": "990000862471854",
                        "OrderNumber": "ORD1234",
                        "PhoneNumber": "3023997373",
                        "RemoteActivationID": "3023997373"
                    }
                ],
                "ConfirmationDateUTC": "2015-07-21T15:25:45.323",
                "InvoiceId": "INV0001",
                "InvoiceSubtotal": 53.38,
                "InvoiceTotal": 61.54,
                "LocationId": 1,
                "Taxes": 8.16
            }
        ]
    }
}
```







# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Invalid Request: The field {x} must be greater than or equal to 1` | Ensure CarrierId in request matches CarrierId in URI |
| `HTTP 400` | `Carrier {x} not found` | Ensure Carrier provided in URI is correct |
| `HTTP 400` | `Invalid Request: the {x}  field is required` | Ensure all required fields are provided |
| `HTTP 400` | `Invalid Request: Type field must  be one of the following values: {x}` | Ensure AddressType is one of the values in [AddressType](#addresstype) |


# Pagination


The Carrier Integration API supports pagination of collections of resources by default.

<h3>Query Parameters</h3>

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items in the collection to skip, defaults to 0 if no value is provided.

`$top` denotes the number of items to take, defaults to 100 if no value is provided. 

The maximum value of 200 will be used if the value provided is outside the acceptable range [0-200].

<h3>Navigation Links</h3>

Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

<h5>Example</h5>
<pre>
{
  "_links": {
    "self": {
      "href": "Companies(123)/Carriers(41)/ConfirmedActivations?$skip=10&$top=10",
      "templated": false
    },
    "next": {
      "href": "Companies(123)/Carriers(41)/ConfirmedActivations?$skip=20&$top=10",
      "templated": false
    },
    "prev": {
      "href": "Companies(123)/Carriers(41)/ConfirmedActivations?$skip=0&$top=10",
      "templated": false
    }
  },
  "_embedded": {
    "self": []
  }
}
</pre>

In the example above, the `_links` section is included in the data returned from an API request to get confirmed activations, where `$skip=10` and `$top=10`.

The `self`.`href` value is the encoded version of the API request that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.

