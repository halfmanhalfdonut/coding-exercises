// https://www.codewars.com/kata/alphabet-war/

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

const alphabetWar = combatants => {
  let leftScore = 0;
  let rightScore = 0;
  
  combatants.split('').forEach(letter => {
    if (leftStrength[letter]) leftScore += leftStrength[letter];
    if (rightStrength[letter]) rightScore += rightStrength[letter];
  });
  
  let text = "Let's fight again!";
  
  if (leftScore > rightScore) text = 'Left side wins!';
  if (rightScore > leftScore) text = 'Right side wins!';
  
  return text;
};