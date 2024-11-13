import express, { response } from 'express';

const PORT = 3333;
const app = express();
app.use(express.json());

const users = [];

app.get('/', (request, response) => response.send(`Página index`) );

app.post('/createUser', (request, response) => {
    users.push(request.body);    
    response.send("Usuario criado com sucesso");
});

app.get('/listUsers', (request, response) => {
    response.json(users);
    console.table(users);
});

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});