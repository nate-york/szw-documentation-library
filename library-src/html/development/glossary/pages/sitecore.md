---
title: Sitecore 
category: glossary
nav_sort: 8
---
## API
The API is where you define how the application interacts with the user actions, data, and with Sitecore. Additional documentation will soon be online and can be found in "Sub-Zero and Wolf Product API Reference Guide_v3.pdf"

---

## Clay Tablet
Clay Tablet is a translation connector that is integrated into Sitecore that allows us to send a batch of files or a specific file to the translator. The translator is notified of the request, translates the files and send sends them back to Sitecore for review and to be published. 

---

## Data dictionary
The data dictionary contains content that appears on the website that does not have its own Sitecore item.  It is located here in the Sitecore tree: Sitecore -> System -> Dictionary -> Renderings Content
The copy: “Address” is used often throughout the site.  Therefore, it resides under Renderings Content -> A.  Code: Translation.Text(“address”)

---

## Product tree
All of the Sub-Zero, Wolf and Wolf Gourmet products reside in what we call the "Product Tree" within Sitecore. In addition, we have Marketing accessory pages, pre-made collection pages and currently within Assets we have the dynamic QR sheets for Sub-Zero and Wolf products.  As additional dynamic content is required for products, it will be placed in this Asset folder.

![Product Tree](/library/assets/images/screenshots/product-tree.png)

---

## Nodes
Within Sitecore we have begun to build additional sites besides the www.subzero-wolf.com, which is what we refer to as the "United States node". We have a Canada, Latin America, and a Global node as well. 

### Example Nodes

#### United States Node
The United States node contains the navigation and pages within the www.subzero-wolf.com site. We also use this node to "clone" to both the Global and Canada node so that they can share a great deal of content without having to administer it in multiple locations and websites.

![US Node](/library/assets/images/screenshots/node-us.png)

#### Global Node
The Global Node is mainly a "clone" of the United States node, but we do have a few additional pages within Global that are different from the United States node (Locator, Events, etc). The functionality differs greatly from the .com site and therefore we have created a new page within global for those. Global is then cloned down to create each unique distributor website (currently only Latin America).

![Global Node](/library/assets/images/screenshots/node-global.png)

#### Canadian Node
The Canadian Node is a clone of United States. The SZW team administers both websites, and therefore for ease of maintenance the .com is a clone. 

![Canadian Node](/library/assets/images/screenshots/node-canada.png)

#### Latin America Node
The Latin America node is our first distributor website and will contain Spanish content for launch in May. It is a clone of the global node, and then includes a Spanish version for all of the site content to create a unique mx.subzero-wolf.com website in Spanish.

![Latin American Node](/library/assets/images/screenshots/la-node.png)


