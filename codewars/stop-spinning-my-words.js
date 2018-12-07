// https://www.codewars.com/kata/stop-gninnips-my-sdrow

const spinWords = input => {
  let split = input.split(' ');
  let result = [];
  
  split.forEach(word => {
    if (word.length > 4) {
      result.push(word.split('').reverse().join(''));
    } else {
      result.push(word);
    }
  });
  
  return result.join(' ');
};