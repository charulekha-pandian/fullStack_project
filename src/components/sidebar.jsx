import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Sidebar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/layout">Dashboard</Link></li>
        <li>
          <div onClick={toggleSubmenu} className="submenu-toggle">
            Update Forms
          </div>
          {isSubmenuOpen && (
            <ul className="submenu">
              <li><Link to="/layout/updateform/programming">Programming Language</Link></li>
              <li><Link to="/layout/updateform/group-discussion">Group Discussion</Link></li>
              <li><Link to="/layout/updateform/communication">Communication</Link></li>
              <li><Link to="/layout/updateform/languages">Languages</Link></li>
              <li><Link to="/layout/updateform/nptel">NPTEL</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
