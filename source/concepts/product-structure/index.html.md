---
title: Product Structure
search: true
---

## Overview

This document outlines the following concepts:

* Product Structure
* Master Products
* Variations
* Revisions

## Product Structure

In [Product Library](http://developers.iqmetrix.com/concepts/product-library/#product-library) and in your Catalog, products are structured in a way to make managing them easier.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/product_structure.jpg"/> 

This structure drives a standardized, consumer-friendly shopping experience by grouping like products together and aiding with detailed and comprehensive reporting for retailers. Master Products can be split into multiple Variations, which can then be further split into Revisions.

## Master Products

The Master Product is the 'model' of the product. This will often be what is displayed to the consumer in channels such as eCommerce and in-store interactive software. There are two types of Master Products:

* Saleable Master Products do not offer a customer a choice before they can buy a product, such as a designer necklace or charging cable
* Non-saleable Master Products require a customer to choose options before they can buy a product, such as different colors or sizes

## Variations

Variations are saleable child products of a non-saleable Master Product. 

Variations can inherit properties from a parent Master Product and have their own properties such as stock levels, prices and images.

The image below represents how a Master Product “Comfy Sweater” has variations for color and size.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/nonwireless.png"/> 

## Revisions

In the wireless industry, there is often an additional level of complexity, as a Carrier or Company may offer a different version of the product. These are referred to as Revisions.

Note: Revisions may be created from either Master Products or Variations. If Variations exist on a Master Product, Revision must be created from these Variations, not the Master Product.

Revisions allow a Carrier or Company to manage specific versions of a product. For example, by including branded images or descriptions, or managing separate SKUs.

As an example, if a customer walks into a retail store looking for a Gold iPhone 6, in the 32GB size, they might have a choice of:

* Sprint iPhone 6 Gold 32 GB
* AT&T iPhone 6 Gold 32 GB
* T-Mobile iPhone 6 Gold 32 GB
* Verizon iPhone 6 Gold 32 GB

The image below represents how a Master Product of an iPhone 6 has Variations for color and size but also has Carrier Revisions for every Carrier that sells the iPhone 6.

<img class="popUpImage" src="http://developers.iqmetrix.com/images/wireless.png"/> 

## Examples

| Product | Master Product, Variation or Carrier Revision? | 
|:-------------|:------------------------------------------|
| "Lucy" Graphic T-Shirt | Master Product | 
| Comfy Sweater Blue S | Variation | 
| iPhone 6 | Master Product | 
| Pebble Watch Black | Variation |
| AT&T iPhone 6 Gold 32 GB | Carrier Revision | 