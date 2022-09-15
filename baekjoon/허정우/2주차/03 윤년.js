const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number);

let result = '';

input.forEach(el => {
  if (el >= 90) result = 'A';
  else if (el >= 80) result = 'B';
  else if (el >= 70) result = 'C';
  else if (el >= 60) result = 'D';
  else result = 'F'
})

console.log(result);