---
title: Icons
category: front-end-knowledgebase
nav_sort: 3
---

## Dependencies
Generating new sprite images of the icons requires you to have gulp, node, and the node packages installed.

---

## Background Information
For the time being, the gulp task that generates the sprite images is commented out becuase otherwise, it would run every build.

It is also commented out because other devs do not have the most updated node packages in their project folder, so that means every build that the scss compiles would produce errors unless we had other dev install the latest packages.

Generating the sprite images we use requires 4 node packages: gulp-util, gulp-svg-sprite, gulp-svg2png, and gulp-size. These four packages enable us to create an svg sprite and a png sprite just from svg files.

You'll notice all icons are separated out by their file type. This is important because the gulp task that creates the sprites will generate errors if the svg folder has any other file type than svgs.

The file '_icon-mixins.scss' came with the documentation for the node package, gul-svg-sprite.

These two files, _icon-mixins.scss and sprite-emplate.scss, are what produce the _icon-variables.scss partial. 

---

## Getting Started
To generate new sprites, make sure that the sprite-template.scss file is uncommented and that go into the gulp file and uncomment out the section labeled 'Sprite Mapping'.

The sprite-template.scss file is commented out in case someone needs to compile the scss the old way with compass. If sprite-template.scss is not commented out you will receive errors in the console from compass while compiling the scss.

Once sprite-template.scss and the gulp task are uncommented, open up the console and cd into the pattern library.

Then type 'gulp sprites'.

``` javascript
 gulp sprites
```

This gulp command will generate a new png and svg sprite as well as update the _icon-variables.scss file.

---

## Icon Naming Conventions
Icons are separated into three different categories: light, neutral, and dark. Icons in the illustrator files should not have the 'icon_' prefix in their name as that can be added when the icons are exported. 

Also make sure that if you add more icons to the illustrator files, that you alphabetize any new entries. 

Another important note is that illustrator only supports 100 artboards, and a new illustrator file will have to be created after that.

Below are the naming Conventions

``` scss
//.icon_(nameOfIcon)--(light/neutral/dark)-(size)-(language)

.icon_banner-new-product--neutral-lg-fr {}
```

---

## Considerations
Note that because the icons are in a sprite, animations that are done with the sprites, may not behave the same way as non-sprite icons. 

If you would like to increase the size of an icon, you won't be able to do it through the css, you'll have to create a new icon with the modifiers - sm or lg (e.g. icon_star--neutral-sm). 