import React, { useState } from 'react';

const ContactAdmin = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send the message to the backend API
        try {
            const response = await fetch('http://localhost:5000/api/contact/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();

            if (response.status === 200) {
                alert('Message sent to admin successfully!');
            } else {
                alert(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending your message. Please try again later.');
        }
    };

    const styles = {
        /* Global Styles for the Dashboard */
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '20px',
            fontFamily: "'Roboto', sans-serif",
        },
        formContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        formContainerHover: {
            transform: 'scale(1.02)',
        },
        title: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        input: {
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            color: '#333',
            backgroundColor: '#f9f9f9',
            transition: 'border-color 0.3s ease-in-out',
        },
        inputFocus: {
            borderColor: '#4CAF50',
            outline: 'none',
        },
        button: {
            padding: '15px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%',
            transition: 'background-color 0.3s ease-in-out',
        },
        buttonHover: {
            backgroundColor: '#45a049',
        },
        textarea: {
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            color: '#333',
            backgroundColor: '#f9f9f9',
            resize: 'vertical',
            transition: 'border-color 0.3s ease-in-out',
        },
        textareaFocus: {
            borderColor: '#4CAF50',
            outline: 'none',
        },
        section: {
            marginBottom: '30px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Contact Admin</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        style={styles.textarea}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message"
                        rows="6"
                    />
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactAdmin;
