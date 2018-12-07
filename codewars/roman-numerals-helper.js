// https://www.codewars.com/kata/roman-numerals-helper

let map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

let toRoman = number => {
  let numeral = '';
  
  for (let i of Object.keys(map)) {
    let value = map[i];
    while (number >= value) {
      numeral += i;
      number -= value;
    }
  }
  
  return numeral;
};

let fromRoman = string => {
  let number = 0;
  let split = string.split('');
  let length = split.length;
  
  for (let i = 0; i < length; i++) {
    let current = map[split[i]];
    let next = map[split[i + 1]];
    
    if (next && next > current) {
      number += map[split[i] + split[i + 1]];
      i++;
    } else {
      number += current;
    }
  }
  
  return number;
};

let RomanNumerals = {
  toRoman: toRoman,
  fromRoman: fromRoman
};