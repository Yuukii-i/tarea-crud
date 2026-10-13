const pool = require('../config/db');

const autoresService = {
    // 1. LEER TODOS (Read)
    async getAll() {
        const query = 'SELECT * FROM autores ORDER BY id ASC';
        const { rows } = await pool.query(query);
        return rows; // Retorna un arreglo con todos los autores
    },

    // 2. LEER UNO SOLO por su ID (Read)
    async getById(id) {
        const query = 'SELECT * FROM autores WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0]; // Retorna el autor encontrado o undefined si no existe
    },

    // 3. CREAR (Create)
    async create(datosAutor) {
        const { nombre, nacionalidad, fecha_nacimiento } = datosAutor;
        const query = `
            INSERT INTO autores (nombre, nacionalidad, fecha_nacimiento) 
            VALUES ($1, $2, $3) 
            RETURNING *;
        `;
        const values = [nombre, nacionalidad, fecha_nacimiento];
        const { rows } = await pool.query(query, values);
        return rows[0]; // Retorna el autor recién creado
    },

    // 4. ACTUALIZAR (Update)
    async update(id, datosAutor) {
        const { nombre, nacionalidad, fecha_nacimiento } = datosAutor;
        const query = `
            UPDATE autores 
            SET nombre = $1, nacionalidad = $2, fecha_nacimiento = $3 
            WHERE id = $4 
            RETURNING *;
        `;
        const values = [nombre, nacionalidad, fecha_nacimiento, id];
        const { rows } = await pool.query(query, values);
        return rows[0]; // Retorna el autor actualizado
    },

    // 5. BORRAR (Delete)
    async delete(id) {
        const query = 'DELETE FROM autores WHERE id = $1 RETURNING *;';
        const { rows } = await pool.query(query, [id]);
        return rows[0]; // Retorna el autor borrado (útil para confirmar qué se borró)
    }
};

module.exports = autoresService;