import Header from './Components/Header';
import Player from './Components/Player';
import GameBoard from './Components/GameBoard';
import Log from './Components/Log';
import { WINNING_COMBINATIONS } from './Components/WINNING_COMBINATIONS';
import GameOver from './Components/GameOver';
import { useState, useEffect } from 'react';

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameBoard, setGameBoard] = useState(initGameBoard);
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (winner) {
      console.log(`You won, ${winner}!`);
    }
  }, [winner]);

  function handleSquareClick(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] || winner) return; // If square is already filled or game is won, do nothing

    const updatedBoard = [...gameBoard];
    updatedBoard[rowIndex][colIndex] = activePlayer;
    setGameBoard(updatedBoard);

    const newTurn = {
      square: { row: rowIndex, col: colIndex },
      player: activePlayer,
    };
    setGameTurns([newTurn, ...gameTurns]);

    checkWinner(updatedBoard);

    // Switch player
    setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
  }

  function checkWinner(board) {
    console.log('Checking winner...');
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      console.log('Checking combination:', a, b, c);
      const firstSquare = board[a.row][a.column];
      const secondSquare = board[b.row][b.column];
      const thirdSquare = board[c.row][c.column];

      if (
        firstSquare &&
        firstSquare === secondSquare &&
        firstSquare === thirdSquare
      ) {
        console.log(`Winner found: ${firstSquare}`);
        setWinner(firstSquare);
        return;
      }
    }
  }

  return (
    <>
      <Header />
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player name='Player1' symbol='X' isActive={activePlayer === 'X'} />
            <Player name='Player2' symbol='O' isActive={activePlayer === 'O'} />
          </ol>
          {winner && <GameOver winner={winner} />}
          <GameBoard onSquareClick={handleSquareClick} board={gameBoard} />
        </div>
        <Log board={gameBoard} />
      </main>
    </>
  );
}

export default App;
