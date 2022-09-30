const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('').map(Number);
const result = input.sort((a, b) => b - a).join('');

console.log(Number(result))