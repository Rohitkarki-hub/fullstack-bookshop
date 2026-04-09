const {
  fetchBooks,
  addBook,
  deleteBook,
  patchBook,
  fetchSingleBook,
} = require("../controllers/book.controller");

const router = require("express").Router();

router.route("/books").get(fetchBooks).post(addBook);
router
  .route("/books/:id")
  .delete(deleteBook)
  .patch(patchBook)
  .get(fetchSingleBook);

module.exports = router;
