import './login.css';
import template from './login.template';

import drawSection from '../../scripts/drawSection';

class Login {
  static draw() {
    drawSection(template);
  }
}

export default Login;
