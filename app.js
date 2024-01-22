const express = require("express");

const app = express();

app.use("/home", (req, res, next) => {
  res.send("<h1> This is HOme page </h1>");
});

app.use("/about", (req, res, next) => {
  res.send("<h1> This is About page </h1>");
});

app.use((req, res, next) => {
  res.send("<h1> Hello to node js </h1>");
});

app.listen(3000);
