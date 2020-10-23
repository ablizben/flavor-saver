const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    photo: {
        type: String,
        required: true
    },
    location: {
        //figure out what this should be instead of string -- location coordinates?
        type: String,
        required: true
    },
    caption: {
        type: String,
    },
    hashtags: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
