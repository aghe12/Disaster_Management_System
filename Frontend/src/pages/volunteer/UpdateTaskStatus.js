// import React, { useEffect, useState } from 'react';

// const ViewTasks = () => {
//     const [tasks, setTasks] = useState([]);
//     const [volunteerName, setVolunteerName] = useState('');

//     useEffect(() => {
//         // Fetch all tasks
//         const fetchTasks = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/tasks');
//                 const data = await response.json();
//                 setTasks(data);
//             } catch (error) {
//                 console.error('Error fetching tasks:', error);
//             }
//         };

//         fetchTasks();
//     }, []);

//     const handleAvailabilityChange = async (taskId, status) => {
//         if (!volunteerName) {
//             alert('Please enter your name before updating availability.');
//             return;
//         }

//         try {
//             const response = await fetch(`http://localhost:5000/api/tasks/${taskId}/availability`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ volunteerName, status }),
//             });

//             if (response.ok) {
//                 const updatedTask = await response.json();
//                 setTasks((prevTasks) =>
//                     prevTasks.map((task) => (task._id === taskId ? updatedTask.task : task))
//                 );
//             } else {
//                 console.error('Error updating availability');
//             }
//         } catch (error) {
//             console.error('Error updating availability:', error);
//         }
//     };
//     const styles = {
//         container: {
//             padding: '20px',
//             backgroundColor: '#f9f9f9',
//         },
//         heading: {
//             textAlign: 'center',
//             color: '#333',
//         },
//         inputGroup: {
//             marginBottom: '20px',
//             textAlign: 'center',
//         },
//         label: {
//             display: 'block',
//             marginBottom: '8px',
//             color: '#333',
//         },
//         input: {
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//             width: '50%',
//             margin: '0 auto',
//         },
//         taskList: {
//             listStyle: 'none',
//             padding: 0,
//         },
//         taskItem: {
//             backgroundColor: '#fff',
//             marginBottom: '10px',
//             padding: '15px',
//             borderRadius: '5px',
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//         },
//         availableButton: {
//             backgroundColor: '#4CAF50',
//             color: '#fff',
//             padding: '10px',
//             margin: '5px',
//             border: 'none',
//             cursor: 'pointer',
//         },
//         notAvailableButton: {
//             backgroundColor: '#e74c3c',
//             color: '#fff',
//             padding: '10px',
//             margin: '5px',
//             border: 'none',
//             cursor: 'pointer',
//         },
//     };
    

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>All Tasks</h1>
//             <div style={styles.inputGroup}>
//                 <label style={styles.label}>Your Name:</label>
//                 <input
//                     type="text"
//                     value={volunteerName}
//                     onChange={(e) => setVolunteerName(e.target.value)}
//                     style={styles.input}
//                     placeholder="Enter your name"
//                 />
//             </div>
//             <ul style={styles.taskList}>
//                 {tasks.map((task) => (
//                     <li key={task._id} style={styles.taskItem}>
//                         <h3>{task.title}</h3>
//                         <p>{task.description}</p>
//                         <p><strong>Assigned To:</strong> {task.assignedTo || 'Unassigned'}</p>
//                         <p><strong>Due Date:</strong> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</p>
//                         <p><strong>Status:</strong> {task.status}</p>
//                         <p><strong>Availability:</strong></p>
//                         <ul>
//                             {task.availability.map((entry, index) => (
//                                 <li key={index}>
//                                     {entry.volunteerName}: {entry.status}
//                                 </li>
//                             ))}
//                         </ul>
//                         <div>
//                             <button
//                                 onClick={() => handleAvailabilityChange(task._id, 'Available')}
//                                 style={styles.availableButton}
//                             >
//                                 Available
//                             </button>
//                             <button
//                                 onClick={() => handleAvailabilityChange(task._id, 'Not Available')}
//                                 style={styles.notAvailableButton}
//                             >
//                                 Not Available
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ViewTasks;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VolunteerTask = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        assignedTo: '',
        dueDate: '',
        status: 'Not Started',
    });

    const [status, setStatus] = useState('Not Started');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/tasks', newTask);
            if (response.status === 200) {
                fetchTasks(); // Refresh tasks
                setNewTask({ title: '', description: '', assignedTo: '', dueDate: '', status: 'Not Started' });
            } else {
                console.error('Error adding task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleStatusUpdate = async (taskTitle, newStatus) => {
        try {
            const response = await axios.put('http://localhost:5000/api/tasks/updateStatus', {
                title: taskTitle, // Use title or any unique identifier instead of ID
                status: newStatus
            });
            if (response.status === 200) {
                fetchTasks(); // Refresh tasks after status update
            } else {
                console.error('Error updating status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const styles = {
        container: { maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' },
        heading: { textAlign: 'center', color: '#333' },
        form: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
        input: { padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' },
        button: { padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
        buttonHover: { backgroundColor: '#45a049' },
        taskList: { listStyle: 'none', padding: '0' },
        taskItem: { backgroundColor: '#f9f9f9', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' },
        taskTitle: { fontWeight: 'bold', marginBottom: '5px' },
        taskDetail: { margin: '0', color: '#555' },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Volunteer Tasks</h1>

            {/* Add Task Form
            <form style={styles.form} onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Title"
                    style={styles.input}
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Description"
                    style={styles.input}
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Assigned To"
                    style={styles.input}
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                />
                <input
                    type="date"
                    style={styles.input}
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                />
                <select
                    style={styles.input}
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    required
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Add Task
                </button>
            </form> */}

            {/* Task List */}
            <ul style={styles.taskList}>
                {tasks.map((task) => (
                    <li key={task._id} style={styles.taskItem}>
                        <h3 style={styles.taskTitle}>{task.title}</h3>
                        <p style={styles.taskDetail}>{task.description}</p>
                        <p style={styles.taskDetail}>
                            <strong>Assigned To:</strong> {task.assignedTo || 'Unassigned'}
                        </p>
                        <p style={styles.taskDetail}>
                            <strong>Due Date:</strong>{' '}
                            {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}
                        </p>
                        <p style={styles.taskDetail}>
                            <strong>Status:</strong> {task.status}
                        </p>
                        {/* Status Update Dropdown */}
                        <select
                            value={task.status}
                            onChange={(e) => handleStatusUpdate(task.title, e.target.value)}
                        >
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VolunteerTask;
