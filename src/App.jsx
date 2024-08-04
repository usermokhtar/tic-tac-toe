import Header from './Components/Header';
import Player from './Components/Player';
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
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
