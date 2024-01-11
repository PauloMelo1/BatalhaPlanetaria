// class MilitaryBasePlayerOne {
//   constructor(name, size, positionX, positionY, health, attack, cd) {
    // this.name = name;
    // this.size = size;
    // this.positionX = positionX;
    // this.positionY = positionY;
    // this.health = size * 10;
    // this.attack = size;
    // this.cd = size;
//   }

// }

// const militaryBasePlayerOne = new MilitaryBasePlayerOne("base1", 3, 3, 5)

// console.log(militaryBasePlayerOne)

const militaryBasesP1 = []
const civilBasesP1 = []

function showAction() {
  const chooseBaseCreation = prompt('Escolha sua ação [1]: Criar base militar, [2]: Criar assentamento civil ')
  if (Number(chooseBaseCreation) === 1) {
    const chooseMiliSize = prompt('Escolhe o tamanho da sua base entre 1, 3 e 5')
    if (Number(chooseMiliSize) === 1) {
    const input = {}
        let cordX1 = Number(prompt('Escolha a coordenada X entre 1 e 100'))
        if (cordX1 >= 1 && cordX1 <= 100) {
            let cordY1 = Number(prompt('Escolha a coordenada Y entre 1 e 100'))
            if (cordY1 >= 1 && cordY1 <= 100) {
                input.cordX = [cordX1]
                input.cordY = [cordY1]
                input.name = "base" + (militaryBasesP1.length + 1)
                input.health = 10
                input.attack = 1
                input.cd = 1
                militaryBasesP1.push(input);
            }
        }
            
        }
         if (Number(chooseMiliSize) === 3) {
    const input = {}
        let cordX32 = Number(prompt('Escolha a coordenada X entre 2 e 99'))
        if (cordX32 >= 2 && cordX32 <= 99) {
            let cordY32 = Number(prompt('Escolha a coordenada Y entre 2 e 99'))
            if (cordY32 >= 2 && cordY32 <= 99) {
                let cordX31 = cordX32 -1
                let cordX33 = cordX32 +1
                let cordY31 = cordY32 -1
                let cordY33 = cordY32 +1
                input.cordX = [cordX31, cordX32, cordX33]
                input.cordY = [cordY31, cordY32, cordY33]
                input.name = "base" + (militaryBasesP1.length + 1)
                input.health = 30
                input.attack = 3
                input.cd = 3
                
                militaryBasesP1.push(input);
            }
        }
            
        }
        if (Number(chooseMiliSize) === 5) {
    const input = {}
        let cordX53 = Number(prompt('Escolha a coordenada X entre 3 e 98'))
        if (cordX53 >= 3 && cordX53 <= 98) {
            let cordY53 = Number(prompt('Escolha a coordenada Y entre 3 e 98'))
            if (cordY53 >= 2 && cordY53 <= 99) {
                let cordX52 = cordX53 -1
                let cordX51 = cordX53 -2
                let cordX54 = cordX53 +1
                let cordX55 = cordX53 +2
                let cordY52 = cordY53 -1
                let cordY51 = cordY53 -2
                let cordY54 = cordY53 +1
                let cordY55 = cordY53 +2
                input.cordX = [cordX51, cordX52, cordX53, cordX54, cordX55, ]
                input.cordY = [cordY51, cordY52, cordY53, cordY54, cordY55, ]
                input.name = "base" + (militaryBasesP1.length + 1)
                input.health = 50
                input.attack = 5
                input.cd = 5
                
                militaryBasesP1.push(input);
            }
        }
            
        }
  }
  if (Number(chooseBaseCreation) === 2) {
      let chooseCivilSettlementPosX = prompt('Escolha entre 1 e 100 a coordenada X onde deseja construir seu ASSENTAMENTO CIVIL')
      if (chooseCivilSettlementPosX >= 1 && chooseCivilSettlementPosX <= 100) {}
  }

}

showAction()
showAction()
showAction()
console.log(militaryBasesP1)
