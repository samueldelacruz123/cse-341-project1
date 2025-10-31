const express = require('express');
const app = express();

const port = process.env.port || 3000;

// Routes
app.use('/', require('./routes'));

app.listen(port, () => {console.log(`Server is running on port: http://localhost:${port}`)}); 