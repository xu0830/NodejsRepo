var child_process = require('child_process');
var util = require('util');

function copy(source, target, callback) {
	console.log(util.format('cp -r %s/* %s', source, target));
    child_process.exec(
        util.format('cp -r %s/* %s', source, target), callback);
}

copy('a', 'b', function (err) {
	console.log("copy a to b");
});