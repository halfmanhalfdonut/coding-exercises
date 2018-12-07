// https://www.codewars.com/kata/math-issues/

Math.round = function(number) {
  return (number % 1) >= 0.5 ? ~~number + 1 : ~~number;
};

Math.ceil = function(number) {
  return (number % 1) > 0 ? ~~number + 1 : number;
};

Math.floor = function(number) {
  return ~~number;
};