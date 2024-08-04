import Header from './Components/Header';
function App() {
  return (
    <>
      <Header />
      <main>
        <div id='game-container'>
          <ol id='players'>
            <li>
              <span className='player-name'>Player1</span>
              <span className='player-symbol'>X</span>
            </li>
            <li>
              <span className='player-name'>Player2</span>
              <span className='player-symbol'>0</span>
            </li>
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
