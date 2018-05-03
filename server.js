let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');
let express = require('express');

let t1="test";

const app = express();
app.use(express.static(path.join(__dirname,'public')));

extensions = {
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg"
};


app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/test',function(req,res){
	res.send(extensions);
});

app.get('*',function(req,res){
	res.sendfile(__dirname + '/public/404.html');
});

app.listen(8080);
//http.createServer(requestHandler).listen(8080);