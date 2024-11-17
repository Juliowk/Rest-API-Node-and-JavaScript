# Rest-API-Node-and-JavaScript
 
## Descrição

Esta API REST foi desenvolvida em JavaScript com o objetivo de consolidar e aprimorar meus conhecimentos na construção de APIs integradas a um banco de dados. Ela permite o controle e o cadastro de usuários, oferecendo operações essenciais para gerenciar dados. Contém uma documentação detalhada, feita com Swagger, que facilita a compreensão e o uso de cada rota disponível.

## Tecnologias Utilizadas

- Node.js
- JavaScript
- Express
- MongoDB
- Prisma
- Swagger

## Rotas

- **GET** `/`: Página index
- **GET** `/users/listUsers`: Listagem de usuários
- **POST** `/users/createUser`: Cria um novo usuário
- **PUT** `/users/editUser/`: Edita um usuário existente com base no `id passado no path` da requisição
- **DELETE** `/users/deleteUser/`: Deleta um usário com base no `id passado no path` da requisição
- **DOC** `/api-docs`: Documentação da API

## Endpoints

`/`
![Index](./images/Captura%20de%20tela%202024-11-17%20124204%20index.png)

<hr>

`/users/listUsers`
![Index](./images/Captura%20de%20tela%202024-11-17%20124313%20listUsers.png)

<hr>

`/users/createUser`
![Index](./images/Captura%20de%20tela%202024-11-17%20124135%20create.png)

<hr>

`/users/deleteUser`
![Index](./images/Captura%20de%20tela%202024-11-17%20124417%20delete.png)
## Autor

Este projeto foi desenvolvido por [Júlio Elias de Sousa Rocha](https://github.com/Juliowk).