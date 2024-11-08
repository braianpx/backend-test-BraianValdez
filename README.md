# TechTest

Este proyecto es un backend diseñado con NestJS para gestionar tareas de manera eficiente. Utiliza TypeORM para la interacción con la base de datos y proporciona una API RESTful para crear, leer, actualizar y eliminar tareas.

## Pre-requisitos

Antes de comenzar, asegúrate de tener instalados Node.js, npm y PostgreSQL en tu máquina. También necesitarás Visual Studio Code (o cualquier editor de código de tu preferencia) para gestionar el código de manera más cómoda. Además, deberás crear la base de datos en PostgreSQL.

## Configuración inicial

1. **Clonar el repositorio**
2. Para obtener el proyecto, clona el repositorio usando Git:

   ```bash
   git clone https://github.com/braianpx/backend-test-BraianValdez.git
   ```
3. **Abrir el proyecto**
Abre la carpeta 'backend-test-BraianValdez' con Visual Studio Code o tu editor de código preferido.

  ```bash
  cd backend-test-BraianValdez
  ```
3. **Instalar dependencias**
Dentro de la terminal del editor, ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```bash
     npm install
     ```
4. **Configuración de variables de entorno**
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```plaintext
HOST=localhost            # Host del servidor
PORTDB=5432               # Puerto de PostgreSQL
USER=postgres             # Usuario de PostgreSQL
PASSWORD=                 # Contraseña de PostgreSQL (asegúrate de establecer una contraseña)
DB=TechTestDB             # Nombre de la base de datos a utilizar
```
5. **Construir el proyecto**
Compila el proyecto para producción con el siguiente comando:

   ```bash
   npm run build
   ```
6. **Iniciar el servidor**
Una vez construido el proyecto, inicia el servidor con:

   ```bash
   npm run start
   ```
##### Nota: Si deseas iniciar el servidor en modo de desarrollo, utiliza:
   ```bash
   npm run start:dev
   ```
7. **Acceso a Swagger UI**
Para ver la documentación de la API y probar los endpoints directamente, navega a http://localhost:3000/api en tu navegador. Esto abrirá Swagger UI, donde podrás interactuar con la API.
##### Nota: Es necesario tener el proyecto ya iniciado para poder ver la documentación.
