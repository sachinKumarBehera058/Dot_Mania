import React from 'react';
import "./DotsDisplay.css";

const DotsDisplay = ({ dots }) => {
  return (
    <div className="square">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            top: `${dot.y * 100}%`,
            left: `${dot.x * 100}%`,
            backgroundColor: dot.color,
            animationDelay: `${index * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default DotsDisplay;
