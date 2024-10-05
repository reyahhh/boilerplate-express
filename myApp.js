require('dotenv').config()
var bodyParser = require("body-parser");

let express = require('express');
let app = express();

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});



















 module.exports = app;
