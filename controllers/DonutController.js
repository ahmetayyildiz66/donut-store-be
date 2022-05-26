const Donut = require("../models/Donut.model");

const getDonuts = async (req, res) => {
  try {
    const donuts = await Donut.find();
    res.status(200).json({
      data: {
        count: donuts.length,
        status: "success",
        donuts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const createNewDonut = async (req, res) => {
  try {
    const donut = await Donut.create({
      name: "Strawberry Sprinkle",
      type: "Glaze",
    });

    res.status(200).json({
      data: {
        status: "success",
        donut,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const updateDonut = async (req, res) => {
  const { id } = req.params;

  try {
    const donut = await Donut.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      data: {
        status: "success",
        donut,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
  getDonuts,
  createNewDonut,
  updateDonut,
};
