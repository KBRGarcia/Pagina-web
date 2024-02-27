// Puedes usar una librería de diagramas de flujo como JointJS o mxGraph

// En este ejemplo, se utiliza una función simple para agregar elementos al diagrama
function agregartexto(texto) {
    const flowchart = document.getElementById('flowchart'); // Obtener el elemento con el ID 'flowchart'
    const textoElemento = document.createElement('div'); // Crear un nuevo elemento div
    textoElemento.className = 'texto'; // Asignar la clase 'elemento' al nuevo div
    textoElemento.textContent = texto; // Asignar el texto proporcionado al contenido del div

    textoElemento.addEventListener('click', function () {

        if (textoElemento.style.textDecoration === 'line-through') {
            textoElemento.style.textDecoration = 'none';
        }else {
        textoElemento.style.textDecoration = 'line-through';
        }
    })

    flowchart.appendChild(textoElemento); // Agregar el nuevo div al diagrama
}

function agregartitulo(titulo) {
    const flowchart = document.getElementById('flowchart'); // Obtener el elemento con el ID 'flowchart'
    const tituloElemento = document.createElement('div'); // Crear un nuevo elemento div
    tituloElemento.className = 'titulo'; // Asignar la clase 'elemento' al nuevo div
    tituloElemento.textContent = titulo; // Asignar el texto proporcionado al contenido del div

    flowchart.appendChild(tituloElemento); // Agregar el nuevo div al diagrama
}

// Agregar elementos de ejemplo al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    
    agregartitulo('1. Fundamentos de Programación');
    agregartexto('Variables');
    
    agregartitulo('1. Fundamentos de la Web');
    agregartexto('Conceptos básicos de la web');
    agregartexto('Funcionamiento de la web');
    agregartexto('Modelo cliente-servidor');
    agregartexto('Protocolos HTTP y HTTPS');
    agregartexto('URLs');
    
    agregartitulo('2. Estructura Básica de HTML');
    agregartexto('Documento HTML');
    agregartexto('Etiqueta <html>');
    agregartexto('Etiqueta <head>');
    agregartexto('Etiqueta <body>.');
    agregartexto('Etiquetas HTML básicas <h1>, <p>, <div>, <span>, <a>, <img>, <ul>, <li>, <table>');
    
    agregartitulo('3. Semántica HTML');
    agregartexto('Importancia de la semántica');
    agregartexto('SEO');
    agregartexto('Elementos semánticos como <header>, <nav>, <main>, <section>, <article>, <footer>');
    
    agregartitulo('4. Formularios HTML');
    agregartexto('Creación de formularios con <form>, <input>, <textarea>, <select>, <button>');
    agregartexto('Validación de formularios utilizando atributos HTML');
    agregartexto('Validación de formularios utilizando atributos JavaScript');
    
    agregartitulo('5. Multimedia en HTML');
    agregartexto('Inserción de imágenes con <img>');
    agregartexto('Inserción de Multimedia con <audio> y <video>');
    
    agregartitulo('6. Tablas y Listas');
    agregartexto('Tablas con <table>, <tr>, <td>, <th>.');
    agregartexto('Listas con <ul>, <ol>, <li>');
    
    agregartitulo('7. Enlaces y Navegación');
    agregartexto('Enlaces con <a>compresión de los atributos como href, target, etc.');
    agregartexto('Menús de navegación');
    
    agregartitulo('8. Integración con CSS');
    agregartexto('Enlace de archivos CSS externos con documentos HTML');
    agregartexto('Aplicación de estilos CSS a elementos HTML.');
    agregartexto('Selectores CSS');
    
    agregartitulo('9. Buenas Prácticas y Accesibilidad');
    agregartexto('Accesibilidad web');
    agregartexto('Validación de HTML');
    
    agregartitulo('10. Herramientas y Frameworks');
    agregartexto('Editores de código como Visual Studio Code, Sublime Text, Atom, entre otros.');
    agregartexto('Frameworks CSS como Bootstrap o Foundation');
});