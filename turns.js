const dice = require('./diceRoller');
let turnCount = dice
function turnCheck() {
  if (turnCounter % 2 === 1) {
    playerTurn = "playerOne"
  } else {
    playerTurn = "playerTwo"
  }
  turnCounter++
  console.log(playerTurn)
  return playerTurn
}

/*
metodo #2
playturn = (turnCount % 2) === 1

metodo #3
let turnCount = 4

function turnCheck (){
let playerTyrn = "play1"
if (turnCount % 2 !== 1) {
    playerTurn = "play2"
}
turnCount++
console.log(playerTurn)}
turnCheck()


metodo #4
const playTurn = turncoun % 2 === 1 ? play1 : play2


*/
