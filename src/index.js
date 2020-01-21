import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import StartMenuScene from './scenes/StartMenuScene';
import GameScene from './scenes/GameScene';
import GameState from './modules/GameState';
import Inventory from './modules/Inventory';

export const config = {
  title: 'CookJS',
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    width: 1366,
    height: 768,
  },
  scene: [
    BootScene,
    GameScene,
    StartMenuScene,
  ],
};

const game = new Phaser.Game(config);
game.gameState = new GameState();
game.inventory = new Inventory();

export default game;
