export default class Inventory {
  constructor() {
    // Start with $100
    this.dollars = 100;

    // all measurements here start at tsp, the most common smallest measurement
    // of volume in English units
    // We will convert() up to other units everywhere else for display / UI

    // Start with a pound of flour which is about 3 1/2 cups (168tsp)
    this.flour = 168;
  }

  convert(number) {
    // gallon conversion
    const gallons = Math.floor(number / 768);
    let remainingGallons;
    if (gallons === 0) {
      remainingGallons = '';
    } else if (gallons === 1) {
      remainingGallons = `${gallons} gallon, `;
    } else {
      remainingGallons = `${gallons} gallons, `;
    }
    // quart conversion
    let remainder = number % 768;
    let quarts = Math.floor(remainder / 192);
    let remainingQuarts;
    if (quarts === 0) {
      remainingQuarts = '';
    } else if (quarts === 1) {
      remainingQuarts = `${quarts} quart, `;
    } else {
      remainingQuarts = `${quarts} quarts, `;
    }
    // pint conversion
    let quartRemainder = remainder % 192;
    let pints = Math.floor(quartRemainder / 96);
    let remainingPints = '';
    if (pints !== 0) {
      remainingPints = `${pints} pint, `;
    }

    // cup conversion
    let pintRemainder = quartRemainder % 96;
    let cups = Math.floor(pintRemainder / 48);
    let remainingCups = '';
    if (cups !== 0) {
      remainingCups = `${cups} cup, `;
    }

    // tablespoon conversion
    let cupRemainder = pintRemainder % 48;
    let tablespoons = Math.floor(cupRemainder / 3);
    let remainingTablespoons;
    if (tablespoons === 0) {
      remainingTablespoons = '';
    } else {
      remainingTablespoons = `${tablespoons} Tbsp, `;
    }

    // teaspoon conversion
    let teaspoons = cupRemainder % 3;
    let remainingTeaspoons;
    if (teaspoons === 0) {
      remainingTeaspoons = '';
    } else {
      remainingTeaspoons = `${teaspoons} tsp`
    }

    return remainingGallons + remainingQuarts + remainingPints + remainingCups + remainingTablespoons + remainingTeaspoons;
  }
}
