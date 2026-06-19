import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "JS", value: 40 },
  { name: "Python", value: 30 },
  { name: "Java", value: 20 },
  { name: "C++", value: 10 },
];

const StatsChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Language Usage</h3>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;