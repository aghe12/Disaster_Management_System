import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewShelters = () => {
    const [shelters, setShelters] = useState([]);
    const [updateData, setUpdateData] = useState({});
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch shelters from the backend
    const fetchShelters = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/shelter/all');
            setShelters(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching shelters:', err);
            setError('Failed to load shelters');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShelters();
    }, []);

    // Update shelter
    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/shelter/update/${id}`, updateData[id]);

            if (response.status !== 200) {
                throw new Error('Error updating shelter');
            }

            setSuccessMessage('Shelter updated successfully!');
            fetchShelters(); // Refresh shelter list
        } catch (err) {
            console.error('Error updating shelter:', err);
            setError('Unable to update shelter.');
        }
    };

    // Handle input changes for updates
    const handleInputChange = (id, field, value) => {
        setUpdateData((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                [field]: value,
            },
        }));
    };

    if (loading) {
        return <p>Loading shelters...</p>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Shelters</h2>
            {error && <p style={styles.error}>{error}</p>}
            {successMessage && <p style={styles.success}>{successMessage}</p>}
            <ul style={styles.list}>
                {shelters.map((shelter) => (
                    <li key={shelter._id} style={styles.listItem}>
                        <p><strong>Name:</strong> {shelter.name}</p>
                        <p><strong>Location:</strong> {shelter.location}</p>
                        <p><strong>Capacity:</strong> {shelter.capacity}</p>
                        <p><strong>Available Space:</strong> {shelter.availableSpace}</p>
                        <p><strong>Contact:</strong> {shelter.contact}</p>
                        <p><strong>Latitude:</strong> {shelter.latitude}</p>
                        <p><strong>Longitude:</strong> {shelter.longitude}</p>

                        {/* Update form */}
                        <input
                            type="text"
                            placeholder="Name"
                            value={updateData[shelter._id]?.name || ''}
                            onChange={(e) => handleInputChange(shelter._id, 'name', e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Available Space"
                            value={updateData[shelter._id]?.availableSpace || ''}
                            onChange={(e) => handleInputChange(shelter._id, 'availableSpace', e.target.value)}
                            style={styles.input}
                        />
                        <button
                            onClick={() => handleUpdate(shelter._id)}
                            style={styles.button}
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    },
    input: {
        marginTop: '5px',
        padding: '8px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '8px 12px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
    },
    success: {
        color: 'green',
    },
};

export default ViewShelters;
