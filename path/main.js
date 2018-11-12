// var path = require("path");

// var echo = path.resolve('/foo/bar', './tmp/file/');

// console.log(echo);

// console.log(path.dirname(echo));

var dns = require('dns');

dns.lookup('www.github.com', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
   if (err) {
      console.log(err.stack);
   }

   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
});  
});