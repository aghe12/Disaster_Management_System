// // controllers/disasterController.js
// const Disaster = require('../models/disaster');

// // POST: Add a new disaster
// const addDisaster = async (req, res) => {
//     const { name, location, severity, description } = req.body;

//     try {
//         const newDisaster = new Disaster({
//             name,
//             location,
//             severity,
//             description,
//         });

//         await newDisaster.save();
//         res.status(201).json({ message: 'Disaster added successfully', disaster: newDisaster });
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to add disaster', details: err.message });
//     }
// };
// const updateDisaster = async (req, res) => {
//     const { id } = req.params;
//     const { name, location, severity, description } = req.body;

//     try {
//         // Find the disaster by its ID
//         const disaster = await Disaster.findById(id);

//         if (!disaster) {
//             return res.status(404).json({ message: 'Disaster not found' });
//         }

//         // Update the disaster with the new data
//         disaster.name = name || disaster.name;
//         disaster.location = location || disaster.location;
//         disaster.severity = severity || disaster.severity;
//         disaster.description = description || disaster.description;

//         // Save the updated disaster to the database
//         await disaster.save();

//         res.status(200).json({ message: 'Disaster updated successfully', disaster });
//     } catch (err) {
//         res.status(500).json({ message: 'Error updating disaster', error: err.message });
//     }
// };

// module.exports = { addDisaster,updateDisaster };


const multer = require('multer');
const path = require('path');
const Disaster = require('../models/disaster');

// Set up multer storage to save uploaded files in the 'uploads' folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder where images will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to the file name
    }
});

// Create an instance of multer with the storage configuration
const upload = multer({ storage: storage });

// POST: Add a new disaster, including image upload
const addDisaster = async (req, res) => {
    // 'image' is the name of the file field on the form
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to upload image', details: err.message });
        }

        const { name, location, severity, description } = req.body;
        const imagePath = req.file ? req.file.path : null; // If image is uploaded, use its path

        try {
            const newDisaster = new Disaster({
                name,
                location,
                severity,
                description,
                image: imagePath, // Save the image path in the database
            });

            await newDisaster.save();
            res.status(201).json({ message: 'Disaster added successfully', disaster: newDisaster });
        } catch (err) {
            res.status(500).json({ error: 'Failed to add disaster', details: err.message });
        }
    });
};
const getAllDisasters = async (req, res) => {
    try {
        const disasters = await Disaster.find(); // Fetch all disasters from the database
        res.status(200).json(disasters);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching disasters', error: err.message });
    }
};
// PUT: Update an existing disaster (including the image)
const updateDisaster = async (req, res) => {
    // 'image' is the name of the file field on the form
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to upload image', details: err.message });
        }

        const { id } = req.params;
        const { name, location, severity, description } = req.body;
        const imagePath = req.file ? req.file.path : null; // If a new image is uploaded, use the new image path

        try {
            // Find the disaster by its ID
            const disaster = await Disaster.findById(id);

            if (!disaster) {
                return res.status(404).json({ message: 'Disaster not found' });
            }

            // Update the disaster with the new data, including the image if uploaded
            disaster.name = name || disaster.name;
            disaster.location = location || disaster.location;
            disaster.severity = severity || disaster.severity;
            disaster.description = description || disaster.description;
            disaster.image = imagePath || disaster.image; // If image is provided, update it

            // Save the updated disaster to the database
            await disaster.save();

            res.status(200).json({ message: 'Disaster updated successfully', disaster });
        } catch (err) {
            res.status(500).json({ message: 'Error updating disaster', error: err.message });
        }
    });
};

module.exports = { addDisaster, updateDisaster,getAllDisasters };
