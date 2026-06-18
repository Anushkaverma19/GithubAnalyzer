const axios = require("axios");

const BASE_URL = "https://api.github.com";

/**
 * AI Summary Generator
 */
const generateAISummary = (user, repos, languages, totalStars) => {
  const topLang =
    Object.entries(languages).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "Unknown";

  const repoCount = repos.length;

  let level = "Beginner";
  if (repoCount > 20 || totalStars > 50) level = "Intermediate";
  if (repoCount > 50 || totalStars > 200) level = "Advanced";

  return `
${user.name || user.login} is a ${level} developer.

Main language: ${topLang}.  
Public repositories: ${repoCount}.  

They are actively building projects and improving their development skills.
  `.trim();
};

const getUserData = async (username) => {
  try {
    // 🔑 IMPORTANT: check token here (safe place)
    console.log("TOKEN CHECK:", process.env.GITHUB_TOKEN?.slice(0, 10));

    // 🔑 headers must be inside function (IMPORTANT FIX)
    const headers = {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    };

    // 👤 Get user data
    const userRes = await axios.get(
      `${BASE_URL}/users/${username}`,
      { headers }
    );

    // 📦 Get repos
    const repoRes = await axios.get(
      `${BASE_URL}/users/${username}/repos`,
      { headers }
    );

    const user = userRes.data;

    // limit repos (prevents rate limit issues)
    const repos = repoRes.data.slice(0, 10);

    // ⭐ total stars
    const totalStars = repos.reduce(
      (acc, repo) => acc + repo.stargazers_count,
      0
    );

    // 🏆 most starred repo
    const mostStarredRepo = repos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    )[0];

    // 🔥 language stats
    const languages = {};

    for (const repo of repos) {
      try {
        const langRes = await axios.get(
          repo.languages_url,
          { headers }
        );

        Object.entries(langRes.data).forEach(([lang, bytes]) => {
          languages[lang] = (languages[lang] || 0) + bytes;
        });
      } catch (err) {
        console.log("Language fetch error:", err.message);
      }
    }

    // 🤖 AI summary
    const aiSummary = generateAISummary(
      user,
      repos,
      languages,
      totalStars
    );

    // 📤 response
    return {
      profile: {
        name: user.name,
        username: user.login,
        avatar: user.avatar_url,
        bio: user.bio,
        followers: user.followers,
        following: user.following,
        public_repos: user.public_repos,
      },

      repos,

      stats: {
        totalStars,
        mostStarredRepo: mostStarredRepo?.name || "N/A",
        languages,
      },

      aiSummary,
    };

  } catch (error) {
    console.log(
      "GitHub API error:",
      error.response?.status,
      error.response?.data || error.message
    );

    throw error;
  }
};

module.exports = { getUserData };