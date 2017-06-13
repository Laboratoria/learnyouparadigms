const noteToString = (note) => [
  '[' + (note.completed ? 'X' : ' ') + ']',
  ' | ' + note.createdAt.toDateString(),
  ' | ' + note.text
].join('');


const notesToString = (notes) => notes.map(noteToString).join('\n');


const notes = [
  {text: 'hola', createdAt: new Date()},
  {text: 'mundo', createdAt: new Date()}
];

console.log(notesToString(notes));

// [ ] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola

notes[0].completed = true;

console.log(notesToString(notes));

// [X] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola
