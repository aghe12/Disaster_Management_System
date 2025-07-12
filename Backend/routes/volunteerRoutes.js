const express = require('express');
const router = express.Router();
const { getVolunteerProfile, updateVolunteerProfile } = require('../controllers/volunteerController');
const { getAllVolunteers } = require('../controllers/viewVolunteerController');
// GET profile
router.get('/', getVolunteerProfile);

// PUT update profile
router.put('/', updateVolunteerProfile);

router.get('/all',getAllVolunteers);

module.exports = router;
