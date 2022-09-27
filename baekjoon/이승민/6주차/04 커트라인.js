const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const func = (idx) => {
    return input[idx].split(' ').map(Number)
}

const student = func(0)[0];
const winner = func(0)[1];
const scores = func(1).sort((a, b) => a-b);
console.log(scores[student-winner]);