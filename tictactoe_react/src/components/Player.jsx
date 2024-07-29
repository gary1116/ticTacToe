import {React,useState} from 'react'

function Player(props) {

    const [editName, setEditName] =useState(false);
    const [playerName, setPlayerName] = useState(props.name);


    function handleEditClick(){
        setEditName((editing)=>!editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }


    let editablePlayerName = <span className='player-name'>{playerName}</span>;

    if(editName===true){
        editablePlayerName=<input type='text' required value={playerName} onChange={handleChange}/>;
    }



  return (
    <>
      <li>
              <span className="player">
                {editablePlayerName}
                <span className='player-symbol'>{props.symbol}</span>
              </span>
              <button onClick={()=>handleEditClick()}>{editName===false ? 'Edit':'Save'}</button>
      </li>
    </>
  )
}

export default Player
