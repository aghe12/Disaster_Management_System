import React, { useState, useEffect } from 'react';

const ViewShelters = () => {
    const [shelters, setShelters] = useState([]);
    const [editShelter, setEditShelter] = useState(null);
    const [updatedDetails, setUpdatedDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/shelter')
            .then((response) => response.json())
            .then((data) => setShelters(data))
            .catch((error) => console.error('Error fetching shelters:', error));
    }, []);

    const handleUpdate = async (id) => {
        try {
            const formData = new FormData();
            for (const key in updatedDetails) {
                formData.append(key, updatedDetails[key]);
            }

            const response = await fetch(`http://localhost:5000/api/shelter/${id}`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to update shelter');
            }

            const updatedShelter = await response.json();
            setShelters((prev) =>
                prev.map((shelter) => (shelter._id === id ? updatedShelter.shelter : shelter))
            );
            setEditShelter(null);
        } catch (error) {
            console.error('Error updating shelter:', error);
        }
    };

    return (
        <div>
            <h1>All Shelters</h1>
            <ul>
                {shelters.map((shelter) => (
                    <li key={shelter._id}>
                        {editShelter === shelter._id ? (
                            <div>
                                <input
                                    type="text"
                                    defaultValue={shelter.name}
                                    onChange={(e) =>
                                        setUpdatedDetails({ ...updatedDetails, name: e.target.value })
                                    }
                                />
                                <input
                                    type="number"
                                    defaultValue={shelter.capacity}
                                    onChange={(e) =>
                                        setUpdatedDetails({ ...updatedDetails, capacity: e.target.value })
                                    }
                                />
                                <button onClick={() => handleUpdate(shelter._id)}>Save</button>
                                <button onClick={() => setEditShelter(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{shelter.name}</h3>
                                <p>Capacity: {shelter.capacity}</p>
                                <p>Available Space: {shelter.availableSpace}</p>
                                <button onClick={() => setEditShelter(shelter._id)}>Edit</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewShelters;
