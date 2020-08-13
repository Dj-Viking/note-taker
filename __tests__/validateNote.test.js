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
validateNote = note => {
  if (letterRegex.test(note.title) && note.text === '') {
    return false;
  }
  if (letterRegex.test(note.text) && note.title === '') {
    return false;
  }
  
  let parsedTitle = validateNoteParsed(note.title);
  console.log(parsedTitle);
  let parsedText = validateNoteParsed(note.text);
  console.log(parsedText);

  if (!note.title || typeof note.title !== 'string' || note.title === '' || typeof parsedTitle === 'number') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string' || note.text === '' || typeof parsedText === 'number') {
    return false;
  }
  //if request passes these tests then return true
  return true;
}

validateNoteParsed = input => {
  console.log("\x1b[33m","checking input string", "\x1b[00m");
  //check incoming string
  console.log(input);
  //does it contain only letters
  console.log("\x1b[32m", "testing letter regex", "\x1b[00m");
  console.log(letterRegex.test(input));
  //expect(letterRegex.test(input)).toBe(false);
  if (letterRegex.test(input)) {
    console.log("\x1b[33m", "checking message contains only letters", "\x1b[00m");
    return name;
  } else {
    //keep testing
  }
  let splitStringArr = input.split('');
  console.log(splitStringArr);

  let parsedStringArr = [];
  for (let i = 0; i < splitStringArr.length; i++) {
    parsedStringArr.push(parseInt(splitStringArr[i], 10));
  }
  console.log("\x1b[33m", " checking parsed string arr", "\x1b[00m");
  console.log(parsedStringArr);//has NaN inside
  
  if (parsedStringArr.includes(NaN)) {
    console.log("\x1b[33m", "checking includes NaN", "\x1b[00m")
  } else {
    console.log("\x1b[33m", "string contains numbers", "\x1b[00m");
    if (parsedStringArr.includes(NaN)) {
    }
    return parseInt(parsedStringArr.join(''));
  }

  console.log(parsedStringArr.join(''));
  let noNaNArr = parsedStringArr.filter(index => !isNaN(index));
  console.log("\x1b[33m", "no NaN Array", "\x1b[00m");
  console.log(noNaNArr);
  console.log("\x1b[33m", "joined no NaN Array of numbers", "\x1b[00m");
  console.log(parseInt(noNaNArr.join('')));
  console.log("\x1b[31m", "this message has numbers!");

  //if it made it this far, the NaN's are taken out of a mixed string
  //returns the numbers inside the string by themselves
  return parseInt(noNaNArr.join(''), 10);
}

const incorrectNote = {
  title: "123kj2j3",
  text: "3jfk3j"
}

test('validates the note if its in the proper format on the POST request', () => {
  expect(validateNote(incorrectNote)).toBe(false);
})