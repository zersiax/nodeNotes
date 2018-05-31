console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  try {
    var notesString = fs.readFileSync("data.json");
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
  }
  console.log(notes);

  fs.writeFileSync("data.json", JSON.stringify(notes));

};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
