---
title: sizeEmAll Plugin
category: front-end-knowledgebase
nav_sort: 4
---

## Introduction
Size-em-All (SeA) is a JavaScript plugin that will enable you to equally size various elements accross the page. The plugin takes various parameters and can be initialized on screen size changes and on screen load, or just on screen load. This plugin is completely responsive and will size all specified objects equally accross any screen size and is compatitable with IE9-11, Mozilla FireFox, and Chrome.

---

## Dependencies
Like any plugin, SeA must be referenced at the bottom of the page, in order to be called. Another dependency that may be commonly used with SeA is ImagesLoaded plugin, where you can setup SeA to not run until all images in a specified container have loaded. This is important because if you are trying to size elements with images to be equal height, it'll be important that the images have finished loading prior to the SeA being initialized.

``` markup
<!-- Source Reference -->
<script src="/Scripts/Shared/sizeEmAll/sizeEmAll.js"></script>
```

---

## Initialize Script
To initialize the script simply call SeA at the bottom of the page. For the script to run, you must:
<ol class="sm-text">
    <li>For the 'selector' parameter, specify what you'd like to be sized equally (make sure to preface it with .js-)</li>
    <li>For the 'distribute' parameter, specify where you want the leftover height to be distributed - 'top', 'both', 'bottom' </li>
    <li>For the 'addSpacingSide' parameter (optional), specify the amount of side margining you'd like to add to each element</li>
    <li>For the 'addSpacingVertical' parameter (optional), specify the amount of top and bottom margining you'd like added to each element</li>
    <li>For the 'addToBaseHeight' parameter (optional), creates a minimum height for items being sized</li>
    <li>For the 'initOnly' parameter (optional), specify whether or not you want the script to fire just once, or fire on screen change</li>
</ol>
You can find more information about the parameters below in the Example section of the page.

``` javascript
<script>
    SeA({
        selector: ".js-sea",
        distribute: "top"/"both"/"bottom",
        addSpacingSide: 0,
        addSpacingVertical: 0,
        addToBaseHeight: 0,
        //if set to true the script will only fire on screen load
        //and will not fire on screen change. By default initOnly is set to false
        initOnly: true/false,
    });
</script>
```

---

## Examples
### First Example
Below is an example of how you can use the SeA plug-in. Test it out by changing the width of your screen. Also, below are some guidelines on how to use SeA.
<ol class="sm-text">
    <li>The 'selector' parameter can only take one CSS class, should always be on its own element with no other classes but the one identified in the SeA script</li>
    <li>If you need to have more than one item sized equally, just call SeA twice</li>
    <li>If you set initOnly to true, that means you only want the script to run once and it will not be called on screen change. This parameter
    is especially useful for situations where a full page reload doesn't happen but the elements on the page change. For example, if there's a filter
    on the page then you'd want to call SeA again with 'initOnly' set to true.</li>
</ol>
This example will not resize on screen change because of 'initOnly' being set to true.

<div class="column column--center">
    <div class="content-block">
        <div class="content-block__one-third--no-break">
        <div class="add-all-border-block">
            <div class="js-sea-example">
                <p>
                    Bacon ipsum dolor amet turducken andouille beef ribs filet
                    mignon rump chicken. Bacon short loin andouille frankfurter pig pork
                    chop landjaeger alcatra prosciutto jerky brisket strip steak beef.
                </p>
            </div>
        </div>
        </div>
        <div class="content-block__one-third--no-break">
        <div class="add-all-border-block">
            <div class="js-sea-example">
                <p>
                    Bacon short loin andouille frankfurter pig pork chop landjaeger
                    alcatra prosciutto jerky brisket strip steak beef.
                </p>
            </div>
        </div>
        </div>
        <div class="content-block__one-third--no-break">
        <div class="add-all-border-block">
            <div class="js-sea-example">
                <p>
                    Andouille frankfurter pig pork chop landjaeger alcatra
                    prosciutto jerky brisket strip steak beef.
                </p>
            </div>
        </div>
        </div>
    </div>
</div>

``` markup
<div class="column column--center">
    <div class="content-block">
        <div class="content-block__one-third--no-break">
        <div class="add-all-border-block">
            <div class="js-sea-example">
                <p>
                    Bacon ipsum dolor amet turducken andouille beef ribs filet
                    mignon rump chicken. Bacon short loin andouille frankfurter pig pork
                    chop landjaeger alcatra prosciutto jerky brisket strip steak beef.
                </p>
            </div>
        </div>
        </div>
        <div class="content-block__one-third--no-break">
        <div class="add-all-border-block">
            <div class="js-sea-example">
                <p>
                    Bacon short loin andouille frankfurter pig pork chop landjaeger
                    alcatra prosciutto jerky brisket strip steak beef.
                </p>
            </div>
        </div>
        </div>
        <div class="content-block__one-third--no-break">
        <div class="add-all-border-block">
            <div class="js-sea-example">
                <p>
                    Andouille frankfurter pig pork chop landjaeger alcatra
                    prosciutto jerky brisket strip steak beef.
                </p>
            </div>
        </div>
        </div>
    </div>
</div>
```

