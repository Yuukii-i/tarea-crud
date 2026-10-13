const librosService = require('../services/libros.service');

const librosController = {
    async getLibros(req, res) {
        try {
            const libros = await librosService.getAll();
            res.json(libros);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los libros', detalle: error.message });
        }
    },

    async getLibroById(req, res) {
        try {
            const libro = await librosService.getById(req.params.id);
            if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
            res.json(libro);
        } catch (error) {
            res.status(500).json({ error: 'Error al buscar el libro' });
        }
    },

    async createLibro(req, res) {
        try {
            const { titulo, autor_id } = req.body;
            // Validamos que envíen el título y el ID del autor
            if (!titulo || !autor_id) {
                return res.status(400).json({ error: 'El título y el autor_id son obligatorios' });
            }

            const nuevoLibro = await librosService.create(req.body);
            res.status(201).json(nuevoLibro);
        } catch (error) {
            // Si el autor_id no existe en la base de datos, PostgreSQL lanzará un error de llave foránea
            res.status(500).json({ error: 'Error al crear el libro. Verifica que el autor exista.', detalle: error.message });
        }
    },

    async updateLibro(req, res) {
        try {
            const libroActualizado = await librosService.update(req.params.id, req.body);
            if (!libroActualizado) return res.status(404).json({ error: 'Libro no encontrado' });
            res.json(libroActualizado);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el libro' });
        }
    },

    async deleteLibro(req, res) {
        try {
            const libroBorrado = await librosService.delete(req.params.id);
            if (!libroBorrado) return res.status(404).json({ error: 'Libro no encontrado' });
            res.json({ mensaje: 'Libro borrado', libro: libroBorrado });
        } catch (error) {
            res.status(500).json({ error: 'Error al borrar el libro' });
        }
    }
};

module.exports = librosController;