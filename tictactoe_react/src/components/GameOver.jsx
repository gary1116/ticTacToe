import React from 'react'

function GameOver(props) {
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            {props.winner && <p>{props.winner} won!</p>}
            {!props.winner && <p>It's a draw!</p>}
            <p>
                {/* <button onClick={props.onReMatch}>Rematch!</button> */}
            </p>
        </div>
    )
}

export default GameOver
