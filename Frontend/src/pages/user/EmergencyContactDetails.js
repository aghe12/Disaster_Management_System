// // import React, { useState } from 'react';

// // const EmergencyContactDetails = () => {
// //     const [name, setName] = useState('');
// //     const [phone, setPhone] = useState('');
// //     const [relation, setRelation] = useState('');

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log('Emergency Contact Details:', { name, phone, relation });
// //         // You can send this data to the server here
// //     };

// //     return (
// //         <div style={styles.container}>
// //             <div style={styles.formContainer}>
// //                 <h2 style={styles.title}>Emergency Contact Details</h2>
// //                 <form onSubmit={handleSubmit} style={styles.form}>
// //                     <div style={styles.inputGroup}>
// //                         <label style={styles.label}>Full Name:</label>
// //                         <input
// //                             type="text"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                             style={styles.input}
// //                             required
// //                         />
// //                     </div>
// //                     <div style={styles.inputGroup}>
// //                         <label style={styles.label}>Phone Number:</label>
// //                         <input
// //                             type="tel"
// //                             value={phone}
// //                             onChange={(e) => setPhone(e.target.value)}
// //                             style={styles.input}
// //                             required
// //                         />
// //                     </div>
// //                     <div style={styles.inputGroup}>
// //                         <label style={styles.label}>Relationship:</label>
// //                         <input
// //                             type="text"
// //                             value={relation}
// //                             onChange={(e) => setRelation(e.target.value)}
// //                             style={styles.input}
// //                             required
// //                         />
// //                     </div>
// //                     <button type="submit" style={styles.submitButton}>
// //                         Save Contact
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // const styles = {
// //     container: {
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         height: '100vh',
// //         backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         padding: '20px',
// //     },
// //     formContainer: {
// //         backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for form background
// //         padding: '40px',
// //         borderRadius: '10px',
// //         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
// //         width: '100%',
// //         maxWidth: '600px',
// //         textAlign: 'center',
// //     },
// //     title: {
// //         fontSize: '24px',
// //         fontWeight: 'bold',
// //         color: '#333',
// //         marginBottom: '20px',
// //     },
// //     form: {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         gap: '15px',
// //     },
// //     inputGroup: {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'flex-start',
// //     },
// //     label: {
// //         fontSize: '16px',
// //         color: '#333',
// //         marginBottom: '5px',
// //     },
// //     input: {
// //         width: '100%',
// //         padding: '12px',
// //         fontSize: '16px',
// //         border: '1px solid #ccc',
// //         borderRadius: '5px',
// //         backgroundColor: '#f9f9f9',
// //         marginBottom: '10px',
// //         outline: 'none',
// //         transition: 'border-color 0.3s ease-in-out',
// //     },
// //     inputFocus: {
// //         borderColor: '#4CAF50',
// //     },
// //     submitButton: {
// //         padding: '14px 20px',
// //         backgroundColor: '#4CAF50',
// //         color: '#fff',
// //         border: 'none',
// //         borderRadius: '5px',
// //         cursor: 'pointer',
// //         fontSize: '16px',
// //         transition: 'background-color 0.3s ease-in-out',
// //     },
// //     submitButtonHover: {
// //         backgroundColor: '#45a049',
// //     },
// // };

// // export default EmergencyContactDetails;
// import React, { useState } from 'react';

// const EmergencyContactDetails = () => {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [relation, setRelation] = useState('');
//     const [statusMessage, setStatusMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/user/emergency', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, phone, relation }),
//             });
//             const data = await response.json();

//             if (response.ok) {
//                 setStatusMessage(data.message);
//                 alert('Emergency Contact Saved Successfully!');
//             } else {
//                 setStatusMessage('Error saving contact');
//             }
//         } catch (error) {
//             setStatusMessage('Error: ' + error.message);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.formContainer}>
//                 <h2 style={styles.title}>Emergency Contact Details</h2>
//                 <form onSubmit={handleSubmit} style={styles.form}>
//                     <div style={styles.inputGroup}>
//                         <label style={styles.label}>Full Name:</label>
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             style={styles.input}
//                             required
//                         />
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <label style={styles.label}>Phone Number:</label>
//                         <input
//                             type="tel"
//                             value={phone}
//                             onChange={(e) => setPhone(e.target.value)}
//                             style={styles.input}
//                             required
//                         />
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <label style={styles.label}>Relationship:</label>
//                         <input
//                             type="text"
//                             value={relation}
//                             onChange={(e) => setRelation(e.target.value)}
//                             style={styles.input}
//                             required
//                         />
//                     </div>
//                     <button type="submit" style={styles.submitButton}>
//                         Save Contact
//                     </button>
//                     {statusMessage && <p>{statusMessage}</p>}
//                 </form>
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
//     formContainer: {
//         backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for form background
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
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '15px',
//     },
//     inputGroup: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//     },
//     label: {
//         fontSize: '16px',
//         color: '#333',
//         marginBottom: '5px',
//     },
//     input: {
//         width: '100%',
//         padding: '12px',
//         fontSize: '16px',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         backgroundColor: '#f9f9f9',
//         marginBottom: '10px',
//         outline: 'none',
//         transition: 'border-color 0.3s ease-in-out',
//     },
//     submitButton: {
//         padding: '14px 20px',
//         backgroundColor: '#4CAF50',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         fontSize: '16px',
//         transition: 'background-color 0.3s ease-in-out',
//     },
// };

// export default EmergencyContactDetails;
import React, { useState } from 'react';

const EmergencyContactDetails = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [relation, setRelation] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:5000/api/user/emergency', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, phone, relation }),
    //         });
    //         const data = await response.json();

    //         if (response.ok) {
    //             setSuccessMessage('Emergency Contact Saved Successfully!');
    //             setStatusMessage('');
    //         } else {
    //             setStatusMessage('Error saving contact');
    //             setSuccessMessage('');
    //         }
    //     } catch (error) {
    //         setStatusMessage('Error: ' + error.message);
    //         setSuccessMessage('');
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/api/user/emergency', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, relation }),
            });
    
            if (response.ok) {
                const result = await response.json();
                setSuccessMessage(result.message);
                setName('');
                setPhone('');
                setRelation('');
            } else {
                const error = await response.json();
                setStatusMessage(error.error || 'Failed to save contact');
            }
        } catch (err) {
            setStatusMessage('An error occurred. Please try again.');
        }
    };
    
    
    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Emergency Contact Details</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Full Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone Number:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Relationship:</label>
                        <input
                            type="text"
                            value={relation}
                            onChange={(e) => setRelation(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.submitButton}>
                        Save Contact
                    </button>
                    {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
                    {statusMessage && <p style={styles.errorMessage}>{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
};


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for form background
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        marginBottom: '10px',
        outline: 'none',
        transition: 'border-color 0.3s ease-in-out',
    },
    submitButton: {
        padding: '14px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease-in-out',
    },
    successMessage: {
        color: 'green',
        fontSize: '16px',
        marginTop: '10px',
    },
    errorMessage: {
        color: 'red',
        fontSize: '16px',
        marginTop: '10px',
    },
};

export default EmergencyContactDetails;
