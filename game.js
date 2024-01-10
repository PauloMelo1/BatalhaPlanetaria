importar players
importar conatgem de bases
importar açoes

let inGame = true;

while (inGame === true) {
  actions.showActions(playerOne, playerTwo);
  if (militaryBasesPlayerTwoCount < 1) {
    console.log(`Fim de jogo, o jogador 1 ${playerOne.name} venceu`)
    inGame = false
  }
  if (militaryBasesPlayerOneCount < 1) {
    console.log(`Fim de jogo, o jogador 2 ${playerTwo.name} venceu`)
    inGame = false
  }
}
    
