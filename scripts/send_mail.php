<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $text = isset($_POST['text']) ? $_POST['text'] : '';
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
 
    $fromName = "White Install Group";

    $subject = "Заявка на консультацію";
    
    $message = "<html>
                    <head>
                        <title>Заявка на консультацію</title>
                    </head>
                    <body>
                         <p style='margin: 20px 10px; font-size: 12pt;'><strong>Ім'я:</strong> " . $name . "</p>
                          <p style='margin: 20px 10px; font-size: 12pt;'><strong>Назва компанії:</strong> " . $company . "</p>
                          <p style='margin: 20px 10px; font-size: 12pt;'><strong>E-mail:</strong> " . $email . "</p>
                          <p style='margin: 20px 10px; font-size: 12pt;'><strong>Номер телефону:</strong> " . $tel . "</p>";
    
    if (!empty($text)) {
        $message .= "<p style='margin: 10px 10px; font-size: 12pt;'><strong>Повідомлення:</strong> " . $text . "</p>";
    }
    
    $message .= "</body>
                </html>";

    $headers = "From: $fromName <st.demchenko@gmail.com>\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail("st.demchenko@gmail.com", $subject, $message, $headers)) {
        echo "Well";
    } else {
        echo "Error";
    }
}

?>