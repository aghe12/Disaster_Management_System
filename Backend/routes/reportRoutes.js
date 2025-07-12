const express = require('express');
const { submitReport } = require('../controllers/reportController');
const{viewreport}=require('../controllers/reportController');
const router = express.Router();

// Route to handle report submission
router.post('/submit', submitReport);
router.get('/',viewreport);
   

module.exports = router;


module.exports = router;
