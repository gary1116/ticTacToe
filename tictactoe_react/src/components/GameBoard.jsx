import {React} from 'react'




function GameBoard({onSelectSquare,board}) {
  let gameBoard = board;

  return (
    <>
      <ol id="game-board">
    {gameBoard.map((row,rowIndex)=>(
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                    <li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>
                ))}
            </ol>
        </li>
    ))}
      </ol>
    </>
  )
}

export default GameBoard;
