// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/login" style={styles.navLink}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: "#333",
        padding: "10px 20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
    },
    navList: {
        display: "flex",
        justifyContent: "space-around",
        listStyleType: "none",
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: "0 15px",
    },
    navLink: {
        textDecoration: "none",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        padding: "8px 15px",
        borderRadius: "5px",
        transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    navLinkHover: {
        backgroundColor: "#0066cc",
        transform: "translateY(-2px)",
    },
    navLinkActive: {
        backgroundColor: "#004d99",
        transform: "translateY(1px)",
    },
};

export default Navbar;
