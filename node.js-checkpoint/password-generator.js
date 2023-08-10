// password-generator.js
const passwordGenerator = require('generate-password');

const generatedPassword = passwordGenerator.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
});

console.log('Generated Password:', generatedPassword);
