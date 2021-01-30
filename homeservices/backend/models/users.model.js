const mongoose = require('mongoose');

const Schema  =mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    emailid: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    mobileno: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    }
}, {
    timestamps: true,
});


const User = mongoose.model('users', UserSchema);

module.exports = User;