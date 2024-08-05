import React, { useState } from 'react';

const GameBoard = ({ onHandelSquer, activePlayerSymbol }) => {
  const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = prevGameBoard.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? cell === null
              ? activePlayerSymbol
              : activePlayerSymbol
            : cell
        )
      );
      return newGameBoard;
    });
    onHandelSquer();
  };
  const onSelect = () => {};
  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
