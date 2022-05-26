const express = require("express");
const router = express.Router();

const {
  getDonuts,
  createNewDonut,
  updateDonut,
} = require("../controllers/DonutController");

router.route("/").get(getDonuts).post(createNewDonut);
router.route("/:id").patch(updateDonut);

module.exports = {
  donutRouter: router,
};
