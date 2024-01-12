let turnCount = Math.ceil(Math.random() * 10)
let playerTurn = ""
function turnCheck() {
  if (turnCount % 2 == 1) {
      turnCount++
   return playerTurn = "playerOne"
  } else {
      turnCount++
   return playerTurn = "playerTwo"
  }
  
}

turnCheck()
console.log(turnCount)
console.log(playerTurn)
