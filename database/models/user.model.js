const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    location: {
        //figure out what this should be instead of string -- location coordinates?
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
    },
    posts: {
        type: Array
    },
    boards: {
        type: Array
    },
    following: {
        type: Array
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
