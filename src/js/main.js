import MainSlider from './modules/slider/mainSlider';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/videoPlayer';
import Difference from './modules/difference';
import Form from './modules/forms/form';
import JoinForm from './modules/forms/joinForm';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({
    containerSelector: '.page',
    btnsSelector: '.next',
    resetBtnsSelector: '.sidecontrol > a',
    start: 1,
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

  const oldEducation = new Difference('.officerold .officer__card-item', '.officerold .card__click');
  oldEducation.render();
  const newEducation = new Difference('.officernew .officer__card-item', '.officernew .card__click');
  newEducation.render();

  const joinForm = new JoinForm({
    formSelector: '.join__evolution .form',
    url: 'assets/question.php',
    messageColor: 'white',
    emailInputSelector: '[name="email"]',
    phoneInputSelector: '#phone',
  });
  joinForm.init();
  joinForm.addPhoneMask();
  const scheduleForm = new Form({
    formSelector: '.schedule__form .form',
    url: 'assets/question.php',
    messageColor: 'black',
    emailInputSelector: '[name="email"]',
  });
  scheduleForm.init();
});
