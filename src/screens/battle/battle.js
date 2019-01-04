import './battle.css';
import template from './battle.template';

import gameState from '../../gameState';

import drawSection from '../../scripts/drawSection';

class Battle {
  static draw() {
    drawSection(template);
    gameState.player.setCoords();
    gameState.player.drawCharacter();
  }
}

export default Battle;
