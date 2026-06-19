import React from "react";

const RepoList = ({ repos }) => {
  // Safety check
  if (!repos || !Array.isArray(repos)) {
    return <p>Loading repositories...</p>;
  }

  return (
    <div className="repo-list">
      <h3>Top Repositories</h3>

      {repos.slice(0, 5).map((repo, index) => (
        <div key={index} className="repo-card">
          <h4>{repo.name || "No name"}</h4>
          <p>{repo.description || "No description"}</p>
          <p>⭐ {repo.stars ?? 0}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;