const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Importar el archivo de rutas
const autoresRoutes = require('./routes/autores.routes');
const librosRoutes = require('./routes/libros.routes');

// Middleware para que Express entienda el formato JSON
app.use(express.json());

// 2. Conectar las rutas a una URL base
// Todas las rutas que definimos en autores.routes.js ahora empezarán con "/api/autores"
app.use('/api/autores', autoresRoutes);
app.use('/api/libros', librosRoutes);

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});