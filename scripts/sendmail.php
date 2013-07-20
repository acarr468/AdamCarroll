<?php
	$name = trim($_REQUEST['name']);
	$emailFrom = trim($_REQUEST['email']);
	$message = $_REQUEST['message'];

	// prepare email body text
	$Body = "You have a message from: ";
	$Body .= $name;
	$Body .= "\n";
	$Body .= "\n";
	$Body .= $message;

	// send prepared message

	$sent = mail('acarr468@gmail.com', $subject, $Body);

	//callback for jQuery AJAX

	if ($sent){
	  echo 'sent';
	}
	else{}

	print_r($_REQUEST); die();
?>