import React from 'react';

const GameBoard = () => {
  const initGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return (
    <ol id='game-board'>
      {initGameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
