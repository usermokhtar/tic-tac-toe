import React from 'react';

const Log = ({ board }) => {
  return (
    <ol id='log'>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (cell !== null) {
            return (
              <li key={`${rowIndex}-${colIndex}`}>
                {cell} selected ({rowIndex}, {colIndex})
              </li>
            );
          }
          return null; // return null for cells that haven't been played yet
        })
      )}
    </ol>
  );
};

export default Log;
