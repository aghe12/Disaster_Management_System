const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: { type: String },
    dueDate: { type: Date },
    status: { type: String, },
    availability: [
        {
            volunteerName: { type: String, required: true },
            status: { type: String, enum: ['Available', 'Not Available'], default: 'Available' },
        },
    ],
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
