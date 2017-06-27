var Member = require("../models/db.js");

module.exports = {

	save: function(data, cb) {

		var newMember = {
			email: data.email,
			password: data.password,
			date: data.userCreated
		};

		Member.create(newMember, function(err, doc){
			if (err) {
				console.log(err);
			} else {
				console.log(doc);
				cb(doc);
			}
		})
	}

}