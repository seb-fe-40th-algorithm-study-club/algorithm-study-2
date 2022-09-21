let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].trim().split(' ').map(Number);

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(`${min} ${max}`);
