const Incident = require('../models/incident');

// Controller function to handle the creation of an incident
const createIncident = async (req, res) => {
  try {
    // Destructure request body
    const { incidentType, description, severity } = req.body;

    // Create a new incident record
    const newIncident = new Incident({
      incidentType,
      description,
      severity,
    });

    // Save the incident to the database
    const savedIncident = await newIncident.save();

    // Send response
    res.status(201).json({
      message: 'Incident submitted successfully!',
      incident: savedIncident,
    });
  } catch (error) {
    console.error('Error creating incident:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Get all incidents
const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error) {
    console.error('Error fetching incidents:', error);
    res.status(500).json({ message: 'Failed to fetch incidents' });
  }
};



module.exports = { createIncident,getAllIncidents };
