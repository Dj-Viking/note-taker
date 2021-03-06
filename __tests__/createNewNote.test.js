const { notes } = require('../data/data.json');
const fs = require('fs');
const path = require('path');



//jest.mock('fs');


const mockNotesArr = [
  {
    title: "do laundry",
    text: "just do the laundry", 
    id: "0"
  },
  {
    title: "wash dishes",
    text: "wash all the dishes sparkly clean", 
    id: "1"
  },
  {
    title: "exercise",
    text: "run three miles", 
    id: "2"
  },
  {
    title: "code",
    text: "code a back end server using express.js", 
    id: "3"
  },
];

test('check if a note gets created', () => {

  const newNote = {
    title: "newest note",
    text: "here is the newest note",
  }


  createNewNote = (body, notesArray) => {
    // console.log("================");
    // console.log("\x1b[33m", "creating new note body object log", "\x1b[00m");
    // console.log(body);
    const note = body;

    notesArray.push(note);
    // console.log("================");
    // console.log("\x1b[33m", "writing file to this path", "\x1b[00m");
    // console.log(path.join(__dirname, '../db/db.json'));
    fs.writeFileSync(
      path.join(__dirname, '../data/data.json')
      ,
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    // console.log("================");
    // console.log("\x1b[33m", "note that we are adding", "\x1b[00m");
    // console.log(note);
    // console.log("================");
    // console.log("\x1b[33m", "newly made notesArray", "\x1b[00m");
    // console.log(notesArray);
    return note;
  }

  expect(createNewNote(newNote, mockNotesArr))
  .toEqual(
    {
      title: "newest note",
      text: "here is the newest note",
    }
  )
});
