const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/Sequelize");

class User extends Model {}

User.init(
  {
    User_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "User",
    timestamps: false,
  }
);

module.exports = User;
