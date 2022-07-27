export default class Form {
  constructor({
    formSelector = null,
    url = '',
    messageColor = 'black',
    emailInputSelector = null,
    phoneInputSelector = null,
  }) {
    this._form = document.querySelector(formSelector);
    this._url = url;
    this._emailInput = this._form.querySelector(emailInputSelector);
    this._phoneInput = this._form.querySelector(phoneInputSelector);
    this.messageColor = messageColor;
    this.messages = {
      loading: {
        text: 'Отправка...',
        image: 'assets/img/spinner.svg',
      },
      success: {
        text: 'Спасибо! Скоро мы с вами свяжемся',
        image: 'assets/img/success.png',
      },
      failure: {
        text: 'Что-то пошло не так. Проверьте соединение с интернетом либо повторите попытку позднее',
        image: 'assets/img/failure.png',
      },
    };
  }

  createStatusMessage() {
    this._message = document.createElement('div');
    this._message.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      max-width: 350px;
      font-size: 20px;
      color: ${this.messageColor};
      text-align: center;
    `;

    this._messageImg = document.createElement('img');
    this._messageImg.style.width = '60px';
    this._message.append(this._messageImg);

    this._messageText = document.createElement('div');
    this._message.append(this._messageText);
  }

  setMessage({ text, image }) {
    this._message.style.display = 'block';
    this._messageImg.src = image;
    this._messageText.textContent = text;
    this._form.classList.add('animated', 'fadeOutUp');
    setTimeout(() => {
      this._form.style.display = 'none';
      this._form.parentNode.append(this._message);
      this._message.classList.remove('fadeOutUp');
      this._message.classList.add('animated', 'fadeInUp');
    }, 700);
  }

  changeMessage({ text, image }) {
    this._message.classList.remove('fadeInUp');
    this._message.classList.add('fadeOutUp');
    setTimeout(() => {
      this._messageImg.src = image;
      this._messageText.textContent = text;
      this._message.classList.remove('fadeOutUp');
      this._message.classList.add('fadeInUp');
    }, 700);
  }

  removeMessage(time) {
    setTimeout(() => {
      this._message.classList.remove('fadeInUp');
      this._message.classList.add('fadeOutUp');
      setTimeout(() => {
        this._message.style.display = 'none';
        this._form.style.display = 'block';
        this._form.classList.remove('fadeOutUp');
        this._form.classList.add('fadeInUp');
      }, 700);
    }, time);
  }

  async postData(data) {
    const res = await fetch(this._url, {
      method: 'POST',
      body: data,
    });
    return res;
  }

  checkEmailInput() {
    this._emailInput.addEventListener('input', () => {
      this._emailInput.value = this._emailInput.value.replace(/[а-яё]/ig, '');
    });
  }

  onSubmit() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.setMessage(this.messages.loading);

      const formData = new FormData(this._form);
      this.postData(formData)
        .then((data) => {
          if (!data.ok) {
            this.postData.reject();
          }
          this.changeMessage(this.messages.success);
          this._form.reset();
        })
        .catch(() => {
          this.changeMessage(this.messages.failure);
        })
        .finally(() => {
          this.removeMessage(4000);
        });
    });
  }

  init() {
    this.onSubmit();
    this.createStatusMessage();
    this.checkEmailInput();
  }
}
