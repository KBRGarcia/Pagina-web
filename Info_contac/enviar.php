<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensaje = $_POST['mensaje'];
    
    $mail = new PHPMailer(true);
    
    try {
        //Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ikabarugarcia12@gmail.com'; // Tu dirección de correo electrónico
        $mail->Password = 'Batmanvs.Superman(Batman gana)'; // Tu contraseña de correo electrónico
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
    
        //Destinatario y asunto
        $mail->setFrom('ikabarugarcia12@gmail.com', 'Tu Nombre');
        $mail->addAddress('ikabarugarcia12@gmail.com'); 
        $mail->Subject = 'Mensaje desde el formulario de contacto';
    
        //Cuerpo del mensaje
        $mail->Body = $mensaje;
    
        $mail->send();
        echo "Mensaje enviado correctamente.";
    } catch (Exception $e) {
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde. Detalles del error: {$mail->ErrorInfo}";
    }
}
?>
