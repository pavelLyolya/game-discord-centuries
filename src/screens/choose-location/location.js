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

  static chooseLocationListeners() {
    const locationDivs = document.querySelectorAll('div.img');
    locationDivs.forEach((location) => {
      location.addEventListener('click', () => {
        const locationName = location.firstElementChild.getAttribute('alt');
        gameState.setLocationName(locationName);
        Locations.makeChoosed(location);
      });
    });
  }

  static draw() {
    drawSection(template);
    Locations.chooseLocationListeners();
  }
}

export default Locations;
