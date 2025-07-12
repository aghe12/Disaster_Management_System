const Volunteer = require('../models/volunteerModel');

// Get Volunteer Profile
const getVolunteerProfile = async (req, res) => {
  try {
    const volunteer = await Volunteer.findOne();
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }
    res.json(volunteer);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Update Volunteer Profile
const updateVolunteerProfile = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const updatedVolunteer = await Volunteer.findOneAndUpdate(
      { email: email }, // Assuming email is unique
      { name, phone },
      { new: true }
    );
    if (!updatedVolunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }
    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    alert("not updated")
  }
};

module.exports = { getVolunteerProfile, updateVolunteerProfile };
