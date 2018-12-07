 // https://www.codewars.com/kata/chords/

 const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function chords(root) {
  let i = notes.indexOf(root);
  let seventh = (i + 7) % 12;
  let majorChord = [ root, notes[(i + 4) % 12], notes[seventh]];
  let minorChord = [ root, notes[(i + 3) % 12], notes[seventh]];
  return [majorChord, minorChord];
}