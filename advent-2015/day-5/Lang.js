class Lang {
  constructor(input) {
    this.input = input.split('\n');
  }

  hasThreeVowels(line) {
    return (line.match(/[aeiou]/ig) || []).length > 2;
  }

  hasDoubles(line) {
    return line.match(/([a-z])\1{1}/ig);
  }

  hasBaddies(line) {
    return line.match(/(ab|cd|pq|xy)/ig);
  }

  getNiceties() {
    return this.input.reduce((memo, line) => {
      if (this.hasThreeVowels(line) && this.hasDoubles(line) && !this.hasBaddies(line)) {
        memo++;
      }

      return memo;
    }, 0);
  }

  hasDoublesWithoutOverlap(line) {
    return line.match(/(..).*\1/);
  }

  hasRepeatingSkips(line) {
    return line.match(/(.).\1/);
  }

  getSecondNiceties() {
    return this.input.reduce((memo, line) => {
      if (this.hasDoublesWithoutOverlap(line) && this.hasRepeatingSkips(line)) {
        memo++;
      }

      return memo;
    }, 0);
  }
}

module.exports = Lang;