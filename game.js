importar players
importar conatgem de bases
importar açoes

let inGame = true;

while (inGame === true) {
  if (baseCreationP2.militaryBasesP2 < 1) {
    console.log(`Fim de jogo, o jogador 1 venceu`)
    inGame = false
  }
  if (militaryBasesP1 < 1) {
    console.log(`Fim de jogo, o jogador 2  venceu`)
    inGame = false
  }
}
    
