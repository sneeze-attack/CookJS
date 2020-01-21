import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import UIScene from './scenes/UIScene';

export const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    width: 1366,
    height: 768
  },
  scene: [
    BootScene,
    GameScene,
    UIScene
  ],
};

const game = new Phaser.Game(config);

export default game;
