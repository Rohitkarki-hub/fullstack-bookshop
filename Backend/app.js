// const express = require("express");
// const app = express();

let app = require("express")();
require("./database/connection");

app.get("/books", function (req, res) {
  //logics to fetch books
  res.json({
    message: "book fetch successfully",
  });
});
app.post("/books", function (req, res) {
  //logic to add books

  res.json({
    message: "book added successfully",
  });
});

app.delete("/books/:id", function (req, res) {
  res.json({
    message: "deleted succesfully",
  });
});
app.patch("/books/:id", function (req, res) {
  res.json({
    message: "updated succesfully",
  });
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
