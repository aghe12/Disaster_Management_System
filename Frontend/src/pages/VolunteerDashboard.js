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
            "url('https://static.toiimg.com/photo/msid-114011051,width-96,height-65.cms')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const headerStyle = {
        fontSize: '2.5rem',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '3rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.6)', // Added text shadow for better readability
    };

    const dashboardOptionsStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
    };

    const linkStyle = {
        display: 'block',
        margin: '10px auto',
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        width: '80%',
        maxWidth: '400px',
        fontSize: '1.3rem',
        fontWeight: '500',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateX(0)' : 'translateX(100%)',
        animation: isLoaded ? 'slideInRight 1s ease-out forwards' : 'none',
    };

    const linkHoverStyle = {
        backgroundColor: '#0056b3',
        transform: 'translateY(-6px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    };
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Volunteer Dashboard</h1>
            
            <div style={dashboardOptionsStyle}>
               <div style={linkStyle} onClick={() => handleNavigation('/volunteer/contact-admin')}>Contact Admin</div>
               <div style={linkStyle} onClick={() => handleNavigation('/volunteer/view-disasters')}>View Disaster</div>
            <div style={linkStyle} onClick={() => handleNavigation('/volunteer/submit-report')}>Submit Report</div>
            <div style={linkStyle} onClick={() => handleNavigation('/volunteer/update-task-status')}>Update Task Status</div>
            <div style={linkStyle} onClick={() => handleNavigation('/volunteer/post-shelters')}>Post shelter</div>
            <div style={linkStyle} onClick={() => handleNavigation('/volunteer/view-shelters')}>View Shelters</div>
            <div style={linkStyle} onClick={() => handleNavigation('/volunteer/profile')}>Volunteer Profile</div>
            <div style={linkStyle} onClick={() => handleNavigation('/volunteer/updateresources')}>Update Resources</div>
            <div style={linkStyle} onClick={() => handleNavigation('/admin/updateshelter')}>Update Shelter</div>
            <div style={linkStyle} onClick={() => handleNavigation('/volunteer/viewincidents')}>View Incident</div>
            </div>

            {/* Inline the keyframes */}
            <style>
                {`
                    @keyframes slideInRight {
                        0% {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
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
