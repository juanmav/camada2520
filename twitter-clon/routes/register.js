const express = require('express');
const router = express.Router();
const User = require('../models/User');

//crear usuario
router.post('/',(req,res)=>{
    let data = req.body;

    data.isAdmin = false;

    let newUser = new User(data);

    newUser
        .save()
        .then((p)=>{res.status(201).json(p)})
        .catch((e)=>res.status(503).json(e));
});

module.exports = router;