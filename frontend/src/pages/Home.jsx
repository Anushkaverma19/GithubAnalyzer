import React, { useState } from "react";
import { analyzeUser } from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import RepoList from "../components/RepoList";
import LanguageChart from "../components/LanguageChart";
import SkeletonLoader from "../components/SkeletonLoader";
import "../styles/main.css";
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    if (!username) return alert("Enter username");

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await analyzeUser(username);

      console.log("API RESPONSE:", res.data);

      // ✅ NORMALIZED DATA (MOST IMPORTANT FIX)
      const normalized = {
        profile: res.data?.profile || null,
        repos: res.data?.repos || [],
        stats: res.data?.stats || {},
        languages: res.data?.languages || {},
        aiSummary: res.data?.aiSummary || "",
      };

      setData(normalized);
    } catch (err) {
      console.log(err);
      setError("User not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />

      <SearchBar onSearch={handleSearch} />

      {loading && <SkeletonLoader />}

      {error && <p className="error">{error}</p>}

      {data && (
        <>
          {/* PROFILE */}
          <ProfileCard user={data.profile} />

          {/* STATS */}
          <StatsCards stats={data.stats} />

          {/* AI SUMMARY */}
          {data.aiSummary && (
            <div className="ai-summary">
              <h3>🤖 AI Summary</h3>
              <p>{data.aiSummary}</p>
            </div>
          )}

          {/* REPOS */}
          <RepoList repos={data.repos} />

          {/* LANGUAGES */}
          <LanguageChart languages={data.languages} />
        </>
      )}
    </div>
  );
};

export default Home;