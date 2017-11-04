const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', function (req, res) {
    let user = req.user;

    if (user.isAdmin){
        // Se podria implementar query string para consultas.
        // TODO ocultar password.
        User
            .find({})
            .then( users => res.status(200).json(users))
            .catch( err => res.status(503).json(err));
    } else {
        res.status(403).json({ message: 'no sos admin'})
    }

});

router.get('/:userId', function (req, res) {
    let user = req.user;
    let userId = req.params.userId;

    if (user._id == userId || user.isAdmin){
        User
            .findById(userId)
            .then( u => res.status(200).json(u))
    } else {
        res.status(403).json({ message: 'No tenes permisos'});
    }

});

router.put('/:userId', function (req, res) {
    let user = req.user;
    let data = req.body;
    let userId = req.params.userId;

    if (user._id == userId || user.isAdmin){
        User
            .findOneAndUpdate({ _id: userId }, data)
            .then( u => res.status(200).json(u))
    } else {
        res.status(403).json({ message: 'No tenes permisos'});
    }

});

router.delete('/:userId', function (req, res) {
    let user = req.user;
    let userId = req.params.userId;

    if (user.isAdmin){
        User.remove({ _id: userId })
    } else {
        res.status(403).json({ message: 'No tenes permisos'});
    }
});

module.exports = router;