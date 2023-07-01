const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "esrafil", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
