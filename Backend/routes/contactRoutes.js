// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contactController');

// Route to handle sending messages
router.post('/send', sendMessage);

module.exports = router;
