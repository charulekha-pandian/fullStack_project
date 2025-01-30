// src/components/FacultyLogin.jsx
import React from 'react';// Import a CSS file for styling
import './approval.css';

const Approval = () => {
  return (
    <div className="faculty-login-container">
      <header className="faculty-header">
        <h1>Welcome to Training Placement Tracker</h1>
      </header>
      <div className="faculty-content">
        <main className="faculty-main">
          <h2>Verification</h2>
          <ul className="approval-list">
            <li className="approval-item">
              <span>Student 1</span>
              <div className="action-buttons">
                <button className="action-button approved-button">Approved</button>
                <button className="action-button rejected-button">Rejected</button>
              </div>
            </li>
            <li className="approval-item">
              <span>Student 2</span>
              <div className="action-buttons">
                <button className="action-button approved-button">Approved</button>
                <button className="action-button rejected-button">Rejected</button>
              </div>
            </li>
            <li className="approval-item">
              <span>Student 3</span>
              <div className="action-buttons">
                <button className="action-button approved-button">Approved</button>
                <button className="action-button rejected-button">Rejected</button>
              </div>
            </li>
            {/* Add more items as needed */}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Approval;
