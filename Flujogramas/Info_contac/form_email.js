$(document).ready(function () {
    $('#formulario'). submit(function (event) {
        event.preventDefault(); //detiene el envio del formulario normal

        var formData = $(this).serialize(); //obtener los datos del formulario

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function (response) {
                $('#mensaje').html('<div class="alert alert-success" role="alert">El mensaje ha sido enviado correctamente.  Gracias por comunicarte con nosotros UwU</div>');
            },
            error: function () {
                $('#mensaje').html('<div class="alert alert-danger" role="alert">Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</div>');
            }
        });

        //desvanecer el mensaje después de 5 segundos
        $('#mensaje').fadeIn().delay(5000).fadeOut();
    });
});