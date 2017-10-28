const express = require('express');
const router = express.Router({mergeParams: true});
const Persona = require('../models/Persona');
const Post = require('../models/Post');

// configuracion

// /personas/:personaId/posts/
router.get('/', function (req, res) {
    let personaId = req.params.personaId;

    Persona
        .findById(personaId)
        .then(persona => {
            if (persona){
              return Post.find({ autor: personaId })
            } else { // persona no existe.
                return null
            }
        })
        .then( result => {
            if (result){
                res.status(200).json(result)
            } else {
                res.status(404).json({ message: 'usuario no existe!'})
            }
        })
        .catch( err => res.status(503).json(err));
});


module.exports = router;