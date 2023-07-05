const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://movienerd-front.onrender.com/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));




app.get('/api/api-key', (req, res) => {

 const apiKey = process.env.API_KEY;
  res.json({ apiKey });
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});