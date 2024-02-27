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

validarFormulario();

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
