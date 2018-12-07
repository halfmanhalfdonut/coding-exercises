// https://www.codewars.com/kata/alphabet-wars-reinforces-massacre

const strike = (field, bombs) => {
  let f = field.split('');
  
  bombs.split('').forEach((bomb, i) => {
    if (bomb === '*') {
      if (f[i - 1]) f[i - 1] = '_';
      if (f[i]) f[i] = '_';
      if (f[i + 1]) f[i + 1] = '_';
    }
  });
  
  return f.join('');
};

const sendBackup = (index, reinforcements) => {
  let backup = '_';
  
  for (let i = 0; i < reinforcements.length; i++) {
    let str = reinforcements[i];
    if (str[index] !== '_') {
      backup = str[index];
      
      let reinforcement = str.split('');
      reinforcement[index] = '_';
      reinforcements[i] = reinforcement.join('');
      
      break;
    }
  }
  
  return backup;
};

const replenish = (field, reinforcements) => {
  let f = field.split('');
  
  field.split('').forEach((letter, i) => {
    if (letter === '_') {
      f[i] = sendBackup(i, reinforcements);
    }
  });
  
  return f.join('');
};

const alphabetWar = (reinforcements, strikes) => {
  let field = reinforcements.shift();
  
  strikes.forEach(bombs => {
    field = strike(field, bombs);
    field = replenish(field, reinforcements);
  });
  
  return field;
};