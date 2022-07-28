export default class Download {
  constructor(triggerSelector) {
    this._triggers = document.querySelectorAll(triggerSelector);
    this.path = 'assets/img/Bitmap.jpg';
  }

  // eslint-disable-next-line class-methods-use-this
  download(path, evt) {
    evt.preventDefault();
    const link = document.createElement('a');
    link.setAttribute('href', path);
    link.setAttribute('download', 'почти пдф');
    link.style.display = 'none';
    document.body.append(link);
    link.click();
    link.remove();
  }

  bindTriggers() {
    this._triggers.forEach((trigger) => {
      trigger.style.cursour = 'pointer';
      trigger.addEventListener('click', (evt) => {
        this.download(this.path, evt);
      });
    });
  }

  init() {
    this.bindTriggers();
  }
}
