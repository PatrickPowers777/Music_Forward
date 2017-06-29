var memberController = require('../controllers/members.js');

module.exports = function(router) {
	router.get("/", function(req, res){
	res.render("sign-in");
});

	router.get("/home", function(req, res){
	res.render("home");
});

	router.post('/api/members', function(req, res) {
		console.log(req.body);
		memberController.save(req.body, function(data){
			res.redirect('home');
		})
	// res.send("Sorry")

	});

}