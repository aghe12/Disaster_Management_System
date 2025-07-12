import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);  // For animation effect

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            // If there's no token, redirect to login
            navigate('/login');
        } else {
            // If token exists, mark the dashboard as loaded for animation
            setIsLoaded(true);
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('authToken');  // Remove token from localStorage
        navigate('/login');  // Redirect to login page
    };


    const containerStyle = {
        padding: '4rem',
        backgroundColor: '#f4f7fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '2rem',
        position: 'relative',
        backgroundImage:
            "url('https://www.financialexpress.com/wp-content/uploads/2024/06/dave-goudreau-jviblDl60IE-unsplash-1.jpg?w=440')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
    };

    const headerStyle = {
        fontSize: '2.5rem',
        color: 'white',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient color
        backgroundClip: 'text',
        fontWeight: 'bold',
        marginBottom: '3rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        //fontFamily: "'Pacifico', cursive", // Handwritten-style font
    };

    const dashboardOptionsStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '800px',
    };

    const linkStyle = (index) => ({
        display: 'block',
        textAlign: 'center',
        padding: '1.5rem',
        borderRadius: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        width: '180px',
        fontSize: '1rem',
        fontWeight: '500',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
        opacity: isLoaded ? 1 : 0,
        animation: isLoaded ? `fadeIn 1s ease-out forwards ${index * 0.2}s` : 'none', // Delay based on index
    });
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>User Dashboard</h1>
            
            <div style={dashboardOptionsStyle}>
            <div style={linkStyle(0)} onClick={() => handleNavigation('/user/view-disasters')}>View Disasters</div>
            <div style={linkStyle(1)} onClick={() => handleNavigation('/user/view-shelters')}>View Shelters</div>
            <div style={linkStyle(2)} onClick={() => handleNavigation('/user/post-sos')}>View Source</div>
            <div style={linkStyle(3)} onClick={() => handleNavigation('/user/view-sos')}>View bankdetails</div>
            <div style={linkStyle(4)} onClick={() => handleNavigation('/user/post-incident')}>Post Incident</div>
            <div style={linkStyle(5)} onClick={() => handleNavigation('/user/manage-incident')}>Manage Incident</div>
            <div style={linkStyle(6)} onClick={() => handleNavigation('/user/post-resource')}>Add Source</div>
            <div style={linkStyle(6)} onClick={() => handleNavigation('/user/emergency-contact')}>Add emergency contacts</div>
                
            </div>

            {/* Inline the keyframes */}
            <style>
                {`
                    @keyframes fadeIn {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    a:hover {
                        background-color: #0056b3;
                        transform: translateY(-6px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }

                    @media (max-width: 600px) {
                        h1 {
                            font-size: 2rem;
                        }

                        .linkStyle {
                            width: 90%;
                            font-size: 1rem;
                        }
                    }
                `}
            </style>
            <button
                onClick={logout}
                style={{
                    padding: "12px 20px",
                    backgroundColor: "#cc0000",
                    color: "white",
                    fontSize: "1.2rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "20px",
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
