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
    <title>KBR - Prueba del Formulario</title>
</head>
<body>
                                <!-- REGISTRO INICIAL EN LA BASE DE DATOS -->

  <div class="container mt-5 global_form">
    <div class=" container-fluid form_container">
      
      <!-- comienzo del formulario -->
      <form class="m-5 form_class padding: 50px;" method="POST" action="valid_regist.php" autocomplete = "off">
        <div class="row justify-content-center formlog_row" align="center">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
            <h2 class="formlog_title" style="text-transform: uppercase; font-weight: 700;">Registro</h2>
          </div>
        </div>
        <fieldset>

         <!-- Nombre  -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__nombre">
                  <label for="name" class="form-label" >Nombre</label>
                  <input type="text" name="Nombre" class="form-control" id="name" rows="3" minlength="3" maxlength="50" ></input>
                  <p class="formulario__nombre-error"></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Apellido  -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__nombre">
                  <label for="name" class="form-label" >Apellido</label>
                  <input type="text" name="Apellido" class="form-control" id="lastname" rows="3" minlength="3" maxlength="50" ></input>
                  <p class="formulario__nombre-error"></p>
                </div>
              </div>
            </div>
          </div>

          <!-- correo electronico -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__email">
                  <label for="exampleInputEmail1" class="form-label" id="InputEmail1">Email address</label>
                  <input type="email" name="Correo" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- confirmacion del correo electronico -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__email-confirm">
                <label for="exampleInputEmail2" class="form-label" id="InputEmail2">Email address. Confirmation</label>
                  <input type="email" class="form-control" name="Correo2" id="exampleInputEmail2" aria-describedby="emailHelp">
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                  <p class="formulario__email-confirm-error"></p>
                <div id="emailHelp" class="form-text"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Usuario  -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__nombre">
                  <label for="name" class="form-label" >Usuario</label>
                  <input type="text" name="Usuario" class="form-control" id="user" rows="3" minlength="3" maxlength="50" ></input>
                  <p class="formulario__nombre-error"></p>
                </div>
              </div>
            </div>
          </div>

          <!-- contraseña -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__password">
                  <label for="Password1" class="form-label" id="InputPassword1">Password</label>
                  <input type="password" name="Password1" class="form-control" id="Password1">
                  <span class="icono-eye" id="span_InputPassword1"><i class="blockpass bi bi-eye-fill"></i></span>
                </div>
              </div>
            </div>
          </div>

          <!-- confirmaion de la contraseña -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__password-confirm">
                  <label for="Password2" class="form-label" id="InputPassword2">Password. Confirmation</label>
                  <input type="password" name="Password2" class="form-control" id="Password2">
                  <span class="icono-eye" id="span_InputPassword2"><i class="blockpass bi bi-eye-fill"></i></span>
                  <p class="formulario__password-confirm-error"></p>
                </div>
              </div>
            </div>
          </div>          

          <!-- direccion -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Dirección</label>
                <textarea class="form-control" name="Direccion" id="exampleFormControlTextarea1" minlength="5" maxlength="200" rows="3"></textarea>
              </div>
            </div>
          </div>

          <!-- boton para registrarse -->
          <div class="row justify-content-center formlog_row" align="center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
              <button type="submit" class="btn btn-primary" name="texto">
                <i class="bi bi-person-lines-fill"></i>&nbsp;&nbsp;
                <a style="text-decoration: none; color: #fff;">Registrarse</a>
              </button>
            </div>
          </div><br>

          <!-- boton para volver al login principal -->
          <div class="row justify-content-center formlog_row" align="center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
                <a href="../codigo-html-form/login.html" class="btn btn-primary">
                    <i class="bi bi-arrow-left"></i>&nbsp;&nbsp;
                    <span style="text-decoration: none; color: #fff;">Volver</span>
                </a>
            </div>
          </div>

          <!-- La validación del lado del cliente -->
          <script src="../codigo-js-form/valid_regis.js"></script>

          <!-- cambiar el tipo de entrada del campo de contraseña y alternar entre mostrar y ocultar la contraseña cuando se hace clic en el icono del ojo -->
          <script src="../codigo-js-form/contrasenia_regist.js"></script>

          <!-- validacion de error al conectarse en la base de datos -->
          <div id="mensaje_error" align="center" style="font-family: 'Gotham' sans-serif; color:red; font-size: small;"><br>
            <?php
              if (isset($_GET['ERR'])) {
                echo $_GET['ERR'];
              }
            ?>
          </div>
          
        </fieldset>
      </form>
    </div>
    <div class="copyright">
			<div class="row">
				<div class="the_ghost">
					<h6>The Ghost. © 2024 Copyright. Todos los Derechos Reservados.</h6>
				</div>          
			</div>
			<div class="row">
				<div class="the_ghost">
					<h6>Technology and computer science and systems corporation</h6>
				</div>
			</div>
		</div>
  </div>
  
  <script src="js_bootstrap/jquery-3.6.0.min.js"></script>
  <script src="js_bootstrap/bootstrap.min.js"></script>
</body>
</html>