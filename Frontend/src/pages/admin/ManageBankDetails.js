import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageBankDetails = () => {
    const [bankDetails, setBankDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [currentBank, setCurrentBank] = useState(null);
      const [error, setError] = useState(null);

    // // Fetch bank details from the backend
    // useEffect(() => {
    //     const fetchBankDetails = async () => {
    //         try {
    //             const response = await fetch('http://localhost:5000/api/all');
    //             const data = await response.json();
    //             console.log('Fetched bank details:', data);  // Check the data in the console
    //             setBankDetails(data);
    //             setLoading(false);
    //         } catch (err) {
    //             console.error('Error fetching bank details:', err);
    //             setLoading(false);
    //         }
    //     };
    
    //     fetchBankDetails();
    // }, []);
    

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

    // Handle Edit functionality
    const handleEdit = (bank) => {
        setEditMode(true); // Enable edit mode
        setCurrentBank(bank); // Set the current bank detail to edit
    };

    // Handle Delete functionality
    const handleDelete = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this bank detail?');
        if (confirmed) {
            try {
                const response = await fetch(`http://localhost:5000/api/bank/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    setBankDetails(bankDetails.filter((bank) => bank._id !== id)); // Remove from state
                    alert('Bank detail deleted successfully.');
                }
            } catch (err) {
                console.error('Error deleting bank detail:', err);
            }
        }
    };

    // Handle Save (Update) functionality
    const handleSave = async (updatedBank) => {
        try {
            const response = await fetch(`http://localhost:5000/api/bank/${currentBank._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedBank),
            });
            if (response.ok) {
                const updatedData = await response.json();
                setBankDetails((prevDetails) =>
                    prevDetails.map((bank) =>
                        bank._id === updatedData.data._id ? updatedData.data : bank
                    )
                );
                setEditMode(false); // Exit edit mode
                setCurrentBank(null); // Clear current bank
                alert('Bank detail updated successfully.');
            } else {
                alert('Failed to update bank detail.');
            }
        } catch (err) {
            console.error('Error updating bank detail:', err);
        }
    };

    if (loading) {
        return <p>Loading bank details...</p>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2 style={styles.title}>Manage Bank Details</h2>

                {editMode ? (
                    // Render Update Form
                    <div style={styles.editForm}>
                        <h3 style={styles.editFormTitle}>Edit Bank Detail</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const updatedBank = {
                                    bankName: e.target.bankName.value,
                                    accountholderName:e.target.accountholderName.value,
                                    accountNumber: e.target.accountNumber.value,
                                    ifscCode: e.target.ifscCode.value,
                                };
                                handleSave(updatedBank);
                            }}
                        >
                            <label style={styles.editFormLabel}>
                                Bank Name:
                                <input
                                    type="text"
                                    name="bankName"
                                    defaultValue={currentBank.bankName}
                                    required
                                />
                            </label>
                            <label style={styles.editFormLabel}>
                                Accountholder Name :
                                <input
                                    type="text"
                                    name="accountholderName"
                                    defaultValue={currentBank.accountholderName}
                                    required
                                />
                            </label>
                            
                            <label style={styles.editFormLabel}>
                                Account Number:
                                <input
                                    type="text"
                                    name="accountNumber"
                                    defaultValue={currentBank.accountNumber}
                                    required
                                />
                            </label>
                            <label style={styles.editFormLabel}>
                                IFSC Code:
                                <input
                                    type="text"
                                    name="ifscCode"
                                    defaultValue={currentBank.ifscCode}
                                    required
                                />
                            </label>
                            <button type="submit" style={styles.saveButton}>
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditMode(false)}
                                style={styles.cancelButton}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                ) : (
                    // Render Bank Details List
                    <>
                        <ul style={styles.bankList}>
                        {bankDetails.map((bank) => (
                            <li key={bank._id} style={styles.bankItem}>
                                <div>
                                    <strong>{bank.bankName}</strong> - {bank.accountholderName} -{' '}
                                    {bank.accountNumber} - {bank.ifscCode}
                                </div>
                                <div style={styles.buttons}>
                                    <button
                                        onClick={() => handleEdit(bank)}
                                        style={styles.editButton}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(bank._id)}
                                        style={styles.deleteButton}
                                    >
                                        Delete
                                    </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
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
        backgroundImage:
            'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    
        zIndex:1,
    },
    content: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '20px',
        width: '100%',
        fontSize: '16px',
    },
    bankList: {
        listStyleType: 'none',
        padding: '0',
    },
    bankItem: {
        backgroundColor: '#f4f4f4',
        margin: '10px 0',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
      display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#333',
        transition: 'background-color 0.3s, transform 0.3s',
    },
    buttons: {
        display: 'flex',
        gap: '10px',
    },
    editButton: {
        backgroundColor: '#ffcc00',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    editForm: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for the background
        padding: '20px', // Space inside the form container
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        maxWidth: '400px', // Limit the width of the form
        margin: '20px auto', // Center the form horizontally and add vertical spacing
    },
    editFormTitle: {
        textAlign: 'center', // Center-align the title
        marginBottom: '20px', // Space below the title
        color: '#333', // Dark text color for readability
    },
    editFormLabel: {
        display: 'block', // Ensure the label spans the full width
        marginBottom: '10px', // Space below each label
        color: '#555', // Slightly muted text color
    },
    editFormInput: {
        width: '100%', // Full-width input
        padding: '10px', // Space inside the input box
        marginTop: '5px', // Space between the label and input
        borderRadius: '5px', // Rounded input corners
        border: '1px solid #ccc', // Subtle border for the input
    },
    buttonContainer: {
        display: 'flex', // Align buttons in a row
        justifyContent: 'space-between', // Push buttons to opposite ends
        marginTop: '20px', // Space above the button container
    },
    button: {
        padding: '10px 20px', // Button padding
        border: 'none', // Remove default border
        borderRadius: '5px', // Rounded button corners
        cursor: 'pointer', // Pointer cursor on hover
    },
    saveButton: {
        padding: '10px 20px', // Button padding
        border: 'none', // Remove default border
        borderRadius: '5px', // Rounded button corners
        cursor: 'pointer', // Pointer cursor on hover
        backgroundColor: '#4CAF50', // Green background for Save
        color: 'white', // White text
    },
    cancelButton: {
        padding: '10px 20px', // Button padding
        border: 'none', // Remove default border
        borderRadius: '5px', // Rounded button corners
        cursor: 'pointer', // Pointer cursor on hover
        backgroundColor: '#e74c3c', // Red background for Cancel
        color: 'white', // White text
    },
};
    


