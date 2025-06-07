require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<u><h1 style='color: #2c3e50;'> Hello Vijay... This is the Home Page. </h1></u>");
});

app.get("/vijay", (req, res) =>{
    res.send("<h3> This is your page Vijay</h3>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
