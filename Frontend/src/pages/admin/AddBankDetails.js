import React, { useState } from 'react';

const AddBankDetails = () => {
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [message, setMessage] = useState('');
const[accountholderName,setAccountholderName]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        // Validate the input fields
        if (!bankName ||!accountholderName|| !accountNumber || !ifscCode) {
            setMessage('Please fill in all fields.');
            alert('Please fill in all fields.');  // Alert if fields are missing
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/bank/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bankName, accountholderName,accountNumber, ifscCode }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Account number already exists');
            }

            const result = await response.json();
            setMessage('Bank details added successfully!');
            console.log(message);
            setBankName('');
            setAccountNumber('');
            setAccountholderName('')
            setIfscCode('');
            console.log('Bank details added:', result);

            // Display success alert
            alert("Bank details added successfully");
        } catch (err) {
            setMessage(`Error: ${err.message}`);
            console.error('Error adding bank details:', err);

            // Display error alert
            alert(`Error: ${err.message}`);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Add Bank Details</h2>
                <label style={styles.label}>
                    Bank Name:
                    <input
                        style={styles.input}
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                    />
                </label>
                <label style={styles.label}>
                    Accountholder Name:
                    <input
                        style={styles.input}
                        type="text"
                        value={accountholderName}
                        onChange={(e) => setAccountholderName(e.target.value)}
                    />
                </label>
                <label style={styles.label}>
                    Account Number:
                    <input
                        style={styles.input}
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                </label>
                <label style={styles.label}>
                    IFSC Code:
                    <input
                        style={styles.input}
                        type="text"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                    />
                </label>
                <button type="submit" style={styles.submitButton}>
                    Submit
                    
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    form: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
        marginRight: '20px',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    label: {
        display: 'block',
        marginBottom: '10px',
        fontSize: '18px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '8px 0 20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        outline: 'none',
        transition: 'border-color 0.3s',
    },
    inputFocus: {
        borderColor: '#0066cc',
    },
    submitButton: {
        backgroundColor: '#0066cc',
        color: 'white',
        fontSize: '18px',
        padding: '12px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    submitButtonHover: {
        backgroundColor: '#004d99',
    },
};

export default AddBankDetails;
