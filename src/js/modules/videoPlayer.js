export default class VideoPlayer {
  constructor(triggersSelector, overlaySelector) {
    this._triggers = document.querySelectorAll(triggersSelector);
    this._overlay = document.querySelector(overlaySelector);
    this._overlayClass = overlaySelector.slice(1);
    this._close = this._overlay.querySelector('.close');
  }

  init() {
    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // const firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this._triggers.forEach((trigger) => {
      const path = trigger.getAttribute('data-url');
      trigger.addEventListener('click', () => this.openPlayer(path));
    });
    this._close.addEventListener('click', () => this.closePlayer());

    window.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(this._overlayClass)) {
        this.closePlayer();
      }
    });
  }

  renderPlayer(url) {
    this._player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      playerVars: { autoplay: 1 },

    });
  }

  openPlayer(url) {
    if (document.querySelector('iframe#frame')) {
      this._overlay.style.display = 'flex';
      this._player.loadVideoById(url);
      this._player.playVideo();
    } else {
      this._overlay.style.display = 'flex';
      this.renderPlayer(url);
    }
  }

  closePlayer() {
    this._overlay.style.display = 'none';
    this._player.stopVideo();
  }
}
