'use strict';


const Note = Submission.Note;


describe('Note', () => {

  it('debería exportar función `Note`', () => {

    Assert.equal(typeof Note, 'function');
  });

  it('debería crear un nuevo objeto cuando invocamos new Note()', () => {

    const note = new Note('renovar dni');
    Assert.equal(note.text, 'renovar dni');
    Assert.ok(note.createdAt instanceof Date);
    Assert.equal(note.completed, false);
  });

  it('debería retornar undefined cuando invocamos Note() sin "new"', () => {

    Assert.equal(Note('renovar dni'), undefined);
  });

});


describe('Note#toString', () => {

  it('debería convertir objeto a string', () => {

    const note = new Note('foo');
    const date = (new Date()).toDateString();
    Assert.equal(note.toString(), '[ ] | ' + date + ' | foo');
    note.completed = true;
    Assert.equal(note.toString(), '[X] | ' + date + ' | foo');
  });

});
