import './battle.css';
import template from './battle.template';

import gameState from '../../gameState';
import drawSection from '../../scripts/drawSection';
import updateModal from '../../scripts/updateModal';

import choosingAttack from '../../components/choosingAttack/choosingAttack';

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

    gameState.monster.drawCharacter();
    gameState.monster.drawCharName();
    gameState.monster.drawCharHealth();
    console.log(gameState);

    document.querySelectorAll('.trigger').forEach((elem) => {
      elem.addEventListener('click', () => {
        updateModal(choosingAttack.header, choosingAttack.template);
        document.querySelector('.modal-wrapper').classList.toggle('open');
      });
    });
  }
}

export default Battle;
