<?php
    // Verificar si el usuario ha iniciado sesión correctamente
    if (!isset($_SESSION['Usuario'])) {
        // Redirigir al usuario a la página de inicio de sesión
        header("Location: ../../Formulario Ika Pro/codigo-html-form/login.html");
        exit();
    }

    // Verificar si la variable de sesión de autenticación está establecida
    if (!isset($_SESSION['Autenticado']) || $_SESSION['Autenticado'] !== true) {
        // Redirigir al usuario a la página de inicio de sesión
        header("Location: ../../Formulario Ika Pro/codigo-html-form/login.html");
        exit();
    }
?>