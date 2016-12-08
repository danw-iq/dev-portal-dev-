---
title: User Manager
search: true
---

## Overview

This document outlines the following concepts:

* Users
* Security Roles
* Permissions

## User Manager

User Manager allows you to:

* Manage [User](#users) accounts for your Company
* Organize Users by [Security Roles](#security-roles)
* Determine the actions that can be done with [Permissions](#permissions)

<img class="popUpImage" src="http://developers.iqmetrix.com/images/user_manager.jpg"/> 

<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Note: </b>
Changes to User Manager are coming soon
</div>

## Users

A User represents an account that can be used to perform actions on your data within iQmetrix APIs. 

## Permissions

Permissions are the building blocks of Security Roles and represent the ability to perform an action within iQmetrix APIs. 

### Users and Permissions

Users never get Permissions directly. 

Instead, a User is assigned one or more Security Roles which contain Permissions. This assignment is also associated with an Entity, which allows for very specific SecurityRole assignments.

The only way to revoke a User's access is to change a Security Role or remove a Permission from a Security Role.

### Permissions are Atomic

A Permission will never overrule another Permission.

For example, the `readcustomerresources` (View Customers) Permission enables a User to retrieve a Customer and the `managecustomerresources` (Edit Customers) Permissions enables the user to update a customer. Both Permissions are required to perform both requests.

### Permissions are Positive

Assigning a Permission to a Security Role always **grants** an action, never denies. 

For example, you would never assign a "Cannot View Customers" Permission. Instead, you would unassign the `readcustomerresources` (View Customers) Permission.

### Restricted Permissions

Some Permissions are intended for specific scenarios and are Restricted by iQmetix.

If you require access to a Restricted Permission, contact <a href="mailto:apisupport@iqmetrix.com?subject=Support">Support</a>.

## Security Roles

A Security Role represents the relationship between a [User](#users) and a set of [Permissions](#permissions).

Security Roles allow you to create custom Permission sets that define what [Users](#users) can do.

### Stock Security Roles

All entities with [Users](#users) come with a set of stock Security Roles, generated for the convenience of administrators. These stock Security Roles have Permissions that represent the needs of the typical User.

* Dashboard Reporting
* Marketer
* Marketing Admin
* Store Manager
* System Admin

You are free to modify stock Security Roles however you wish.

### Users and Security Roles

[Users](#users) can be assigned a Security Role at any level in the [Catalog](http://developers.iqmetrix.com/concepts/company-tree/).

As an example, we will use the fictional Company Westeros. 

Westeros has recently opened a retail store in Edmonton and has promoted Sam Smith, a Store Manager for their Calgary store, to Regional Manager of Alberta.

Until a new Store Manager for Calgary is hired, Sam divides his time between being a Regional Manager for Alberta and a Store Manager for Calgary.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/assigned-role.png"/> 

To accomplish the scenario above, we use the [Company Tree](/api/company-tree), [User Manager](/api/user-manager) and [Security Roles](/api/security-roles) APIs to make Sam Smith a Regional Manager for Alberta and a Store Manager for Calgary. 

As Sam Smith does not have a specified Security Role with Edmonton, the Security Role is passed down or **inherited** from parent to child and Sam acquires a Regional Manager Security Role for Alberta and Edmonton.

## Platform vs RQ

The equivalent of Users, Security Roles and Permissions in User Manager are listed in the below table,

| Platform | RQ | 
|:---------|:---|
| Users | Employees |
| Security Roles (UM) | Security Roles (RQ) |
| Permissions | Security Screens and Security Levels |

To avoid confusion, Security Roles in RQ will be listed as "Security Roles (RQ)" and Security Roles in User Manager will be listed as "Security Roles (UM)".

### Users vs Employees

Users...

* Represent accounts that can be used to perform actions on your data within iQmetrix APIs
* Can have multiple Security Roles (UM) at any level in the Company Tree, see [Catalog](http://developers.iqmetrix.com/concepts/company-tree/#inheritance)

Employees...

* Represent accounts that can be used to access your data within RQ
* Can only have a single Security Role (RQ)

To learn more about Employees, see [Employees Console](https://support.iqmetrix.com/hc/en-us/articles/228695067-Employees-Console).

### Security Roles (UM) vs Security Roles (RQ)

Security Roles (UM)...

* Represent relationships between [Users](#users) and a set of [Permissions](#permissions).
* Span the entire iQmetrix ecosystem
* Are made up of Permissions 
* Are Assigned to Users 
* Have a set of assigned Permissions

Security Roles (RQ)...

* Represent relationships between Employees and Security Screens
* Exist only within RQ
* Are made up of Security Levels and Security Screens
* Are assigned to Employees
* Have Security Levels for every Security Screen

To learn more about Security Roles (RQ), see [Security Role Setup](https://support.iqmetrix.com/hc/en-us/articles/228837967-Settings-Security-Roles-and-Descriptions).

### Permissions vs Security Screens and Security Levels

Permissions...

* Represent the ability to perform a single action or a set of logically-grouped actions within iQmetrix APIs
* Grant access by assignment to Security Roles (UM) 

Security Screens...

* Represent access to features in RQ 
* Are made up of Security Levels on a scale, often from No Access to Full Access
* Grant or deny access by changing the Security Level for a Security Screen

To learn more about Security Screens, see [Security Role Setup](https://support.iqmetrix.com/hc/en-us/articles/228837967-Settings-Security-Roles-and-Descriptions).