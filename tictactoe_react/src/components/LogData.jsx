import React from 'react'

function LogData(props) {

   

  return (
    <ol id='log'>
        {props.gameTurn.map(turn=>(
            <li key={`${turn.square.row} ${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
        ))}
    </ol>
  )
}

export default LogData
