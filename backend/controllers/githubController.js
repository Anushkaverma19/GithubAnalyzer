const axios = require("axios");
const Analysis = require("../models/Analysis");

// ================= ANALYZE + SAVE =================
exports.analyzeGithub = async (req, res) => {
  try {
    const { username } = req.body;

    console.log("USERNAME RECEIVED:", username);

    if (!username) {
      return res.status(400).json({ message: "Username required" });
    }

    // ================= GITHUB API CALL =================
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "GitHub-Analyzer-App",
        },
      }
    );

    const user = response.data;

    // ================= SAVE TO DB =================
    await Analysis.create({
      username: user.login,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      location: user.location,
    });

    // ================= RESPONSE =================
    return res.json({
      profile: {
        username: user.login,
        avatar: user.avatar_url,
        bio: user.bio,
        location: user.location,
        followers: user.followers,
        following: user.following,
        publicRepos: user.public_repos,
      },

      stats: {
        followers: user.followers,
        following: user.following,
        repos: user.public_repos,
      },

      repos: [],

      languages: {
        JavaScript: 40,
        Python: 30,
        Java: 20,
        Cpp: 10,
      },

      aiSummary: `${user.login} is an active GitHub developer.`,
    });

  } catch (err) {
    console.log(
      "GITHUB ERROR DETAILS:",
      err.response?.data || err.message
    );

    return res.status(500).json({
      message: "GitHub API error",
      error: err.response?.data || err.message,
    });
  }
};

// ================= GET ALL PROFILES =================
exports.getAllProfiles = async (req, res) => {
  try {
    const data = await Analysis.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= GET PROFILE BY ID =================
exports.getProfileById = async (req, res) => {
  try {
    const data = await Analysis.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};