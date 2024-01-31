import React from 'react';
import './DotsInput.css';

const DotsInput = ({ numDots, onNumDotsChange, onGenerateClick, onResetClick }) => {
  const handleResetClick = () => {
    onResetClick();
    onNumDotsChange(0);
  };

  const showWarning = numDots > 10000;

  return (
    <div className='container'>
      <label>
        Number of Dots:
        <input
          type="number"
          value={numDots}
          onChange={(e) => onNumDotsChange(e.target.value)}
        />
      </label>
      {showWarning && <p className="warning">Warning: Numbers greater than 10000 may impact performance.</p>}
      <div className="btn">
        <button className="GenerateBtn" onClick={onGenerateClick}>Generate Dots</button>
        <button className="ResetBtn" onClick={handleResetClick}>Reset Dots</button>
      </div>
    </div>
  );
};

export default DotsInput;
