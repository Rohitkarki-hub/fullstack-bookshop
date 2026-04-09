//boook name book price autorh genr

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "Anonymous",
    },
    bookGenre: {
      type: DataTypes.STRING,
    },
  });
  return Book;
};

module.exports = bookModel;
