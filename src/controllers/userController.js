import prisma from "../prisma/client.js";

export const createUser = async (request, response) => {
    try {
        await prisma.user.create({
            data: {
                email: request.body.email,
                name: request.body.name,
                age: request.body.age
            }
        });
        response.status(201).json({'message': 'Usuario criado com sucesso'});
    } catch (error) {
        response.status(400).json({'message': 'Erro ao criar usuario'})
    };
};


export const listUsers = async (request, response) => {    
    try {
        const users = await prisma.user.findMany();
        console.table(users);    
        response.status(200).json(users);
    } catch (error) {
        response.json({'message': 'Erro ao listar usuarios'});
    }
};

export const deleteUser = async (request, response) => {
    await prisma.user.delete({
        where: {
            id: request.params.id
        }
    });
    response.status(201).json({'message': 'Usuario deletado com sucesso'});
};

export const editUser = async (request, response) => {
    await prisma.user.update({
        where: {
            id: request.params.id
        },
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }
    }); 
    response.status(200).json({'message': 'Usuario deletado com sucesso'});
};