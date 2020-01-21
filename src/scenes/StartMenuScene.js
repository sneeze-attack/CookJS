import Phaser from 'phaser';
import game from '../index';

export default class StartMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartMenuScene' });
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // add background & title
    this.add.image(0, 0, 'cuisineBackground').setOrigin(0, 0);
    this.add.text(((this.config.width * 6) / 128), ((this.config.height * 10) / 128), game.config.gameTitle).setColor('#FFFFFF').setFontSize(128).setStroke('#000000', 16).setOrigin(0, 0);

    // start game button
    const startTextBox = this.add.rectangle(((this.config.width * 8) / 128), ((this.config.height * 46) / 128), ((this.config.width * 30) / 128), ((this.config.height * 13) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    const startText = this.add.text(((this.config.width * 14) / 128), ((this.config.height * 47) / 128), 'Start').setColor('#FFFFFF').setFontSize(64).setInteractive();

    // start button logic
    startText.on('pointerup', () => {
      game.gameState.changeScene('GameScene', 'StartMenuScene');
    });
    startTextBox.on('pointerup', () => {
      game.gameState.changeScene('GameScene', 'StartMenuScene');
    });
  }

  update() {
    // change scene logic
    if (game.gameState.nextScene !== 'StartMenuScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
