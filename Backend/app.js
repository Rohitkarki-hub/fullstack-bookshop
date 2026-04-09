const express = require("express");
const app = express();

const bookRoute = require("./routes/bookRoute");

// const app = require("express")();
app.use(express.json());
require("./database/connection");

app.use("/api", bookRoute);

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
