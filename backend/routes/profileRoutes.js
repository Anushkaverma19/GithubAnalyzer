const express = require("express");
const router = express.Router();

const {
  getAllProfiles,
  getProfileById,
} = require("../controllers/profileController");

// Get all profiles
router.get("/", getAllProfiles);

// Get single profile
router.get("/:id", getProfileById);

module.exports = router;