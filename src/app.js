import '@babel/polyfill';

import './common-css/style.css';
import Home from './screens/home/home';
import Locations from './screens/choose-location/location';
import Login from './screens/login/login';
import Battle from './screens/battle/battle';

import MonsterCharacter from './components/MonsterCharacter';

const startGame = async () => {
  // await Home.draw();
  // await Locations.draw();
  await Login.draw();
  await Battle.draw();
  const monster = new MonsterCharacter();
  monster.drawCharacter(
    ['1-left-hand', '3-foot', '1-torso', '1-right-hand', '2-head'],
    'enemies',
  );
  monster.drawCharName();
  console.log(monster);
};

startGame();
