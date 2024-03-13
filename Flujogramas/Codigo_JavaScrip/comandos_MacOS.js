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
     
    agregartitulo('Lista los archivos y directorios en el directorio actual.');
    agregartexto('ls');
    
    agregartitulo('Cambia el directorio de trabajo.');
    agregartexto('cd');

    agregartitulo('Muestra el directorio de trabajo actual.');
    agregartexto('pwd');

    agregartitulo('Crea un nuevo directorio.');
    agregartexto('mkdir');

    agregartitulo('Crea un nuevo archivo vacío o actualiza la fecha de acceso y modificación de un archivo existente.');
    agregartexto('touch');

    agregartitulo('Elimina archivos o directorios.');
    agregartexto('rm');

    agregartitulo('Copia archivos y directorios.');
    agregartexto('cp');

    agregartitulo('Mueve o renombra archivos y directorios.');
    agregartexto('mv');

    agregartitulo('Concatena y muestra contenido de archivos.');
    agregartexto('cat');

    agregartitulo('Muestra el contenido de un archivo página por página.');
    agregartexto('more');

    agregartitulo('Muestra el contenido de un archivo de manera interactiva, permitiendo desplazarse hacia arriba y hacia abajo.');
    agregartexto('less');

    agregartitulo('Busca patrones en archivos.');
    agregartexto('grep');

    agregartitulo('Busca archivos y directorios.');
    agregartexto('find');

    agregartitulo('Cambia los permisos de archivos y directorios.');
    agregartexto('chmod');

    agregartitulo('Cambia el propietario y el grupo de archivos y directorios.');
    agregartexto('chown');

    agregartitulo('Muestra los procesos en ejecución.');
    agregartexto('ps');

    agregartitulo('Envía una señal a un proceso para finalizarlo.');
    agregartexto('kill');

    agregartitulo('Muestra información sobre los procesos y su uso de recursos en tiempo real.');
    agregartexto('top');

    agregartitulo('Ejecuta un comando con privilegios de superusuario.');
    agregartexto('sudo');

    agregartitulo('Muestra el espacio en disco disponible en los sistemas de archivos.');
    agregartexto('df');

    agregartitulo('Crea, modifica y extrae archivos comprimidos en formato tar.');
    agregartexto('tar');

    agregartitulo('Comprime o descomprime archivos utilizando el algoritmo de compresión gzip.');
    agregartexto('gzip');

    agregartitulo('Descomprime archivos comprimidos con gzip.');
    agregartexto('gunzip');

    agregartitulo('Crea archivos comprimidos en formato zip.');
    agregartexto('zip');

    agregartitulo('Extrae archivos de un archivo comprimido en formato zip.');
    agregartexto('unzip');

    agregartitulo('Permite transferir datos desde o hacia un servidor utilizando diferentes protocolos.');
    agregartexto('curl');

    agregartitulo('Conecta a un servidor remoto utilizando el protocolo SSH.');
    agregartexto('ssh');

    agregartitulo('Copia archivos de forma segura entre sistemas a través de SSH.');
    agregartexto('scp');

    agregartitulo('Sincroniza archivos y directorios entre sistemas de forma eficiente.');
    agregartexto('rsync');

    agregartitulo('Envía paquetes ICMP a un host para verificar su accesibilidad y tiempo de respuesta.');
    agregartexto('ping');

    agregartitulo('Muestra la ruta que siguen los paquetes para llegar a un host específico.');
    agregartexto('traceroute');

    agregartitulo('Obtiene información sobre un nombre de dominio o una dirección IP desde una base de datos Whois.');
    agregartexto('whois');

    agregartitulo('Muestra o configura el nombre del sistema.');
    agregartexto('hostname');

    agregartitulo('Muestra el tiempo que ha estado encendido el sistema y carga promedio.');
    agregartexto('uptime');

    agregartitulo('Muestra o configura la fecha y la hora del sistema.');
    agregartexto('date');

    agregartitulo('Muestra un calendario del mes actual o de un mes específico.');
    agregartexto('cal');

    agregartitulo('Muestra el historial de comandos ejecutados anteriormente en la Terminal.');
    agregartexto('history');

    agregartitulo('Muestra texto en la salida estándar o redirige texto a un archivo.');
    agregartexto('echo');

    agregartitulo('Cuenta líneas, palabras y caracteres en un archivo.');
    agregartexto('wc');

    agregartitulo('Editor de texto en la Terminal para editar archivos de texto de manera sencilla.');
    agregartexto('nano');
    
    
});