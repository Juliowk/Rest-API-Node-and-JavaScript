import express from 'express';
import { createUser, listUsers, editUser, deleteUser } from '../controllers/userController.js';

const route = express.Router();

route.post('/createUser', createUser);
route.get('/listUsers', listUsers);
route.put('/editUser/:id', editUser);
route.delete('/deleteUser/:id', deleteUser);

export default route;