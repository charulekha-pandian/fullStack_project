// src/components/Dashboard.jsx
import React from 'react';
import './dashboard.css';
import DashboardHeader from './dashboardHeader';
import GreetingSection from './greetingSection';
import ProgressList from './progressList';
import ChartSection from './chartSection';
import Footer from './footer';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <GreetingSection />
      <ProgressList />
      <ChartSection />
    </div>
  );
};

export default Dashboard;
