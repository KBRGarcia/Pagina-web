// Obtener referencia a los elementos del formulario
const form = document.querySelector('form');
const nombreInput = document.querySelector('input[name="Nombre"]');
const apellidoInput = document.querySelector('input[name="Apellido"]');
const correoInput = document.querySelector('input[name="Correo"]');
const correoConfirmInput = document.querySelector('input[name="Correo2"]');
const usuarioInput = document.querySelector('input[name="Usuario"]');
const passwordInput = document.querySelector('input[name="Password1"]');
const passwordConfirmInput = document.querySelector('input[name="Password2"]');
const direccionInput = document.querySelector('textarea[name="Direccion"]');

// Agregar el evento submit al formulario
form.addEventListener('submit', function (event) {
  // Validar los campos del formulario
  if (!validarNombre(nombreInput.value)) {
    event.preventDefault(); // Evitar que el formulario se envíe
    resaltarCampoErroneo(nombreInput, 'El nombre debe tener entre 3 y 11 caracteres.');
  }

  if (!validarNombre(apellidoInput.value)) {
    event.preventDefault();
    resaltarCampoErroneo(apellidoInput, 'El apellido debe tener entre 3 y 11 caracteres.');
  }

  if (!validarCorreo(correoInput.value)) {
    event.preventDefault();
    resaltarCampoErroneo(correoInput, 'El correo electrónico no es válido.');
  }

  if (correoInput.value !== correoConfirmInput.value) {
    event.preventDefault();
    resaltarCampoErroneo(correoConfirmInput, 'El correo electrónico de confirmación no coincide.');
  }

  if (!validarUsuario(usuarioInput.value)) {
    event.preventDefault();
    resaltarCampoErroneo(usuarioInput, 'El usuario debe tener al menos 5 caracteres.');
  }

  if (!validarPassword(passwordInput.value)) {
    event.preventDefault();
    resaltarCampoErroneo(passwordInput, 'La contraseña debe tener entre 8 y 16 caracteres y contener al menos una mayúscula, un número y un carácter especial.');
  }

  if (passwordInput.value !== passwordConfirmInput.value) {
    event.preventDefault();
    resaltarCampoErroneo(passwordConfirmInput, 'La contraseña de confirmación no coincide.');
  }

  if (!validarDireccion(direccionInput.value)) {
    event.preventDefault();
    resaltarCampoErroneo(direccionInput, 'La dirección debe tener entre 10 y 255 caracteres.');
  }
});

// Función para validar el nombre y apellido
function validarNombre(nombre) {
  return nombre.length >= 3 && nombre.length <= 11;
}

// Función para validar el correo electrónico
function validarCorreo(correo) {
  // Utiliza una expresión regular para validar el formato del correo electrónico
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(correo);
}

// Función para validar el usuario
function validarUsuario(usuario) {
  return usuario.length >= 5;
}

// Función para validar la contraseña
function validarPassword(password) {
  // Utiliza una expresión regular para validar el formato de la contraseña
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  return regexPassword.test(password);
}

// Función para validar la dirección
function validarDireccion(direccion) {
  return direccion.length >= 10 && direccion.length <= 255;
}

// Función para resaltar un campo erróneo
function resaltarCampoErroneo(input, mensaje) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = mensaje;
  input.style.borderColor = "red";
}