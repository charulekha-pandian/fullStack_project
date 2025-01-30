// src/components/FacultySidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './facultySidebar.css'; // Use the same or a different CSS file for styling

const FacultySidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/faculty">Home</Link></li>
      <li><Link to="/faculty/approval">Approvals</Link></li>
      <li><Link to="/">Logout</Link></li> {/* Assuming logout redirects to the login page */}
    </ul>
  </div>
);

export default FacultySidebar;
