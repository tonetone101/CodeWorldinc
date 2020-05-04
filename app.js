const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const expressValidator = require("express-validator");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!!"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(expressValidator());

const authRoutes = require("./general/routes/auth");
const userRoutes = require("./general/routes/user");

const postRoutes = require("./english/routes/post");
const reviewRoutes = require("./english/routes/review");

app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/", reviewRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(expressValidator());

// if in production, express will serve react file
//if (process.env.NODE_ENV === "production") {
//  app.use(express.static("client/build"));

//  const path = require("path");
//  app.get("*", (req, res) => {
//    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//  });
//}
//app.use("/", (req, res) => {
//  res.send("hello");
//});

const port = process.env.PORT || 8000;
console.log(port);

app.listen(port);
