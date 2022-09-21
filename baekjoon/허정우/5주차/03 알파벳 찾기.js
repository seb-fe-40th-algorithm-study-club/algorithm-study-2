let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('');
let alphabet = [];
let answer = [];
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
  answer.push(-1);
}
for (let j = 0; j < inputs.length; j++) {
  for (let k = 0; k < alphabet.length; k++) {
    if (inputs[j] === alphabet[k]) {
      answer[k] = inputs.indexOf(inputs[j]);
    }
  }
}
console.log(answer.join(' ').trim());
