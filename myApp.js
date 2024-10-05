require('dotenv').config()
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/now', 
    (req, res, next) => {
      // Middleware function
      req.time = new Date().toString();
      next(); // Pass control to the next function
    },
    (req, res) => {
      // Final handler
      res.json({ time: req.time });
    }
  );




























 module.exports = app;
