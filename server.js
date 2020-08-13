const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const apiRoutes = require('./routes/apiRoutes/');
const htmlRoutes = require('./routes/htmlRoutes/');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log("\x1b[32m", `API server now on port 3000!`, "\x1b[00m")
})
