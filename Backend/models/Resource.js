const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    resourceName: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;
