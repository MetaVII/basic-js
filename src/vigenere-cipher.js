class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new TypeError();
    }
    let ret = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j >= key.length) {
        j = 0;
      }
      const charCode = message[i].toUpperCase().charCodeAt(0);
      if (charCode < 65 || charCode > 90) {
        ret += message[i];
      } else {
        ret += String.fromCharCode(
          ((charCode - 65 + key[j].toUpperCase().charCodeAt() - 65) % 26) + 65
        );
        j++;
      }
    }
    if (!this.isDirect) {
      return ret
        .split("")
        .reverse()
        .join("");
    }
    return ret;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new TypeError();
    }
    let ret = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j >= key.length) {
        j = 0;
      }
      const charCode = message[i].charCodeAt(0);
      if (charCode < 65 || charCode > 90) {
        ret += message[i];
      } else {
        ret += String.fromCharCode(
          ((charCode - 65 - (key[j].toUpperCase().charCodeAt(0) - 65) + 26) %
            26) +
            65
        );
        j++;
      }
    }
    if (!this.isDirect) {
      return ret
        .split("")
        .reverse()
        .join("");
    }
    return ret;
  }
}

module.exports = VigenereCipheringMachine;
