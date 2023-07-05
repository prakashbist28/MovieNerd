const express = require('express');
require('dotenv').config();

const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with the origin of your React app
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// Define an endpoint to retrieve the API key
app.get('/api/api-key', (req, res) => {
 // Replace with your actual API key
 const apiKey = process.env.API_KEY;
  res.json({ apiKey });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
