## Cómo arrancar el Backend

1. **Configura la conexión a la base de datos**  
   En la raíz de tu proyecto, crea un archivo llamado `.env` y agrega las siguientes líneas:

   ```plaintext
   HOST=localhost           # Host del servidor
   PORT=5432                # Puerto de PostgreSQL
   USER=postgres            # Usuario de PostgreSQL
   PASSWORD=                # Contraseña de PostgreSQL (asegúrate de establecer una contraseña)
   DB=TechTestDB            # Nombre de la base de datos a utilizar

2. **Instala las dependencias**
Ejecuta el siguiente comando para instalar las dependencias necesarias:
   ```plaintext
npm install

3. **Inicia el servidor**
Finalmente, utiliza el siguiente comando para arrancar el backend:
   ```plaintext
npm start

*Si deseas iniciar el servidor en modo de desarrollo, usa:*
   ```plaintext
npm run start:dev