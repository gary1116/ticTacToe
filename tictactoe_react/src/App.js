import './App.css';
import Player from '../src/components/Player';
import GameBoard from '../src/components/GameBoard';

function App() {
  return (
    <div className="App">
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          <GameBoard />
        </div>
        LOG
      </main>
    </div>
  );
}

export default App;
