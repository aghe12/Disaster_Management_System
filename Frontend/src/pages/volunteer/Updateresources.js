import React, { useState, useEffect } from 'react';

const BulkUpdateResources = () => {
    const [resources, setResources] = useState([]);
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/resources')
            .then((response) => response.json())
            .then((data) => {
                setResources(data);
                setUpdates(data.map((resource) => ({ id: resource._id, quantity: resource.quantity })));
            })
            .catch((error) => console.error('Error fetching resources:', error));
    }, []);

    const handleQuantityChange = (id, quantity) => {
        setUpdates((prev) =>
            prev.map((update) =>
                update.id === id ? { ...update, quantity: parseInt(quantity) || 0 } : update
            )
        );
    };

    const handleBulkUpdate = () => {
        fetch('http://localhost:5000/api/resources', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ updates }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Resources updated successfully!');
                console.log(data.results);
            })
            .catch((error) => console.error('Error updating resources:', error));
    };
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: 'auto',
            fontFamily: 'Arial, sans-serif',
        },
        resourceCard: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '15px',
            marginBottom: '15px',
        },
        button: {
            margin: '5px',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };
    

    return (
        <div>
            <h1>Bulk Update Resources</h1>
            <ul>
                {resources.map((resource) => (
                    <li key={resource._id}>
                        <h3>{resource.name}</h3>
                        <p>{resource.description}</p>
                        <input
                            type="number"
                            value={
                                updates.find((update) => update.id === resource._id)?.quantity || resource.quantity
                            }
                            onChange={(e) => handleQuantityChange(resource._id, e.target.value)}
                        />
                    </li>
                ))}
            </ul>
            <button onClick={handleBulkUpdate}>Update All Quantities</button>
        </div>
    );
};

export default BulkUpdateResources;
