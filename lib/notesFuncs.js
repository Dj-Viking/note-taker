const fs = require('fs');
const path = require('path');

createNewNote = (body, notesArray) => {
  console.log("================");
  console.log("\x1b[33m", "creating new note body object log", "\x1b[00m");
  console.log(body);
  const note = body;

  notesArray.push(note);
  console.log("================");
  console.log("\x1b[33m", "writing file to this path", "\x1b[00m");
  console.log(path.join(__dirname, '../db/db.json'));
  fs.writeFileSync(
    path.join(__dirname, '../data/data.json')
    ,
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  console.log("================");
  console.log("\x1b[33m", "note that we are adding", "\x1b[00m");
  console.log(note);
  console.log("================");
  console.log("\x1b[33m", "newly made notesArray", "\x1b[00m");
  console.log(notesArray);
  return note;
}

