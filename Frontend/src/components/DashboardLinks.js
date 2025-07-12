// import React from "react";
// import { Link } from "react-router-dom";

// const DashboardLinks = ({ role }) => {
//     const links = {
//         Admin: [
//             { path: "/admin/post-disaster", label: "Post Disaster" },
//             { path: "/admin/update-disaster", label: "Update Disaster" },
//             { path: "/admin/post-shelter", label: "Post Shelter" },
//             { path: "/admin/update-shelter", label: "Update Shelter" },
//             { path: "/admin/view-sources", label: "View Sources" },
//             { path: "/admin/view-emergency-sources", label: "View Emergency Sources" },
//             { path: "/admin/add-bank-details", label: "Add Bank Details" },
//             { path: "/admin/manage-bank-details", label: "Manage Bank Details" },
//             { path: "/admin/view-volunteers", label: "View Volunteers" },
//             { path: "/admin/view-volunteer-tasks", label: "View Volunteer Tasks" },
//             { path: "/admin/view-user-details", label: "View User Details" },
//         ],
//         Volunteer: [
//             { path: "/volunteer/dashboard", label: "View Tasks" },
//             { path: "/volunteer/submit-report", label: "Submit Report" },
//         ],
//         User: [
//             { path: "/user/donations", label: "View Donations" },
//             { path: "/user/request-help", label: "Request Help" },
//         ],
//     };

//     return (
//         <ul>
//             {links[role]?.map((link, index) => (
//                 <li key={index}>
//                     <Link to={link.path}>{link.label}</Link>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default DashboardLinks;
import React from "react";
import { Link } from "react-router-dom";

const DashboardLinks = ({ role }) => {
    const links = {
        Admin: [
            { path: "/admin/post-disaster", label: "Post Disaster" },
            { path: "/admin/update-disaster", label: "Update Disaster" },
            { path: "/admin/post-shelter", label: "Post Shelter" },
            { path: "/admin/update-shelter", label: "Update Shelter" },
            { path: "/admin/view-sources", label: "View Sources" },
            { path: "/admin/view-emergency-sources", label: "View Emergency Sources" },
            { path: "/admin/add-bank-details", label: "Add Bank Details" },
            { path: "/admin/manage-bank-details", label: "Manage Bank Details" },
            { path: "/admin/view-volunteers", label: "View Volunteers" },
            { path: "/admin/view-volunteer-tasks", label: "View Volunteer Tasks" },
            { path: "/admin/view-user-details", label: "View User Details" },
        ],
        Volunteer: [
            { path: "/volunteer/dashboard", label: "View Tasks" },
            { path: "/volunteer/submit-report", label: "Submit Report" },
        ],
        User: [
            { path: "/user/donations", label: "View Donations" },
            { path: "/user/request-help", label: "Request Help" },
        ],
    };

    return (
        <ul style={styles.dashboardLinks}>
            {links[role]?.map((link, index) => (
                <li key={index} style={styles.linkItem}>
                    <Link to={link.path} style={styles.linkButton}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const styles = {
    dashboardLinks: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "20px",
        maxWidth: "300px",
        margin: "0 auto",
        listStyleType: "none",
    },
    linkItem: {
        display: "flex",
        justifyContent: "center",
    },
    linkButton: {
        display: "inline-block",
        padding: "15px 30px",
        backgroundColor: "#0066cc",
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "bold",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
        textAlign: "center",
        width: "100%",
        maxWidth: "280px",
        margin: "5px 0",
    },
    linkButtonHover: {
        backgroundColor: "#004d99",
        transform: "translateY(-5px)",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
    },
    linkButtonFocus: {
        outline: "none",
        border: "2px solid #ff9900",
    },
    linkButtonActive: {
        backgroundColor: "#003366",
        transform: "translateY(2px)",
    },
};

export default DashboardLinks;
