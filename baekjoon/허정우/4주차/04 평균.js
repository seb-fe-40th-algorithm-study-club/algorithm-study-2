const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const score = input[1].split(' ').map(Number);
const max = Math.max(...score);
let result = 0;

for (let i = 0; i < score.length; i++) {
  result += (score[i] / max) * 100;
}
console.log(result / input[0]);
