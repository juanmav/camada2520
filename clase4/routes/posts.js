const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// configuracion

// http://mongoosejs.com/docs/populate.html
// HAcer acordar a Juan de ver queryString!

// GET LIST
// GET ONE

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
// DELETE


module.exports = router;