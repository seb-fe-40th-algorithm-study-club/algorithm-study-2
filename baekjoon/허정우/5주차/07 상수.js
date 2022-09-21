const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const num = input.split('').reverse().join('').split(' ').map(Number);

if (num[0] > num[1]) console.log(num[0]);
else console.log(num[1]);
