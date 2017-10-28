const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// configuracion

// GET LIST
router.get('/', function (req, res) {

    let queryData = req.query;
    console.log(queryData);

    let query = {};

    if (queryData.title){
        query.title = new RegExp(queryData.title, 'i'); //   /mi titulo/i
    }

    if (queryData.body){
        query.body = new RegExp(queryData.body, 'i'); //   /mi titulo/i
    }

    Post
        .find(query)
        .populate('autor')
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(503).json(err));
});

// GET ONE
router.get('/:postId', function (req, res) {
    let postId = req.params.postId;

    Post
        .findById(postId)
        .populate('autor')
        .then(post => {
            if (post){
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'no existe!'})
            }
        })
        .catch( err => res.status(503).json(err));
});


// create
router.post('/', function (req, res) {
    let data = req.body;
    // Ya estoy "logueado".
    let userId = '59eb834e9b312338eb9d2306'; // tomar el id de un usuario de la base.

    data.autor = userId;

    let post = new Post(data);

    post
        .save()
        .then( p => res.status(201).json(p))
        .catch( err => res.status(503).json(err));
});


// UPDATE
router.put('/:postId', function (req, res) {
    let postId = req.param.postId;
    let data = req.body;
    let userId = '59eb834e9b312338eb9d2306'; // tomar el id de un usuario de la base.

    // TODO chequear que pasa si no esta el post.
    // TODO hacerlo en la semana y proponer soluciones por Slack.
    // Solamete el dueño del post lo puede modificar.
    // Buscar el post del usuario, ver si es el dueño de ese post
    // ir campo por campo actualizando los valores.

    Post
        .findOneAndUpdate(postId, { $set: data })
        .then( result => res.status(202).json(result))
        .catch( err => res.status(503).json(err));
});

// DELETE
router.delete('/:postId', function (req, res) {
    let postId = req.params.postId;
    let userId = '59eb834e9b312338eb9d2305'; // tomar el id de un usuario de la base.

    // TODO solamente el dueño del post lo puede borrar.
    Post
        .findById(postId)
        .then(p => {
            if (p){
                if (p.autor == userId){
                    return p.remove();
                } else {
                    throw 'No tenes permisos';
                }
            } else {
                return null;
            }
        })
        .then(result => {
            if (result){
                res.status(202).json(result);
            } else {
                res.status(404).json({ message: 'No existe'});
            }
        })
        .catch(err => res.status(503).json(err));
});

module.exports = router;