---
title:  General Ledger
permalink: /api/general-ledger/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview


The General Ledger API allows you to track the movement of money between accounts for accounting purposes.

<a href='http://developers.iqmetrix.com/api/general-ledger/#account'>Account</a> type is determined by the `AccountCategory` property and can be one of the following: **Asset, Liability, Equity, Revenue, Expense**.

Account balances will be affected by Debits and Credits in the following ways:

| Account | Debit | Credit |
|:--------|:------|:-------|
| Asset | <i class="fa fa-arrow-up"></i> | <i class="fa fa-arrow-down"></i> |
| Liability | <i class="fa fa-arrow-down"></i> | <i class="fa fa-arrow-up"></i> |
| Equity | <i class="fa fa-arrow-down"></i> | <i class="fa fa-arrow-up"></i> |
| Revenue | <i class="fa fa-arrow-down"></i> | <i class="fa fa-arrow-up"></i> |
| Expense | <i class="fa fa-arrow-up"></i> | <i class="fa fa-arrow-down"></i> |



# Endpoints


* Sandbox: <a href="https://generalledgerdemo.iqmetrix.net/v1">https://generalledgerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://generalledger.iqmetrix.net/v1">https://generalledger.iqmetrix.net/v1</a>



# Resources


## Account

A General Ledger **Account** is a record used to sort and store Transactions.

