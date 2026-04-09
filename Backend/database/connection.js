const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.kdfwggzguorovhcfjjkg:GRo67jkDlV14dDEh@aws-1-ap-south-1.pooler.supabase.com:6543/postgres",
);

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
