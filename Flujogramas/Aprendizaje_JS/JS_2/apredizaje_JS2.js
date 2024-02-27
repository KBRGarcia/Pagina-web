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

    tituloElemento.addEventListener('click', function () {

        if (tituloElemento.style.textDecoration === 'line-through') {
            tituloElemento.style.textDecoration = 'none';
        }else {
        tituloElemento.style.textDecoration = 'line-through';
        }
    })

    flowchart.appendChild(tituloElemento); // Agregar el nuevo div al diagrama
}

function agregarsupertitulo(supertitulo) {
    const flowchart = document.getElementById('flowchart'); // Obtener el elemento con el ID 'flowchart'
    const supertituloElemento = document.createElement('div'); // Crear un nuevo elemento div
    supertituloElemento.className = 'supertitulo'; // Asignar la clase 'elemento' al nuevo div
    supertituloElemento.textContent = supertitulo; // Asignar el texto proporcionado al contenido del div

    flowchart.appendChild(supertituloElemento); // Agregar el nuevo div al diagrama
}

// Agregar elementos de ejemplo al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    agregarsupertitulo('Fundamentos Básicos');
    agregartitulo('Sintaxis Básica');
    agregartexto('Variables y tipos de datos.');
    agregartexto('Operadores y expresiones.');
    agregartexto('Estructuras de control (if, else, switch, bucles).');

    agregartitulo('Funciones');
    agregartexto('Declaración y expresión de funciones.');
    agregartexto('Ámbito (scope) y cierre léxico.');
    agregartexto('Funciones de orden superior y devolución de funciones.');

    agregartitulo('Objetos y Tipos de Datos');
    agregartexto('Objetos y propiedades.');
    agregartexto('Arrays y métodos de array.');
    agregartexto('Strings y métodos de string.');

    agregartitulo('DOM (Document Object Model)');
    agregartexto('Manipulación del DOM.');
    agregartexto('Eventos y manejo de eventos.');

    agregarsupertitulo('Programación Asíncrona');
    agregartitulo('Promesas');
    agregartexto('Creación y manejo de promesas.');
    agregartexto('Composición de promesas y manejo de errores.');

    agregartitulo('Async/Await');
    agregartexto('Manejo de funciones asíncronas y await.');

    agregartitulo('Callbacks y Event Loop');
    agregartexto('Comprensión del modelo de ejecución asíncrona en JavaScript.');

    agregarsupertitulo('Programación Orientada a Objetos (OOP)');
    agregartitulo('Prototipos');
    agregartexto('Herencia prototípica.');

    agregartitulo('Clases');
    agregartexto('Sintaxis de clases en ES6+.');
    agregartexto('Herencia de clases.');

    agregarsupertitulo('ECMAScript 6 y Versiones Posteriores');
    agregartitulo('Arrow Functions');
    agregartexto('Uso y ventajas.');

    agregartitulo('Destructuring');
    agregartexto('Descomposición de objetos y arrays.');

    agregartitulo('Let y Const');
    agregartexto('Ámbito de bloque.');

    agregartitulo('Spread and Rest Operator');
    agregartexto('Utilización en arrays y objetos.');

    agregartitulo('Modules');
    agregartexto('Organización de código utilizando módulos.');

    agregartitulo('Map, Set, WeakMap, WeakSet');
    agregartexto('Estructuras de datos modernas.');

    agregarsupertitulo('Desarrollo Frontend');
    agregartitulo('React');
    agregartexto('Componentes y props.');
    agregartexto('Estado y ciclo de vida.');
    agregartexto('Manejo de rutas, gestión de estado global (Context o Redux).');

    agregartitulo('Vue.js o Angular');
    agregartexto('Si decides explorar otros frameworks.');

    agregarsupertitulo('Desarrollo Backend');
    agregartexto('Node.js y Express.js');
    agregartexto('Construcción de servidores y API RESTful.');

    agregartitulo('RESTful APIs');
    agregartexto('Principios y buenas prácticas.');

    agregartitulo('GraphQL');
    agregartexto('Introducción y comparación con REST.');

    agregarsupertitulo('Pruebas y Depuración');
    agregartitulo('Jest o Mocha');
    agregartexto('Frameworks de pruebas.');
    agregartexto('Pruebas unitarias y de integración.');

    agregartitulo('Herramientas de Desarrollo');
    agregartexto('Uso efectivo de devtools y entornos de depuración.');

    agregarsupertitulo('Seguridad y Rendimiento');
    agregartitulo('Seguridad en Aplicaciones Web');
    agregartexto('Protección contra vulnerabilidades comunes (XSS, CSRF).');

    agregartitulo('Optimización del Rendimiento');
    agregartexto('Estrategias de carga asíncrona, optimización de imágenes, caché, etc.');

    agregarsupertitulo('Avanzado');
    agregartitulo('WebSockets');
    agregartexto('Comunicación bidireccional.');

    agregartitulo('Service Workers');
    agregartexto('Creación de aplicaciones web progresivas (PWA).');

    agregartitulo('Principios de Diseño de Software');
    agregartexto('SOLID, DRY, KISS, etc.');

    agregartitulo('Patrones de Diseño');
   agregartexto(' MVC, Observer, Singleton, etc.');

    agregartitulo('Testing End-to-End');
    agregartexto('Selenium, Cypress u otras herramientas.');

    agregartitulo('Despliegue y Gestión de Versiones');
    agregartexto('Uso de herramientas como Git, Docker y CI/CD.');

});