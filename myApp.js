require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// ... other middleware and route handlers ...

// POST handler for /name route
app.post('/name', (req, res) => {
  const { first, last } = req.body;
  res.json({ name: `${first} ${last}` });
});















 module.exports = app;
