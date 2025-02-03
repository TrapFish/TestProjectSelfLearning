import React, { useState } from 'react';
import './FlipCard.css'; // Import your CSS file

function FlipCard({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>Front Side </h2>
        </div>
        <div className="flip-card-back">
          <h2>Back Side</h2>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;