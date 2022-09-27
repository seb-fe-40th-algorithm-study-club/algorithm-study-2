const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);
input.shift();
let result = '';
input.sort((a, b) => a - b).forEach(num => (result += `${num}\n`));
console.log(result)