let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);