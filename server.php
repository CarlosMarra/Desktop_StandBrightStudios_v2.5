<?php

if (isset($_POST["submit"])){
          
    $p_name = trim(stripslashes(htmlspecialchars($_POST['person_name']))); 
    $c_name= trim(stripslashes(htmlspecialchars($_POST['company_name'])));          
    $c_email = trim(stripslashes(htmlspecialchars($_POST['company_email'])));         
    $c_phone = trim(stripslashes(htmlspecialchars($_POST['company_number'])));         
    $c_budget = trim(stripslashes(htmlspecialchars($_POST['company_budget'])));
    $c_know= trim(stripslashes(htmlspecialchars($_POST['company_know'])));     
    $c_details= trim(stripslashes(htmlspecialchars($_POST['company_details'])));     

    $emaillist = 'sidney@standbrightstudios.com, findme@carlosamarra.com';
    
                $to      = $c_email;
                $subject = $c_name." inquired about a video.";
                $message = "<html><body>";
                $message .= "<table>";
                $message .= "<tr><th colspan=2 style='background-color: #405159; color: #CFF0FF; padding: 20px; font-family:Verdana,Geneva,sans-serif; font-weight: bold; font-size: 30px;'>Stand Bright Studios Recipt</th></tr>";
                $message .= "<tr style='background-color: #CFF0FF; color: #405159; font-family:Verdana,Geneva,sans-serif; font-weight: bold;'><td style='padding: 10px;'>Contact Name</td><td>$p_name</td></tr>";
                $message .= "<tr style='color: #405159; font-family:Verdana,Geneva,sans-serif; font-weight: bold;'><td style='padding: 10px;'>Phone Number</td><td>$c_phone</td></tr>";
                $message .= "<tr style='background-color: #CFF0FF; color: #405159; font-family:Verdana,Geneva,sans-serif; font-weight: bold;'><td style='padding: 10px;'>Budget</td><td>$c_budget</td></tr>";
                $message .= "<tr style='color: #405159; font-family:Verdana,Geneva,sans-serif; font-weight: bold;'><td style='padding: 10px;'> How you found us:</td><td style='max-width:200px!important;'>$c_know</td></tr>";
                $message .= "<tr style='background-color: #CFF0FF; color: #405159; font-family:Verdana,Geneva,sans-serif; font-weight: bold;'><td style='padding: 10px;'>Additional Details</td><td style='max-width:200px!important;'>$c_details</td></tr>";
                $message .= "<tr><th colspan=2 style='background-color: #CFF0FF; color: #405159; padding: 20px; font-family:Verdana,Geneva,sans-serif; font-weight: bold; font-size: 20px;'>Thank You For Contacting Us!</th></tr>";
                $message .= "</table>";
                $message .= "</body></html>";

                $headers = "From: hello@standbrightstudios.com\r\n";
                $headers .= "Bcc: $emaillist\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


                
                mail($to, $subject, $message, $headers);
                
                echo '<style type="text/css">
                html {
                    display: none;
                }
                </style>';
                                
                echo '<script language="javascript">';
                echo 'window.location.href="index.html";';
                echo '</script>';
    
}

if (isset($_POST["submit_news"])){
    
        include('connection.php');
    
        $sub_email = trim(stripslashes(htmlspecialchars($_POST['mail'])));         
       
        $query = "INSERT INTO sub_list (email) VALUES ('$sub_email')"; 
        $result = mysql_query($query);

        echo '<style type="text/css">
        html {
            display: none;
        }
        </style>';
                                
        echo '<script language="javascript">';
        echo 'window.location.href="index.php";';
        echo '</script>';
}
?>
