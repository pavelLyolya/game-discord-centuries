class Game {
  constructor() {
    this.player = null;
    this.monster = null;
    this.locationName = '';
  }

  setPlayer(player) {
    this.player = player;
  }

  setLocationName(name) {
    this.locationName = `${name}.png`;
  }
}

const gameState = new Game();
// Object.freeze(gameState);

export default gameState;
