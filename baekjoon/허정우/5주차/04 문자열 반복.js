const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let result = '';
  let crr = input[i].split(' ');
  let repeat = Number(crr[0]);
  let word = crr[1];

  for (let j = 0; j < crr[1].length; j++) {
    for (let k = 0; k < repeat; k++) {
      result += word[j];
    }
  }
  console.log(result);
}
