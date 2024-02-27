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

    agregartitulo('1. Vue.js Fundamentals');
    agregartexto('Instalación y configuración de Vue.js');
    agregartexto('Directivas Vue (v-bind, v-if, v-for, etc.)');
    agregartexto('Interpolación y eventos');
    agregartexto('Componentes Vue');
    agregartexto('Props y eventos personalizados');
    agregartexto('Ciclo de vida del componente');

    agregartitulo('2. Vue CLI');
    agregartexto('Crear un nuevo proyecto con Vue CLI');
    agregartexto('Estructura de directorios recomendada');
    agregartexto('Desarrollo y producción');
    agregartexto('Personalización de configuraciones');

    agregartitulo('3. Componentes Avanzados');
    agregartexto('Slots y scoped slots');
    agregartexto('Comunicación entre componentes (props, eventos, emisor-subscriptor, Vuex)');
    agregartexto('Mixins');
    agregartexto('Renderización condicional y dinámica');

    agregartitulo('4. Routing con Vue Router');
    agregartexto('Instalación y configuración de Vue Router');
    agregartexto('Configuración de rutas');
    agregartexto('Navegación programática y declarativa');
    agregartexto('Rutas anidadas y rutas con parámetros');

    agregartitulo('5. Gestión del Estado con Vuex');
    agregartexto('Conceptos básicos de Vuex (store, state, mutations, actions, getters)');
    agregartexto('Configuración de Vuex en una aplicación Vue.js');
    agregartexto('Organización del estado');
    agregartexto('Uso de módulos para proyectos más grandes');

    agregartitulo('6. Optimización y Rendimiento');
    agregartexto('Lazy loading de componentes');
    agregartexto('Code splitting');
    agregartexto('Uso de directivas de renderización condicional');
    agregartexto('Estrategias de caché y memoización');

    agregartitulo('7. Pruebas Unitarias y End-to-End');
    agregartexto('Pruebas unitarias con Jest o Mocha');
    agregartexto('Pruebas de componentes Vue.js con Vue Test Utils');
    agregartexto('Pruebas end-to-end con herramientas como Cypress');

    agregartitulo('8. Despliegue y Mantenimiento');
    agregartexto('Estrategias de despliegue');
    agregartexto('Gestión de versiones y control de código fuente (Git)');
    agregartexto('Monitoreo y depuración en producción');
    agregartexto('Actualizaciones de seguridad y mantenimiento a largo plazo');
    
});