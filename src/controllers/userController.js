import { query } from '../config/database';

// Controlador para obtener usuarios
const getUsers = async (req, res) => {
    try {
        const [rows] = await query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los usuarios');
    }
};

// Controlador para crear un usuario
const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const [result] = await query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ id: result.insertId, name, email });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el usuario');
    }
};

export default {
    getUsers,
    createUser
};