export default ManageBankDetails;

// // import React, { useEffect, useState } from 'react';

// // const ManageBankDetails = () => {
// //     const [bankDetails, setBankDetails] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [editMode, setEditMode] = useState(false);
// //     const [currentBank, setCurrentBank] = useState(null);

// //     // Fetch bank details from the backend
// //     useEffect(() => {
// //         const fetchBankDetails = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:5000/api/bank');
// //                 if (!response.ok) throw new Error('Failed to fetch bank details.');
// //                 const data = await response.json();
// //                 setBankDetails(data);
// //             } catch (err) {
// //                 console.error('Error fetching bank details:', err);
// //                 alert('Failed to load bank details.');
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchBankDetails();
// //     }, []);

// //     // Handle Edit functionality
// //     const handleEdit = (bank) => {
// //         setEditMode(true); // Enable edit mode
// //         setCurrentBank(bank); // Set the current bank detail to edit
// //     };

// //     // Handle Delete functionality
// //     const handleDelete = async (id) => {
// //         const confirmed = window.confirm('Are you sure you want to delete this bank detail?');
// //         if (confirmed) {
// //             try {
// //                 const response = await fetch(`http://localhost:5000/api/bank/${id}`, {
// //                     method: 'DELETE',
// //                 });
// //                 if (response.ok) {
// //                     setBankDetails(bankDetails.filter((bank) => bank._id !== id)); // Remove from state
// //                     alert('Bank detail deleted successfully.');
// //                 } else {
// //                     alert('Failed to delete bank detail.');
// //                 }
// //             } catch (err) {
// //                 console.error('Error deleting bank detail:', err);
// //                 alert('An error occurred while deleting the bank detail.');
// //             }
// //         }
// //     };

