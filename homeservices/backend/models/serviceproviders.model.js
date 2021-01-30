const mongoose = require('mongoose');

const Schema  =mongoose.Schema;

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
    },
    emailid: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    serviceType: {
        type: String,
        required: true,
        trim: true,
    },
    mobileno: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    charge: {
        type: Number,
        required: true,
        trim: true,
    }

}, {
    timestamps: true,
});


const ServiceProvider = mongoose.model('service provider', serviceProviderSchema);

module.exports = ServiceProvider;