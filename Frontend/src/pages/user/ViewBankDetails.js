// import React, { useState, useEffect } from 'react';

// const ViewSOS = () => {
//     const [sosRequests, setSosRequests] = useState([]);

//     useEffect(() => {
//         // Simulate fetching SOS data (you can replace it with an API call)
//         setSosRequests([
//             { id: 1, name: 'SOS 1', location: 'City A', description: 'Help needed' },
//             { id: 2, name: 'SOS 2', location: 'City B', description: 'Medical aid required' },
//         ]);
//     }, []);

//     return (
//         <div style={styles.container}>
//             <div style={styles.sosContainer}>
//                 <h2 style={styles.title}>View SOS Requests</h2>
//                 <ul style={styles.sosList}>
//                     {sosRequests.map((sos) => (
//                         <li key={sos.id} style={styles.sosItem}>
//                             <h3 style={styles.sosName}>{sos.name}</h3>
//                             <p style={styles.sosDetails}>
//                                 Location: {sos.location}<br />
//                                 Description: {sos.description}
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
//     sosContainer: {
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
//     sosList: {
//         listStyleType: 'none',
//         padding: 0,
//     },
//     sosItem: {
//         backgroundColor: '#f9f9f9',
//         padding: '15px',
//         marginBottom: '15px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     },
//     sosName: {
//         fontSize: '18px',
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     sosDetails: {
//         fontSize: '14px',
//         color: '#666',
//     },
// };

// export default ViewSOS;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BankDetails = () => {
    const [bankDetails, setBankDetails] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all bank details from the backend
        const fetchBankDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/bank/all');
                setBankDetails(response.data);  // Store the bank details in state
                setLoading(false);  // Stop loading after data is fetched
            } catch (err) {
                setError('Failed to load bank details');
                setLoading(false);  // Stop loading after an error occurs
            }
        };

        fetchBankDetails();
    }, []);

    // Loading state
    if (loading) return <div>Loading bank details...</div>;

    // Error state
    if (error) return <div>{error}</div>;

    // No bank details available state
    if (bankDetails.length === 0) return <div>No bank details available.</div>;

    return (
        <div>
            <h2>All Bank Details</h2>
            {bankDetails.map((detail) => (
                <div key={detail._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                    <p><strong>Bank Name:</strong> {detail.bankName}</p>
                    <p><strong>Account Holder Name:</strong> {detail.accountholderName}</p>
                    <p><strong>Account Number:</strong> {detail.accountNumber}</p>
                    <p><strong>IFSC Code:</strong> {detail.ifscCode}</p>
                </div>
            ))}
        </div>
    );
};

export default BankDetails;
