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

    agregartitulo('Inicializa un nuevo repositorio Git en un directorio.');
    agregartexto('git init');

    agregartitulo('Clona un repositorio Git existente desde una URL remota hacia tu sistema local.');
    agregartexto('git clone [URL]');

    agregartitulo('Añade archivos al área de preparación (staging) para ser incluidos en el próximo commit.');
    agregartexto('git add [archivos]');

    agregartitulo('Realiza un commit con los archivos previamente añadidos al área de preparación, incluyendo un mensaje descriptivo.');
    agregartexto('git commit -m "[mensaje]"');

    agregartitulo('Muestra el estado actual del repositorio, incluyendo archivos modificados, añadidos o eliminados, así como archivos en el área de preparación.');
    agregartexto('git status');

    agregartitulo('Muestra un historial de commits, incluyendo el autor, la fecha y el mensaje de cada commit.');
    agregartexto('git log');

    agregartitulo('Lista todas las ramas en el repositorio. Agregando un nombre de rama después del comando, puedes crear una nueva rama.');
    agregartexto('git branch');

    agregartitulo('Cambia a la rama especificada.');
    agregartexto('git checkout [rama]');

    agregartitulo('Fusiona los cambios de una rama con la rama actual.');
    agregartexto('git merge [rama]');

    agregartitulo('Descarga los cambios desde el repositorio remoto y los fusiona con tu rama actual.');
    agregartexto('git pull');

    agregartitulo('Sube los commits locales al repositorio remoto.');
    agregartexto('git push');

    agregartitulo('Muestra las URL de los repositorios remotos asociados con tu repositorio local.');
    agregartexto('git remote -v');

    agregartitulo('Muestra las diferencias entre los archivos en el directorio de trabajo y los archivos en el área de preparación.');
    agregartexto('git diff');

    agregartitulo('Quita un archivo del área de preparación, pero conserva los cambios locales.');
    agregartexto('git reset [archivo]');

    agregartitulo('Restablece el estado del directorio de trabajo y del área de preparación a la última confirmación.');
    agregartexto('git reset --hard');

    agregartitulo('Crea un nuevo tag para marcar un punto específico en la historia del repositorio.');
    agregartexto('git tag [nombre]');

    agregartitulo('Descarga los cambios desde el repositorio remoto, pero no los fusiona con tu rama actual.');
    agregartexto('git fetch');

    agregartitulo('Agrega un nuevo repositorio remoto con un nombre específico.');
    agregartexto('git remote add [nombre] [URL]');

    agregartitulo('Elimina un repositorio remoto asociado.');
    agregartexto('git remote rm [nombre]');

    agregartitulo('Elimina un archivo del repositorio y del sistema de archivos.');
    agregartexto('git rm [archivo]');

    agregartitulo('Cambia el nombre de un archivo en el repositorio.');
    agregartexto('git mv [archivo_original] [archivo_nuevo]');

    agregartitulo('Muestra información sobre cualquier objeto Git, como un commit, un tag o un commit específico.');
    agregartexto('git show [objeto]');

    agregartitulo('Guarda temporalmente los cambios locales en una pila de cambios (stash) para que puedas trabajar en otra cosa.');
    agregartexto('git stash');

    agregartitulo('Aplica el cambio más reciente guardado en la pila de cambios al directorio de trabajo.');
    agregartexto('git stash apply');

    agregartitulo('Lista todos los cambios guardados en la pila de cambios.');
    agregartexto('git stash list');

    agregartitulo('Elimina el cambio más reciente guardado en la pila de cambios.');
    agregartexto('git stash drop');

    agregartitulo('Aplica los cambios de un commit específico a la rama actual.');
    agregartexto('git cherry-pick [commit]');

    agregartitulo('Reorganiza la historia del commit para que la rama actual se derive de la rama especificada.');
    agregartexto('git rebase [rama]');

    agregartitulo('Ayuda a encontrar el commit que introdujo un bug mediante la búsqueda binaria.');
    agregartexto('git bisect');

    agregartitulo('Busca ocurrencias de una palabra clave en los archivos del repositorio.');
    agregartexto('git grep [palabra_clave]');

    agregartitulo('Muestra quién modificó por última vez cada línea de un archivo y en qué commit.');
    agregartexto('git blame [archivo]');

    agregartitulo('Permite configurar opciones de Git, como el nombre de usuario, el correo electrónico y alias de comandos.');
    agregartexto('git config');

    agregartitulo('Muestra un historial de commits de manera gráfica y resumida.');
    agregartexto('git log --graph --oneline --decorate');

    agregartitulo('Muestra las ramas y sus últimos commits.');
    agregartexto('git show-branch');

    agregartitulo('Actualiza la información de los repositorios remotos.');
    agregartexto('git remote update');

    agregartitulo('Crea un archivo ZIP de una rama específica.');
    agregartexto('git archive [rama] --format=zip --output=[archivo.zip]');

    agregartitulo('Agrega un submódulo al repositorio.');
    agregartexto('git submodule add [URL]');

    agregartitulo('Clona y actualiza todos los submódulos del repositorio.');
    agregartexto('git submodule update --init --recursive');

    agregartitulo('Muestra los archivos no rastreados que serán eliminados del directorio de trabajo.');
    agregartexto('git clean -n');

    agregartitulo('Ayuda a encontrar un commit específico que introdujo un problema al usar una búsqueda binaria.');
    agregartexto('git bisect');

    agregartitulo('Establece el nombre de usuario global para los commits.');
    agregartexto('git config --global user.name "[nombre]"');

    agregartitulo('Establece el correo electrónico global para los commits.');
    agregartexto('git config --global user.email "[email]"');

    agregartitulo('Crea un alias para un comando Git específico.');
    agregartexto('git config --global alias.[alias] "[comando]"');

    agregartitulo('Descarga los cambios de una rama específica de un repositorio remoto.');
    agregartexto('git fetch [repositorio] [rama]');

    agregartitulo('Elimina una rama local después de haber fusionado sus cambios.');
    agregartexto('git branch -d [rama]');

    agregartitulo('Forzosamente elimina una rama local, incluso si no se han fusionado los cambios.');
    agregartexto('git branch -D [rama]');

    agregartitulo('Crea y cambia a una nueva rama en una sola operación.');
    agregartexto('git checkout -b [nueva_rama]');

    agregartitulo('Muestra las diferencias entre dos ramas.');
    agregartexto('git diff [rama1] [rama2]');

    agregartitulo('Muestra las diferencias entre los archivos en el área de preparación y el último commit.');
    agregartexto('git diff --staged');

    agregartitulo('Filtra el historial de commits por autor.');
    agregartexto('git log --author="[autor]"');

    agregartitulo('Muestra los commits realizados desde una fecha específica.');
    agregartexto('git log --since="[fecha]"');

    agregartitulo('Muestra los commits realizados hasta una fecha específica.');
    agregartexto('git log --until="[fecha]"');

    agregartitulo('Filtra el historial de commits por una palabra clave en el mensaje del commit.');
    agregartexto('git log --grep="[palabra_clave]"');

    agregartitulo('Muestra información detallada sobre un repositorio remoto.');
    agregartexto('git remote show [nombre_repositorio]');

    agregartitulo('Elimina las referencias locales a ramas remotas eliminadas.');
    agregartexto('git remote prune origin');

    agregartitulo('Crea un nuevo tag anotado con un mensaje.');
    agregartexto('git tag -a [nombre] -m "[mensaje]"');

    agregartitulo('Elimina un tag local.');
    agregartexto('git tag -d [nombre]');

    agregartitulo('Sube todos los tags locales al repositorio remoto.');
    agregartexto('git push --tags');

    agregartitulo('Desecha los cambios no confirmados en un archivo.');
    agregartexto('git checkout -- [archivo]');

    agregartitulo('Deshace los cambios introducidos por un commit específico, creando un nuevo commit que revierte esos cambios.');
    agregartexto('git revert [commit]');

    agregartitulo('Muestra un registro de las referencias de Git que han sido modificadas en el repositorio.');
    agregartexto('git reflog');

    agregartitulo('Muestra las referencias de Git (branches, tags, etc.) junto con sus hashes.');
    agregartexto('git show-ref');

    agregartitulo('Cambia el nombre de un repositorio remoto.');
    agregartexto('git remote rename [nombre_actual] [nuevo_nombre]');

    agregartitulo('Elimina un archivo del área de preparación pero lo conserva en el sistema de archivos.');
    agregartexto('git rm --cached [archivo]');

    agregartitulo('Muestra un resumen de commits, agrupados por autor.');
    agregartexto('git shortlog');

    agregartitulo('Elimina de forma forzada los archivos no rastreados del directorio de trabajo.');
    agregartexto('git clean -f');

    agregartitulo('Elimina de forma forzada los archivos no rastreados y los directorios vacíos del directorio de trabajo.');
    agregartexto('git clean -fd');

    agregartitulo('Muestra un historial de commits en una sola línea por commit.');
    agregartexto('git log --oneline');

    agregartitulo('Muestra un gráfico ASCII de la historia de ramificaciones y fusiones.');
    agregartexto('git log --graph');

    agregartitulo('Cancela un proceso de fusión en caso de conflicto.');
    agregartexto('git merge --abort');

    agregartitulo('Inicia un rebase interactivo para reorganizar commits en la rama actual.');
    agregartexto('git rebase -i [rama]');

    agregartitulo('Cambia la URL de un repositorio remoto.');
    agregartexto('git remote set-url [nombre_repositorio] [nueva_URL]');

    agregartitulo('Deshace los commits posteriores a un commit específico, manteniendo los cambios en el directorio de trabajo.');
    agregartexto('git reset [commit]');

    agregartitulo('Deshace los commits posteriores a un commit específico, moviendo los cambios al área de preparación.');
    agregartexto('git reset --soft [commit]');

    agregartitulo('Deshace los commits posteriores a un commit específico, pero conserva los cambios en el directorio de trabajo sin añadirlos al área de preparación.');
    agregartexto('git reset --mixed [commit]');

    agregartitulo('Muestra el historial de cambios de un archivo, incluso si ha sido renombrado.');
    agregartexto('git log --follow [archivo]');

    agregartitulo('Continúa con un proceso de rebase después de resolver conflictos.');
    agregartexto('git rebase --continue');

    agregartitulo('Omite un commit en un proceso de rebase después de resolver conflictos.');
    agregartexto('git rebase --skip');

    agregartitulo('Añade interactivamente partes de cambios en archivos al área de preparación.');
    agregartexto('git add -p');

    agregartitulo('Aplica el cambio más reciente guardado en la pila de cambios y lo elimina de la pila.');
    agregartexto('git stash pop');
  
    
});