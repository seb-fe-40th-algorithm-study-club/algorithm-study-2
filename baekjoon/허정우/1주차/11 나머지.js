const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

function solution() {
  let result = `${(a + b) % c} \n${((a % c) + (b % c)) % c} \n${
    (a * b) % c
  } \n${((a % c) * (b % c)) % c} \n`;
  console.log(result);
}
solution();
