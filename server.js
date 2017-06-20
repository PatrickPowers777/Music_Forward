var express = require("express");
var port = 3000;
var app = express();
var path = require('path');

app.use(express.static('./public'));

app.get("/", function(req, res){
	res.sendFile(path.resolve(__dirname, './public/sign-in.html'));
});

app.get("/home", function(req, res){
	res.sendFile(path.resolve(__dirname, './public/home.html'));
});

app.listen(port, function() {
	console.log("app running on " + port)
});