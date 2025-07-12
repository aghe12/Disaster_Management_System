const express = require('express');
const { signupAdmin, signupVolunteer, signupUser,login } = require('../controllers/authController');
const router = express.Router();

// Admin signup route
router.post('/signup/admin', signupAdmin);

// Volunteer signup route
router.post('/signup/volunteer', signupVolunteer);

// User signup route
router.post('/signup/user', signupUser);
router.post('/login', login);

module.exports = router;
