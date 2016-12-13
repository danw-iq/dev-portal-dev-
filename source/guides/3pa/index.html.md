---
title: Third Party Authentication
search: true
---

# Overview

This guide describes how you can integrate your existing domain logins with iQmetrix products using **Third Party Authentication (3PA)**.

<div class='bs-callout alert-info'>
<strong>Third Party Authentication (3PA)</strong> is an iQmetrix term referring to the ability of a user to access an iQmetrix product using an external mechanism.
</div>

While this guide is intended to be identity provider agnostic, the examples included are specific to **Microsoft Active Directory Federation Services** for consistency.

## Implications 

Enabling Third Party Authentication will limit your ability to:

* Access iQmetrix Business Intelligence (BI) 
* Manage passwords in iQmetrix Products
* Obtain support from iQmetrix if there are problems with the Identity Provider

## Who Is This Guide For? 

You may be interested in this guide if you want to...

* Simplify or automate your IT processes
* Reduce the amount of time needed to manage users, credentials and access rights
* Allow your users to log into RQ with their Identity Provider credentials
* Manage your users in a single place 

<div class='bs-callout alert-info'>
An <strong>Identity Provider (IdP)</strong> is responsible for providing identifiers for users interacting with a system.
</div>

## How Does Third Party Authentication Work?

3PA involves creating a **trusted relationship** between two systems which can enable your users to log into iQmetrix products with their Identity Provider credentials. This is commonly known as **Single Sign On**.

<div class='bs-callout alert-info'>
<strong>Single Sign On (SSO)</strong> permits a user to enter one name and password to access multiple applications. <br/>
One popular example of SSO is the "Log In With Facebook" button used by many websites to allow users access to a website without creating an account.
</div>

##### Example


Sarah's Company uses RQ with Third Party Authentication enabled using Microsoft Active Directory Federation Services (ADFS) for authentication.

Sarah enters her domain username and password into RQ.

RQ asks ADFS "is this name/password valid?" 

If ADFS confirms, RQ **trusts** ADFS and allows Sarah to log in successfully. 

If ADFS does not confirm, it tells RQ not to allow Sarah access and an error is displayed.

# Technical Flow

**Figure 1**: Third Party Authentication Flow

<img class="popUpImage" src="http://developers.iqmetrix.com/images/3PAflow.png" alt="Authentication Flow" />

