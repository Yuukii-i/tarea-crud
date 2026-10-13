# CRUD API - Autores y Libros

API REST con arquitectura por capas construida con Node.js, Express y PostgreSQL. El proyecto está "dockerizado" para que la base de datos y el servidor se levanten automáticamente sin instalaciones complejas.

## Requisitos previos

- [Git](https://git-scm.com/downloads) instalado.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y ejecutándo

## Instrucciones de ejecución

**1. Clonar el repositorio**
```bash
git clone [https://github.com/tu_usuario/tu_repositorio.git](https://github.com/tu_usuario/tu_repositorio.git)
cd tu_repositorio
```

**2. Configurar variables de entorno**
Crea un archivo llamado `.env` en la raíz del proyecto (al mismo nivel que `docker-compose.yml`) y pega este contenido:

```env
PORT=3000
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_HOST=db
DB_PORT=5432
DB_NAME=libreria_db
```

**3. Levantar el proyecto**
Abre la consola en la raíz del proyecto y ejecuta el siguiente comando mágico (descargará todo, creará las tablas y encenderá la API):

```bash
docker-compose up --build
```
*(Nota: Si usas una versión muy nueva de Docker, el comando puede ser `docker compose up --build`)*

## ¿Cómo probar la API?

El servidor estará corriendo en `http://localhost:3000`. 
Dentro del proyecto hay un archivo llamado `peticiones.http`. Si instalas la extensión **REST Client** en Visual Studio Code, podrás abrir ese archivo y hacer clic en "Send Request" para probar todo el CRUD directamente.

## Apagar el proyecto

Para detener el servidor y la base de datos, presiona `Ctrl + C` en la consola donde se está ejecutando, o escribe:
```bash
docker-compose down
```
