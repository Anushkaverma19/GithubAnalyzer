const express = require("express");
const router = express.Router();

const {
  analyzeGithub,
  getAllProfiles,
  getProfileById,
} = require("../controllers/githubController");

// ANALYZE USER
router.post("/analyze", analyzeGithub);

// GET ALL PROFILES
router.get("/all", getAllProfiles);

// GET SINGLE PROFILE
router.get("/:id", getProfileById);

module.exports = router;