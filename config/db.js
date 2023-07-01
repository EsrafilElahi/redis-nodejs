const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "esrafil", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
