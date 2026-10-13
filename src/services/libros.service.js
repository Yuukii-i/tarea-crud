const pool = require('../config/db');

const librosService = {
    // 1. LEER TODOS
    async getAll() {
        // Hacemos un JOIN simple para que al pedir los libros, también nos traiga el nombre del autor
        const query = `
            SELECT libros.*, autores.nombre AS nombre_autor 
            FROM libros 
            JOIN autores ON libros.autor_id = autores.id 
            ORDER BY libros.id ASC;
        `;
        const { rows } = await pool.query(query);
        return rows;
    },

    // 2. LEER UNO SOLO
    async getById(id) {
        const query = 'SELECT * FROM libros WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },

    // 3. CREAR
    async create(datosLibro) {
        const { titulo, anio_publicacion, autor_id } = datosLibro;
        const query = `
            INSERT INTO libros (titulo, anio_publicacion, autor_id) 
            VALUES ($1, $2, $3) 
            RETURNING *;
        `;
        const values = [titulo, anio_publicacion, autor_id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // 4. ACTUALIZAR
    async update(id, datosLibro) {
        const { titulo, anio_publicacion, autor_id } = datosLibro;
        const query = `
            UPDATE libros 
            SET titulo = $1, anio_publicacion = $2, autor_id = $3 
            WHERE id = $4 
            RETURNING *;
        `;
        const values = [titulo, anio_publicacion, autor_id, id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // 5. BORRAR
    async delete(id) {
        const query = 'DELETE FROM libros WHERE id = $1 RETURNING *;';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }
};

module.exports = librosService;