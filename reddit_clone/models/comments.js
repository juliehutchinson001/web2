const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    title: String,
    body: String,
    date: Date
});

const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date,
    comments: [Comments],
    meta: {
        votes: Number,
        favs: Number
    }
});

CommentSchema.pre('save', function(next) {
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

// module.exports = mongoose.model('Comments', CommentSchema);
module.exports = mongoose.model('BlogPost', BlogPost);