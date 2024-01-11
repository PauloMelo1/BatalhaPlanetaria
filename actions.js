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
        input.cordX = prompt('Escolha a coordenada X entre 1 e 100')
        if (input.cordX >= 1 && input.cordX <= 101) {
            input.cordY = prompt('Escolha a coordenada Y entre 1 e 100')
            if (input.cordY >= 1 && input.cordY <= 100) {
                input.name = "base" + (militaryBasesP1.length + 1)
                input.health = 10
                input.attack = 1
                input.cd = 1
                militaryBasesP1.push(input);
            }
        }
            
        }
    //criar e chamar funçao para coletar as coordenadas X e Y militar
  }
  if (Number(chooseAction) === 2) {
    //criar e chamar funçao para coletar as coordenadas X e Y civil
  }
}

function baseP1size (size) {
  prompt ('Escolha o tamanho da sua base entre 1, 3 e 5')
}



showAction()
console.log(militaryBasesP1)
console.log(civilBasesP1)
