import React from 'react';

const GameOver = ({ winner, onRematch }) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won !</p>}
      {!winner && <p>it's a draw</p>}
      <p>
        <button onClick={onRematch}>Remacht!</button>
      </p>
    </div>
  );
};

export default GameOver;
