import React from 'react';
import './Card.css';

function Card({ id, type, flipped, onClick }) {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => onClick(id)}>
      <div className="front">
        {}
      </div>
      <div className="back" style={{ backgroundColor: type }}>
        {}
      </div>
    </div>
  );
}

export default Card;
