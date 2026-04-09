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

module.exports = db;
