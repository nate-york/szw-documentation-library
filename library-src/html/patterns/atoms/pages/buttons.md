---
title: Buttons
category: atoms
nav_sort: 1
---

## Default Button Markup
As both ```<a>``` and ```<button>``` elements have their individual use cases, we style both to look identical, using the same class names for both. Example markup below:

<div>
    <button type="button" class="btn">Default</button>
</div>

``` markup
<!-- Anchor Link -->
<a class="btn" href="">Link Element</a>

<!-- Button -->
<button type="button" class="btn">Button Element</button>
```
Buttons are flexible and can support multiple lines of text, as seen below

<div>
    <button type="button" class="btn">
        Buttons are able to support multiple lines of text, allowing the call to action to be any length.
    </button>
</div>

``` markup
<button type="button" class="btn">
    Buttons are able to support multiple lines of text, allowing the call to action to be any length.
</button>
```

### A note on Color Branding
Buttons are styled to reflect the current page's brand across the site. This is automatic and requires no additional markup or styling.

---

## Modified Button Types
We can extend the basic style types using modifier classes in our markup, as seen below.

<div>
    <button type="button" class="btn btn--primary">Primary</button>
    <button type="button" class="btn btn--primary-dark">Primary Dark</a>
    <button type="button" class="btn btn--clean">Clean Button</button>
    <button type="button" class="btn btn--primary btn--advance">Advance Button</button>
    <p>
        <button class="btn btn--has-shadow">Button with shadow</button>
    </p>
</div>

``` markup
<!-- Primary buttons denote primary actions on a page or within a component or frame  -->
<button type="button" class="btn btn--primary">Primary</button>

<!-- Dark Primary button -->
<button type="button" class="btn btn--primary-dark">Primary Dark</a>

<!-- Clean (remove the default interior bottom line within buttons) -->
<button type="button" class="btn btn--yellow btn--clean">Clean Button</button>

<!-- Advance button -->
<button type="button" class="btn btn--primary btn--advance">Advance Button</button>

<!-- Button with shadow -->
<button type="button" class="btn btn--has-shadow">Button with shadow</button>
```

## Button colors
In some situations, we will use custom colored buttons

<div>
    <button type="button" class="btn btn--yellow">Yellow</button>
    <button type="button" class="btn btn--auburn">Auburn</button>
    <button type="button" class="btn btn--white">White</button>
</div>

``` markup

<button type="button" class="btn btn--yellow">Yellow</button>
<button type="button" class="btn btn--auburn">Auburn</button>
<button type="button" class="btn btn--white">White</button>
```
