export default class GameState {
  constructor() {
    this.nextScene = 'StartScene';
    this.previousScene = null;
    this.hour = 6; // start at 6am, use 24h clock
    this.day = 1;
  }

  changeScene(nextScene, thisScene) {
    this.nextScene = nextScene;
    this.previousScene = thisScene;
  }

  updateTime(hoursSpent) {
    this.hour += hoursSpent;
    // if over 24 hours, proceed to next day
    if (this.hour >= 24) {
      this.hour -= 24;
      this.day += 1;
    }
  }
}
