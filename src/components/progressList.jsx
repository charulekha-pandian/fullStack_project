// ProgressList.jsx
import React from 'react';

const ProgressList = () => {
  const progressData = [
    { topic: 'HTML', rating: 8 },
    { topic: 'CSS', rating: 4 },
    { topic: 'Group Discussion', rating: 9 },
    { topic: 'Python', rating: 5 },
    { topic: 'Bootstrap', rating: 8.5 },
    { topic: 'React', rating: 5 },
  ];

  return (
    <div className="progress-list">
      <h3>Latest Progress</h3>
      <ul>
        {progressData.map((item, index) => (
          <li key={index}>
            <span>{item.topic}</span>
            <span>{item.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressList;
