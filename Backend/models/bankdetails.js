const mongoose = require('mongoose');

const bankDetailsSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: true,
        trim: true,
    },
    accountholderName: {
        type: String,
        required: true,
        trim: true,
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true,
    },
    ifscCode: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('BankDetails', bankDetailsSchema);
