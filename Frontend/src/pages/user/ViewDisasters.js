// import React, { useState, useEffect } from 'react';

// const ViewDisaster = () => {
//     const [disasters, setDisasters] = useState([]);

//     useEffect(() => {
//         // Simulate fetching disaster data (you can replace it with an API call)
//         setDisasters([
//             { id: 1, name: 'Flood', location: 'City A', severity: 'High' },
//             { id: 2, name: 'Earthquake', location: 'City B', severity: 'Medium' },
//         ]);
//     }, []);

//     return (
//         <div style={styles.container}>
//             <div style={styles.disasterContainer}>
//                 <h2 style={styles.title}>View Disasters</h2>
//                 <ul style={styles.disasterList}>
//                     {disasters.map((disaster) => (
//                         <li key={disaster.id} style={styles.disasterItem}>
//                             <h3 style={styles.disasterName}>{disaster.name}</h3>
//                             <p style={styles.disasterDetails}>
//                                 Location: {disaster.location}<br />
//                                 Severity: {disaster.severity}
//                             </p>
//                         </li>
//                     ))}
//                 </ul>
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
//         backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '20px',
//     },
//     disasterContainer: {
//         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//         padding: '40px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//         width: '100%',
//         maxWidth: '600px',
//         textAlign: 'center',
//     },
//     title: {
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: '20px',
//     },
//     disasterList: {
//         listStyleType: 'none',
//         padding: 0,
//     },
//     disasterItem: {
//         backgroundColor: '#f9f9f9',
//         padding: '15px',
//         marginBottom: '15px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     },
//     disasterName: {
//         fontSize: '18px',
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     disasterDetails: {
//         fontSize: '14px',
//         color: '#666',
//     },
// };

// export default ViewDisaster;

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
