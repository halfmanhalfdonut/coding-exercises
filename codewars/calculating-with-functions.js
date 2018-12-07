// https://www.codewars.com/kata/calculating-with-functions

let n = digit => op => op ? op(digit) : digit;

let zero = n(0);
let one = n(1);
let two = n(2);
let three = n(3);
let four = n(4);
let five = n(5);
let six = n(6);
let seven = n(7);
let eight = n(8);
let nine = n(9);

let plus = r => l => l + r;
let minus = r => l => l - r;
let times = r => l => l * r;
let dividedBy = r => l => l / r;