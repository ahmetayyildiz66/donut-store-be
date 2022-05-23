const express = require("express");
const mongoose = require("mongoose");
const {
  getDonuts,
  createNewDonut,
  updateDonut,
} = require("./controllers/DonutController");

const app = express();
app.use(express.json());

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

app.route("/donuts").get(getDonuts).post(createNewDonut);
app.route("/donuts/:id").patch(updateDonut);

app.get("/", (req, res) => {
  res.send("Hello from backend side");
});
