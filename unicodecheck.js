/**
 * A simple sanity check to make sure the main files don't have any unicode character issues
 */

var fs       = require('fs');
var checks   = [
  "E:\\Projects\\.SUPPORT\\jsdelivr\\files\\angular.all\\1.2.18\\angular-all.min.js",
  "E:\\Projects\\.SUPPORT\\jsdelivr\\files\\angular.all\\1.2.19\\angular-all.min.js",
  "E:\\Projects\\.SUPPORT\\jsdelivr\\files\\angular.all\\1.3.0-beta.13\\angular-all.min.js",
  "E:\\Projects\\.SUPPORT\\jsdelivr\\files\\angular.all\\1.3.0-beta.14\\angular-all.min.js"
];

checks.forEach(function(item){
   var buffer = fs.readFileSync(item).toString();

   console.log('\nChecking '+buffer.length+' chars in: '+item);
   if (isDoubleByte(buffer)) {
     console.log("FAILED!");
   } else
   {
     console.log("CLEAN");
   }
});

function isDoubleByte(str) {
  var prefix, infix, suffix, code, found=0;

  for (var i = 0, n = str.length; i < n; i++) {
    code = str.charCodeAt( i );
    if ( code > 128) {
      prefix = str.substr(i-40,40);
      infix  = str.substr(i,1);
      suffix = str.substr(i+1,40);

      console.log("  Char at pos :"+i+" = "+str.charAt(i)+" code value="+code+" and is > char code 128");
      console.log("  Offending segment [ "+prefix+infix+suffix+" ]");

      found++;
    }
  }

  return found;
}


