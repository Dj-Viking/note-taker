const router = require('express').Router();

//functions import

//db import
const { notes } = require('../../db/db.json');

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
     /**if (validate body === false) {
      * res.status(400).send('note is not formatted correctly.')
      * console.log("================");
      * console.log("\x1b[31m", "POST request status code", "\x1b[00m");
      * console.log(res.statusCode);
      
      * } else {
      * console.log("\x1b[31m", "POST request status code", "\x1b[00m");
      * console.log(res.statusCode);
      * console.log("================");
      * console.log("\x1b[33m", "creating a new id for post request to add an animal", "\x1b[00m");
      * req.body.id = notes.length.toString();
      * const note = create new note(req.body, notes);
      * }
      * 
      */
     //res.json(note);
});

module.exports = router;



