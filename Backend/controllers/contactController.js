// controllers/contactController.js
const ContactMessage = require('../models/contactMessageModel');

// Send message to admin
exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body;

        // Validate message
        if (!message || message.trim() === '') {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Create new contact message
        const newMessage = new ContactMessage({
            message,
        });

        // Save message to the database
        await newMessage.save();
        res.status(200).json({ success: 'Message sent to admin successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};
