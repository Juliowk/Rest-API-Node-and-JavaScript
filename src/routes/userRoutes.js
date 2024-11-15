import express from 'express';

import { userSchema } from '../validators/userValidators.js';
import { validateRequest } from '../middlewares/validateRequest.js';

import { createUser, listUsers, editUser, deleteUser } from '../controllers/userController.js';

const route = express.Router();

route.post('/createUser', validateRequest(userSchema), createUser);
route.get('/listUsers', listUsers);
route.put('/editUser/:id', validateRequest(userSchema), editUser);
route.delete('/deleteUser/:id', deleteUser);

export default route;