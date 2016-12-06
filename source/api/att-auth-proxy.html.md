---
title:  AT&T Auth Proxy
permalink: /api/att-auth-proxy/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

Proxy for interacting with AT&T's CSP. 



# Endpoints


* Production: <a href="https://authproxyatt.iqmetrix.net/v1">https://authproxyatt.iqmetrix.net/v1</a>



# Resources


## MappingReferenceData

```json
{
	"Mappings": [
		{
		"MyLoginsCspGroup": "CKPDEM",
	"TrainingComplianceCspGroup": "CKUNTM",
	"RQSecurityRoleName": "Dealer Store Manager Basic",
	"IsDealerSpecific": "false"
}
```

| Name | Description |
|:-----|:------------|
| Mappings (`Array[object]`) | Array, that consists of multiples of the following | 
| Mappings.MyLoginsCspGroup (`String`) | Alphabetic string that corresponds to the column 'MyLogins CSP Group' in the mapping spreadsheet | 
| Mappings.TrainingComplianceCspGroup (`String`) | Alphabetic string that corresponds to the column 'Training Compliance CSP Group' in the mapping spreadsheet | 
| Mappings.RQSecurityRoleName (`String`) | Alphabetic string that corresponds to the column 'Resulting Base RQ Profile' in the mapping spreadsheet | 
| Mappings.IsDealerSpecific (`Boolean`) | A flag to indicate if the service will prepend the user's dealer specific prefix to the RQSecurityRoleName to find the matching security role | 





# Requests



## Setting a Prefix for a User

The prefix will be prepended to the User's role with whitespace in the form `{SecurityRolePrefix} {rqSecurityRoleName}`.


> Definition

```
PUT /users({UserId})
```

> Example Request

```javascript
PUT /users(12321)
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X PUT "https://authproxyatt.iqmetrix.net/v1/users(12321)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -d '{
    "UserName": "sample@iqmetrix.com",
    "SecurityRolePrefix": "iQMetrix"
}'
```

```csharp
static IRestResponse SettingAPrefixForAUser()
{
    var client = new RestClient("https://authproxyatt.iqmetrix.net/v1/users(12321)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

     request.AddParameter("application/json", "{\"UserName\":\"sample@iqmetrix.com\",\"SecurityRolePrefix\":\"iQMetrix\"}", ParameterType.RequestBody);

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

public static CloseableHttpResponse SettingAPrefixForAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://authproxyatt.iqmetrix.net/v1/users(12321)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    StringEntity body = new StringEntity("{\"UserName\":\"sample@iqmetrix.com\",\"SecurityRolePrefix\":\"iQMetrix\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'

body = "{\"UserName\":\"sample@iqmetrix.com\",\"SecurityRolePrefix\":\"iQMetrix\"}";

response = RestClient.put 'https://authproxyatt.iqmetrix.net/v1/users(12321)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response
```


#### URI Parameters
<ul>
    <li><code>UserId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a></li>
</ul>



#### Request Parameters

<ul><li><code>UserName</code> (<strong>Required</strong>) </li><li><code>SecurityRolePrefix</code> (<strong>Required</strong>) - The prefix that will be pre-pended to the user's Hub security role</li></ul>

### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/json
```

```json
{
    "UserName": "sample@iqmetrix.com",
    "SecurityRolePrefix": "iQMetrix"
}
```



 <ul><li><code>UserName</code> (String) </li><li><code>SecurityRolePrefix</code> (String) - The prefix that will be pre-pended to the user's Hub security role</li></ul>



## <span class='get'>GET</span> the Security Role Mapping Reference Data



> Definition

```
GET /cspGroupMappingReference
```

> Example Request

```javascript
GET /cspGroupMappingReference
Authorization: Bearer (Access Token)
Accept: application/json
```


```shell
curl -X GET "https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

```csharp
static IRestResponse GettingTheSecurityRoleMappingReferenceData()
{
    var client = new RestClient("https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference");
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

public static CloseableHttpResponse GettingTheSecurityRoleMappingReferenceData() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}
```

```ruby
require 'rest-client'



response = RestClient.get 'https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference', {
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
  "Mappings": [
      {
          "MyLoginsCspGroup": "CKPDEM",
          "TrainingComplianceCspGroup": null,
          "RQSecurityRoleName": "Chief of Staff",
          "IsDealerSpecific": false
      },
      {
          "MyLoginsCspGroup": "CKPDEM",
          "TrainingComplianceCspGroup": "CKUNTM",
          "RQSecurityRoleName": "Dealer Store Manager Basic",
          "IsDealerSpecific": false
      },
      {
          "MyLoginsCspGroup": "CKPDPM",
          "TrainingComplianceCspGroup": null,
          "RQSecurityRoleName": "Dealer Principal",
          "IsDealerSpecific": false
      },
      {
          "MyLoginsCspGroup": "CKPDPM",
          "TrainingComplianceCspGroup": "CKUNTM",
          "RQSecurityRoleName": "Dealer Store Manager Basic",
          "IsDealerSpecific": false
      }
      ...
  ]                      
}

```



 [mappingreferencedata](#MappingReferenceData)


