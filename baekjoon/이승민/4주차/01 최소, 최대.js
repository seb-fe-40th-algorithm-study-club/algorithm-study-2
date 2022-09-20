const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
const length = Number(input[0]);

let max = arr[0], min = arr[0];
for(let i = 1; i<length; i++){
    if(arr[i] > max){
        max = arr[i]
    }

    if(arr[i] < min){
        min = arr[i]
    }
}

console.log(`${min} ${max}`)