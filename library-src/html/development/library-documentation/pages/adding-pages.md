---
title: Adding Pages
category: library-documentation
nav_sort: 4
---

## Add a New Page to a Category
Adding a new page to a category in a library is easy. Simply add a new markdown file to a ```/library-name/category-name/pages/``` folder, and the page will be compiled into HTML and included within all navigations found in the library.

***Pro-tip:*** After you add a new page to the library, Gulp and Metalsmith won't recognize the new files. You will need to stop and then restart Gulp with the ```gulp``` command again.

---

## YAML Front-Matter
Metalsmith uses Yaml Front-Matter do add metadata to a file for use with things like page titles, categorization, and sort order of a page on the site. Each page in the library needs some basic frontmatter  for them to be processed correctly during the build. Below is the minimum of information needed for each page:

``` yaml
---
title: Adding Content Pages         # title of page
category: library-documentation     # category name; all pages in category must have matching category name
nav_sort: 2                         # sort order of page within category
---
```


---

## Add Markdown Content
To simplify the documentation process, we use Markdown instead of HTML. When a file is saved, the markdown is compiled into an HTML page. 

[Markdown Cheatsheet](https://guides.github.com/features/mastering-markdown/)



---

## Add a Working Code Example
You can easily add working code examples and syntax highlighted code snppets to your documentation. Simpy add your HTML into a markdown file and it will render as HTML after it's compiled. 

***Pro-tip:*** You cannot use Markdown within your HTML examples, it just doesn't work. 

---

## Add a Code Snippet
To add a code snippet, use the markdown code for code with the language noted. As long as the language is supported, its syntax will be highlighted nicely. 

``` markdown
``` [language-name]
<section>
    <header>
        ...
    </header>
</section>
``````

**You can use the following language names to get the correct syntax highlighting for your code examples:** 
- markdown
- markup
- javascript
- css 
- scss
- yaml 

---

## Adding Images and other Resources
- Images are hosted in ```/library-src/assets/images/**/*``` and can be referenced using Markdown image tags
- Other assets like PDFs should be located in ```/library-src/assets/resources``` 

---