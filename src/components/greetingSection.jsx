// GreetingSection.jsx
import React from 'react';
import greetingImage from '../images/Screenshot 2024-08-26 183550.png';


const GreetingSection = () => {
  return (
    <div className="greeting-section">
      <div className="greeting-text">
        <h2>Good Morning</h2>
        <p>Keep it up and improve your results!</p>
      </div>
      <img src={greetingImage} alt="Greeting" style={{width: 250}}/>
    </div>
  );
};

export default GreetingSection;
