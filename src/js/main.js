import MainSlider from './modules/slider/mainSlider';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({ pageSelector: '.page', nextBtnsSelector: '.next', resetBtnsSelector: '.sidecontrol > a' });
  mainSlider.render();
  mainSlider.showTimeBlock('.hanson', 3, 3000);

  const player = new VideoPlayer('.play', '.overlay');
  player.init();
});
