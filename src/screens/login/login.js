import './login.css';
import template from './login.template';

import gameState from '../../gameState';
import PlayerCharacter from '../../components/PlayerCharacter';

import drawSection from '../../scripts/drawSection';

class Login {
  static makeChoosed(char) {
    if (document.querySelector('.choosed-character')) {
      document.querySelector('.choosed-character').classList.remove('choosed-character');
    }
    char.classList.add('choosed-character');
  }

  static addChooseCharacterListeners(player) {
    return new Promise((resolve) => {
      const chars = document.querySelectorAll('.js-character-item');
      chars.forEach((char) => {
        char.addEventListener('click', () => {
          const fromWhere = char.firstElementChild.getAttribute('alt');
          player.drawCharacter(
            ['left_hand', 'foot', 'torso', 'right_hand', 'head'],
            fromWhere,
          );
          Login.makeChoosed(char);
        });
      });
      document.querySelector('.login span').addEventListener('click', () => {
        if (document.querySelector('.choosed-character')
            && document.querySelector('input').value.length > 0) {
          player.setName(document.querySelector('input').value);
          gameState.setPlayer(player);
          console.log(player); // for debug
          console.log(gameState); // for debug
          resolve();
        } else {
          document.querySelector('h2').classList.add('js-not-choosed');
          setTimeout(() => document.querySelector('h2').classList.remove('js-not-choosed'), 1000);
        }
      });
    });
  }

  static draw() {
    drawSection(template);
    const player = new PlayerCharacter();
    return Login.addChooseCharacterListeners(player);
  }
}

export default Login;
