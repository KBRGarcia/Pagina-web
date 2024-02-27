<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css_bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="style_form.css">
    <link rel="stylesheet" href="fonts/BootstrapIcons/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <title>Prueba del Formulario</title>
</head>
<body>
                                <!-- REGISTRO INICIAL EN LA BASE DE DATOS -->

  <div class="container mt-5 global_form">
    <div class=" container-fluid form_container">
      
      <!-- comienzo del formulario -->
      <form class="m-5 form_class padding: 50px;" method="POST" action="valid_form.php">
        <div class="row justify-content-center formlog_row" aling="center">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
            <h2 class="formlog_title" style="text-transform: uppercase; font-weight: 700;">Registro</h2>
          </div>
        </div>
        <fieldset>

         <!-- Nombre y apellido  -->
          <div class="row justify-content-center formlog_row">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 formlog_col">
              <div class="mb-3">
                <div id="formulario__nombre">
                  <label for="name" class="form-label" >Nombre y Apellido</label>
                  <input type="text" name="Nombre" class="form-control" id="name" rows="3" minlength="3" maxlength="50" ></input>
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
          </div>
          
          <script src="valid_form.js"></script>

          <script>
            const id_span1 = document.getElementById('span_InputPassword1');
            const id_span2 = document.getElementById('span_InputPassword2');
            const id_password1 = document.getElementById('Password1');
            const id_password2 = document.getElementById('Password2');

            id_span1.addEventListener('click', () => {
                const type = id_password1.getAttribute('type') === 'password' ? 'text' : 'password';
                id_password1.setAttribute('type', type);
                id_span1.querySelector('i').classList.toggle('bi-eye-slash-fill');

            });

            id_span2.addEventListener('click', () => {
                const type = id_password2.getAttribute('type') === 'password' ? 'text' : 'password';
                id_password2.setAttribute('type', type);
                id_span2.querySelector('i').classList.toggle('bi-eye-slash-fill');

            });
          </script>

          

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