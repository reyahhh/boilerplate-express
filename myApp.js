require('dotenv').config()
let express = require('express');
let app = express();

// app.use("/public", express.static(__dirname + "/public"));
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html");
// });

app.get(
    "/now",
    (req, res, next) => {
      // adding a new property to req object
      // in the middleware function
      req.time = new Date().toString();
      res.send(req.time);
      next();
    },
    (req, res) => {
      // accessing the newly added property
      // in the main function
    //   res.json({"time": req.time});
      res.send({"time": req.time});
    }
  );




























 module.exports = app;
