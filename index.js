import 'dotenv/config'
import express from "express";
import { listedMoters } from './data.js';
 
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(
    "<u><h1 style='color: #2c3e50;'> Hello Vijay... This is the Home Page. </h1></u>"
  );
});

app.get("/api/listed-motors", (req, res) => {
  res.send(listedMoters);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
