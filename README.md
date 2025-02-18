CRUD de Libros con Node.js, Express y MongoDB

Este proyecto es una API REST que permite gestionar una colección de libros, almacenándolos en una base de datos MongoDB.

 Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- Postman (para pruebas)

---

Instrucciones para levantar el proyecto

1.Clonar el repositorio**  

git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repositorio

2.Instalar dependencias

npm install
npm install body-parser dotenv express mongoose nodemon

Para instalar todas las dependencias necesarias para el proyecto, ejecuta el siguiente comando en la terminal dentro de la carpeta del proyecto:
Dependencias del proyecto:
body-parser: Para analizar el cuerpo de las solicitudes.
dotenv: Para cargar variables de entorno desde un archivo .env.
express: Framework de Node.js para manejar las rutas y el servidor.
mongoose: ODM para MongoDB, utilizado para interactuar con la base de datos.
nodemon: Herramienta que reinicia automáticamente el servidor cuando detecta cambios en el código.


3. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

env
Copiar
PORT=3000
MONGO_URL=mongodb://jeanpiere:1234@localhost:27017
MONGO_USER=jeanpiere
MONGO_PASS=1234
MONGO_DB_NAME=books
Asegúrate de que MongoDB está corriendo en tu máquina local.

4. Ejecutar el servidor

npm start

Endpoints disponibles
 1. Obtener todos los libros
GET /books

curl -X GET http://localhost:3000/books
 2. Crear un nuevo libro
POST /books

{
    "title": "Alicia en el país de las maravillas",
    "author": "Lewis Carroll",
    "publication_date": "1865",
    "genre": "Fantasía"
}
.Notas importantes
Si no ves los datos en MongoDB Compass, presiona "Refresh".
Usa Postman o cURL para probar los endpoints.
Autor JeanpiereDEVS🚀
