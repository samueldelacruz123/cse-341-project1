const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.port || 3000;

// Routes
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`);
    });
  }
});