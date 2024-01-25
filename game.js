// importar players
// importar conatgem de bases
// importar açoes
militaryBasesP1 = [1]
militaryBasesP2 = [0]
function showAction1 () {
    console.log('p1')
}
function showAction2 () {
    console.log('p2')
}

let inGame = true;
let turnCount = 1;
let playerTurn = "";
while (inGame === true) {
    if (turnCount % 2 == 1 && militaryBasesP1 > 0) {
        showAction1()
        turnCount++
    }
    if (turnCount % 2 == 0 && militaryBasesP2 > 0) {
        showAction2()
        turnCount++
    }
    if (militaryBasesP2 < 1 || militaryBasesP1 < 1) {
    if (militaryBasesP2 < 1) {
        console.log('Fim de jogo, o jogador 1 venceu')
    }
    if (militaryBasesP1 < 1) {
        console.log('Fim de jogo, o jogador 2 venceu')
    }
    inGame = false
  } 
 
}
    
