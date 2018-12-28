import './home.css';
import template from './home.template';

import Locations from '../choose-location/location';
import drawSection from '../../scripts/drawSection';
import toggleFullScreen from '../../scripts/toggleFullScreen';

class Home {
  static addClickListeners() {
    const lis = document.querySelectorAll('menu li');
    lis[0].addEventListener('click', () => {
      Locations.draw();
    });
    lis[2].addEventListener('click', toggleFullScreen);
  }

  static draw() {
    drawSection(template);
    Home.addClickListeners();
  }
}

export default Home;
