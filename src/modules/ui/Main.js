/* global Phaser
no-undef: off */
import game, { config } from '../../index';
import jsonData from '../../data/ingredients.json';

export default class Main extends Phaser.GameObjects.Group {
  // Intended for use only in GameScene
  constructor(scene) {
    // add background
    scene.add.image(0, 0, 'paperBackground').setOrigin(0, 0);

    // create purchase buttons and their text
    let heightCoord = 12;
    let textHeightCoord = 13;
    Object.keys(jsonData).forEach((key) => {
      const tempName = `buy${key}`;
      const tempTextName = `buy${key}Text`;
      window[tempName] = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * heightCoord) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 8) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(1);
      window[tempTextName] = scene.add.text(((config.scale.width * 90) / 128), ((config.scale.height * textHeightCoord) / 128), `Buy ${key} ${jsonData[key].price} / ${jsonData[key].amountText}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
      heightCoord += 12;
      textHeightCoord += 12;
    });

    // display inventory
    const oilHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 90) / 128), `Oil:   ${game.inventory.convert(`${game.inventory.oil}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const saltHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 95) / 128), `Salt:  ${game.inventory.convert(`${game.inventory.salt}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const yeastHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 100) / 128), `Yeast: ${game.inventory.convert(`${game.inventory.yeast}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const sugarHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 105) / 128), `Sugar: ${game.inventory.convert(`${game.inventory.sugar}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const flourHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 110) / 128), `Flour: ${game.inventory.convert(`${game.inventory.flour}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const cashHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), `Cash: $${game.inventory.dollars}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    // display day / time
    const day = scene.add.text(((config.scale.width * 108) / 128), ((config.scale.height * 116) / 128), `Day:  ${game.gameState.day}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    // Show hour as-is and convert remainder value to time format
    const convertedTimeHour = Math.floor(game.gameState.hour);
    const remainder = game.gameState.hour - convertedTimeHour;
    let convertedTimeMinutes;
    if (remainder === 0.25) {
      convertedTimeMinutes = 15;
    } else if (remainder === 0.5) {
      convertedTimeMinutes = 30;
    } else if (remainder === 0.75) {
      convertedTimeMinutes = 45;
    } else {
      convertedTimeMinutes = '00';
    }
    const hour = scene.add.text(((config.scale.width * 108) / 128), ((config.scale.height * 122) / 128), `Time: ${convertedTimeHour}:${convertedTimeMinutes}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    super();

    Object.keys(jsonData).forEach((key) => {
      const tempName = `buy${key}`;
      const tempTextName = `buy${key}Text`;
      const tempHeld = `${key}Held`;
      this[`${tempName}`] = eval(tempName);
      this[`${tempTextName}`] = eval(tempTextName);
      this[`${tempHeld}`] = eval(tempHeld);
    });
    this.cashHeld = cashHeld;
    this.day = day;
    this.hour = hour;
  }
}
