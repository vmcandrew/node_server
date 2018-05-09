let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');
let express = require('express'); //this is express 4.0

let t1="test"; //test data recieved via GET request

const app = express();
app.use(express.static(path.join(__dirname,'public')));
//app.use(require('stylus').middleware(__dirname + '/public'));
//can probably be removed

extensions = [{
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg"
}];
//extensions for encoding

app.get('/', function(req, res){
	res.sendFile('index.html');
});
//serves home page

app.get('/about', function(req, res){
	res.sendFile(__dirname + '/public/about.html');
});

//loads about page

app.get('/test',function(req,res){
	res.send(res.json(extensions));
});

//sends json data when test sub dir is visited or called via GET request

app.use(function(req,res,next){

	res.status(404).sendFile(__dirname+'/public/404.html');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).sendFile(__dirname+'/public/500.html');
})

//404 if page doesnt exist

app.listen(8080);
//port 8080