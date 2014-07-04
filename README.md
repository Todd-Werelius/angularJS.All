angularJS.All
=============
A concated and uglified version of AngularJS that has all of the angular add on modules included, only slightly larger than the google ultra optimzed closure minified versions when uncompressed, and slightly smaller when gzip'd, sadly jsDelivrs content providers will not accept gzip'd files and insist on doint it themselves at a much lower compression level. 

The minified versions of these files are also available on jsDelivr.com a free cdn repository 
###Versions and Sizes###
```
Version Latest     Google (summed)    angular-all.min.js     jsDelivr ( not optimally gzip'd )   
1.3.0-beta.14      136K  .gz = 55K    143K  .gz = 51K        .gz = 60K 
1.3.0-beta.13      136K  .gz = 55K    143K  .gz = 50K        .gz = 60K       

Version Stable     Google (summed)    angular-all.min.js     jsDelivr ( not optimally gzip'd )
1.2.19             130K  .gz = 52K    137K  .gz = 50K        .gz = 60K 
1.2.18             130K  .gz = 52K    137K  .gz = 50K        .gz = 60K 
```
Any other versions that are generated will be maintained and available on both this repository through version tags, and on jsDelivr through the same. 
###Modules Included###
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
angular-all.js.min     +.gz    Concatted minified output   
angular-all.js.min.map +.gz    Sourcemap with google repository linked source code 
```
###Why The Map File?###
```
angular-all.js.min.map +.gz
```
Map files are download able by browsers if the map file is availble and in the same place as the .js file that being server.  You simply place it in the same location on the server and the debugger figures out the rest. Map files are used by debuggers to replace minified source on the fly making debugging possible.  This map file links to googles cdn souce code to keep it under 25K ( else it would be closer to 1mb! ) 


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

