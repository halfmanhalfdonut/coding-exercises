// CHECK THE DAYS, MATEY : https://adventofcode.com/2015
let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which day do you want to run?', day => {
  require(`./day-${day}`)();
  rl.close();
});
