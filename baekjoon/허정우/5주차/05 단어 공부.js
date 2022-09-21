const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().toUpperCase().trim();

const obj = {};

function solution(str) {
  for (let char of input) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }

  let max = Math.max.apply(null, Object.values(obj));
  let maxChar = '';
  let cnt = 0;

  for (let char in obj) {
    if (obj[char] === max) {
      maxChar = char;
      cnt++;
    }
    if (cnt > 1) {
      console.log('?');
      return;
    }
  }
  console.log(maxChar);
}

solution(input);
