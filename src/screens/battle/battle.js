import './battle.css';
import template from './battle.template';

import gameState from '../../gameState';
import MonsterCharacter from '../../components/MonsterCharacter';
import drawSection from '../../scripts/drawSection';

class Battle {
  static draw() {
    drawSection(template);

    const background = document.querySelector('#content > section.battle');
    background.style.backgroundImage = `url(${gameState.location})`;

    console.log(`url(${gameState.location})`);

    gameState.player.setCoords();
    gameState.player.drawCharacter();
    gameState.player.drawCharName();
    gameState.player.drawCharHealth();
    console.log(gameState.player);

    const monster = new MonsterCharacter();
    monster.drawCharacter();
    monster.drawCharName();
    monster.drawCharHealth();
    gameState.monster = monster;
    console.log(monster);
    console.log(gameState);
  }
}

export default Battle;
