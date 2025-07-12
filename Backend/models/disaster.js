// models/Disaster.js
const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: String, 
   
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Disaster = mongoose.model('Disaster', disasterSchema);

module.exports = Disaster;
