---
title: Other Information
category: front-end-knowledgebase
nav_sort: 11
---

## Responsive Carousel

### Introduction
Responsive Carousel was created because there were issues across the site where there would be console errors because multiple instances of slick-slider were being called. The reason this could happen was because instead of creating a separate javascript file in the library and then referencing the source js file, we were just copying and pasting the same js across multiple views. Normally the script bundler would recognize that the javascript was the same but something as simple as an extra space can prevent the script bundler from seeing two identical scripts as being the same.

To address the issue of the script bundler not recognizing the responsive carousel as being the same script across the multiple views, I created a javascript file and a new folder in the shared folder of the scripts library (scripts > shared > slick-slider > responsive-carousel-3max.js and responsive-carousel-4max.js).

### Usage
For responsive carousels use either the .js-responsive-carousel-3max and .js-responsive-carousel-4max classes and reference the associated script file. 

---

## Small Spaces Filter
This filter operates differently than the other filters on the site. On page load it sorts out the various products based on their labels and creates a product object that has a key value pair that identies what label the product is associated with.

---