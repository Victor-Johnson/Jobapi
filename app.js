const express = require('express');
const dotenv = require('dotenv');
const jobs = require('./routes/jobs');

const app = express();
const PORT = process.env.PORT || 8000;

// Load environment variables
dotenv.config({ path: './config/config.env' });

if (process.env.NODE_ENV !== 'production') {
    console.log('Sever is in Development mode: Additional debugging enabled');
}

// Middleware for routes
app.use('/api/v1', jobs);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is online, listening on PORT: ${PORT}`);
});