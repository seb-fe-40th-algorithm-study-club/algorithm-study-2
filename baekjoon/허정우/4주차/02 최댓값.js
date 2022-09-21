const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = input.map(Number);

const max = Math.max(...num);
const maxIdx = num.indexOf(max) + 1;

console.log(`${max}\n${maxIdx}`);
