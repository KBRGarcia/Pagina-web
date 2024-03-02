document.addEventListener("DOMContentLoaded", function() {
    const id_span1 = document.getElementById('span_InputPassword1');
    const id_password1 = document.getElementById('Password1');

    id_span1.addEventListener('click', () => {
        const type = id_password1.getAttribute('type') === 'password' ? 'text' : 'password';
        id_password1.setAttribute('type', type);
        id_span1.querySelector('i').classList.toggle('bi-eye-slash-fill');
    });

    const id_span2 = document.getElementById('span_InputPassword2');
    const id_password2 = document.getElementById('Password2');

    id_span2.addEventListener('click', () => {
        const type = id_password2.getAttribute('type') === 'password' ? 'text' : 'password';
        id_password2.setAttribute('type', type);
        id_span2.querySelector('i').classList.toggle('bi-eye-slash-fill');
    });
});