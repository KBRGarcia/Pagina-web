<?php

    include("conexion.php");
    $hay_error = false;
    $error = "";

    if (empty($_POST['Nombre']) && empty($_POST['Apellido']) && empty($_POST['Correo']) 
    && empty($_POST['Usuario']) && empty($_POST['Password']) && empty($_POST['Direccion'])){

        $error = 'Rellene todo los campos imbecil';
        header('location:registro.php?ERR=' . $error);
        $hay_error=true;

    }else{

        if(isset($_POST['texto'])){
            
            // Obtener datos del formulario
            $nombre = $_POST['Nombre'];
            $apellido = $_POST['Apellido'];
            $email = $_POST['Correo'];
            $usuario = $_POST['Usuario'];
            $password = $_POST['Password'];
            $direccion = $_POST['Direccion'];

            //confirmar que los datos del formulario no esten vacios utilizando un if
            //verificación de que el cambo del nombre no se encuentre vacio
            if (!empty($_POST['Nombre'])) {
                $nombre = $_POST['Nombre'];
            } else{
                $error = "Debebe ingresar su Nombre";
                header('location:registro.php?ERR=' . $error);
                $hay_error=true;
            }

            //verificación de que el cambo del apellido no se encuentre vacio
            if (!empty($_POST['Apellido'])) {
                $apellido = $_POST['Apellido'];
            } else{
                $error = "Debebe ingresar su Apellido";
                header('location:registro.php?ERR=' . $error);
                $hay_error=true;
            }

            //verificación de que el cambo del email no se encuentre vacio
            if(!empty($_POST['Correo'])){
                $email = $_POST['Correo'];
            } else{
                $error = "Debebe ingresar un email";
                header('location:registro.php?ERR=' . $error);
                $hay_error=true;
            }

            // //verificación de que el cambo de confirmacion del email no se encuentre vacio
            // if(!empty($_POST['Correo2'])){
            //     $email2 = $_POST['Correo2'];
            // } else{
            //     $error = "Debe ingresar la confirmación del email";
            //     header('location:registro.php?ERR=' . $error);
            //     $hay_error=true;
            // }

            // if ($_POST['Correo'] != $_POST['Correo2']){
            //     $error = "Los Correos no coinciden";
            //     header('location:registro.php?ERR=' . $error);
            //     $hay_error=true;
            // }

            //verificación de que el cambo del Usuario no se encuentre vacio
            if (!empty($_POST['Usuario'])) {
                $usuario = $_POST['Usuario'];
            } else{
                $error = "Debebe ingresar su Usuario";
                header('location:registro.php?ERR=' . $error);
                $hay_error=true;
            }

            //verificación de que el cambo de la contraseña no se encuentre vacio
            if(!empty($_POST['Password'])){
                $password = $_POST['Password'];
            } else{
                $error = "Debe ingresar una contraseña";
                header('location:registro.php?ERR=' . $error);
                $hay_error=true;
            }

            // //verificación de que el cambo de la confirmacion de la contraseña no se encuentre vacio
            // if(!empty($_POST['Password2'])){
            //     $password2 = $_POST['Password2'];
            // } else{
            //     $error = "Debe confirmar que su contraseña sea igual a la ingresada con anterioridad";
            //     header('location:registro.php?ERR=' . $error);
            //     $hay_error=true;
            // }

            // if ($_POST['Password1'] != $_POST['Password2']){
            //     $error = "Las contraseñas no coinciden";
            //     header('location:registro.php?ERR=' . $error);
            //     $hay_error=true;
            // }

            //verificación de que el cambo de la direccion no se encuentre vacio
            if(!empty($_POST['Direccion'])){
                $direccion = $_POST['Direccion'];
            } else{
                $error = "Debe ingresar la dirección de su domicilio o vivienda";
                header('location:registro.php?ERR=' . $error);
                $hay_error=true;
            }

             //verificar de que el usuario no se encuentre registrado en la base de datos
            $confir = "SELECT * FROM usuarios WHERE Correo = '$email' LIMIT 1";
            $confir2 = mysqli_query($connected, $confir);
            $confir3 = mysqli_fetch_assoc($confir2);
                       
            if ($confir3 > 0){
                if ($confir3['Correo'] === $email){
                    $error = "El correo electronico ya se encuentra registrado";
                header('location:registro.php?ERR=' . $error);
                $hay_error=true;
                }
            }
        }
    }

    if(!$hay_error){
        header('location:conexion.php');

        // Consulta SQL para insertar datos
    $sql = "INSERT INTO usuarios (Nombre, Apellido, Correo, Usuario, Password, Direccion) 
    VALUES ('$nombre', '$apellido', '$email', '$usuario', '$password', '$direccion')";

    if ($connected->query($sql) === TRUE) {
        echo "Datos insertados correctamente";
        header("Location: bienvenido.php");
        exit();
    } else {
        echo "Error al insertar datos: " . $connected->error;
    }

    $connected->close();


    }

?>