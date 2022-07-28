import Slider from './slider';

const ANIMATION_DURATION = 600;

export default class MainSlider extends Slider {
  render() {
    try {
      this.setAnimation();
      this.showSlide();
      this._btns.forEach((btn) => {
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
    } catch (e) {}
  }

  setAnimation() {
    this._slides.forEach((slide) => {
      slide.classList.add('animated', 'slideInUp', 'animate07');
    });
  }

  showTimeBlock(blockSelector, slideNum, time) {
    try {
      const block = document.querySelector(blockSelector);
      block.style.display = 'none';
      this._btns[slideNum - 2].addEventListener('click', () => {
        setTimeout(() => {
          block.style.display = 'block';
          block.classList.add('animated', 'slideInUp');
        }, time + (ANIMATION_DURATION * 2));
      });
      this._btns[slideNum - 1].addEventListener('click', () => {
        block.style.display = 'none';
      });
      this._btns[slideNum - 3].addEventListener('click', () => {
        block.style.display = 'none';
      });
    } catch (e) {}
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
