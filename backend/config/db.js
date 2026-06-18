const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "github_analyzer",
  "root",
  "Anushka@1920",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const connectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected");
  } catch (err) {
    console.log("DB Error:", err);
  }
};

module.exports = { sequelize, connectMySQL };