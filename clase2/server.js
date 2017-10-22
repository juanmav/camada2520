const express = require('express');
const app = express();
let userList = require('./data');
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

// Listado de usuarios
app.get('/users/', function (req, res) {
    res.json(userList);
});

// Obtener un usuario
app.get('/users/:userId', function (req, res) {
    let userId = req.params.userId;

    let user = userList.find( u => u.id == userId);

    if(user){
        res.status(200).json(user);
    } else { // Si no esta el usuario con el id pedido
        res.status(404).json({ message: 'el usuario pedido no existe!'})
    }
});

// Elimino un usuario
app.delete('/users/:userId', function (req, res) {
    let userId = req.params.userId;
    let user = userList.find( u => u.id == userId);

    if (user){
        // Lo saco de la lista
        userList = userList.filter( u => u.id != userId);
        res.status(202).json({ message: 'Usuario id: ' + userId + ' borrado!'});
    } else {
        res.status(404).json({ message: 'el usuario no existe!'});
    }

});

// Creo un usuario
app.post('/users/', function (req, res) {
    let data = req.body;

    if (data && data.username){
        data.id = userList.length + 1;
        userList.push(data);
        res.status(201).json(data);
    } else {
        res.status(409).json({ message: 'los datos provistos son invalidos'})
    }


});

app.put('/users/:userId', function (req, res) {
    let userId = req.params.userId;
    let data = req.body;

    let oldUser = userList.find( u => u.id == userId);

    if (oldUser){
        // Saco el usuario "viejo"
        userList = userList.filter( u => u.id != userId);

        // Agrego el usuario actualizdo
        userList.push(data);
        res.status(204).json(data);
    } else {
        res.status(404).json({ message: 'el usuario no existe!'})
    }
});

app.listen(4000);
console.log('Servidor express levantado en el puerto ' + 4000);