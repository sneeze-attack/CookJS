/* global Phaser
no-undef: off */
import game, { config } from '../../index';

export default class Main extends Phaser.GameObjects.Group {
  // Intended for use only in GameScene
  constructor(scene) {
    // add background
    scene.add.image(0, 0, 'paperBackground').setOrigin(0, 0);
    // display inventory
    scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), `Cash: $${game.inventory.dollars}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 110) / 128), `Flour: ${game.inventory.flour} tsp`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    super();
  }
}
