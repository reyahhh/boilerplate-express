require('dotenv').config()
let express = require('express');
let app = express();

app.get(
    "/:word/echo",
    (req, res, next) => {
      const {word} = req.params
      res.json({
        echo: word
      })
      next();
    });
























 module.exports = app;
