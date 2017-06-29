var Member = require("../models/db.js");

module.exports = {

	save: function(data, cb) {

		var newMember = {
			userName: data.userName,
			email: data.email,
			password: data.password,
			date: data.userCreated || new Date()
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