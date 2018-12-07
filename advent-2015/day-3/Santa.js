class Santa {

  constructor(input) {
    this.input = input;
  }

  // Part 1
  getVisitedHouses() {
    let x = 0;
    let y = 0;

    let houses = {
      '0,0': 1
    }

    return this.input.split('').reduce((memo, character) => {
      switch(character) {
        case '^': 
          y++;
          break;
        case '>':
          x++;
          break;
        case 'v':
          y--;
          break;
        case '<':
          x--;
          break;
      }

      let key = `${x},${y}`;

      if (!houses[key]) {
        memo++;
        houses[key] = 1;
      }

      return memo;
    }, 1);
  }

  // Part 2
  getVisitsWithRobot() {
    let santa = {
      x: 0, y: 0
    };
    
    let robot = {
      x: 0, y: 0
    };

    let houses = {
      '0,0': 1
    }

    return this.input.split('').reduce((memo, character, index) => {
      let ref = santa;
      if (index % 2 === 0) {
        ref = robot;
      }

      let { x , y } = ref;

      switch(character) {
        case '^': 
          y++;
          break;
        case '>':
          x++;
          break;
        case 'v':
          y--;
          break;
        case '<':
          x--;
          break;
      }


      ref = { x, y };
      let key = `${x},${y}`;

      if (!houses[key]) {
        memo++;
        houses[key] = 1;
      }

      return memo;
    }, 1);
  }
}

module.exports = Santa;