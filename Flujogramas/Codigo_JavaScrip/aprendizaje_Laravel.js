// Puedes usar una librería de diagramas de flujo como JointJS o mxGraph

// En este ejemplo, se utiliza una función simple para agregar elementos al diagrama
function agregartexto(texto) {
    const flowchart = document.getElementById('flowchart'); // Obtener el elemento con el ID 'flowchart'
    const textoElemento = document.createElement('div'); // Crear un nuevo elemento div
    textoElemento.className = 'texto'; // Asignar la clase 'elemento' al nuevo div
    textoElemento.textContent = texto; // Asignar el texto proporcionado al contenido del div

    // el evento click para tachar el texto
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

    // el evento click para tachar el titulo
    tituloElemento.addEventListener('click', function () {

        if (tituloElemento.style.textDecoration === 'line-through') {
            tituloElemento.style.textDecoration = 'none';
        }else {
            tituloElemento.style.textDecoration = 'line-through';
        }
    })

    flowchart.appendChild(tituloElemento); // Agregar el nuevo div al diagrama
}

// Agregar elementos de ejemplo al cargar la página
document.addEventListener('DOMContentLoaded', function () {

    agregartitulo('');
    agregartexto('');

});