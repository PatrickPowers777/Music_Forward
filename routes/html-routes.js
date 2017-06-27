
module.exports = function(app){
app.get("/", function(req, res){
	res.render('sign-in');
});

app.get("/home", function(req, res){
	res.render('home');
});

}