export default class ShowMoreInfo {
  constructor(triggerSelector) {
    this._triggers = document.querySelectorAll(triggerSelector);
  }

  bindTrigger() {
    this._triggers.forEach((trigger) => {
      const message = trigger.nextElementSibling;
      message.classList.add('animated');
      trigger.addEventListener('click', () => {
        if (!message.classList.contains('flipInX')) {
          message.style.display = 'block';
          message.classList.remove('flipOutX');
          message.classList.add('flipInX');
          trigger.style.outline = '2px solid black';
        } else {
          message.classList.remove('flipInX');
          message.classList.add('flipOutX');
          setTimeout(() => {
            message.style.display = 'none';
            trigger.style.outline = '';
          }, 700);
        }
      });
    });
  }
}
