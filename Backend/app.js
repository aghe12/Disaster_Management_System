const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Create an Express application instance

// Middleware
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI; // Get MongoDB URI from environment variables
        console.log("MongoDB URL:", uri); // Log the MongoDB URL for debugging
        await mongoose.connect(uri, {
            useNewUrlParser: true, // Not necessary in latest versions
            useUnifiedTopology: true, // Not necessary in latest versions
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

// Call the connectDB function to establish the connection
connectDB();

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Disaster Relief API');
});

// Export the app for use in server.js
module.exports = app; // Ensure you are exporting the app instance
