import Slider from './slider';

export default class MiniSlider extends Slider {
  bindTriggers() {
    if (this._container.querySelector('button')) {
      this._nextBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          this._container.insertBefore(this._slides[0], this._container.querySelector('button'));
          this.decorateSlides();
        });
      });

      this._prevBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          this._container.insertBefore(this._slides[this._slides.length - 3], this._slides[0]);
          this.decorateSlides();
        });
      });
    } else {
      this._nextBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          this._container.append(this._slides[0]);
          this.decorateSlides();
        });
      });

      this._prevBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          this._container.insertBefore(this._slides[this._slides.length - 1], this._slides[0]);
          this.decorateSlides();
        });
      });
    }
  }

  decorateSlides() {
    this._slides.forEach((slide) => {
      if (this.animated) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
      slide.classList.remove(this._activeClass);
    });
    if (this.animated) {
      this._slides[0].querySelector('.card__title').style.opacity = '1';
      this._slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
    this._slides[0].classList.add(this._activeClass);
  }

  render() {
    try {
      this._container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
      `;
      this.bindTriggers();
      this.decorateSlides();
    } catch (e) {}
  }
}
