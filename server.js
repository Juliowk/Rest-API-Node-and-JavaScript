import express from 'express';
import { PORT } from './src/config/dotenv.js';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).json({'message': 'Página index'});
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});