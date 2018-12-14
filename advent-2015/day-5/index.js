let fs = require('fs');
let Lang = require('./Lang');

module.exports = () => {
  let input = fs.readFileSync('./day-5/input.txt').toString();

  // Part 1!
  let lang = new Lang(input);
  console.log(lang.getNiceties());

  // Part 2!
  console.log(lang.getSecondNiceties());
}
