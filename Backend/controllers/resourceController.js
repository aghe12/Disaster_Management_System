const Resource = require('../models/Resource');

// Post a new resource
exports.createResource = async (req, res) => {
    const { resourceName, quantity, description } = req.body;

    try {
        const newResource = new Resource({ resourceName, quantity, description });
        await newResource.save();
        res.status(201).json({ message: 'Resource posted successfully', resource: newResource });
    } catch (error) {
        res.status(500).json({ message: 'Error posting resource', error });
    }
};

// Get all resources
exports.getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resources', error });
    }
};
// Update quantities for all resources
exports. updateAllResourceQuantities = async (req, res) => {
  const { updates } = req.body; // `updates` should be an array of objects { id, quantity }

  try {
      if (!Array.isArray(updates)) {
          return res.status(400).json({ message: 'Invalid input format. Expected an array of updates.' });
      }

      // Perform updates for each resource
      const results = await Promise.all(
          updates.map(async (update) => {
              const resource = await Resource.findById(update.id);
              if (!resource) {
                  return { id: update.id, status: 'Resource not found' };
              }
              resource.quantity = update.quantity;
              await resource.save();
              return { id: update.id, status: 'Updated successfully' };
          })
      );

      res.status(200).json({ message: 'Resource quantities updated', results });
  } catch (error) {
      res.status(500).json({ message: 'Error updating resource quantities', error });
  }
};
