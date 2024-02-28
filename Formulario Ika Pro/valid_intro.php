<?php

include("conexion.php"); 
$hay_error = false;
$error = "";

if (empty($_POST['Usuario']) || empty($_POST['Password'])) {
    $error = 'Rellene todos los campos correctamente.';
    header('location: inicio_sesion.php?ERR=' . $error);
    $hay_error = true;
} else {
    // Obtención de datos del formulario
    $usuario = $_POST["Usuario"];
    $contrasena = $_POST["Password"];

    // Consulta para verificar los datos
    $sql = "SELECT * FROM usuario WHERE Usuario = '$usuario' AND Password = '$contrasena'";
    $result = $connected->query($sql);

    if ($result && $result->num_rows > 0) {
        // redirigir a otra página si los datos son correctos
        header("Location: Flujogramas/inicio.html");
        exit();
    } else {
        // mensaje de error si los datos son incorrectos
        $error = 'Datos incorrectos';
        header("Location: inicio_sesion.php?ERR=" . $error);
        exit();
    }
}
 $connected->close();
?>
