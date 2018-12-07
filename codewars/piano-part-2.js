// https://www.codewars.com/kata/piano-kata-part-2

let notes = [ 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#' ];
let keys = [];

for (let i = 0; i < 88; i++) {
  let noteIndex = i % 12;
  keys[i] = notes[noteIndex];
}

let whichNote = keyPressCount => keys[(keyPressCount - 1) % 88];