const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const port = 3000; // Set your desired port

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Your API routes and logic here

app.listen(YourPortNumber);

// Define an endpoint to serve your CSV data
app.get('/api/data', (req, res) => {
  const data = [];
  fs.createReadStream('./blood-banks.csv')
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      res.json(data);
    });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





