// https://www.codewars.com/kata/string-incrementer

let incrementString = str => {
  let response = '';
  let endDigit = '1';
  let digitIndex = str.search(/\d/);
  
  if (digitIndex > -1) {
    let slice = str.slice(digitIndex);
    endDigit = '' + (parseInt(slice, 10) + 1);
    let diff = slice.length - endDigit.length;
    if (diff > 0) {
      Array(diff).fill().forEach(() => {
        endDigit = '0' + endDigit;
      });
    }
    response = str.slice(0, digitIndex) + endDigit;
  } else {
    response = str + endDigit;
  }
  
  return response;
}