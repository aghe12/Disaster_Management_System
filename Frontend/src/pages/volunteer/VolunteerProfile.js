import React, { useEffect, useState } from 'react';

const VolunteerProfile = () => {
    const [volunteerDetails, setVolunteerDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        const fetchVolunteerDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/volunteers');
                const data = await response.json();
                if (response.ok) {
                    setVolunteerDetails(data);
                } else {
                    setStatusMessage('Error fetching volunteer details');
                }
            } catch (error) {
                setStatusMessage('Error: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVolunteerDetails();
    }, []);

    useEffect(() => {
        if (statusMessage) {
            alert(statusMessage);
        }
    }, [statusMessage]);  // Run this only when statusMessage changes

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/volunteers', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(volunteerDetails),
            });
            const data = await response.json();
            if (response.ok) {
                setStatusMessage('Profile updated successfully!');
            } else {
                setStatusMessage('Error updating profile');
            }
        } catch (error) {
            setStatusMessage('Error: ' + error.message);
            alert("not updated")
        }
    };

    const handleChange = (e) => {
        setVolunteerDetails({
            ...volunteerDetails,
            [e.target.name]: e.target.value,
        });
    };

    const styles = {
        dashboardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Roboto, sans-serif',
        },
        dashboardProfileContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
        },
        dashboardTitle: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        dashboardButton: {
            padding: '15px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease-in-out',
        },
        inputField: {
            marginBottom: '10px',
            padding: '10px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
        },
    };

    if (loading) {
        return <div style={styles.dashboardContainer}>Loading...</div>;
    }

    return (
        <div style={styles.dashboardContainer}>
            <div style={styles.dashboardProfileContainer}>
                <h2 style={styles.dashboardTitle}>Your Profile</h2>
                {volunteerDetails ? (
                    <>
                        <input
                            type="text"
                            name="name"
                            value={volunteerDetails.name || ''}
                            onChange={handleChange}
                            placeholder="Name"
                            style={styles.inputField}
                        />
                        <input
                            type="email"
                            name="email"
                            value={volunteerDetails.email || ''}
                            onChange={handleChange}
                            placeholder="Email"
                            style={styles.inputField}
                        />
                        <input
                            type="text"
                            name="phone"
                            value={volunteerDetails.phone || ''}
                            onChange={handleChange}
                            placeholder="Phone"
                            style={styles.inputField}
                        />
                        <button style={styles.dashboardButton} onClick={handleSubmit}>
                            Update Profile
                        </button>
                    </>
                ) : (
                    <p>No details available</p>
                )}
            </div>
        </div>
    );
};

export default VolunteerProfile;
