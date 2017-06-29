

$(function() {

    $('#login-form-link').click(function(e) {
    	$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

$(document).on('submit', '#register-form', memberAdd);

function memberAdd(event) {
	
	event.preventDefault();
	console.log("Something stupid")
	var userName = $("#username2").val().trim();
	var email = $("#email2").val().trim();
	var password = $("#password2").val().trim();

	// console.log(userName, email, password);

	if(userName && email && password) {

		var memberObj = {
			userName: userName,
			email: email,
			password: password
		}


		$.post("/api/members", memberObj)
			.then(function(data) {
				console.log(data);
			})
	} else {
		alert("Please enter a valid username, email, and password");
	}

	return false;
}

