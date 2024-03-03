document.addEventListener("DOMContentLoaded", function() {
// Obtener referencia a los elementos del formulario
  const form = document.querySelector("form");
  const nombreInput = document.querySelector("name");
  const apellidoInput = document.querySelector("lastname");
  const correoInput = document.querySelector("exampleInputEmail1");
  const correoConfirmInput = document.querySelector("exampleInputEmail2");
  const usuarioInput = document.querySelector("user");
  const passwordInput = document.querySelector("Password1");
  const passwordConfirmInput = document.querySelector("Password2");
  const direccionTextarea = document.querySelector("exampleFormControlTextarea1");

  // Agregar el evento submit al formulario
  form.addEventListener("submit", function (event) {
    // Detenemos el envío del formulario para realizar la validación
    event.preventDefault();

    // Reseteamos los estilos de los campos
    nombreInput.style.borderColor = "";
    apellidoInput.style.borderColor = "";
    correoInput.style.borderColor = "";
    correoConfirmInput.style.borderColor = "";
    usuarioInput.style.borderColor = "";
    passwordInput.style.borderColor = "";
    passwordConfirmInput.style.borderColor = "";
    direccionTextarea.style.borderColor = "";
    
        
    // Validar los campos del formulario
    // Validar el el campo del nombre
    if (nombreInput.value.length >= 3 && nombreInput.value.length <= 11) {
      mostrarError(nombreInput, "El nombre debe tener entre 3 y 11 caracteres.");
      return;
    }

    // Validar el campo del Apellido
    if (apellidoInput.value.length >= 3 && apellidoInput.value.length <= 11) {
      mostrarError(apellidoInputt, "El apelliido debe tener entre 3 y 11 caracteres.");
      return;
    }
    
    // Validar el campo del Correo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoConfirmInput)) {
      mostrarError(correoConfirmInput, "El correo electrónico no es válido.");
      return;
    }

    //Validar si los correo coinciden
    if (correoInput.value !== correoConfirmInput.value) {
      mostrarError(correoConfirmInput, "El correo electrónico de confirmación no coincide.");
      return;
    }

    // Validar el campo del usuario
    if (usuarioInput.value.length < 5) {
      mostrarError(usuarioInput, "El usuario debe tener al menos 5 caracteres.");
      return;
    }

    // Validamos el campo de contraseña
    if (passwordInput.value.length < 8 || passwordInput.value.length > 16) {
      mostrarError(passwordInput, "La contraseña debe tener entre 8 y 16 caracteres.");
      return;
    }
    if (!/[A-Z]/.test(passwordInput.value)) {
      mostrarError(passwordInput, "La contraseña debe contener al menos una mayúscula.");
      return;
    }
    if (!/\d/.test(passwordInput.value)) {
      mostrarError(passwordInput, "La contraseña debe contener al menos un número.");
      return;
    }
    if (!/[!@#$%^&*()-_=+{};:,<.>]/.test(passwordInput.value)) {
      mostrarError(passwordInput, "La contraseña debe contener al menos un caracter especial.");
      return;
    }

    // Validar si el campo de las contraseñas coninciden
    if (passwordInput.value !== passwordConfirmInput.value) {
      mostrarError(passwordConfirmInput, "La contraseña de confirmación no coincide.");
      return;
    }

    // Validar el campo de la direccion
    if (direccionTextarea.value.length >= 10 && direccion.value.length <= 255) {
      mostrarError(direccionTextarea, "La dirección debe tener entre 10 y 255 caracteres.");
      return;
    }

    //si la validacion pasa enviamos el formulario 
    form.submit();
  });

  // Función para mostrar un mensaje de error en un campo específico
  function mostrarError(input, mensaje) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = mensaje;
    input.style.borderColor = "red";
  }
});