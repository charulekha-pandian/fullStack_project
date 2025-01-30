import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar'; // Assuming Sidebar is a separate component

const Layout = () => (
  <div className="layout">
    <Sidebar />
    <div className="main-content">
      <Outlet /> {/* This will render the matched child route */}
    </div>
  </div>
);

export default Layout;
