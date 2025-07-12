const EmergencyContact = require('../models/emergencyContact');

// Create a new emergency contact
const createEmergencyContact = async (req, res) => {
    try {
        const { name, phone, relation } = req.body;

        const newContact = new EmergencyContact({
            name,
            phone,
            relation,
        });

        await newContact.save();
        res.status(201).json({ message: 'Emergency Contact Saved Successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving emergency contact', error });
    }
};

module.exports = { createEmergencyContact };
