<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';


$mail = new PHPMailer(true);
try {
 //Server settings
 $mail->CharSet = 'UTF-8';
 $mail->SMTPDebug = 0; // debug on - off
 $mail->isSMTP(); 
 $mail->Host = 'smtp.xxx.com'; // SMTP server
 $mail->SMTPAuth = true; // SMTP Doğrulama
 $mail->Username = // Mail username
 $mail->Password = // Mail pass
 $mail->SMTPSecure = 'tls'; // Şifreleme
 $mail->Port = 587; // SMTP Port
$mail->SMTPOptions = array(
 'ssl' => array(
 'verify_peer' => false,
 'verify_peer_name' => false,
 'allow_self_signed' => true
 )
);

 //Alıcılar
 $mail->setfrom('youremail@.com', 'subject');
 $mail->addAddress("xx@xx.com"); /use receiver mails


//  $mail->addReplyTo($_POST['mail'], $_POST['name']);
 //İçerik
 $mail->isHTML(true);
 $mail->Subject = 'Öneri ve Şikayet';
 $mail->Body = "Mesaj:".$msg."<br> Kullanıcı:<b>".$user."</b><br>  Tarih:".$date;

 $mail->send();
} catch (Exception $e) {
 echo 'Mesajınız İletilemedi. Hata: ', $mail->ErrorInfo;
}
?>