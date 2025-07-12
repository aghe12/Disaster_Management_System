const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    availableSpace: {
        type: Number,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Store the image URL or path if the image is uploaded
    },
    coordinates: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        }
    }
});

module.exports = mongoose.model('Shelter', ShelterSchema);
