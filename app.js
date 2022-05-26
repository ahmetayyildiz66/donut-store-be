const express = require("express");
const { donutRouter } = require("./routes/donutRouter");

const app = express();
app.use(express.json());

app.use("/donuts", donutRouter);

module.exports = app;
