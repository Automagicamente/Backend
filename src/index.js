import dotenv from 'dotenv';
import { listen } from './server';
dotenv.config()

const PORT = process.env.PORT || 3000;

listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