``` javascript
<script>
    $(document).ready(function() {
        SeA({
            selector: ".js-sea-example",
            distribute: "top",
            addSpacingSide: 20,
            initOnly: true
        });
    });
</script>
```

### Second Example
Below is an example of when SeA initializes on screen load and on screen change. This example also has two elements on the page being sized so two separate calls are being made to SeA.

<div class="column column--center">
    <div class="content-block">
        <div class="content-block__one-third--no-break">
            <div class="add-all-border-block">
                <div class="add-bottom-border">
                <div class="js-sea-header">
                    <h4>Pig Pork</h4>
                </div>
                </div>
                <div class="js-sea-copy">
                <p>
                    Bacon ipsum dolor amet turducken andouille beef ribs filet
                    mignon rump chicken. Bacon short loin andouille frankfurter pig pork
                    chop landjaeger alcatra prosciutto jerky brisket strip steak beef.
                </p>
                </div>
            </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="add-all-border-block">
            <div class="add-bottom-border">
                <div class="js-sea-header">
                    <h4>Loin Andouille Briskit</h4>
                </div>
            </div>
                <div class="js-sea-copy">
                <p>
                    Bacon short loin andouille frankfurter pig pork chop landjaeger
                    alcatra prosciutto jerky brisket strip steak beef.
                </p>
                </div>
            </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="add-all-border-block">
            <div class="add-bottom-border">
                <div class="js-sea-header">
                    <h4>Short Loin Andouille Frankfurter Pig Pork</h4>
                </div>
            </div>
                <div class="js-sea-copy">
                <p>
                    Andouille frankfurter pig pork chop landjaeger alcatra
                    prosciutto.
                </p>
                </div>
            </div>
        </div>
    </div>
</div>

``` markup
<div class="column column--center">
    <div class="content-block">
        <div class="content-block__one-third--no-break">
            <div class="add-all-border-block">
                <div class="add-bottom-border">
                <div class="js-sea-header">
                    <h4>Pig Pork</h4>
                </div>
                </div>
                <div class="js-sea-copy">
                <p>
                    Bacon ipsum dolor amet turducken andouille beef ribs filet
                    mignon rump chicken. Bacon short loin andouille frankfurter pig pork
                    chop landjaeger alcatra prosciutto jerky brisket strip steak beef.
                </p>
                </div>
            </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="add-all-border-block">
            <div class="add-bottom-border">
                <div class="js-sea-header">
                    <h4>Loin Andouille Briskit</h4>
                </div>
            </div>
                <div class="js-sea-copy">
                <p>
                    Bacon short loin andouille frankfurter pig pork chop landjaeger
                    alcatra prosciutto jerky brisket strip steak beef.
                </p>
                </div>
            </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="add-all-border-block">
            <div class="add-bottom-border">
                <div class="js-sea-header">
                    <h4>Short Loin Andouille Frankfurter Pig Pork</h4>
                </div>
            </div>
                <div class="js-sea-copy">
                <p>
                    Andouille frankfurter pig pork chop landjaeger alcatra
                    prosciutto.
                </p>
                </div>
            </div>
        </div>
    </div>
</div>
```

``` javascript
<script>
    $(document).ready(function() {
        SeA({
            selector: ".js-sea-copy",
            distribute: "bottom",
            addSpacingSide: 20
        });
        SeA({
            selector: ".js-sea-header",
            distribute: "both",
            addSpacingVertical: 10,
            addSpacingSide: 20,
        });
    });
</script>
```

### Third Example
Below is an example of when SeA initializes on screen load and on screen change. This example also has two elements on the page being sized so two separate calls are being made to SeA.

<div class="column column--center">
    <div class="content-block">
        <div class="content-block__one-third--no-break">
            <div class="btn btn--block btn--primary js-sea-btn" style="padding-top: 25px; padding-bottom: 25px; transition: all 0.15s ease-in-out;"> Short Text </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="btn btn--block btn--primary js-sea-btn" style="padding-top: 17px; padding-bottom: 17px; transition: all 0.15s ease-in-out;"> This is medium text you know </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="btn btn--block btn--primary js-sea-btn" style="padding-top: 9px; padding-bottom: 9px; transition: all 0.15s ease-in-out;"> this is very large text you know it is longer text</div>
        </div>
    </div>
</div>

