const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_DB_URL; // Ensure this is loaded correctly
        if (!uri) {
            console.error("MONGO_DB_URL is not defined in the environment variables");
            process.exit(1); // Exit if the MongoDB URI is not defined
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;
