// src/components/FacultyLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import FacultySidebar from './facultySidebar'; // Create this component similar to Sidebar

const FacultyLayout = () => (
  <div className="layout">
    <FacultySidebar />
    <div className="main-content">
      <Outlet /> {/* This will render the matched child route */}
    </div>
  </div>
);

export default FacultyLayout;
