// routes/disasterRoutes.js

const express = require('express');
const router = express.Router();
const { addDisaster } = require('../controllers/disasterController');
const {getAllDisasters}=require('../controllers/disasterController')
// POST route to add disaster
router.post('/add', addDisaster);
router.get('/all', getAllDisasters);

// Export the router to be used in the server
module.exports = router;
