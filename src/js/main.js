import MainSlider from './modules/slider/mainSlider';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({
    containerSelector: '.page',
    btnsSelector: '.next',
    resetBtnsSelector: '.sidecontrol > a',
  });
  mainSlider.render();
  mainSlider.showTimeBlock('.hanson', 3, 3000);

  const showupSlider = new MiniSlider({
    containerSelector: '.showup__content-slider',
    nextBtnSelector: '.showup__next',
    prevBtnSelector: '.showup__prev',
    activeClass: 'card-active',
    animated: true,
  });
  showupSlider.render();

  const modulesSlider = new MiniSlider({
    containerSelector: '.modules__content-slider',
    nextBtnSelector: '.modules__info-btns .slick-next',
    prevBtnSelector: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animated: true,
  });
  modulesSlider.render();

  const feedSlider = new MiniSlider({
    containerSelector: '.feed__slider',
    nextBtnSelector: '.feed__slider .slick-next',
    prevBtnSelector: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
  });
  feedSlider.render();

  const player = new VideoPlayer('.play', '.overlay');
  player.init();
});
