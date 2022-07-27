import Form from './form';

export default class JoinForm extends Form {
  addPhoneMask() {
    this._phoneInput.addEventListener('input', () => {
      const matrix = '+1 (___) ___-____';
      let i = 0;
      const def = matrix.replace(/\D/g, '');

      let val = this._phoneInput.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this._phoneInput.value = matrix.replace(/./g, (a) => {
        if (/[_\d]/.test(a) && i < val.length) {
          return val[i++];
        } if (i >= val.length) {
          return '';
        }
        return a;
      });

      if (val[0] !== '1') {
        this._phoneInput.value = this._phoneInput.value.replace(this._phoneInput.value[1], '1');
      }
    });
    this._phoneInput.addEventListener('blur', () => {
      if (this._phoneInput.value.length === 2) {
        this._phoneInput.value = '';
      }
    });
  }
}
