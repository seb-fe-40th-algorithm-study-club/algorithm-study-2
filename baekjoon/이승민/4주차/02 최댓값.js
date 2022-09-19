const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

let max = input[0], idx=0;
for(let i = 1; i<9; i++){
    if(input[i] > max){
        max = input[i];
        idx = i;
    }
}

console.log(max);
console.log(idx+1);