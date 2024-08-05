import Header from './Components/Header';
import Player from './Components/Player';
import GameBoard from './Components/GameBoard';
import Log from './Components/Log';
import { useState } from 'react';
let activePlayer = 'X';
function App() {
  // const [currentPlayer, setCurrentPlayer] = useState('X');
  const [GameTurns, setGameTurns] = useState([]);
  function handelsquer(rowIndex, colIndex) {
    // setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevGameTurns) => {
      activePlayer = 'X';
      if (
        prevGameTurns.length > 0 &&
        prevGameTurns[0].player === activePlayer
      ) {
        activePlayer = 'O';
      }
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  }
  return (
    <>
      <Header />
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player name='Player1' symbol='X' isActive={activePlayer === 'X'} />
            <Player name='Player2' symbol='O' isActive={activePlayer === '0'} />
          </ol>
          <GameBoard onHandelSquer={handelsquer} turns={GameTurns} />
        </div>
        <Log turns={GameTurns} />
      </main>
    </>
  );
}

export default App;
