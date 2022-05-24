const mongoose = require("mongoose");
const app = require("./app");

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
