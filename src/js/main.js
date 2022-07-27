import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new Slider('.page', '.next', '.sidecontrol > a', 1);
  mainSlider.render();
  mainSlider.showTimeBlock('.hanson', 3, 3000);

  const player = new VideoPlayer('.play', '.overlay');
  player.init();
});
