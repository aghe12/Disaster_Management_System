import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
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
        padding: "4rem",
        backgroundColor: "#f4f7fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem",
        position: "relative",
        backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg/1200px-Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    };

    const headerStyle = {
        fontSize: "2.5rem",
        color: "white",
        fontWeight: "bold",
        marginBottom: "3rem",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "1px",
    };

    const dashboardOptionsStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "800px",
    };
    const handleNavigation = (path) => {
        navigate(path);
    };


    return (
        
<div style={containerStyle}>
            <h1 style={headerStyle}>Admin Dashboard</h1>
            <div style={dashboardOptionsStyle}>
               
            </div>
             {/* Logout Button */}
             <div style={linkStyle(0)} onClick={() => handleNavigation('/admin/add-bank-details')}>Add Bank Details</div>
            <div style={linkStyle(1)} onClick={() => handleNavigation('/admin/manage-bank-details')}>Manage Bank Details</div>
            <div style={linkStyle(2)} onClick={() => handleNavigation('/admin/post-disaster')}>Post Disasters</div>
            <div style={linkStyle(3)} onClick={() => handleNavigation('/admin/post-shelters')}>Post Shelters</div>
            <div style={linkStyle(2)} onClick={() => handleNavigation('/user/post-sos')}>View Source</div>
            <div style={linkStyle(5)} onClick={() => handleNavigation('/admin/updateshelter')}>Update Shelter</div>
            <div style={linkStyle(6)} onClick={() => handleNavigation('/admin/view-emergency-sources')}>View Emergency contacts</div>
            <div style={linkStyle(7)} onClick={() => handleNavigation('/admin/viewreports')}>View Reports</div>
            <div style={linkStyle(8)} onClick={() => handleNavigation('/admin/view-volunteers')}>View Volunteers</div>
            <div style={linkStyle(9)} onClick={() => handleNavigation('/admin/add-volunteer-tasks')}>Add Volunteer Tasks</div>
            <div style={linkStyle(9)} onClick={() => handleNavigation('/admin/view-sources')}>Add sources</div>
            <div style={linkStyle(10)} onClick={() => handleNavigation('/volunteer/viewincidents')}>View Incident</div>
            {/* Inline keyframes */}
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

                    .dashboard-option:hover {
                        background-color: #0056b3;
                        transform: translateY(-6px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }
                `}
            </style>
            <button
                onClick={logout}
                style={{
                    padding: "12px 20px",
                    backgroundColor: "#cc0000",
                    color:"white",
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

const linkStyle = (index) => ({
    display: "block",
    padding: "1.5rem",
    borderRadius: "12px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    width: "180px",
    fontSize: "1rem",
    fontWeight: "500",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
    animation: `fadeIn 1s ease-out forwards ${index * 0.2}s`,
});

export default AdminDashboard;
