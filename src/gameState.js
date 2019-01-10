import location1 from '../dist/images/location1.png';
import location2 from '../dist/images/location2.png';
import location3 from '../dist/images/location3.png';

import MonsterCharacter from './components/MonsterCharacter';

class Game {
  constructor() {
    this.player = null;
    this.monster = null;
    this.location = '';
  }

  setPlayer(player) {
    this.player = player;
  }

  setLocation(name) {
    switch (name) {
      case 'location1':
        this.location = location1;
        break;
      case 'location2':
        this.location = location2;
        break;
      case 'location3':
        this.location = location3;
        break;
      default:
        console.log('location not defined');
        break;
    }
  }
}

const gameState = new Game();
// Object.freeze(gameState);

const monster = new MonsterCharacter();
gameState.monster = monster;

export default gameState;
