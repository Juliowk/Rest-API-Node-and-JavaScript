import express from 'express';

import { userSchema } from '../validators/userValidators.js';
import { validateRequest } from '../middlewares/validateRequest.js';

import { createUser, listUsers, editUser, deleteUser } from '../controllers/userController.js';

const route = express.Router();

/**
 * @swagger
 * /users/createUser:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Data validation error
 */
route.post('/createUser', validateRequest(userSchema), createUser);

/**
 * @swagger
 * /users/listUsers:
 *   get:
 *     summary: List users all
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User list returned successfully
 *       500:
 *         description: Server error
 */
route.get('/listUsers', listUsers);

/**
 * @swagger
 * /users/editUser/{id}:
 *   put:
 *     summary: Edit an existing user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID to be edited
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User edited successfully
 *       400:
 *         description: Data validation error
 *       404:
 *         description: User not found
 */
route.put('/editUser/:id', validateRequest(userSchema), editUser);

/**
 * @swagger
 * /users/deleteUser/{id}:
 *   delete:
 *     summary: Delete an existing user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID to be deleted
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
route.delete('/deleteUser/:id', deleteUser);

export default route;