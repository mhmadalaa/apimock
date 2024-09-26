// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const apiRoutes = require('./api');
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
