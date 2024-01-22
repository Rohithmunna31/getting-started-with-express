const express = require("express");

const path = require("path");

const app = express();

app.use("/home", (req, res, next) => {
  res.send("<h1> This is HOme page </h1>");
});

app.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.use('/contacus', (req,res,next)=>{
    res.send('<h1> This is about us  </h1>')
})

app.use("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./success.html"));
});

app.use((req, res, next) => {
  res.send("<h1> Hello to node js </h1>");
});

app.listen(3000);
