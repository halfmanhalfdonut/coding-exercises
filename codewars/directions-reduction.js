// https://www.codewars.com/kata/directions-reduction

let map = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST'
};

let dirReduc = arr => {
  let changed = false;
  let reduced = [];
  let i = 0;
  
  if (arr.length > 1) {
    while (i < arr.length) {
      if (arr[i] !== map[arr[i + 1]]) {
        reduced.push(arr[i]);
        i++
      } else {
        changed = true;
        i += 2;
      }
    }
    
    if (changed) return dirReduc(reduced);
    else return reduced;
  } else {
    return arr;
  }
};