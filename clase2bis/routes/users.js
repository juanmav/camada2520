const express = require('express');
const router = express.Router();
let { userList, postList } = require('../data');
const userPostsRouter = require('./userposts');

// Configuracion.
// /users/1/posts
router.use('/:userId/posts', userPostsRouter);

// Listado de usuarios
router.get('/', function (req, res) {
    res.json(userList);
});

// Obtener un usuario
router.get('/:userId', function (req, res) {
    let userId = req.params.userId;

    let user = userList.find( u => u.id == userId);

    if(user){
        res.status(200).json(user);
    } else { // Si no esta el usuario con el id pedido
        res.status(404).json({ message: 'el usuario pedido no existe!'})
    }
});

// Elimino un usuario
router.delete('/:userId', function (req, res) {
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
router.post('/', function (req, res) {
    let data = req.body;

    if (data && data.username){
        data.id = userList.length + 1;
        userList.push(data);
        res.status(201).json(data);
    } else {
        res.status(409).json({ message: 'los datos provistos son invalidos'})
    }


});

router.put('/:userId', function (req, res) {
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

module.exports = router;