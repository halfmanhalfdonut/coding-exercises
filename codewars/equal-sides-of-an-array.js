// https://www.codewars.com/kata/equal-sides-of-an-array/

const findEvenIndex = list => {
  let index = -1;

  for (let i = 0; i < list.length; i++) {
    if (list.slice(0, i).reduce((a, b) => a + b, 0) === list.slice(i + 1).reduce((a, b) => a + b, 0)) {
      index = i;
    }
  }
  
  return index;
};