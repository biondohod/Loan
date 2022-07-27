export default class Slider {
  constructor({
    containerSelector = null,
    btnsSelector = null,
    nextBtnSelector = null,
    prevBtnSelector = null,
    resetBtnsSelector = null,
    activeClass = '',
    animated = false,
    autoplay = false,
    start = 1,
  } = {}) {
    this._container = document.querySelector(containerSelector);
    this._slides = this._container.children;
    this._btns = document.querySelectorAll(btnsSelector);
    this._nextBtn = document.querySelector(nextBtnSelector);
    this._prevBtb = document.querySelector(prevBtnSelector);
    this._resetBtn = document.querySelectorAll(resetBtnsSelector);
    this._activeClass = activeClass;
    this.animated = animated;
    this.autoplay = autoplay;
    this.slideIndex = start;
  }
}
