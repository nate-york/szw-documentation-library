---
title: Grids
category: front-end-knowledgebase
nav_sort: 2
---

## Overview
The Sub-Zero and Wolf website uses [Harry Robert's](https://csswizardry.com) [CSSWizardry Grids](https://github.com/csswizardry/csswizardry-grids) for responsive, mobile-first, nestable grids.

A grid will fill 100% of its parent container element, and all grid items will fill their respective space within that. 

## Basic Grid
<div class="content-block demo-grid">
    <div class="content-block__full-column">
        <div class="column">
            1
        </div>
    </div>
    <!-- 1/2 Column -->
    <div class="content-block__half-column">
        <div class="column">1/2</div>
    </div>
    <div class="content-block__half-column">
        <div class="column">1/2</div>
    </div>
    <!-- 1/3 Column -->
    <div class="content-block__third-column">
        <div class="column">
            1/3
        </div>
    </div>
    <div class="content-block__third-column">
        <div class="column">
            1/3
        </div>
    </div>
    <div class="content-block__third-column">
        <div class="column">
            1/3
        </div>
    </div>
    <!-- 1/4 Column -->
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <!-- 1/5 Column -->
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <!--1/6 Column -->
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <!-- 1/12 Column -->
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
</div>

``` markup
<div class="content-block">
    <div class="content-block__full-column">
        <div class="column">
            1
        </div>
    </div>
    <!-- 1/2 Column -->
    <div class="content-block__half-column">
        <div class="column">1/2</div>
    </div>
    <div class="content-block__half-column">
        <div class="column">1/2</div>
    </div>
    <!-- 1/3 Column -->
    <div class="content-block__third-column">
        <div class="column">
            1/3
        </div>
    </div>
    <div class="content-block__third-column">
        <div class="column">
            1/3
        </div>
    </div>
    <div class="content-block__third-column">
        <div class="column">
            1/3
        </div>
    </div>
    <!-- 1/4 Column -->
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <div class="content-block__quarter-column">
        <div class="column">
            1/4
        </div>
    </div>
    <!-- 1/5 Column -->
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <div class="content-block__fifth-column">
        <div class="column">
            1/5
        </div>
    </div>
    <!--1/6 Column -->
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <div class="content-block__sixth-column">
        <div class="column">
            1/6
        </div>
    </div>
    <!-- 1/12 Column -->
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
    <div class="content-block__twelfth-column">
        <div class="column">
            1/12
        </div>
    </div>
</div>
```

## Nested Grids
Grids are infinitely nestable, simply start a new grid within a new grid item.

<div class="content-block demo-grid">
    <div class="content-block__half-column">
        <div class="content-block">
            <div class="content-block__third-column">
                <div class="column">1/3</div>
            </div>
            <div class="content-block__third-column">
                <div class="column">1/3</div>
            </div>
            <div class="content-block__third-column">
                <div class="column">1/3</div>
            </div>
            <div class="content-block__half-column">
                <div class="column">1/2</div>
            </div>
            <div class="content-block__half-column">
                <div class="column">1/2</div>
            </div>
        </div>
    </div>
    <div class="content-block__half-column">
        <div class="column">1/2</div>
    </div>
</div>

``` markup
<div class="content-block">
    <div class="content-block__half-column">
        <div class="content-block">
            <div class="content-block__third-column">
                <div class="column">1/3</div>
            </div>
            <div class="content-block__third-column">
                <div class="column">1/3</div>
            </div>
            <div class="content-block__third-column">
                <div class="column">1/3</div>
            </div>
            <div class="content-block__half-column">
                <div class="column">1/2</div>
            </div>
            <div class="content-block__half-column">
                <div class="column">1/2</div>
            </div>
        </div>
    </div>
    <div class="content-block__half-column">
        <div class="column">1/2</div>
    </div>
</div>
```