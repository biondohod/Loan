import Slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new Slider('.page', '.next', '.sidecontrol > a', 1);
  mainSlider.render();
});
