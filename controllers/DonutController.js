const getDonuts = (req, res) => {
  res.send("getDonuts");
};

const createNewDonut = (req, res) => {
  console.log("req: ", req.body);
  res.send("createNewDonut");
};

const updateDonut = (req, res) => {
  res.send("The updateDonut url has not been implemented yet");
};

module.exports = {
  getDonuts,
  createNewDonut,
  updateDonut,
};
