function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes() {
  this.data = [];
}

Notes.prototype.add = function (note) {
  if (!(note instanceof Note)) {
    throw new Error('Wrong type!');
  }

  this.data.unshift(note);
};

Notes.prototype.toString = function () {
  let str = '';
  for (let i = 0; i < this.data.length; i++) {
    if (i > 0) {
      str += '\n';
    }
    str += this.data[i].toString();
  }
  return str;
};


const note1 = new Note('hola');
const note2 = new Note('mundo');

const notes = new Notes();

notes.add(note1);
notes.add(note2);

console.log(notes.toString());

// [ ] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola

notes.data[0].completed = true;

console.log(notes.toString());

// [X] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola
