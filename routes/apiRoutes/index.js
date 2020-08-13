const router = require('express').Router();

const notesRoutes = require('../apiRoutes/notesRoutes.js');

router.use(notesRoutes);

module.exports = router;