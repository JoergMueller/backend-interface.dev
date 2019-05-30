export class Utils {
  getRandomNumber(range: number) {
    return Math.floor(Math.random() * range);
  }

  getRandomChar() {
    var chars = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
    return chars.substr(this.getRandomNumber(62), 1);
  }

  getId(size: number) {
    var i = 0,
      str = '';
    for (i = 0; i < (size || 10); i += 1) {
      str += this.getRandomChar();
    }
    return str;
  }

  /**
   * @deprecated
   */
  getUUID() {
    var d = new Date().getTime(),
      uuid;
    uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }

  getToken() {
    var d = new Date().getTime(),
      token;
    token = 'xxxxxxxxxx'.replace(/[x]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return token;
  }

  camelize(str) {
    return this.capitalizeFirstLetter(
      str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => (idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()))
        .replace(/(\s|-|_|\.)+/g, '')
        .replace(/io$/gi, 'IO'),
    );
  }

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  Decode(str: string) {
    return String(str)
      .replace(/&amp;/g, '&')
      .replace(/\&lt;/g, '<')
      .replace(/\&gt;/g, '>')
      .replace(/\&quote;/g, '"');
  }
}
