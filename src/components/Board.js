import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Board.css'; 

function Board() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeCards();
  }, []);
  
  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      
    }
  }, [matched, cards]);

  const initializeCards = () => {
    const cardTypes = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']; 
    let initializedCards = [];
  
    cardTypes.forEach((type, index) => {
      initializedCards.push({ id: index * 2, type: type, matched: false });
      initializedCards.push({ id: index * 2 + 1, type: type, matched: false });
    });
  
   
    initializedCards = initializedCards.sort(() => Math.random() - 0.5);
  
    setCards(initializedCards);
  };

  const handleClick = (id) => {
    if (flippedCards.length === 1) {
      setFlippedCards([...flippedCards, id]);
      const firstCard = cards.find(card => card.id === flippedCards[0]);
      const secondCard = cards.find(card => card.id === id);
  
      if (firstCard && secondCard && firstCard.type === secondCard.type) {
        setMatched([...matched, firstCard.id, secondCard.id]);
        setScore(score + 1)
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000); 
      }
    } else {
      setFlippedCards([id]);
    }
  };

  return (
    <div className="game-container">
      <div className="board">
        {cards.map(card => (
          <Card 
            key={card.id} 
            id={card.id} 
            type={card.type}
            flipped={flippedCards.includes(card.id) || matched.includes(card.id)}
            onClick={handleClick} 
          />
        ))}
      </div>
      {matched.length === cards.length && cards.length > 0 && (
        <div className="win-message">
          Gratulacje! Wygrałeś!
        </div>
      )}
      <div className="score">Wynik: {score}</div>
    </div>
  );
}
export default Board;