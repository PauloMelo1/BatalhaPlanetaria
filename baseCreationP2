

const militaryBasesP2 = []
const civilBasesP2 = []

function showAction() {
  const chooseBaseCreation = prompt('Escolha sua ação [1]: Criar base militar, [2]: Criar assentamento civil ')
  if (Number(chooseBaseCreation) === 1) {
      function chooseMilitarySize () {
    const chooseMiliSize = prompt('Escolhe o tamanho da sua base entre 1, 3 e 5')
    if (Number(chooseMiliSize) === 1) {
        function chooseMiliPosition1x () {
    const input = {}
        let cordX1 = Number(prompt('Escolha a coordenada X entre 1 e 100\n'))
        if (cordX1 >= 1 && cordX1 <= 100) {
            function chooseMiliPosition1y () {
            let cordY1 = Number(prompt('Escolha a coordenada Y entre 1 e 100 \n'))
            if (cordY1 >= 1 && cordY1 <= 100) {
                input.cordX = [cordX1]
                input.cordY = [cordY1]
                input.name = "base" + (militaryBasesP2.length + 1)
                input.health = 10
                input.attack = 1
                input.cd = 1
                militaryBasesP2.push(input);
            }
                if (cordY1 < 1 || cordY1 > 100) {
            console.log('Preencha corretamente')
        chooseMiliPosition1y()
        }
        }
        chooseMiliPosition1y()
        }
        
        if (cordX1 < 1 || cordX1 > 100) {
            console.log('Preencha X corretamente')
            chooseMiliPosition1x()
            
        }
        }
        
        chooseMiliPosition1x()
        }
    if (Number(chooseMiliSize) === 3) {
        function chooseMiliPosition3x () {
    const input = {}
        let cordX32 = Number(prompt('Escolha a coordenada X entre 2 e 99\n'))
        if (cordX32 >= 2 && cordX32 <= 99) {
            function chooseMiliPosition3y () {
            let cordY32 = Number(prompt('Escolha a coordenada Y entre 2 e 99 \n'))
            if (cordY32 >= 2 && cordY32 <= 99) {
                let cordX31 = cordX32 -1
                let cordX33 = cordX32 +1
                let cordY31 = cordY32 -1
                let cordY33 = cordY32 +1
                input.cordX = [cordX31, cordX32, cordX33]
                input.cordY = [cordY31, cordY32, cordY33]
                input.name = "base" + (militaryBasesP2.length + 1)
                input.health = 30
                input.attack = 3
                input.cd = 3

                militaryBasesP2.push(input);
            }
                if (cordY32 < 2 || cordY32 > 99) {
            console.log('Preencha corretamente')
        chooseMiliPosition3y()
        }
        }
        chooseMiliPosition3y()
        }
        
        if (cordX32 < 2 || cordX32 > 99) {
            console.log('Preencha X corretamente')
            chooseMiliPosition3x()
            
        }
        }
        chooseMiliPosition3x()
        }
    if (Number(chooseMiliSize) === 5) {
        function chooseMiliPosition5x () {
    const input = {}
        let cordX53 = Number(prompt('Escolha a coordenada X entre 3 e 98\n'))
        if (cordX53 >= 3 && cordX53 <= 98) {
            function chooseMiliPosition5y () {
            let cordY53 = Number(prompt('Escolha a coordenada Y entre 3 e 98 \n'))
            if (cordY53 >= 3 && cordY53 <= 98) {
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
                input.name = "base" + (militaryBasesP2.length + 1)
                input.health = 50
                input.attack = 5
                input.cd = 5
                
                militaryBasesP2.push(input);
            }
                if (cordY53 < 3 || cordY53 > 98) {
            console.log('Preencha corretamente')
        chooseMiliPosition5y()
        }
        }
        chooseMiliPosition5y()
        }
        
        if (cordX53 < 3 || cordX53 > 98) {
            console.log('Preencha X corretamente')
            chooseMiliPosition5x()
            
        }
        }
        chooseMiliPosition5x()
        }
    if (Number(chooseMiliSize) !== 5 && Number(chooseMiliSize) !==1 && Number(chooseMiliSize) !==3) {
        ('Escolhe o corretamente o tamanho da sua base entre 1, 3 e 5')
        chooseMilitarySize()
    }
  }
  chooseMilitarySize ()
  }
  if (Number(chooseBaseCreation) === 2) {
      function chooseCivilPositionX () {
          const input = {}
      let civilPosX = prompt('Escolha entre 1 e 100 a coordenada X onde deseja construir seu ASSENTAMENTO CIVIL')
      if (civilPosX >= 1 && civilPosX <= 100) {
          function chooseCivilPositionY () {
          let civilPosY = prompt('Escolha entre 1 e 100 coordenada Y onde deseja construir seu ASSENTAMENTO CIVIL')
          if (civilPosY >= 1 && civilPosY <= 100) {
                input.civilPosX = [civilPosX]
                input.civilPosY = [civilPosY]
                input.name = "assentamento" + (civilBasesP2.length + 1)
                input.health = 1
                civilBasesP2.push(input);
          } else {
              console.log("Escolha uma a posição correta POS Y!")
          chooseCivilPositionY()
          }
              
          }
          chooseCivilPositionY()
      } else {
          console.log("Escolha uma a posição correta POS X!")   
          chooseCivilPositionX()
      }
      }
      chooseCivilPositionX()
      }
  if (Number(chooseBaseCreation) !== 2 && Number(chooseBaseCreation) !== 1 ) {
    console.log("Escolhe a opção que deseja construir corretamente!")
    showAction()
}
}
showAction()
showAction()
showAction()
console.log(militaryBasesP2)
console.log(civilBasesP2)
