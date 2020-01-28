/* global Phaser
no-undef: off */
import game, { config } from '../../index';

export default class Main extends Phaser.GameObjects.Group {
  // Intended for use only in GameScene
  constructor(scene) {
    // add background
    scene.add.image(0, 0, 'paperBackground').setOrigin(0, 0);

    const buyFlour = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 8) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(1);
    const buyFlourText = scene.add.text(((config.scale.width * 90) / 128), ((config.scale.height * 13) / 128), 'Buy Flour $2.99 / 5 lbs').setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    const buySugar = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * 24) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 8) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(1);
    const buySugarText = scene.add.text(((config.scale.width * 90) / 128), ((config.scale.height * 25) / 128), 'Buy Sugar $2.99 / 4 lbs').setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    const buyYeast = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * 36) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 8) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(1);
    const buyYeastText = scene.add.text(((config.scale.width * 90) / 128), ((config.scale.height * 37) / 128), 'Buy Yeast $13.99 / lb').setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    const buySalt = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * 48) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 8) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(1);
    const buySaltText = scene.add.text(((config.scale.width * 90) / 128), ((config.scale.height * 49) / 128), 'Buy Salt $3.69 / 3 lbs').setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    const buyOil = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * 60) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 8) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive().setDepth(1);
    const buyOilText = scene.add.text(((config.scale.width * 90) / 128), ((config.scale.height * 61) / 128), 'Buy Oil $4.59 / gallon').setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    // display inventory
    const oilHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 90) / 128), `Oil:   ${game.inventory.convert(`${game.inventory.oil}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const saltHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 95) / 128), `Salt:  ${game.inventory.convert(`${game.inventory.salt}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const yeastHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 100) / 128), `Yeast: ${game.inventory.convert(`${game.inventory.yeast}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const sugarHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 105) / 128), `Sugar: ${game.inventory.convert(`${game.inventory.sugar}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const flourHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 110) / 128), `Flour: ${game.inventory.convert(`${game.inventory.flour}`)}`).setColor('#000000').setInteractive().setFontSize(28).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    const cashHeld = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), `Cash: $${game.inventory.dollars}`).setColor('#000000').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);
    super();

    this.buyflour = buyFlour;
    this.buyflourText = buyFlourText;
    this.buysugar = buySugar;
    this.buysugarText = buySugarText;
    this.buyyeast = buyYeast;
    this.buyyeastText = buyYeastText;
    this.buysalt = buySalt;
    this.buysaltText = buySaltText;
    this.buyoil = buyOil;
    this.buyoilText = buyOilText;
    this.oilHeld = oilHeld;
    this.flourHeld = flourHeld;
    this.cashHeld = cashHeld;
    this.sugarHeld = sugarHeld;
    this.yeastHeld = yeastHeld;
    this.saltHeld = saltHeld;
  }
}
