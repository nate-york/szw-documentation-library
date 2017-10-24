---
title: File Structure
category: library-documentation
nav_sort: 3
---

## Source and Destination locations
Within the root of ```Subzero.Public.Web``` project in the repo, there are two folders for the library:

1. **The project source directory**. This contains the source files for working with the library
    - Source files located at ```/library-src/```
    - This folder should ***never*** be included in the project within Visual Studio, as it shouldn't be deployed to the site
    - All files and folders within this folder ***should*** be added to SVN
2. **The project destination directory**. This folder contains the deployment ready files after the library build is run.
    - Destination files located at ```/library/```
    - This folder ***should*** be included in the project
        - ***Pro-tip:*** When working with this folder in Visual Studio to make sure all new files are included, it may be easier to Exclude the ```/library``` from the project, and then include it again, instead of going in and out of directories to find new files.
    - All files and folders within this folder ***should*** be added to SVN

---

## Source Folder File Structure

``` javascript
library-src/                    // root folder for source
├── assets/                     // normal assets used within project
│   ├── css
│   ├── images
│   ├── resources
│   └── scripts
├── html/                       // the main documentation files
│   ├── library-name/           // a single library, you can have as many of these as you want
│   │   ├── category-name/      // each category gets its own folder
│   │   │   ├── pages           // each page in a category is found within this pages folder
│   │   │   │   ├── page.md     // each page is a markdown file (.md)
│   │   │   │   ├── page.md
│   │   │   └── index.md        // main index file for a category; defines title, description, category icons, etc. 
│   │   └── index.md
│   └── index.md                // main index file for a library; defines
├── node_modules/               // this is maintained by npm and should never be added or committed to the project
├── templates/                  // Handlebars.js Template files
│   ├── partials/               // partial templates; smaller templates that can be reused in main templates
│   │   ├── partial-name.hbt    // each template is a handlebarst template file (.hbt)
│   │   └── partial-name.hbt
│   ├── partial-name.hbt        // main page template files
│   └── partial-name.hbt
├── build-homepage.js           // builds the main library landing page which lists all libraries
├── build-[libraryname].js      // builds specific library; triggered by gulp watches
├── build-[libraryname].js
├── gulpfile.js                 // main gulpfile; this sets up watches and builds libraries when content is modified
├── package.json                // maintained by npm to define project dependecies used by Gulp and Metalsmith
└── .updated.json               // json file containing list of modification times for files; updated automatically on build
```

---

## Destination Folder File Structure
``` javascript
library/
├── assets/                     // normal assets used within project
├── library-name/               // URL: /library/library-name
│   ├── category-name/          // URL: /library/library-name/category-name
│   │   ├── page-name/          // URL: /library/library-name/category-name/page-name
│   │   │   └── index.html
│   │   ├── page-name/
│   │   │   └── index.html
│   │   └── index.html
│   └── index.html
└── index.html                  // main landing page listing all libraries; URL: /library 

```