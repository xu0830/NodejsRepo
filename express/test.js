var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next();
}

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/download', function(req, res){
	res.download('./爱相随定期寿险条款.pdf', function(err){
	  if (err) {
		  console.log(err);
		// Handle error, but keep in mind the response may be partially-sent
		// so check res.headersSent
	  } else {
		// decrement a download credit, etc.
	  }
	});
});

app.listen(4444);