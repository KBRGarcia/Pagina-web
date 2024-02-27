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
    agregartitulo('1. Fundamentos de JavaScript');
    agregartexto('Variables, tipos de datos, operadores.');
    agregartexto('Estructuras de control: if, else, switch, bucles.');
    agregartexto('Funciones y su uso.');
    agregartexto('Objetos y Arrays.');

    agregartitulo('2. Trabajar con el DOM');
    agregartexto('Manipulación del DOM.');
    agregartexto('Selección de elementos.');
   agregartexto(' Modificación de contenido, estilos y atributos.');
    agregartexto('Creación y eliminación de elementos.');

    agregartitulo('3. Eventos en JavaScript');
    agregartexto('Asociar eventos a elementos del DOM.');
    agregartexto('Manejadores de eventos.');
    agregartexto('Eventos de ratón, teclado y formulario.');

    agregartitulo('4. AJAX y Fetch API');
    agregartexto('Realizar solicitudes HTTP asíncronas.');
    agregartexto('Trabajar con JSON y XML.');
    agregartexto('Promesas y manejo de respuestas.');

    agregartitulo('5. ES6 y Versiones Posteriores');
    agregartexto('Arrow functions.');
    agregartexto('Destructuring.');
    agregartexto('Let y Const.');
    agregartexto('Promesas y async/await.');

    agregartitulo('6. Patrones de Diseño en JavaScript');
    agregartexto('Módulos.');
    agregartexto('Constructor.');
    agregartexto('Singleton.');

    agregartitulo('7. Frameworks y Bibliotecas');
    agregartexto('Conoce al menos un framework como React, Angular o Vue.');
    agregartexto('Usa bibliotecas populares como jQuery.');

    agregartitulo('8. Herramientas de Desarrollo');
    agregartexto('Uso de herramientas de desarrollo como DevTools en el navegador.');
    agregartexto('Debugging.');

    agregartitulo('9. Testing en JavaScript');
    agregartexto('Unit testing con Jest o Mocha.');

    agregartitulo('10. Manejo de Errores');
    agregartexto('Try, catch, throw.');
    agregartexto('Manejo de errores asíncronos.');

    agregartitulo('11. Seguridad');
    agregartexto('Principios básicos de seguridad en JavaScript.');

    agregartitulo('12. Conceptos Avanzados');
    agregartexto('Closures.');
    agregartexto('Programación Orientada a Objetos en JavaScript.');
    agregartexto('Contexto y alcance.');

    agregartitulo('13. Proyecto Práctico');
    agregartexto('Aplica tus conocimientos en un proyecto real.');

    agregartitulo('14. Comunidad y Recursos');
    agregartexto('Participa en la comunidad, foros, y sigue blogs y podcasts.');
});