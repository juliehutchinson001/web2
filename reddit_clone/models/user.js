const mongoose = require('mongoose');
// Bcrypt: Password encryption library installed using npm
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    password: { type: String, select: false },
    username: { type: String, required: true }
});

// UserSchema methods

UserSchema.methods.encryptPassword = function(plainTextPassword) {
    if (!plainTextPassword || typeof plainTextPassword != "string") {
        console.log("Password is not valid");
        return ''
    } else {
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainTextPassword, salt);
    }
};

UserSchema.methods.comparePassword = function(attemptedPassword) {
    if (!attemptedPassword || typeof plainTextPassword != "string") {
        console.log("Password not acceptable (compare)");
        return false;
    }
    return bcrypt.compareSync(attemptedPassword, hash);
};

UserSchema.pre('save', function(next) {
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    if (this.isModified('password')) {
        console.log("Password updated in save method")
        this.password = this.encryptPassword(this.password);
    }
    next();
});

UserSchema.pre('update', function(next) {
    const password = this.getUpdate().$set.password;
    if (!password) {
        return next();
    }
    console.log("Password updated in update method")
    this.getUpdate().$set.password = this.encryptPassword(password);
    next()

});

module.exports = mongoose.model('User', UserSchema);