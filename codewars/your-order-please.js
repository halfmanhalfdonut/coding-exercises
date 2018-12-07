// https://www.codewars.com/kata/your-order-please/

let order = words => {
  let wordsList = words.split(' ');
  let orderList = [];
  
  words
    .replace(/[\D]/g, '')
    .split('')
    .forEach((pos, i) => {
      orderList[pos - 1] = wordsList[i];
    });
  
  return orderList.join(' ');
};