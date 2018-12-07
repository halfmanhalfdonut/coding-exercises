class Navigator {
  constructor(directions) {
    this.directions = directions;
  }

  navigate() {
    let up = this.directions.replace(/\)/g, '').length;
    let down = this.directions.replace(/\(/g, '').length;

    return up - down;
  }

  findBasementPosition() {
    let floor = 0;
    let tally = 0;
    let position;

    for (let i = 0; i < this.directions.length; i++) {
      let char = this.directions[i];
      if (char === '(') {
        tally++;
      } else if (char === ')') {
        tally--;
      }

      if (tally === -1) {
        position = i + 1;
        break;
      }
    }

    return position;
  }
}

module.exports = Navigator;