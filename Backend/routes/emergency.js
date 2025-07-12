const express = require('express');
const router = express.Router();
const EmergencyContact = require('../models/emergencyContact');

// POST: Save emergency contact details
router.post('/emergency', async (req, res) => {
    try {
        const { name, phone, relation } = req.body;

        // Validate inputs
        if (!name || !phone || !relation) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new emergency contact
        const newContact = new EmergencyContact({ name, phone, relation });
        await newContact.save();

        res.status(201).json({ message: 'Emergency contact saved successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET: Fetch all emergency contacts (optional)
router.get('/emergency', async (req, res) => {
    try {
        const contacts = await EmergencyContact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
