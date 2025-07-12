import React, { useEffect, useState } from 'react';

const ViewDisaster = () => {
    const [disasters, setDisasters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch disaster data from backend when the component mounts
    useEffect(() => {
        const fetchDisasters = async () => {
            try {
                // Call the API to get the disaster data
                const response = await fetch('http://localhost:5000/api/disaster/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch disasters');
                }
                const data = await response.json();
                setDisasters(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchDisasters();
    }, []);

    // Show loading state or error message
    if (loading) {
        return <div>Loading disasters...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Disasters</h2>
            <div>
                {disasters.length === 0 ? (
                    <p>No disasters reported yet.</p>
                ) : (
                    disasters.map((disaster) => (
                        <div key={disaster._id} style={styles.disasterCard}>
                            <h3>{disaster.name}</h3>
                            <p><strong>Location:</strong> {disaster.location}</p>
                            <p><strong>Severity:</strong> {disaster.severity}</p>
                            <p>{disaster.description}</p>
                            {disaster.image && <img src={`http://localhost:5000/${disaster.image}`} alt="Disaster" style={styles.image} />}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// Styles for disaster cards and images
const styles = {
    disasterCard: {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        marginTop: '10px',
    },
};

export default ViewDisaster;
