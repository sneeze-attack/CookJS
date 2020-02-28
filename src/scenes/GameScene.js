import Phaser from 'phaser';
import Main from '../modules/ui/Main';
import game from '../index';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // use object to set up UI
    const ui = new Main(this);
    // assign json data to variables
    const iData = this.cache.json.get('ingredientData');
    const rData = this.cache.json.get('recipeData');
    // Get length of longest ingredient
    let longestIngredientLength = 0;
    let leng;
    Object.keys(iData).forEach((key) => {
      leng = `${iData[key].name}`;
      if (longestIngredientLength < leng.length) {
        longestIngredientLength = leng.length;
      }
    });

    function buy(ingredient, price, tsp) {
      if (game.inventory.dollars > price) {
        game.inventory.addIngredient(ingredient, tsp);
        let cap = ingredient;
        Object.keys(iData).forEach((key) => {
          if (key === ingredient) {
            cap = `${iData[key].name}`;
          }
        });
        // capitalize name of ingredient
        const ingredientCapitalized = cap.charAt(0).toUpperCase() + cap.slice(1);
        // add blank space to align with longest ingredient name
        let spacer = '';
        const l = cap.length;
        if (l < longestIngredientLength) {
          for (let d = longestIngredientLength - l; d > 0; d -= 1) {
            spacer = spacer.concat(' ');
          }
        }
        // update ingredient text to show new amount held
        ui[`${ingredient}Held`].setText(`${ingredientCapitalized}:${spacer} ${game.inventory.convert(`${game.inventory[ingredient]}`)}`);
        game.inventory.dollars -= price;
        // subtracting repeatedly, .000000001 remainder - use 'toFixed(2)'
        const rounded = game.inventory.dollars.toFixed(2);
        ui.cashHeld.setText(`Cash: $${rounded}`);
      }
    }

    // Sets up functionality for each ingredient in iData
    // On existing Button and Text click, purchase ingredients
    Object.keys(iData).forEach((key) => {
      ui[`buy${key}`].on('pointerup', () => {
        buy(key, iData[key].price, iData[key].amount);
      });
      ui[`buy${key}Text`].on('pointerup', () => {
        buy(key, iData[key].price, iData[key].amount);
      });
    });

    // Set up oven click functionality
    ui.oven.on('pointerup', () => {
      ui.menuShadeBox.setDepth(2);
      ui.menuBoxBorder.setDepth(3);
      ui.menuBox.setDepth(3);
      Object.keys(rData).forEach((key) => {
        ui[`${key}RecipeButton`].setDepth(4);
        ui[`${key}RecipeButtonText`].setDepth(4);
      });
    });
    ui.menuShadeBox.on('pointerup', () => {
      ui.menuShadeBox.setDepth(0);
      ui.menuBoxBorder.setDepth(0);
      ui.menuBox.setDepth(0);
      ui.cartBoxBorder.setDepth(0);
      ui.cartBox.setDepth(0);
      Object.keys(rData).forEach((key) => {
        ui[`${key}RecipeButton`].setDepth(0);
        ui[`${key}RecipeButtonText`].setDepth(0);
      });
      Object.keys(iData).forEach((key) => {
        ui[`buy${key}`].setDepth(0);
        ui[`buy${key}Text`].setDepth(0);
      });
    });

    ui.cart.on('pointerup', () => {
      ui.menuShadeBox.setDepth(2);
      ui.cartBoxBorder.setDepth(3);
      ui.cartBox.setDepth(3);
      Object.keys(iData).forEach((key) => {
        ui[`buy${key}`].setDepth(3);
        ui[`buy${key}Text`].setDepth(3);
      });
    });
  }
}
