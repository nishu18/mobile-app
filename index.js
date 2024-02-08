// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

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
  if (userid === validCredentials.userid && password === validCredentials.password) {
    res.status(200).json({ message: 'Sign-in successful' });
  } else {
    res.status(401).json({ message: 'Incorrect userid or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
