importar players
importar conatgem de bases
importar açoes

let inGame = true;

while (inGame === true) {
    if (turn.playerTurn = playerOne) {
        P1actions.showAction()
    }
    if (turn.playerTurn = playerTwo) {
        P2actions.showAction()
    }
  if (baseCreationP2.militaryBasesP2 < 1 || baseCreationP1.militaryBasesP1 < 1) {
    if (baseCreationP2.militaryBasesP2 < 1) {
        console.log('Fim de jogo, o jogador 1 venceu')
    }
    if (baseCreationP1.militaryBasesP1 < 1) {
        console.log('Fim de jogo, o jogador 2 venceu')
    }
    inGame = false
  } 
}
    
