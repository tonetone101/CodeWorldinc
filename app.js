const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const expressValidator = require("express-validator");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(expressValidator());

app.get("/", (req, res) => {
  res.send("hello");
});

const port = process.env.PORT || 8000;
console.log(port);

app.listen(port);
