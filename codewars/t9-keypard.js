// https://www.codewars.com/kata/multi-tap-keypad-text-entry-on-an-old-mobile-phone

let numpad = [
  '1',
  'ABC2',
  'DEF3',
  'GHI4',
  'JKL5',
  'MNO6',
  'PQRS7',
  'TUV8',
  'WXYZ9',
  '*',
  ' 0',
  '#'
];

let presses = phrase => phrase.split('').reduce((memo, char) => {
  numpad.forEach(key => {
    let re = new RegExp(char, 'i');
    let index = key.search(re);
    if (index >= 0) memo += index + 1;
  });
  return memo;
}, 0);