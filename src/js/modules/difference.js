export default class Difference {
  constructor(cardsSelector, btnSelector) {
    this._cards = document.querySelectorAll(cardsSelector);
    this._showingCards = 0;
    this._cardsCount = this._cards.length - 1;
    this._btn = document.querySelector(btnSelector);
  }

  bindTrigger() {
    this._btn.addEventListener('click', () => {
      if (this._showingCards !== this._cardsCount - 1) {
        this._cards[this._showingCards].style.display = 'flex';
        this._showingCards++;
      } else {
        this._cards[this._showingCards].style.display = 'flex';
        setTimeout(() => {
          this._btn.parentNode.classList.add('animated', 'hinge');
        }, 500);
        setTimeout(() => {
          this._btn.parentNode.remove();
        }, 2500);
      }
    });
  }

  render() {
    this._cards.forEach((card, index) => {
      if (index !== this._cardsCount) {
        card.style.display = 'none';
        card.classList.add('animated', 'flipInX');
      }
    });
    this.bindTrigger();
  }
}
