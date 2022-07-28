export default class VideoPlayer {
  constructor(triggersSelector, overlaySelector, unactiveClass) {
    this._triggers = document.querySelectorAll(triggersSelector);
    this._unactiveClass = unactiveClass;
    this._overlay = document.querySelector(overlaySelector);
    this._overlayClass = overlaySelector.slice(1);
    this._close = this._overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  init() {
    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // const firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this._triggers.forEach((trigger) => {
      const path = trigger.getAttribute('data-url');
      if (!trigger.querySelector('.play__circle').classList.contains(this._unactiveClass)) {
        trigger.addEventListener('click', () => {
          this.openPlayer(path);
          this.activeBtn = trigger;
        });
      }
    });
    this._close.addEventListener('click', () => this.closePlayer());

    window.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(this._overlayClass)) {
        this.closePlayer();
      }
    });
  }

  renderPlayer(url) {
    // eslint-disable-next-line no-undef
    this._player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      playerVars: { autoplay: 1 },
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    });
  }

  onPlayerStateChange(state) {
    if (state.data === 0) {
      try {
        const unactiveElem = this.activeBtn.parentNode.nextElementSibling;
        const unactiveBtnImg = unactiveElem.querySelector('.play__circle');
        if (unactiveBtnImg.classList.contains('closed')) {
          unactiveElem.style.filter = 'none';
          unactiveElem.style.opacity = 1;

          const btnImg = this.activeBtn.querySelector('svg').cloneNode(true);
          unactiveBtnImg.classList.remove('closed');
          unactiveBtnImg.querySelector('svg').remove();
          unactiveBtnImg.append(btnImg);

          const btnText = this.activeBtn.querySelector('.play__text').textContent;
          const unactiveBtnText = unactiveElem.querySelector('.play__text');
          unactiveBtnText.classList.remove('attention');
          unactiveBtnText.textContent = btnText;

          const unactiveBtn = unactiveElem.querySelector('.play');
          unactiveBtn.addEventListener('click', () => {
            const path = unactiveBtn.getAttribute('data-url');
            this.openPlayer(path);
          });
        }
      } catch (e) {}
    }
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
