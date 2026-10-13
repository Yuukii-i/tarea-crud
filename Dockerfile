# Usamos una versión ligera de Node.js
FROM node:20-alpine

# Creamos la carpeta donde vivirá nuestro código dentro del contenedor
WORKDIR /app

# Copiamos solo los archivos de dependencias primero
COPY package*.json ./

# Instalamos las librerías (Express, pg, etc.)
RUN npm install

# Copiamos el resto de tu código
COPY . .

# Exponemos el puerto 3000
EXPOSE 3000

# El comando para encender el servidor
CMD ["npm", "run", "dev"]