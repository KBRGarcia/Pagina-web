<?php

include("conexion.php"); 
$hay_error = false;
$error = "";

if (empty($_POST['Correo']) || empty($_POST['Password1'])) {
    $error = 'Rellene todos los campos correctamente.';
    header('location: inicio_sesion.php?ERR=' . $error);
    $hay_error = true;
} else {
    // Obtención de datos del formulario
    $correo = $_POST["Correo"];
    $contrasena = $_POST["Password1"];

    // Consulta para verificar los datos
    $sql = "SELECT * FROM user_name WHERE Correo = '$correo' AND Password1 = '$contrasena'";
    $result = $connected->query($sql);

    if ($result && $result->num_rows > 0) {
        // redirigir a otra página si los datos son correctos
        header("Location: bienvenido.php");
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
