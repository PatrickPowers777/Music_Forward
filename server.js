var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
var exphbs = require('express-handlebars');

mongoose.promise = Promise;

var members = require('./models/db.js');


app.use(express.static('./public'));
app.use(express.static('./public/css'));
app.use(express.static('./public/javascript'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./routes/html-routes.js')(app);

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