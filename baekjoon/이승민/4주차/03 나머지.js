const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map( el => Number(el) % 42);

const arr = [];
for(el of input){
    if(arr.indexOf(el) === -1){
        arr.push(el)
    }
}
console.log(arr.length)