// https://www.codewars.com/kata/reverse-words/

let reverseWords = str => {
  return str.split(' ').reduce((memo, word) => {
    memo.push(word.split('').reverse().join(''));
    return memo;
  }, []).join(' ');
}