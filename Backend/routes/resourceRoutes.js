const express = require('express');
const router = express.Router();
const { createResource, getAllResources,updateAllResourceQuantities } = require('../controllers/resourceController');

// Route to post a resource
router.post('/resources', createResource);

// Route to get all resources
router.get('/resources', getAllResources);
router.put('/resources', updateAllResourceQuantities);


module.exports = router;
