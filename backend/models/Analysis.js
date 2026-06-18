const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Analysis = sequelize.define("Analysis", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicRepos: DataTypes.INTEGER,
  followers: DataTypes.INTEGER,
  following: DataTypes.INTEGER,
  avatarUrl: DataTypes.STRING,
  bio: DataTypes.STRING,
  location: DataTypes.STRING,
});

module.exports = Analysis;