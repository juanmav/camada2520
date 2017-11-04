const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');


router.get('/', function (req, res) {
    Tweet
        .find({})
        .populate('author')
        .then(tweets => res.status(200).json(tweets))
        .catch(err => res.status(503).json(err));
});

// GET ONE
router.get('/:tweetId', function (req, res) {
    let tweetId = req.params.tweetId;
    Tweet
        .findById(tweetId)
        .then(t => {
            if(t){
                res.status(200).json(t);
            } else {
                res.status(404).json({ message: 'No existe el tweet!'});
            }
        })
        .catch(err => res.status(503).json(err))
});

// POST
// TOmar el userId de req.user._id que es el autor.

router.post('/', function (req, res) {
    let data = req.body;
    let userId = req.user._id;

    data.author = userId;

    let newTweet = new Tweet(data);

    newTweet
        .save()
        .then( t => res.status(201).json(t))
        .catch( err => res.status(503).json(err));
});

// PUT
// TOmar el userId de req.user._id verificar que sea el autor

// TODO tarea para el hogar!

// DELETE
// TOmar el userId de req.user._id verificar que sea el autor;

router.delete('/:tweetId', function (req, res) {
    let tweetId = req.params.tweetId;
    let userId = req.user._id;
    let user = req.user;

    Tweet
        .findById(tweetId)
        .then(t => {
            if (t && (t.author == user._id || user.isAdmin) ){
                return t.remove()
            } else {
                return null;
            }
        })
        .then( result => {
            if (result){
                res.status(202).json(result);
            } else {
                res.status(400).json({ message: 'no se pudo procesar'});
            }
        })
        .catch( err => res.status(503).json(err));
});


module.exports = router;