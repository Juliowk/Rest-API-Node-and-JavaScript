import express from 'express';
import { PORT } from './src/config/dotenv.js';
import userRoutes from './src/routes/userRoutes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());

app.use(errorHandler);

// Documentation

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'User API',
          version: '1.0.0',
          description: 'User Management API Documentation',
        },
        servers: [
          {
            url: `http://localhost:${PORT}`,
          },
        ],
    },
    components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Username',
              },
              email: {
                type: 'string',
                description: 'User email',
              },
              age: {
                type: 'integer',
                description: 'User age',
              },
            },
            required: ['name', 'email', 'age'],
          },
        },
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (request, response) => {
    response.status(200).json({'message': 'Página index'});
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
    console.log(`Documentação do Swagger em http://localhost:${PORT}/api-docs`);
});