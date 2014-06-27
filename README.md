angularJS.All
=============
A concated and uglified version of AngularJS that has all of the sub libraries added, only slightly larger than the google ultra optimzed closure minified versions when uncompressed and almost identical when gzip'd. 

The minified versions of these files are also available on jsDelivr.com a free cdn repository 
###Versions###
```
Version                   Google          angular-all.min.js 
Latest 1.3.0-beta.13      136K  68K.gz              
Stable 1.2.18             130K  52K.gz    140K  51K.gz
```
Any other versions that were generated will still be available on both this site through version tags, and on jsDelivr through the same. 
###Includes###
``` 
Common
---------------------
angular.js
angular-animate.js
angular-cookies.js
angular-loader.js
angular-resources.js
angular-route.js
angular-sanitize.js
angular-touch.js

1.3.x
---------------------
angular-messags.js

```
###Outputs###
```
Name                  Gzip'd  Contents
-----------------------------------------------------------------
angular-all.js         +.gz   Concatted unminfied output 
angular-all.js.min     +.gz   Concatted miniifed output   
angular-all.js.min.map +.gz   Sourcemap with emebded source code 
```
###Map###
```
angular-all.js.min.map
```
Is a map file with bundled source code that is useful if you need debugging. The source=[]... links will not be useful to you unless you create a similar directory structure on your own projects, or fork this project and create your own.

You won't need though since as was mentioned the source code is emebed directly into the map file
###Building###
This project is built using gulp, which requires node.  Install node first, if you already have node simply run the following commands from the directory that this project resides in 
####Make sure all dependencies are present####
```
npm install
```
####Recreate angular-all.min.js etc####
```
gulp 
```

