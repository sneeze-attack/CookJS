import Phaser from 'phaser';
import Main from '../modules/ui/Main';
import game from '../index';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    const ui = new Main(this);

    function buy(ingredient, price, tsp) {
      if (game.inventory.dollars > price) {
        game.inventory.addIngredient(ingredient, tsp);
        // capitalize name of ingredient
        const ingredientCapitalized = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        // add blank space to align with longest ingredient name
        let spacer = '';
        const l = ingredient.length;
        // MODIFY THIS MANUALLY FOR NOW, ADJUST WHEN NEW INGREDIENTS ARE ADDED
        const longestIngredientLength = 5;
        if (l < longestIngredientLength) {
          const d = longestIngredientLength - l;
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
        ui[ingredient + 'Held'].setText(`${ingredientCapitalized}:${spacer} ${game.inventory.convert(`${game.inventory[ingredient]}`)}`);
        game.inventory.dollars -= price;
        // subtracting repeatedly, .000000001 remainder - use 'toFixed(2)'
        const rounded = game.inventory.dollars.toFixed(2);
        ui.cashHeld.setText(`Cash: $${rounded}`);
      }
    }

    const iBuyList = {
      ingredient: {
        flour: {
          price: 2.99,
          amount: 840, // Add 5 lb
        },
        sugar: {
          price: 2.99,
          amount: 384, // Add 4 lb
        },
        yeast: {
          price: 13.99,
          amount: 160, // Add 1 lb
        },
        salt: {
          price: 3.69,
          amount: 240, // Add 3 lb
        },
        oil: {
          price: 4.59,
          amount: 768, // Add 1 gallon
        },
      },
    };

    // Sets up functionality for each ingredient in iBuyList
    // On existing Button and Text click, purchase ingredients
    for (let iName in iBuyList.ingredient) {
      ui['buy' + iName].on('pointerup', () => {
        buy(iName, iBuyList.ingredient[iName].price, iBuyList.ingredient[iName].amount);
      });
      ui['buy' + iName + 'Text'].on('pointerup', () => {
        buy(iName, iBuyList.ingredient[iName].price, iBuyList.ingredient[iName].amount);
      });
    }
  }
}
