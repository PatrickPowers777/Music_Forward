var express = require("express");
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');



app.use(express.static('./public'));

app.get("/", function(req, res){
	res.sendFile(path.resolve(__dirname, './public/sign-in.html'));
});

app.get("/home", function(req, res){
	res.sendFile(path.resolve(__dirname, './public/home.html'));
});

var db = process.env.MONGODB_URI || "mongodb://localhost/music-forward";

mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

app.listen(port, function() {
	console.log("app running on " + port)
});