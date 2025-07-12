// import React, { useState } from 'react';

// const SubmitReport = () => {
//     const [report, setReport] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Report submitted:', report);
//         // Logic to submit report (e.g., API call)
//     };

//     const styles = {
//         dashboardContainer: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh',
//             backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             fontFamily: 'Roboto, sans-serif',
//         },
//         dashboardFormContainer: {
//             backgroundColor: 'rgba(255, 255, 255, 0.9)',
//             padding: '40px',
//             borderRadius: '12px',
//             boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
//             width: '100%',
//             maxWidth: '600px',
//             textAlign: 'center',
//             transition: 'transform 0.3s ease-in-out',
//         },
//         dashboardTitle: {
//             fontSize: '26px',
//             fontWeight: '700',
//             color: '#333',
//             marginBottom: '20px',
//             textTransform: 'uppercase',
//         },
//         dashboardTextarea: {
//             width: '100%',
//             padding: '15px',
//             marginBottom: '20px',
//             border: '2px solid #ccc',
//             borderRadius: '8px',
//             fontSize: '16px',
//             color: '#333',
//             backgroundColor: '#f9f9f9',
//             resize: 'vertical',
//             transition: 'border-color 0.3s ease-in-out',
//         },
//         dashboardTextareaFocus: {
//             borderColor: '#4CAF50',
//             outline: 'none',
//         },
//         dashboardButton: {
//             padding: '15px 20px',
//             backgroundColor: '#4CAF50',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             width: '100%',
//             transition: 'background-color 0.3s ease-in-out',
//         },
//         dashboardButtonHover: {
//             backgroundColor: '#45a049',
//         },
//     };

//     return (
//         <div style={styles.dashboardContainer}>
//             <div style={styles.dashboardFormContainer}>
//                 <h2 style={styles.dashboardTitle}>Submit Report</h2>
//                 <form onSubmit={handleSubmit}>
//                     <textarea
//                         placeholder="Describe the situation..."
//                         value={report}
//                         onChange={(e) => setReport(e.target.value)}
//                         style={styles.dashboardTextarea}
//                         onFocus={(e) => e.target.style.borderColor = styles.dashboardTextareaFocus.borderColor}
//                         onBlur={(e) => e.target.style.borderColor = '#ccc'}
//                     />
//                     <button
//                         type="submit"
//                         style={styles.dashboardButton}
//                         onMouseEnter={(e) => (e.target.style.backgroundColor = styles.dashboardButtonHover.backgroundColor)}
//                         onMouseLeave={(e) => (e.target.style.backgroundColor = styles.dashboardButton.backgroundColor)}
//                     >
//                         Submit Report
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SubmitReport;
import React, { useState } from 'react';

const SubmitReport = () => {
    const [report, setReport] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send the report to the backend API
        try {
            const response = await fetch('http://localhost:5000/api/reports/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: report }),
            });

            const data = await response.json();
            if (response.status === 200) {
                alert('Report submitted successfully!');
            } else {
                alert('Failed to submit report: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error submitting report:', error);
            alert('Error submitting the report. Please try again later.');
        }
    };

    const styles = {
        dashboardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Roboto, sans-serif',
        },
        dashboardFormContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        dashboardTitle: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        dashboardTextarea: {
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
        dashboardTextareaFocus: {
            borderColor: '#4CAF50',
            outline: 'none',
        },
        dashboardButton: {
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
        dashboardButtonHover: {
            backgroundColor: '#45a049',
        },
    };

    return (
        <div style={styles.dashboardContainer}>
            <div style={styles.dashboardFormContainer}>
                <h2 style={styles.dashboardTitle}>Submit Report</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Describe the situation..."
                        value={report}
                        onChange={(e) => setReport(e.target.value)}
                        style={styles.dashboardTextarea}
                        onFocus={(e) => e.target.style.borderColor = styles.dashboardTextareaFocus.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#ccc'}
                    />
                    <button
                        type="submit"
                        style={styles.dashboardButton}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.dashboardButtonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.dashboardButton.backgroundColor)}
                    >
                        Submit Report
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubmitReport;
