---
title: Company Tree
search: true
---

## Overview

This document outlines the following concepts:

* Company Trees
* Nodes
    * Companies
    * Divisions
    * Groups
    * Locations
    * Devices
    * Relationships
* Inheritance

## Company Tree 

A Company Tree is a representation of how a Company is structured and is used to: 

* Organize Locations
* Manage nuances within iQmetrix APIs, which can be passed down hierarchically 
* Structure reporting
* Manage security access

<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Note: </b>
If you use RQ, you have limited control of your Company Tree.
</div>

See the figure below for a general concept of how a Company Tree is structured. 

<img class="popUpImage" src="http://developers.iqmetrix.com/images/company-tree-node.png"/> 

## Nodes

Nodes are the building blocks of a Company Tree and are used to represent the Company, Group, Division, Location or Devices in a Company Tree. 

While Nodes may have multiple children, they can only have a single parent.

### Company

The Root (top-most) Company Tree Node always represents the Company that owns the tree.

### Divisions and Groups

Divisions and Groups serve as generic buckets you can use to organize a Company Tree.

iQmetrix recommends using Divisions to represent **sub-brands** or **sub-companies** and Groups to represent **managerial** or **geographical** groupings.

### Locations

Locations represent physical and virtual presences that may hold inventory or process transactions, such as:

* Offices
* Retail locations
* Kiosks
* Distribution centers
* Warehouses

### Devices

Devices include payment terminals and hardware appliances that run iQmetrix products such as XQ Shelf.

### Relationships

Company Tree Nodes are connected by Relationships, which create the hierarchical nature of the Company Tree.

The following table summarizes the possible relationships that may exist between Company Tree Nodes.

| Company Tree Node Type | Allowable Childen |
|:-----------------------|:------------------|
| Company | Division, Group, Location, Device |
| Division | Division, Group, Location | 
| Group | Division, Group, Location |
| Location | Device |
| Device | None |

## Company Tree and RQ

A company structure in RQ is made up of company, channels, regions, districts, and locations. At minimum, the company, region, district and location level must be included to create a tree with a depth of 4. 

If an RQ company structure is imported into the Company Tree API, the following conversions take place:

| RQ | Company Tree |
|:---|:-------------|
| Company | Company |
| Channel | Division |
| Region | Group |
| District | Group |
| Location | Location |

## Inheritance

iQmetrix APIs use the hierarchical structure of a Company Tree to pass information "down" the Tree. This is called **inheritance**.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/company-tree-inheritance.png"/> 


In the example above, we have priced an iPhone Case at the KENTEL Node for 8.99. Alberta, Manitoba, Calgary and Winnipeg inherit this price, as they do not have a price explicitly set. 

However, Edmonton Mall does have a price set for 11.99 and does not inherit the price from its parent, Alberta.

## Example

This example demonstrates the flexibility of a Company Tree as a company changes over time.

The fictional company used for these examples is KENTEL, a cellular mobility store specializing in wireless accessories.

KENTEL has two retail locations in Edmonton and Calgary. 

<img class="popUpImage" src="http://developers.iqmetrix.com/images/company-tree-ex1.png"/> 

Through a successful social media campaign, KENTEL gains thousands of followers on social media.

This translates into record sales, and KENTEL decides to expand into the neighboring province of Manitoba, which has a similar climate.

A new province means a new set of taxes and regulations, so KENTEL hires a regional store manager. The Company Tree is modified to include regional groups Manitoba and Alberta.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/company-tree-ex2.png"/> 

A few months later, KENTEL acquires retail stores in Manitoba and California through a merger with a competitor, Wireless Realm. The company name changes to KENTEL Corporation as a result and the Canadian store are rebranded as Mobile etc.

Wanting to improve the customer experience, KENTEL decides to add devices to the Edmonton and San Francisco retail stores.

To simplify management, the Company Tree is divided into Divisions.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/company-tree-ex3.png"/> 