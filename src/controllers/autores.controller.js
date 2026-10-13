const autoresService = require('../services/autores.service');

const autoresController = {
    // 1. Obtener todos los autores
    async getAutores(req, res) {
        try {
            const autores = await autoresService.getAll();
            res.json(autores);
        } catch (error) {
            res.status(500).json({ error: 'Error interno al obtener los autores', detalle: error.message });
        }
    },

    // 2. Obtener un autor por ID
    async getAutorById(req, res) {
        try {
            const id = req.params.id; // Extraemos el ID de la URL
            const autor = await autoresService.getById(id);
            
            if (!autor) {
                return res.status(404).json({ error: 'Autor no encontrado' });
            }
            
            res.json(autor);
        } catch (error) {
            res.status(500).json({ error: 'Error al buscar el autor' });
        }
    },

    // 3. Crear un nuevo autor
    async createAutor(req, res) {
        try {
            const datosAutor = req.body; // Extraemos los datos que envió el usuario
            
            // Pequeña validación
            if (!datosAutor.nombre) {
                return res.status(400).json({ error: 'El nombre del autor es obligatorio' });
            }

            const nuevoAutor = await autoresService.create(datosAutor);
            res.status(201).json(nuevoAutor); // 201 significa "Creado exitosamente"
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el autor', detalle: error.message });
        }
    },

    // 4. Actualizar un autor
    async updateAutor(req, res) {
        try {
            const id = req.params.id;
            const datosAutor = req.body;

            const autorActualizado = await autoresService.update(id, datosAutor);
            
            if (!autorActualizado) {
                return res.status(404).json({ error: 'Autor no encontrado para actualizar' });
            }

            res.json(autorActualizado);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el autor' });
        }
    },

    // 5. Borrar un autor
    async deleteAutor(req, res) {
        try {
            const id = req.params.id;
            const autorBorrado = await autoresService.delete(id);
            
            if (!autorBorrado) {
                return res.status(404).json({ error: 'Autor no encontrado para borrar' });
            }

            res.json({ mensaje: 'Autor borrado correctamente', autor: autorBorrado });
        } catch (error) {
            res.status(500).json({ error: 'Error al borrar el autor' });
        }
    }
};

module.exports = autoresController;