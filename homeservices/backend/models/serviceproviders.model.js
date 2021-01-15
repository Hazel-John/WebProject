const mongoose = require('mongoose');

const Schema  =mongodb.Schema;

const serviceProviderSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: true,
    }
}, {
    timestamps: true,
});


const ServiceProvider = mongoose.model('service provider', ServiceProviderSchema);

module.exports = ServiceProvider;