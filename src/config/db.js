const { Pool } = require('pg');
require('dotenv').config();

// Creamos el Pool usando las variables de tu archivo .env
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Pequeña prueba para saber si conectó bien
pool.on('connect', () => {
    console.log('Conexión exitosa a la base de datos PostgreSQL');
});

module.exports = pool;