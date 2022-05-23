const express = require("express");
const mongoose = require("mongoose");

const app = express();
const { port, dbURI } = require("./config");

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log(conn.connections);
    console.log("DB connection successful");
  });

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from backend side");
});
