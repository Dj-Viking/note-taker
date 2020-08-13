const express = require('express');
const path = require('path');
const router = require('express').Router();

router.use(express.static('public'));

router.get('/', (req, res) => {
  console.log("================");
  console.log("\x1b[33m", " GET request path for home page", "\x1b[00m");
  console.log(req.path);
});

router.get('/notes', (req, res) => {
  console.log("================");
  console.log("\x1b[33m", " GET request for notes page", "\x1b[00m");
  console.log(req.path);
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;