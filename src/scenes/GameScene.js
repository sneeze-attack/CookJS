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
    // assign json ingredient price data to variable
    const iData = this.cache.json.get('ingredientData');
    // Get length of longest ingredient
    let longestIngredientLength = 0;
    Object.keys(iData).forEach((key) => {
      if (longestIngredientLength < key.length) {
        longestIngredientLength = key.length;
      }
    });

    function buy(ingredient, price, tsp) {
      if (game.inventory.dollars > price) {
        game.inventory.addIngredient(ingredient, tsp);
        // capitalize name of ingredient
        const ingredientCapitalized = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        // add blank space to align with longest ingredient name
        let spacer = '';
        const l = ingredient.length;
        if (l < longestIngredientLength) {
          const d = longestIngredientLength - l;
          // TODO - refactor to add spaces equal to variable d
          if (d === 1) {
            spacer = ' ';
          } else if (d === 2) {
            spacer = '  ';
          } else if (d === 3) {
            spacer = '   ';
          } else {
            spacer = '    ';
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
  }
}
