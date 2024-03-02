<?php
session_start();
include("conexion.php");

// Verificamos si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializamos variables para almacenar los datos del formulario
    $usuario = $password = "";

    // Verificamos si los campos del formulario están seteados
    if (isset($_POST["usuario"], $_POST["Password"])) {
        // Obtenemos los datos del formulario
        $usuario = $_POST["usuario"];
        $password = $_POST["Password"];

        // Consulta SQL para verificar si el usuario y contraseña coinciden
        $sql_check_user = "SELECT * FROM usuarios WHERE Usuario = '$usuario' AND Password = '$password' LIMIT 1";
        $result_check_user = $connected->query($sql_check_user);

        if ($result_check_user->num_rows > 0) {
            // Si el usuario existe, redirigirlo a la página de bienvenida
            header("Location: ../../Flujogramas/Codigo_html/inicio.html");
            exit();
        } else {
            // Si el usuario no existe, denegar el acceso
            // Incrementar el contador de intentos fallidos
            if (!isset($_SESSION['intentos'])) {
                $_SESSION['intentos'] = 1;
            } else {
                $_SESSION['intentos']++;
            }

            // Si hay 5 intentos fallidos, redirigir al usuario a la página de registro
            if ($_SESSION['intentos'] >= 3) {
                unset($_SESSION['intentos']); // Restablecer el contador de intentos
                header("Location: registro.php");
                exit();
            }

            // Si no hay 5 intentos fallidos, redirigir al usuario a la página de inicio de sesión con un mensaje de error
            $error = "Usuario o contraseña incorrectos. Intento " . $_SESSION['intentos'] . "/3";
            header('location:inicio_sesion.php?ERR=' . $error);
            exit();
        }
    } else {
        // Si no se han seteado todos los campos del formulario, redireccionamos al formulario de inicio de sesión con un mensaje de error
        $error = "Todos los campos son obligatorios.";
        header('location:inicio_sesion.php?ERR=' . $error);
        exit();
    }
} else {
    // Si no se ha enviado el formulario mediante POST, redireccionamos al formulario de inicio de sesión con un mensaje de error
    $error = "El formulario no ha sido enviado correctamente.";
    header('location:inicio_sesion.php?ERR=' . $error);
    exit();
}
?>
