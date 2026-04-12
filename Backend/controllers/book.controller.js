const { books } = require("../database/connection");

exports.fetchBooks = async function (req, res) {
  try {
    //logics to fetch books
    const datas = await books.findAll();
    res.json({
      message: "book fetch successfully",
      datas,
    });
  } catch (error) {
    res.json({
      message: "something went wrong",
    });
  }
};

exports.addBook = function (req, res) {
  try {
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
  } catch (error) {
    res.json({
      message: "something went wrong",
    });
  }
  //logic to add books
};

exports.deleteBook = async function (req, res) {
  try {
    const { id } = req.params;

    await books.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: "deleted succesfully",
    });
  } catch (error) {
    res.json({
      message: "something went wrong",
    });
  }
};

exports.patchBook = async function (req, res) {
  try {
    const id = req.params.id;
    const { bookName, bookAuthor, bookGenre, bookPrice } = req.body;
    await books.update(
      { bookAuthor, bookName, bookGenre, bookPrice },
      {
        where: {
          id,
        },
      },
    );
    res.json({
      message: "updated succesfully",
    });
  } catch (error) {
    res.json({
      message: "something went wrong",
    });
  }
};

exports.fetchSingleBook = async function (req, res) {
  try {
    const id = req.params.id;
    const data = await books.findByPk(id);
    res.json({
      message: "single book fetched",
      data,
    });
  } catch (error) {
    res.json({
      message: "something went wrong",
    });
  }
};
