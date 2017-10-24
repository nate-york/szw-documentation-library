---
title: Front End Setup
category: environment-setup
nav_sort: 3
---
## Overview
With such a complex system in place between Sitecore and how front end works, we use Gulp to automate most of the Front End development workflow. Set up is easy and will only require a bit of work during the initial setup.

---

## Current Feature List
* Compiles Sass into CSS
* Autoprefixes CSS for browser compatibility
* Minifies CSS
* Adds CSS sourcemap support to Sass compiled CSS
* Splits CSS into multiple stylesheets, including less than 4096 selectors, to combat old IE limits
* Copies files and live reloads the browser when CSS, Javascript, and .cshtml files are modified
* Spins up local server so you can live reload and view local site from any device on the same network
* Optimizes and copies all images
* Create icon sprite sheets

---

## Assumptions
This guide assumes that you already have the SVN repo pulled down and the Sitecore site set up on your machine. This will not work unless those two conditions have been met.

---

## Requirements
This project has several dependencies beyond Gulp, so let's make sure we have those installed first.

### Ruby
Ruby is required in order to install Compass and Sass. If you're on Mac, Ruby is already installed. To install Ruby on Windows, get and install the [Ruby Installer](http://rubyinstaller.org/) Ruby Installer.

When you run the installer, you'll need to make sure you can execute the gem executable is accessable from the command line (CLI) and .rb files are associated with Ruby, so choose the options below:

![Ruby Setup Screenshot](/library/assets/images/screenshots/fe-ruby-path-setting.png)

### Sass
To install Sass, open up your terminal or command prompt and enter

```gem install sass```

This will install Sass and any dependencies for you. If you get an error message then it's likely you will need to use the sudo command to install the Sass gem. It would look like:

```sudo gem install sass```

Double-check. You should now have Sass installed, but it never hurts to double-check. In your terminal application you can type:

```sass -v```

It should return at least Sass 3.4.21 (Selective Steve). Congratulations! You've successfully installed Sass.

### Compass
Install the Compass stylesheet framework by entering the following command in the CLI:

```gem install compass```

### Node and NPM
Gulp relies on Node.js and npm (node package manager) to load and maintain modules being used. To install Node, [download the installer](https://nodejs.org/en/) and install. Npm is included with Node so there is no extra download or install for that.

### Gulp (globally)
Install Gulp globally by entering the following in the CLI.

```npm install --global gulp-cli```

---

## Install Gulp and dependencies
Now that all the global dependencies are installed, let's gett into the nitty gritty of getting all this wonderful task automation working in our development environment.

To install Gulp and all of its dependencies, from your CLI, navigate to the pattern library root (eg. ```C:\dev\dev-trunk\app\SubZero.Public.Web\pattern-library```) and run the following command:

```npm install```

The installer will run for a while. You will see warning messages and errors, these can be ignored as they are unrelated to our setup. As long as nothing completely fails, you're fine. This will have created a folder name node_modules inside the pattern library root folder.

If you're curious as to what the Gulp file is actually doing, you can view a [gist](https://gist.github.com/sirfice/45d670cbe9e423a6b1c4) of it.

---

## Ignore node_modules in SVN
When we run the ```npm-install``` command, this creates a ```node_modules``` folder at the root of ```/pattern-library``` that we don't want to commit into Subversion.

To have SVN ignore the ```node_modules``` directory, run a commit, and on the changed files screen, right click ```node_modules (\pattern-library\node_modules)```, right click, ```add to ignore list```, and then choose the directory (recursively). The files will disapear from your commit and not show up again in the future.

---

## Running Gulp
To run Gulp, open up your terminal or command prompt from within the ```/pattern-library``` root folder, and run the command:

```gulp```

Gulp will now start, and does so by spinning up a local server and opening a localhost page in your browser. This will be the url you want to work in to see live reloading of changes. Once the server is running, Gulp will watch for changes to .cshtml files, .js files, .scss and .css files, and manage all compiling and moving of those files (you'll see messages confirming this in your terminal or command prompt). Once those files have met their final destinations, you will see your browser refresh.

It's really that simple. Keep Gulp running when you're developing, and all you should have to do is save files and see your work, the way it should be.

---

## Using a Device
Once Gulp has started and the local server is spun, it will show you access urls in your command line, usually at ```localhost:3000```. You will be given another url too, which is an externally accessible url (eg. ```192.168.1.80:3000``` or ```10.0.0.43:3000```). You will be able to access this url from any device that is on the same network as your computer (phones, tablets, other people's computers).

If you find that the external url is not working, it probably means you the external url provided doesn't match your internal ip (ie. Browser Sync gives you 10.0.0.43 but your internal IP is actually ```192.168.1.80```). Simply change the URL to your local IP with the port of 3000 (```192.168.1.80:3000```) and you should be set.