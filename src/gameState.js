class Game {
  constructor() {
    this.playerName = '';
    this.locationNumber = 0;
  }

  setLocationNumber(number) {
    this.locationNumber = number;
  }
}

const gameState = new Game();
Object.freeze(gameState);

export default gameState;
