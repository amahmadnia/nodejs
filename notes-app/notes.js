const chalk = require("chalk");
const fs = require("fs");
const { ENGINE_METHOD_PKEY_METHS } = require("constants");
const { inverse } = require("chalk");
const { notStrictEqual } = require("assert");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};


  debugger;

const removeNote = (title) => {
const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  saveNotes(notesToKeep);
  notes.length > notesToKeep.length
    ? console.log(chalk.inverse.green("Note deleted"))
    : console.log(chalk.inverse.red("No such note exists"));
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgYellow("Your Notes: "));
  notes.forEach((note) => {
    console.log(chalk.inverse(`${note.title} - ${note.body}`));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.filter((note) => note.title === title);
  console.log(chalk.inverse(`${foundNote[0].title} - ${foundNote[0].body}`));
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
