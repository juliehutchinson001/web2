const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    password: { type: String, select: false, required: true },
    username: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
});

UserSchema.pre('save', function(next) {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(this.password, salt, function(err, hash) {
            this.password = hash;
            next();
        });
    });

});

UserSchema.methods.comparePassword = function(password, done) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        done(err, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);