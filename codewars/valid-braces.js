// https://www.codewars.com/kata/valid-braces/

const tokens = {
  '[': ']',
  '(': ')',
  '{': '}'
};

const validBraces = braces => {
  let remainder = [];
  
  for (let i = 0; i < braces.length; i++) {
    let token = braces[i];
    let matchingToken = tokens[token];
    
    if (matchingToken) {
      remainder.push(matchingToken);
    } else {
      if (token !== remainder.pop()) {
        return false;
      }
    }
  }
  
  return remainder.length === 0;
};