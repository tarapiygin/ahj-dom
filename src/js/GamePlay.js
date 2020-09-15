export default class GamePlay {
  constructor() {
    this.field = document.querySelector('.field');
    this.cells = Array.from(document.getElementsByClassName('field-cell'));
    this.image = document.querySelector('.cell-image');
    this.activePosition = null;
  }

  redrawPositions(position) {
    const cloneImage = this.image.cloneNode(true);
    cloneImage.style.display = '';
    if (this.activePosition !== null) {
      this.cells[this.activePosition].querySelector('.cell-image').remove();
    }
    this.cells[position].append(cloneImage);
    this.activePosition = position;
  }
}
