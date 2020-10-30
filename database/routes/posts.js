const router = require('express').Router();
let Post = require('../models/post.model');

//Gets posts from database
//"/posts"
router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//newest first
//"/posts/order/newest"
router.route('/order/newest').get((req, res) => {
    Post.find().sort({createdAt: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Gets post by id
//"/posts/:id"
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Gets posts by user id
//"/posts/user/:userId"
router.route('/user/:userId').get((req, res) => {
    Post.find({ "userId": req.params.userId })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Gets posts by user email
//"/posts/email/:email"
router.route('/email/:email').get((req, res) => {
    Post.find({ "userEmail": req.params.email })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Adds a post to the database
router.route('/add').post((req, res) => {
    const photo = req.body.photo;
    const location = req.body.location;
    const caption = req.body.caption;
    const hashtags = req.body.hashtags;
    // const date = Date.parse(req.body.date);
    const userId = req.body.userId;
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;

    const newPost = new Post({
        photo, 
        location, 
        caption, 
        hashtags,
        // date,
        userId,
        userName,
        userEmail
    });

    newPost.save()
        .then(() => res.json('New post created!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
