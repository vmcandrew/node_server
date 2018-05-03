let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');
let express = require('express');

const app = express();
let router = express.Router();

router.use(function (req,res,next) {
	console.log("/" + req.method);
});

router.get("/",function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/about",function(req,res){
  res.sendFile(__dirname + "/public/about.html");
});

app.use("/",router);

app.use("*",function(req,res){
	res.sendFile(__dirname + "/public/404.html");
});
app.listen(8080,function(){
	console.log("Live at port 8080");
});
//http.createServer(requestHandler).listen(8080);