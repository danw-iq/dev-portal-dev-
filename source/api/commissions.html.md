---
title:  Commissions
permalink: /api/commissions/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

The Commissions API allows you to retrieve Commission data from your RQ database. 



# Endpoints


* Sandbox: <a href="https://commissiondemo.iqmetrix.net/v1">https://commissiondemo.iqmetrix.net/v1</a>
* Production: <a href="https://commission.iqmetrix.net/v1">https://commission.iqmetrix.net/v1</a>



# Resources


## CommissionEntry

Commission earned by an employee.

```json
{
	"Id": "24",
	"Comments": "Shared with Nick",
	"CommissionFixedCost": "10.0",
	"CommissionFloatingCost": "10",
	"CommissionRate": "35.0",
	"CommissionSpiff": "15.0",
	"CommissionSplitEmployeeSpecialId": "10002",
	"CommissionSplitUserId": "22214",
	"CommissionType": "1",
	"CouponID": "8",
	"DateCreatedUtc": "2015-08-18T15:00:00",
	"EmployeeSpecialId": "1002",
	"UserId": "2576",
	"GlobalProductID": "1210",
	"HasBeenReversed": "false",
	"InvoiceEditedDate": "2015-09-10T20:01:49.00",
	"InvoiceNumber": "84WEAIN5703",
	"IsChargeback": "false",
	"IsCommissionSplit": "true",
	"IsFullChargeback": "false",
	"IsSuspended": "false",
	"LastUpdateDateUtc": "2015-09-09T20:41:59.69",
	"LocationCode": "LOC123",
	"LocationId": "14202",
	"MilestoneID": "74b95526-e46b-42da-baa5-19971dfe5b18",
	"Priority": "1",
	"Quantity": "1",
	"RQCommissionId": "445",
	"SaleInvoiceAndCouponID": "d6ee8427-eac6-44ef-ac69-4617e18d2f66",
	"SaleInvoiceID": "7",
	"SerialNumber": "8508194953",
	"SplitRate1": "50.0",
	"SplitRate2": "50.0",
	"TotalCommission": "5.32",
	"TransactionGUID": "a929571e-c432-4e9a-aef7-4302ed791251",
	"TransactionType": "1",
	"UnitCommission": "5.32"
}
```

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique Identifier | 
| Comments (`String(255)`) | Comments | 
| CommissionFixedCost (`Decimal`) | Fixed cost of commission applied. Anything above this value is commission | 
| CommissionFloatingCost (`Decimal`) | Floating cost of commission applied. This value is determined by adding anything above this value to average cost | 
| CommissionRate (`Decimal`) | Commission rate applied | 
| CommissionSpiff (`Decimal`) | A type of commission structure used to pay employees, where a fixed dollar amount is paid per unit sold | 
| CommissionSplitEmployeeSpecialId (`Integer`) | Special Identifier for the split commission Employee in RQ | 
| CommissionSplitUserId (`Integer`) | Identifier for a [User](/api/user-manager/#user) that is the split commissionable employee | 
| CommissionType (`Byte`) | Type of commission applied. If this is a Coupon commission, see [CouponCommissionTypes](#couponcommissiontypes) for a list of acceptable values, otherwise see [CommissionTypes](#commissiontypes) for a list of acceptable values | 
| CouponID (`Integer`) | Identifier for a coupon associated with this commission in RQ | 
| DateCreatedUtc (`DateTime`) | Time created in RQ, in UTC | 
| EmployeeSpecialId (`Integer`) | Special Identifier for the Employee in RQ | 
| UserId (`Integer`) | Identifier for a [User](/api/user-manager/#user) that is the primary commissionable employee | 
| GlobalProductID (`Integer`) | Identifier of product associated with this commission in RQ | 
| HasBeenReversed (`Boolean`) | A flag to indicate if this CommissionEntry has been reversed | 
| InvoiceEditedDate (`DateTime`) | Time last edited with the Invoice Editor in RQ | 
| InvoiceNumber (`String(14)`) | Invoice Number of the transaction which created this commission in RQ | 
| IsChargeback (`Boolean`) | A flag to indicate if this commission was created by a chargeback in RQ | 
| IsCommissionSplit (`Boolean`) | A flag to indicate if the commission is split with a second employee | 
| IsFullChargeback (`Boolean`) | A flag to indicate if this commission was created by a full chargeback in RQ | 
| IsSuspended (`Boolean`) | A flag to indicate if this commission has been suspended | 
| LastUpdateDateUtc (`DateTime`) | Time created in the API, in UTC | 
| LocationCode (`String`) | An identifier for the Location in an external system | 
| LocationId (`Integer`) | Identifier for the [Location](/api/company-tree/#location) | 
| MilestoneID (`GUID`) | Identifier for a milestone associated with this commission in RQ | 
| Priority (`Integer`) | Priority of product on sale invoice associated with this commission in RQ | 
| Quantity (`Integer`) | The number of times the unit commission is to be applied | 
| RQCommissionId (`Integer`) | Identifier of the associated commission RQ | 
| SaleInvoiceAndCouponID (`GUID`) | Identifier of the coupon on the sale invoice associated with this commission in RQ | 
| SaleInvoiceID (`Integer`) | Identifier of the sale invoice which created this commission in RQ | 
| SerialNumber (`String(100)`) | Serial number of the product associated with this commission in RQ | 
| SplitRate1 (`Decimal`) | Percentage of the commission the primary employee receives, defaults to 100 | 
| SplitRate2 (`Decimal`) | Percentage of the commission the split employee receives, defaults to 0 | 
| TotalCommission (`Decimal`) | The total commission amount to be applied equal to (UnitCommission * Quantity) | 
| TransactionGUID (`GUID`) | Identifier of the transaction which created this commission in RQ | 
| TransactionType (`Byte`) | Type of transaction which created this commission. See [TransactionTypes](#transactiontypes) for a list of acceptable values | 
| UnitCommission (`Decimal`) | The individual unit Commission amount | 



## Enumerations

### CommissionTypes

To learn more about Commission types, see {{CommissionTypes}}.

| Id | Name | Calculation |
|:---|:-----|:------------|
| 8 | % Above Fixed Cost | |
| 2 | % Of Gross Sale | (UnitCommission * 100) / CommissionRate |
| 3 | % Of Margin | (UnitCommission * 100) / CommissionRate |
| 6 | Fixed Cost | | 
| 7 | Floating Cost | |
| 0 | NonCommissionable | None |
| 1 | SPIF | UnitCommission |
| 4 | SPIF + % Of Gross Sale | ((UnitCommission – CommissionSpiff) * 100) / CommissionRate |
| 5 | SPIF + % Of Margin | ((UnitCommission – CommissionSpiff) * 100) / CommissionRate |

### CouponCommissionTypes

To learn more about Coupons see {{CouponOverview}}.

| Id | Name |
|:---|:-----|
| 0 | NonCommissionable |
| 1 | PercentageOfCoupon |
| 2 | SPIF |

### TransactionTypes

| Id | Description |
|:---|:------------|
| 0 | All |
| 5 | Coupon |
| 6 | Full Charge Back | 
| 1 | Invoice |
| 2 | Manual Entry | 
| 7 | Milestone Reward | 
| 3 | Reversal |
| 4 | Vendor Rebate Adjustment |    


# Requests



## <span class='get'>GET</span> All Commission Entries

By default, the sorting order of the response to this request will be **descending** order by `LastUpdateDateUtc`

> Definition

```
GET /Companies({CompanyId})/CommissionEntries?$filter=LastUpdateDateUtc ge datetime'{StartDate}' and LastUpdateDateUtc le datetime'{EndDate}'&$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse GettingAllCommissionEntries()
{
    var client = new RestClient("https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10");
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

public static CloseableHttpResponse GettingAllCommissionEntries() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T08:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T07:59:59.000Z'&$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>StartDate</code> (Optional)  - Date at which to begin search request, in UTC</li>
    <li><code>EndDate</code> (Optional)  - Date at which to end search request, in UTC</li>
    <li><code>Skip</code> (Optional)  - The number of items to skip from the entire set of results. Defaults to 0 if no $skip value is specified. If a value less than 0 is specified, the URI is considered malformed</li>
    <li><code>Top</code> (Optional)  - Maximum number of items to include in the response. Defaults to 50 if no $top value is specified. Acceptable values are in the range [0</li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/hal+json
```

```json
{
    "_links": {
        "prev": null,
        "self": {
            "href": "v1/Companies(14146)/CommissionEntries?$filter=ransactionDateUTC ge datetime'2015-01-01T00:00:00.000' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000'&$skip=0&$top=10",
            "templated": false
        },
        "next": null
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "v1/Companies(14146)/CommissionEntries(24)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": 24,
                "Comments": "Shared with Nick",
                "CommissionFixedCost": 10,
                "CommissionFloatingCost": 10,
                "CommissionRate": 35,
                "CommissionSpiff": 15,
                "CommissionSplitEmployeeSpecialId": 10002,
                "CommissionSplitUserId": 22214,
                "CommissionType": 1,
                "CouponID": 8,
                "DateCreatedUtc": "2015-08-18T15:00:00",
                "EmployeeSpecialId": 1002,
                "UserId": 2576,
                "GlobalProductID": 1210,
                "HasBeenReversed": false,
                "InvoiceEditedDate": "2015-09-10T20:01:49.00",
                "InvoiceNumber": "84WEAIN5703",
                "IsChargeback": false,
                "IsCommissionSplit": true,
                "IsFullChargeback": false,
                "IsSuspended": false,
                "LastUpdateDateUtc": "2015-09-09T20:41:59.69",
                "LocationCode": "LOC123",
                "LocationId": 14202,
                "MilestoneID": "74b95526-e46b-42da-baa5-19971dfe5b18",
                "Priority": 1,
                "Quantity": 1,
                "RQCommissionId": 445,
                "SaleInvoiceAndCouponID": "d6ee8427-eac6-44ef-ac69-4617e18d2f66",
                "SaleInvoiceID": 7,
                "SerialNumber": "8508194953",
                "SplitRate1": 50,
                "SplitRate2": 50,
                "TotalCommission": 5.32,
                "TransactionGUID": "a929571e-c432-4e9a-aef7-4302ed791251",
                "TransactionType": 1,
                "UnitCommission": 5.32
            }
        ]
    }
}
```







# Pagination

The Commissions API supports pagination of collections of resources.

### Query Parameters

Pagination is done through the use of `$skip` and `$top` query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 50 if a `$skip` value, but no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

```csharp
{
    "_links": {
        "prev": null,
        "self": "v1/Companies(14146)/CommissionEntries?$skip=0&$top=5",
        "next": "v1/Companies(14146)/CommissionEntries?$skip=5&$top=5"
    },
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    }
}
```

In the example above, the `_links` section is included in the data returned from an API call to [Getting All Commission Entries](#getting-all-commission-entries), where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.

