const { books } = require("../database/connection");

exports.fetchBooks = async function (req, res) {
  //logics to fetch books
  const datas = await books.findAll();
  res.json({
    message: "book fetch successfully",
    datas,
  });
};

exports.addBook = function (req, res) {
  //logic to add books
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre,
  });
  console.log(req.body);
  res.json({
    message: "book added successfully",
  });
};

exports.deleteBook = function (req, res) {
  res.json({
    message: "deleted succesfully",
  });
};

exports.patchBook = function (req, res) {
  res.json({
    message: "updated succesfully",
  });
};

exports.fetchSingleBook = async function (req, res) {
  const id = req.params.id;
  const data = await books.findByPk(id);
  res.json({
    message: "single book fetched",
    data,
  });
};
