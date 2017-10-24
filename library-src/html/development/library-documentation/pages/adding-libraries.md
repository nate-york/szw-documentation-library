---
title: Adding New Libraries
category: library-documentation
nav_sort: 5
---

## Add library file structure
Create the new library file structure in the source folder.

The below outline is of a library folder that would be found nested within ```/library-src/html/```. 

``` javascript
library-name/           // a single library, you can have as many of these as you want
├── category-name/      // each category gets its own folder
│   ├── pages           // each page in a category is found within this pages folder
│   │   ├── page.md     // each page is a markdown file (.md)
│   │   ├── page.md
│   └── index.md        // main index file for a category; defines title, description, category icons, etc. 
└── index.md            // main index file for the library; defines title, description, library icon, etc.
```

Please refer to the full [file structure](/library/development/library-documentation/file-structure) to see structure beyond the individual library.

--- 

## Create and set up Build File 
1. In the root of ```/library-src/```, make a copy of one of the build-[libraryname].js files
2. Rename the copy replacing [libraryname] in the title with the new library name.
    - This term will be used further so try to make it short but easily recognizable
3. Open your new build file
4. Update source file location
    - Search for ```.source(./html/``` and replace the existing library name with your new one ([libraryname])
    
    ``` javascript
    .source('./html/[library-name]')     // the page source directory
    ```
5. In the fileMetadata settings, change the library name to your new library name
    - Search for ```metadata: {"library": "``` and replace the library name with your new one ([libraryname]) 
    
    ``` javascript
    .use(fileMetadata([
    {
        pattern: "**",
        metadata: {"library": "[library-name]"}
    },
    ```
6. Update source destination file locations
    - Search for ```.destination('../library/``` and replace the existing library name with your new one ([libraryname])

    ``` javascript
    .destination('../library/[library-name]')   // the destination directory
    ```

---

## Add library Config to Gulpfile

1. Open gulpfile.js
2. Add new library management tasks. 
    * These tasks are sorted alphabetically to ensure it's as easy as possible to maintain. 

    ``` javascript
    //--------------------------------------------------------------------------------------------------------------------------//
    // [LIBRARY NAME] LIBRARY MANAGEMENT
    //--------------------------------------------------------------------------------------------------------------------------//
    gulp.task('build-[library-name]-library', ['build-[library-name]']);

    gulp.task('build-[library-name]', function(cb) {
        console.log('Building [library-name] Library...');
        exec('node build-[library-name]', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
    });
    ```
3. Add new task to the ```build-all-libraries``` task in gulp. 
    
    - Search for ```build-all-libraries``` to find this section, and add the new library
    - This list of tasks is in alphabetical order to ensure it's as easy as possible to maintain.
    ``` javascript
    gulp.task('build-all-libraries', ['build-homepage', 'build-content-management-library', 'build-development-library', 'build-documentation-library', 'build-patterns-library', 'build-toolkit-library', 'build-[library-name]-library'])
    ```
4. Add the new library folder to the Gulp ```watch``` task list. 
    - The ```watch``` task is located at the very bottom of the gulp file
    - A new task will look like: 
    ``` javascript
    // development library
    gulp.watch('./html/[library-name]/**/*.md', { interval: 1000 }, ['build-[library-name]-library']);
    ```

---

## Test Build and start Gulp
1. Run ```npm build-[library-name]``` at a command prompt in ```/library/src``` to ensure the library builds
2. Start/Restart Gulp by running ```gulp``` at a command prompt and make a change to a markdown file in the new library and ensure that Gulp rebuilds the library each time a file is modified and then saved.

---