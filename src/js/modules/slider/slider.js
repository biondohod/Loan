export default class Slider {
  constructor({ pageSelector = '', nextBtnsSelector = '', prevBtnsSelector = '', resetBtnsSelector = '', start = 1 } = {}) {
    this._page = document.querySelector(pageSelector);
    this._slides = this._page.children;
    this._nextBtns = document.querySelectorAll(nextBtnsSelector);
    this.slideIndex = start;
    this._resetBtn = document.querySelectorAll(resetBtnsSelector);
  }
}
