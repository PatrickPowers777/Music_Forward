//Dependency 
var mongoose = require('mongoose');

//Schema class

var Schema = mongoose.Schema;

//setting up database

var database = new Schema ({
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: 'Please create a user name',
    validate: [
    function(input) {
      return input.length >=8;
    },
    "User name should be at least 8 characters"
    ]
  },

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

var Member = mongoose.model("members", database);

module.exports = Member;