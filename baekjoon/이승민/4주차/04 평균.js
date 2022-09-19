const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const num = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const max = Math.max(...scores);
const newScores = scores.map( el => el/max*100 );
const avg = newScores.reduce((acc, cur) => acc + cur);

console.log(avg/num);