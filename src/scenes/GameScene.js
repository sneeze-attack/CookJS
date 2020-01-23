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
        game.inventory[ingredient] += tsp;
        // capitalize name of ingredient
        const ingredientCapitalized = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        // add blank space to align with longest ingredient name
        let spacer = ''
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

    // Add 5 lb and reduce cash held by $2.99 on click
    ui.buyFlour.on('pointerup', () => {
      buy('flour', 2.99, 840);
    });
    ui.buyFlourText.on('pointerup', () => {
      buy('flour', 2.99, 840);
    });
    // Add 4 lb and reduce cash held by $2.99 on click
    ui.buySugar.on('pointerup', () => {
      buy('sugar', 2.99, 384);
    });
    ui.buySugarText.on('pointerup', () => {
      buy('sugar', 2.99, 384);
    });
    // Add 1 lb and reduce cash held by $13.99 on click
    ui.buyYeast.on('pointerup', () => {
      buy('yeast', 13.99, 160);
    });
    ui.buyYeastText.on('pointerup', () => {
      buy('yeast', 13.99, 160);
    });
    // Add 3 lb and reduce cash held by $3.69 on click
    ui.buySalt.on('pointerup', () => {
      buy('salt', 3.69, 240);
    });
    ui.buySaltText.on('pointerup', () => {
      buy('salt', 3.69, 240);
    });
    // Add 1 gallon and reduce cash held by $4.59 on click
    ui.buyOil.on('pointerup', () => {
      buy('oil', 4.59, 768);
    });
    ui.buyOilText.on('pointerup', () => {
      buy('oil', 4.59, 768);
    });
  }
}
