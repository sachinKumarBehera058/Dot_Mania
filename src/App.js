import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import DotsInput from './Components/DotsInput';
import DotsDisplay from './Components/DotsDisplay';
import Navbar from './Components/Navbar';

const App = () => {
  const [numDots, setNumDots] = useState(0);
  const [dots, setDots] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const generateRandomDots = useCallback(() => {
    const newDots = [];
    for (let i = 0; i < numDots; i++) {
      const x = Math.random();
      const y = Math.random();
      const color = isInsideCircle(x, y) ? 'red' : 'blue';
      newDots.push({ x, y, color });
    }
    setDots(newDots);
  }, [numDots]);

  const resetDots = () => {
    setDots([]);
  };

  const isInsideCircle = (x, y) => {
    const distance = Math.sqrt((x - 0.5) ** 2 + (y - 0.5) ** 2);
    return distance <= 0.5;
  };

  useEffect(() => {
    if (buttonClicked) {
      generateRandomDots();
      setButtonClicked(false);
    }
  }, [numDots, buttonClicked, generateRandomDots]);

  return (
    <div className="App">
      <Navbar />
      <DotsInput
        numDots={numDots}
        onNumDotsChange={setNumDots}
        onGenerateClick={() => setButtonClicked(true)}
        onResetClick={resetDots}
      />
      <DotsDisplay dots={dots} />
    </div>
  );
};

export default App;
