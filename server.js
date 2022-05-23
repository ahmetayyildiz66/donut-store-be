const express = require("express");

const app = express();
const { port } = require("./config");
// mongodb+srv://ahmetayyildiz:<password>@cluster0.pnpfg.mongodb.net/?retryWrites=true&w=majority

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from backend side");
});
