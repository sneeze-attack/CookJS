import Phaser from 'phaser';
import game from '../index';
import cuisineImg from '../assets/backgrounds/italian-cuisine-2378729_1366.jpg';
import paperImg from '../assets/backgrounds/paper-1074131_1366.jpg';
import ovenImg from '../assets/icons/oven128.png';
import cartImg from '../assets/icons/supermarket112.png';
import jsonData from '../data/ingredients.json';
import recipeData from '../data/recipes.json';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    this.load.image('cuisineBackground', cuisineImg);
    this.load.image('paperBackground', paperImg);
    this.load.image('ovenIcon', ovenImg);
    this.load.image('cartIcon', cartImg);
    this.load.json('ingredientData', jsonData);
    this.load.json('recipeData', recipeData);
  }

  create() {
    // we do not stop boot scene if we want to preload all assets here
    game.gameState.nextScene = 'StartMenuScene';
    this.scene.start('StartMenuScene');
  }
}
