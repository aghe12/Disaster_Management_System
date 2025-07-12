import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewIncident = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch incidents
  const fetchIncidents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/incidents');
      setIncidents(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch incidents.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>View Incidents</h1>
      {loading && <p style={styles.message}>Loading incidents...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Incident Type</th>
            <th style={styles.header}>Description</th>
            <th style={styles.header}>Severity</th>
            <th style={styles.header}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident._id} style={styles.row}>
              <td style={styles.cell}>{incident.incidentType}</td>
              <td style={styles.cell}>{incident.description}</td>
              <td style={styles.cell}>{incident.severity}</td>
              <td style={styles.cell}>{new Date(incident.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    color: '#555',
  },
  error: {
    color: 'red',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  header: {
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    padding: '8px',
    fontSize: '16px',
  },
  row: {
    backgroundColor: '#f9f9f9',
  },
  cell: {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    fontSize: '14px',
  },
};

export default ViewIncident;
