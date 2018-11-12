console.log('a starting');
exports.done = false;
const b = require('./b.js');
setTimeout(function(){
	console.log("set timeout");
	exports.done = true;
}, 0);
console.log('in a, b.done = %j', b.done);

console.log('a done');