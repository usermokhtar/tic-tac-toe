import Header from './Components/Header';
import Player from './Components/Player';
import GameBoard from './Components/GameBoard';
import { useState } from 'react';
function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [GameTurns, setGameTurns] = useState([]);
  function handelsquer(rowIndex, colIndex) {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevGameTurns) => {
      let activePlayer = 'X';
      if (
        prevGameTurns.length > 0 &&
        prevGameTurns[0].player === activePlayer
      ) {
        activePlayer = 'O';
      }
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
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
            <Player
              name='Player1'
              symbol='X'
              isActive={currentPlayer === 'X'}
            />
            <Player
              name='Player2'
              symbol='O'
              isActive={currentPlayer === '0'}
            />
          </ol>
          <GameBoard onHandelSquer={handelsquer} turns={GameTurns} />
        </div>
      </main>
    </>
  );
}

export default App;
