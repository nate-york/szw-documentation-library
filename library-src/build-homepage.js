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
    filter      = require('metalsmith-filter'),
    layouts     = require('metalsmith-layouts'),
    markdown    = require('metalsmith-markdown'),
    permalinks  = require('metalsmith-permalinks')

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

//-----------------------------------------
// METALSMITH BUILD CONFIG
//-----------------------------------------
var ms = Metalsmith(__dirname) // the working directory
    // Clean build directory before building
    .clean(false)

    // Source directory of markdown files for this site
    .source('./html')

    // Only use main index and library index files, ignore the rest
    .use(filter(['index.md', '*/index.md']))

    // Declare collections of pages
    .use(collections({
        "libraries": {
            pattern: "*/index.md",
            sortBy: "title"
        }
    }))

    // Dont publish draft files 
    // Usage: Add 'draft: true' to YAML
    .use(drafts())

    // Convert Markdown to HTML
    .use(markdown({
        smartypants: true,
        smartLists: true,
        gfm: true,
        tables: true
    }))

    // Set filestructure using permalinks for nice urls
    .use(permalinks())

    // Set up templating engine (Handlebars)
    .use(layouts({
        engine: "handlebars",
        directory: "./templates",
        partials: "./templates/partials"
    }))

    // Declare location of asset files (CSS/CSS/Images)
    .use(assets({
        source: "./assets",
        destination: "./assets"
    }))

    // Set location to build site to
    .destination('../library')   // the destination directory

    // Build and throw errors if they come up
    .build(function(err) {
        if (err) throw err;
        console.log('...complete')
    })
