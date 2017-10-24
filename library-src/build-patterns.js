// basic build

'use strict';

//-----------------------------------------
// PLUGINs
//-----------------------------------------
var path        = require('path'),
    Handlebars  = require('handlebars'),
    Metalsmith  = require('metalsmith'),
    assets      = require('metalsmith-assets'),
    collections = require('metalsmith-collections'),
    drafts      = require('metalsmith-drafts'),
    fileMetadata= require('metalsmith-filemetadata'),
    headings    = require('metalsmith-headings'),
    headingsidentifier = require("metalsmith-headings-identifier"),
    layouts     = require('metalsmith-layouts'),
    markdown    = require('metalsmith-markdown'),
    metadata    = require('metalsmith-metadata-directory'),
    navigation  = require('metalsmith-navigation'),
    permalinks  = require('metalsmith-permalinks'),
    slug        = require('metalsmith-slug')

//-----------------------------------------
// Navigation Settings
//-----------------------------------------
var navConfigs = {
    primary:{
        sortBy: 'nav_sort',
        filterProperty: 'nav_groups',
        includeDirs: true
    },
    library: {
        sortBy: 'nav_sort',
        filterProperty: 'nav_groups',
        includeDirs: true
    }
};

var navSettings = {
    navListProperty: 'navs',
    permalinks: true,
};

var navTask = navigation(navConfigs, navSettings);

//-----------------------------------------
// REGISTER HANDLEBARS HELPERS
//-----------------------------------------

// Get relative path
var relativePathHelper = function(current, target) {
    // normalize and remove starting slash from path
    if(!current || !target){
        return '';
    }
    current = path.normalize(current).slice(0);
    target = path.normalize(target).slice(0);
    current = path.dirname(current);
    return path.relative(current, target).replace(/\\/g, '/');
};

Handlebars.registerHelper('relative_path', relativePathHelper);

// Comparitor for if statements
Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

// Replace spaces with hyphens
Handlebars.registerHelper('lowerCaseHyphenate', function(str) {
  return str.toLowerCase().split(" ").join("-");
});

//-----------------------------------------
// METALSMITH BUILD CONFIG
//-----------------------------------------
var ms = Metalsmith(__dirname) // the working directory
    // Clean build directory before building
    .clean(true)

    // Source directory of markdown files for this site
    .source('./html/patterns')

    // Declare collections of pages
    .use(collections({
        "categories": {
            pattern: "*/index.md",
            sortBy: "nav_sort"
        },
        "pages": {
            pattern: "*/pages/*.md",
            sortBy: "nav_sort"
        },
        "prototypes": {
            pattern: "*/demos/*.html",
            sortBy: "nav_sort"
        }
    }))

    // Dont publish draft files 
    // Usage: Add 'draft: true' to YAML
    .use(drafts())

    // Automate some of the metadata
    .use(fileMetadata([
        {
            pattern: "**",
            metadata: {
                "library": "patterns"
            }
        },
        {
            pattern: "*",
            metadata: {
                "layout": "library-landing-v2.hbt"
            }
        },
        {
            pattern: "*/*",
            metadata: {
                "layout": "category-page-v2.hbt",
                "nav_groups": "primary"
            }
        },
        {
            pattern: "*/pages/*",
            metadata: {
                "layout": "page-v2.hbt",
                "nav_groups": "primary"
            }
        },
        {
            pattern: "*/demos/*",
            metadata: {
                "layout": "prototype.hbt",
                "nav_groups": "primary"
            }
        }
    ]))

    // Load any json data files into global metadata
    .use(metadata({
      directory: './html/patterns/data/*.json'
    }))

    // Convert Markdown to HTML
    .use(markdown({
        langPrefix: 'language-',
        smartypants: true,
        smartLists: true,
        gfm: true,
        tables: true
    }))

    // Write all page H2 values to metadata
    .use(headings('h2'))

    // Add IDs to H2 elements for linking
    .use(headingsidentifier())

    // Set variable "slug" value to page category metadata value
    .use(slug({
      property: 'category',
      lower: true,
      replacement: ' '
    }))

    // Set filestructure using permalinks for nice urls
    .use(permalinks({
        linksets: [
            {
                match: { collection: 'pages' },
                pattern: ":category/:title"
            },
            {
                match: { collection: 'prototypes' },
                pattern: ":category/:title"
            },
        ]
    }))

    // Create Navigation
    .use(navTask)

    // Set up templating engine (Handlebars)
    .use(layouts({
        engine: "handlebars",
        directory: "./templates",
        partials: "./templates/partials"
    }))


    // Declare location of asset files (CSS/CSS/Images)
    .use(assets({
        source: "./assets",
        destination: "../assets"
    }))

    // Set location to build site to
    .destination('../library/patterns')   // the destination directory

    // Build and throw errors if they come up
    .build(function(err) {
        if (err) throw err;
        console.log('...complete')
    })
