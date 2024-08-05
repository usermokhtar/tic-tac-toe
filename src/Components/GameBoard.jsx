import React, { useState } from 'react';

const GameBoard = ({ onHandelSquer, activePlayerSymbol }) => {
  const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // Initialize the state for the game board using the `useState` hook.
  // `gameBoard` holds the current state of the board, and `setGameBoard` is used to update it.
  // `initGameBoard` provides the initial structure of the game board (e.g., a 2D array representing the grid).
  const [gameBoard, setGameBoard] = useState(initGameBoard);

  // Function that handles when a player selects a square on the game board.
  // `rowIndex` and `colIndex` represent the row and column of the selected square.
  const handleSelectSquare = (rowIndex, colIndex) => {
    // Update the state of the `gameBoard`.
    // Use the previous state (`prevGameBoard`) to create a new game board state.
    setGameBoard((prevGameBoard) => {
      // Map over each row of the previous game board to create a new board state.
      const newGameBoard = prevGameBoard.map((row, rIdx) =>
        // Map over each cell in the current row.
        row.map((cell, cIdx) =>
          // Check if the current cell is the one that was selected by the player.
          rIdx === rowIndex && cIdx === colIndex
            ? // If the selected cell is empty (`null`), place the active player's symbol (`activePlayerSymbol`) in that cell.
              // Note: The code places `activePlayerSymbol` regardless of the cell's previous value.
              cell === null
              ? activePlayerSymbol
              : activePlayerSymbol
            : // If this cell was not selected, return its current value unchanged.
              cell
        )
      );

      // Return the new game board state to update the `gameBoard` state.
      return newGameBoard;
    });

    // Call `onHandelSquer()` after updating the board, likely to perform additional actions such as
    // updating the game status or switching the player's turn.
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
