const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,  // Ensure username is provided
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures unique emails
    },
    password: {
        type: String,
        required: true,  // Ensure password is provided
    },
    userType: { type: String, default: 'user' },
});


// Create the model
const User = mongoose.model('user', userSchema);

module.exports = User;
