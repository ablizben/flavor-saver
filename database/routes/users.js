const router = require('express').Router();
let User = require('../models/user.model');

//Gets users from database
//"/users"
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Gets user by id
//"/users/:id"
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Adds a user to the database
router.route('/add').post((req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const displayName = req.body.displayName;
    const location = req.body.location;
    const profilePhoto = "https://via.placeholder.com/150"
    const posts = ["Post1", "Post 2"];
    const boards = ["Board 1", "Board 2"];
    const following = ["User 1", "User 2"];

    const newUser = new User({
        email, 
        username, 
        displayName, 
        location,
        profilePhoto, 
        posts, 
        boards, 
        following
    });

    newUser.save()
        .then(() => res.json('New user created!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
