// create a matrix to show the winning condition
let monkeyPlayer = "🐵";
let frogPlayer = "🐸";
let monkeyTurn = true;

let resetButton = document.getElementsByClassName("resetbutton");

let grid = document.querySelector(".grid-container");
//console.log(grid);
// document.querySelectorAll(".grid-item").forEach(element => { 
//     element.addEventListener("click", clickGrid, { once: true })    
// });

// let winningOutput = `Congratulations, ${currentP} wins!`;
// let tieOutput = `Congratulations, it's a tie!`;
// let playerTurn = `It's ${currentPlayer}'s turn to move!`;


//document.querySelector(".status") = playerTurn;

let playingGrid = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let winningMatrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7]
]








// create click to show the result 
function clickGrid(event){
    let cell = event.target
    //console.log(event.target);
    console.log(event.target.dataset.of);
    const currentTurn = (monkeyTurn) =>{
        if(monkeyTurn){
            return "x";
        }else {
            return "o";
        }  
    }

    placeEmo(cell,currentTurn)
changeTurn();


}
    

grid.addEventListener("click",clickGrid);


// update grid once click 
function placeEmo(cell,currentTurn){
    console.log(cell);
    
    console.log(currentTurn);
    console.log(playingGrid.push(currentTurn)) ;
    
}

// grid.addEventListener("click", (event) => {
//     grid.innerHTML = currentTurn;
//     grid.classList.add(`${currentPlayer}`)
//     console.log(playingGrid);
// })



// change turns to make sure the next click is not the same emo
function changeTurn(){
    monkeyTurn = !monkeyTurn;
}





// create the winning condition
for(let i=0; i<= winningMatrix.length; i++){
    let winningcondition = winningMatrix[i];
    if (winningcondition = winningMatrix.some){
 //       document.querySelector(".winning-item").innerHTML = `${currentTurn} wins`
    
    }

}





// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

