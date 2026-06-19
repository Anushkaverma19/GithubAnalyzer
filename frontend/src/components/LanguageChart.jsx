import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";

const LanguageChart = ({ languages }) => {
  if (!languages || Object.keys(languages).length === 0) {
    return <p>No language data available</p>;
  }

  const data = Object.entries(languages).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div style={{ width: "100%", height: 320 }}>
      <h3>Languages Used</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            fill="#8884d8"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageChart;