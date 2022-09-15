const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

console.log(num - 543);
