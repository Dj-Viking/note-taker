const router = require('express').Router();
const fs = require('fs');
const path = require('path');

//functions import
const notesFuncs = require('../../lib/notesFuncs');

//db import
const { notes } = require('../../data/data.json');
const { findById } = require('../../lib/notesFuncs');

router.get('/notes', (req, res) => {
  console.log("================");
  console.log("\x1b[33m", " GET request query typed by the client", "\x1b[00m");
  console.log(req.query);
  console.log("================");
  console.log("\x1b[33m", "path searched by client", "\x1b[00m");
  console.log(req.path);
  console.log("================");
  console.log("\x1b[33m", "request headers", "\x1b[00m");
  console.log(req.headers);
  console.log("================");
  console.log("\x1b[33m", "request fresh", "\x1b[00m");
  console.log(req.statusCode);
  console.log("================");
  let results = notes;
  if (req.query) {
    //filter by query?
  }
  res.json(results);
});

router.post('/notes', (req, res) => {
  // req.body is where our incoming content will be
  console.log("================");
  console.log("\x1b[33m", "POST request sent by the client", "\x1b[00m");
  console.log(req.body);
  //if any data in req.body is incorrect, send 400 error back
  if (notesFuncs.validateNote(req.body) === false) {
    res.status(400).send('note is not formatted correctly.')
    console.log("================");
    console.log("\x1b[31m", "POST request status code", "\x1b[00m");
    console.log(res.statusCode);
  } else {
    console.log("\x1b[31m", "POST request status code", "\x1b[00m");
    console.log(res.statusCode);
    console.log("================");
    console.log("\x1b[33m", "creating a new id for post request to add a note", "\x1b[00m");
    req.body.id = notes.length.toString();
    const note = notesFuncs.createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete('/notes/:id', (req, res) => {
  const filteredArr = notesFuncs.filterOutId(req.params.id, notes);
  console.log("\x1b[31m", "DELETE request incoming", "\x1b[00m");
    console.log(res.statusCode);
    console.log("================");
    console.log("\x1b[31m", "writing new database after deleting an item", "\x1b[00m");
  if (filteredArr) {  
    fs.promises.writeFile(
        path.join(__dirname, '../../data/data.json')
        ,
        JSON.stringify({ notes: filteredArr }, null, 2)
      )
      .then(data => data.json())
      .catch(err => err);
  } else {
    res.sendStatus(404);
  }
})

module.exports = router;



