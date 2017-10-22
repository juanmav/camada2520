const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const middleware = require('./middleware');

app.use(bodyParser.json());
//app.use(middleware);

// Punto de entrada
app.get('/', function (request, response) {
    response.json(
        {
            name: 'Mi listado de usuarios',
            endpoints: [
                {
                    name: 'Usuarios endpoint',
                    url: './users'
                },
                {
                    name: 'Items endpoint',
                    url: './items'
                }
            ]
        }
    );
});

const usersRouter = require('./routes/users');
const postRouter = require('./routes/posts');

app.use('/users/', usersRouter);
app.use('/posts/', postRouter);

app.listen(4000);
console.log('Servidor express levantado en el puerto ' + 4000);