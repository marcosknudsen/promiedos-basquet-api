const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("PROMIEDOS_BASQUET", "root", "kanu", {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
});

module.exports = sequelize;