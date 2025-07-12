import React from 'react';
import ReactDOM from 'react-dom/client';  // Importing the correct module for React 18
import App from './App';  // Import your main App component
import 'leaflet/dist/leaflet.css';

// React 18 syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  // Render the App component
