// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// const ViewReports = () => {
//     const [reports, setReports] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Fetch reports from the backend
//         const fetchReports = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/reports/all');
//                 if (response.ok) {
//                     const data = await response.json();
//                     setReports(data);
//                     setLoading(false);
//                 } else {
//                     setError('Failed to fetch reports.');
//                     setLoading(false);
//                 }
//             } catch (error) {
//                 console.error('Error fetching reports:', error);
//                 setError('An error occurred while fetching reports.');
//                 setLoading(false);
//             }
//         };

//         fetchReports();
//     }, []);

//     const styles = {
//         container: {
//             padding: '20px',
//             fontFamily: 'Roboto, sans-serif',
//             backgroundColor: '#f4f4f4',
//             borderRadius: '8px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//         },
//         heading: {
//             fontSize: '24px',
//             fontWeight: 'bold',
//             marginBottom: '20px',
//         },
//         reportList: {
//             listStyle: 'none',
//             padding: 0,
//         },
//         reportItem: {
//             backgroundColor: '#fff',
//             padding: '15px',
//             marginBottom: '10px',
//             borderRadius: '8px',
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//         },
//         timestamp: {
//             fontSize: '12px',
//             color: '#888',
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.heading}>View Reports</h2>
//             {loading ? (
//                 <p>Loading reports...</p>
//             ) : error ? (
//                 <p style={{ color: 'red' }}>{error}</p>
//             ) : (
//                 <ul style={styles.reportList}>
//                     {reports.map((report) => (
//                         <li key={report._id} style={styles.reportItem}>
//                             <p>{report.message}</p>
//                             <p style={styles.timestamp}>
//                                 Submitted on: {new Date(report.createdAt).toLocaleString()}
//                             </p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default ViewReports;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewReports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch reports from the backend
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reports');
                // Axios doesn't use `response.ok`, it throws an error for non-2xx status codes
                setReports(response.data); // Axios returns the parsed data directly in `response.data`
                setLoading(false);
            } catch (error) {
                console.error('Error fetching reports:', error);
                setError('An error occurred while fetching reports.');
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#f4f4f4',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        reportList: {
            listStyle: 'none',
            padding: 0,
        },
        reportItem: {
            backgroundColor: '#fff',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        timestamp: {
            fontSize: '12px',
            color: '#888',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>View Reports</h2>
            {loading ? (
                <p>Loading reports...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <ul style={styles.reportList}>
                    {reports.map((report) => (
                        <li key={report._id} style={styles.reportItem}>
                            <p>{report.message}</p>
                            <p style={styles.timestamp}>
                                Submitted on: {new Date(report.createdAt).toLocaleString()}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewReports;
