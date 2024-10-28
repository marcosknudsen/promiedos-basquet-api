const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/Sequelize");

class Log extends Model {}

Log.init(
  {
    User_Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Ip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    Action: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    League_Id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    Team_Id: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Log",
    tableName: "Log",
    timestamps: false,
  }
);

module.exports = Log;
