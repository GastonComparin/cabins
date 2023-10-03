const express = require("express");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const myRouter = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(morgan("dev"));
app.use(express.json());

app.use(myRouter);

module.exports = app;
