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
        this._slides[this.slideIndex - 1].classList.add('slideOutDown');
        setTimeout(() => {
          this._slides[this.slideIndex - 1].classList.remove('slideOutDown');
          this.slideIndex = 1;
          this.showSlide();
        }, 1000);
      });
    });
  }

  setAnimation() {
    this._slides.forEach((slide) => {
      slide.classList.add('animated', 'fadeInUp');
    });
  }

  showTimeBlock(blockSelector, slideNum, time) {
    const block = document.querySelector(blockSelector);
    block.style.display = 'none';
    this._nextBtns[slideNum - 2].addEventListener('click', () => {
      setTimeout(() => {
        block.style.display = 'block';
        block.classList.add('animated', 'slideInUp');
      }, time + 2000);
    });
    this._nextBtns[slideNum - 1].addEventListener('click', () => {
      block.style.display = 'none';
    });
    this._nextBtns[slideNum - 3].addEventListener('click', () => {
      block.style.display = 'none';
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

    this._slides[this.slideIndex - 1].classList.remove('slideOutUp');
    this._slides[this.slideIndex - 1].classList.add('slideInUp');
    this._slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlide() {
    this._slides[this.slideIndex - 1].classList.remove('slideInUp');
    this._slides[this.slideIndex - 1].classList.add('slideOutUp');
    setTimeout(() => {
      this.slideIndex++;
      this.showSlide();
    }, 1000);
  }
}
