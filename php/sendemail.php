<?php 
	
require 'PHPMailer/PHPMailerAutoload.php';
$data = json_decode(file_get_contents("php://input"));

echo $data->data->name;
echo $data->data->email;
echo $data->data->subject;
echo $data->data->body;
//Create a new PHPMailer instance
$mail = new PHPMailer;
// Set PHPMailer to use the sendmail transport
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';       // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                // Enable SMTP authentication
$mail->Username = 'support@smoothflow.io';  // SMTP username
$mail->Password = 'Smoothflow@123';    // SMTP password
$mail->SMTPSecure = 'tls';   // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;    // TCP port to connect to

//Set who the message is to be sent from
$mail->setFrom($data->data->email, $data->data->name);
//Set an alternative reply-to address
$mail->addReplyTo($data->data->email, $data->data->name);
//Set who the message is to be sent to
$mail->addAddress('shehan@duosoftware.com', 'Shehan');
$mail->addAddress('lakmini@duosoftware.com', 'Shehan');
$mail->addAddress('support@smoothflow.io', 'smoothflow.io');
//Set the subject line
$mail->Subject = $data->data->subject;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
//Replace the plain text body with one created manually
$mail->Body = $data->data->body;
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
} 

?> 