import './home.css';
import template from './home.template';

import Locations from '../choose-location/location';
import drawSection from '../../scripts/drawSection';

class Home {
  static addClickListeners() {
    const lis = document.querySelectorAll('menu li');
    lis[0].addEventListener('click', () => {
      Locations.draw();
    });
  }

  static draw() {
    drawSection(template);
    Home.addClickListeners();
  }
}

export default Home;
