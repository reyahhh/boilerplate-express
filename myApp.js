require('dotenv').config()
let express = require('express');
let app = express();

app.get(
    "/now",
    (req, res, next) => {
      // adding a new property to req object
      // in the middleware function
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      // accessing the newly added property
      // in the main function
      res.json({ time: req.time });
    }
  );
  


























 module.exports = app;
