import './login.css';
import template from './login.template';

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
        if (document.querySelector('.choosed-character')) {
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
    console.log(player);
    player.drawCharacter(
      ['left_hand', 'foot', 'torso', 'right_hand', 'head'],
      'soldier',
    );
    return Login.addChooseCharacterListeners(player);
  }
}

export default Login;
