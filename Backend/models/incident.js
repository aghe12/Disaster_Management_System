const mongoose = require('mongoose');

// Define the Incident Schema
const incidentSchema = new mongoose.Schema(
  {
    incidentType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create the model
const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;
