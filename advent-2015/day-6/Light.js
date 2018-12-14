class Light {
  constructor(input) {
    this.input = input.split('\n');
  }

  getInstructions(line) {
    let instructions = line.match(/(toggle|turn off|turn on)\s(\d*),(\d*)\sthrough\s(\d*),(\d*)/);
    
    return [
      instructions[1],
      Math.min(instructions[2], instructions[4]),
      Math.max(instructions[2], instructions[4]),
      Math.min(instructions[3], instructions[5]),
      Math.max(instructions[3], instructions[5])
    ]
  };

  handleInstructions(grid, [ action, startX, endX, startY, endY ]) {
    for (let i = startX; i <= endX; i++) {
      if (grid[i] === undefined) {
        grid[i] = [];
      }

      for (let j = startY; j <= endY; j++) {
        if (grid[i][j] === undefined) {
          grid[i][j] = false;
        }

        if (action.indexOf('toggle') > -1) {
          grid[i][j] = !grid[i][j];
        } else if (action.indexOf('on') > -1) {
          grid[i][j] = true;
        } else {
          grid[i][j] = false;
        }
      }
    }

    return grid;
  }

  countLitBulbs(total, row) {
    return total + row.filter(value => value).length;
  }

  getLitBulbs() {
    return this.input
      .map(this.getInstructions)
      .reduce(this.handleInstructions, [])
      .reduce(this.countLitBulbs, 0);
  }

  handleNewInstructions(grid, [ action, startX, endX, startY, endY ]) {
    for (let i = startX; i <= endX; i++) {
      if (grid[i] === undefined) {
        grid[i] = [];
      }

      for (let j = startY; j <= endY; j++) {
        if (grid[i][j] === undefined) {
          grid[i][j] = 0;
        }

        if (action.indexOf('toggle') > -1) {
          grid[i][j] += 2;
        } else if (action.indexOf('on') > -1) {
          grid[i][j] += 1;
        } else {
          grid[i][j] = Math.max(0, grid[i][j] - 1);
        }
      }
    }

    return grid;
  }

  getBrightness(total, row) {
    return total + row.reduce((memo, value) => {
      return memo + value;
    }, 0);
  }

  getTotalBrightness() {
    return this.input
      .map(this.getInstructions)
      .reduce(this.handleNewInstructions, [])
      .reduce(this.getBrightness, 0);
  }
}

module.exports = Light;