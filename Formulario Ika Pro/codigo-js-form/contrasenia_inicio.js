document.addEventListener("DOMContentLoaded", function() {
    const id_span = document.getElementById('span_InputPassword');
    const id_password = document.getElementById('Password');

    id_span.addEventListener('click', () => {
        const type = id_password.getAttribute('type') === 'password' ? 'text' : 'password';
        id_password.setAttribute('type', type);
        id_span.querySelector('i').classList.toggle('bi-eye-slash-fill');
    });
});