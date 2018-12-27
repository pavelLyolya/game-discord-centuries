import './location.css';
import template from './location.template';

import drawSection from '../../scripts/drawSection';

class Locations {
  static draw() {
    drawSection(template);
  }
}

export default Locations;
