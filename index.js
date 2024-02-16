// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module
const allowedOrigins = ['http://localhost:8081']; // Adjust the origin based on your frontend URL
// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// app.use(cors({
//   origin: allowedOrigins,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only specific HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
// }));// Enable CORS


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Hardcoded user credentials
const validCredentials = {
  userid: 12456,
  password: 55555
};

// Endpoint for user sign-in
app.post('/signin', (req, res) => {
  // Extract user credentials from request body
  const { userid, password } = req.body;

  // Check if user credentials match
  if (userid == validCredentials.userid && password == validCredentials.password) {
    res.status(200).json({ message: 'Sign-in successful' });
  } else {
    res.status(401).json({ message: 'Incorrect userid or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
