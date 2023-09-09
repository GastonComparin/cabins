const express = require("express");
const morgan = require("morgan");
const myRouter = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(myRouter);

module.exports = app;
