const Report = require('../models/reportModel');

// Controller function to handle report submission
exports.submitReport = async (req, res) => {
    const { message } = req.body;

    try {
        const newReport = new Report({ message });
        await newReport.save();
        res.status(200).json({ success: true, message: 'Report submitted successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};
exports.viewreport= async (req, res) => {
try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
} catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ error: 'Failed to fetch reports.' });
}
};
