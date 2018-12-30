import '@babel/polyfill';

import './common-css/style.css';
import Home from './screens/home/home';
import Locations from './screens/choose-location/location';

const startGame = async () => {
  await Home.draw();
  await Locations.draw();
  console.log('HI');
};

startGame();
