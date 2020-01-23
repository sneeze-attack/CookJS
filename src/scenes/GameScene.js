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
      // subtracting repeatedly, left w/ .000000001 - need 'toFixed(2)'
      const rounded = game.inventory.dollars.toFixed(2);
      ui.cashHeld.setText(`Cash: $${rounded}`);
    }
    ui.buyFlour.on('pointerup', () => {
      buyFlour.call(this);
    });
    ui.buyFlourText.on('pointerup', () => {
      buyFlour.call(this);
    });

    // sugar
    function buySugar() {
      game.inventory.sugar += 384;
      ui.sugarHeld.setText(`Sugar: ${game.inventory.convert(`${game.inventory.sugar}`)}`);
      game.inventory.dollars -= 2.99;
      // subtracting repeatedly, left w/ .000000001 - need 'toFixed(2)'
      const rounded = game.inventory.dollars.toFixed(2);
      ui.cashHeld.setText(`Cash: $${rounded}`);
    }
    ui.buySugar.on('pointerup', () => {
      buySugar.call(this);
    });
    ui.buySugarText.on('pointerup', () => {
      buySugar.call(this);
    });

    // yeast
    function buyYeast() {
      game.inventory.yeast += 160;
      ui.yeastHeld.setText(`Yeast: ${game.inventory.convert(`${game.inventory.yeast}`)}`);
      game.inventory.dollars -= 13.99;
      // subtracting repeatedly, left w/ .000000001 - need 'toFixed(2)'
      const rounded = game.inventory.dollars.toFixed(2);
      ui.cashHeld.setText(`Cash: $${rounded}`);
    }
    ui.buyYeast.on('pointerup', () => {
      buyYeast.call(this);
    });
    ui.buyYeastText.on('pointerup', () => {
      buyYeast.call(this);
    });

    // salt
    function buySalt() {
      game.inventory.salt += 240;
      ui.saltHeld.setText(`Salt:  ${game.inventory.convert(`${game.inventory.salt}`)}`);
      game.inventory.dollars -= 3.69;
      // subtracting repeatedly, left w/ .000000001 - need 'toFixed(2)'
      const rounded = game.inventory.dollars.toFixed(2);
      ui.cashHeld.setText(`Cash: $${rounded}`);
    }
    ui.buySalt.on('pointerup', () => {
      buySalt.call(this);
    });
    ui.buySaltText.on('pointerup', () => {
      buySalt.call(this);
    });

    // oil
    function buyOil() {
      game.inventory.oil += 768;
      ui.oilHeld.setText(`Oil:   ${game.inventory.convert(`${game.inventory.oil}`)}`);
      game.inventory.dollars -= 4.59;
      // subtracting repeatedly, left w/ .000000001 - need 'toFixed(2)'
      const rounded = game.inventory.dollars.toFixed(2);
      ui.cashHeld.setText(`Cash: $${rounded}`);
    }
    ui.buyOil.on('pointerup', () => {
      buyOil.call(this);
    });
    ui.buyOilText.on('pointerup', () => {
      buyOil.call(this);
    });
  }
}
