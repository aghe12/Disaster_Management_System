const Task = require('../models/Task');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json({ error: 'Error creating task' });
    }
};

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: 'Error updating task' });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting task' });
    }
};
// Get tasks assigned to a specific volunteer
exports.getAssignedTasks = async (req, res) => {
    try {
        const { volunteerName } = req.params;
        const tasks = await Task.find({ assignedTo: volunteerName });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};
// Update availability for a specific task
exports.updateAvailability = async (req, res) => {
    try {
        const { id } = req.params;
        const { availability } = req.body;

        const task = await Task.findByIdAndUpdate(
            id,
            { availability },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Availability updated successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Error updating availability', error });
    }
};
// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};
// Update volunteer availability by name
exports.updateAvailabilityByName = async (req, res) => {
    const { id } = req.params; // Task ID
    const { volunteerName, status } = req.body;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Check if volunteer already exists in availability array
        const volunteerIndex = task.availability.findIndex(
            (entry) => entry.volunteerName === volunteerName
        );

        if (volunteerIndex !== -1) {
            // Update existing volunteer status
            task.availability[volunteerIndex].status = status;
        } else {
            // Add new volunteer to availability array
            task.availability.push({ volunteerName, status });
        }

        await task.save();
        res.status(200).json({ message: 'Availability updated successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Error updating availability', error });
    }
};
exports.updateTaskStatusByTitle = async (req, res) => {
    const { title, status } = req.body;
    
    try {
        // Find the task by title (you can also use other unique fields like assignedTo)
        const task = await Task.findOneAndUpdate({ title }, { status }, { new: true });
        
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        
        res.json(task); // Return the updated task
    } catch (error) {
        res.status(500).json({ message: 'Error updating task status', error: error.message });
    }
};
exports.updateAvailabilityByName = async (req, res) => {
    const { taskName } = req.params; // Use the task name to find the task
    const { availability } = req.body; // Availability field to update

    try {
        // Find the task by name and update its availability
        const task = await Task.findOneAndUpdate({ title: taskName }, { availability }, { new: true });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task); // Return the updated task with new availability
    } catch (error) {
        res.status(500).json({ message: 'Error updating availability', error: error.message });
    }
};
exports.updateAvailability = async (req, res) => {
    const { id } = req.params;
    const { availability } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, { availability }, { new: true });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error updating availability', error: error.message });
    }
};
