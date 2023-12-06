class Bases {
    construtor (cordX, cordY) {
        this.cordX = cordX;
        this.cordY = cordY;
    }
}

class Players {
    constructor(name, basesCount) {
      this.name = name;
    this.bases = new Bases(cordX, cordY);
      this.basesCount = basesCount;
    }
}

const playerOne = new Players("Paulo", 5, 4, 5);
const playerTwo = new Players("Eduardo", 5);
