require('dotenv').config()
var bodyParser = require("body-parser");

let express = require('express');
let app = express();


app.post("/name", function(req, res) {

  // Handle the data in the request
  var firstName = req.body.first;
  var lastName = req.body.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
  next();
});



















 module.exports = app;
