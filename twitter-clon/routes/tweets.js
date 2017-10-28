const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');


router.get('/', function (req, res) {
    let user = req.user;

    console.log(user);

    Tweet
        .find({})
        .then(tweets => res.status(200).json(tweets))
        .catch(err => res.status(503).json(err));
});

// GET ONE
// POST
// PUT
// DELETE

module.exports = router;