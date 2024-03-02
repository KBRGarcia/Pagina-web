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
    
    agregartitulo('Cambia el directorio actual.');
    agregartexto('cd');
    
    agregartitulo('Muestra la ruta del directorio actual.');
    agregartexto('pwd');
    
    agregartitulo('Crea un nuevo directorio.');
    agregartexto('mkdir');
    
    agregartitulo('Elimina archivos o directorios.');
    agregartexto('rm');
    
    agregartitulo('Copia archivos y directorios.');
    agregartexto('cp');
    
    agregartitulo('Mueve o renombra archivos y directorios.');
    agregartexto('mv');
    
    agregartitulo('Crea un archivo vacío o actualiza su fecha de modificación.');
    agregartexto('touch');
    
    agregartitulo('Muestra el contenido de un archivo.');
    agregartexto('cat');
    
    agregartitulo('Busca patrones en archivos.');
    agregartexto('grep');
    
    agregartitulo('Editor de texto en la terminal.');
    agregartexto('nano');
    
    agregartitulo('Editores de texto avanzados en la terminal.');
    agregartexto('vi o vim');
    
    agregartitulo('Cambia los permisos de archivos y directorios.');
    agregartexto('chmod');
    
    agregartitulo('Cambia el propietario y el grupo de archivos y directorios.');
    agregartexto('chown');
    
    agregartitulo('Ejecuta comandos con privilegios de superusuario.');
    agregartexto('sudo');
    
    agregartitulo('Gestor de paquetes para instalar, actualizar y eliminar software.');
    agregartexto('apt-get');
    
    agregartitulo('Gestiona paquetes de software a nivel de sistema.');
    agregartexto('dpkg');
    
    agregartitulo('Muestra información de metadatos de paquetes.');
    agregartexto('apt-cache');
    
    agregartitulo('Muestra los procesos en ejecución.');
    agregartexto('ps');
    
    agregartitulo('Termina procesos.');
    agregartexto('kill');
    
    agregartitulo('Muestra una lista de procesos en tiempo real y su uso de recursos.');
    agregartexto('top');
    
    agregartitulo('Muestra el espacio disponible en los sistemas de archivos.');
    agregartexto('df');
    
    agregartitulo('Muestra el uso del espacio en disco de los archivos y directorios.');
    agregartexto('du');
    
    agregartitulo('Gestiona archivos comprimidos en formato tar.');
    agregartexto('tar');
    
    agregartitulo('Comprime o descomprime archivos utilizando el formato gzip.');
    agregartexto('gzip');
    
    agregartitulo('Descarga archivos desde la web.');
    agregartexto('wget');
    
    agregartitulo('Inicia una sesión segura de shell remota.');
    agregartexto('ssh');
    
    agregartitulo('Copia archivos de forma segura entre hosts a través de SSH.');
    agregartexto('scp');
    
    agregartitulo('Muestra y configura interfaces de red.');
    agregartexto('ifconfig');
    
    agregartitulo('Prueba la conectividad de red con un host remoto.');
    agregartexto('ping');
    
    agregartitulo('Muestra estadísticas de red, conexiones abiertas y enrutamiento.');
    agregartexto('netstat');
    
    agregartitulo('Muestra la ruta tomada por los paquetes hacia un host remoto.');
    agregartexto('traceroute');
    
    agregartitulo('Muestra o establece el nombre del host del sistema.');
    agregartexto('hostname');
    
    agregartitulo('Muestra el tiempo transcurrido desde que se inició el sistema y la carga promedio.');
    agregartexto('uptime');
    
    agregartitulo('Muestra o configura la fecha y la hora del sistema.');
    agregartexto('date');
    
    agregartitulo('Muestra el calendario.');
    agregartexto('cal');
    
    agregartitulo('Muestra el historial de comandos ejecutados anteriormente.');
    agregartexto('history');
    
    agregartitulo('Muestra el manual de un comando.');
    agregartexto('man');
    
    agregartitulo('Muestra texto en la terminal o redirecciona texto a archivos.');
    agregartexto('echo');
    
    agregartitulo('Busca archivos y directorios en un sistema de archivos.');
    agregartexto('find');
    
});