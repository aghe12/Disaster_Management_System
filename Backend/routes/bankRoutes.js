const express = require('express');
const router = express.Router();
const {
    addBankDetail,
    getAllBankDetails,
    updateBankDetail,
    deleteBankDetail,
} = require('../controllers/bankController');

// Route to add a new bank detail
router.post('/add', addBankDetail);

// Route to get all bank details
router.get('/all', getAllBankDetails);

// Route to update a bank detail
router.put('/:id', updateBankDetail);

// Route to delete a bank detail
router.delete('/:id', deleteBankDetail);

module.exports = router;
