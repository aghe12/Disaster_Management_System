import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [incidentData, setIncidentData] = useState({
    incidentType: '',
    description: '',
    severity: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch incidents
  const fetchIncidents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/incidents');
      setIncidents(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch incidents.');
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/incidents', incidentData);
      setSuccessMessage(response.data.message);
      setIncidentData({ incidentType: '', description: '', severity: '' });
      fetchIncidents(); // Refresh the list
    } catch (err) {
      console.error(err);
      setError('Failed to create incident.');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncidentData({ ...incidentData, [name]: value });
  };

  return (
    <div>
      <h1>Manage Incidents</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="incidentType"
          placeholder="Incident Type"
          value={incidentData.incidentType}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={incidentData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <select
          name="severity"
          value={incidentData.severity}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Severity</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Create Incident</button>
      </form>

      <h2>Existing Incidents</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident._id}>
            <strong>{incident.incidentType}</strong> - {incident.description} ({incident.severity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageIncidents;
