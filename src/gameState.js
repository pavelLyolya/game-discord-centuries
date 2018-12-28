class Game {
  constructor() {
    this.playerName = '';
    this.locationName = '';
  }

  setLocationName(name) {
    this.locationName = `${name}.png`;
  }
}

const gameState = new Game();
// Object.freeze(gameState);

export default gameState;
