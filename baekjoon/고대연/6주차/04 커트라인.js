let input = require('fs').readFileSync('../input.txt').toString().split('\n');
console.log(input[1].split(" ").sort((a, b) => b-a)[input[0].split(" ")[1]-1]);