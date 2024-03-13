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

    agregartitulo('Muestra una lista de archivos y subdirectorios en el directorio actual.');
    agregartexto('dir');
    
    agregartitulo('Cambia el directorio actual.');
    agregartexto('cd');
    
    agregartitulo('Limpia la pantalla del símbolo del sistema.');
    agregartexto('cls');
    
    agregartitulo('Copia uno o más archivos de un lugar a otro.');
    agregartexto('copy');
    
    agregartitulo('Elimina uno o más archivos.');
    agregartexto('del');
    
    agregartitulo('Mueve archivos de un lugar a otro.');
    agregartexto('move');
    
    agregartitulo('Cambia el nombre de un archivo o directorio.');
    agregartexto('ren');
    
    agregartitulo('Crea un nuevo directorio.');
    agregartexto('mkdir');
    
    agregartitulo('Elimina un directorio.');
    agregartexto('rmdir');
    
    agregartitulo('Muestra el contenido de un archivo de texto.');
    agregartexto('type');
    
    agregartitulo('Muestra mensajes o activa/desactiva el eco de comandos.');
    agregartexto('echo');
    
    agregartitulo('Envía paquetes de datos a una dirección IP para probar la conectividad de red.');
    agregartexto('ping');
    
    agregartitulo('Muestra la configuración de red, incluyendo la dirección IP, la puerta de enlace y la máscara de subred.');
    agregartexto('ipconfig');
    
    agregartitulo('Muestra las conexiones de red, tablas de enrutamiento y estadísticas de interfaz.');
    agregartexto('netstat');
    
    agregartitulo('Muestra una lista de los procesos en ejecución.');
    agregartexto('tasklist');
    
    agregartitulo('Termina uno o más procesos.');
    agregartexto('taskkill');
    
    agregartitulo('Apaga o reinicia el sistema.');
    agregartexto('shutdown');
    
    agregartitulo('Muestra información sobre el sistema, incluyendo la versión de Windows y la configuración de hardware.');
    agregartexto('systeminfo');
    
    agregartitulo('Escanea y repara archivos de sistema corruptos.');
    agregartexto('sfc /scannow');
    
    agregartitulo('Comprueba y repara errores en el disco duro.');
    agregartexto('chkdsk');
    
    agregartitulo('Formatea un disco o partición.');
    agregartexto('format');
    
    agregartitulo('Copia archivos y directorios con más opciones que el comando "copy".');
    agregartexto('xcopy');
    
    agregartitulo('Busca una cadena de texto en archivos.');
    agregartexto('find');
    
    agregartitulo('Muestra o cambia los atributos de archivo.');
    agregartexto('attrib');
    
    agregartitulo('Gestiona discos, particiones y volúmenes.');
    agregartexto('diskpart');
    
    agregartitulo('Administra recursos de red (usuarios, grupos, impresoras, etc.).');
    agregartexto('net');
    
    agregartitulo('Asigna una letra de unidad a una ruta de acceso.');
    agregartexto('subst');
    
    agregartitulo('Muestra o modifica las asociaciones de extensiones de archivo.');
    agregartexto('assoc');
    
    agregartitulo('Muestra una estructura de directorios como un árbol.');
    agregartexto('tree');
    
    agregartitulo('Configura la administración de energía.');
    agregartexto('powercfg');
    
    agregartitulo('Muestra o cambia el cifrado de archivos y directorios en unidades NTFS.');
    agregartexto('cipher');
    
    agregartitulo('Abre el Administrador de tareas de Windows.');
    agregartexto('taskmgr');
    
    agregartitulo('Abre la Utilidad de Configuración del Sistema de Windows.');
    agregartexto('msconfig');
    
    agregartitulo('Abre el Bloc de notas.');
    agregartexto('notepad');
    
    agregartitulo('Abre el Editor del Registro de Windows.');
    agregartexto('regedit');
    
    agregartitulo('Apaga o reinicia el sistema.');
    agregartexto('shutdown');
    
    agregartitulo('Abre la calculadora de Windows.');
    agregartexto('calc');
    
    agregartitulo('Muestra el nombre de host del equipo.');
    agregartexto('hostname');
    
    agregartitulo('Configura parámetros de red.');
    agregartexto('netsh');
    
    agregartitulo('Rastrea la ruta que toman los paquetes de datos hasta su destino.');
    agregartexto('tracert');
    
    agregartitulo('Muestra o modifica las asociaciones de extensiones de archivo.');
    agregartexto('assoc');
    
    agregartitulo('Muestra o modifica el chequeo de disco al inicio del sistema.');
    agregartexto('chkntfs');
    
    agregartitulo('Cambia los colores del fondo y del texto en la ventana del símbolo del sistema.');
    agregartexto('color');
    
    agregartitulo('Comprime o descomprime archivos en NTFS.');
    agregartexto('compact');
    
    agregartitulo('Convierte volúmenes FAT a NTFS.');
    agregartexto('convert');
    
    agregartitulo('Muestra o establece la fecha del sistema.');
    agregartexto('date');
    
    agregartitulo('Desfragmenta el disco duro.');
    agregartexto('defrag');
    
    agregartitulo('Muestra una lista de los controladores instalados en el sistema.');
    agregartexto('driverquery');
    
    agregartitulo('Muestra el nombre de host del equipo.');
    agregartexto('hostname');
    
    agregartitulo('Cierra la sesión actual del usuario.');
    agregartexto('logoff');
    
    agregartitulo('Configura dispositivos de sistema.');
    agregartexto('mode');
    
    agregartitulo('Muestra las conexiones de red, tablas de enrutamiento y estadísticas de interfaz.');
    agregartexto('netstat');
    
    agregartitulo('Muestra o establece la variable de entorno de ruta de acceso.');
    agregartexto('path');
    
    agregartitulo('Detiene temporalmente la ejecución de un script por un período de tiempo.');
    agregartexto('pause');
    
    agregartitulo('Imprime un archivo de texto en una impresora.');
    agregartexto('print');
    
    agregartitulo('Personaliza el texto del indicador del símbolo del sistema.');
    agregartexto('prompt');
    
    agregartitulo('Muestra la información de los usuarios que están conectados al sistema.');
    agregartexto('quser');
    
    agregartitulo('Realiza operaciones en el Registro de Windows.');
    agregartexto('reg');
    
    agregartitulo('Reemplaza archivos.');
    agregartexto('replace');
    
    agregartitulo('Elimina un directorio y su contenido de forma recursiva.');
    agregartexto('rmdir /s');
    
    agregartitulo('Muestra, establece o elimina variables de entorno.');
    agregartexto('set');
    
    agregartitulo('Establece variables de entorno persistentes.');
    agregartexto('setx');
    
    agregartitulo('Apaga o reinicia el sistema.');
    agregartexto('shutdown');
    
    agregartitulo('Ordena la salida de un archivo de texto.');
    agregartexto('sort');
    
    agregartitulo('Asigna una letra de unidad a una ruta de acceso.');
    agregartexto('subst');
    
    agregartitulo('Muestra información sobre el sistema, incluyendo la versión de Windows y la configuración de hardware.');
    agregartexto('systeminfo');
    
    agregartitulo('Muestra o establece la hora del sistema.');
    agregartexto('time');
    
    agregartitulo('Espera un período de tiempo antes de continuar con la ejecución de un script.');
    agregartexto('timeout');
    
    agregartitulo('Establece el título de la ventana del símbolo del sistema.');
    agregartexto('title');
    
    agregartitulo('Rastrea la ruta que toman los paquetes de datos hasta su destino.');
    agregartexto('tracert');
    
    agregartitulo('Muestra el contenido de un archivo de texto.');
    agregartexto('type');
    
    agregartitulo('Muestra la versión de Windows.');
    agregartexto('ver');
    
    agregartitulo('Muestra el nombre y el número de serie del volumen del disco.');
    agregartexto('vol');
    
    agregartitulo('Muestra información sobre el usuario y el grupo de seguridad actuales.');
    agregartexto('whoami');
    
    agregartitulo('Ejecuta comandos específicos de Instrumental de Administración de Windows (WMI).');
    agregartexto('wmic');
    
    agregartitulo('Copia archivos y directorios con más opciones que el comando "copy".');
    agregartexto('xcopy');
    
    agregartitulo('Establece o elimina el control de interrupción en un script por lotes.');
    agregartexto('break');
    
    agregartitulo('Elimina un directorio y su contenido de forma recursiva (similar a rmdir /s).');
    agregartexto('deltree');
    
    agregartitulo('Expande uno o más archivos comprimidos.');
    agregartexto('expand');
    
    agregartitulo('Proporciona información sobre los comandos de Windows.');
    agregartexto('help');
    
});