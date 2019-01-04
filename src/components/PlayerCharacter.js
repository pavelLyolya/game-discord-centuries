export default class PlayerCharacter {
  constructor(charX = 170, charY = 170) {
    this.health = 100;
    this.name = '';

    this.images = {};

    this.charX = charX;
    this.charY = charY;
  }

  setCoords(charX = 70, charY = 310) {
    this.charX = charX;
    this.charY = charY;
  }

  setName(name) {
    this.name = name;
  }

  drawCharName() {
    if (document.querySelector('.battle-state header span:nth-child(1)')) {
      document.querySelector('.battle-state header span:nth-child(1)').textContent = this.name;
    }
  }

  drawCharHealth() {
    if (document.querySelector('canvas#player-health')) {
      const canvas = document.querySelector('canvas#player-health');
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

  loadImage(name, fromWhere) {
    return new Promise((resolve) => {
      this.images[name] = new Image();
      this.images[name].onload = () => {
        resolve();
      };
      this.images[name].src = `./images/${fromWhere}/${name}.png`;
    });
  }

  loadAllImages(arrayImageNames, fromWhere) {
    const self = this;
    const arrayImagePromises = arrayImageNames.map(imgName => self.loadImage(imgName, fromWhere));
    return Promise.all(arrayImagePromises);
  }

  async drawCharacter(arrayImageNames, fromWhere) {
    const canvas = document.querySelector('canvas#character');
    const context = canvas.getContext('2d');

    const x = this.charX;
    const y = this.charY;

    const self = this;

    const breathInc = 0.11;
    let breathDir = 1;
    let breathAmt = 0;
    const breathMax = 3;

    function redraw() {
      window.requestAnimationFrame(redraw);

      canvas.width = canvas.width;
      context.drawImage(self.images.left_hand, x + 170, y + 95 - breathAmt);
      context.drawImage(self.images.foot, x + 145, y + 195);
      context.drawImage(self.images.torso, x + 66, y + 110 - breathAmt * 0.5);
      context.drawImage(self.images.foot, x + 30, y + 195);
      context.drawImage(self.images.right_hand, x + 10, y + 109 - breathAmt);
      context.drawImage(self.images.head, x - 37, y - 138 - breathAmt * 1.5, 309, 270);
    }

    function updateBreath() {
      window.requestAnimationFrame(updateBreath);
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
    updateBreath();
    redraw();
  }
}
