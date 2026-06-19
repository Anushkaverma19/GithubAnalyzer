import React from "react";

const History = ({ history = [] }) => {
  return (
    <div className="history-section">
      <h2>Recent Searches</h2>

      {history.map((item) => (
        <div
          key={item._id}
          className="history-card"
        >
          {item.username}
        </div>
      ))}
    </div>
  );
};

export default History;