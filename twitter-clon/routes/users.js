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
    // Verificar si es admin o si es la persona
});
router.put('/:userId', function (req, res) {
    // Borrar el usuario chqueando que exista.
    // Verificar si es admin o si es la persona
    // modificar.

});

router.delete('/:userId', function (req, res) {
    // Verificar si es admin
    // Borrar el usuario chqueando que exista.
});

module.exports = router;