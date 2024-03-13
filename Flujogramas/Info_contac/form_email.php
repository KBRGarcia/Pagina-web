<?php

    if ($_SERVER["REQUEST_METHOD"] == "PSOT") {

        //Obtener los datos del formulario
        $asunto = $_POST["asunto"];
        $mensaje = $_POST["mensaje"];

        //correo predefinido al que se enviará el mensaje
        $correo_destino = "ikabarugarcia12@gmail.com";

        //Asunto y cuerpo del correo
        $asunto_correo = "Mesnsaje del usuario: $asunto";
        $mensaje_correo = "Mensaje:\n$mensaje";

        //Enviar el correo electrónico
        if (mail($correo_destino, $asunto_correo, $mensaje_correo)) {
            echo "El mensaje ha sido enviado correctamente. Gracias por comunicarte con nosotros UwU";
        } else {
            echo "Error al enviar el mensaje. Por favor inténtelo de nuevo mas tarde.";
        }
    } else {
        echo "Error: Acceso no permitodo";
    }

?>