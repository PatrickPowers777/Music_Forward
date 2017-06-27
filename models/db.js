//Dependency 
var mongoose = require('mongoose');

//Schema class

var Schema = mongoose.Schema;

//setting up database

var database = new Schema ({
	email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  	password: {
  		type: String,
  		trim: true,
  		required: 'Please enter a password',
  		validate: [
  			function(input) {
  				return input.length >= 8;
  			},
  			"Password must contain at least 8 characters"
  		]
  	},

  	userCreated: {
  		type: Date,
  		default: Date.now
  	}

});

var Member = mongoose.model("member", database);

module.exports = Member;