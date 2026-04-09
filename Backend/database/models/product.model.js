const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    producName: {
      type: DataTypes.STRING,
    },
    productImage: {
      type: DataTypes.STRING,
    },
    productPrice: {
      type: DataTypes.STRING,
    },
  });
  return Product;
};

module.exports = ProductModel;
