import './home.css';
import template from './home.template';

class Home {
  static drawSection() {
    const section = document.querySelector('section');
    if (section) {
      document.querySelector('#content').removeChild(section);
    }
    const content = document.querySelector('#content');
    content.innerHTML = template;
  }
}

export default Home;
