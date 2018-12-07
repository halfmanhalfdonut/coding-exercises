// https://www.codewars.com/kata/alphabet-war-airstrike-letters-massacre

const leftStrength = {
  w: 4,
  p: 3,
  b: 2,
  s: 1
};

const rightStrength = {
  m: 4,
  q: 3,
  d: 2,
  z: 1
};

const alphabetWar = fight => {
  let leftScore = 0;
  let rightScore = 0;
  
  let letterList = fight.split('');
  let max = letterList.length - 1;
  
  letterList.forEach((letter, i) => {
    let isBombed = false;
    
    if (letterList[i - 1] && letterList[i - 1] === '*') isBombed = true;
    if (letterList[i + 1] && letterList[i + 1] === '*') isBombed = true;
    
    if (!isBombed) {
      if (leftStrength[letter]) leftScore += leftStrength[letter];
      if (rightStrength[letter]) rightScore += rightStrength[letter];
    }
    
  });
  
  let text = "Let's fight again!";
  
  if (leftScore > rightScore) text = "Left side wins!";
  if (rightScore > leftScore) text = "Right side wins!";
  
  return text;
};