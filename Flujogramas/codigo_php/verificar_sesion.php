<?php
    // Iniciar la sesión
    session_start();

    // Verificar si el usuario ha iniciado sesión
    if (!isset($_SESSION['Usuario'])) {
        // El usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
        header("Location: ../../Formulario Ika Pro/codigo-html-form/login.html");
        exit(); // Salir del script después de redirigir
    }
?>