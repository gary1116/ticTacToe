import { useState } from 'react';
import './App.css';
import Player from '../src/components/Player';
import GameBoard from '../src/components/GameBoard';
import LogData from '../src/components/LogData';
import GameOver from '../src/components/GameOver';
import { WINNING_COMBINATIONS } from './components/winning-combinations';


const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for(const turn of gameTurns){
    const {square,player}=turn;
    const{row,col}=square;
    
    gameBoard[row][col]=player;
  }

  let winner;

  for(const combinations of WINNING_COMBINATIONS){
    const firstSquareSymbol =gameBoard[combinations[0].row][combinations[0].column]
    const secondSquareSymbol=gameBoard[combinations[1].row][combinations[1].column]
    const thirdSquareSymbol=gameBoard[combinations[2].row][combinations[2].column]

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner=firstSquareSymbol;
    }

  }

  const hasDraw = gameTurns.length===9 && !winner;

  function handleSecelectSquare(rowIndex, colIndex) {

    setGameTurns((prevTurn) => {
      const currentPlayer = derivedActivePlayer(gameTurns);
      const updatedTurns = [{
        square: { row: rowIndex, col: colIndex }, player: currentPlayer
      }, ...prevTurn];

      return updatedTurns;
    });
  }

  function handleReMatch(){
    setGameTurns([]);
  }

  return (
    <div className="App">
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player' >
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>
          {(winner || hasDraw) && <GameOver onReMatch={handleReMatch} winner={winner}/>}
          <GameBoard onSelectSquare={handleSecelectSquare} activePlayerSymbol={activePlayer} 
          board={gameBoard}/>
        </div>
        <LogData gameTurn={gameTurns} />
      </main>
    </div>
  );
}

export default App;