```json
{
	"Id": "7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787",
	"AccountName": "Accounting",
	"AccountNumber": "1518",
	"AccountCategory": "Asset",
	"SubCategory": "Current Assets",
	"CreatedByUserId": "2576",
	"UpdatedByUserId": "2576",
	"CurrencyCode": "CAD",
	"CustomProperties": "",
	"DateCreatedUTC": "2015-12-04T19:26:02.806415Z",
	"DateUpdatedUTC": "2015-04-22T19:27:12.557",
	"Description": "This is a Canadian $ account",
	"IsEnabled": "true",
	"Version": "1"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| AccountName (`String(128)`) | Account name. Must be unique across the entire list of Accounts and cannot be empty | 
| AccountNumber (`String(128)`) | Account number. Must be unique across the entire list of Accounts and cannot be empty | 
| AccountCategory (`String`) | Account Category, acceptable values include: **Asset, Liability, Equity, Revenue and Expense** | 
| SubCategory (`String(256)`) | A string that can be used to further group Accounts into sub-categories | 
| CreatedByUserId (`Integer`) | Auditing column, the identifier of the [User](/api/user-manager/#user) that created this Account | 
| UpdatedByUserId (`Integer`) | Auditing column, the identifier of the [User](/api/user-manager/#user) that last updated this Account | 
| CurrencyCode (`String`) | The 3 letter ISO currency code for the currency that this Account records its Transactions in. Can't be changed if an Account has had Transactions posted to it. Not case sensitive and will be stored and returned in upper case. See <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> for a list of supported Currencies. | 
| CustomProperties (`Object(4000)`) | A set of key-value pairs that contain extra data related to this Account. The maximum length of CustomProperties, when serialized to JSON, is 4000 characters | 
| DateCreatedUTC (`DateTime`) | Auditing column showing when this Account was first created, in UTC | 
| DateUpdatedUTC (`DateTime`) | Auditing column showing when this Account was last updated, in UTC | 
| Description (`String(1024)`) | Description | 
| IsEnabled (`Boolean`) | A flag to indicate if this Account is Enabled | 
| Version (`Integer`) | Latest revision number | 

## Transaction

{{note}}A single Transaction must have 2 or more Entries where the sum of the Debits and Credits of those Entries is the same value, this is called a Balanced Transaction{{end}}

A **Transaction** is a financial record that affects two or more **Accounts**.

```json
{
	"Id": "d68f8dd0-26c6-4eb3-8c49-062e05b07132",
	"TransactionDateUTC": "2015-12-04T19:28:05.1970511Z",
	"CreatedByUserId": "2576",
	"Entries": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| TransactionDateUTC (`DateTime`) | The date and time that this Transaction occurred, in UTC | 
| CreatedByUserId (`Integer`) | Auditing column, the identifier of the [User](/api/user-manager/#user) that created this Account | 
| Entries (`Array[[general-ledger](/api/entry/#Entry)]`) | The collection of Entries for this Transaction | 

## Entry

* A Transaction is <b>immutable</b> and permanent after it has been created it cannot be updated or deleted
* Debit and Credit are decimal values without an associated currency
* All transactions within the context of this <a href='http://developers.iqmetrix.com/api/general-ledger/#account'>Account</a> will use the currency configured at the Account level

```json
{
	"AccountID": "7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787",
	"Credit": "0",
	"CustomProperties": "",
	"Debit": "5000",
	"EntityId": "14202",
	"LineNumber": "1",
	"Memo": "Memo",
	"ReferenceID": "INV005",
	"ReferenceType": "Invoice ID"
}
```

| Name | Description |
|:-----|:------------|
| AccountID (`GUID`) | Identifier for the [Account](#account) this Entry affects | 
| Credit (`Decimal`) | The value of the Credit side of this Entry must be a positive value. If Credit is positive, Debit must be 0. Credit and Debit can also both be 0 | 
| CustomProperties (`Object(4000)`) | Key-value pairs that contain extra data related to this Entry, maximum length when serialized to JSON is 4000 characters | 
| Debit (`Decimal`) | The value of the Debit side of this entry, this must be a positive value. If Debit is positive, Credit must be 0. Credit and Debit can also both be 0 | 
| EntityId (`Integer`) | Identifier for the [Location](/api/company-tree/#location) this Entry applies to | 
| LineNumber (`Integer`) | A value indicating the sort order of this entry within the Transaction | 
| Memo (`String(1024)`) | Memo string for this Entry | 
| ReferenceID (`String(128)`) | Reference number string, such as the invoice that caused the Transaction | 
| ReferenceType (`String(128)`) | String value to indicate what ReferenceID is referring to. See [ReferenceType](#referencetype) | 



## Enumerations

### ReferenceType 

The following table lists the ReferencType values used in RQ.

| ReferenceType | 
|:--------------|
| Account Payment | 
| Bill Pay | 
| Cashout | 
| Chargeback |
| Consignment | 
| Full Charge Back | 
| Gift Card Maintenance | 
| Inventory Adjustment | 
| Invoice |
| Opening Balance | 
| Petty Cash Transaction | 
| Receive PO (& Corrections) | 
| Sales Order | 
| Starting Inventory Count Import | 
| Stock Balance | 
| Transfer | 
| Vendor Deposit | 
| Vendor Rebate Adjustment |    


# Requests



## <span class='get'>GET</span> Accounts

{{callout_info}}<b>Sorting Order</b><br/>Accounts are ordered alphabetically by <code>AccountName</code>{{end}}


> Definition

```
GET /Companies({CompanyId})/Accounts?$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/Accounts?$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse GettingAccounts()
{
    var client = new RestClient("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5");
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

public static CloseableHttpResponse GettingAccounts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/hal+json
```

```json
{
  "_links": {
      "self": {
          "href": "Companies(14146)/Accounts?$skip=0&$top=5",
          "templated": false
      },
      "next": {
          "href": "Companies(14146)/Accounts?$skip=5&$top=5",
          "templated": false
      }
  },
  "_embedded": {
      "self": [
          {
              "_links": {
                  "self": {
                      "href": "Companies(14146)/Accounts(7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787)",
                      "templated": false
                  }
              },
              "_embedded": {},
              "Id": "7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787",
              "AccountName": "CAD Bank Account: 518",
              "AccountNumber": "1518",
              "AccountCategory": "Asset",
              "SubCategory": "Current Assets",
              "CreatedByUserId": 22212,
              "UpdatedByUserId": 22212,
              "CurrencyCode": "CAD",
              "CustomProperties": { },
              "DateCreatedUTC": "2015-04-23T13:14:12.997",
              "DateUpdatedUTC": "2015-04-23T13:14:12.997",
              "Description": "This is a Canadian $ account",
              "IsEnabled": true,
              "Version": "1"
          },
          ...
      ]
  }
}


```






## <span class='get'>GET</span> Transactions By Date

{{callout_info}}<b>Sorting Order</b><br/>When getting Transactions, the order is ascending by <code>TransactionDateUTC</code> with the oldest Transactions listed first{{end}}

> Definition

```
GET /Companies({CompanyId})/Transactions?$filter=TransactionDateUTC ge datetime'{StartDate}' and TransactionDateUTC le datetime'{EndDate}'&$skip={Skip}&$top={Top}
```

> Example Request

```javascript
GET /Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T08:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T07:59:59.000Z'&$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/hal+json
```


```shell
curl -X GET "https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T08:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T07:59:59.000Z'&$skip=0&$top=5" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"
```

```csharp
static IRestResponse GettingTransactionsByDate()
{
    var client = new RestClient("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T08:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T07:59:59.000Z'&$skip=0&$top=5");
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

public static CloseableHttpResponse GettingTransactionsByDate() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T08:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T07:59:59.000Z'&$skip=0&$top=5");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T08:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T07:59:59.000Z'&$skip=0&$top=5', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a></li>
    <li><code>Skip</code> (Optional)  - Number of records to skip</li>
    <li><code>Top</code> (Optional)  - Number of records to take</li>
    <li><code>StartDate</code> (<strong>Required</strong>)  - Date at which to begin search request, in UTC</li>
    <li><code>EndDate</code> (<strong>Required</strong>)  - Date at which to end search request, in UTC</li>
</ul>



### Response Parameters



> Example Response

```json
HTTP 200 Content-Type: application/hal+json
```

```json
[
    {
        "_links": {
            "self": {
                "href": "Companies(14146)\/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T00:00:00.000' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000'&$skip=0&$top=5",
                "templated": false
            },
            "next": {
                "href": "Companies(14146)\/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T00:00:00.000' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000'&$skip=5&$top=5",
                "templated": false
            }
        },
        "_embedded": {
            "self": [
                {
                    "_links": {
                        "self": {
                            "href": "Companies(14146)\/Transactions(2862e667-9dd7-45b0-9f6b-7e6bdaad0f61)",
                            "templated": false
                        }
                    },
                    "_embedded": { },
                    "Id": "2862e667-9dd7-45b0-9f6b-7e6bdaad0f61",
                    "TransactionDateUTC": "2015-04-23T13:14:34.2",
                    "CreatedByUserId": 0,
                    "Entries": [
                        {
                            "AccountID": "7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787",
                            "Credit": 0,
                            "CustomProperties": { },
                            "Debit": 5000,
                            "EntityId": 25,
                            "LineNumber": 1,
                            "Memo": "Memo for debit",
                            "ReferenceID": "INV005",
                            "ReferenceType": "Invoice ID"
                        },
                        {
                            "AccountID": "da81b1f2-2bdf-49bc-9b43-8ee787c049f0",
                            "Credit": 5000,
                            "CustomProperties": { },
                            "Debit": 0,
                            "EntityId": 25,
                            "LineNumber": 2,
                            "Memo": "Memo for credit",
                            "ReferenceID": "INV005",
                            "ReferenceType": "Invoice ID"
                        }
                    ]
                }
            ]
        }
    },
  ...
]


```






# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Error converting value {x} to type {y}` | Ensure `AccountCategory` is set to one of: Asset, Liability, Equity, Revenue, Expense |
| `HTTP 400` | `The supplied currency code {x}  is not supported` | Ensure `CurrencyCode` is one of the supported values such as `USD` or `CAD` |
| `HTTP 400` | `The {x} field is required` | Ensure all Required fields are provided |
| `HTTP 400` | `Uri parameter representing resource id {x} don't match` | Ensure given request body parameters match URI parameters |
| `HTTP 404` | `Resource cannot be found` | Ensure the `Id` specified in the URI is valid and the resource exists | 
| `HTTP 409` | `The account has a non-unique name  or account number` | Account names and numbers must be unique for the Company |


# Pagination

The General Ledger API supports pagination of collections of resources by default.
 
### Query Parameters
 
Pagination is done through the use of `$skip` and `$top` query string parameters.
 
`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.
 
`$top` denotes the maximum number of items to include in the response. This value defaults to 50 if no `$top` value is specified. Acceptable values are in the range [0-500]. If a value more than 500 is specified, the URI is considered malformed.
 
### Navigation Links
 
Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).
 
These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.
 
##### Example
 
```csharp
{
    "_links": {
        "self": {
            "href": "Companies(14146)/Accounts?$skip=10&$top=10",
            "templated": false
        },
        "next": {
            "href": "Companies(14146)/Accounts?$skip=20&$top=10",
            "templated": false
        },
        "prev": {
            "href": "Companies(14146)/Accounts?$skip=0&$top=10",
            "templated": false
        }
    },
    "_embedded": {
        "self": []
    }
}
```

In the example above, the `_links` section is included in the data returned from an API call to get General Ledger Accounts, where `$skip=10` and `$top=10`.
 
The `self`.`href` value is the encoded version of the API request that returned these results.
 
The `next`.`href` refers to a resource containing a page with the **next** 10 items.
 
The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.

