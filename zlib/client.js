var http = require('http')
var zlib = require('zlib')

var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/',
        method: 'GET',
        headers: {
        }
    };

var body = [];

var request = http.request(options, function (response) {
    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);

        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip(body, function (err, data) {
                console.log(data.toString());
            });
        } else {
			console.log(typeof body);
            console.log(body.toString());
        }
    });
})
request.write("hello world");
request.end();