import Phaser from 'phaser';
import game from '../index';
import cuisineImg from '../assets/backgrounds/italian-cuisine-2378729_1366.jpg';
import paperImg from '../assets/backgrounds/paper-1074131_1366.jpg';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    this.load.image('cuisineBackground', cuisineImg);
    this.load.image('paperBackground', paperImg);
  }

  create() {
    // we do not stop boot scene if we want to preload all assets here
    game.gameState.nextScene = 'StartMenuScene';
    this.scene.start('StartMenuScene');
  }
}
