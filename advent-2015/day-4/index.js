let Miner = require('./Miner');

module.exports = () => {
  let input = 'iwrupvqb';

  // Part 1!
  let miner = new Miner(input);
  console.log(miner.getFiveZeroes());

  // Part 2!
  console.log(miner.getSixZeroes());
}
