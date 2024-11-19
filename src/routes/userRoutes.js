import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// Rutas CRUD
router.get('/users', userController.getUsers);            // Obtener todos los usuarios
router.get('/users/:id', userController.getUserById);     // Obtener un usuario específico
router.post('/users', userController.createUser);         // Crear un usuario
router.put('/users/:id', userController.updateUser);      // Actualizar un usuario
router.delete('/users/:id', userController.deleteUser);   // Eliminar un usuario

export default router;
