const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const donutSchema = new Schema({
  name: String,
  type: String,
});

const Donut = model("Donut", donutSchema);

module.exports = Donut;
