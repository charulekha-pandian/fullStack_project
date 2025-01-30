// Header.jsx
import React from 'react';

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString('en-GB', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });
  
  return (
    <header className="dashboard-header">
      <h1>Welcome To Your Dashboard</h1>
      <p>{today}</p>
    </header>
  );
};

export default DashboardHeader;
