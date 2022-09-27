const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);
const length = input.shift();
const sort = input.sort((a, b) => a-b);
for(let el of sort){
    console.log(el)
}