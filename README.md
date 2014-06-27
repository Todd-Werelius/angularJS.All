angularJS.All
=============
A concated and uglified version of AngularJS that has all of the sub libraries added. The resulting file will be larger than the google version since they use closure with a lot of custom options to crunch it down as much as possible.

The gzip'd file is not that much bigger at all ( when you consider adding in the other lib's) 

This repositry auto updates at 06:30 PST

The minified versions of this file is also available on jsDelivr.com a free cdn repository and also auto updates when a new version becomes avaialable.  

###Versions###
latest will be the latest beta  as of today  : 1.3.0-beta.13
legacy will be the latest stable as of today : 1.2.18

Any other versions that were generated will still be available on both this site through version tags, and jsDelivr through the same 

###Includes### 
angular.js
angular-animate.js
angular-cookies.js
angular-route.js
angular-sanitize.js


###Concated and Uglified###   
angular-all.js.min

###Map###
angular-all.js.min.map 

Is a map file with bundled source code that is useful if you need debugging. The source=[]... links will not be useful to you unless you create a similar directory structure on your own projects, or fork this project and create your own.

You won't need though since as was mentioned the source code is emebed directly into the map file

###Building###
This project is built using gulp, which requires node.  If you already have node simply run the following commands from the directory that this project resides in

###Make sure all dependencies are present###
npm install   

###Get the latest angular files ( if you think these are out of date ) 
node updateme

###Recreate angular-all.min.js and angular-all.min.js.map
gulp build

angular-all.min.js and angular-all.min.js.map will then be placed in the same directory that 
