const fs = require('fs');
const path = require('path');
const letterRegex = /^[a-zA-Z]+$/;

findById = (id, notesArray) => {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

filterOutId = (id, notesArray) => {
  // for (let i = 0; i < notesArray.length; i++) {
  //   if (id === notesArray[i].id) {
  //     notesArray.splice(i, 1);
  //     for (let i = 0; i < notesArray.length; i++) {
  //       notesArray[i].id = i.toString()
  //     }
  //     fs.writeFileSync(
  //       path.join(__dirname, '../data/data.json')
  //       ,
  //       JSON.stringify({ notes: notesArray }, null, 2)
  //     )     
  //     return notesArray;
  //   }
  // }
  const filtered = notesArray.filter(note => note.id !== id);
  //console.table(filtered);
  if (filtered) {
    for (let i = 0; i < filtered.length; i++) {
      filtered[i].id = i.toString();
    }
    //console.log("file write here");
    fs.writeFileSync(
      path.join(__dirname, '../data/data.json')
        ,
      JSON.stringify({ notes: filtered }, null, 2)
    )
    //console.log("array passed in displayed after write")
    //console.table(notesArray);
    return filtered;
  }
}

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

validateNote = note => {
  // if (letterRegex.test(note.title) && note.text === '') {
  //   return false;
  // }
  // if (letterRegex.test(note.text) && note.title === '') {
  //   return false;
  // }
  
  // let parsedTitle = validateNoteParsed(note.title);
  // console.log(parsedTitle);
  // let parsedText = validateNoteParsed(note.text);
  // console.log(parsedText);

  if (!note.title || typeof note.title !== 'string' || note.title === '' /*|| typeof parsedTitle === 'number'*/) {
    return false;
  }
  if (!note.text || typeof note.text !== 'string' || note.text === '' /*|| typeof parsedText === 'number'*/) {
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
    return input;
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

module.exports = {
  validateNote,
  validateNoteParsed,
  createNewNote,
  findById,
  filterOutId
}

