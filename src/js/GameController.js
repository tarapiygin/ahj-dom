import GamePlay from './GamePlay';
import getRandomInt from './utils';

export default class GameController {
  constructor() {
    this.gamePlay = new GamePlay();
    this.intervalId = null;

    this.init();
  }

  positionGeneration() {
    while (true) {
      const randomPosition = getRandomInt(this.gamePlay.cells.length);
      if (randomPosition !== this.gamePlay.activePosition) {
        this.gamePlay.redrawPositions(randomPosition);
        break;
      }
    }
  }

  init() {
    this.intervalId = setInterval(this.positionGeneration.bind(this), 400);
  }
}
