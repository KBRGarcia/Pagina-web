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
    <title>Inicio de Sesión</title>
</head>
<body>

                                    <!-- INICIO DE SESION SI YA SE ENCUENTRA REGISTRADO -->

  <div class="form_inicio container global_form">
    <div class=" container-fluid form_container">
      
      <!-- comienzo del formulario -->
      <form class="m-5 form_class" method="POST" action="valid_inicio.php">
        <div class="row justify-content-center formlog_row" align="center">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
            <h2 class="formlog_title" style="text-transform: uppercase; font-weight: 700;">Inicio de Sesión</h2>
          </div>
        </div>
        <fieldset>
         
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

          <!-- boton para inisio de sesión -->
          <div class="row justify-content-center formlog_row" align="center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 formlog_col">
              <button type="submit" class="btn btn-primary" name="texto">
                <i class="bi bi-person-lines-fill"></i>&nbsp;&nbsp;
                <a style="text-decoration: none; color: #fff;">Inicio</a>
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