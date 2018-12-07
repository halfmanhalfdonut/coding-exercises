// https://www.codewars.com/kata/piano-kata-part-1/

let notes = [ 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#' ];
let keys = [];

for (let i = 0; i < 88; i++) {
  let noteIndex = i % 12;
  keys[i] = notes[noteIndex].indexOf('#') === -1 ? 'white' : 'black';
}

function blackOrWhiteKey(keyPressCount) {
  return keys[(keyPressCount - 1) % 88];
}