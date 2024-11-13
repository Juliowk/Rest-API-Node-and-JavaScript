import express from 'express';
import { PrismaClient } from '@prisma/client';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get('/', (request, response) => response.status(200).send(`Página index`) );

app.post('/createUser', async (request, response) => {
    response.status(201).send("Usuario criado com sucesso");
});

app.get('/listUsers', async (request, response) => {
    const users = await prisma.user.findMany();
    console.table(users);    
    response.status(200).json(users);
});

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});