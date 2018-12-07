let fs = require('fs');
let Santa = require('./Santa');

module.exports = () => {
  let input = fs.readFileSync('./day-3/input.txt').toString();

  // Part 1!
  let santa = new Santa(input);
  console.log(santa.getVisitedHouses());

  // Part 2!
  console.log(santa.getVisitsWithRobot());
}
