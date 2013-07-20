$(document).ready(function () {

	$('.submit-button').on('click', function(e) {
		e.preventDefault()
		var name = $('input.name').val();
		var email = $('input.email').val();
		var message = $('textarea.message').val();
		var data = "&name=" + name + "&email=" + email + "&message=" + message;

		$.ajax({
	     type: "POST",
	     url: "scripts/sendmail.php",
	     data: data,
	     success: function(phpReturnResult){
	        alert('Success: ' + phpReturnResult);
	        jQuery(".email-us").html("<div id='email-sent'><p>Thank you for the message.</p><p>We will reply as soon as possible. PHP Script's return result: " + phpReturnResult + "</p></div>");     
	     },
	     error: function(errormessage) {
          alert('Sending message failed, sorry about that!');
          console.log(errormessage);
	     }
		});
	});
});