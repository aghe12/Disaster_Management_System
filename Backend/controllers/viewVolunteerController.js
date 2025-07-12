const Volunteer = require('../models/volunteer'); // Assuming you have a Volunteer model

// Controller to fetch all volunteers
const getAllVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find(); // Fetch all volunteers from the database
        res.status(200).json(volunteers); // Send the list of volunteers as a response
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching volunteers',
            error: err.message,
        });
    }
};

module.exports = {
    getAllVolunteers,
};
