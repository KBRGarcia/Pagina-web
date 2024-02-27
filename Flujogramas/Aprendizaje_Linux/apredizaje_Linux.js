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
    
    agregartitulo('1. Introducción a Linux:');
    agregartexto('Historia y filosofía de Linux.');
    agregartexto('Diferencias entre Linux y otros sistemas operativos.');
    agregartexto('Distribuciones Linux populares (Ubuntu, CentOS, Debian, etc.).');
    agregartexto('Instalación de una distribución Linux en un entorno virtual o dual boot.');

    agregartitulo('2. Fundamentos de la línea de comandos (CLI):');
    agregartexto('Uso básico de la terminal.');
    agregartexto('Navegación de archivos y directorios.');
    agregartexto('Manipulación de archivos y directorios (crear, eliminar, copiar, mover).');
    agregartexto('Gestión de permisos de archivos y directorios (chmod, chown).');
    agregartexto('Uso de comandos básicos (ls, cd, cp, mv, rm, mkdir, chmod, chown, etc.).');

    agregartitulo('3. Administración del sistema:');
    agregartexto('Usuarios y grupos: gestión de usuarios, creación y eliminación de usuarios, asignación de permisos.');
    agregartexto('Gestión de procesos: visualización, control y terminación de procesos (ps, top, kill, etc.).');
    agregartexto('Gestión de paquetes: instalación, actualización y eliminación de software utilizando el gestor de paquetes de la distribución (apt, yum, dnf, etc.).');
    agregartexto('Configuración de red: configuración de interfaces de red, resolución de nombres de dominio, configuración de IP estática y dinámica.');
    
    agregartitulo('4. Administración avanzada del sistema:');
    agregartexto('Gestión del sistema de archivos: montaje y desmontaje de sistemas de archivos, gestión de discos y particiones.');
    agregartexto('Configuración del sistema: personalización del entorno de shell, configuración de variables de entorno, gestión de servicios del sistema.');
    agregartexto('Automatización de tareas: uso de scripts de shell para automatizar tareas recurrentes.');
    agregartexto('Configuración de seguridad: configuración de firewall, configuración de SELinux, gestión de claves SSH.');
    
    agregartitulo('5. Redes y servicios de red:');
    agregartexto('Configuración de servicios de red: servidor SSH, servidor web (Apache, Nginx), servidor de bases de datos (MySQL, PostgreSQL).');
    agregartexto('Resolución de problemas de red: diagnóstico de problemas de conectividad, uso de herramientas de red (ping, traceroute, netstat, etc.).');
    agregartexto('Seguridad de red: configuración de cortafuegos, configuración de VPN, configuración de DNS.');
    
    agregartitulo('6. Virtualización y contenedores:');
    agregartexto('Virtualización: uso de herramientas de virtualización como VirtualBox, VMware o KVM.');
    agregartexto('Contenedores: introducción a Docker, creación y gestión de contenedores, uso de Docker Compose para administrar aplicaciones multi-contenedor.');
    
    agregartitulo('7. Monitorización y rendimiento del sistema:');
    agregartexto('Monitorización del sistema: uso de herramientas como top, htop, sar para monitorizar el rendimiento del sistema.');
    agregartexto('Optimización del rendimiento: ajuste de la configuración del sistema para mejorar el rendimiento y la eficiencia.');
    
    agregartitulo('8. Seguridad del sistema:');
    agregartexto('Seguridad del sistema: configuración de cortafuegos, configuración de SELinux, gestión de claves SSH, configuración de auditorías del sistema.');
   agregartexto('Gestión de vulnerabilidades: análisis de vulnerabilidades del sistema, aplicación de parches de seguridad, escaneo de seguridad.');
    
    agregartitulo('9. Resolución de problemas:');
    agregartexto('Técnicas de resolución de problemas: metodologías para identificar, diagnosticar y resolver problemas en sistemas Linux.');
    agregartexto('Uso de herramientas de diagnóstico: uso de herramientas de línea de comandos y GUI para diagnosticar problemas de sistema y red.');
    
    agregartitulo('10. Certificaciones Linux:');
    agregartexto('Considera obtener certificaciones reconocidas en Linux, como las certificaciones de Linux Professional Institute (LPIC) o las certificaciones de Red Hat (RHCSA, RHCE).');
    
});