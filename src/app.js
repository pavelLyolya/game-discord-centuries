import '@babel/polyfill';

import './common-css/style.css';
import Home from './screens/home/home';
import Locations from './screens/choose-location/location';
import Login from './screens/login/login';
import Battle from './screens/battle/battle';


const startGame = async () => {
  await Home.draw();
  await Locations.draw();
  await Login.draw();
  await Battle.draw();
};

startGame();
