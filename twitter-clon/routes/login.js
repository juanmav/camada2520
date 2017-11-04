const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/', function (req, res) {

    // { email: 'a@a.com', password: '123'}
    let data = req.body;
    User
        .findOne({ email : data.email })
        .then( function (user) {
            if (user && (user.password == data.password)){
                let json = user.toJSON();
                delete json.password;
                let token = jwt.sign(json, 'mysecretolargo');
                res.status(201).json({token});
            } else {
                res.status(401).json({ message: 'credenciales invalidas'});
            }
        })
});

module.exports = router;