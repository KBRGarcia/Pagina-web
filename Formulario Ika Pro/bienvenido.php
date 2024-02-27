<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css_bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="style_bienve.css">
    <link rel="stylesheet" href="fonts/BootstrapIcons/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <title>Bienvenido</title>
</head>
<body style="background: rgb(104, 156, 216);">
    


    <div class="bien_div">
        <h1 class="bienvenido" style="color: white;">BIENVENIDO!!</h1><br>
    </div>

    <div  class="php_style">
        <?php

            // código de conexión a la base de datos
            include("conexion.php");

            $sql = "SELECT Nombre FROM user_name WHERE id = 1";
            $resultado = $connected->query($sql);

            if ($resultado->num_rows > 0) {
                // Mostrar el nombre
                while ($fila = $resultado->fetch_assoc()) {
                    echo $fila["Nombre"];
                }
            } 
            // Cerrar la conexión a la base de datos
            $connected->close();
        ?>
    </div>


</body>
</html>

