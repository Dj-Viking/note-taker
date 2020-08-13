const { notes } = require('../data/data.json');
const fs = require('fs');
const path = require('path');
const letterRegex = /^[a-zA-Z]+$/;


jest.mock('fs');


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

findById = (id, notesArray) => {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

test('checks if the note is found by the id', () => {
  expect(findById("0", mockNotesArr))
  .toEqual(
    {
      title: "do laundry",
      text: "just do the laundry", 
      id: "0"
    },
  );
});

filterOutId = (id, notesArray) => {
  const filtered = notesArray.filter(note =>  {
    return note.id !== id
  });
  return filtered;
}

test('checks if the note is deleted from the array', () => {
  
  let deletedNoteArr = filterOutId("0", mockNotesArr);

  expect(deletedNoteArr)
  .toEqual(
    [
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
    ]
  );
});

