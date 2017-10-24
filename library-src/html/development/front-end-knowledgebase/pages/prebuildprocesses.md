---
title: PreBuildProcesses
category: front-end-knowledgebase
nav_sort: 7
---

This console application has been added to subversion and is now in the project folder. The executable that is produced from building the console app should live in the root folder of the project. 

This console app is ran every build and will automatically compile the scss in the project. It also checks to see if npm is installed by trying to find the node_modules folder, if the node_modules folder doesn't exist then it runs a few extra commands to setup the pattern library so that scss can be compiled on build. A nice addition to this would be to check if all the node packages are installed and if not, to then run npm install so that back end devs don't have to worry about continually updating their node packages. Because it's important to note that if you have a gulp task that will run on build then the scss compilation process will break if someone doesn't have the right packages installed.