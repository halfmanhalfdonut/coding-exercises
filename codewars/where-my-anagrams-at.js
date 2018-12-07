// https://www.codewars.com/kata/where-my-anagrams-at/

let getLetterCount = (word) => {
  return word.toLowerCase().split('').reduce((memo, letter) => {
    if (!memo.includes(letter)) memo.push(letter);
    return memo;
  }, []).sort().reduce((memo, c) => {
    memo[c] = (word.match(new RegExp(c, 'ig')) || []).length;
    return memo;
  }, {});
};

let anagrams = (word, list) => {
  let counts = getLetterCount(word);
  
  return list.reduce((memo, val) => {
    if (val.length === word.length) {
      let letterCounts = getLetterCount(val);
      let good = true;
      for (let letter in letterCounts) {
        if (letterCounts[letter] !== counts[letter]) {
          good = false;
          break;
        }
      }
      if (good) memo.push(val);
    }
    return memo;
  }, []);
};