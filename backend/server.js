const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { sequelize, connectMySQL } = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const githubRoutes = require("./routes/githubRoutes");

const app = express();

// CORS
app.use(cors({
  origin: "http://localhost:3000",
}));

// JSON BODY
app.use(express.json());

// DB CONNECT
connectMySQL();

// SYNC DB
sequelize.sync({ alter: true })
  .then(() => console.log("MySQL Synced"))
  .catch(err => console.log(err));

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/github", githubRoutes);

// SERVER START
app.listen(5000, () => {
  console.log("Server running on port 5000");
});