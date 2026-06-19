import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={() => onSearch(username)}>
        Analyze
      </button>
    </div>
  );
};

export default SearchBar;