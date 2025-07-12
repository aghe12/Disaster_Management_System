import React, { useState, useEffect } from 'react';

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '20px auto',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    tableHeader: {
        backgroundColor: '#4CAF50',
        color: 'white',
        textAlign: 'left',
        padding: '10px',
    },
    tableRow: {
        backgroundColor: '#f4f4f4',
        borderBottom: '1px solid #ddd',
        transition: 'background-color 0.3s',
    },
    tableCell: {
        padding: '10px',
        textAlign: 'left',
    },
    noData: {
        textAlign: 'center',
        marginTop: '20px',
        color: '#999',
    },
};

const ViewEmergencyContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/emergency');
                if (response.ok) {
                    const data = await response.json();
                    setContacts(data);
                } else {
                    console.error('Failed to fetch contacts');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Emergency Contacts</h2>
            {loading ? (
                <p>Loading...</p>
            ) : contacts.length === 0 ? (
                <p style={styles.noData}>No emergency contacts available</p>
            ) : (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Name</th>
                            <th style={styles.tableHeader}>Phone</th>
                            <th style={styles.tableHeader}>Relationship</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact._id} style={styles.tableRow}>
                                <td style={styles.tableCell}>{contact.name}</td>
                                <td style={styles.tableCell}>{contact.phone}</td>
                                <td style={styles.tableCell}>{contact.relation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ViewEmergencyContacts;
