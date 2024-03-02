<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css_bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="../codigo-css-form/style_form.css">
    <link rel="stylesheet" href="fonts/BootstrapIcons/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <title>Inicio de Sesión</title>
</head>
<body>

                                    <!-- INICIO DE SESION SI YA SE ENCUENTRA REGISTRADO -->

    <div class="form_inicio container global_form">
    <div class=" container-fluid form_container">
      
      <!-- comienzo del formulario -->
      <form class="m-5 form_class" method="POST" action="valid_inicio.php" autocomplete = "off">
        <div class="row justify-content-center formlog_row" align="center">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
            <h2 class="formlog_title" style="text-transform: uppercase; font-weight: 700;">Inicio de Sesión</h2>
          </div>
        </div>
        <fieldset>
         
          <!-- usuario -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__usuario">
                  <label for="userinput" class="form-label" id="Inputinput">Usuario</label>
                  <input type="text" name="usuario" class="form-control" id="userinput">
                  <div id="usuarioHelp" class="form-text"></div>
                </div>
              </div>
            </div>
          </div>          

          <!-- contraseña -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__password">
                  <label for="Password" class="form-label" id="InputPassword">Contraseña</label>
                  <input type="password" name="Password" class="form-control" id="Password">
                  <span class="icono-eye" id="span_InputPassword"><i class="blockpass bi bi-eye-fill"></i></span>
                </div>
              </div>
            </div>
          </div>

          <!-- boton para inicio de sesión -->
          <div class="row justify-content-center formlog_row" align = "center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
              <button type="submit" class="btn btn-primary" name="texto">
                <i class="bi bi-person-lines-fill"></i>&nbsp;&nbsp;
                <a style="text-decoration: none; color: #fff;">Inicio</a>
              </button>
            </div>
          </div><br>

          <!-- boton para volver al login principal -->
          <div class="row justify-content-center formlog_row" align = "center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
                <a href="../codigo-html-form/login.html" class="btn btn-primary">
                    <i class="bi bi-arrow-left"></i>&nbsp;&nbsp;
                    <span style="text-decoration: none; color: #fff;">Volver</span>
                </a>
            </div>
          </div>

          <!-- La validación del lado del cliente -->
          <script src="../codigo-js-form/valid_inicio.js"></script>  

          <!-- cambiar el tipo de entrada del campo de contraseña y alternar entre mostrar y ocultar la contraseña cuando se hace clic en el icono del ojo -->
          <script src="../codigo-js-form/contrasenia_inicio.js"></script>

          <!-- validacion de error al conectarse en la base de datos -->
          <div id="mensaje_error" aling="center" style="font-family: 'Gotham' sans-serif; color:red; font-size: small;"><br>
            <?php
              if (isset($_GET['ERR'])) {
                echo $_GET['ERR'];
              }
            ?>
          </div>

        </fieldset>
      </form>
    </div>
  </div>

          
  <script src="js_bootstrap/jquery-3.6.0.min.js"></script>
  <script src="js_bootstrap/bootstrap.min.js"></script>

</body>
</html>