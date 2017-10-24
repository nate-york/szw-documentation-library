---
title: Environment Setup
category: library-documentation
nav_sort: 2
---

## Installing Dependencies
This documentation library is built using [Metalsmith](http://www.metalsmith.io/), [Handlebars](http://handlebarsjs.com/) and [Gulp](https://gulpjs.com/). In order to compile and build the site, we need to make sure we have all of these items and their dependencies installed. 

*These instructions assume you have [Node.js](http://nodejs.org) and [Gulp](http://http://gulpjs.com/) already installed globally in your environment.*

1. Open a command prompt and navigate to the ```/library-src``` folder
2. run ```npm install``` to install all project dependencies. This will install all dependencies for the library, include Metalsmith and Handlebars.

---

## Running Gulp to watch libraries and automate build
Gulp will watch all the defined libraries and templates in ```/library-src``` for changes and automates the build process.     

1. Open a command prompt and navigate to the ```/library-src``` folder
2. Run ```gulp``` and start documenting. Saving a library index file will rebuild the entire library system, and saving a page file within any library will only rebuild that library. 