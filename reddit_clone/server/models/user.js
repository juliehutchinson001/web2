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