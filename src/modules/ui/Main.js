/* global Phaser
no-undef: off */
import game, { config } from '../../index';
import jsonData from '../../data/ingredients.json';
import recipeData from '../../data/recipes.json';

export default class Main extends Phaser.GameObjects.Group {
  // Intended for use only in GameScene
  constructor(scene) {
    // add background
    scene.add.image(0, 0, 'paperBackground').setOrigin(0, 0).setDepth(1);

    // create shopping cart
    const cart = scene.add.sprite(((config.scale.width * 3) / 128), ((config.scale.height * 30) / 128), 'cartIcon').setOrigin(0, 0).setInteractive().setDepth(1);
    // shopping menu
    // add bordered results box
    const cartBoxBorder = scene.add.rectangle(((config.scale.width * 30) / 128), ((config.scale.height * 14) / 128), ((config.scale.width * 68) / 128), ((config.scale.height * 98) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const cartBox = scene.add.rectangle(((config.scale.width * 30.25) / 128), ((config.scale.height * 14.5) / 128), ((config.scale.width * 67.5) / 128), ((config.scale.height * 97) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();

    // create oven
    const oven = scene.add.sprite(((config.scale.width * 3) / 128), ((config.scale.height * 4) / 128), 'ovenIcon').setOrigin(0, 0).setInteractive().setDepth(1);
    // oven / cooking menu
    // add gray shade to entire screen
    const menuShadeBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setDepth(0).setAlpha(0.5).setInteractive();
    // add bordered results box
    const menuBoxBorder = scene.add.rectangle(((config.scale.width * 30) / 128), ((config.scale.height * 14) / 128), ((config.scale.width * 68) / 128), ((config.scale.height * 98) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const menuBox = scene.add.rectangle(((config.scale.width * 30.25) / 128), ((config.scale.height * 14.5) / 128), ((config.scale.width * 67.5) / 128), ((config.scale.height * 97) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    // Show available recipes
    let recipeHeightCoord = 17;
    let recipeTextHeightCoord = 18;
    // create a button for each recipe
    Object.keys(recipeData).forEach((key) => {
      const tempName = `${key}RecipeButton`;
      const tempTextName = `${key}RecipeButtonText`;
      // creates buttons and text in upper right
      window[tempName] = scene.add.rectangle(((config.scale.width * 32) / 128), ((config.scale.height * recipeHeightCoord) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 8) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(0);
      window[tempTextName] = scene.add.text(((config.scale.width * 33) / 128), ((config.scale.height * recipeTextHeightCoord) / 128), `${recipeData[key].name}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(0);
      recipeHeightCoord += 12;
      recipeTextHeightCoord += 12;
    });

    // create purchase buttons and their text, create inventory display
    let heightCoord = 17;
    let textHeightCoord = 17.5;
    let heldCoord = 70;
    // Get length of longest ingredient
    let longestIngredientLength = 0;
    Object.keys(jsonData).forEach((key) => {
      if (longestIngredientLength < key.length) {
        longestIngredientLength = key.length;
      }
    });
    Object.keys(jsonData).forEach((key) => {
      const tempName = `buy${key}`;
      const tempTextName = `buy${key}Text`;
      const heldName = `${key}Held`;
      // Capitalize first letter of ingredient
      const cap = `${jsonData[key].name}`;
      const ingredientCapitalized = cap.charAt(0).toUpperCase() + cap.slice(1);
      // Add spacing for ingredients/inventory
      let spacer = '';
      const l = key.length;
      if (l < longestIngredientLength) {
        for (let d = longestIngredientLength - l; d > 0; d -= 1) {
          spacer = spacer.concat(' ');
        }
      }
      // creates purchase buttons and text in cart pop-up window
      window[tempName] = scene.add.rectangle(((config.scale.width * 32) / 128), ((config.scale.height * heightCoord) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 6) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(0);
      window[tempTextName] = scene.add.text(((config.scale.width * 33) / 128), ((config.scale.height * textHeightCoord) / 128), `${ingredientCapitalized} $${jsonData[key].price} / ${jsonData[key].amountText}`).setColor('#000000').setInteractive().setFontSize(20).setFontFamily('"DejaVu Sans Mono"').setDepth(0);
      // this creates inventory in bottom left
      window[heldName] = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * heldCoord) / 128), `${ingredientCapitalized}:${spacer} ${game.inventory.convert(`${game.inventory[key]}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
      heightCoord += 9;
      textHeightCoord += 9;
      heldCoord += 5;
    });

    // display money held
    const cashHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), `Cash: $${game.inventory.dollars}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    // display day / time
    const day = scene.add.text(((config.scale.width * 108) / 128), ((config.scale.height * 116) / 128), `Day:  ${game.gameState.day}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    // Show hour as-is and convert remainder value to time format
    const convertedTimeHour = Math.floor(game.gameState.hour);
    const remainder = game.gameState.hour - convertedTimeHour;
    let convertedTimeMinutes;
    if (remainder === 0.25) {
      convertedTimeMinutes = 15;
    } else if (remainder === 0.5) {
      convertedTimeMinutes = 30;
    } else if (remainder === 0.75) {
      convertedTimeMinutes = 45;
    } else {
      convertedTimeMinutes = '00';
    }
    const hour = scene.add.text(((config.scale.width * 108) / 128), ((config.scale.height * 122) / 128), `Time: ${convertedTimeHour}:${convertedTimeMinutes}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    super();

    Object.keys(recipeData).forEach((key) => {
      const tempName = `${key}RecipeButton`;
      const tempTextName = `${key}RecipeButtonText`;
      this[`${tempName}`] = eval(tempName);
      this[`${tempTextName}`] = eval(tempTextName);
    });
    Object.keys(jsonData).forEach((key) => {
      const tempName = `buy${key}`;
      const tempTextName = `buy${key}Text`;
      const tempHeld = `${key}Held`;
      this[`${tempName}`] = eval(tempName);
      this[`${tempTextName}`] = eval(tempTextName);
      this[`${tempHeld}`] = eval(tempHeld);
    });
    this.cashHeld = cashHeld;
    this.day = day;
    this.hour = hour;
    this.oven = oven;
    this.cart = cart;
    this.menuShadeBox = menuShadeBox;
    this.menuBoxBorder = menuBoxBorder;
    this.menuBox = menuBox;
    this.cartBoxBorder = cartBoxBorder;
    this.cartBox = cartBox;
  }
}
