---
title: Page Layout
category: front-end-knowledgebase
nav_sort: 1
---

## Page layout basics
Each section of content found throughout the site is wrapped within a ```column``` container to control spacing, width, and alignment of content within. 

By default, a column:
* has predefined horizontal and vertical padding to control spacing between each column
* has a predefined max-width of 1360px, and will scale to fit 100% width when the viewport width is smaller
* is simply a wrapper of content and should not be styled for a specific instance
* and its contents are left justified

## Basic Column
<div class="demo-columns">
    <section class="column">
        This is a column.
    </section>
</div>

``` markup
<section class="column">
    This is a column.
</section>
```

Most often the basic column needs to be modified to account for different scenarios. Centering the column on the page, adjusting the spacing, centering content, etc., etc. 

Below is a review of column modifiers. You may add as many modifiers to a column as you need to fit your layout. 

## Centering Columns and Content

### Centering Columns on a page

<div class="demo-columns">
    <section class="column column--centered">
        This is a centered column with a max-width of 1360px.
    </section>
<div class="demo-columns">

``` markup
<section class="column column--centered">
    This is a centered column with a max-width of 1360px.
</section>
```

### Centering Content in a column

<div class="demo-columns">
    <section class="column column--center-content">
        This is a column with centered content.
    </section>
<div class="demo-columns">

``` markup
<section class="column column--center-content">
    This is a column with centered content.
</section>
```


## Column width modifiers

### Small Column
<div class="demo-columns">
    <section class="column column--small-centered">
        This is a small centered column with a max-width of 1024px.
    </section>
<div class="demo-columns">

``` markup
<section class="column column--small-centered">
    This is a small centered column with a max-width of 1024px.
</section>
```

### X-Small Column
<div class="demo-columns">
    <section class="column column--xsmall-centered">
        This is an extra-small centered column with a max-width of 768px.
    </section>
<div class="demo-columns">

``` markup
<section class="column column--xsmall-centered">
    This is an extra-small centered column with a max-width of 768px.
</section>
```

### Full width Column

<div class="demo-columns">
    <section class="column column--full-width">
        Full-width columns span 100% of a page width with no horizontal padding.  
    </section>
<div class="demo-columns">

``` markup
<section class="column column--full-width">
    Full-width columns span 100% of a page width with no horizontal padding.  
</section>
```

## Column spacing modifiers

### Half Vertical Padding
<div class="demo-columns">
    <section class="column column--half-vertical-padding">
        This is a column with half the default vertical padding.
    </section>
<div class="demo-columns">

``` markup
<section class="column column--half-vertical-padding">
    This is a column with half the default vertical padding.
</section>
```

### No Padding
<div class="demo-columns">
    <section class="column column--no-padding">
        This is a column with no padding.
    </section>
<div class="demo-columns">

``` markup
<section class="column column--no-padding">
    This is a column with no padding.
</section>
```

## Additional Modifiers
For a full list of all available column modifiers, please refer to the Sass partial found at ```/pattern-library/sass/base/_columns.scss``` in the solution.