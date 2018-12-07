let fs = require('fs');
let Wrapper = require('./Wrapper');

module.exports = () => {
  let input = fs.readFileSync('./day-2/input.txt').toString();

  // Part 1!
  let wrapper = new Wrapper(input);
  console.log(wrapper.getTotalPaper());

  // Part 2!
  console.log(wrapper.getRibbon());
}
