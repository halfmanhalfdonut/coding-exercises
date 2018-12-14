let fs = require('fs');
let Light = require('./Light');

module.exports = () => {
  let input = fs.readFileSync('./day-6/input.txt').toString();

  // Part 1!
  let light = new Light(input);
  console.log(light.getLitBulbs());

  // Part 2!
  console.log(light.getTotalBrightness());
}
