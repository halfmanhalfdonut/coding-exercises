// https://www.codewars.com/kata/persistent-bugger

function persistence(num) {
  let split = String(num).split('');
  let times = 0;
  
  while (split.length > 1) {
    let value = split.reduce((memo, val) => memo * parseInt(val, 10), 1);
    split = String(value).split('');
    times++;
  }
  
  return times;
}