let fs = require('fs');
let Navigator = require('./Navigator');

module.exports = () => {
  let input = fs.readFileSync('./day-1/input.txt').toString();

  // Part 1!
  let nav = new Navigator(input);
  console.log(nav.navigate());

  // Part 2!
  console.log(nav.findBasementPosition());

}