var path = require('path');

module.exports = function(app){
app.get("/", function(req, res){
	res.sendFile(path.join('./public/sign-in.html'));
});

app.get("/home", function(req, res){
	res.sendFile(path.join('../public/index.html'));
});

}