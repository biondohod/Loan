import Slider from './slider';

const ANIMATION_DURATION = 700;
export default class MainSlider extends Slider {
  // eslint-disable-next-line no-useless-constructor
  constructor(pageSelector, nextBtnSelector) {
    super(pageSelector, nextBtnSelector);
  }

  render() {
    this.setAnimation();
    this.showSlide();
    this._nextBtns.forEach((btn) => {
      btn.addEventListener('click', () => this.plusSlide());
    });
    this._resetBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (this.slideIndex !== 1) {
          this._slides[this.slideIndex - 1].classList.remove('slideInUp');
          this._slides[this.slideIndex - 1].classList.add('slideOutDown');
          setTimeout(() => {
            this._slides[this.slideIndex - 1].classList.remove('slideOutDown');
            this.slideIndex = 1;
            this.showSlide();
          }, ANIMATION_DURATION);
        }
      });
    });
  }

  setAnimation() {
    this._slides.forEach((slide) => {
      slide.classList.add('animated', 'slideInUp', 'animate07');
    });
  }

  showTimeBlock(blockSelector, slideNum, time) {
    const block = document.querySelector(blockSelector);
    block.style.display = 'none';
    this._nextBtns[slideNum - 2].addEventListener('click', () => {
      setTimeout(() => {
        block.style.display = 'block';
        block.classList.add('animated', 'slideInUp');
      }, time + (ANIMATION_DURATION * 2));
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
    }, ANIMATION_DURATION);
  }
}
