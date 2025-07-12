// const express = require('express');
// const {
//     createTask,
//     getTasks,
//     updateTask,
//     deleteTask,
// } = require('../controllers/taskController');
// const { getAllTasks, updateAvailability,updateAvailabilityByName } = require('../controllers/taskController');

// const router = express.Router();

// // Create a task
// router.post('/tasks', createTask);

// // Get all tasks
// router.get('/tasks', getTasks);

// // Update a task
// router.put('/tasks/:id', updateTask);

// // Delete a task
// router.delete('/tasks/:id', deleteTask);
// // Get tasks assigned to a specific volunte

// // Update availability for a task
// router.put('/tasks/:id/availability', updateAvailability);
// // Get all tasks
// router.get('/tasks', getAllTasks);

// // Update availability for a task
// router.put('/tasks/:id/availability', updateAvailability);
// router.put('/tasks/:id/availability', updateAvailabilityByName);




// module.exports = router;

const express = require('express');
const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
    getTasksAssignedToVolunteer,
    updateAvailability,
    updateAvailabilityByName,
    updateTaskStatusByTitle, // New controller for updating status by title
} = require('../controllers/taskController');

const router = express.Router();

// Create a task
router.post('/tasks', createTask);

// Get all tasks
router.get('/tasks', getTasks);

// Update task status by title (instead of ID)
router.put('/tasks/updateStatus', updateTaskStatusByTitle); // Route to update status by title

// Update a task (by ID)
router.put('/tasks/:id', updateTask);

// Delete a task (by ID)
router.delete('/tasks/:id', deleteTask);



// Update availability for a task (by ID)
router.put('/tasks/:id/availability', updateAvailability);

// Update availability for a task (by name)
router.put('/tasks/availability/:taskName', updateAvailabilityByName); // New route for availability update by task name

module.exports = router;
