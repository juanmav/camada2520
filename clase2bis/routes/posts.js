const express = require('express');
const router = express.Router();
let { postList } = require('../data');

// Configuración.

// Listado de post
router.get('/', function (req, res) {
    res.json(postList);
});

// Obtener un post
router.get('/:postId', function (req, res) {
    let postId = req.params.postId;

    let post = postList.find( u => u.id == postId);

    if(post){
        res.status(200).json(post);
    } else { // Si no esta el usuario con el id pedido
        res.status(404).json({ message: 'el usuario pedido no existe!'})
    }
});

// Elimino un post
router.delete('/:postId', function (req, res) {
    let postId = req.params.postId;
    let post = postList.find( u => u.id == postId);

    if (post){
        // Lo saco de la lista
        postList = postList.filter( u => u.id != postId);
        res.status(202).json({ message: 'Usuario id: ' + postId + ' borrado!'});
    } else {
        res.status(404).json({ message: 'el usuario no existe!'});
    }

});

// Creo un post
router.post('/', function (req, res) {
    let data = req.body;

    if (data && data.postname){
        data.id = postList.length + 1;
        postList.push(data);
        res.status(201).json(data);
    } else {
        res.status(409).json({ message: 'los datos provistos son invalidos'})
    }
});

router.put('/:postId', function (req, res) {
    let postId = req.params.postId;
    let data = req.body;

    let oldpost = postList.find( u => u.id == postId);

    if (oldpost){
        // Saco el usuario "viejo"
        postList = postList.filter( u => u.id != postId);
        // Agrego el usuario actualizdo
        postList.push(data);
        res.status(204).json(data);
    } else {
        res.status(404).json({ message: 'el usuario no existe!'})
    }
});

module.exports = router;