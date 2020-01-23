export default class Inventory {
  constructor() {
    // Start with $100
    this.dollars = 100;

    // all measurements here start at tsp, the most common smallest measurement
    // of volume in English units
    // We will convert() up to other units everywhere else for display / UI

    // Start with a pound of flour which is about 3 1/2 cups (168tsp)
    this.flour = 0;
    // sugar is about 96 tsp per lb --- 96 tsp = 2 cups
    this.sugar = 0;
    // yeast is about 160 tsp per lb
    this.yeast = 0;
    // salt is about 80 tsp per lb
    this.salt = 0;
    this.oil = 0;

    this.ingredientList = [];
  }

  addIngredient(ingredient, number) {
    this[ingredient] += number;
    const index = this.ingredientList.findIndex((x) => x === ingredient);
    // if ingredient does not already exist in list, add it
    if (index === -1) {
      this.ingredientList.push(ingredient);
    }
    //console.log(this.ingredientList);
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
    const remainder = number % 768;
    const quarts = Math.floor(remainder / 192);
    let remainingQuarts;
    if (quarts === 0) {
      remainingQuarts = '';
    } else if (quarts === 1) {
      remainingQuarts = `${quarts} quart, `;
    } else {
      remainingQuarts = `${quarts} quarts, `;
    }
    // pint conversion
    const quartRemainder = remainder % 192;
    const pints = Math.floor(quartRemainder / 96);
    let remainingPints = '';
    if (pints !== 0) {
      remainingPints = `${pints} pint, `;
    }
    // cup conversion
    const pintRemainder = quartRemainder % 96;
    const cups = Math.floor(pintRemainder / 48);
    let remainingCups = '';
    if (cups !== 0) {
      remainingCups = `${cups} cup, `;
    }
    // tablespoon conversion
    const cupRemainder = pintRemainder % 48;
    const tablespoons = Math.floor(cupRemainder / 3);
    let remainingTablespoons;
    if (tablespoons === 0) {
      remainingTablespoons = '';
    } else {
      remainingTablespoons = `${tablespoons} Tbsp, `;
    }
    // teaspoon conversion
    const teaspoons = cupRemainder % 3;
    let remainingTeaspoons;
    if (teaspoons === 0) {
      remainingTeaspoons = '';
    } else {
      remainingTeaspoons = `${teaspoons} tsp`;
    }
    return remainingGallons + remainingQuarts + remainingPints + remainingCups + remainingTablespoons + remainingTeaspoons;
  }
}