``` markup
<div class="column column--center">
    <div class="content-block">
        <div class="content-block__one-third--no-break">
            <div class="btn btn--block btn--primary js-sea-btn" style="padding-top: 25px; padding-bottom: 25px; transition: all 0.15s ease-in-out;"> Short Text </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="btn btn--block btn--primary js-sea-btn" style="padding-top: 17px; padding-bottom: 17px; transition: all 0.15s ease-in-out;"> This is medium text you know </div>
        </div>
        <div class="content-block__one-third--no-break">
            <div class="btn btn--block btn--primary js-sea-btn" style="padding-top: 9px; padding-bottom: 9px; transition: all 0.15s ease-in-out;"> this is very large text you know it is longer text</div>
        </div>
    </div>
</div>
```

``` javascript
<script>
    $(document).ready(function () {
        SeA({
            selector: ".js-sea-btn",
            distribute: "both",
            addToBaseHeight: 18
        });
    });
</script>
```

---

## Settings
Below are the parameters and their settings you can set for SeA.
<div class="column column--half-vertical-padding">
    <div class="add-bottom-border add-top-border">
        <h3>selector</h3>
        <p>
            SET TO CUSTOM SELECTOR
        </p>
        <p>
            Set this to the custom class you've created for SeA.
        </p>
    </div>
    <div class="add-bottom-border">
        <h3>distribute</h3>
        <p>
            TOP || BOTH || BOTTOM
        </p>
        <p>
            Set this to 'top' if you want the leftover height to added to the top of the selector, 'both' if you want both top and bottom, and 'bottom if you want the
            leftover spacing to be added to the bottom of the selector.
        </p>
    </div>
    <div class="add-bottom-border">
        <h3>addSpacingSide (optional)</h3>
        <p>
            INTEGER
        </p>
        <p>
            Set this parameter to the amount of side (margin-left and margin-right) margning you want added to the selector.
        </p>
    </div>
    <div class="add-bottom-border">
        <h3>addSpacingVertical (optional)</h3>
        <p>
            INTEGER
        </p>
        <p>
            Set this parameter to the amount of vertical (margin-top and margin-bottom) margning you want added to the selector.
        </p>
    </div>
    <div class="add-bottom-border">
        <h3>addToBaseHeight (optional)</h3>
        <p>
            INTEGER
        </p>
        <p>
            Set this parameter to the minimum height you want each item to be. This is to be used specifically where size-em-all is used on buttons.
        </p>
    </div>
    <div class="add-bottom-border">
        <h3>initOnly (optional)</h3>
        <p>
            TRUE || FALSE
        </p>
        <p>
            This parameter is automatically set to false so the script is always set to run on screen change unless this parameter
            is set to true, then the script will only run on page load.
        </p>
    </div>
</div>

---

## Size-em-all V2 
***Not ready for production!***
Located in  pattern-library > scripts > size-em-all  is a newer version of size-em-all. This script does work, but it contains a bug where it doesn't work properly on pages that have filters (e.g. the products and the accessories page in the store).
For SeAv2, the parameters are all the same the only difference is that the selector is no longer passed in like the rest of the parameters (see below).

``` javascript
<script>
  $('.js-size-em-all').SeA({
      distribute:"both"
  });
</script>
```

The main intention of redoing the size-em-all script was to incorporate best practices. This version of size-em-all follows basic standards outlined by jQuery for plugins and should also increase performance of the plugin. If someone is to pick up this plugin and fix the bug, I'd recommend you start by making sure that each time size-em-all runs that it grabs a fresh batch of elements (the array of objects as defined by the selector given to the plugin - e.g. '.js-sea-copy'). I also noticed that despite having two different instances of size-em-all running (e.g. one on js-sea-copy and one on js-sea-img) that the base elements were the same for both scripts running on the same page. For example, if you're running size-em-all on both js-sea-copy and js-sea-img, size-em-all would take the tallest object from js-sea-copy and js-sea-img and use that as the baseline for both instances of size-em-all running. Instead, size-em-all should be considering the tallest object separately from both classes. So there should be a tallest object for js-sea-copy and js-sea-img, and not just one between the two. 

<script src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
<script src="https://qa.subzero.com/Scripts/Shared/sizeEmAll/sizeEmAll.js"></script>
<script>
$(document).ready(function() {
    //Example 1
    SeA({
        selector: ".js-sea-example",
        distribute: "top",
        addSpacingSide: 20,
        initOnly: true
    });
    //Example 2
    SeA({
        selector: ".js-sea-copy",
        distribute: "bottom",
        addSpacingSide: 20
    });
    SeA({
        selector: ".js-sea-header",
        distribute: "both",
        addSpacingVertical: 10,
        addSpacingSide: 20,
    });
    //Example 3
    SeA({
        selector: ".js-sea-btn",
        distribute: "both",
        addToBaseHeight: 18
    });
});
</script>
