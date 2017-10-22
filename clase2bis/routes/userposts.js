const express = require('express');
const router = express.Router({ mergeParams: true});
const { userList, postList } = require('../data');

// Configuracion.
// /users/:userId/posts'/'
router.get('/',function (req, res) {
    let userId = req.params.userId;

    //find user
    // filter posts

    res.json({ message: 'posts de userId: ' + userId});
});

router.get('/:postId', function (req, res) {
    let userId = req.params.userId;
    let postId = req.params.postId;

    // find user
    // find post

    res.json({ message: 'postid: '+ postId + ' userId: ' + userId});
});

module.exports = router;