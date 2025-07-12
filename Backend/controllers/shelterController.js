const Shelter = require('../models/shelter');

// Add Shelter
const addShelter = async (req, res) => {
    try {
        const { name, location, capacity, availableSpace, contact } = req.body;

        // Create a new shelter
        const shelter = new Shelter({
            name,
            location,
            capacity,
            availableSpace,
            contact,
        });

        const savedShelter = await shelter.save();
        res.status(201).json({ message: 'Shelter added successfully!', data: savedShelter });
    } catch (error) {
        console.error('Error adding shelter:', error);
        res.status(500).json({ message: 'Error adding shelter', error });
    }
};

// Update Shelter
// Update shelter details
const updateShelter = async (req, res) => {
    const { id } = req.params;
    const { name, location, capacity, availableSpace, contact, latitude, longitude } = req.body;
    const image = req.file ? req.file.path : null;

    try {
        const shelter = await Shelter.findById(id);
        if (!shelter) {
            return res.status(404).json({ message: 'Shelter not found' });
        }

        shelter.name = name || shelter.name;
        shelter.location = location || shelter.location;
        shelter.capacity = capacity || shelter.capacity;
        shelter.availableSpace = availableSpace || shelter.availableSpace;
        shelter.contact = contact || shelter.contact;
        shelter.latitude = latitude || shelter.latitude;
        shelter.longitude = longitude || shelter.longitude;
        if (image) shelter.image = image;

        await shelter.save();
        res.status(200).json({ message: 'Shelter updated successfully', shelter });
    } catch (error) {
        res.status(500).json({ message: 'Error updating shelter', error });
    }
};


// Get All Shelters
const getAllShelters = async (req, res) => {
    try {
        const shelters = await Shelter.find();
        res.status(200).json({ message: 'Shelters fetched successfully!', data: shelters });
    } catch (error) {
        console.error('Error fetching shelters:', error);
        res.status(500).json({ message: 'Error fetching shelters', error });
    }
};

module.exports = {
    addShelter,
    updateShelter,
    getAllShelters,
};
