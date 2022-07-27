export default class Slider {
  constructor(pageSelector, nextBtnsSelector, resetBtnSelector, start) {
    this._page = document.querySelector(pageSelector);
    this._slides = this._page.children;
    this._nextBtns = document.querySelectorAll(nextBtnsSelector);
    this.slideIndex = start;
    this._resetBtn = document.querySelectorAll(resetBtnSelector);
  }

  render() {
    this.setAnimation();
    this.showSlide();
    this._nextBtns.forEach((btn) => {
      btn.addEventListener('click', () => this.plusSlide());
    });
    this._resetBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        this._slides[this.slideIndex - 1].classList.remove('fadeInUp');
        this._slides[this.slideIndex - 1].classList.add('fadeOutDown');
        setTimeout(() => {
          this._slides[this.slideIndex - 1].classList.remove('fadeOutDown');
          this.slideIndex = 1;
          this.showSlide();
        }, 700);
      });
    });
  }

  setAnimation() {
    this._slides.forEach((slide) => {
      slide.classList.add('animated', 'fadeInUp');
    });
  }

  showSlide() {
    if (this.slideIndex > this._slides.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex < 1) {
      this.slideIndex = this._slides.length;
    }
    this._slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    this._slides[this.slideIndex - 1].classList.remove('fadeOutUp');
    this._slides[this.slideIndex - 1].classList.add('fadeInUp');
    this._slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlide() {
    this._slides[this.slideIndex - 1].classList.remove('fadeInUp');
    this._slides[this.slideIndex - 1].classList.add('fadeOutUp');
    setTimeout(() => {
      this.slideIndex++;
      this.showSlide();
    }, 700);
  }
}
