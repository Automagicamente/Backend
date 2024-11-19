import express, { json } from 'express';
import userRoutes from './routes/userRoutes.js';

const server = express();

// Middleware para manejar JSON
server.use(json());

// Rutas
server.use('/api', userRoutes);

export default server;
