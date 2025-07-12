import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // List of background images for the carousel
    const backgroundImages = [
        "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbCUyMGRpc2FzdGVyfGVufDB8fDB8fHww",
        "https://cdn.pixabay.com/photo/2024/03/15/15/23/ai-generated-8635240_640.jpg",
        "https://media.istockphoto.com/id/1327617934/photo/aerial-view-of-flooded-houses-with-dirty-water-of-dnister-river-in-halych-town-western-ukraine.jpg?s=612x612&w=0&k=20&c=ffFK1c1lx15S3PlX-tee1py2wkLiKYLad67VvFwTG2I="
        
    ];

    // Rotate background images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const containerStyle = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        position: "relative",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim overlay
        zIndex: 1,
    };

    const headingStyle = {
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        color: "#fff",
        zIndex: 2,
    };

    const boxContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        justifyContent: "center",
        zIndex: 2,
    };

    const boxStyle = {
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        padding: "1.5rem",
        width: "250px",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
    };

    const hoverBoxStyle = {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    };

    const linkStyle = {
        display: "block",
        padding: "0.8rem 1rem",
        backgroundColor: "#4CAF50",
        color: "#fff",
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "background-color 0.3s",
    };

    const hoverLinkStyle = {
        backgroundColor: "#45a049",
    };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <h1 style={headingStyle}>Welcome to the Disaster Relief Platform</h1>
            <div style={boxContainerStyle}>
                <div style={boxStyle}>
                    <Link
                        to="/signup/admin"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = hoverLinkStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
                    >
                        Admin Signup
                    </Link>
                </div>
                <div style={boxStyle}>
                    <Link
                        to="/signup/volunteer"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = hoverLinkStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
                    >
                        Volunteer Signup
                    </Link>
                </div>
                <div style={boxStyle}>
                    <Link
                        to="/signup/user"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = hoverLinkStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
                    >
                        User Signup
                    </Link>
                </div>
                <div style={boxStyle}>
                    <Link
                        to="/login"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = hoverLinkStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
