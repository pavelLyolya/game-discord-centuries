import _ from 'lodash';

import PlayerCharacter from './PlayerCharacter';

export default class MonaterCharacter extends PlayerCharacter {
  constructor(charX = 850, charY = 310) {
    super(charX, charY);
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
    const firstPartNum = _.random(0, firstPart.length - 1);
    const secondPartNum = _.random(0, secondPart.length - 1);
    const thirdPartNum = _.random(0, thirdPart.length - 1);
    this.setName(`${firstPart[firstPartNum]} ${secondPart[secondPartNum]} ${thirdPart[thirdPartNum]}`);
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

  async drawCharacter(arrayImageNames, fromWhere) {
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
      context.drawImage(self.images['1-left-hand'], x + 20, y + 34 - breathAmt, 122, 143);
      context.drawImage(self.images['3-foot'], x + 56, y + 145);
      context.drawImage(self.images['1-torso'], x + 66, y - 27 - breathAmt * 0.5, 260, 212);
      context.drawImage(self.images['3-foot'], x + 119, y + 145);
      context.drawImage(self.images['1-right-hand'], x + 166, y + 34 - breathAmt, 108, 158);
      context.drawImage(self.images['2-head'], x + 10, y - 160 - breathAmt * 1.5, 294, 235);
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

    if (arrayImageNames && fromWhere) {
      await this.loadAllImages(arrayImageNames, fromWhere);
    }
    this.idUpdateBreath = window.requestAnimationFrame(updateBreath);
    this.idRedraw = window.requestAnimationFrame(redraw);
  }
}
