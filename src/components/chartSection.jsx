// ChartSection.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Skills', value: 80 },
  { name: 'PS-Level', value: 50 },
  { name: 'Projects', value: 90 },
  { name: 'DS-Level', value: 60 },
  { name: 'Programming Languages', value: 70 },
  { name: 'Achievements', value: 85 },
];

const ChartSection = () => {
  return (
    <div className="chart-section">
      <h3>Dashboard</h3>
      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
