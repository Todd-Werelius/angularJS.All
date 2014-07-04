var http = require('http');

var headers = {
  'Accept'           : '*/*',
  'Accept-Encoding'  : 'gzip,deflate,sdch',
  'Accept-Language'  : 'en-US,en;q=0.8,ja;q=0.6',
  'Cache-Control'    : 'no-cache',
  'Pragma'           : 'no-cache',
  'User-Agent'       : 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36'
};

var options = {
  host: 'cdn.jsdelivr.net'
  //host: 'ajax.googleapis.com'
  , port: 80
  //, path: '/angular.all/1.2.0-beta.13/angular-all.min.js'
  , path: '/angularjs/1.2.17/angular.min.js'
  //, path: '/ajax/libs/angularjs/1.2.17/angular.min.js'
  , method: 'GET'
  , headers : headers
};


var connected = 0;
var last  = 0;
var first = 0;
var total;
var size=0;
var chunks=0;
var headers;
var start = Date.now();

var req = http.request(options, function(res) {
  var addr = res.req.remoteAddress || res.req.socket.remoteAddress || 'unknown';

  connected = Date.now();
  console.log('URL           : ' + options.host+options.path);
  console.log('STATUS        : ' + res.statusCode);
  console.log('SERVER-IP     : ' + addr);
  console.log('TO-START      : ' + (connected-start) + 'ms');
  headers = JSON.stringify(res.headers );
  res.setEncoding('utf8');




  res.on('data', function (chunk) {
    if (!first) {
      first = Date.now();
      console.log('TO-FIRST-BYTE : ' + (first-connected) + 'ms');
    }
    size += chunk.length;
    chunks += 1;
  });
  res.on('end',function(){
    last = Date.now();
    console.log('TO-ALL-BYTES  : ' + (last-first) + 'ms');
    console.log('TO-END        : ' + (last-start) + 'ms');
    console.log('SIZE          : ' + size);
    console.log('CHUNKS        : ' + chunks);
    console.log('HEADERS       : ' + headers.replace(',','\n'));
  });

} ).end();


