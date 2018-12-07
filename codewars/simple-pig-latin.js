// https://www.codewars.com/kata/simple-pig-latin

const pigify = str => {
  let pigged = '';
  
  pigged = str.substring(1);
  pigged += str.substring(0, 1);
  pigged += 'ay';
  
  return pigged;
};

function pigIt(str) {
  let arr = str.split(' ');
  return arr.map(pigify).join(' ');
}