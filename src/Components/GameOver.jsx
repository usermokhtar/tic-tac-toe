import React from 'react';

const GameOver = ({ winner }) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      <p>{winner} won !</p>
      <p>
        <button>Remacht!</button>
      </p>
    </div>
  );
};

export default GameOver;
