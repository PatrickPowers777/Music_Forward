var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;

var app = express();

var router = express.Router();

require('./config/routes')(router);

app.use(express.static('./public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(router);

mongoose.promise = Promise;

var db = process.env.MONGODB_URI || "mongodb://localhost/music-forward";

mongoose.connect(db, function(error) {
 
  if (error) {
    console.log(error);
  }

  else {
    console.log("mongoose connection is successful");
  }
});

app.listen(port, function() {
	console.log("app running on " + port)
});