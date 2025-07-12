const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');
const { getAllIncidents } = require('../controllers/incidentController');


// POST request to create an incident
router.post('/incident', incidentController.createIncident);
router.get('/incidents', getAllIncidents);


module.exports = router;
