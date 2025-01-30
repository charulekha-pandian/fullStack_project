// ProfileSection.jsx
import React from 'react';
import profileImage from "../images/training.png";
import './dashboard.css';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h3>Student Name</h3>
      <p>Student</p>
      <div className="language-skills">
        <div>
          <span>English</span>
          <span>Intermediate</span>
        </div>
        <div>
          <span>Japanese</span>
          <span>Beginner</span>
        </div>
      </div>
      <div className="form-status">
        <h4>Updation Form Status</h4>
        <ul>
          <li>Verified - Wednesday</li>
          <li>On-Process - Thursday</li>
          <li>Submitted - Friday</li>
        </ul>
      </div>
      <button className="logout-button">Log out</button>
    </div>
  );
};

export default ProfileSection;
