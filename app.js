const express = require("express");

const app = express();
app.use(express.json());

const {
  getDonuts,
  createNewDonut,
  updateDonut,
} = require("./controllers/DonutController");

app.route("/donuts").get(getDonuts).post(createNewDonut);
app.route("/donuts/:id").patch(updateDonut);

app.get("/", (req, res) => {
  res.send("Hello from backend side");
});

module.exports = app;
