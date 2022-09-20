const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();

const regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(regex, ' ');

console.log(result.length)
