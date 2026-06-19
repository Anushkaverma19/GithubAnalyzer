const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { sequelize, connectMySQL } = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const githubRoutes = require("./routes/githubRoutes");

const app = express();

// ================= CORS =================
app.use(cors({
  origin: "*", // change later to frontend URL in production
}));

// ================= MIDDLEWARE =================
app.use(express.json());

// ================= ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/github", githubRoutes);

// ================= START SERVER =================
const startServer = async () => {
  try {
    // 1. Connect DB
    await connectMySQL();

    // 2. Sync tables AFTER DB connection
    await sequelize.sync({ alter: true });
    console.log("MySQL Synced ✅");

    // 3. Start server ONLY after DB is ready
    app.listen(5000, () => {
      console.log("Server running on port 5000 🚀");
    });

  } catch (err) {
    console.log("Startup Error ❌:", err);
  }
};

startServer();