# 📚 CRUD API - Autores y Libros

¡Bienvenido! Este es un proyecto de una API REST construida con Node.js, Express y PostgreSQL. Utiliza una arquitectura por capas (Routes, Controllers, Services) y está completamente "dockerizado" para que puedas ejecutarlo en cualquier computadora sin necesidad de instalar bases de datos o configuraciones complejas.

## 🛠️ Requisitos previos

Para ejecutar este proyecto, solo necesitas tener instalados estos dos programas en tu computadora:

1. [Git](https://git-scm.com/downloads) (Para descargar el código).
2. [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Para ejecutar el servidor y la base de datos automáticamente). *Asegúrate de abrir Docker una vez instalado para que el motor esté activo en segundo plano.*

---

## 🚀 Guía de Instalación Paso a Paso

**Paso 1: Descargar el proyecto**  
Abre tu terminal (Consola, CMD o PowerShell) y ejecuta estos comandos para descargar el código y entrar a la carpeta del proyecto:

```bash
git clone [https://github.com/Yuukii-i/tarea-crud.git](https://github.com/Yuukii-i/tarea-crud.git)
cd tarea-crud
```

**Paso 2: Configurar las contraseñas de la base de datos**  
Por razones de seguridad, las contraseñas no se suben a internet. Debes crear un archivo nuevo llamado **exactamente** `.env` en la carpeta principal del proyecto (al mismo nivel que el archivo `docker-compose.yml`) y pegar este contenido dentro:

```env
PORT=3000
DB_USER=postgres
DB_PASSWORD=admin123
DB_HOST=db
DB_PORT=5432
DB_NAME=libreria_db
```
*(Nota: Puedes cambiar la contraseña `admin123` por la que tú prefieras, Docker la usará automáticamente para crear y proteger la base de datos).*

**Paso 3: ¡Encender la aplicación!**  
Verifica que la aplicación **Docker Desktop esté abierta**. Luego, en tu terminal (asegurándote de estar dentro de la carpeta `tarea-crud`), ejecuta este comando:

```bash
docker-compose up --build
```
*(Si usas una versión muy reciente de Docker y el comando anterior falla, intenta quitarle el guion: `docker compose up --build`)*

¡Y listo! Docker se encargará de descargar PostgreSQL, configurar Node.js, crear las tablas SQL necesarias y encender la API. Todo de forma automática.

---

## 🧪 ¿Cómo probar que funciona?

Una vez que la consola muestre que el servidor está corriendo en `http://localhost:3000`, puedes probar la aplicación:

1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Ve a la pestaña de extensiones e instala una llamada **REST Client** (de Huachao Mao).
3. Abre el archivo `peticiones.http` que viene incluido en el proyecto.
4. Verás pequeños botones que dicen **"Send Request"** sobre cada petición (GET, POST, PUT, DELETE). Haz clic en ellos para probar la creación, lectura, actualización y eliminación de Autores y Libros.

---

## 🛑 Cómo apagar el proyecto

Cuando termines de probar la aplicación, ve a la terminal donde está corriendo el proceso y presiona las teclas `Ctrl + C` para detenerlo. 

Si deseas apagar y limpiar los contenedores de Docker por completo, escribe el siguiente comando:

```bash
docker-compose down
```
