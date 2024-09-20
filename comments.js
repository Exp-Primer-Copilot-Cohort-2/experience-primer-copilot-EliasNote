// Create web server
// Create a new web server using the express library
const express = require('express');
const app = express();

// Create a new web server using the express library
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Run the server
// Run the server using the command node comments.js
// Open your browser and visit http://localhost:3000 to see the output Hello World