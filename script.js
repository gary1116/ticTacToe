
const container = document.querySelector('.container');
const cells = document.querySelectorAll('.cell');
document.addEventListener('DOMContentLoaded',()=>{

    let currentPlayer  = 'X';
console.log(cells);
    cells.forEach(cell=>{
        cell.addEventListener('mouseover',()=>{
            cell.style.height='200px';
            cell.style.width='200px';
            cell.style.border='2px solid black';
            // cell.style.backgroundColor = 'white';
            
        })

        cell.addEventListener('mouseout',()=>{
            cell.style.height='150px';
            cell.style.width='150px';
            cell.style.backgroundColor = 'transparent';
            cell.style.border='0px solid black';

            

        })

        cell.addEventListener('click',()=>{
            if(cell.textContent===''){
                cell.textContent=currentPlayer; 
                currentPlayer =currentPlayer=== 'X'?'O':'X';        
             }

// First Occurrence: currentPlayer === 'X'
// This part checks if the current value of currentPlayer is 'X'.
// Second Occurrence: currentPlayer = ...
// This part assigns a new value to currentPlayer based on the result of the condition.
        })
    })
})

if(cells[0].textContent && cells[1].textContent&&cells[2].textContent ==='X'){

    let infoText = document.createElement('h1')
    infoText.innerHTML = '<strong id="infoText">Player 1 has won the game!!!</strong>' 


}







