import Phaser from 'phaser';
import Main from '../modules/ui/Main';
import game from '../index';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    const ui = new Main(this);

    // Add 5 lb flour and reduce cash on click
    function buyFlour() {
      game.inventory.flour += 840;
      ui.flourHeld.setText(`Flour: ${game.inventory.convert(`${game.inventory.flour}`)}`);
      game.inventory.dollars -= 2.99;
      // subtracting 2.99 repeatedly, left w/ .000000001 - need 'toFixed(2)'
      const rounded = game.inventory.dollars.toFixed(2);
      ui.cashHeld.setText(`Cash: $${rounded}`);
    }
    ui.buyFlour.on('pointerup', () => {
      buyFlour.call(this);
    });
    ui.buyFlourText.on('pointerup', () => {
      buyFlour.call(this);
    });
  }
}
