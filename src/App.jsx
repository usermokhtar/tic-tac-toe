import Header from './Components/Header';
import Player from './Components/Player';
import GameBoard from './Components/GameBoard';
import { useState } from 'react';
function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  function handelsquer() {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    // add logic for checking win, draw and switching player
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
          <GameBoard
            onHandelSquer={handelsquer}
            activePlayerSymbol={currentPlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
