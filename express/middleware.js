var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
}


app.get('/', function (req, res, next) {
	console.log("first processed!");
	next();
});

app.use(myLogger);

app.get('/', function (req, res, next) {
	console.log("second processed!");
	next();
});

app.listen(4444);