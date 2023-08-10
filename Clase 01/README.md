# NodeJs

Node.js es un entorno de tiempo de ejecución de código abierto diseñado para permitir la ejecución de código JavaScript fuera del navegador web. A diferencia de la mayoría de las implementaciones de JavaScript que se ejecutan en el navegador, Node.js se ejecuta en el servidor y permite a los desarrolladores crear aplicaciones web y servicios de red utilizando JavaScript.

**Basado en el motor V8 de Google:** Node.js utiliza el motor V8 de Google, que es un motor de ejecución de JavaScript altamente eficiente y rápido.

**Módulos y paquetes:** Node.js utiliza el sistema de módulos CommonJS, lo que facilita la organización del código en módulos reutilizables.

**Desarrollo de aplicaciones en tiempo real:** Gracias a su naturaleza no bloqueante y orientada a eventos, Node.js es ideal para el desarrollo de aplicaciones en tiempo real

**Gestión eficiente de dependencias:** NPM (Node Package Manager) es una herramienta poderosa para instalar, gestionar y compartir paquetes de código reutilizable. NPM hace que sea fácil agregar y actualizar dependencias en proyectos de Node.js.

## NPM

NPM (Node Package Manager) es el administrador de paquetes predeterminado para Node.js. Es una herramienta que facilita la instalación, gestión y distribución de módulos y bibliotecas de código reutilizable en proyectos de Node.js. 

Las funciones clave de NPM incluyen:

**Instalación de paquetes:** NPM permite a los desarrolladores instalar paquetes y módulos de Node.js desde el registro público de NPM o desde repositorios privados. Los paquetes se instalan fácilmente utilizando el comando npm install.

**Gestión de dependencias:**  NPM maneja automáticamente las dependencias de los paquetes instalados, asegurando que las versiones correctas de las dependencias sean utilizadas por tu proyecto. Estas dependencias se registran en el archivo package.json del proyecto.

**Scripts personalizados:** El archivo package.json también permite a los desarrolladores definir scripts personalizados que se pueden ejecutar con el comando npm run. Esto es útil para automatizar tareas de desarrollo, como iniciar el servidor, ejecutar pruebas, construir archivos, entre otros.



## Crear un Proyecto 

Para inicializar un proyecto lo que tenemos que hacer es ingresar a nuestro visual studio code y abrir nuestra terminal en la herramienta y colocar lo siguiente:

**npm init** 

Sigue las instrucciones en pantalla para proporcionar detalles sobre tu proyecto, como el nombre, la versión, la descripción, el autor, etc. Puedes presionar "Enter" para aceptar los valores predeterminados en la mayoría de los campos.

**package.json**

Una vez completado el npm init se creara un package.json con tu configuración inicial.

{

"name": "codigo",

"version": "1.0.0",

 "description": "",

 "main": "index.js",

 "scripts": {

`    `"test": "echo \"Error: no test specified\" && exit 1"

},

"author": "",

"license": "ISC"

}

**Crear un archivo JS**

En tu carpeta crea un archivo javascript donde colocaras tu código una vez terminado iras a tu terminal para ejecutarlo.

**node nameFile.js**

Esto te ejecutara en tu consola el programa que acabas de escribir.

**npm install nodemon**

Nodemon es una herramienta que reinicia automáticamente tu aplicación cuando detecta cambios en los archivos. Instálala como una dependencia de desarrollo en tu proyecto.

**Agregar un script en tu package.json**

Abre tu archivo package.json y busca el campo "scripts". Agrega un nuevo script llamado "start" que ejecutará tu aplicación con nodemon.

"scripts": {

 "start": "nodemon index.js"

},

**npm start**

nodemon supervisará los cambios en tus archivos y reiniciará automáticamente la aplicación cuando sea necesario.
