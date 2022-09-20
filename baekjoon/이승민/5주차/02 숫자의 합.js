const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const numbers = input[1].split('').map(Number);

console.log(numbers.reduce((acc, cur) => acc + cur))