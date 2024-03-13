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
  
    agregartitulo('Descarga una imagen de Docker desde un repositorio público o privado.');
    agregartexto('docker pull <image_name>');
    

    agregartitulo('Ejecuta un contenedor basado en una imagen específica.');
    agregartexto('docker run <image_name>');
    
    agregartitulo('Muestra los contenedores en ejecución.');
    agregartexto('docker ps');
    
    agregartitulo('Muestra todos los contenedores, incluso los detenidos.');
    agregartexto('docker ps -a');
    
    agregartitulo('Detiene un contenedor en ejecución.');
    agregartexto('docker stop <container_id or container_name>');
    
    agregartitulo('Inicia un contenedor detenido.');
    agregartexto('docker start <container_id or container_name>');
    
    agregartitulo('Elimina un contenedor.');
    agregartexto('docker rm <container_id or container_name>');
    
    agregartitulo('Lista todas las imágenes de Docker disponibles localmente.');
    agregartexto('docker images');
    
    agregartitulo('Elimina una imagen de Docker.');
    agregartexto('docker rmi <image_name or image_id>');
    
    agregartitulo('Construye una imagen de Docker a partir de un Dockerfile.');
    agregartexto('docker build <path_to_Dockerfile>');
    
    agregartitulo('Construye y levanta servicios definidos en un archivo docker-compose.yml.');
    agregartexto('docker-compose up');
    
    agregartitulo('Detiene y elimina los servicios definidos en un archivo docker-compose.yml.');
    agregartexto('docker-compose down');
    
    agregartitulo('Ejecuta un comando dentro de un contenedor en ejecución.');
    agregartexto('docker exec -it <container_id or container_name> <command>');
    
    agregartitulo('Muestra información detallada sobre un contenedor.');
    agregartexto('docker inspect <container_id or container_name>');
    
    agregartitulo('Muestra los registros de salida de un contenedor.');
    agregartexto('docker logs <container_id or container_name>');
    
    agregartitulo('Lista las redes de Docker disponibles en el sistema.');
    agregartexto('docker network ls');
    
    agregartitulo('Crea una nueva red de Docker.');
    agregartexto('docker network create <network_name>');
    
    agregartitulo('Conecta un contenedor a una red específica.');
    agregartexto('docker network connect <network_name> <container_id or container_name>');
    
    agregartitulo('Lista los volúmenes de Docker disponibles en el sistema.');
    agregartexto('docker volume ls');
    
    agregartitulo('Crea un nuevo volumen de Docker.');
    agregartexto('docker volume create <volume_name>');
    
    agregartitulo('Elimina un volumen de Docker.');
    agregartexto('docker volume rm <volume_name>:');

    agregartitulo('Copia archivos entre el sistema local y un contenedor.');
    agregartexto('docker cp <local_file> <container_id>:<container_path>');


    agregartitulo('Construye servicios definidos en un archivo docker-compose.yml.');
    agregartexto('docker-compose build');
    
    agregartitulo('Construye y levanta servicios en segundo plano.');
    agregartexto('docker-compose up -d');
    
    agregartitulo('Detiene servicios definidos en un archivo docker-comp');
    agregartexto('docker-compose stop');
    
    agregartitulo('Reinicia servicios definidos en un archivo docker-compose.yml.');
    agregartexto('docker-compose restart');
    
    agregartitulo('Ejecuta un comando dentro de un servicio en ejecución.');
    agregartexto('docker-compose exec <service_name> <command>');
    
    agregartitulo('Muestra los registros de salida de un servicio.');
    agregartexto('docker-compose logs <service_name>');
    
    agregartitulo('Detiene y elimina servicios y volúmenes definidos en un archivo docker-compose.yml.');
    agregartexto('docker-compose down -v');
    
    agregartitulo('Muestra el uso de recursos de los contenedores en ejecución.');
    agregartexto('docker stats');
    
    agregartitulo('Limpia recursos no utilizados, como contenedores detenidos y redes no utilizadas.');
    agregartexto('docker system prune');
    
    agregartitulo('Inicializa un clúster de Docker Swarm en el nodo actual.');
    agregartexto('docker swarm init');
    
    agregartitulo('Une un nodo al clúster de Docker Swarm.');
    agregartexto('docker swarm join');
    
    agregartitulo('Lista los servicios en ejecución en un clúster de Docker Swarm.');
    agregartexto('docker service ls');
    
    agregartitulo('Crea un nuevo servicio en un clúster de Docker Swarm.');
    agregartexto('docker service create');
    
    agregartitulo('Escala el número de réplicas de un servicio en un clúster de Docker Swarm.');
    agregartexto('docker service scale');
    
    agregartitulo('Actualiza la configuración de un servicio en un clúster de Docker Swarm.');
    agregartexto('docker service update');
    
    agregartitulo('Despliega una aplicación definida en un archivo docker-compose.yml en un clúster de Docker Swarm.');
    agregartexto('docker stack deploy');
    
    agregartitulo('Lista los nodos en un clúster de Docker Swarm.');
    agregartexto('docker node ls');
    
    agregartitulo('Muestra información detallada sobre un nodo en un clúster de Docker Swarm.');
    agregartexto('docker node inspect');
    
    agregartitulo('Inicia sesión en un registro de Docker.');
    agregartexto('docker login');
    
    agregartitulo('Cierra sesión en un registro de Docker.');
    agregartexto('docker logout');
    
    agregartitulo('Etiqueta una imagen de Docker con un nuevo nombre y/o etiqueta.');
    agregartexto('docker tag <source_image>:<tag> <target_image>:<tag>');
    
    agregartitulo('Sube una imagen de Docker a un registro de Docker.');
    agregartexto('docker push <image_name>');
    
    agregartitulo('Descarga una imagen de Docker desde un registro específico.');
    agregartexto('docker pull <registry_url>/<image_name>:<tag>');
    
    agregartitulo('Construye una imagen de Docker y le asigna un nombre y etiqueta.');
    agregartexto('docker build -t <image_name>:<tag> <path_to_Dockerfile>');
    
    agregartitulo('Ejecuta un contenedor en segundo plano.');
    agregartexto('docker run -d <image_name>');
    
    agregartitulo('Ejecuta un comando interactivo dentro de un contenedor.');
    agregartexto('docker run -it <image_name> <command>');
    
    agregartitulo('Mapea un puerto del host al puerto del contenedor.');
    agregartexto('docker run -p <host_port>:<container_port> <image_name>');
    
    agregartitulo('Asigna un nombre específico a un contenedor al iniciarlo.');
    agregartexto('docker run --name <container_name> <image_name>');
    
    agregartitulo('Muestra información detallada sobre una imagen de Docker.');
    agregartexto('docker inspect <image_name or image_id>');
    
    agregartitulo('Muestra el historial de capas de una imagen de Docker.');
    agregartexto('docker history <image_name>');
    
    agregartitulo('Exporta el sistema de archivos de un contenedor como un archivo TAR.');
    agregartexto('docker export <container_id> > <file.tar>');
    
    agregartitulo('Importa un sistema de archivos exportado previamente como una imagen de Docker.');
    agregartexto('docker import <file.tar>');
    
    agregartitulo('Crea una nueva imagen a partir de un contenedor en ejecución.');
    agregartexto('docker commit <container_id> <new_image_name>');
    
    agregartitulo('Ejecuta un comando dentro de un contenedor en ejecución.');
    agregartexto('docker exec <container_id or container_name> <command>');
    
    agregartitulo('Pausa la ejecución de un contenedor.');
    agregartexto('docker pause <container_id or container_name>');
    
    agregartitulo('Reanuda la ejecución de un contenedor pausado.');
    agregartexto('docker unpause <container_id or container_name>');
    
    agregartitulo('Muestra el uso de recursos en tiempo real de un contenedor.');
    agregartexto('docker stats <container_id or container_name>');
    
    agregartitulo('Muestra los procesos en ejecución dentro de un contenedor.');
    agregartexto('docker top <container_id or container_name>');
    
    agregartitulo('Muestra eventos de Docker en tiempo real.');
    agregartexto('docker events');
    
    agregartitulo('Muestra el espacio utilizado y disponible en el sistema Docker.');
    agregartexto('docker system df');
    
    agregartitulo('Limpia todos los recursos no utilizados, incluidos los volúmenes.');
    agregartexto('docker system prune -a');
    
    agregartitulo('Busca imágenes de Docker en un registro.');
    agregartexto('docker search <term>');
    
    agregartitulo('Muestra los puertos mapeados de un contenedor.');
    agregartexto('docker port <container_id or container_name>');
    
    agregartitulo('Espera a que un contenedor finalice y muestra su código de salida.');
    agregartexto('docker wait <container_id or container_name>');
    
    agregartitulo('Muestra información sobre la versión de Docker instalada.');
    agregartexto('docker version');
    
    agregartitulo('Muestra detalles sobre una red de Docker.');
    agregartexto('docker network inspect <network_name>');
    
    agregartitulo('Desconecta un contenedor de una red.');
    agregartexto('docker network disconnect <network_name> <container_id or container_name>');
    
    agregartitulo('Muestra información detallada sobre un volumen de Docker.');
    agregartexto('docker volume inspect <volume_name>');
    
    agregartitulo('Elimina todos los volúmenes no utilizados.');
    agregartexto('docker volume prune');
    
    agregartitulo('Muestra los cambios en el sistema de archivos de un contenedor en comparación con su imagen base.');
    agregartexto('docker diff <container_id or container_name>');
    
    agregartitulo('Guarda una imagen de Docker en un archivo TAR.');
    agregartexto('docker save <image_name>:<tag> -o <file.tar>');
    
    agregartitulo('Carga una imagen de Docker desde un archivo TAR.');
    agregartexto('docker load -i <file.tar>');
    
    agregartitulo('Ejecuta un comando como un usuario específico dentro de un contenedor.');
    agregartexto('docker exec -u <user> <container_id or container_name> <command>');

    agregartitulo('Obtiene el estado de ejecución de un contenedor.');
    agregartexto("docker inspect --format='{{.State.Status}}' <container_id or container_name>");
    
    agregartitulo('Muestra solo los IDs de los contenedores en ejecución.');
    agregartexto('docker ps -q');
    
    agregartitulo('Elimina las imágenes no utilizadas.');
    agregartexto('docker image prune');
    
    agregartitulo('Crea un volumen de Docker con un nombre específico.');
    agregartexto('docker volume create --name <volume_name>');
    
    agregartitulo('Muestra los registros en tiempo real de los servicios definidos en un archivo docker-compose.yml.');
    agregartexto('docker-compose logs -f');
  
    
});