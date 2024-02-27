function validarFormulario() {
    // Obtener referencias a los campos del formulario
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var emailConfirm = document.getElementById('exampleInputEmail2').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var passwordConfirm = document.getElementById('exampleInputPassword2').value;
    var direccion = document.getElementById('exampleFormControlTextarea1').value;
  
    // Validar campos obligatorios
    if (nombre === '' || email === '' || emailConfirm === '' || password === '' || passwordConfirm === '' || direccion === '') {
      alert('Por favor, complete todos los campos.');
      return false; // Evita que el formulario se envíe
    }
  
    // Validar que los campos de correo electrónico coincidan
    if (email != emailConfirm) {
      alert('Los correos electrónicos no coinciden.');
      return false; // Evita que el formulario se envíe
    }
  
    // Validar que los campos de contraseña coincidan
    if (password != passwordConfirm) {
      alert('Las contraseñas no coinciden.');
      return false; // Evita que el formulario se envíe
    }
  
    return true;
  }
  