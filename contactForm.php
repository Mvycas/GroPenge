<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $mailTo = "contact@gropenge.dk";
    $headers = "From: ".$mailFrom.". \n Phone number: ".$phone." \n\n"."message: " .$message;
    $txt = "Sender:  ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.html");
}