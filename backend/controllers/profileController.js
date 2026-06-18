const Analysis = require("../models/Analysis");

// ALL PROFILES
const getAllProfiles = async (req, res) => {
  try {
    const data = await Analysis.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SINGLE PROFILE
const getProfileById = async (req, res) => {
  try {
    const data = await Analysis.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProfiles,
  getProfileById,
};