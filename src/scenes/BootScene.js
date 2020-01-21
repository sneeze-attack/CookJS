import Phaser from 'phaser';


export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    //
  }

  create() {
    // we do not stop boot scene if we want to preload all assets here
    this.scene.start('GameScene');
  }
}
