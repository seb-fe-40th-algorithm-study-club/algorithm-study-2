const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let sum = 0;

for (let i = 0; i < Number(input[0]); i++) {
  let num = Number(input[1][i]);
  sum += num;
}

console.log(sum);