1. A user from your organization enters their credentials into an iQmetrix product, such as RQ
2. The application sends a request to iQmetrix's Single Sign On (SSO) service
3. The SSO service determines if your organization has Third Party Authentication (3PA) enabled
4. The SSO service sends a POST [WS-Security UsernameToken Profile 1.1](http://docs.oasis-open.org/wss/v1.1/wss-v1.1-spec-os-UsernameTokenProfile.pdf) request using the `#PasswordText` extension to the URL you supplied
5. Your Identity Provider responds with a [WS-Security SAML Token Profile 1.1](http://docs.oasis-open.org/wss/v1.1/wss-v1.1-spec-os-SAMLTokenProfile.pdf) response with a SAML 2.0 token in the `RequestedSecurityToken` element
5. iQmetrix's Authentication service accepts the response and generates an [Access Token](http://developers.iqmetrix.com/glossary/#access-token)
6. The user is able to access the iQmetrix product

## Requirements

Your organization must provide access to an Identity Provider with...

* SAML Active Profile using WS-Trust over HTTPS
* SSL Protection with a publicly available certificate
* Acceptable User Names
* High Availability

Your Account Manager will need the following information to configure Third Party Authentication:

* URL of your Identity Provider
* An account within the Identity Provider created for RQ support personnel

##### Example

ADFS would require an ADFS Web Application Proxy with iQmetrix added as a Relaying Party Trust.

## SAML

**SAML** (Security Assertion Markup Language) is an XML-based data format for exchanging data between systems. 

There are many different versions of SAML, but iQmetrix only supports SAML using **WS-Trust**.

<div class='bs-callout alert-info'>
<strong>WS-Trust</strong> or Web Services Trust Language is a specification that uses secure messaging to create a trusted relationships between applications.
</div>

### Why Not SAML 2.0?

While SAML 2.0 is widely supported and useful in many situations, it has one major weakness that makes it unsuitable for use with RQ.

**Layman's Explanation**

Using SAML 2.0, a Windows application like RQ can log in automatically **if** the user logged into the machine with a **personal account**.

This is a problem because RQ is generally installed on a machine with a **shared account**. When a sales rep needs to use RQ they sign in using their own credentials. RQ easily switches between personal sessions in a matter of seconds.

With SAML 2.0, a sales rep would have to sign out of the machine, sign back in with their personal credentials, and re-launch RQ. This would be very time-consuming and negate the benefits of SAML 2.0. 

In order to maintain the best possible experience and allow sales reps to quickly switch between RQ sessions, we have implemented a solution based on WS-Trust.

**Technical Explanation**

The SAML 2.0 protocol supports two profiles,

* The **Passive** SAML profile redirects the browser to the Identity Provider's sign in page for authentication and then redirects the browser back to the application passing it a SAML token. The passive SAML profile is incompatible with RQ because it is not browser based
* The **Active** SAML profile is compatible with RQ but relies on the identity of the user that was authenticated on the host operating system. As RQ is generally installed on shared workstations with a generic user account, the identity of the user cannot be determined using the active SAML profile

Given that neither of the SAML 2.0 profiles are suitable for use with RQ, we have implemented an SSO solution based on WS-Trust.

## SSL Protection

**Secure Socket Layer (SSL)** is technology that establishes a secure channel of communication and makes all eCommerce and web security possible.

SSL works by requiring a server to install a **SSL Certificate**, which acts as a key to access the server. For iQmetrix to communicate with your SSL encrypted server, this certificate must be publicly available. 

Your organization is responsible for providing an Identity Provider that is protected by SSL and has a publicly-available SSL certificate.

## Acceptable User Names

We strongly recommend you create publicly-accessible domains and map your users to them, rather than using your internal domains. This will ensure that your user names are unique within our system. 

**Email addresses** are an excellent alternative to domain user names.


##### Example


A user "john.smith@yvr.kentel.local" could be mapped to "john.smith@kentel.com". 

## High Availability

High availability means a system is capable of maintaining a high level of operational performance for a period of time. 

It is your organization's responsibility to ensure your Identity Provider is highly available. If you are unsure what that requires or if you anticipate problems, please let contact <a href="mailto:apisupport@iqmetrix.com?subject=Support">Support</a> and we can discuss ways to mitigate these.

# Setup and Configuration

It is your responsibility to setup and configure your Identity Provider. 


##### Example


Using ADFS, you may find the following setup guides useful.

* [Windows Server 2012 R2 AD FS Deployment Guide](https://technet.microsoft.com/en-us/library/dn486820.aspx)
* [Create a Non-Claims-Aware Relying Party Trust](https://technet.microsoft.com/en-us/library/dn508281.aspx)

In adding a non-claims aware relaying party trust the retailer should use the following values:

| Setting | Value |
|:--------|:------|
| Display Name | iQmetrix Services |
| Non-claims-aware relaying party trust identifier | https://iqmetrix.net |
| Multi-factor Authentication | I do not want to configure multi-factor authentication settings for this relying party trust at this time |

## Testing

>
> Example Request
>

```
POST https://adfs.retaillabs.io/adfs/services/trust/13/UsernameMixed
Content-Type: application/soap+xml
Content-Length: 2255
Expect: 100-continue
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
```
```xml

<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">http://docs.oasis-open.org/ws-sx/ws-trust/200512/RST/Issue</a:Action>
        <a:MessageID>urn:uuid:2be726b3-e368-4a10-88f3-fd0312c9edc5</a:MessageID>
        <a:ReplyTo>
            <a:Address>http://www.w3.org/2005/08/addressing/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://adfs.retaillabs.io/adfs/services/trust/13/UsernameMixed</a:To>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <u:Timestamp u:Id="_0">
                <u:Created>2015-06-30T20:16:13.639Z</u:Created>
                <u:Expires>2015-06-30T20:21:13.639Z</u:Expires>
            </u:Timestamp>
            <o:UsernameToken u:Id="uuid-2ed4cc51-2345-446c-be94-9af4ab99d24c-1">
                <o:Username>Nicola.Tesla@retaillabs.local</o:Username>
                <o:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">4AlternatingCurrent</o:Password>
            </o:UsernameToken>
        </o:Security>
    </s:Header>
    <s:Body>
        <trust:RequestSecurityToken xmlns:trust="http://docs.oasis-open.org/ws-sx/ws-trust/200512">
            <wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy">
                <a:EndpointReference>
                    <a:Address>https://iqmetrix.net/</a:Address>
                </a:EndpointReference>
            </wsp:AppliesTo>
            <trust:Claims Dialect="http://schemas.xmlsoap.org/ws/2005/05/identity" xmlns:i="http://schemas.xmlsoap.org/ws/2005/05/identity">
                <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn" Optional="false"/>
                <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" Optional="true"/>
                <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname" Optional="true"/>
                <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname" Optional="true"/>
            </trust:Claims>
            <trust:KeyType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Bearer</trust:KeyType>
            <trust:RequestType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Issue</trust:RequestType>
            <trust:TokenType>urn:oasis:names:tc:SAML:2.0:assertion</trust:TokenType>
        </trust:RequestSecurityToken>
    </s:Body>
</s:Envelope>
```

> 
> Example Response
> 

```
HTTP 200 Content-Type: application/soap+xml
```
```xml

<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">http://docs.oasis-open.org/ws-sx/ws-trust/200512/RSTRC/IssueFinal</a:Action>
        <a:RelatesTo>urn:uuid:2be726b3-e368-4a10-88f3-fd0312c9edc5</a:RelatesTo>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <u:Timestamp u:Id="_0">
                <u:Created>2015-06-30T20:16:15.509Z</u:Created>
                <u:Expires>2015-06-30T20:21:15.509Z</u:Expires>
            </u:Timestamp>
        </o:Security>
    </s:Header>
    <s:Body>
        <trust:RequestSecurityTokenResponseCollection xmlns:trust="http://docs.oasis-open.org/ws-sx/ws-trust/200512">
            <trust:RequestSecurityTokenResponse>
                <trust:Lifetime>
                    <wsu:Created xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">2015-06-30T20:16:15.505Z</wsu:Created>
                    <wsu:Expires xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">2015-06-30T21:16:15.505Z</wsu:Expires>
                </trust:Lifetime>
                <wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy">
                    <wsa:EndpointReference xmlns:wsa="http://www.w3.org/2005/08/addressing">
                        <wsa:Address>https://iqmetrix.net</wsa:Address>
                    </wsa:EndpointReference>
                </wsp:AppliesTo>
                <trust:RequestedSecurityToken>
                    <Assertion ID="_62c0ac75-0267-46cf-95a6-91b9cdc8ed79" IssueInstant="2015-06-30T20:16:15.509Z" Version="2.0" xmlns="urn:oasis:names:tc:SAML:2.0:assertion">
                        <Issuer>http://adfs.retaillabs.io/adfs/services/trust</Issuer>
                        <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                            <ds:SignedInfo>
                                <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                                <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
                                <ds:Reference URI="#_62c0ac75-0267-46cf-95a6-91b9cdc8ed79">
                                    <ds:Transforms>
                                        <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
                                        <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                                    </ds:Transforms>
                                    <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                                    <ds:DigestValue>nWRVS/+EPGC10gyKqvuLcXLhwE8=</ds:DigestValue>
                                </ds:Reference>
                            </ds:SignedInfo>
                            <ds:SignatureValue>lCi93bMFIoSOmf4uBq95OF4LO7c5mARkR4x/1LagKDBS/iKMEi73EmxtZJ5o9L/OAfIueaKrdtiXFJXqB5KysA3WAjuMDVtaDfbJzhMhqZnXB2NrShA0vBM4cfCFj1VJe9ozTQiQUVtL/O0HTM06jCMHwJhbl1DMdTdZt9OejDfBtJDk5wr0TGLBmDYuVjIb2k+nWIWvCCjmOQbHlK65IcFaOQoXYjdwGu4YWttejC4m+sqgnAH926t9eorxpY928EVxN5xoB/UFSQFpnfQvPgfogu1EeByF2mwvbdf/qNIMtejF4AqAq6RUWvdhcFy+VDJqeWYBN2UY9LP4XdIU0g==</ds:SignatureValue>
                            <KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
                                <ds:X509Data>
                                    <ds:X509Certificate>MIIC4DCCAcigAwIBAgIQNGL3q/dLsoFBwDzHqMXstjANBgkqhkiG9w0BAQsFADAsMSowKAYDVQQDEyFBREZTIFNpZ25pbmcgLSBhZGZzLnJldGFpbGxhYnMuaW8wHhcNMTUwMTIxMjEwNTI4WhcNMTYwMTIxMjEwNTI4WjAsMSowKAYDVQQDEyFBREZTIFNpZ25pbmcgLSBhZGZzLnJldGFpbGxhYnMuaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCo1zytlu3USZhnj9bVcIVcvhWr5ojuYNzvR8mX/enOcIyoPzlP+0nSaoajTxutLi5uXYE27bRtnVQ6vWwLCMJ5TLxW1LvgcE4yNQg2ns+f0mI27Nvic4xTP4Yhh6CzYdxSbJURGKKSOvTKTmNJttqNGUvpJRakavKC6zF6ZniA+E7AlL6ONQd+E7O80WdybK44vwiDxaPcgHlqIRAn6cHgYL9WgC8NMt8plJFxN4oxnUpIiyS2jyWWs3PfOsgFIWqmx18s6TpH8VEJ7JOJkC5vhHZ6RPXxnS5EkpOd24IzvwSrmMmYRcb3LLQptcGymD4s1YVKkoKp2JAdJIBtTdj3AgMBAAEwDQYJKoZIhvcNAQELBQADggEBAFON9MIWas0ftf+No80T1LIRNh0kbvAFTYTDycLN1XzoIy1mCM0E+iRGe6ZmGNDgc+I11ZFbvvgV2DT/PLXlafRnKLomPWAZfzYHp1doWGFCFjBKQG6W0KjwTBxJTEy0v76I3q/BMBMn3iEr+uJvaDzsM212IImJqPvFsiQR3rEEoSZAWNNe8SVp3WiwoPXIv+hDuo1cRArroXb0rmZff/ubHWMJZz+4/RoLYz/EPCNDoygT7M/cV4mC5RVrvWC8eG8Gw9jBMeFXKQWcrS6PWY9py/f2nCzdmx8OPj9BhLoPc6ieD2ed44tIX58JhFdQxNfo7F4LAa4uZgi73Kzf9Bo=</ds:X509Certificate>
                                </ds:X509Data>
                            </KeyInfo>
                        </ds:Signature>
                        <Subject>
                            <SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
                                <SubjectConfirmationData NotOnOrAfter="2015-06-30T20:21:15.509Z"/>
                            </SubjectConfirmation>
                        </Subject>
                        <Conditions NotBefore="2015-06-30T20:16:15.505Z" NotOnOrAfter="2015-06-30T21:16:15.505Z">
                            <AudienceRestriction>
                                <Audience>https://iqmetrix.net</Audience>
                            </AudienceRestriction>
                        </Conditions>
                        <AttributeStatement>
                            <Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn">
                                <AttributeValue>Nicola.Tesla@retaillabs.local</AttributeValue>
                            </Attribute>
                        </AttributeStatement>
                        <AuthnStatement AuthnInstant="2015-06-30T20:16:15.477Z">
                            <AuthnContext>
                                <AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:Password</AuthnContextClassRef>
                            </AuthnContext>
                        </AuthnStatement>
                    </Assertion>
                </trust:RequestedSecurityToken>
                <trust:RequestedAttachedReference>
                    <SecurityTokenReference b:TokenType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV2.0" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:b="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd">
                        <KeyIdentifier ValueType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLID">_62c0ac75-0267-46cf-95a6-91b9cdc8ed79</KeyIdentifier>
                    </SecurityTokenReference>
                </trust:RequestedAttachedReference>
                <trust:RequestedUnattachedReference>
                    <SecurityTokenReference b:TokenType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV2.0" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:b="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd">
                        <KeyIdentifier ValueType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLID">_62c0ac75-0267-46cf-95a6-91b9cdc8ed79</KeyIdentifier>
                    </SecurityTokenReference>
                </trust:RequestedUnattachedReference>
                <trust:TokenType>urn:oasis:names:tc:SAML:2.0:assertion</trust:TokenType>
                <trust:RequestType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Issue</trust:RequestType>
                <trust:KeyType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Bearer</trust:KeyType>
            </trust:RequestSecurityTokenResponse>
        </trust:RequestSecurityTokenResponseCollection>
    </s:Body>
</s:Envelope>
```

When you are ready to test the integration, contact <a href="mailto:apisupport@iqmetrix.com?subject=Support">Support</a> to request the 3PA testing utility.

## Requested Claims

The following is a list of claims that will be requested:

| Claim | Required/Optional |
|:------|:------------------|
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` | Required |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | Optional |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname` | Optional |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname` | Optional |

# Managing Users

While Third Party Authentication can provide your users access to iQmetrix products, it does not have the ability to manage what those users can see or do once they are logged in. 

Manging users can be done through...

* iQmetrix applications such as RQ
* [User Manager API](/api/user-manager/) for an automated solution or
* [Hub](https://hub.iqmetrix.net/) for a web-based solution or
* [Automated Provisioning](#automated-provisioning)

# Automated Provisioning

**Automated Provisioning** or auto-provisioning is a process that involves managing a service in one or more systems automatically. 

When combined with 3PA, Automated Provisioning allows you to manage users in iQmetrix services by auto-provisioning them from your existing Identity Provider.

For troubleshooting errors and problems, see [Automated Provisioning FAQ](/faq/3pa/).


##### Example
 

Sarah's Company uses RQ with Third Party Authentication and Auto Provisioning enabled using ADFS for authentication.

Sarah gets a promotion and is given a manager security role within ADFS.

She enters her credentials in RQ, which asks ADFS "is this name/password valid?". 

ADFS confirms and says "also, Sarah now has a manager security role". RQ can then update the security for Sarah, so she is able to access areas of RQ restricted to managers.

## Requirements

Automated Provisioning requires your organization to have...

* Third Party Authentication enabled
* A domain name that is unique within iQmetrix's systems

You will need to work with your Account Manager to map your Identity Provider roles to [Security Roles](/api/security-roles/#securityrole).

To maintain this mapping, you will need to update [iQmetrix Hub](https://hub.iqmetrix.net) or RQ when new roles are added or existing roles are updated.

In addition, you will need to set and maintain a mapping using the ClientEntityId property on [CompanyTreeNode](http://developers.iqmetrix.com/api/company-tree/#companytreenode) resources. This must be done using the Company Tree API.

All user information that is supplied with authentication should be maintained in your Identity Provider. 

## Implications 

Enabling Automated Provisioning will result in...

* A slight configuration delay during login
* Limited ability to use the User Manager API - changes that do not match the Identity Provider will revert back the next time the user logs in
* An error message if there is a problem configuring a user, the message will indicate how to solve the problem

## Technical Flow

When added to 3PA, Automated Provisioning changes the technical flow by sending user information along with the POST request sent to the supplied URL. (Step 4 of [Technical Flow](#technical-flow)).

## Claims

The following is a list of claims that will be requested.

Notes:

* We **strongly recommend** you include a ClientUserId, a user identifier, to avoid creating duplicate user accounts
* Before Windows 2000, username is not supported
* If an expected claim is not returned, exiting data will be wiped

It may be possible to support custom claims if further user information is required, see [Adding Additional RQ Fields to an Employee](#adding-additional-rq-fields-to-an-employee).

<div class='bs-callout alert-info'>
To learn more about Employee Custom Fields, see <a href='https://support.iqmetrix.com/hc/en-us/articles/228837927-Settings-Employees#Employee_Custom_Fields_Setup'>Employee Custom Fields Setup</a>
</div>

| ClaimType | Required in RQ? | Required in Hub? | Populates Field | Example |
|:----------|:----------------|:-----------------|:----------------|:--------|
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` | Required | Required | [User](/api/user-manager/#user).UserName | Nicola.Tesla@retaillabs.com |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname` | Required | Optional | [User](/api/user-manager/#user).FirstName | Nicola |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname` | Required | Optional | [User](/api/user-manager/#user).LastName | Tesla |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | Optional | Optional | [User](/api/user-manager/#user).Email | ntesla@retaillabs.com |
| `http://iqmetrix.net/claims/telephoneNumbers/home` | Optional | Optional | [User](/api/user-manager/#user).PhoneNumbers | 604-123-4567x1000 |
| `http://iqmetrix.net/claims/telephoneNumbers/work` | Optional | Optional | [User](/api/user-manager/#user).PhoneNumbers | 604-654-3210x1234 |
| `http://iqmetrix.net/claims/telephoneNumbers/cell` | Optional | Optional | [User](/api/user-manager/#user).PhoneNumbers | 604-654-6543 |
| `http://iqmetrix.net/claims/securityGroupName` | Required | Optional | [AssignedRole](/api/security-roles/#assignedrole) | StoreManagers |
| `http://iqmetrix.net/claims/assignedEntityClientEntityId` | Optional* | Optional  | Assigned [Location](/api/company-tree/#location) | TheMarketCode |
| `http://iqmetrix.net/claims/assignedEntityClientEntityIds` | Optional* | Optional  | Assigned [Locations](/api/company-tree/#location) | Market1,Market2,Market3 |
| `http://iqmetrix.net/claims/clientUserId` | Optional | Optional | [User](/api/user-manager/#user).ClientUserID | 22323 |

* Note: The presence of at least one of the "assignedEntityClientEntityId" claims is required for RQ.

## Adding Additional RQ Fields to an Employee

You can auto-provision fields not listed above using attributes. For company-specific Custom fields, the `rqCustomField` prefix is required.

<div class='bs-callout alert-info'>
Before adding additional fields, discuss your requirements with your Account Manager to ensure they will appear in RQ
</div>

| Claim | Value | Description |
|:------|:------|:------------|
| `http://iqmetrix.net/claims/attributes/rqCustomField_{AttrName}` | TheValue | Add TheValue to the {AttrName} field for the employee in RQ |

**Figure 2:** Custom Employee Attributes in RQ 

<img class="popUpImage" src="http://developers.iqmetrix.com/images/3pa/rq-view.png" alt="Custom Employee Attributes in RQ" style="border: 1px solid grey" />

