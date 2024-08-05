import React, { useState } from 'react';

const GameBoard = ({ onHandelSquer, turns }) => {
  const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // Initialize the state for the game board using the `useState` hook.
  const [gameBoard, setGameBoard] = useState(initGameBoard);

  // Update the game board based on the turns passed as props.
  for (let turn of turns) {
    // { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onHandelSquer(rowIndex, colIndex)}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
