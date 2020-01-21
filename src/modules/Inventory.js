export default class Inventory {
  constructor() {
    // Start with $100
    this.dollars = 100;

    // all measurements here start at tsp, the most common smallest measurement
    // of volume in English units
    // We will convert up to other units everywhere else for display / UI

    // Start with a pound of flour which is about 3 1/2 cups
    this.flour = 168;
  }
}
