let MD5 = require('./MD5');

class Miner {
  constructor(input) {
    this.input = input;
  }

  getZeroes(input, x) {
    let i = 0;
    let isNotFound = true;
    let zeroes = ''.padStart(x, '0');

    while (isNotFound) {
      let hash = MD5(`${this.input}${i}`);
      
      if (hash.substr(0, x) === zeroes) {
        isNotFound = false;
      } else {
        i++;
      }
    }

    return i;
  }

  getFiveZeroes() {
    return this.getZeroes(this.input, 5);
  }

  getSixZeroes() {
    return this.getZeroes(this.input, 6);
  }
}

module.exports = Miner;