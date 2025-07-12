import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ViewShelter = () => {
    const [shelters, setShelters] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Fetch shelter data from the API
        const fetchShelters = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/shelter/all');
                setShelters(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load shelters');
                setLoading(false);
            }
        };

        fetchShelters();
    },[]);
    return (
        <div style={styles.container}>
            <div style={styles.shelterContainer}>
                <h2 style={styles.title}>Available Shelters</h2>
                {error && <p style={styles.error}>{error}</p>}
                {shelters.length === 0 ? (
                    <p>No shelters available.</p>
                ) : (
                    <ul style={styles.shelterList}>
                        {shelters.map((shelter) => (
                            <li key={shelter._id} style={styles.shelterItem}>
                                <h3 style={styles.shelterName}>{shelter.name}</h3>
                                <p style={styles.shelterDetails}>
                                    <strong>Location:</strong> {shelter.location}<br />
                                    <strong>Capacity:</strong> {shelter.capacity}<br />
                                    <strong>Available Space:</strong> {shelter.availableSpace}<br />
                                    <strong>Contact:</strong> {shelter.contact}<br />
                                    <strong>Latitude:</strong> {shelter.latitude}<br />
                                    <strong>Longitude:</strong> {shelter.longitude}
                                </p>
                                {shelter.image && (
                                    <img src={shelter.image} alt="Shelter" style={styles.shelterImage} />
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    shelterContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginBottom: '10px',
    },
    shelterList: {
        listStyleType: 'none',
        padding: 0,
        marginTop: '20px',
    },
    shelterItem: {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    shelterName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    shelterDetails: {
        fontSize: '10px',
        color: '#666',
        textAlign: 'left',
    },
    shelterImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
        marginTop: '10px',
    },
};

export default ViewShelter;
