const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const PostSchema = new Schema({
//     title: { type: String, required: true },
//     url: { type: String, required: true },
//     summary: { type: String, required: true }
// })

const PostSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    // subreddit: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String, required: true }
    // _creator: { type: Schema.ObjectId, ref: 'User', required: true },
})

PostSchema.pre('save', function(next) {
    // SET createdAt AND updatedAt
    const now = new Date()
    this.updatedAt = now
    if (!this.createdAt) {
        this.createdAt = now
    }
    next();
})

module.exports = mongoose.model('Post', PostSchema);