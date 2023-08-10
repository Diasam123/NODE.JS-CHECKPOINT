// file-operations.js
const fs = require('fs');

// Write to file
fs.writeFile('welcome.txt', 'Hello Node', err => {
  if (err) throw err;
  console.log('File created successfully');
});

// Read from file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