// //     // Handle Save (Update) functionality
// //     const handleSave = async (updatedBank) => {
// //         try {
// //             const response = await fetch(`http://localhost:5000/api/bank/${currentBank._id}`, {
// //                 method: 'PUT',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify(updatedBank),
// //             });
// //             if (response.ok) {
// //                 const updatedData = await response.json();
// //                 setBankDetails((prevDetails) =>
// //                     prevDetails.map((bank) =>
// //                         bank._id === updatedData._id ? updatedData : bank
// //                     )
// //                 );
// //                 setEditMode(false); // Exit edit mode
// //                 setCurrentBank(null); // Clear current bank
// //                 alert('Bank detail updated successfully.');
// //             } else {
// //                 alert('Failed to update bank detail.');
// //             }
// //         } catch (err) {
// //             console.error('Error updating bank detail:', err);
// //             alert('An error occurred while updating the bank detail.');
// //         }
// //     };

// //     if (loading) {
// //         return <p>Loading bank details...</p>;
// //     }

// //     return (
// //         <div style={styles.container}>
// //             <div style={styles.content}>
// //                 <h2 style={styles.title}>Manage Bank Details</h2>

// //                 {editMode ? (
// //                     // Render Update Form
// //                     <div style={styles.editForm}>
// //                         <h3 style={styles.editFormTitle}>Edit Bank Detail</h3>
// //                         <form
// //                             onSubmit={(e) => {
// //                                 e.preventDefault();
// //                                 const updatedBank = {
// //                                     bankName: e.target.bankName.value,
// //                                     accountholderName: e.target.accountholderName.value,
// //                                     accountNumber: e.target.accountNumber.value,
// //                                     ifscCode: e.target.ifscCode.value,
// //                                 };
// //                                 handleSave(updatedBank);
// //                             }}
// //                         >
// //                             <label style={styles.editFormLabel}>
// //                                 Bank Name:
// //                                 <input
// //                                     type="text"
// //                                     name="bankName"
// //                                     defaultValue={currentBank?.bankName || ''}
// //                                     required
// //                                 />
// //                             </label>
// //                             <label style={styles.editFormLabel}>
// //                                 Accountholder Name:
// //                                 <input
// //                                     type="text"
// //                                     name="accountholderName"
// //                                     defaultValue={currentBank?.accountholderName || ''}
// //                                     required
// //                                 />
// //                             </label>
// //                             <label style={styles.editFormLabel}>
// //                                 Account Number:
// //                                 <input
// //                                     type="text"
// //                                     name="accountNumber"
// //                                     defaultValue={currentBank?.accountNumber || ''}
// //                                     required
// //                                 />
// //                             </label>
// //                             <label style={styles.editFormLabel}>
// //                                 IFSC Code:
// //                                 <input
// //                                     type="text"
// //                                     name="ifscCode"
// //                                     defaultValue={currentBank?.ifscCode || ''}
// //                                     required
// //                                 />
// //                             </label>
// //                             <div style={styles.buttonContainer}>
// //                                 <button type="submit" style={styles.saveButton}>
// //                                     Save
// //                                 </button>
// //                                 <button
// //                                     type="button"
// //                                     onClick={() => setEditMode(false)}
// //                                     style={styles.cancelButton}
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 ) : (
// //                     // Render Bank Details List
// //                     <ul style={styles.bankList}>
// //                         {bankDetails.map((bank) => (
// //                             <li key={bank._id} style={styles.bankItem}>
// //                                 <div>
// //                                     <strong>{bank.bankName}</strong> - {bank.accountholderName} -{' '}
// //                                     {bank.accountNumber} - {bank.ifscCode}
// //                                 </div>
// //                                 <div style={styles.buttons}>
// //                                     <button
// //                                         onClick={() => handleEdit(bank)}
// //                                         style={styles.editButton}
// //                                     >
// //                                         Edit
// //                                     </button>
// //                                     <button
// //                                         onClick={() => handleDelete(bank._id)}
// //                                         style={styles.deleteButton}
// //                                     >
// //                                         Delete
// //                                     </button>
// //                                 </div>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };


// //     const styles = {
// //         container: {
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             height: '100vh',
// //             backgroundImage:
// //                 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             padding: '20px',
// //         },
// //         content: {
// //             backgroundColor: 'rgba(255, 255, 255, 0.8)',
// //             padding: '30px',
// //             borderRadius: '10px',
// //             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //             width: '100%',
// //             maxWidth: '600px',
// //         },
// //         title: {
// //             textAlign: 'center',
// //             fontSize: '24px',
// //             marginBottom: '20px',
// //             color: '#333',
// //         },
// //         addButton: {
// //             backgroundColor: '#4CAF50',
// //             color: 'white',
// //             padding: '10px 20px',
// //             borderRadius: '5px',
// //             border: 'none',
// //             cursor: 'pointer',
// //             marginBottom: '20px',
// //             width: '100%',
// //             fontSize: '16px',
// //         },
// //         bankList: {
// //             listStyleType: 'none',
// //             padding: '0',
// //         },
// //         bankItem: {
// //             backgroundColor: '#f4f4f4',
// //             margin: '10px 0',
// //             padding: '12px',
// //             borderRadius: '8px',
// //             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
// //             fontSize: '16px',
// //             display: 'flex',
// //             justifyContent: 'space-between',
// //             alignItems: 'center',
// //             color: '#333',
// //             transition: 'background-color 0.3s, transform 0.3s',
// //         },
// //         buttons: {
// //             display: 'flex',
// //             gap: '10px',
// //         },
// //         editButton: {
// //             backgroundColor: '#ffcc00',
// //             color: 'white',
// //             padding: '8px 12px',
// //             borderRadius: '5px',
// //             border: 'none',
// //             cursor: 'pointer',
// //         },
// //         deleteButton: {
// //             backgroundColor: '#e74c3c',
// //             color: 'white',
// //             padding: '8px 12px',
// //             borderRadius: '5px',
// //             border: 'none',
// //             cursor: 'pointer',
// //         },
// //         editForm: {
// //             backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for the background
// //             padding: '20px', // Space inside the form container
// //             borderRadius: '10px', // Rounded corners
// //             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
// //             maxWidth: '400px', // Limit the width of the form
// //             margin: '20px auto', // Center the form horizontally and add vertical spacing
// //         },
// //         editFormTitle: {
// //             textAlign: 'center', // Center-align the title
// //             marginBottom: '20px', // Space below the title
// //             color: '#333', // Dark text color for readability
// //         },
// //         editFormLabel: {
// //             display: 'block', // Ensure the label spans the full width
// //             marginBottom: '10px', // Space below each label
// //             color: '#555', // Slightly muted text color
// //         },
// //         editFormInput: {
// //             width: '100%', // Full-width input
// //             padding: '10px', // Space inside the input box
// //             marginTop: '5px', // Space between the label and input
// //             borderRadius: '5px', // Rounded input corners
// //             border: '1px solid #ccc', // Subtle border for the input
// //         },
// //         buttonContainer: {
// //             display: 'flex', // Align buttons in a row
// //             justifyContent: 'space-between', // Push buttons to opposite ends
// //             marginTop: '20px', // Space above the button container
// //         },
// //         button: {
// //             padding: '10px 20px', // Button padding
// //             border: 'none', // Remove default border
// //             borderRadius: '5px', // Rounded button corners
// //             cursor: 'pointer', // Pointer cursor on hover
// //         },
// //         saveButton: {
// //             padding: '10px 20px', // Button padding
// //             border: 'none', // Remove default border
// //             borderRadius: '5px', // Rounded button corners
// //             cursor: 'pointer', // Pointer cursor on hover
// //             backgroundColor: '#4CAF50', // Green background for Save
// //             color: 'white', // White text
// //         },
// //         cancelButton: {
// //             padding: '10px 20px', // Button padding
// //             border: 'none', // Remove default border
// //             borderRadius: '5px', // Rounded button corners
// //             cursor: 'pointer', // Pointer cursor on hover
// //             backgroundColor: '#e74c3c', // Red background for Cancel
// //             color: 'white', // White text
// //         },
// //     };
        
    


// // export default ManageBankDetails;
