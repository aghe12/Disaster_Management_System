import React, { useState, useEffect } from 'react';

const ViewVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/volunteers/all');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched Volunteers:', data); // Log the response data

                if (Array.isArray(data)) {
                    setVolunteers(data);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (err) {
                setError(err.message); // Set error message
                console.error('Error fetching volunteers:', err);
            }
        };

        fetchVolunteers();
    }, []);

    return (
        <div>
            <h2>Volunteers</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <div>
                    {volunteers.length > 0 ? (
                        volunteers.map((volunteer, index) => {
                            console.log(`Volunteer ${index}:`, volunteer); // Log each volunteer object
                            return (
                                <div key={volunteer._id} style={{ marginBottom: '20px' }}>
                                    <h3>{volunteer.name || 'N/A'}</h3>
                                    <p>Email: {volunteer.email || 'N/A'}</p>
                                    <p>Phone: {volunteer.phone || 'N/A'}</p>
                                    <p>Address: {volunteer.address || 'N/A'}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>No volunteers found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ViewVolunteers;


       
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
