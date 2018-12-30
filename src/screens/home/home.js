import './home.css';
import template from './home.template';

import drawSection from '../../scripts/drawSection';
import toggleFullScreen from '../../scripts/toggleFullScreen';

class Home {
  static addClickListeners() {
    return new Promise((resolve) => {
      const lis = document.querySelectorAll('menu li');
      lis[0].addEventListener('click', () => {
        resolve();
      });
      lis[2].addEventListener('click', toggleFullScreen);
    });
  }

  static draw() {
    drawSection(template);
    return Home.addClickListeners();
  }
}

export default Home;
