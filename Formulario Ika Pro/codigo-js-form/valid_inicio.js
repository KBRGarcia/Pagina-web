document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos el formulario y los campos de usuario y contraseña
  const form = document.querySelector("form");
  const usuarioInput = document.getElementById("userinput");
  const passwordInput = document.getElementById("Password");

  // Manejador de eventos para el envío del formulario
  form.addEventListener("submit", function(event) {
      // Detenemos el envío del formulario para realizar la validación
      event.preventDefault();

      // Reseteamos los estilos de los campos
      usuarioInput.style.borderColor = "";
      passwordInput.style.borderColor = "";

      // Validamos el campo de usuario
      if (usuarioInput.value.length < 5) {
          mostrarError(usuarioInput, "El usuario debe tener al menos 5 caracteres.");
          return;
      }

      // Validamos el campo de contraseña
      const password = passwordInput.value;
      if (password.length < 8 || password.length > 16) {
          mostrarError(passwordInput, "La contraseña debe tener entre 8 y 16 caracteres y contener al menos una mayúscula, un número y un carácter especial.");
          return;
      }
      if (!/[A-Z]/.test(password)) {
          mostrarError(passwordInput, "La contraseña debe contener al menos una mayúscula.");
          return;
      }
      if (!/\d/.test(password)) {
          mostrarError(passwordInput, "La contraseña debe contener al menos un número.");
          return;
      }
      if (!/[!@#$%^&*()-_=+{};:,<.>]/.test(password)) {
          mostrarError(passwordInput, "La contraseña debe contener al menos un caracter especial.");
          return;
      }

      // Si la validación pasa, enviamos el formulario
      form.submit();
  });

  // Función para mostrar un mensaje de error en un campo específico
  function mostrarError(input, mensaje) {
      const errorDiv = input.nextElementSibling;
      errorDiv.textContent = mensaje;
      input.style.borderColor = "red";
  }
});