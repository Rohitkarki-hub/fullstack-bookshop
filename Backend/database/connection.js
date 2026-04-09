const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.CS);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("erroe" + err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./models/book.model")(sequelize, DataTypes);
db.users = require("./models/user.model")(sequelize, DataTypes);
db.products = require("./models/product.model")(sequelize, DataTypes);

//Migrattion
sequelize.sync({ alter: false }).then(() => {
  console.log("migrated");
});

module.exports = db;
