import random from 'lodash/random';

import PlayerCharacter from './PlayerCharacter';

export default class MonsterCharacter extends PlayerCharacter {
  constructor(charX = 850, charY = 310) {
    super(charX, charY);

    this.arrayImageNames = ['left-hand', 'foot', 'torso', 'right-hand', 'head', 'sword', 'shield'];

    this.generateName();
  }

  generateName() {
    const firstPart = [
      'Great', 'Awful', 'Big', 'Dark', 'Dead', 'Angry',
    ];
    const secondPart = [
      'Knight', 'Warrior', 'Soldier', 'King', 'Lord',
    ];
    const thirdPart = [
      'Artur', 'George', 'Karl', 'Harold', 'Edmund',
    ];
    const firstPartNum = random(0, firstPart.length - 1);
    const secondPartNum = random(0, secondPart.length - 1);
    const thirdPartNum = random(0, thirdPart.length - 1);
    this.setName(`${firstPart[firstPartNum]} ${secondPart[secondPartNum]} ${thirdPart[thirdPartNum]}`);
  }

  async generateBody() {
    this.arrayImageNames = this.arrayImageNames.map((elem) => {
      const prefix = random(1, 3);
      return `${prefix}-${elem}`;
    });
    await this.loadAllImages(this.arrayImageNames);
  }

  drawCharName() {
    if (document.querySelector('.battle-state header span:nth-child(3)')) {
      document.querySelector('.battle-state header span:nth-child(3)').textContent = this.name;
    }
  }

  drawCharHealth() {
    if (document.querySelector('canvas#monster-health')) {
      const canvas = document.querySelector('canvas#monster-health');
      const context = canvas.getContext('2d');
      context.fillStyle = 'red';
      context.fillRect(0, 0, 600 * this.health / 100, 30);

      context.beginPath();
      context.lineTo(600, 0);
      context.lineTo(600, 30);
      context.lineTo(0, 30);
      context.lineTo(0, 0);
      context.closePath();
      context.stroke();
    }
  }

  setCoords(charX = 600, charY = 310) {
    this.charX = charX;
    this.charY = charY;
  }

  loadImage(name, fromWhere) {
    const idxName = name.slice(2);
    return new Promise((resolve) => {
      this.images[idxName] = new Image();
      this.images[idxName].onload = () => {
        resolve();
      };
      this.images[idxName].src = `./images/${fromWhere}/${name}.png`;
    });
  }

  loadAllImages(arrayImageNames, fromWhere = 'enemies') {
    const self = this;
    const arrayImagePromises = arrayImageNames.map(imgName => self.loadImage(imgName, fromWhere));
    return Promise.all(arrayImagePromises);
  }

  async drawCharacter() {
    const canvas = document.querySelector('canvas#character');
    const context = canvas.getContext('2d');

    const x = this.charX;
    const y = this.charY;

    const self = this;

    const breathInc = 0.09;
    let breathDir = 1;
    let breathAmt = 0;
    const breathMax = 3;

    function redraw() {
      self.idRedraw = window.requestAnimationFrame(redraw);
      // canvas.width = canvas.width;

      context.drawImage(self.images['left-hand'], x + 20, y + 34 - breathAmt, 122, 143);
      context.drawImage(self.images.sword, x - 140, y - 15 - breathAmt, 220, 204);
      context.drawImage(self.images.foot, x + 56, y + 145);
      context.drawImage(self.images.foot, x + 119, y + 145);
      context.drawImage(self.images.torso, x + 66, y - 27 - breathAmt * 0.5, 260, 212);
      context.drawImage(self.images['right-hand'], x + 166, y + 34 - breathAmt, 108, 158);
      context.drawImage(self.images.head, x + 10, y - 160 - breathAmt * 1.5, 294, 235);
      context.drawImage(self.images.shield, x + 116, y + 54 - breathAmt, 145, 183);
    }

    function updateBreath() {
      self.idUpdateBreath = window.requestAnimationFrame(updateBreath);
      if (breathDir === 1) {
        breathAmt -= breathInc;
        if (breathAmt < -breathMax) {
          breathDir = -1;
        }
      } else {
        breathAmt += breathInc;
        if (breathAmt > breathMax) {
          breathDir = 1;
        }
      }
    }

    await this.generateBody();

    this.idUpdateBreath = window.requestAnimationFrame(updateBreath);
    this.idRedraw = window.requestAnimationFrame(redraw);
  }
}
