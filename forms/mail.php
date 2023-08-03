<?php
$to = "owenrudiantoso@gmail.com";
$subject = $_POST['subject'];
$msg = $_POST['message'];
$headers = "From:".$_POST['email'];

mail($to,$subject,$msg,$headers);
?>
