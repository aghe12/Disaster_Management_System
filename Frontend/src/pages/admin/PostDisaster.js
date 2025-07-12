// import React, { useState } from 'react';

// const PostDisaster = () => {
//     const [name, setName] = useState('');
//     const [location, setLocation] = useState('');
//     const [severity, setSeverity] = useState('');
//     const [description, setDescription] = useState('');

// const [message, setMessage] = useState('');


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/disaster/add', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, location, severity, description}),
//             });
//             const result = await response.json();
//             setMessage('Disaster added successfully!');
//             console.log(message);
//             console.log('Disaster added:', result);
//             alert("Disaster Added")
//         } catch (err) {
//             setMessage(`Error: ${err.message}`);
//             console.error('Error adding disaster:', err);
//             alert(`Error: ${err.message}`);
        
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.formContainer}>
//                 <h2 style={styles.title}>Post Disaster</h2>
//                 <form onSubmit={handleSubmit} style={styles.form}>
//                     <label style={styles.label}>
//                         Disaster Name:
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Location:
//                         <input
//                             type="text"
//                             value={location}
//                             onChange={(e) => setLocation(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Severity:
//                         <input
//                             type="text"
//                             value={severity}
//                             onChange={(e) => setSeverity(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Description:
//                         <textarea
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             style={styles.textarea}
//                         />
//                     </label>
                    
                   
//                     <button type="submit" style={styles.submitButton}>Submit</button>
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
//         backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '20px',
//     },
//     formContainer: {
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
//         padding: '30px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//         width: '100%',
//         maxWidth: '600px',
//     },
//     title: {
//         textAlign: 'center',
//         fontSize: '24px',
//         marginBottom: '20px',
//         color: '#333',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '15px',
//     },
//     label: {
//         fontSize: '16px',
//         color: '#333',
//     },
//     input: {
//         padding: '12px',
//         fontSize: '14px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//         backgroundColor: '#f9f9f9',
//         width: '100%',
//         boxSizing: 'border-box',
//     },
//     textarea: {
//         padding: '12px',
//         fontSize: '14px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//         backgroundColor: '#f9f9f9',
//         width: '100%',
//         minHeight: '100px',
//         resize: 'vertical',
//         boxSizing: 'border-box',
//     },
//     submitButton: {
//         padding: '12px',
//         fontSize: '16px',
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//      },
// };

// export default PostDisaster;


import React, { useState } from 'react';

const PostDisaster = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [severity, setSeverity] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file); // Store the file in the state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('severity', severity);
        formData.append('description', description);
        if (image) {
            formData.append('image', image); // Append the image file
        }

        try {
            const response = await fetch('http://localhost:5000/api/disaster/add', {
                method: 'POST',
                body: formData, // Send the form data with the image
            });
            const result = await response.json();
            setMessage('Disaster added successfully!');
            console.log('Disaster added:', result);
            alert("Disaster Added")
        } catch (err) {
            setMessage(`Error: ${err.message}`);
            console.error('Error adding disaster:', err);
            alert(`Error: ${err.message}`);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Post Disaster</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Disaster Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Location:
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Severity:
                        <input
                            type="text"
                            value={severity}
                            onChange={(e) => setSeverity(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={styles.textarea}
                        />
                    </label>
                    <div>
                        <label style={styles.label}>Upload Disaster Image:</label>
                        <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.input} />
                        {image && <img src={URL.createObjectURL(image)} alt="Disaster" style={styles.imagePreview} />}
                    </div>
                    <button type="submit" style={styles.submitButton}>Submit</button>
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
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    label: {
        fontSize: '16px',
        color: '#333',
    },
    input: {
        padding: '12px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        width: '100%',
        boxSizing: 'border-box',
    },
    textarea: {
        padding: '12px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        width: '100%',
        minHeight: '100px',
        resize: 'vertical',
        boxSizing: 'border-box',
    },
    submitButton: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    imagePreview: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginTop: '10px',
    }
};

export default PostDisaster;
