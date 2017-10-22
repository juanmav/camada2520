const express = require('express');
const router = express.Router();
const Persona = require('../models/Persona');

// Configurar.

// get en /personas/
// LIST
router.get('/', function (req, res) {
    Persona
        .find({})
        .then(function (users) {
            res.json(users)
        })
        .catch(function (err) {
            res.status(503).json(err);
        })
});

// Get One
router.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    Persona
        .findById({ _id: userId })
        .then(function (user) {
            if (user){
                res.status(200).json(user)
            } else {
                res.status(404).json({ message: 'el usuario no existe!'})
            }
        })
        .catch(function (err) {
            res.status(503).json(err)
        })
});

// Create
router.post('/', function (req, res) {
    let data = req.body;

    let persona = new Persona(data);

    persona
        .save()
        .then( p => res.status(201).json(p))
        .catch(err => res.status(503).json(err))

});

// Update
router.put('/:userId', function (req, res) {
    let data = req.body;
    let userId = req.params.userId;

    Persona
        .updateOne({ _id: userId }, { $set: data })
        .then( r => res.status(202).json(r))
        .catch( err => res.status(503).json(err));
});

// Delete
router.delete('/:userId', function (req, res) {
    let userId = req.params.userId;

    Persona
        .findById({ _id: userId })
        .then(function (user) {
            if (user){
                return user.remove()
            } else {
                return null;
            }
        })
        .then(function (r) {
            if (r){
                res.status(202).json({ message: 'usuario eliminado'});
            } else {
                res.status(404).json({ message: 'El usuario no existe!'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(503).json(err)
        });

});


module.exports = router;