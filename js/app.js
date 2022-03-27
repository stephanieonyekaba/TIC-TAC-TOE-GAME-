const boardItems = document.querySelectorAll(".boardItem");
const resetButton = document.querySelector("#resetButton")
 player1 = "X"
player2 = "O"




let player1Turn = true 
let player2Turn = false 

const winningCombos = 
               { combo1: ("0,1,2"),
                combo2: [ '3', '4', '5'],
                combo3: [ '6', '7', '8'],
                combo4: [ '0', '3', '6'],
                combo5: [ '1', '4', '7'],
                combo6: [ '2', '5', '8'],
                combo8: [ '0', '4', '8'],
                combo9: [ '2', '4', '6'] }









let player1Array = [];

let player2Array = [];






const boardItemClicked = (boardItem) => {


    if (player1Turn == true) {
    let id = boardItem.target.id; 
    boardItem.target.innerText = player1;
    id.length = 3;
    player1Array.push(id);
    player1Wins = player1Array.toString();


    if(player1Wins == winningCombos.combo1) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }

    if(player1Wins == winningCombos.combo2 && player2Wins) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    if(player1Wins == winningCombos.combo3 ) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    if(player1Wins == winningCombos.combo4 ) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    if(player1Wins == winningCombos.combo5 ) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    if(player1Wins == winningCombos.combo6 ) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    if(player1Wins == winningCombos.combo7 ) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    if(player1Wins == winningCombos.combo8 ) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    if(player1Wins == winningCombos.combo9 ) {
        console.log("PLAYER1 WINS")
        player1Array = []
        return player1Array   
    }
    


    
    player1Turn = false 
    player2Turn = true


     } 
     else if(player2Turn == true)
     {
    let id = boardItem.target.id; 
    boardItem.target.innerText = player2;
    player2Array.push(id);
    let player2Wins = player2Array.toString();
    player2Turn = false 
    player1Turn = true


    if(player2Wins == winningCombos.combo1) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo2) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo3) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo4) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo5) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo6) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo7) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo8) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }
    if(player2Wins == winningCombos.combo9) {
        console.log("PLAYER2 WINS")
        player2Array = []
        return player2Array   
    }

    else{
        console.log("no")
        
    }




       
    
    
    }
   

};








boardItems.forEach((boardItem) => boardItem.addEventListener('click', boardItemClicked))



const resetButtonClick = () => {
    window.location.reload();

};

resetButton.addEventListener('click', resetButtonClick)

