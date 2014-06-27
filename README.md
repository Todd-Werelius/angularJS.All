angularJS.All
=============
A concated and uglified version of AngularJS that has all of the angular add on modules included, only slightly larger than the google ultra optimzed closure minified versions when uncompressed and slightly smaller when gzip'd. 

The minified versions of these files are also available on jsDelivr.com a free cdn repository 
###Versions and Sizes###
```
Version                   Google             angular-all.min.js 
Latest 1.3.0-beta.13      136K  .gz = 55K    143K  .gz = 53K            
Stable 1.2.18             130K  .gz = 52K    140K  .gz = 51K
```
Any other versions that were generated will be maintained and available on both this repository through version tags, and on jsDelivr through the same. 
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
Name                   Gzip'd  Contents
-----------------------------------------------------------------
angular-all.js         +.gz    Concatted unminfied output 
angular-all.js.min     +.gz    Concatted miniifed output   
angular-all.js.min.map +.gz    Sourcemap with emebded source code 
```
###Map###
```
angular-all.js.min.map
```
Is a map file with bundled source code that is useful if you need debugging. The source=[]... links will not be useful to you unless you create a similar directory structure on your own projects, clone this project and create your own, or manually modify the source entries ( easiest )

You won't need to though since as was mentioned the source code is emebed directly into the map file
###Building###
This project is built using gulp, which requires node.  Install node first if you don't have it, then simply run the following commands from the directory that this project resides in 
####Make sure all dependencies are present####
```
npm install
```
####Recreate angular-all.min.js etc from source####
```
gulp 
```

