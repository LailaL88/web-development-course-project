<?php
    $name =  htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to_email = "olga_ze@inbox.lv";
    $subject = "Form Email From New Portfolio";
    $body = "Name: " . $name."     Email: ".$email. "     Message: ".$message;  
    $headers = "From: guest@olgazevtuna.com";
    
    if ( $name !=="" && $email !=="" && $message!=="" && mail($to_email, $subject, $body, $headers)) {
        echo("Thank you for your message, it has been sent successfully!");
    }
?>