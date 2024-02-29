<?php

include("conexion.php");

// Verificamos si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializamos variables para almacenar los datos del formulario
    $nombre = $apellido = $email = $usuario = $password = $direccion = "";

    // Verificamos si los campos del formulario están seteados
    if (isset($_POST["Nombre"], $_POST["Apellido"], $_POST["Correo"], $_POST["Usuario"], $_POST["Password1"], $_POST["Direccion"])) {
        // Obtenemos los datos del formulario
        $nombre = $_POST["Nombre"];
        $apellido = $_POST["Apellido"];
        $email = $_POST["Correo"];
        $usuario = $_POST["Usuario"];
        $password = $_POST["Password1"]; // No necesitamos la confirmación de contraseña aquí
        $direccion = $_POST["Direccion"];

        // Consulta SQL para verificar si el correo electrónico ya está registrado
        $sql_check_email = "SELECT * FROM usuarios WHERE Correo = '$email' LIMIT 1";
        $result_check_email = $connected->query($sql_check_email);

        // Verificamos si el correo electrónico ya está registrado
        if ($result_check_email->num_rows > 0) {
            $error = "El correo electrónico ya está registrado.";
            header('location:registro.html?ERR=' . $error);
            exit();
        }

        // Consulta SQL para verificar si el usuario ya está registrado
        $sql_check_usuario = "SELECT * FROM usuarios WHERE Usuario = '$usuario' LIMIT 1";
        $result_check_usuario = $connected->query($sql_check_usuario);

        // Verificamos si el usuario ya está registrado
        if ($result_check_usuario->num_rows > 0) {
            $error = "El nombre de usuario ya está en uso.";
            header('location:registro.html?ERR=' . $error);
            exit();
        }

        // Consulta SQL para insertar datos en la base de datos
        $sql_insert = "INSERT INTO usuarios (Nombre, Apellido, Correo, Usuario, Password, Direccion) 
                       VALUES ('$nombre', '$apellido', '$email', '$usuario', '$password', '$direccion')";

        // Intentamos ejecutar la consulta de inserción
        if ($connected->query($sql_insert) === TRUE) {
            // Redireccionamos a la página de bienvenida si la inserción fue exitosa
            header("Location: inicio_sesion.php");
            exit();
        } else {
            // Si hay un error al insertar los datos, redireccionamos al formulario de registro con un mensaje de error
            $error = "Error al insertar datos: " . $connected->error;
            header('location:registro.html?ERR=' . $error);
            exit();
        }
    } else {
        // Si no se han seteado todos los campos del formulario, redireccionamos al formulario de registro con un mensaje de error
        $error = "Todos los campos son obligatorios.";
        header('location:registro.html?ERR=' . $error);
        exit();
    }
} else {
    // Si no se ha enviado el formulario mediante POST, redireccionamos al formulario de registro con un mensaje de error
    $error = "El formulario no ha sido enviado correctamente.";
    header('location:registro.html?ERR=' . $error);
    exit();
}

?>


<!-- dame el codigo sql que me permita analizar si  un dato existe o no antes de hacer un INSERT INTO para evitar la duplicidad de datos dentro del código php -->