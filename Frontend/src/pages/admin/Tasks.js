// import React from 'react';

// const ViewVolunteerTasks = () => {
//     return (
//         <div style={styles.container}>
//             <div style={styles.content}>
//                 <h2 style={styles.header}>View Volunteer Tasks</h2>
//                 <p style={styles.paragraph}>Here you can view all tasks assigned to volunteers.</p>
//                 {/* Display volunteer tasks here */}
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '20px',
//     },
//     content: {
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
//         padding: '30px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//         width: '100%',
//         maxWidth: '800px',
//     },
//     header: {
//         textAlign: 'center',
//         fontSize: '28px',
//         marginBottom: '20px',
//         color: '#333',
//     },
//     paragraph: {
//         fontSize: '18px',
//         lineHeight: '1.6',
//         color: '#555',
//     },
// };

// export default ViewVolunteerTasks;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VolunteerTask = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        assignedTo: '',
        dueDate: '',
        status:'Not Started'
    });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
            if (response.ok) {
                fetchTasks();
                setNewTask({ title: '', description: '', assignedTo: '', dueDate: '' });
            } else {
                console.error('Error adding task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    // Inline styles
    const styles = {
        container: { maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' },
        heading: { textAlign: 'center', color: '#333' },
        form: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
        input: { padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' },
        button: {
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        buttonHover: { backgroundColor: '#45a049' },
        taskList: { listStyle: 'none', padding: '0' },
        taskItem: {
            backgroundColor: '#f9f9f9',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        taskTitle: { fontWeight: 'bold', marginBottom: '5px' },
        taskDetail: { margin: '0', color: '#555' },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Volunteer Tasks</h1>

            {/* Add Task Form */}
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
                    style={{ ...styles.button }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Add Task
                </button>
            </form>

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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VolunteerTask;
