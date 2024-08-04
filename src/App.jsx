import Header from './Components/Header';
import Player from './Components/Player';
import GameBoard from './Components/GameBoard';
function App() {
  return (
    <>
      <Header />
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player name='Player1' symbol='x' />
            <Player name='Player2' symbol='O' />
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
