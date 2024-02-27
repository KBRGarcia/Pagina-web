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
    
    agregartitulo('1. Fundamentos de CSS');
    agregartexto('Qué es CSS');
    agregartexto('Cómo se utiliza');
    agregartexto('Estructura de las reglas CSS');
    agregartexto('Selectores');
    agregartexto('Propiedades');
    agregartexto('Valores.');
    agregartexto('Enlace de archivos CSS externos');
    agregartexto('Incrustar CSS en HTML');
    agregartexto('Estilos inline.');
    agregartexto('Herencia');
    agregartexto('Cascada');
    
    agregartitulo('2. Selectores CSS');
    agregartexto('Selectores simples: tipo, clase, ID y atributo.');
    agregartexto('Selectores combinados');
    agregartexto('Selectores de pseudo-clase');
    agregartexto('Selectores de pseudo-elemento');
    
    agregartitulo('3. Modelo de Caja y Diseño');
    agregartexto('Modelo de caja: padding, border y margin');
    agregartexto('Posicionamiento: static, relative, absolute y fixed');
    agregartexto('Diseño flexbox');
    agregartexto('Diseño de cajas de rejilla');
    
    agregartitulo('4. Tipografía y Colores');
    agregartexto('Tipografía: font-family, font-size, font-weight');
    agregartexto('Colores: RGB, RGBA, HSL y nombres de colores.');
    agregartexto('Estilos de texto: text-decoration, text-align, text-transform y text-shadow');
    
    agregartitulo('5. Diseño Responsivo');
    agregartexto('Conceptos de diseño responsivo');
    agregartexto('Media queries');
    agregartexto('Unidades relativas: em, rem y %');
    
    agregartitulo('6. Animaciones y Transiciones');
    agregartexto('Transiciones CSS');
    agregartexto('Keyframes');
    agregartexto('Efectos especiales: rotate, scale, translate y skew');
    
    agregartitulo('7. Flexibilidad y Reutilización');
    agregartexto('Variables CSS');
    agregartexto('Mixins: Sass y Less');
    agregartexto('Modularidad y escalabilidad CSS');
    
    agregartitulo('8. Optimización y Buenas Prácticas:');
    agregartexto('Rendimiento');
    agregartexto('Clases descriptivos');
    agregartexto('Minimización de selectores');
    agregartexto('Reducción de la repetición de código');
});