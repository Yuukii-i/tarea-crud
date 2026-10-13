const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autores.controller');

// Definimos las rutas y las conectamos con su función respectiva en el Controller

// GET /api/autores -> Obtiene todos los autores
router.get('/', autoresController.getAutores);

// GET /api/autores/5 -> Obtiene el autor con ID 5
router.get('/:id', autoresController.getAutorById);

// POST /api/autores -> Crea un nuevo autor
router.post('/', autoresController.createAutor);

// PUT /api/autores/5 -> Actualiza el autor con ID 5
router.put('/:id', autoresController.updateAutor);

// DELETE /api/autores/5 -> Borra el autor con ID 5
router.delete('/:id', autoresController.deleteAutor);

module.exports = router;