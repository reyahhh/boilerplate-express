require('dotenv').config()
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  );




























 module.exports = app;
