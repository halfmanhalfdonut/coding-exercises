// https://www.codewars.com/kata/simple-assembler-interpreter

const simple_assembler = instructions => {
  let registry = {};
  
  for (let i = 0, len = instructions.length; i < len; i++) {
    let [ fn, x, y ] = instructions[i].split(' ');
    let tmp = fns[fn].apply(null, [registry, x, y, i]);
    
    if (fn === 'jnz') {
      i = tmp;
    }
  }
  
  return registry;
};

const fns = {
  mov: (registry, x, y) => {
    let val = parseInt(y, 10);
    registry[x] = isNaN(val) ? registry[y] : val;
  },
  inc: (registry, x) => registry[x]++,
  dec: (registry, x) => registry[x]--,
  jnz: (registry, x, y, i) => {
    let jump = i;
    
    if (registry[x] !== 0) {
      let val = parseInt(y, 10);
      jump = i - 1 + val; // Need to sub 1 because of the wacky daddy loop that auto-increments
    }
    
    return jump;
  }
};