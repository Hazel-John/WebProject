const mongoose = require('mongoose');

const Schema  =mongoose.Schema;

const TransactionSchema = new Schema({
    username: {
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
    mobileno: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    paymentid:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
});


const Transaction = mongoose.model('transaction details', TransactionSchema);

module.exports = Transaction;