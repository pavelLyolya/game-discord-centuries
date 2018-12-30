import './location.css';
import template from './location.template';

import gameState from '../../gameState';

import drawSection from '../../scripts/drawSection';

class Locations {
  static makeChoosed(location) {
    if (document.querySelector('.choosed')) {
      document.querySelector('.choosed').classList.remove('choosed');
    }
    location.classList.add('choosed');
  }

  static addChooseLocationListeners() {
    return new Promise((resolve) => {
      const locationDivs = document.querySelectorAll('div.img');
      locationDivs.forEach((location) => {
        location.addEventListener('click', () => {
          const locationName = location.firstElementChild.getAttribute('alt');
          gameState.setLocationName(locationName);
          console.log(gameState); // for debug
          Locations.makeChoosed(location);
        });
      });
      document.querySelector('.choose-location span').addEventListener('click', () => {
        if (document.querySelector('.choosed')) {
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
    return Locations.addChooseLocationListeners();
  }
}

export default Locations;
