import React, { useState } from 'react';

const PostResource = () => {
    const [resourceName, setResourceName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/resources', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resourceName, quantity, description }),
            });

            if (response.ok) {
                setSuccessMessage('Resource posted successfully!');
                setResourceName('');
                setQuantity('');
                setDescription('');
            } else {
                console.error('Error posting resource');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Post Resource</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Resource Name:</label>
                        <input
                            type="text"
                            value={resourceName}
                            onChange={(e) => setResourceName(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={styles.textarea}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.submitButton}>Submit Resource</button>
                    {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '20px', textAlign: 'center' },
    formContainer: { margin: '0 auto', width: '50%' },
    title: { fontSize: '24px', marginBottom: '20px' },
    form: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    inputGroup: { marginBottom: '15px', width: '100%' },
    label: { marginBottom: '5px', textAlign: 'left' },
    input: { width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' },
    textarea: { width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' },
    submitButton: { padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' },
    successMessage: { marginTop: '10px', color: 'green' },
};

export default PostResource;
