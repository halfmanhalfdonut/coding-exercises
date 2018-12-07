// https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka

let sumDigPow = (a, b) => {
  let list = [];
  
  for (let i = a; i <= b; i++) {
    let s = i.toString();
    let sum = 0;
    let split = s.split('');
    for (let j = 0; j < split.length; j++) {
      sum += Math.pow(split[j], j + 1);
    }
    if (sum === i) {
      list.push(i);
    }
  }
  
  return list;
}