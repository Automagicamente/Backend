import { createPool } from 'mysql2/promise';
/* require('dotenv').config(); */
import dotenv from 'dotenv';
dotenv.config()

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 1,
    queueLimit: 0
});

export default pool;
