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
    agregartexto('Tipos de datos');
    agregartexto('Operadores y estructuras de control');
    agregartexto('Definición de funciones');
    agregartexto('Manejo de excepciones');
    agregartexto('Listas');
    agregartexto('Tuplas');
    agregartexto('Conjuntos y diccionarios en Phyton');
    agregartexto('Definir y llamar funciones');
    agregartexto('Parámetros de función');
    agregartexto('Valores de retorno de las variables');
    agregartexto('Alcance de las variables');
    agregartexto('Clases');
    agregartexto('Objetos');
    agregartexto('Herencia');
    agregartexto('Polimorfismo');
    agregartexto('Encapsulamiento.');
    
    agregartitulo('2. Manipulación de Archivos y Entrada/Salida');
    agregartexto('Abrir, leer y escribir archivos');
    agregartexto('Manejo de excepciones');
    agregartexto('Manejo de errores para escribir código robusto y resistente a fallos.');
    agregartexto('Entrada/salida de datos del teclado y la consola.');
    
    agregartitulo('3. Librerías Estándar');
    agregartexto('Librería os');
    agregartexto('Librería sys');
    agregartexto('Librería datetime');
    agregartexto('Librería random');
    agregartexto('Librería math');
    
    agregartitulo('4. Desarrollo Web');
    agregartexto('Framework de desarrollo web Flask');
    agregartexto('Framework de desarrollo web Django');
    agregartexto('Routing con Flask o Django');
    agregartexto('Templates con Flask o Django');
    agregartexto('Modelos y vistas con Flask o Django');
    agregartexto('Conección a una base de datos');
    agregartexto('Realizar consultas');
    agregartexto('Manipular datos utilizando un ORM (Object-Relational Mapping) como SQLAlchemy.');
    
    agregartitulo('5. Análisis de Datos');
    agregartexto('Biblioteca Pandas');
    agregartexto('Biblioteca Numpy');
    agregartexto('Biblioteca Matplotlib');
    agregartexto('Biblioteca Seaborn');
    
    agregartitulo('6. Machine Learning e Inteligencia Artificial');
    agregartexto('Scikit-learn');
    agregartexto('TensorFlow');
    agregartexto('PyTorch');
    
    agregartitulo('7. Desarrollo de Aplicaciones Desktop');
    agregartexto('Tkinter');
    agregartexto('PyQt');
    
    agregartitulo('8. Testing y Depuración');
    agregartexto('Frameworks unittest');
    agregartexto('Frameworks pytest');
    
    agregartitulo('9. Desarrollo de Aplicaciones Escalables y Seguras');
    agregartexto('Arquitecturas de aplicación');
    agregartexto('Diseño y arquitecturas de aplicación para construir aplicaciones escalables y mantenibles');
    agregartexto('Seguridad de aplicaciones');
    
    agregartitulo('10. Optimización y Rendimiento');
    agregartexto('Optimización de código');
    agregartexto('Rendimiento de código ');
    agregartexto('Mejorar de la eficiencia y velocidad de aplicaciones');
   
    agregartitulo('11. Despliegue y Mantenimiento');
    agregartexto('Configuración de entornos de producción');
    agregartexto('Monitoreo y mantenimiento');
});