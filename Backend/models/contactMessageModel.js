// models/contactMessageModel.js
const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    dateSent: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('ContactMessage', contactMessageSchema);
