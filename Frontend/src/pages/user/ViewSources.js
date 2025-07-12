import React, { useEffect, useState } from 'react';

const ViewResources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/resources');
                const data = await response.json();
                setResources(data);
            } catch (error) {
                console.error('Error fetching resources:', error);
            }
        };

        fetchResources();
    }, []);
        const [hoveredIndex, setHoveredIndex] = useState(null);
    
        return (
            <div style={styles.container}>
                <h1 style={styles.title}>Available Resources</h1>
                <ul style={styles.resourceList}>
                    {resources.map((resource, index) => (
                        <li
                            key={resource._id}
                            style={{
                                ...styles.resourceItem,
                                ...(hoveredIndex === index ? styles.resourceItemHover : {}),
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <h3 style={styles.resourceName}>{resource.resourceName}</h3>
                            <p style={styles.resourceQuantity}>
                                <strong>Quantity:</strong> {resource.quantity}
                            </p>
                            <p style={styles.resourceDescription}>{resource.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    const styles = {
        container: {
            padding: '30px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '900px',
            margin: '20px auto',
        },
        title: {
            fontSize: '28px',
            fontWeight: '600',
            color: '#343a40',
            marginBottom: '30px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
        },
        resourceList: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
        },
        resourceItem: {
            backgroundColor: '#fff',
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
        },
        resourceItemHover: {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        },
        resourceName: {
            fontSize: '20px',
            fontWeight: '500',
            color: '#007bff',
            marginBottom: '10px',
            textTransform: 'capitalize',
        },
        resourceDetails: {
            color: '#6c757d',
            fontSize: '16px',
            lineHeight: '1.6',
        },
        resourceQuantity: {
            fontWeight: '600',
            fontSize: '18px',
            color: '#28a745',
            marginBottom: '8px',
        },
        resourceDescription: {
            fontSize: '14px',
            color: '#495057',
        },
        resourceItemHoverEffect: {
            backgroundColor: '#f1f1f1',
        },
    };
    
    

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.title}>Available Resources</h1>
//             <ul style={styles.resourceList}>
//                 {resources.map((resource) => (
//                     <li key={resource._id} style={styles.resourceItem}>
//                         <h3>{resource.resourceName}</h3>
//                         <p><strong>Quantity:</strong> {resource.quantity}</p>
//                         <p>{resource.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const styles = {
//     container: { padding: '20px', textAlign: 'center' },
//     title: { fontSize: '24px', marginBottom: '20px' },
//     resourceList: { listStyleType: 'none', padding: 0 },
//     resourceItem: { marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' },
// };

export default ViewResources;
