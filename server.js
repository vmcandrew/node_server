let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

extensions = {
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg"
};

function getFile(filePath,res,page404,mimeType){
	fs.exists(filePath,function(exists){
		if(exists){
			fs.readFile(filePath,function(err,contents){
				if(!err){
					res.writeHead(200,{
						"Content-type" : mimeType,
						"Content-Length" : contents.length
					});
					res.end(contents);
				} else {
					console.dir(err);
				};
			});
		} else {

			fs.readFile(page404,function(err,contents){
				if(!err){
					res.writeHead(404, {'Content-Type': 'text/html'});
					res.end(contents);
				} else {
					console.dir(err);
				};
			});
		};
	});
};


function requestHandler(req, res) {
	 let fileName = path.basename(req.url) || 'index.html'
	 let localFolder = __dirname + '/public/';
	 let page404 = localFolder + '404.html';
	 let ext = path.extname(fileName)

	 if(!extensions[ext]){
	 	res.writeHead(404, {'Content-Type': 'text/html'});
	 			res.end("&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;The requested file type is not supported&lt;/body&gt;&lt;/html&gt;");
	};

	 getFile((localFolder + fileName),res,page404,extensions[ext]);
};


http.createServer(requestHandler).listen(8080);